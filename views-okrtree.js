// ── OKR Tree View ─────────────────────────────
function renderOKRTree(container) {
  let data = DB.get();

  if (AppState.activeOkrId !== 'all') {
    data = JSON.parse(JSON.stringify(data));
    data.okrs = data.okrs.filter(o => o.id === AppState.activeOkrId);
  }

  function kaStatusClass(s) {
    const m = { 'Completado': 'sp-completado', 'En progreso': 'sp-en-progreso', 'No iniciado': 'sp-no-iniciado', 'Riesgo': 'sp-riesgo' };
    return m[s] || 'sp-no-iniciado';
  }

  function kaStatusDot(s) {
    return Utils.statusColor[s] || '#94a3b8';
  }

  function circleProgress(pct, color) {
    const r = 22; const circ = 2 * Math.PI * r;
    const dash = (pct / 100) * circ;
    const tl = Calc.trafficLight(pct);
    const tlColors = { green: '#10b981', amber: '#f59e0b', red: '#ef4444' };
    const c = tlColors[tl];
    return `<div class="okr-pct-circle">
      <svg width="54" height="54" viewBox="0 0 54 54">
        <circle cx="27" cy="27" r="${r}" fill="none" stroke="var(--surface-1)" stroke-width="5"/>
        <circle cx="27" cy="27" r="${r}" fill="none" stroke="${c}" stroke-width="5"
          stroke-dasharray="${dash} ${circ}" stroke-linecap="round"/>
      </svg>
      <div class="pct-text"><span>${pct.toFixed(0)}</span><span class="pct-label">%</span></div>
    </div>`;
  }

  function renderKAs(kas, tkrId) {
    if (!AppState.expandedTKRs.has(tkrId)) return '';
    return `<div class="ka-list">${kas.map(ka => {
      const dotColor = kaStatusDot(ka.status);
      const barColor = dotColor;
      return `<div class="ka-item">
        <div class="ka-status-dot" style="background:${dotColor}"></div>
        <div class="ka-desc">${ka.description}</div>
        <div class="ka-meta">
          <span class="status-pill ${kaStatusClass(ka.status)}">${ka.status}</span>
          <div style="text-align:right">
            <div style="font-size:11px;color:var(--text-4)">${Utils.findUser(data, ka.responsibleId).name.split(' ')[0]}</div>
            <div style="font-size:10px;color:var(--text-4)">${Utils.formatDate(ka.endDate)}</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <div class="ka-mini-bar"><div class="ka-mini-bar-fill" style="width:${ka.progress}%;background:${barColor}"></div></div>
            <span class="ka-pct-val">${ka.progress}%</span>
          </div>
          <button class="ka-btn" onclick="openKAEdit('${ka.id}')">Editar</button>
        </div>
      </div>`;
    }).join('')}</div>`;
  }

  function renderTKRs(tkrs, pkrId) {
    if (!AppState.expandedPKRs.has(pkrId)) return '';
    return `<div class="tkr-children">${tkrs.map(tkr => {
      const tp = Calc.tkrProgress(tkr);
      const tl = Calc.trafficLight(tp);
      const tlColors = { green: '#10b981', amber: '#f59e0b', red: '#ef4444' };
      const isOpen = AppState.expandedTKRs.has(tkr.id);
      return `<div class="tkr-node">
        <div class="tkr-node-header" onclick="toggleTKR('${tkr.id}');renderOKRTree(document.getElementById('page-content'))">
          <span class="tkr-icon">▸</span>
          <div class="tkr-name">${tkr.name}</div>
          <div class="tkr-right">
            <span style="font-size:10.5px;color:var(--text-4)">${tkr.periodicity}</span>
            <span class="tl-badge ${tl}"><span class="dot"></span>${tp.toFixed(0)}%</span>
            <div class="tkr-bar">
              <div class="progress-wrap progress-sm">
                <div class="progress-bar" style="width:${tp}%;--bar-color:${tlColors[tl]}"></div>
              </div>
            </div>
            <span class="expand-chevron ${isOpen ? 'open' : ''}">⌄</span>
          </div>
        </div>
        ${isOpen ? `<div style="padding:8px 14px;font-size:11px;color:var(--text-3);background:var(--surface-0);border-top:1px solid var(--border)">
          <span>Fórmula: <em>${tkr.formula}</em></span> &nbsp;|&nbsp;
          <span>Meta: <strong>${tkr.target} ${tkr.unit}</strong></span> &nbsp;|&nbsp;
          <span>Actual: <strong style="color:var(--brand-primary)">${tkr.current} ${tkr.unit}</strong></span> &nbsp;|&nbsp;
          <span>Responsable: ${Utils.findUser(data, tkr.responsibleId).name}</span>
        </div>` : ''}
        ${renderKAs(tkr.kas, tkr.id)}
      </div>`;
    }).join('')}</div>`;
  }

  function renderPKRs(pkrs, okrId) {
    if (!AppState.expandedOKRs.has(okrId)) return '';
    return `<div class="pkr-children">${pkrs.map(pkr => {
      const pp = Calc.pkrProgress(pkr);
      const tl = Calc.trafficLight(pp);
      const tlColors = { green: '#10b981', amber: '#f59e0b', red: '#ef4444' };
      const isOpen = AppState.expandedPKRs.has(pkr.id);
      return `<div class="pkr-node">
        <div class="pkr-node-header" onclick="togglePKR('${pkr.id}');renderOKRTree(document.getElementById('page-content'))">
          <span class="pkr-type-badge">${pkr.indicatorType}</span>
          <div class="pkr-name">${pkr.name}</div>
          <div class="pkr-progress-wrap">
            <span style="font-size:11px;color:var(--text-4)">Peso ${pkr.weightInOKR}%</span>
            <span class="tl-badge ${tl}"><span class="dot"></span>${Calc.trafficLightLabel(pp)}</span>
            <span class="pkr-pct" style="color:${tlColors[tl]}">${pp.toFixed(0)}%</span>
            <div class="pkr-bar progress-wrap progress-md">
              <div class="progress-bar" style="width:${pp}%;--bar-color:${tlColors[tl]}"></div>
            </div>
            <span class="expand-chevron ${isOpen ? 'open' : ''}">⌄</span>
          </div>
        </div>
        ${isOpen ? `<div style="padding:10px 16px;font-size:11.5px;color:var(--text-3);background:var(--surface-0);border-top:1px solid var(--border);display:flex;gap:20px;flex-wrap:wrap">
          <span>Métrica: <strong style="color:var(--text-1)">${pkr.metricMain}</strong></span>
          <span>LB: <strong>${pkr.baseline} ${pkr.unit}</strong></span>
          <span>Meta: <strong>${pkr.target} ${pkr.unit}</strong></span>
          <span>Actual: <strong style="color:var(--brand-primary)">${pkr.current} ${pkr.unit}</strong></span>
          <span>Fuente: ${pkr.verificationSource}</span>
        </div>` : ''}
        ${renderTKRs(pkr.tkrs, pkr.id)}
      </div>`;
    }).join('')}</div>`;
  }

  function renderOKRNodes() {
    return data.okrs.map(okr => {
      const pct = Calc.okrProgress(okr);
      const tl = Calc.trafficLight(pct);
      const isOpen = AppState.expandedOKRs.has(okr.id);
      return `<div class="okr-node">
        <div class="okr-node-header" onclick="toggleOKR('${okr.id}');renderOKRTree(document.getElementById('page-content'))">
          <div class="okr-color-bar" style="background:${okr.color}"></div>
          <div class="okr-node-main">
            <div class="okr-node-name">${okr.name}</div>
            <div class="okr-node-meta">
              <span class="meta-chip">📅 ${okr.horizon}</span>
              <span class="meta-chip">⚖ Peso: ${okr.strategicWeight}%</span>
              <span class="meta-chip">🏛 ${okr.responsibleUnit}</span>
              <span class="tl-badge ${tl}"><span class="dot"></span>${Calc.trafficLightLabel(pct)}</span>
              <span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:100px;background:${Utils.priorityColor[okr.priority]}22;color:${Utils.priorityColor[okr.priority]}">${okr.priority}</span>
            </div>
          </div>
          <div class="okr-node-right">
            ${circleProgress(pct, okr.color)}
            <span class="expand-chevron ${isOpen ? 'open' : ''}">⌄</span>
          </div>
        </div>
        ${renderPKRs(okr.projectKRs, okr.id)}
      </div>`;
    }).join('');
  }

  container.innerHTML = `
    <div class="section-header">
      <div>
        <div class="section-title">OKR Explorer — Jerarquía Multinivel</div>
        <div class="section-sub">Haz clic en cada nivel para expandir · OKR → Project KR → TKR → Key Actions</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-secondary btn-sm" onclick="AppState.expandedOKRs=new Set(['okr1','okr2','okr3']);AppState.expandedPKRs=new Set();AppState.expandedTKRs=new Set();renderOKRTree(document.getElementById('page-content'))">Expandir todo</button>
        <button class="btn btn-secondary btn-sm" onclick="AppState.expandedOKRs=new Set();AppState.expandedPKRs=new Set();AppState.expandedTKRs=new Set();renderOKRTree(document.getElementById('page-content'))">Colapsar todo</button>
      </div>
    </div>
    <div class="okr-tree" id="okr-tree-container">${renderOKRNodes()}</div>`;
}

