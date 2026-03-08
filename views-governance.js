// ── Governance View ───────────────────────────
function renderGovernance(container) {
    const data = DB.get();
    const roleColors = { admin: '#6366f1', project_lead: '#10b981', tkr_owner: '#f59e0b', ka_owner: '#06b6d4', viewer: '#94a3b8' };
    const rolePerms = {
        admin: ['Ver todo', 'Editar OKRs', 'Editar KAs', 'Gestionar usuarios', 'Exportar', 'Check-ins', 'Decisiones'],
        project_lead: ['Ver todo', 'Editar Project KRs', 'Editar TKRs', 'Editar KAs', 'Check-ins', 'Exportar'],
        tkr_owner: ['Ver dashboard', 'Editar KAs propias', 'Check-ins', 'Ver alertas'],
        ka_owner: ['Ver dashboard', 'Editar KAs propias', 'Check-ins'],
        viewer: ['Ver dashboard', 'Ver árbol OKR', 'Ver heatmap']
    };

    const cards = data.users.map(u => {
        const color = roleColors[u.role] || '#94a3b8';
        const initials = u.name.split(' ').map(w => w[0]).slice(0, 2).join('');
        const perms = (rolePerms[u.role] || []).map(p => `<span class="perm-chip">${p}</span>`).join('');
        return `<div class="role-card">
      <div class="role-avatar" style="background:${color}">${initials}</div>
      <div style="flex:1;min-width:0">
        <div class="role-name">${u.name}</div>
        <div class="role-label">${Utils.roleLabel[u.role]} · ${u.email}</div>
        <div class="role-perms" style="margin-top:6px">${perms}</div>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="showToast('Funcionalidad de edición de usuarios disponible en v2.1','info')">✎</button>
    </div>`;
    }).join('');

    container.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">Gobernanza y Roles</div><div class="section-sub">Estructura de responsabilidad y permisos del sistema</div></div>
      <button class="btn btn-primary btn-sm" onclick="showToast('Invitación enviada al nuevo usuario','success')">+ Invitar usuario</button>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
      <div class="card">
        <div class="card-header"><div class="card-title">Usuarios y Roles</div></div>
        <div class="card-body">${cards}</div>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="card">
          <div class="card-header"><div class="card-title">Jerarquía de Responsabilidad</div></div>
          <div class="card-body">
            <div style="display:flex;flex-direction:column;gap:8px">
              ${[
            ['#6366f1', 'Administrador Estratégico', 'Visión global, aprobación de OKRs y decisiones'],
            ['#10b981', 'Líder de Proyecto', 'Gestión de Project KRs y coordinación táctica'],
            ['#f59e0b', 'Responsable TKR', 'Ejecución y medición de resultados tácticos'],
            ['#06b6d4', 'Responsable KA', 'Ejecución de acciones operativas y reporte semanal'],
            ['#94a3b8', 'Visualizador Ejecutivo', 'Acceso de solo lectura al dashboard y reportes']
        ].map(([c, t, d]) => `<div style="display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
                <div style="width:12px;height:12px;border-radius:50%;background:${c};margin-top:3px;flex-shrink:0"></div>
                <div><div style="font-size:13px;font-weight:700;color:var(--text-1)">${t}</div><div style="font-size:11.5px;color:var(--text-3);margin-top:1px">${d}</div></div>
              </div>`).join('')}
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header"><div class="card-title">Cambiar Usuario Activo</div></div>
          <div class="card-body">
            <p style="font-size:12.5px;color:var(--text-3);margin-bottom:12px">Simula el rol activo para visualizar permisos:</p>
            <div style="display:flex;flex-direction:column;gap:6px">
              ${data.users.map(u => {
            const color = roleColors[u.role] || '#94a3b8';
            const isActive = AppState.currentUser.id === u.id;
            return `<button onclick="switchUser('${u.id}')" class="btn ${isActive ? 'btn-primary' : 'btn-secondary'}" style="justify-content:flex-start;gap:10px">
                  <div style="width:22px;height:22px;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#fff;flex-shrink:0">${u.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</div>
                  <div style="text-align:left">
                    <div style="font-size:12.5px;font-weight:700">${u.name}</div>
                    <div style="font-size:10.5px;opacity:.7">${Utils.roleLabel[u.role]}</div>
                  </div>
                  ${isActive ? '<span style="margin-left:auto;font-size:10px">● Activo</span>' : ''}
                </button>`;
        }).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function switchUser(userId) {
    const data = DB.get();
    const user = data.users.find(u => u.id === userId);
    if (user) {
        AppState.currentUser = user;
        showToast(`Sesión cambiada a: ${user.name}`);
        renderSidebar();
        renderGovernance(document.getElementById('page-content'));
    }
}

// ── Export View ───────────────────────────────
function renderExport(container) {
    container.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">Exportar Reportes Ejecutivos</div><div class="section-sub">Descarga de informes en múltiples formatos</div></div>
    </div>

    <div style="display:flex;gap:16px;flex-wrap:wrap">
      <div class="export-card" onclick="exportPDF()">
        <div class="export-icon">📄</div>
        <div class="export-title">Reporte Ejecutivo PDF</div>
        <div class="export-desc">Resumen estratégico completo: OKRs, Índice Compuesto, Heatmap, Alertas y Tendencias.</div>
        <button class="btn btn-primary">Exportar PDF</button>
      </div>
      <div class="export-card" onclick="exportExcel()">
        <div class="export-icon">📊</div>
        <div class="export-title">Datos OKR — Excel</div>
        <div class="export-desc">Árbol OKR completo con todos los niveles, métricas, responsables y fechas en formato CSV.</div>
        <button class="btn btn-primary">Exportar CSV</button>
      </div>
      <div class="export-card" onclick="showToast('Integración con Google Sheets disponible en la próxima versión','info')">
        <div class="export-icon">🔗</div>
        <div class="export-title">Google Sheets</div>
        <div class="export-desc">Sincronización automática con Google Sheets para actualización en tiempo real. <br><em>Próximamente</em></div>
        <button class="btn btn-secondary">Conectar</button>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Vista previa del reporte ejecutivo</div></div>
      <div class="card-body" id="export-preview">${buildExportPreview()}</div>
    </div>
  `;
}

function buildExportPreview() {
    const data = DB.get();
    const global = Calc.globalProgress(data);
    const ci = Calc.compositeIndex(data.compositeIndex);
    const rows = data.okrs.map(okr => {
        const p = Calc.okrProgress(okr);
        return `<tr>
      <td class="td-name">${okr.name.substring(0, 60)}…</td>
      <td>${okr.responsibleUnit}</td>
      <td><strong>${p.toFixed(0)}%</strong></td>
      <td><span class="tl-badge ${Calc.trafficLight(p)}"><span class="dot"></span>${Calc.trafficLightLabel(p)}</span></td>
    </tr>`;
    }).join('');
    return `
    <div style="border:2px solid var(--border);border-radius:var(--radius-md);padding:24px;font-size:12.5px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;padding-bottom:16px;border-bottom:2px solid var(--border)">
        <div>
          <div style="font-size:18px;font-weight:800;color:var(--text-1)">Universidad EAN</div>
          <div style="font-size:13px;font-weight:600;color:var(--brand-primary)">Modelo Ean Virtual 2.0 — Reporte Estratégico OKR</div>
          <div style="color:var(--text-4);margin-top:2px">Fecha: ${Utils.formatDate(Utils.today())} · Generado por: ${AppState.currentUser.name}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:28px;font-weight:800;color:var(--brand-primary)">${global.toFixed(0)}%</div>
          <div style="font-size:11px;color:var(--text-3)">Progreso Global OKR</div>
        </div>
      </div>
      <table class="data-table"><thead><tr><th>OKR Estratégico</th><th>Responsable</th><th>Progreso</th><th>Estado</th></tr></thead><tbody>${rows}</tbody></table>
      <div style="margin-top:16px;padding:12px 16px;background:var(--surface-0);border-radius:var(--radius-sm)">
        <strong>Índice Compuesto Estratégico:</strong> ${ci.toFixed(1)} / 100 &nbsp;·&nbsp;
        <strong>Matrículas:</strong> 1,310 / 1,800 (${(1310 / 1800 * 100).toFixed(0)}%) &nbsp;·&nbsp;
        <strong>NPS:</strong> 48 puntos &nbsp;·&nbsp;
        <strong>Alianzas:</strong> 5 / 10
      </div>
    </div>`;
}

function exportPDF() {
    if (window.print) {
        const preview = document.getElementById('export-preview');
        if (!preview) { showToast('Vista previa no disponible', 'error'); return; }
        showToast('Abriendo diálogo de impresión / guardar PDF…', 'info');
        setTimeout(() => window.print(), 500);
    }
}

function exportExcel() {
    const data = DB.get();
    const rows = [['OKR', 'Project KR', 'TKR', 'Key Action', 'Responsable', 'Estado', 'Progreso %', 'Fecha Fin', 'Región']];
    data.okrs.forEach(okr => {
        okr.projectKRs.forEach(pkr => {
            pkr.tkrs.forEach(tkr => {
                tkr.kas.forEach(ka => {
                    const resp = Utils.findUser(data, ka.responsibleId).name;
                    rows.push([`"${okr.name}"`, `"${pkr.name}"`, `"${tkr.name}"`, `"${ka.description}"`, resp, ka.status, ka.progress, ka.endDate, ka.region || '']);
                });
            });
        });
    });
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `OKR_EanVirtual_${Utils.today()}.csv`;
    a.click(); URL.revokeObjectURL(url);
    showToast('CSV exportado correctamente ✓');
}
