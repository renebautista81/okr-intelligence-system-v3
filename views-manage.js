// ── Manage OKRs ───────────────────────────────
function renderManage(container) {
  let data = DB.get();

  if (AppState.activeOkrId !== 'all') {
    data = JSON.parse(JSON.stringify(data));
    data.okrs = data.okrs.filter(o => o.id === AppState.activeOkrId);
  }

  // ── Build indented table rows ─────────────────
  const rows = [];
  data.okrs.forEach(okr => {
    const op = Calc.okrProgress(okr);
    rows.push(`<tr style="background:#f1f5f9">
      <td style="padding:11px 8px 11px 14px">
        <span style="font-size:10px;font-weight:800;letter-spacing:.04em;color:#fff;background:${okr.color};padding:3px 8px;border-radius:100px">OKR</span>
      </td>
      <td class="td-name" style="font-size:13.5px">${okr.name.substring(0, 70)}${okr.name.length > 70 ? '…' : ''}</td>
      <td><span style="font-size:11px;font-weight:700;color:${okr.color}">${okr.horizon}</span></td>
      <td style="font-size:12px">${okr.responsibleUnit}</td>
      <td><span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:100px;background:${Utils.priorityColor[okr.priority]}22;color:${Utils.priorityColor[okr.priority]}">${okr.priority}</span></td>
      <td><strong>${op.toFixed(0)}%</strong></td>
      <td><span class="tl-badge ${Calc.trafficLight(op)}"><span class="dot"></span>${Calc.trafficLightLabel(op)}</span></td>
      <td style="white-space:nowrap">
        <label class="btn btn-ghost btn-sm" style="cursor:pointer; color:#10b981" title="Importar Excel a este OKR">📥 Excel
            <input type="file" style="display:none" accept=".xlsx, .xls" onchange="importExcelToOkr(event, '${okr.id}')">
        </label>
        <button class="btn btn-ghost btn-sm" onclick="openOKREdit('${okr.id}')">✎ Editar</button>
        <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deleteOKR('${okr.id}')">✕</button>
      </td>
    </tr>`);

    okr.projectKRs.forEach(pkr => {
      const pp = Calc.pkrProgress(pkr);
      rows.push(`<tr style="background:#fff">
        <td style="padding:10px 8px 10px 30px;color:var(--text-4);font-size:13px;cursor:pointer" onclick="toggleManagePKR('${pkr.id}')" title="Colapsar/Expandir"><span id="chevron-${pkr.id}" style="display:inline-block;transition:transform 0.2s;font-size:10px;margin-right:4px">▼</span>↳
          <span style="font-size:9.5px;font-weight:800;letter-spacing:.04em;color:#6366f1;background:#eef2ff;padding:2px 7px;border-radius:100px;margin-left:4px">KR Estratégico</span>
        </td>
        <td class="td-name" style="font-size:12.5px">${pkr.name.substring(0, 60)}${pkr.name.length > 60 ? '…' : ''}</td>
        <td><span class="pkr-type-badge">${pkr.indicatorType}</span></td>
        <td style="font-size:12px">${Utils.findUser(data, pkr.responsibleId).name.split(' ')[0]}</td>
        <td style="font-size:12px">Peso: ${pkr.weightInOKR}%</td>
        <td><strong>${pp.toFixed(0)}%</strong></td>
        <td><span class="tl-badge ${Calc.trafficLight(pp)}"><span class="dot"></span>${Calc.trafficLightLabel(pp)}</span></td>
        <td style="white-space:nowrap">
          <button class="btn btn-ghost btn-sm" style="color:#0ea5e9" onclick="openSharePKR('${okr.id}','${pkr.id}')">🔗 Compartir</button>
          <button class="btn btn-ghost btn-sm" onclick="openPKREdit('${pkr.id}')">✎ Editar</button>
          <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deletePKR('${okr.id}','${pkr.id}')">✕</button>
        </td>
      </tr>`);

      pkr.tkrs.forEach(tkr => {
        const tp = Calc.tkrProgress(tkr);
        rows.push(`<tr style="background:#fafafa" class="child-of-${pkr.id}" ondragover="allowDropKA(event)" ondrop="dropKA(event, '${tkr.id}', null)">
          <td style="padding:9px 8px 9px 50px;color:var(--text-4);font-size:12px">↳
            <span style="font-size:9.5px;font-weight:800;letter-spacing:.04em;color:#10b981;background:#d1fae5;padding:2px 7px;border-radius:100px;margin-left:4px">KR Táctico</span>
          </td>
          <td class="td-name" style="font-size:12px">${tkr.name.substring(0, 58)}${tkr.name.length > 58 ? '…' : ''}</td>
          <td style="font-size:11px;color:var(--text-3)">${tkr.periodicity}</td>
          <td style="font-size:12px">${Utils.findUser(data, tkr.responsibleId).name.split(' ')[0]}</td>
          <td style="font-size:12px">Peso: ${tkr.weightInPKR}%</td>
          <td><strong>${tp.toFixed(0)}%</strong></td>
          <td><span class="tl-badge ${Calc.trafficLight(tp)}"><span class="dot"></span>${Calc.trafficLightLabel(tp)}</span></td>
          <td style="white-space:nowrap">
            <button class="btn btn-ghost btn-sm" onclick="openTKREdit('${pkr.id}','${tkr.id}')">✎ Editar</button>
            <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deleteTKR('${pkr.id}','${tkr.id}')">✕</button>
          </td>
        </tr>`);

        tkr.kas.forEach(ka => {
          const dot = Utils.statusColor[ka.status] || '#94a3b8';
          rows.push(`<tr style="background:#fff;cursor:grab" class="child-of-${pkr.id} ka-row" draggable="true" ondragstart="dragKA(event, '${tkr.id}', '${ka.id}')" ondragover="allowDropKA(event)" ondrop="dropKA(event, '${tkr.id}', '${ka.id}')" ondragend="this.style.opacity='1'">
            <td style="padding:8px 8px 8px 70px;font-size:11px">
              <span style="font-size:9px;font-weight:800;letter-spacing:.04em;color:#f59e0b;background:#fef9c3;padding:2px 7px;border-radius:100px">Key Action</span>
            </td>
            <td style="font-size:11.5px;color:var(--text-2)">${ka.description.substring(0, 55)}${ka.description.length > 55 ? '…' : ''}</td>
            <td><span class="status-pill ${kaStatusClass(ka.status)}">${ka.status}</span></td>
            <td style="font-size:11px">${Utils.findUser(data, ka.responsibleId).name.split(' ')[0]}</td>
            <td style="font-size:11px">${Utils.formatDate(ka.endDate)}</td>
            <td>
              <div style="display:flex;align-items:center;gap:6px">
                <div style="width:50px;height:4px;background:var(--surface-2);border-radius:100px;overflow:hidden">
                  <div style="height:100%;width:${ka.progress}%;background:${dot};border-radius:100px"></div>
                </div>
                <strong style="font-size:11px">${ka.progress}%</strong>
              </div>
            </td>
            <td></td>
            <td style="white-space:nowrap">
              <button class="btn btn-ghost btn-sm" onclick="openKAEdit('${ka.id}')">✎ Editar</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deleteKA('${tkr.id}','${ka.id}')">✕</button>
            </td>
          </tr>`);
        });

        // Indicadores row (meta vs actual inline)
        rows.push(`<tr style="background:#fdf8f0;border-top:1px dashed #fde68a" class="child-of-${pkr.id}">
          <td style="padding:7px 8px 7px 90px;font-size:10px">
            <span style="font-size:9px;font-weight:800;letter-spacing:.04em;color:#92400e;background:#fef3c7;padding:2px 7px;border-radius:100px">Indicadores</span>
          </td>
          <td style="font-size:11px;color:var(--text-3)" colspan="4">
            <strong>${tkr.metric}</strong> &nbsp;·&nbsp; Fórmula: <em>${tkr.formula}</em>
          </td>
          <td style="font-size:11px" colspan="2">
            LB: <strong>${tkr.baseline}</strong> &nbsp;→&nbsp;
            Actual: <strong style="color:var(--brand-primary)">${tkr.current} ${tkr.unit}</strong> &nbsp;→&nbsp;
            Meta: <strong style="color:#10b981">${tkr.target} ${tkr.unit}</strong>
          </td>
          <td style="white-space:nowrap">
            <button class="btn btn-ghost btn-sm" onclick="openIndicadorEdit('${pkr.id}','${tkr.id}')">✎ Editar</button>
          </td>
        </tr>`);
      });
    });
  });

  // ── Creation toolbar ──────────────────────────
  const toolbar = `
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <span style="font-size:11.5px;font-weight:700;color:var(--text-3);margin-right:4px">+ Agregar:</span>
      <button class="btn btn-sm" style="background:#eef2ff;color:#4f46e5;font-weight:700" onclick="openNewOKR()">
        ◈ OKR Estratégico
      </button>
      <button class="btn btn-sm" style="background:#ede9fe;color:#7c3aed;font-weight:700" onclick="openNewPKR()">
        ↳ KR Estratégico
      </button>
      <button class="btn btn-sm" style="background:#d1fae5;color:#065f46;font-weight:700" onclick="openNewTKR()">
        ↳↳ KR Táctico
      </button>
      <button class="btn btn-sm" style="background:#fef9c3;color:#92400e;font-weight:700" onclick="openNewKA()">
        ↳↳↳ Key Action
      </button>
      <button class="btn btn-sm" style="background:#fff7ed;color:#c2410c;font-weight:700" onclick="openNewIndicador()">
        ◎ Indicadores / Metas
      </button>
    </div>`;

  container.innerHTML = `
    <div class="section-header">
      <div>
        <div class="section-title">Gestión de OKRs</div>
        <div class="section-sub">Árbol completo con 5 niveles · Crear, editar y eliminar elementos</div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="openNewCheckin()">+ Check-in</button>
    </div>

    <div class="card">
      <div class="card-header" style="flex-wrap:wrap;gap:12px">
        <div><div class="card-title">Árbol OKR Completo</div><div class="card-sub">Jerarquía con 5 niveles de indentación</div></div>
        ${toolbar}
      </div>
      <div style="overflow-x:auto">
        <table class="data-table">
          <thead><tr>
            <th>Nivel</th><th>Nombre / Descripción</th><th>Tipo / Estado</th>
            <th>Responsable</th><th>Peso / Fecha</th><th>Progreso / Actual</th><th>Semáforo</th><th>Acciones</th>
          </tr></thead>
          <tbody>${rows.join('')}</tbody>
        </table>
      </div>
    </div>`;
}

