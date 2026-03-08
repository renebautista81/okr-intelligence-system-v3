// ── Composite Index View ──────────────────────
function renderComposite(container) {
    const data = DB.get();
    const ci = data.compositeIndex;
    const score = Calc.compositeIndex(ci);
    const captPct = ci.captacion.value / ci.captacion.target * 100;
    const penalized = captPct < 90;
    const tl = Calc.trafficLight(score);
    const tlColors = { green: '#10b981', amber: '#f59e0b', red: '#ef4444' };
    const scoreColor = tlColors[tl];

    // SVG gauge (semi-circle)
    const r = 90, circ = Math.PI * r;
    const dash = (score / 100) * circ;

    const compRows = Object.entries(ci).map(([key, c]) => {
        const norm = Math.min(c.value / c.target * 100, 100);
        const barColor = norm >= 70 ? '#10b981' : norm >= 40 ? '#f59e0b' : '#ef4444';
        return `<div class="comp-bar-row">
      <div class="comp-bar-label">
        <span class="comp-bar-name">${c.label}</span>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="comp-bar-weight">Peso ${Math.round(c.weight * 100)}%</span>
          <span class="comp-bar-pct" style="color:${barColor}">${norm.toFixed(1)}%</span>
        </div>
      </div>
      <div class="comp-bar-track"><div class="comp-bar-fill" style="width:${norm}%;background:${barColor}"></div></div>
      <div style="display:flex;justify-content:space-between;font-size:10.5px;color:var(--text-4);margin-top:3px">
        <span>Actual: <strong>${c.value}</strong></span><span>Meta: <strong>${c.target}</strong></span>
        ${key === 'captacion' && norm < 90 ? '<span style="color:#ef4444;font-weight:700">⚠ Bajo umbral crítico</span>' : ''}
      </div>
    </div>`;
    }).join('');

    container.innerHTML = `
    <div class="section-header">
      <div>
        <div class="section-title">Índice Compuesto Estratégico — Ean Virtual 2.0</div>
        <div class="section-sub">Combina 5 dimensiones con ponderación diferenciada y penalización por captación</div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="openEditCompositeModal()">✎ Actualizar valores</button>
    </div>

    ${penalized ? `<div class="penalty-banner">
      ⚠️ <strong>Penalización activa:</strong> La captación de matrículas está al ${captPct.toFixed(1)}% de meta (umbral: 90%). El índice final se penaliza automáticamente con factor ×0.7. Sin penalización el índice sería <strong>${(score / 0.7).toFixed(1)}</strong>.
    </div>` : `<div class="penalty-banner" style="background:#f0fdf4;border-color:#86efac;color:#15803d">
      ✅ Sin penalización activa. Captación al ${captPct.toFixed(1)}% de meta (≥90% requerido).
    </div>`}

    <div class="card">
      <div class="card-body" style="padding:24px">
        <div class="composite-grid">
          <!-- Gauge -->
          <div class="composite-gauge-wrap">
            <div class="composite-gauge">
              <svg width="240" height="130" viewBox="0 0 220 130">
                <path d="M20,120 A90,90 0 0,1 200,120" fill="none" stroke="var(--surface-1)" stroke-width="18" stroke-linecap="round"/>
                <path d="M20,120 A90,90 0 0,1 200,120" fill="none" stroke="${scoreColor}" stroke-width="18" stroke-linecap="round"
                  stroke-dasharray="${dash} ${circ}" style="transition:stroke-dasharray .8s ease"/>
              </svg>
              <div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);text-align:center">
                <div style="font-size:40px;font-weight:800;color:var(--text-1);line-height:1">${score.toFixed(1)}</div>
                <div style="font-size:12px;color:var(--text-3);font-weight:600">/100</div>
                <span class="tl-badge ${tl}" style="margin-top:6px;display:inline-flex"><span class="dot"></span>${Calc.trafficLightLabel(score)}</span>
              </div>
            </div>
            <div style="text-align:center">
              <div style="font-size:13px;font-weight:700;color:var(--text-1)">Índice Compuesto Global</div>
              <div style="font-size:11.5px;color:var(--text-3);margin-top:3px">${penalized ? 'Con penalización ×0.7 aplicada' : 'Calculado sin penalización'}</div>
            </div>
          </div>

          <!-- Bars -->
          <div>
            <div style="font-size:13px;font-weight:700;color:var(--text-2);margin-bottom:18px">Componentes del Índice</div>
            <div class="composite-bars">${compRows}</div>
            <div style="margin-top:20px;padding:12px 16px;background:var(--surface-0);border-radius:var(--radius-md);border:1px solid var(--border)">
              <div style="font-size:11.5px;color:var(--text-3);font-weight:600;margin-bottom:6px">📐 Fórmula:</div>
              <div style="font-family:'Fira Mono',monospace;font-size:11.5px;color:var(--text-2);line-height:1.7">
                Índice = (0.40 × Captación) + (0.20 × Reputación) + (0.20 × Alianzas)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ (0.10 × NPS) + (0.10 × Retención)<br>
                <span style="color:var(--red)">Si Captación &lt; 90% meta → Índice × 0.70</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openEditCompositeModal() {
    const data = DB.get();
    const ci = data.compositeIndex;
    const fields = Object.entries(ci).map(([key, c]) =>
        `<div class="form-group">
      <label class="form-label">${c.label} (Peso ${Math.round(c.weight * 100)}%)</label>
      <input type="number" class="form-control" id="ci-${key}" value="${c.value}" min="0" max="${c.target * 1.5}" step="0.1">
    </div>`
    ).join('');
    Modal.open('Actualizar Índice Compuesto', fields,
        `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveComposite()">Guardar</button>`);
}

