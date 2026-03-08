/* ──────────────────────────────────────────────
   Strategic OKR Intelligence System – App Core
────────────────────────────────────────────── */

// ── State ─────────────────────────────────────
const AppState = {
    currentPage: 'dashboard',
    currentUser: null,  // set on init
    activeOkrId: 'all', // NEW: Context Switcher
    expandedOKRs: new Set(),
    expandedPKRs: new Set(),
    expandedTKRs: new Set(),
};

// ── Persistence & Context ─────────────────────
function forceSaveData() {
    DB.save();
    showToast('Cambios guardados localmente', 'success');
}

function exportData() {
    const data = DB.get();
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `okr_ean_backup_${Utils.today()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Archivo JSON exportado', 'success');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        try {
            const data = JSON.parse(e.target.result);
            if (!data.okrs) throw new Error("Formato inválido");
            DB.update(() => {
                localStorage.setItem(DB_KEY, JSON.stringify(data));
            });
            // Force reload from local storage
            DB.load();
            init();
            showToast('Datos importados correctamente', 'success');
        } catch (err) {
            showToast('Error al importar el archivo: Formato incorrecto', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset input
}

function importExcelToOkr(event, targetOkrId) {
    const file = event.target.files[0];
    if (!file) return;

    if (typeof XLSX === 'undefined') {
        showToast('Error: Librería de Excel no cargada', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = e => {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const json = XLSX.utils.sheet_to_json(worksheet);

            if (json.length === 0) {
                showToast('El archivo Excel está vacío', 'warning');
                return;
            }

            let importCount = 0;
            DB.update(dbData => {
                const targetOkr = dbData.okrs.find(o => o.id === targetOkrId);
                if (!targetOkr) throw new Error('OKR destino no encontrado');

                // Extrae y vincula KRs y KAs
                importCount = parseExcelAndAttachToOkr(json, targetOkr);
            });

            init();
            showToast(`${importCount} elementos importados al OKR exitosamente`, 'success');
        } catch (err) {
            console.error(err);
            showToast('Error al importar el archivo Excel', 'error');
        }
    };
    reader.readAsArrayBuffer(file);
    event.target.value = ''; // Reset input
}

function importExcelData(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Check if XLSX is loaded
    if (typeof XLSX === 'undefined') {
        showToast('Error: Librería de Excel no cargada', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = e => {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assume the first sheet contains the OKR data
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];

            // Convert to JSON
            const json = XLSX.utils.sheet_to_json(worksheet);

            if (json.length === 0) {
                showToast('El archivo Excel está vacío', 'warning');
                return;
            }

            // Extract OKRs from Flat Excel Structure
            const importedOkrs = parseExcelToOkrs(json);

            if (importedOkrs.length === 0) {
                showToast('No se encontraron OKRs válidos en el archivo', 'error');
                return;
            }

            DB.update(dbData => {
                // Append the imported OKRs to the existing ones
                dbData.okrs = [...dbData.okrs, ...importedOkrs];
            });

            init();
            showToast(`${importedOkrs.length} OKRs importados correctamente`, 'success');
        } catch (err) {
            console.error(err);
            showToast('Error al importar el archivo Excel', 'error');
        }
    };
    reader.readAsArrayBuffer(file);
    event.target.value = ''; // Reset input
}

function parseExcelAndAttachToOkr(rows, targetOkr) {
    let lastPkr = null;
    let lastTkr = null;
    let addedCount = 0;
    const defaultUser = 'u1';

    // Maps for explicit parent linking if provided in Excel
    const pkrMap = {};
    const tkrMap = {};

    rows.forEach(row => {
        const type = (row['Tipo'] || '').toString().trim().toUpperCase();
        if (!type || type === 'OKR') return;

        const id = row['ID'] ? row['ID'].toString() : Utils.uuid();
        const name = row['Nombre'] || 'Sin nombre';
        const parentId = row['ID Padre'] ? row['ID Padre'].toString() : null;

        if (type === 'PKR') {
            const pkr = {
                id: id,
                name: name,
                metricMain: row['Metrica'] || name,
                baseline: parseFloat(row['Linea Base']) || 0,
                target: parseFloat(row['Meta']) || 100,
                current: parseFloat(row['Actual']) || 0,
                unit: row['Unidad Medida'] || '',
                verificationSource: row['Fuente'] || '',
                indicatorType: row['Tipo Indicador'] || 'Operativo',
                weightInOKR: parseFloat(row['Peso']) || 25,
                responsibleId: resolveUserNameToId(row['Responsable']) || defaultUser,
                tkrs: []
            };
            targetOkr.projectKRs.push(pkr);
            lastPkr = pkr;
            pkrMap[id] = pkr;
            addedCount++;
        }
        else if (type === 'TKR') {
            // Priority: explicit parentId > last sequential PKR
            const parentPkr = parentId ? pkrMap[parentId] : lastPkr;
            if (!parentPkr) return;

            const tkr = {
                id: id,
                name: name,
                metric: row['Metrica'] || name,
                formula: row['Formula'] || '',
                baseline: parseFloat(row['Linea Base']) || 0,
                target: parseFloat(row['Meta']) || 100,
                current: parseFloat(row['Actual']) || 0,
                unit: row['Unidad Medida'] || '',
                weightInPKR: parseFloat(row['Peso']) || 25,
                periodicity: row['Periodicidad'] || 'Mensual',
                responsibleId: resolveUserNameToId(row['Responsable']) || defaultUser,
                kas: []
            };
            parentPkr.tkrs.push(tkr);
            lastTkr = tkr;
            tkrMap[id] = tkr;
            addedCount++;
        }
        else if (type === 'KA') {
            // Priority: explicit parentId > last sequential TKR
            const parentTkr = parentId ? tkrMap[parentId] : lastTkr;
            if (!parentTkr) return;

            const ka = {
                id: id,
                description: name,
                responsibleId: resolveUserNameToId(row['Responsable']) || defaultUser,
                status: row['Estado'] || 'No iniciado',
                startDate: row['Fecha Inicio'] || Utils.today(),
                endDate: row['Fecha Fin'] || '',
                progress: parseFloat(row['Progreso']) || 0,
                impactWeight: parseFloat(row['Peso']) || 25,
                region: row['Region'] || 'Nacional',
                notes: row['Notas'] || ''
            };
            parentTkr.kas.push(ka);
            addedCount++;
        }
    });

    return addedCount;
}

function resolveUserNameToId(nameStr) {
    if (!nameStr) return null;
    const data = DB.get();
    const user = data.users.find(u => u.name.toLowerCase().includes(nameStr.toLowerCase().trim()));
    return user ? user.id : null;
}

// ── Toast ─────────────────────────────────────
function showToast(msg, type = 'success', duration = 3000) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: '✓', warning: '⚠', error: '✕', info: 'ℹ' };
    toast.innerHTML = `< span > ${icons[type] || '✓'}</span > ${msg}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), duration);
}