// ── Helper already in views-okrtree ──────────────
function kaStatusClass(s) {
  return { 'Completado': 'sp-completado', 'En progreso': 'sp-en-progreso', 'No iniciado': 'sp-no-iniciado', 'Riesgo': 'sp-riesgo' }[s] || 'sp-no-iniciado';
}

// ══════════════════════════════════════════════
//  CREATE modals — 5 levels
// ══════════════════════════════════════════════

// ── 1. Nuevo OKR Estratégico ──────────────────
function openNewOKR() {
  const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#06b6d4', '#8b5cf6', '#ef4444'];
  const colorBtns = COLORS.map((c, i) =>
    `<button type="button" onclick="this.parentElement.querySelectorAll('button').forEach(b=>b.style.outline='none');this.style.outline='3px solid #000';document.getElementById('okr-color').value='${c}'"
      style="width:26px;height:26px;border-radius:50%;background:${c};border:none;cursor:pointer;${i === 0 ? 'outline:3px solid #000' : ''}"></button>`
  ).join('');
  Modal.open('Nuevo OKR Estratégico', `
    <div class="form-group"><label class="form-label">Nombre del OKR</label>
      <textarea class="form-control" id="okr-name" rows="3" placeholder="Ej: Desplegar el Modelo Ean Virtual 2.0 en las regiones priorizadas…"></textarea></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Horizonte</label>
        <select class="form-control" id="okr-horizon"><option>anual</option><option>semestral</option><option>trimestral</option></select></div>
      <div class="form-group"><label class="form-label">Prioridad</label>
        <select class="form-control" id="okr-priority"><option>Crítica</option><option>Alta</option><option>Media</option></select></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Peso Estratégico (%)</label>
        <input type="number" class="form-control" id="okr-weight" value="25" min="1" max="100"></div>
      <div class="form-group"><label class="form-label">Vicerrectoría / Dirección</label>
        <input type="text" class="form-control" id="okr-unit" placeholder="Ej: Vicerrectoría Académica"></div>
    </div>
    <div class="form-group"><label class="form-label">Color de identificación</label>
      <div style="display:flex;gap:8px;margin-top:4px">${colorBtns}</div>
      <input type="hidden" id="okr-color" value="${COLORS[0]}"></div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveNewOKR()">Crear OKR</button>`);
}