function saveComposite() {
    DB.update(data => {
        Object.keys(data.compositeIndex).forEach(key => {
            const el = document.getElementById('ci-' + key);
            if (el) data.compositeIndex[key].value = parseFloat(el.value) || 0;
        });
    });
    Modal.close();
    showToast('Índice Compuesto actualizado');
    renderComposite(document.getElementById('page-content'));
}

// ── Heatmap Page ──────────────────────────────
function renderHeatmapPage(container) {
    const data = DB.get();
    const regions = data.regionData;

    const cells = Object.entries(regions).map(([name, rd]) => {
        const pct = Utils.pct(rd.current, rd.target);
        const cls = pct >= 70 ? 'hm-green' : pct >= 40 ? 'hm-amber' : 'hm-red';
        const barColor = pct >= 70 ? '#10b981' : pct >= 40 ? '#f59e0b' : '#ef4444';
        const trend = rd.trend;
        const delta = trend.length >= 2 ? trend[trend.length - 1] - trend[trend.length - 2] : 0;
        return `<div class="heatmap-cell ${cls}" style="padding:20px 18px">
      <div class="heatmap-region" style="font-size:14px;margin-bottom:10px">${name}</div>
      <div class="heatmap-pct" style="font-size:34px">${pct.toFixed(0)}%</div>
      <div style="display:flex;justify-content:space-between;margin-top:6px">
        <div class="heatmap-detail" style="font-size:12px">
          <div><strong>${rd.current.toLocaleString()}</strong> matrículas</div>
          <div>Meta: ${rd.target.toLocaleString()}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:11px;font-weight:700;color:${delta >= 0 ? '#10b981' : '#ef4444'}">
            ${delta >= 0 ? '▲' : '▼'} ${Math.abs(delta)}
          </div>
          <div style="font-size:10px;color:var(--text-4)">vs mes ant.</div>
        </div>
      </div>
      <div class="heatmap-bar" style="height:6px;margin-top:12px"><div class="heatmap-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
      <div class="tl-badge ${Calc.trafficLight(pct)}" style="margin-top:10px;display:inline-flex"><span class="dot"></span>${Calc.trafficLightLabel(pct)}</div>
    </div>`;
    }).join('');

    const totalCurrent = Object.values(regions).reduce((s, r) => s + r.current, 0);
    const totalTarget = Object.values(regions).reduce((s, r) => s + r.target, 0);

    container.innerHTML = `
    <div class="section-header">
      <div>
        <div class="section-title">Heatmap de Captación por Región</div>
        <div class="section-sub">Análisis detallado de matrículas vs meta en las 5 regiones priorizadas</div>
      </div>
    </div>

    <div class="kpi-grid" style="grid-template-columns:repeat(3,1fr)">
      <div class="kpi-card" style="--kpi-accent:var(--brand-primary)">
        <div class="kpi-label">Total matrículas nacionales</div>
        <div class="kpi-value">${totalCurrent.toLocaleString()}</div>
        <div class="kpi-delta ${totalCurrent / totalTarget >= 0.9 ? 'pos' : 'neg'}">Meta: ${totalTarget.toLocaleString()} · ${(totalCurrent / totalTarget * 100).toFixed(0)}%</div>
      </div>
      <div class="kpi-card" style="--kpi-accent:#10b981">
        <div class="kpi-label">Regiones en meta (≥70%)</div>
        <div class="kpi-value">${Object.values(regions).filter(r => Utils.pct(r.current, r.target) >= 70).length}<span class="kpi-unit">/ ${Object.keys(regions).length}</span></div>
        <div class="kpi-delta pos">Bogotá y Medellín lideran</div>
      </div>
      <div class="kpi-card" style="--kpi-accent:#ef4444">
        <div class="kpi-label">Regiones críticas (&lt;40%)</div>
        <div class="kpi-value">${Object.values(regions).filter(r => Utils.pct(r.current, r.target) < 40).length}</div>
        <div class="kpi-delta neg">Requieren plan de choque</div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Vista Regional — Matrículas vs Meta 2026</div>
      </div>
      <div class="card-body">
        <div class="heatmap-grid" style="grid-template-columns:repeat(5,1fr)">${cells}</div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Tendencia de captación por región (últimos 5 meses)</div>
      </div>
      <div class="card-body">
        <div class="chart-container" style="height:240px"><canvas id="regional-chart"></canvas></div>
      </div>
    </div>
  `;
    requestAnimationFrame(() => drawRegionalChart(data));
}