// ── Modal ─────────────────────────────────────
const Modal = {
    overlay: null,
    el: null,
    init() {
        this.overlay = document.getElementById('modal-overlay');
        this.el = document.getElementById('modal');
        this.overlay.addEventListener('click', e => { if (e.target === this.overlay) this.close(); });
    },
    open(title, bodyHTML, actions = '') {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-body').innerHTML = bodyHTML;
        document.getElementById('modal-actions').innerHTML = actions;
        this.overlay.classList.add('open');
    },
    close() {
        this.overlay.classList.remove('open');
    }
};

// ── Navigation ────────────────────────────────
const NAV_ITEMS = [
    { id: 'dashboard', icon: '⬡', label: 'Dashboard Ejecutivo', section: 'PRINCIPAL' },
    { id: 'okrtree', icon: '◈', label: 'OKR Explorer', section: '' },
    { id: 'composite', icon: '◎', label: 'Índice Compuesto', section: '' },
    { id: 'heatmap', icon: '▦', label: 'Heatmap Regional', section: '' },
    { id: 'manage', icon: '⊞', label: 'Gestión OKR', section: 'GESTIÓN' },
    { id: 'checkins', icon: '✓', label: 'Check-ins', section: '' },
    { id: 'alerts', icon: '⚑', label: 'Alertas', section: '', badge: true },
    { id: 'decisions', icon: '◉', label: 'Decisiones', section: '' },
    { id: 'governance', icon: '⊛', label: 'Gobernanza', section: 'CONFIGURACIÓN' },
    { id: 'export', icon: '↓', label: 'Exportar', section: '' },
];