function saveNewOKR() {
  const name = document.getElementById('okr-name').value.trim();
  if (!name) { showToast('El nombre del OKR es requerido', 'error'); return; }
  DB.update(data => {
    data.okrs.push({
      id: Utils.uuid(),
      name,
      horizon: document.getElementById('okr-horizon').value,
      strategicWeight: parseInt(document.getElementById('okr-weight').value) || 25,
      responsibleUnit: document.getElementById('okr-unit').value || '—',
      priority: document.getElementById('okr-priority').value,
      color: document.getElementById('okr-color').value,
      projectKRs: []
    });
  });
  Modal.close(); showToast('OKR Estratégico creado ✓');
  renderManage(document.getElementById('page-content'));
}

// ── 2. Nuevo KR Estratégico (Project KR) ─────
function openNewPKR() {
  const data = DB.get();
  if (!data.okrs.length) { showToast('Primero crea un OKR Estratégico', 'warning'); return; }
  const okrOpts = data.okrs.map(o => `<option value="${o.id}">${o.name.substring(0, 60)}…</option>`).join('');
  const userOpts = data.users.map(u => `<option value="${u.name}"></option>`).join('');
  const typeOpts = ['Posicionamiento', 'Implementación', 'Formación', 'Reputación', 'Operativo']
    .map(t => `<option>${t}</option>`).join('');
  Modal.open('Nuevo KR Estratégico (Project KR)', `
    <div class="form-group"><label class="form-label">OKR padre</label>
      <select class="form-control" id="pkr-parent">${okrOpts}</select></div>
    <div class="form-group"><label class="form-label">Nombre del KR Estratégico</label>
      <textarea class="form-control" id="pkr-name" rows="2" placeholder="Ej: Posicionar el modelo como referente nacional…"></textarea></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Métrica principal</label>
        <input type="text" class="form-control" id="pkr-metric" placeholder="Ej: Índice de Posicionamiento"></div>
      <div class="form-group"><label class="form-label">Tipo de indicador</label>
        <select class="form-control" id="pkr-type">${typeOpts}</select></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Línea base</label>
        <input type="number" class="form-control" id="pkr-baseline" value="0"></div>
      <div class="form-group"><label class="form-label">Meta</label>
        <input type="number" class="form-control" id="pkr-target" value="100"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Valor actual</label>
        <input type="number" class="form-control" id="pkr-current" value="0"></div>
      <div class="form-group"><label class="form-label">Unidad</label>
        <input type="text" class="form-control" id="pkr-unit" placeholder="Ej: puntos, %, estudiantes"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Peso en el OKR (%)</label>
        <input type="number" class="form-control" id="pkr-weight" value="25" min="1" max="100"></div>
      <div class="form-group"><label class="form-label">Responsable</label>
        <input type="text" class="form-control" id="pkr-resp" list="users-list" placeholder="Escribir o elegir..."><datalist id="users-list">${userOpts}</datalist></div>
    </div>
    <div class="form-group"><label class="form-label">Fuente de verificación</label>
      <input type="text" class="form-control" id="pkr-source" placeholder="Ej: Sistema Banner + Encuesta anual"></div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveNewPKR()">Crear KR Estratégico</button>`);
}

function saveNewPKR() {
  const name = document.getElementById('pkr-name').value.trim();
  if (!name) { showToast('El nombre es requerido', 'error'); return; }
  DB.update(data => {
    const okr = data.okrs.find(o => o.id === document.getElementById('pkr-parent').value);
    if (!okr) return;
    okr.projectKRs.push({
      id: Utils.uuid(),
      name,
      metricMain: document.getElementById('pkr-metric').value || name,
      baseline: parseFloat(document.getElementById('pkr-baseline').value) || 0,
      target: parseFloat(document.getElementById('pkr-target').value) || 100,
      current: parseFloat(document.getElementById('pkr-current').value) || 0,
      unit: document.getElementById('pkr-unit').value || '',
      verificationSource: document.getElementById('pkr-source').value || '—',
      indicatorType: document.getElementById('pkr-type').value,
      weightInOKR: parseInt(document.getElementById('pkr-weight').value) || 25,
      responsibleId: document.getElementById('pkr-resp').value,
      tkrs: []
    });
  });
  Modal.close(); showToast('KR Estratégico creado ✓');
  renderManage(document.getElementById('page-content'));
}

// ── 3. Nuevo KR Táctico (TKR) ────────────────
function openNewTKR() {
  const data = DB.get();
  const pkrOpts = data.okrs.flatMap(o => o.projectKRs.map(p =>
    `<option value="${o.id}|${p.id}">${o.name.substring(0, 30)}… → ${p.name.substring(0, 35)}…</option>`
  )).join('');
  if (!pkrOpts) { showToast('Primero crea un KR Estratégico', 'warning'); return; }
  const userOpts = data.users.map(u => `<option value="${u.name}"></option>`).join('');
  const perOpts = ['Diario', 'Semanal', 'Quincenal', 'Mensual', 'Bimestral', 'Trimestral', 'Semestral', 'Única vez']
    .map(p => `<option>${p}</option>`).join('');
  Modal.open('Nuevo KR Táctico (TKR)', `
    <div class="form-group"><label class="form-label">KR Estratégico padre</label>
      <select class="form-control" id="tkr-parent">${pkrOpts}</select></div>
    <div class="form-group"><label class="form-label">Nombre del KR Táctico</label>
      <textarea class="form-control" id="tkr-name" rows="2" placeholder="Ej: Incrementar en 25% el reconocimiento del modelo…"></textarea></div>
    <div class="form-group"><label class="form-label">Métrica específica</label>
      <input type="text" class="form-control" id="tkr-metric" placeholder="Ej: Menciones en medios especializados"></div>
    <div class="form-group"><label class="form-label">Fórmula de cálculo</label>
      <input type="text" class="form-control" id="tkr-formula" placeholder="Ej: (Menciones actuales / Línea base) × 100"></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Línea base</label>
        <input type="number" class="form-control" id="tkr-baseline" value="0"></div>
      <div class="form-group"><label class="form-label">Meta cuantitativa</label>
        <input type="number" class="form-control" id="tkr-target" value="100"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Valor actual</label>
        <input type="number" class="form-control" id="tkr-current" value="0"></div>
      <div class="form-group"><label class="form-label">Unidad</label>
        <input type="text" class="form-control" id="tkr-unit" placeholder="Ej: menciones, %, puntos"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Peso en KR Estratégico (%)</label>
        <input type="number" class="form-control" id="tkr-weight" value="25" min="1" max="100"></div>
      <div class="form-group"><label class="form-label">Periodicidad de medición</label>
        <select class="form-control" id="tkr-period">${perOpts}</select></div>
    </div>
    <div class="form-group"><label class="form-label">Responsable</label>
      <input type="text" class="form-control" id="tkr-resp" list="users-list" placeholder="Escribir o elegir..."><datalist id="users-list">${userOpts}</datalist></div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveNewTKR()">Crear KR Táctico</button>`);
}