function drawRegionalChart(data) {
    const canvas = document.getElementById('regional-chart');
    if (!canvas || !window.Chart) return;
    const ctx = canvas.getContext('2d');
    const labels = ['Oct 25', 'Nov 25', 'Dic 25', 'Ene 26', 'Feb 26'];
    const colors = ['#6366f1', '#10b981', '#f59e0b', '#06b6d4', '#8b5cf6'];
    const datasets = Object.entries(data.regionData).map(([name, rd], i) => ({
        label: name, data: rd.trend, borderColor: colors[i], backgroundColor: colors[i] + '15',
        tension: .4, fill: false, pointRadius: 4
    }));
    new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { font: { size: 11, family: 'Inter' }, boxWidth: 10, padding: 14 } } },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 11 } } },
                y: { grid: { color: 'rgba(0,0,0,.04)' }, ticks: { font: { size: 11 } } }
            }
        }
    });
}

// ── Alerts View ───────────────────────────────
function renderAlerts(container) {
    const data = DB.get();
    const alerts = generateAlerts(data);
    const critical = alerts.filter(a => a.severity === 'critica');
    const high = alerts.filter(a => a.severity === 'alta');

    const alertHTML = alerts.length === 0
        ? `<div class="empty-state"><div class="es-icon">✅</div><div class="es-title">Sin alertas activas</div><div class="es-sub">Todos los indicadores están dentro de los umbrales esperados.</div></div>`
        : alerts.map(a => `<div class="alert-item sev-${a.severity}">
        <div class="alert-icon">${a.icon}</div>
        <div class="alert-content">
          <div class="alert-title">${a.title}</div>
          <div class="alert-desc">${a.desc}</div>
          <div class="alert-meta">${a.okr ? `OKR: ${a.okr} ·` : ''} Detectado: ${a.date}</div>
        </div>
      </div>`).join('');

    container.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">Sistema de Alertas Estratégicas</div><div class="section-sub">Desvíos detectados automáticamente según umbrales configurados</div></div>
    </div>
    <div class="kpi-grid" style="grid-template-columns:repeat(3,1fr)">
      <div class="kpi-card" style="--kpi-accent:#ef4444">
        <div class="kpi-label">Alertas críticas</div>
        <div class="kpi-value" style="color:#ef4444">${critical.length}</div>
        <div class="kpi-delta neg">Requieren acción inmediata</div>
      </div>
      <div class="kpi-card" style="--kpi-accent:#f59e0b">
        <div class="kpi-label">Alertas de alto riesgo</div>
        <div class="kpi-value" style="color:#f59e0b">${high.length}</div>
        <div class="kpi-delta neu">Monitorear esta semana</div>
      </div>
      <div class="kpi-card" style="--kpi-accent:#10b981">
        <div class="kpi-label">Total alertas</div>
        <div class="kpi-value">${alerts.length}</div>
        <div class="kpi-delta ${alerts.length === 0 ? 'pos' : 'neg'}">${alerts.length === 0 ? 'Sin alertas activas' : 'Acción requerida'}</div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Alertas Activas</div></div>
      <div class="card-body"><div class="alerts-list">${alertHTML}</div></div>
    </div>
  `;
}