function renderSidebar() {
    const data = DB.get();
    const user = AppState.currentUser;
    const alerts = generateAlerts(data);
    const criticalCount = alerts.filter(a => a.severity === 'critica').length;

    let html = '';
    let lastSection = '';
    NAV_ITEMS.forEach(item => {
        if (item.section && item.section !== lastSection) {
            html += `< div class= "nav-section-label" > ${item.section}</div > `;
            lastSection = item.section;
        }
        const isActive = AppState.currentPage === item.id;
        const badge = item.badge && criticalCount > 0 ? `< span class= "nav-badge" > ${criticalCount}</span > ` : '';
        html += `< div class= "nav-item ${isActive ? 'active' : ''}" data - page="${item.id}" >
      <span class="nav-icon">${item.icon}</span>
      <span>${item.label}</span>
      ${badge}
    </div > `;
    });

    document.getElementById('sidebar-nav').innerHTML = html;

    // Footer
    const roleColors = { admin: '#6366f1', project_lead: '#10b981', tkr_owner: '#f59e0b', ka_owner: '#06b6d4', viewer: '#94a3b8' };
    document.getElementById('sidebar-footer').innerHTML = `
                < div class= "avatar" style = "background:${roleColors[user.role] || '#6366f1'}" > ${user.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</div >
    <div class="user-info">
      <div class="user-name">${user.name}</div>
      <div class="user-role">${Utils.roleLabel[user.role]}</div>
    </div>
    <div class="role-dot"></div>`;

    document.querySelectorAll('.nav-item').forEach(el => {
        el.addEventListener('click', () => navigate(el.dataset.page));
    });
}

function navigate(page) {
    AppState.currentPage = page;
    renderSidebar();
    renderPage(page);
}

function renderPage(page) {
    const content = document.getElementById('page-content');
    const topbarTitle = document.getElementById('topbar-title');
    const topbarSub = document.getElementById('topbar-sub');

    const titles = {
        dashboard: ['Dashboard Ejecutivo', 'Modelo Ean Virtual 2.0 — Seguimiento estratégico en tiempo real'],
        okrtree: ['OKR Explorer', 'Jerarquía multinivel: OKR → Project KR → TKR → Key Actions'],
        composite: ['Índice Compuesto Estratégico', 'Indicador compuesto de posicionamiento Ean Virtual'],
        heatmap: ['Heatmap Regional', 'Desempeño de captación por región geográfica'],
        manage: ['Gestión de OKRs', 'Crear, editar y actualizar el árbol OKR'],
        checkins: ['Check-ins Semanales', 'Registro de avances y riesgos por OKR'],
        alerts: ['Sistema de Alertas', 'Desviaciones detectadas automáticamente'],
        decisions: ['Registro de Decisiones', 'Trazabilidad histórica de decisiones estratégicas'],
        governance: ['Gobernanza y Roles', 'Usuarios, permisos y estructura de responsabilidad'],
        export: ['Exportar', 'Descarga de reportes ejecutivos en PDF y Excel'],
    };

    const [t, s] = titles[page] || ['—', ''];
    topbarTitle.textContent = t;
    topbarSub.textContent = s;

    const pages = {
        dashboard: renderDashboard,
        okrtree: renderOKRTree,
        composite: renderComposite,
        heatmap: renderHeatmapPage,
        manage: renderManage,
        checkins: renderCheckins,
        alerts: renderAlerts,
        decisions: renderDecisions,
        governance: renderGovernance,
        export: renderExport,
    };

    content.innerHTML = '';
    if (pages[page]) pages[page](content);
}