function saveNewTKR() {
  const name = document.getElementById('tkr-name').value.trim();
  if (!name) { showToast('El nombre es requerido', 'error'); return; }
  const [okrId, pkrId] = document.getElementById('tkr-parent').value.split('|');
  DB.update(data => {
    const okr = data.okrs.find(o => o.id === okrId);
    if (!okr) return;
    const pkr = okr.projectKRs.find(p => p.id === pkrId);
    if (!pkr) return;
    pkr.tkrs.push({
      id: Utils.uuid(),
      name,
      metric: document.getElementById('tkr-metric').value || name,
      formula: document.getElementById('tkr-formula').value || '—',
      baseline: parseFloat(document.getElementById('tkr-baseline').value) || 0,
      target: parseFloat(document.getElementById('tkr-target').value) || 100,
      current: parseFloat(document.getElementById('tkr-current').value) || 0,
      unit: document.getElementById('tkr-unit').value || '',
      weightInPKR: parseInt(document.getElementById('tkr-weight').value) || 25,
      periodicity: document.getElementById('tkr-period').value,
      responsibleId: document.getElementById('tkr-resp').value,
      kas: []
    });
  });
  Modal.close(); showToast('KR Táctico creado ✓');
  renderManage(document.getElementById('page-content'));
}

// ── 4. Nueva Key Action ───────────────────────
function openNewKA() {
  const data = DB.get();
  const tkrOpts = data.okrs.flatMap(o => o.projectKRs.flatMap(p => p.tkrs.map(t =>
    `<option value="${p.id}|${t.id}">${t.name.substring(0, 55)}…</option>`
  ))).join('');
  if (!tkrOpts) { showToast('Primero crea un KR Táctico', 'warning'); return; }
  const userOpts = data.users.map(u => `<option value="${u.name}"></option>`).join('');
  const regionOpts = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Bucaramanga', 'Nacional']
    .map(r => `<option>${r}</option>`).join('');
  Modal.open('Nueva Key Action', `
    <div class="form-group"><label class="form-label">KR Táctico padre</label>
      <select class="form-control" id="ka-parent">${tkrOpts}</select></div>
    <div class="form-group"><label class="form-label">Descripción de la acción</label>
      <textarea class="form-control" id="ka-description" rows="3" placeholder="Ej: Diseñar y ejecutar campaña de posicionamiento en medios digitales…"></textarea></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Responsable</label>
        <input type="text" class="form-control" id="ka-resp" list="users-list" placeholder="Escribir o elegir..."><datalist id="users-list">${userOpts}</datalist></div>
      <div class="form-group"><label class="form-label">Estado inicial</label>
        <select class="form-control" id="ka-status">
          <option>No iniciado</option><option>En progreso</option><option>Completado</option><option>Riesgo</option>
        </select></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Fecha inicio</label>
        <input type="date" class="form-control" id="ka-start" value="${Utils.today()}"></div>
      <div class="form-group"><label class="form-label">Fecha fin</label>
        <input type="date" class="form-control" id="ka-end"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">% de contribución al TKR</label>
        <input type="number" class="form-control" id="ka-impact" value="25" min="1" max="100"></div>
      <div class="form-group"><label class="form-label">Región</label>
        <select class="form-control" id="ka-region">${regionOpts}</select></div>
    </div>
    <div class="form-group"><label class="form-label">Notas / Contexto</label>
      <textarea class="form-control" id="ka-notes" rows="2" placeholder="Observaciones iniciales…"></textarea></div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveNewKA()">Crear Key Action</button>`);
}

function saveNewKA() {
  const desc = document.getElementById('ka-description').value.trim();
  if (!desc) { showToast('La descripción es requerida', 'error'); return; }
  const [pkrId, tkrId] = document.getElementById('ka-parent').value.split('|');
  DB.update(data => {
    data.okrs.forEach(o => o.projectKRs.forEach(pkr => {
      if (pkr.id !== pkrId) return;
      pkr.tkrs.forEach(tkr => {
        if (tkr.id !== tkrId) return;
        tkr.kas.push({
          id: Utils.uuid(),
          description: desc,
          responsibleId: document.getElementById('ka-resp').value,
          status: document.getElementById('ka-status').value,
          startDate: document.getElementById('ka-start').value,
          endDate: document.getElementById('ka-end').value,
          progress: document.getElementById('ka-status').value === 'Completado' ? 100 : 0,
          impactWeight: parseInt(document.getElementById('ka-impact').value) || 25,
          region: document.getElementById('ka-region').value,
          notes: document.getElementById('ka-notes').value
        });
      });
    }));
  });
  Modal.close(); showToast('Key Action creada ✓');
  renderManage(document.getElementById('page-content'));
}

// ── 5. Indicadores / Metas (editar TKR metrics) ─
function openNewIndicador() {
  const data = DB.get();
  const tkrOpts = data.okrs.flatMap(o => o.projectKRs.flatMap(p => p.tkrs.map(t =>
    `<option value="${p.id}|${t.id}">${t.name.substring(0, 60)}…</option>`
  ))).join('');
  if (!tkrOpts) { showToast('Primero crea un KR Táctico', 'warning'); return; }
  Modal.open('Editar Indicadores / Metas', `
    <p style="font-size:12.5px;color:var(--text-3);margin-bottom:16px">Selecciona el KR Táctico al que deseas ajustar los indicadores y metas de seguimiento.</p>
    <div class="form-group"><label class="form-label">KR Táctico</label>
      <select class="form-control" id="ind-tkr" onchange="loadIndicadorFields(this.value)">${tkrOpts}</select></div>
    <div id="ind-fields"></div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveIndicador()">Guardar Indicadores</button>`);
  // Auto-load first TKR
  setTimeout(() => {
    const sel = document.getElementById('ind-tkr');
    if (sel) loadIndicadorFields(sel.value);
  }, 50);
}

