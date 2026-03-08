// ── Dashboard ─────────────────────────────────
function renderDashboard(container) {
  let data = DB.get();

  // Create a shadow copy of data if a specific OKR is selected
  if (AppState.activeOkrId !== 'all') {
    data = JSON.parse(JSON.stringify(data));
    data.okrs = data.okrs.filter(okr => okr.id === AppState.activeOkrId);
  }

  const global = Calc.globalProgress(data);
  const ci = Calc.compositeIndex(data.compositeIndex);
  const tl = Calc.trafficLight(global);

  // KPI summary row
  let okrCards = data.okrs.map(okr => {
    const pct = Calc.okrProgress(okr);
    const light = Calc.trafficLight(pct);
    const lightColors = { green: '#10b981', amber: '#f59e0b', red: '#ef4444' };
    return `<div class="kpi-card" style="--kpi-accent:${okr.color}">
      <div class="kpi-label">${okr.responsibleUnit}</div>
      <div style="font-size:13px;font-weight:700;color:var(--text-2);margin-bottom:10px;line-height:1.3">${okr.name.substring(0, 70)}${okr.name.length > 70 ? '…' : ''}</div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
        <div class="kpi-value">${pct.toFixed(0)}<span class="kpi-unit">%</span></div>
        <span class="tl-badge ${light}"><span class="dot"></span>${Calc.trafficLightLabel(pct)}</span>
      </div>
      <div class="progress-wrap progress-sm"><div class="progress-bar" style="width:${pct}%;--bar-color:${lightColors[light]}"></div></div>
      <div style="display:flex;justify-content:space-between;margin-top:6px">
        <span style="font-size:10.5px;color:var(--text-4)">Peso: ${okr.strategicWeight}%</span>
        <span style="font-size:10.5px;color:var(--text-4);background:${okr.color}20;padding:1px 7px;border-radius:100px;color:${okr.color};font-weight:700">${okr.priority}</span>
      </div>
    </div>`;
  }).join('');

  const captPct = data.compositeIndex.captacion.value / data.compositeIndex.captacion.target * 100;
  const penalized = captPct < 90;

  // Trend mini-data
  const trend = data.monthlyTrend;
  const lastLabel = trend.labels[trend.labels.length - 1];

  // Top KAs at risk
  const riskyKAs = [];
  data.okrs.forEach(okr => okr.projectKRs.forEach(pkr => pkr.tkrs.forEach(tkr => tkr.kas.forEach(ka => {
    if (ka.status === 'En progreso' && ka.progress < 30) riskyKAs.push({ ka, tkrName: tkr.name, okrName: okr.name });
  }))));

  const alertCount = generateAlerts(data).length;

  container.innerHTML = `
    <!-- Top summary row -->
    <div class="kpi-grid" style="grid-template-columns:repeat(4,1fr)">
      <div class="kpi-card" style="--kpi-accent:var(--brand-primary)">
        <div class="kpi-label">Progreso Global OKR</div>
        <div class="kpi-value">${global.toFixed(0)}<span class="kpi-unit">%</span></div>
        <div class="kpi-delta ${global >= 60 ? 'pos' : global >= 40 ? 'neu' : 'neg'}">${global >= 60 ? '↑ Avance sostenido' : global >= 40 ? '→ En seguimiento' : '↓ Atención requerida'}</div>
        <div class="progress-wrap progress-sm" style="margin-top:10px"><div class="progress-bar" style="width:${global}%"></div></div>
      </div>
      <div class="kpi-card" style="--kpi-accent:${penalized ? '#ef4444' : '#10b981'}">
        <div class="kpi-label">Índice Compuesto</div>
        <div class="kpi-value">${ci.toFixed(1)}<span class="kpi-unit">/100</span></div>
        <div class="kpi-delta ${penalized ? 'neg' : 'pos'}">${penalized ? '⚠ Penalización activa por captación' : '✓ Sin penalización'}</div>
        <div class="progress-wrap progress-sm" style="margin-top:10px"><div class="progress-bar" style="width:${ci}%;--bar-color:${penalized ? '#ef4444' : '#10b981'}"></div></div>
      </div>
      <div class="kpi-card" style="--kpi-accent:#f59e0b">
        <div class="kpi-label">Total Matrículas 2026</div>
        <div class="kpi-value">1,310<span class="kpi-unit">est.</span></div>
        <div class="kpi-delta neu">Meta: 1,800 · ${(1310 / 1800 * 100).toFixed(0)}% logrado</div>
        <div class="progress-wrap progress-sm" style="margin-top:10px"><div class="progress-bar" style="width:${1310 / 1800 * 100}%;--bar-color:#f59e0b"></div></div>
      </div>
      <div class="kpi-card" style="--kpi-accent:${alertCount > 0 ? '#ef4444' : '#10b981'}">
        <div class="kpi-label">Alertas Activas</div>
        <div class="kpi-value" style="color:${alertCount > 0 ? '#ef4444' : '#10b981'}">${alertCount}</div>
        <div class="kpi-delta ${alertCount > 0 ? 'neg' : 'pos'}">${alertCount > 0 ? `${alertCount} alertas requieren atención` : '✓ Sin alertas críticas'}</div>
        <div style="margin-top:10px"><button class="btn btn-secondary btn-sm" onclick="navigate('alerts')">Ver alertas →</button></div>
      </div>
    </div>

    <!-- OKR progress cards -->
    <div>
      <div class="section-header">
        <div>
          <div class="section-title">Progreso por OKR Estratégico</div>
          <div class="section-sub">Avance calculado mediante ponderación multinivel (KA → TKR → PKR → OKR)</div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="navigate('okrtree')">Ver árbol completo →</button>
      </div>
      <div class="kpi-grid" style="grid-template-columns:repeat(3,1fr)">${okrCards}</div>
    </div>

    <!-- Heatmap preview + Ranking -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
      ${renderHeatmapCard(data)}
      ${renderRankingCard(data)}
    </div>

    <!-- Trend + Checkins -->
    <div style="display:grid;grid-template-columns:2fr 1fr;gap:20px">
      <div class="card">
        <div class="card-header">
          <div><div class="card-title">Tendencia mensual de progreso</div><div class="card-sub">Evolución por OKR (Sep 2025 — Feb 2026)</div></div>
        </div>
        <div class="card-body"><div class="chart-container" style="height:220px"><canvas id="trend-chart"></canvas></div></div>
      </div>
      <div class="card">
        <div class="card-header">
          <div><div class="card-title">Últimos Check-ins</div><div class="card-sub">Registro semanal</div></div>
          <button class="btn btn-ghost btn-sm" onclick="navigate('checkins')">Ver todos</button>
        </div>
        <div class="card-body" style="padding-top:12px">
          ${data.checkins.filter(ci => AppState.activeOkrId === 'all' || ci.okrId === AppState.activeOkrId).slice(0, 3).map(ci => {
    const okr = data.okrs.find(o => o.id === ci.okrId);
    const riskCls = { 'Alto': 'risk-alto', 'Medio': 'risk-medio', 'Bajo': 'risk-bajo' }[ci.riskLevel] || 'risk-bajo';
    return `<div class="checkin-item" style="margin-bottom:8px">
              <div class="checkin-header">
                <span class="checkin-okr">${okr ? okr.name.substring(0, 35) + '…' : 'OKR'}</span>
                <span class="risk-badge ${riskCls}">${ci.riskLevel}</span>
              </div>
              <div style="font-size:11px;color:var(--text-4);margin-bottom:5px">${Utils.formatDate(ci.date)}</div>
              <div class="checkin-body">${ci.summary.substring(0, 120)}…</div>
            </div>`;
  }).join('')}
        </div>
      </div>
    </div>
  `;

  // Draw trend chart
  requestAnimationFrame(() => drawTrendChart(data));
}