function toggleOKR(id) { AppState.expandedOKRs.has(id) ? AppState.expandedOKRs.delete(id) : AppState.expandedOKRs.add(id); }
function togglePKR(id) { AppState.expandedPKRs.has(id) ? AppState.expandedPKRs.delete(id) : AppState.expandedPKRs.add(id); }
function toggleTKR(id) { AppState.expandedTKRs.has(id) ? AppState.expandedTKRs.delete(id) : AppState.expandedTKRs.add(id); }

// ── Edit KA Modal ─────────────────────────────
function openKAEdit(kaId) {
  const data = DB.get();
  let found = null;
  data.okrs.forEach(okr => okr.projectKRs.forEach(pkr => pkr.tkrs.forEach(tkr => tkr.kas.forEach(ka => { if (ka.id === kaId) found = ka; }))));
  if (!found) return;
  const ka = found;
  const statusOpts = ['No iniciado', 'En progreso', 'Completado', 'Riesgo'].map(s => `<option ${ka.status === s ? 'selected' : ''}>${s}</option>`).join('');
  const userOpts = data.users.map(u => `<option value="${u.name}"></option>`).join('');
  const kaRespName = Utils.findUser(data, ka.responsibleId).name;
  Modal.open('Editar Key Action', `
    <div class="form-group"><label class="form-label">Descripción</label><textarea class="form-control" id="ka-desc" rows="3">${ka.description}</textarea></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Estado</label><select class="form-control" id="ka-status">${statusOpts}</select></div>
      <div class="form-group"><label class="form-label">Responsable</label><input type="text" class="form-control" id="ka-resp" list="users-list" value="${kaRespName}"><datalist id="users-list">${userOpts}</datalist></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Fecha inicio</label><input type="date" class="form-control" id="ka-start" value="${ka.startDate}"></div>
      <div class="form-group"><label class="form-label">Fecha fin</label><input type="date" class="form-control" id="ka-end" value="${ka.endDate}"></div>
    </div>
    <div class="form-group">
      <label class="form-label">Progreso: <span id="ka-prog-label">${ka.progress}%</span></label>
      <input type="range" class="form-control" id="ka-prog" min="0" max="100" value="${ka.progress}" oninput="document.getElementById('ka-prog-label').textContent=this.value+'%'">
    </div>
    <div class="form-group"><label class="form-label">Notas</label><textarea class="form-control" id="ka-notes" rows="2">${ka.notes || ''}</textarea></div>
  `, `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveKA('${kaId}')">Guardar cambios</button>`);
}

function saveKA(kaId) {
  DB.update(data => {
    data.okrs.forEach(okr => okr.projectKRs.forEach(pkr => pkr.tkrs.forEach(tkr => tkr.kas.forEach(ka => {
      if (ka.id !== kaId) return;
      ka.description = document.getElementById('ka-desc').value;
      ka.status = document.getElementById('ka-status').value;
      ka.responsibleId = document.getElementById('ka-resp').value;
      ka.startDate = document.getElementById('ka-start').value;
      ka.endDate = document.getElementById('ka-end').value;
      ka.progress = parseInt(document.getElementById('ka-prog').value);
      ka.notes = document.getElementById('ka-notes').value;
      if (ka.status === 'Completado') ka.progress = 100;
    }))));
  });
  Modal.close();
  showToast('Key Action actualizada correctamente');
  renderOKRTree(document.getElementById('page-content'));
}