function loadIndicadorFields(val) {
  const data = DB.get();
  const [pkrId, tkrId] = val.split('|');
  let tkr = null;
  data.okrs.forEach(o => o.projectKRs.forEach(p => { if (p.id === pkrId) p.tkrs.forEach(t => { if (t.id === tkrId) tkr = t; }); }));
  if (!tkr) return;
  document.getElementById('ind-fields').innerHTML = `
    <div class="form-group"><label class="form-label">Métrica específica</label>
      <input type="text" class="form-control" id="ind-metric" value="${tkr.metric}"></div>
    <div class="form-group"><label class="form-label">Fórmula de cálculo</label>
      <input type="text" class="form-control" id="ind-formula" value="${tkr.formula}"></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Línea base</label>
        <input type="number" class="form-control" id="ind-baseline" value="${tkr.baseline}"></div>
      <div class="form-group"><label class="form-label">Meta cuantitativa</label>
        <input type="number" class="form-control" id="ind-target" value="${tkr.target}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Valor actual</label>
        <input type="number" class="form-control" id="ind-current" value="${tkr.current}"></div>
      <div class="form-group"><label class="form-label">Unidad de medida</label>
        <input type="text" class="form-control" id="ind-unit" value="${tkr.unit}"></div>
    </div>
    <div style="background:var(--surface-0);border-radius:var(--radius-sm);padding:10px 14px;font-size:11.5px;color:var(--text-3);border:1px solid var(--border)">
      <strong>Progreso calculado:</strong> ${((tkr.current - tkr.baseline) / (tkr.target - tkr.baseline || 1) * 100).toFixed(1)}% del camino LB → Meta
    </div>
    <input type="hidden" id="ind-pkrid" value="${pkrId}">
    <input type="hidden" id="ind-tkrid" value="${tkrId}">`;
}

function saveIndicador() {
  const pkrId = document.getElementById('ind-pkrid')?.value;
  const tkrId = document.getElementById('ind-tkrid')?.value;
  if (!pkrId || !tkrId) return;
  DB.update(data => {
    data.okrs.forEach(o => o.projectKRs.forEach(pkr => {
      if (pkr.id !== pkrId) return;
      pkr.tkrs.forEach(tkr => {
        if (tkr.id !== tkrId) return;
        tkr.metric = document.getElementById('ind-metric').value;
        tkr.formula = document.getElementById('ind-formula').value;
        tkr.baseline = parseFloat(document.getElementById('ind-baseline').value) || 0;
        tkr.target = parseFloat(document.getElementById('ind-target').value) || tkr.target;
        tkr.current = parseFloat(document.getElementById('ind-current').value) || 0;
        tkr.unit = document.getElementById('ind-unit').value;
      });
    }));
  });
  Modal.close(); showToast('Indicadores actualizados ✓');
  renderManage(document.getElementById('page-content'));
}

// ══════════════════════════════════════════════
//  EDIT modals (existing)
// ══════════════════════════════════════════════

function openOKREdit(okrId) {
  const data = DB.get();
  const okr = data.okrs.find(o => o.id === okrId);
  if (!okr) return;
  Modal.open('Editar OKR Estratégico', `
    <div class="form-group"><label class="form-label">Nombre del OKR</label>
      <textarea class="form-control" id="okr-name" rows="2">${okr.name}</textarea></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Horizonte</label>
        <select class="form-control" id="okr-horizon">
          <option ${okr.horizon === 'anual' ? 'selected' : ''}>anual</option>
          <option ${okr.horizon === 'semestral' ? 'selected' : ''}>semestral</option>
          <option ${okr.horizon === 'trimestral' ? 'selected' : ''}>trimestral</option>
        </select></div>
      <div class="form-group"><label class="form-label">Prioridad</label>
        <select class="form-control" id="okr-priority">
          ${['Crítica', 'Alta', 'Media'].map(p => `<option ${okr.priority === p ? 'selected' : ''}>${p}</option>`).join('')}
        </select></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Peso Estratégico (%)</label>
        <input type="number" class="form-control" id="okr-weight" value="${okr.strategicWeight}" min="1" max="100"></div>
      <div class="form-group"><label class="form-label">Vicerrectoría / Dirección</label>
        <input type="text" class="form-control" id="okr-unit" value="${okr.responsibleUnit}"></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveOKR('${okrId}')">Guardar</button>`);
}

function saveOKR(id) {
  DB.update(data => {
    const okr = data.okrs.find(o => o.id === id);
    if (!okr) return;
    okr.name = document.getElementById('okr-name').value;
    okr.horizon = document.getElementById('okr-horizon').value;
    okr.priority = document.getElementById('okr-priority').value;
    okr.strategicWeight = parseInt(document.getElementById('okr-weight').value) || okr.strategicWeight;
    okr.responsibleUnit = document.getElementById('okr-unit').value;
  });
  Modal.close(); showToast('OKR actualizado ✓');
  renderManage(document.getElementById('page-content'));
}

function openPKREdit(pkrId) {
  const data = DB.get();
  let pkr = null;
  data.okrs.forEach(o => o.projectKRs.forEach(p => { if (p.id === pkrId) pkr = p; }));
  if (!pkr) return;
  const typeOpts = ['Posicionamiento', 'Implementación', 'Formación', 'Reputación', 'Operativo']
    .map(t => `<option ${pkr.indicatorType === t ? 'selected' : ''}>${t}</option>`).join('');
  Modal.open('Editar KR Estratégico', `
    <div class="form-group"><label class="form-label">Nombre</label>
      <textarea class="form-control" id="pkr-name" rows="2">${pkr.name}</textarea></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Actual</label>
        <input type="number" class="form-control" id="pkr-current" value="${pkr.current}"></div>
      <div class="form-group"><label class="form-label">Meta</label>
        <input type="number" class="form-control" id="pkr-target" value="${pkr.target}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Tipo</label>
        <select class="form-control" id="pkr-type">${typeOpts}</select></div>
      <div class="form-group"><label class="form-label">Peso en OKR (%)</label>
        <input type="number" class="form-control" id="pkr-weight" value="${pkr.weightInOKR}"></div>
      <div class="form-group"><label class="form-label">Fuente de verificación</label>
        <input type="text" class="form-control" id="pkr-source" value="${pkr.verificationSource}"></div>
      <div class="form-group"><label class="form-label">Responsable</label>
        <input type="text" class="form-control" id="pkr-resp" list="users-list-pkr" value="${Utils.findUser(data, pkr.responsibleId)?.name || ''}"><datalist id="users-list-pkr">${data.users.map(u => `<option value="${u.name}"></option>`).join('')}</datalist></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="savePKR('${pkrId}')">Guardar</button>`);
}