function renderHeatmapCard(data) {
  const regions = data.regionData;
  const cells = Object.entries(regions).map(([name, rd]) => {
    const pct = Utils.pct(rd.current, rd.target);
    const cls = pct >= 70 ? 'hm-green' : pct >= 40 ? 'hm-amber' : 'hm-red';
    const barColor = pct >= 70 ? '#10b981' : pct >= 40 ? '#f59e0b' : '#ef4444';
    return `<div class="heatmap-cell ${cls}" onclick="navigate('heatmap')">
      <div class="heatmap-region">${name}</div>
      <div class="heatmap-pct">${pct.toFixed(0)}%</div>
      <div class="heatmap-detail">${rd.current.toLocaleString()} / ${rd.target.toLocaleString()}</div>
      <div class="heatmap-bar"><div class="heatmap-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
    </div>`;
  }).join('');
  return `<div class="card">
    <div class="card-header">
      <div><div class="card-title">Heatmap de Captación Regional</div><div class="card-sub">Matrículas vs meta por región</div></div>
      <button class="btn btn-ghost btn-sm" onclick="navigate('heatmap')">Expandir</button>
    </div>
    <div class="card-body"><div class="heatmap-grid">${cells}</div></div>
  </div>`;
}

function renderRankingCard(data) {
  const entries = data.okrs.flatMap(okr => okr.projectKRs.map(pkr => ({
    name: pkr.name.substring(0, 48) + (pkr.name.length > 48 ? '…' : ''),
    type: pkr.indicatorType,
    pct: Calc.pkrProgress(pkr),
    okrColor: okr.color
  }))).sort((a, b) => b.pct - a.pct);

  const items = entries.slice(0, 6).map((e, i) => {
    const light = Calc.trafficLight(e.pct);
    const lightColors = { green: '#10b981', amber: '#f59e0b', red: '#ef4444' };
    const rankCls = ['r1', 'r2', 'r3'][i] || '';
    return `<div class="ranking-item">
      <div class="rank-num ${rankCls}">${i + 1}</div>
      <div class="rank-info">
        <div class="rank-name">${e.name}</div>
        <div class="rank-sub">${e.type}</div>
      </div>
      <div class="rank-right">
        <div class="rank-pct" style="color:${lightColors[light]}">${e.pct.toFixed(0)}%</div>
        <div class="rank-bar-wrap">
          <div class="progress-wrap progress-sm">
            <div class="progress-bar" style="width:${e.pct}%;--bar-color:${lightColors[light]}"></div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  return `<div class="card">
    <div class="card-header">
      <div><div class="card-title">Ranking de Project KRs</div><div class="card-sub">Ordenado por % de avance</div></div>
    </div>
    <div class="card-body" style="padding-top:14px"><div class="ranking-list">${items}</div></div>
  </div>`;
}

function drawTrendChart(data) {
  const canvas = document.getElementById('trend-chart');
  if (!canvas || !window.Chart) return;
  const ctx = canvas.getContext('2d');

  // Select datasets based on activeOkrId
  let datasets = [];
  if (AppState.activeOkrId === 'all' || AppState.activeOkrId === 'okr1') {
    datasets.push({ label: 'OKR 1 – Despliegue Virtual', data: data.monthlyTrend.okr1, borderColor: '#6366f1', backgroundColor: 'rgba(99,102,241,.08)', tension: .4, fill: true, pointRadius: 4, pointBackgroundColor: '#6366f1' });
  }
  if (AppState.activeOkrId === 'all' || AppState.activeOkrId === 'okr2') {
    datasets.push({ label: 'OKR 2 – Excelencia Académica', data: data.monthlyTrend.okr2, borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,.06)', tension: .4, fill: true, pointRadius: 4, pointBackgroundColor: '#10b981' });
  }
  if (AppState.activeOkrId === 'all' || AppState.activeOkrId === 'okr3') {
    datasets.push({ label: 'OKR 3 – Infraestructura', data: data.monthlyTrend.okr3, borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,.06)', tension: .4, fill: true, pointRadius: 4, pointBackgroundColor: '#f59e0b' });
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.monthlyTrend.labels,
      datasets: datasets
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: true, position: 'bottom', labels: { font: { size: 11, family: 'Inter' }, boxWidth: 10, padding: 16 } }, tooltip: { mode: 'index', intersect: false } },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 11 } } },
        y: { min: 0, max: 100, grid: { color: 'rgba(0,0,0,.04)' }, ticks: { font: { size: 11 }, callback: v => v + '%' } }
      }
    }
  });
}