// ── Alert generation ──────────────────────────
function generateAlerts(data) {
    const alerts = [];
    const ci = data.compositeIndex;
    const captPct = ci.captacion.value / ci.captacion.target * 100;
    if (captPct < 90) {
        alerts.push({ id: 'a-capt', severity: 'critica', icon: '🔴', title: 'Captación bajo meta crítica — Penalización activa', desc: `Captación al ${captPct.toFixed(1)} % de meta(< 90 %).El Índice Compuesto aplica penalización ×0.7.Se requiere acción inmediata.`, date: 'Hoy', okr: 'OKR 1' });
    }
    data.okrs.forEach(okr => {
        const pct = Calc.okrProgress(okr);
        if (pct < 40) alerts.push({ id: 'a-okr-' + okr.id, severity: 'critica', icon: '🔴', title: `OKR en estado crítico: "${okr.name.substring(0, 60)}..."`, desc: `Progreso global del OKR: ${pct.toFixed(1)} %.Requiere revisión urgente en Comité Estratégico.`, date: 'Hoy', okr: okr.name.substring(0, 40) });
        okr.projectKRs.forEach(pkr => {
            const pp = Calc.pkrProgress(pkr);
            if (pp < 40) alerts.push({ id: 'a-pkr-' + pkr.id, severity: 'critica', icon: '🔴', title: `Project KR crítico: "${pkr.name.substring(0, 55)}..."`, desc: `Progreso: ${pp.toFixed(1)} %.Revisar TKRs asociados y acciones pendientes.`, date: 'Esta semana', okr: okr.name.substring(0, 40) });
            pkr.tkrs.forEach(tkr => {
                const tp = Calc.tkrProgress(tkr);
                if (tp < 40) alerts.push({ id: 'a-tkr-' + tkr.id, severity: 'alta', icon: '🟡', title: `TKR en riesgo: "${tkr.name.substring(0, 55)}..."`, desc: `Progreso: ${tp.toFixed(1)} %.Revisar Key Actions bloqueadas.`, date: 'Esta semana', okr: okr.name.substring(0, 40) });
                tkr.kas.forEach(ka => {
                    if (ka.status === 'Riesgo') alerts.push({ id: 'a-ka-' + ka.id, severity: 'alta', icon: '⚠️', title: `KA en riesgo: "${ka.description.substring(0, 55)}..."`, desc: `Responsable: ${Utils.findUser(data, ka.responsibleId).name}.Fecha límite: ${Utils.formatDate(ka.endDate)}.`, date: Utils.formatDate(ka.endDate), okr: '' });
                    const due = new Date(ka.endDate);
                    const today = new Date();
                    if (ka.status !== 'Completado' && due < today) alerts.push({ id: 'a-od-' + ka.id, severity: 'alta', icon: '📅', title: `KA vencida: "${ka.description.substring(0, 55)}..."`, desc: `Fecha límite superada.Progreso actual: ${ka.progress} %.`, date: Utils.formatDate(ka.endDate), okr: '' });
                });
            });
        });
    });
    return alerts;
}

// ── Init ──────────────────────────────────────
function init() {
    DB.load();
    const data = DB.get();

    // Populate OKR context switcher
    const switcher = document.getElementById('okr-context-switcher');
    if (switcher) {
        let opts = '<option value="all">Todos los OKRs (Global)</option>';
        data.okrs.forEach(okr => {
            opts += `< option value = "${okr.id}" > ${okr.name.substring(0, 50)}${okr.name.length > 50 ? '…' : ''}</option > `;
        });
        switcher.innerHTML = opts;
        switcher.value = AppState.activeOkrId;
    }

    AppState.currentUser = data.users[0]; // admin by default
    Modal.init();
    renderSidebar();
    renderPage('dashboard');
    // pre-expand first OKR
    AppState.expandedOKRs.add('okr1');
}

document.addEventListener('DOMContentLoaded', init);