function savePKR(pkrId) {
  DB.update(data => {
    data.okrs.forEach(o => o.projectKRs.forEach(pkr => {
      if (pkr.id !== pkrId) return;
      pkr.name = document.getElementById('pkr-name').value;
      pkr.current = parseFloat(document.getElementById('pkr-current').value) || 0;
      pkr.target = parseFloat(document.getElementById('pkr-target').value) || pkr.target;
      pkr.indicatorType = document.getElementById('pkr-type').value;
      pkr.weightInOKR = parseInt(document.getElementById('pkr-weight').value) || pkr.weightInOKR;
      pkr.verificationSource = document.getElementById('pkr-source').value;

      const respInput = document.getElementById('pkr-resp');
      if (respInput) {
        const respName = respInput.value;
        const user = data.users.find(u => u.name === respName);
        if (user) {
          pkr.responsibleId = user.id;
        } else if (respName) {
          // If not found, we could potentially create a new user or just store the name
          // For now, let's keep it robust
          pkr.responsibleId = respName;
        }
      }
    }));
  });
  Modal.close(); showToast('KR Estratégico actualizado ✓');
  renderManage(document.getElementById('page-content'));
}

function openSharePKR(okrId, pkrId) {
  const data = DB.get();
  let pkr = null;
  data.okrs.forEach(o => { if (o.id === okrId) { o.projectKRs.forEach(p => { if (p.id === pkrId) pkr = p; }) } });
  if (!pkr) return;

  if (!pkr.shares) pkr.shares = [];

  const permOpts = [
    { val: 'view', label: '1. Permiso de visualización' },
    { val: 'edit1', label: '2. Permiso de edición tipo 1 (KR estr., KR tác., KA, metas e indicadores)' },
    { val: 'edit2', label: '3. Permiso de edición tipo 2 (KR tác., KA, metas e indicadores)' },
    { val: 'edit3', label: '4. Permiso de edición tipo 3 (KA, metas e indicadores)' }
  ].map(o => `<option value="${o.val}">${o.label}</option>`).join('');

  const sharesList = pkr.shares.length === 0 ? '<p style="font-size:12px;color:var(--text-3);font-style:italic">No compartido aún.</p>' :
    pkr.shares.map(s => `<div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--border); font-size:12px">
        <div style="display:flex; flex-direction:column">
            <strong>${s.email}</strong>
            <span style="color:var(--text-3); font-size:10px">${s.permissionName}</span>
        </div>
        <button class="btn btn-ghost btn-sm" style="color:var(--red); padding:4px" onclick="removeSharePKR('${okrId}', '${pkrId}', '${s.email}')">✕ Revocar</button>
    </div>`).join('');

  Modal.open('Compartir KR Estratégico', `
    <div style="margin-bottom:16px">
        <div style="font-size:10px; font-weight:800; color:var(--brand-primary); margin-bottom:4px; text-transform:uppercase">KR Estratégico</div>
        <div style="font-size:14px; font-weight:700; color:var(--text-1)">${pkr.name}</div>
    </div>
    
    <div style="background:var(--surface-0); padding:16px; border-radius:var(--radius-md); border:1px solid var(--border); margin-bottom: 24px; box-shadow: var(--shadow-sm)">
        <div class="form-group"><label class="form-label">Correo electrónico del usuario</label>
        <input type="email" class="form-control" id="share-email" placeholder="ejemplo@ean.edu.co"></div>
        <div class="form-group"><label class="form-label">Nivel de permisos</label>
        <select class="form-control" id="share-perm" style="font-size:12.5px">${permOpts}</select></div>
        <button class="btn btn-primary" style="width:100%; margin-top:8px" onclick="addSharePKR('${okrId}', '${pkrId}')">Invitar y otorgar acceso</button>
    </div>

    <div class="form-group"><label class="form-label" style="display:flex; justify-content:space-between; align-items:center">
        <span>Usuarios con acceso</span>
        <span style="font-weight:400; font-size:11px; color:var(--text-4)">${pkr.shares.length} usuarios</span>
    </label>
        <div id="pkr-shares-list" style="max-height:200px; overflow-y:auto; padding-right:4px">${sharesList}</div>
    </div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cerrar</button>`);
}

window.addSharePKR = function (okrId, pkrId) {
  const email = document.getElementById('share-email').value.trim();
  if (!email) { showToast('Ingresa un correo válido', 'warning'); return; }
  const permSelect = document.getElementById('share-perm');
  const permVal = permSelect.value;
  const permName = permSelect.options[permSelect.selectedIndex].text;

  DB.update(data => {
    data.okrs.forEach(o => {
      if (o.id === okrId) {
        o.projectKRs.forEach(p => {
          if (p.id === pkrId) {
            if (!p.shares) p.shares = [];
            p.shares = p.shares.filter(s => s.email !== email);
            p.shares.push({ email, permission: permVal, permissionName: permName });
          }
        })
      }
    });
  });

  // ── Trigger mailto invitation ────────────────
  const subject = encodeURIComponent('Invitación: Colaborar en OKR Intelligence System');
  const body = encodeURIComponent(`Hola,\n\nTe han invitado a colaborar en el KR Estratégico del proyecto OKR Intelligence System.\n\nNivel de permiso: ${permName}\n\nPuedes acceder aquí: ${window.location.href}\n\nSaludos.`);
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

  showToast('Sincronizando con Firestore e iniciando correo...', 'success');
  openSharePKR(okrId, pkrId);
  if (typeof renderManage === 'function') renderManage(document.getElementById('page-content'));
};

window.removeSharePKR = function (okrId, pkrId, email) {
  if (!confirm('¿Revocar el acceso a ' + email + '?')) return;
  DB.update(data => {
    data.okrs.forEach(o => {
      if (o.id === okrId) {
        o.projectKRs.forEach(p => {
          if (p.id === pkrId && p.shares) {
            p.shares = p.shares.filter(s => s.email !== email);
          }
        })
      }
    });
  });
  showToast('Acceso revocado');
  openSharePKR(okrId, pkrId);
  if (typeof renderManage === 'function') renderManage(document.getElementById('page-content'));
};




function openTKREdit(pkrId, tkrId) {
  const data = DB.get();
  let tkr = null;
  data.okrs.forEach(o => o.projectKRs.forEach(p => { if (p.id === pkrId) p.tkrs.forEach(t => { if (t.id === tkrId) tkr = t; }); }));
  if (!tkr) return;
  const userOpts = data.users.map(u => `<option value="${u.name}"></option>`).join('');
  const tkrRespName = Utils.findUser(data, tkr.responsibleId).name;
  const perOpts = ['Diario', 'Semanal', 'Quincenal', 'Mensual', 'Bimestral', 'Trimestral', 'Semestral', 'Única vez']
    .map(p => `<option ${tkr.periodicity === p ? 'selected' : ''}>${p}</option>`).join('');
  Modal.open('Editar KR Táctico', `
    <div class="form-group"><label class="form-label">Nombre</label>
      <textarea class="form-control" id="tkr-name" rows="2">${tkr.name}</textarea></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Actual</label>
        <input type="number" class="form-control" id="tkr-current" value="${tkr.current}"></div>
      <div class="form-group"><label class="form-label">Meta</label>
        <input type="number" class="form-control" id="tkr-target" value="${tkr.target}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Peso en KR Estratégico (%)</label>
        <input type="number" class="form-control" id="tkr-weight" value="${tkr.weightInPKR}"></div>
      <div class="form-group"><label class="form-label">Periodicidad</label>
        <select class="form-control" id="tkr-period">${perOpts}</select></div>
    </div>
    <div class="form-group"><label class="form-label">Responsable</label>
      <input type="text" class="form-control" id="tkr-resp" list="users-list" value="${tkrRespName}"><datalist id="users-list">${userOpts}</datalist></div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveTKR('${pkrId}','${tkrId}')">Guardar</button>`);
}

function saveTKR(pkrId, tkrId) {
  DB.update(data => {
    data.okrs.forEach(o => o.projectKRs.forEach(pkr => {
      if (pkr.id !== pkrId) return;
      pkr.tkrs.forEach(tkr => {
        if (tkr.id !== tkrId) return;
        tkr.name = document.getElementById('tkr-name').value;
        tkr.current = parseFloat(document.getElementById('tkr-current').value) || 0;
        tkr.target = parseFloat(document.getElementById('tkr-target').value) || tkr.target;
        tkr.weightInPKR = parseInt(document.getElementById('tkr-weight').value) || tkr.weightInPKR;
        tkr.periodicity = document.getElementById('tkr-period').value;
        tkr.responsibleId = document.getElementById('tkr-resp').value;
      });
    }));
  });
  Modal.close(); showToast('KR Táctico actualizado ✓');
  renderManage(document.getElementById('page-content'));
}

function openIndicadorEdit(pkrId, tkrId) { openNewIndicador(); setTimeout(() => { const sel = document.getElementById('ind-tkr'); if (sel) { sel.value = pkrId + '|' + tkrId; loadIndicadorFields(sel.value); } }, 80); }

// ══════════════════════════════════════════════
//  DELETE helpers
// ══════════════════════════════════════════════
function deleteOKR(okrId) {
  if (!confirm('¿Eliminar este OKR y todos sus niveles hijos? Esta acción no se puede deshacer.')) return;
  DB.update(data => { data.okrs = data.okrs.filter(o => o.id !== okrId); });
  showToast('OKR eliminado'); renderManage(document.getElementById('page-content'));
}
function deletePKR(okrId, pkrId) {
  if (!confirm('¿Eliminar este KR Estratégico y sus KRs tácticos y acciones?')) return;
  DB.update(data => { const o = data.okrs.find(x => x.id === okrId); if (o) o.projectKRs = o.projectKRs.filter(p => p.id !== pkrId); });
  showToast('KR Estratégico eliminado'); renderManage(document.getElementById('page-content'));
}
function deleteTKR(pkrId, tkrId) {
  if (!confirm('¿Eliminar este KR Táctico y sus Key Actions?')) return;
  DB.update(data => { data.okrs.forEach(o => o.projectKRs.forEach(p => { if (p.id === pkrId) p.tkrs = p.tkrs.filter(t => t.id !== tkrId); })); });
  showToast('KR Táctico eliminado'); renderManage(document.getElementById('page-content'));
}
function deleteKA(tkrId, kaId) {
  if (!confirm('¿Eliminar esta Key Action?')) return;
  DB.update(data => { data.okrs.forEach(o => o.projectKRs.forEach(p => p.tkrs.forEach(t => { if (t.id === tkrId) t.kas = t.kas.filter(k => k.id !== kaId); }))); });
  showToast('Key Action eliminada'); renderManage(document.getElementById('page-content'));
}

// ══════════════════════════════════════════════
//  Check-ins / Decisions (unchanged)
// ══════════════════════════════════════════════

function renderCheckins(container) {
  const data = DB.get();
  const feed = [...data.checkins]
    .filter(ci => AppState.activeOkrId === 'all' || ci.okrId === AppState.activeOkrId)
    .reverse().map(ci => {
      const okr = data.okrs.find(o => o.id === ci.okrId);
      const resp = Utils.findUser(data, ci.responsibleId);
      const riskCls = { 'Alto': 'risk-alto', 'Medio': 'risk-medio', 'Bajo': 'risk-bajo' }[ci.riskLevel] || 'risk-bajo';
      return `<div class="checkin-item">
      <div class="checkin-header">
        <span class="checkin-okr">${okr ? okr.name.substring(0, 50) + '…' : 'OKR'}</span>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="risk-badge ${riskCls}">${ci.riskLevel}</span>
          <span class="checkin-date">${Utils.formatDate(ci.date)}</span>
        </div>
      </div>
      <div class="checkin-body" style="margin-top:4px">${ci.summary}</div>
      <div style="margin-top:8px;font-size:11px;color:var(--text-4)">Responsable: ${resp.name}</div>
    </div>`;
    }).join('');
  container.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">Check-ins Semanales</div><div class="section-sub">Registro de avances, riesgos y compromisos</div></div>
      <button class="btn btn-primary btn-sm" onclick="openNewCheckin()">+ Nuevo Check-in</button>
    </div>
    <div class="card"><div class="card-body"><div class="checkin-feed">${feed || '<div class="empty-state"><div class="es-icon">📋</div><div class="es-title">Sin check-ins aún</div></div>'}</div></div></div>`;
}

function openNewCheckin() {
  const data = DB.get();
  const okrOpts = data.okrs.map(o => `<option value="${o.id}">${o.name.substring(0, 55)}…</option>`).join('');
  const userOpts = data.users.map(u => `<option value="${u.name}"></option>`).join('');
  Modal.open('Nuevo Check-in Semanal', `
    <div class="form-group"><label class="form-label">OKR relacionado</label><select class="form-control" id="ci-okr">${okrOpts}</select></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Responsable</label><input type="text" class="form-control" id="ci-user" list="users-list" placeholder="Escribir o elegir..."><datalist id="users-list">${userOpts}</datalist></div>
      <div class="form-group"><label class="form-label">Nivel de riesgo</label>
        <select class="form-control" id="ci-risk"><option>Bajo</option><option>Medio</option><option>Alto</option></select></div>
    </div>
    <div class="form-group"><label class="form-label">Resumen</label><textarea class="form-control" id="ci-summary" rows="4" placeholder="Avance, riesgos y próximos pasos…"></textarea></div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveCheckin()">Registrar</button>`);
}

function saveCheckin() {
  DB.update(data => {
    data.checkins.push({
      id: Utils.uuid(), date: Utils.today(), type: 'weekly',
      okrId: document.getElementById('ci-okr').value,
      summary: document.getElementById('ci-summary').value,
      riskLevel: document.getElementById('ci-risk').value,
      responsibleId: document.getElementById('ci-user').value
    })
  });
  Modal.close(); showToast('Check-in registrado ✓');
  renderCheckins(document.getElementById('page-content'));
}

function renderDecisions(container) {
  const data = DB.get();
  const items = [...data.decisions]
    .filter(d => AppState.activeOkrId === 'all' || d.relatedOKR === AppState.activeOkrId)
    .reverse().map(d => {
      const okr = data.okrs.find(o => o.id === d.relatedOKR);
      const resp = Utils.findUser(data, d.responsibleId);
      return `<div class="decision-item">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:6px">
        <div class="dec-title">${d.title}</div>
        <span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:100px;background:${Utils.priorityColor[d.priority]}22;color:${Utils.priorityColor[d.priority]};white-space:nowrap">${d.priority}</span>
      </div>
      <div class="dec-body">${d.body}</div>
      <div class="dec-meta">
        <span>📅 ${Utils.formatDate(d.date)}</span><span>👤 ${resp.name}</span>
        ${okr ? `<span>🎯 ${okr.name.substring(0, 45)}…</span>` : ''}
      </div>
    </div>`;
    }).join('');
  container.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">Registro de Decisiones Estratégicas</div><div class="section-sub">Trazabilidad histórica</div></div>
      <button class="btn btn-primary btn-sm" onclick="openNewDecision()">+ Nueva Decisión</button>
    </div>
    <div class="card"><div class="card-body">${items}</div></div>`;
}

function openNewDecision() {
  const data = DB.get();
  const okrOpts = data.okrs.map(o => `<option value="${o.id}">${o.name.substring(0, 55)}…</option>`).join('');
  const userOpts = data.users.map(u => `<option value="${u.name}"></option>`).join('');
  Modal.open('Registrar Decisión Estratégica', `
    <div class="form-group"><label class="form-label">Título</label>
      <input class="form-control" id="dec-title" type="text" placeholder="Ej: Aprobación presupuesto Q2"></div>
    <div class="form-group"><label class="form-label">Descripción</label>
      <textarea class="form-control" id="dec-body" rows="3"></textarea></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">OKR relacionado</label><select class="form-control" id="dec-okr">${okrOpts}</select></div>
      <div class="form-group"><label class="form-label">Prioridad</label>
        <select class="form-control" id="dec-priority"><option>Alta</option><option>Crítica</option><option>Media</option></select></div>
    </div>
    <div class="form-group"><label class="form-label">Responsable</label><input type="text" class="form-control" id="dec-resp" list="users-list" placeholder="Escribir o elegir..."><datalist id="users-list">${userOpts}</datalist></div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveDecision()">Guardar</button>`);
}

function saveDecision() {
  DB.update(data => {
    data.decisions.push({
      id: Utils.uuid(), date: Utils.today(),
      title: document.getElementById('dec-title').value,
      body: document.getElementById('dec-body').value,
      relatedOKR: document.getElementById('dec-okr').value,
      priority: document.getElementById('dec-priority').value,
      responsibleId: document.getElementById('dec-resp').value
    })
  });
  Modal.close(); showToast('Decisión registrada ✓');
  renderDecisions(document.getElementById('page-content'));
}


let draggedKA = null;
window.dragKA = function (ev, tkrId, kaId) {
  draggedKA = { tkrId, kaId };
  ev.dataTransfer.effectAllowed = 'move';
  ev.target.style.opacity = '0.5';
};
window.allowDropKA = function (ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = 'move';
};
window.dropKA = function (ev, targetTkrId, targetKaId) {
  ev.preventDefault();
  if (!draggedKA) return;

  let srcTkr, tgtTkr;
  const data = DB.get();
  data.okrs.forEach(o => o.projectKRs.forEach(p => {
    p.tkrs.forEach(t => {
      if (t.id === draggedKA.tkrId) srcTkr = t;
      if (t.id === targetTkrId) tgtTkr = t;
    });
  }));

  if (srcTkr && tgtTkr) {
    const kaIdx = srcTkr.kas.findIndex(k => k.id === draggedKA.kaId);
    if (kaIdx > -1) {
      const ka = srcTkr.kas.splice(kaIdx, 1)[0];
      const tgtIdx = tgtTkr.kas.findIndex(k => k.id === targetKaId);
      if (tgtIdx === -1) {
        tgtTkr.kas.push(ka);
      } else {
        tgtTkr.kas.splice(tgtIdx, 0, ka);
      }
      DB.update(d => { d.okrs = data.okrs; });
    }
  }
  draggedKA = null;
  if (typeof renderManage === 'function') {
    const container = document.getElementById('page-content');
    if (container) renderManage(container);
  }
};

window.toggleManagePKR = function (pkrId) {
  const rows = document.querySelectorAll('.child-of-' + pkrId);
  if (!rows.length) return;
  const chevron = document.getElementById('chevron-' + pkrId);
  let isHidden = rows[0].style.display === 'none';
  rows.forEach(r => r.style.display = isHidden ? '' : 'none');
  if (chevron) {
    chevron.style.transform = isHidden ? '' : 'rotate(-90deg)';
  }
};
