// ─────────────────────────────────────────────
//  Strategic OKR Intelligence System – Data Layer
// ─────────────────────────────────────────────

const DB_KEY = 'okr_ean_db_v5_definitivo';

// ── Seed data ────────────────────────────────
const SEED = {
  metadata: {
    version: '2.0',
    org: 'Universidad EAN',
    program: 'Modelo Ean Virtual 2.0',
    horizon: '2026',
    lastUpdated: '2026-02-22'
  },
  users: [
    { id: 'u1', name: 'Director Ean Virtual', role: 'admin', email: 'director@ean.edu.co' },
    { id: 'u2', name: 'Líder Proyecto Digital', role: 'project_lead', email: 'lider@ean.edu.co' },
    { id: 'u3', name: 'Coordinadora Mercadeo', role: 'tkr_owner', email: 'mercadeo@ean.edu.co' },
    { id: 'u4', name: 'Analista Académica', role: 'ka_owner', email: 'academica@ean.edu.co' },
    { id: 'u5', name: 'Rector', role: 'viewer', email: 'rector@ean.edu.co' }
  ],
  regions: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Bucaramanga'],
  okrs: [
    {
      id: 'okr1',
      name: 'Desplegar el Modelo Ean Virtual 2.0 en las regiones de Colombia, fortaleciendo la cobertura nacional y aumentando en un 51,07% (5.227) la adquisición de esta modalidad frente a 2025',
      horizon: 'anual',
      strategicWeight: 40,
      responsibleUnit: 'Vicerrectoría Académica',
      priority: 'Crítica',
      color: '#6366f1',
      projectKRs: [
        {
          "id": "pkr1",
          "name": "Posicionar el modelo Ean Virtual como referente regional de educación de alta calidad, incrementando en 30% el índice compuesto de posicionamiento regional en 2026.",
          "metricMain": "Avance Estratégico",
          "baseline": 0,
          "target": 100,
          "current": 0,
          "unit": "%",
          "verificationSource": "Reporte Institucional",
          "indicatorType": "Estratégico",
          "weightInOKR": 20,
          "responsibleId": "u2",
          "tkrs": [
            {
              "id": "pkr1.tkr1",
              "name": "Incrementar en 25% el reconocimiento del modelo Ean Virtual en regiones priorizadas.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr1.tkr1.ka1",
                  "description": "Diseñar y medir en pre-post los indicadores de reconocimiento del modelo Ean Virtual en regiones priorizadas",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr1.ka2",
                  "description": "Gestionar participación de la Dirección de Ean Virtual en al menos 6 medios masivos nacionales y 6 regionales (prensa, radio, TV, portales especializados)",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr1.ka3",
                  "description": "Gestionar participación de referentes Ean en al menos 6 medios masivos nacionales y 6 regionales (prensa, radio, TV, portales especializados)",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr1.ka4",
                  "description": "Asegurar participación como ponentes en al menos 2 eventos académicos de alto impacto (nacionales o internacionales)",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr1.ka5",
                  "description": "Revisar, postular y participar en rankings académicos pertinentes para los programas de modalidad virtual",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr1.tkr2",
              "name": "Consolidar 5 alianzas estratégicas B2B/B2G y ejecutar la ruta ASU–Ean 2026, con 4 iniciativas conjuntas ejecutadas.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr1.tkr2.ka1",
                  "description": "Identificar y priorizar sectores B2B y B2G regionales con potencial de captación para los diferentes programas de modalidad virtual",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 16.67,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr2.ka2",
                  "description": "Firmar al menos 5 acuerdos estratégicos regionales B2B/B2G con metas de matrícula asociadas",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 16.67,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr2.ka3",
                  "description": "Ejecutar la ruta ASU–Ean 2026 Frente 1",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 16.67,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr2.ka4",
                  "description": "Ejecutar la ruta ASU–Ean 2026 Frente 2",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 16.67,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr2.ka5",
                  "description": "Ejecutar la ruta ASU–Ean 2026 Frente 3",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 16.67,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr2.ka6",
                  "description": "Ejecutar la ruta ASU–Ean 2026 Frente 4",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 16.67,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr1.tkr3",
              "name": "Ejecutar lanzamiento nacional con 4 hitos regionales del modelo, evidenciando impactos regionales en públicos objetivos.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr1.tkr3.ka1",
                  "description": "Diseñar y ejecutar el evento de lanzamiento nacional del modelo Ean Virtual 2.0",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr3.ka2",
                  "description": "Realizar 4 eventos satélites regionales presenciales o híbridos asociados al despliegue",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr3.ka3",
                  "description": "Activar campaña digital segmentada por región asociada al lanzamiento",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr3.ka4",
                  "description": "Integrar cobertura en medios y ecosistema digital institucional durante el lanzamiento",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr1.tkr4",
              "name": "Optimizar estrategia de marketing alineada a metas regionales, incrementando en 2% la conversión nacional y regional de leads a matrícula.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr1.tkr4.ka1",
                  "description": "Segmentar metas de captación por región y programa virtual, de acuerdo con oferta según producción",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr4.ka2",
                  "description": "Optimizar campañas digitales regionales con seguimiento de conversión por canal",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr4.ka3",
                  "description": "Implementar tablero de seguimiento regional de leads → matrícula",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr4.ka4",
                  "description": "Ajustar mensajes resaltando interactividad, flexibilidad y personalización, por programa",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr1.tkr5",
              "name": "Implementar oferta flexible articulando formación formal y no formal, incrementando 15% en nuevos ingresos regionales provenientes de rutas flexibles.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr1.tkr5.ka1",
                  "description": "Generar 15% de nuevos ingresos regionales vía oferta formal–no formal",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr5.ka2",
                  "description": "Estructurar rutas de progresión no formal-formal con beneficios explícitos",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr5.ka3",
                  "description": "Diseñar al menos 5 microcredenciales o cursos no formales alineados a las necesidades regionales",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr5.ka4",
                  "description": "Integrar la oferta no formal en campañas regionales de captación",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr1.tkr5.ka5",
                  "description": "Medir ingresos derivados de rutas flexibles regionales",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            }
          ]
        },
        {
          "id": "pkr2",
          "name": "Implementar un modelo financiero sostenible para Ean Virtual 2.0 que garantice un margen ≥65% y un EBITDA ≥28% en 2026, habilitando decisiones de crecimiento y escalabilidad institucional.",
          "metricMain": "Avance Estratégico",
          "baseline": 0,
          "target": 100,
          "current": 0,
          "unit": "%",
          "verificationSource": "Reporte Institucional",
          "indicatorType": "Estratégico",
          "weightInOKR": 20,
          "responsibleId": "u2",
          "tkrs": [
            {
              "id": "pkr2.tkr1",
              "name": "Definir e implementar la estructura de ingresos, costos directos e indirectos del modelo Ean Virtual 2.0, con trazabilidad por programa en 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 25.0,
              "kas": [
                {
                  "id": "pkr2.tkr1.ka1",
                  "description": "Identificar y clasificar el 100% de los ingresos y costos asociados a producción y operación de la modalidad virtual",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 33.33,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr2.tkr1.ka2",
                  "description": "Definir modelo de costeo por programa virtual",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 33.33,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr2.tkr1.ka3",
                  "description": "Validar consistencia del modelo financiero con contabilidad institucional",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 33.33,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr2.tkr2",
              "name": "Alcanzar un margen ≥65% y un EBITDA ≥28% mediante control presupuestal y optimización de costos operativos en 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 25.0,
              "kas": [
                {
                  "id": "pkr2.tkr2.ka1",
                  "description": "Establecer presupuesto anual del modelo con metas mensuales de margen y EBITDA",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr2.tkr2.ka2",
                  "description": "Identificar y ejecutar iniciativas de optimización de costos en producción y operación",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr2.tkr2.ka3",
                  "description": "Implementar seguimiento mensual de desviaciones presupuestales",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr2.tkr2.ka4",
                  "description": "Realizar comité financiero periódico para toma de decisiones correctivas",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr2.tkr3",
              "name": "Evaluar y ajustar el modelo de pricing y estructura de oferta académica para maximizar captación sin comprometer margen en 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 25.0,
              "kas": [
                {
                  "id": "pkr2.tkr3.ka1",
                  "description": "Analizar estructura actual de precios y elasticidad por programa virtual",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 33.33,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr2.tkr3.ka2",
                  "description": "Proponer ajustes de pricing por programa",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 33.33,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr2.tkr3.ka3",
                  "description": "Monitorear impacto de ajustes en captación y margen periódicamente",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 33.33,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr2.tkr4",
              "name": "Diseñar y monitorear un sistema de indicadores estratégicos que visibilice la eficiencia financiera y operativa del modelo Ean Virtual 2.0 frente al modelo anterior, con seguimiento mensual en 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 25.0,
              "kas": [
                {
                  "id": "pkr2.tkr4.ka1",
                  "description": "Definir un conjunto de indicadores comparativos que midan eficiencia en producción y operación del modelo Ean Virtual 2.0 frente al modelo anterior",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr2.tkr4.ka2",
                  "description": "Establecer línea base histórica del modelo anterior y compararla con el modelo 2.0 para evidenciar variaciones en eficiencia",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr2.tkr4.ka3",
                  "description": "Integrar al menos el 80% de los indicadores de eficiencia en el tablero financiero institucional con actualización mensual",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr2.tkr4.ka4",
                  "description": "Utilizar los indicadores de eficiencia como criterio obligatorio en decisiones de expansión, inversión y optimización operativa",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            }
          ]
        },
        {
          "id": "pkr3",
          "name": "Desplegar de manera integral el modelo Ean Virtual 2.0 en los procesos de diseño, producción y mejora continua en el 100% de los AVE de los programas virtuales.",
          "metricMain": "Avance Estratégico",
          "baseline": 0,
          "target": 100,
          "current": 0,
          "unit": "%",
          "verificationSource": "Reporte Institucional",
          "indicatorType": "Estratégico",
          "weightInOKR": 20,
          "responsibleId": "u2",
          "tkrs": [
            {
              "id": "pkr3.tkr1",
              "name": "Culminar la implementación del modelo Ean Virtual 2.0 en el 100% de los programas académicos virtuales.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr3.tkr1.ka1",
                  "description": "Desarrollar los AVE proyectados para la prioridad 1",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr1.ka2",
                  "description": "Desarrollar los AVE proyectados para la prioridad 2",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr1.ka3",
                  "description": "Desarrollar los AVE proyectados para la prioridad 3",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr1.ka4",
                  "description": "Desarrollar los AVE proyectados para la prioridad 4",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr1.ka5",
                  "description": "Desarrollar los AVE proyectados para la prioridad 5",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr3.tkr2",
              "name": "Actualizar el 100% de los AVE existentes para asegurar su calidad y alineación con el modelo Ean Virtual 2.0 y lineamientos institucionales.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr3.tkr2.ka1",
                  "description": "Definir, implementar y evaluar criterios de calidad y mejora continua para los ambientes virtuales, que orienten ajustes iterativos para su optimización permanente",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 16.67,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr2.ka2",
                  "description": "Realizar la actualización de los AVE proyectados para la prioridad 1",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 16.67,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr2.ka3",
                  "description": "Realizar la actualización de los AVE proyectados para la prioridad 2",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 16.67,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr2.ka4",
                  "description": "Realizar la actualización de los AVE proyectados para la prioridad 3",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 16.67,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr2.ka5",
                  "description": "Realizar la actualización de los AVE proyectados para la prioridad 4",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 16.67,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr2.ka6",
                  "description": "Realizar la actualización de los AVE proyectados para la prioridad 5",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 16.67,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr3.tkr3",
              "name": "Incrementar la capacidad tecnológica del sistema de producción de AVE en 2026, reduciendo en un 25% el tiempo promedio de desarrollo e integrando innovaciones pedagógicas digitales en al menos el 70% de los AVE producidos.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr3.tkr3.ka1",
                  "description": "Mapear, optimizar y estandarizar el flujo completo de producción de AVE",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr3.ka2",
                  "description": "Diseñar e implementar un agente IA que automatice tareas críticas del proceso de producción",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr3.ka3",
                  "description": "Reducir progresivamente el tiempo promedio de producción de 8 a 6 semanas en 2026",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr3.ka4",
                  "description": "Evaluar, seleccionar e integrar innovaciones pedagógicas digitales emergentes al flujo oficial de producción",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr3.ka5",
                  "description": "Integrar la fase piloto del monitor virtual con IA en los procesos de producción de AVE",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr3.tkr4",
              "name": "Lograr que al menos el 85% de los actores clave adopten y apliquen correctamente el modelo de producción 2026 en sus procesos, garantizando su implementación integral durante 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr3.tkr4.ka1",
                  "description": "Promover la conciencia efectiva del modelo de producción 2026 en los actores clave mediante la aplicación de un instrumento de validación de comprensión e impacto del cambio",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr4.ka2",
                  "description": "Lograr que el 75% de los actores clave manifiesten disposición positiva hacia el nuevo modelo en encuesta de percepción",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr4.ka3",
                  "description": "Asegurar que el 90% de los actores clave demuestren la comprensión del modelo de producción 2026",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr4.ka4",
                  "description": "Certificar al 85% de los actores clave en la aplicación práctica del modelo 2026",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr4.ka5",
                  "description": "Implementar un sistema formal de reforzamiento que incluya medición de desempeño, reconocimiento visible, retroalimentación estructurada y rendición de cuentas",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr3.tkr5",
              "name": "Implementar un sistema integral de gestión documental del modelo Ean Virtual 2.0 que garantice trazabilidad, control de versiones y acceso unificado en el 100% de los procesos académicos y de producción durante 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr3.tkr5.ka1",
                  "description": "Identificar y documentar el 100% de los procesos de producción asociados al modelo",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr5.ka2",
                  "description": "Diseñar e implementar una arquitectura documental institucional con control de versiones, responsables y flujos de aprobación",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr5.ka3",
                  "description": "Implementar un repositorio digital único con acceso controlado y trazabilidad de cambios",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr3.tkr5.ka4",
                  "description": "Formalizar lineamientos institucionales de actualización, revisión y archivo documental",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            }
          ]
        },
        {
          "id": "pkr4",
          "name": "Garantizar la implementación consistente y de alta calidad del modelo Ean Virtual 2.0 en el 100% de los programas académicos durante 2026, conforme a estándares institucionales definidos.",
          "metricMain": "Avance Estratégico",
          "baseline": 0,
          "target": 100,
          "current": 0,
          "unit": "%",
          "verificationSource": "Reporte Institucional",
          "indicatorType": "Estratégico",
          "weightInOKR": 20,
          "responsibleId": "u2",
          "tkrs": [
            {
              "id": "pkr4.tkr1",
              "name": "Alcanzar un índice de satisfacción estudiantil ≥85% en los programas operando bajo el modelo Ean Virtual 2.0 en 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 14.29,
              "kas": [
                {
                  "id": "pkr4.tkr1.ka1",
                  "description": "Aplicar un instrumento estandarizado de medición de satisfacción estudiantil al cierre de cada periodo académico en el 100% de los programas virtuales",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 33.33,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr1.ka2",
                  "description": "Realizar análisis trimestral de resultados de satisfacción, identificando brechas críticas y priorizando al menos tres oportunidades de mejora por periodo",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 33.33,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr1.ka3",
                  "description": "Implementar planes de mejora derivados del análisis de satisfacción en al menos el 80% de las brechas críticas identificadas",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 33.33,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr4.tkr2",
              "name": "Lograr que el 100% de los tutores vinculados en 2026 cumplan con el perfil y proceso de habilitación alineado al modelo Ean Virtual 2.0.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 14.29,
              "kas": [
                {
                  "id": "pkr4.tkr2.ka1",
                  "description": "Diseñar y aprobar el perfil integral del tutor Ean Virtual 2.0, especificando competencias pedagógicas, tecnológicas y de acompañamiento, con criterios observables de evaluación",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr2.ka2",
                  "description": "Implementar el proceso de selección y contratación de tutores conforme al perfil definido, asegurando que el 100% de los nuevos tutores cumplan los criterios establecidos",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr2.ka3",
                  "description": "Establecer un proceso formal de habilitación técnica y pedagógica obligatoria para el 100% de los tutores antes de su asignación a AVE en 2026",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr2.ka4",
                  "description": "Realizar verificación periódica del cumplimiento del perfil tutoral mediante evaluación de desempeño alineada al modelo",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr4.tkr3",
              "name": "Incrementar en un 15% los indicadores de acompañamiento estudiantil mediante la integración de soluciones tecnológicas e IA en la gestión tutorial durante 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 14.29,
              "kas": [
                {
                  "id": "pkr4.tkr3.ka1",
                  "description": "Realizar un diagnóstico estructurado de oportunidades de automatización y analítica con TIC e IA en el acompañamiento, seguimiento académico y gestión tutorial",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr3.ka2",
                  "description": "Diseñar e implementar al menos 2 pilotos de soluciones TIC e IA con métricas de éxito definidas para mejorar tiempos de respuesta, seguimiento a estudiantes en riesgo y trazabilidad tutorial",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr3.ka3",
                  "description": "Desarrollar e implementar en fase piloto un monitor virtual con IA para seguimiento de calidad, avance y desempeño de AVE",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr3.ka4",
                  "description": "Escalar las soluciones TIC e IA que demuestren impacto positivo a al menos el 50% de los programas virtuales durante 2026",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr3.ka5",
                  "description": "Medir el impacto de las soluciones implementadas logrando un incremento mínimo del 15% en indicadores clave de acompañamiento (frecuencia de interacción, tiempo de respuesta, retención o permanencia estudiantil)",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr4.tkr4",
              "name": "Implementar al menos una iniciativa de interactividad con el contexto y la comunidad por programa virtual en 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 14.29,
              "kas": [
                {
                  "id": "pkr4.tkr4.ka1",
                  "description": "Definir y formalizar el marco de interactividad integral del modelo Ean Virtual 2.0, especificando tipologías de iniciativas y criterios mínimos de calidad en la operación académica",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr4.ka2",
                  "description": "Diseñar un portafolio institucional de iniciativas diferenciadoras en al menos cuatro dimensiones estratégicas (investigación, retos, emprendimiento, internacionalización, bienestar o vinculación académica)",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr4.ka3",
                  "description": "Implementar al menos una iniciativa de interactividad contextual por programa virtual en 2026",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr4.ka4",
                  "description": "Alcanzar una participación mínima del 40% de estudiantes activos en las iniciativas implementadas por programa",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr4.ka5",
                  "description": "Evaluar el impacto de las iniciativas en la percepción de conexión con el contexto y comunidad, logrando una valoración ≥85% en encuesta de experiencia",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr4.tkr5",
              "name": "Garantizar que el 100% de los programas operen bajo versiones curriculares validadas y formalmente aprobadas en 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 14.29,
              "kas": [
                {
                  "id": "pkr4.tkr5.ka1",
                  "description": "Realizar un diagnóstico integral del 100% de los syllabus y matrices de congruencia vigentes en los programas virtuales antes del cierre del primer semestre de 2026",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 33.33,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr5.ka2",
                  "description": "Regularizar el 100% de los syllabus mediante control de versiones y definición de una versión oficial vigente por programa",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 33.33,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr5.ka3",
                  "description": "Implementar un flujo formal y estandarizado de actualización y aprobación curricular aplicable al 100% de los programas virtuales",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 33.33,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr4.tkr6",
              "name": "Lograr que al menos el 90% de los actores académicos apliquen consistentemente el modelo Ean Virtual 2.0 en su práctica durante 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 14.29,
              "kas": [
                {
                  "id": "pkr4.tkr6.ka1",
                  "description": "Garantizar que el 100% de los actores académicos conozcan los principios, roles y expectativas del modelo Ean Virtual 2.0 mediante comunicación estructurada y validación de comprensión",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr6.ka2",
                  "description": "Implementar estrategias de involucramiento que logren que al menos el 75% de los actores académicos manifiesten disposición positiva hacia la aplicación del modelo",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr6.ka3",
                  "description": "Asegurar que el 90% de los actores académicos demuestren comprensión operativa del modelo mediante evaluación posterior a sesiones técnicas",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr6.ka4",
                  "description": "Lograr que al menos el 90% de los actores académicos evidencien aplicación correcta del modelo durante 2026",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr6.ka5",
                  "description": "Implementar un sistema formal de reforzamiento que incluya medición de desempeño, reconocimiento visible, retroalimentación estructurada y rendición de cuentas",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr4.tkr7",
              "name": "Implementar un sistema integral de gestión documental del modelo Ean Virtual 2.0 que garantice trazabilidad, control de versiones y acceso unificado en el 100% de los procesos académicos y de producción durante 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 14.29,
              "kas": [
                {
                  "id": "pkr4.tkr7.ka1",
                  "description": "Identificar y documentar el 100% de los procesos de operación académica asociados al modelo",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr7.ka2",
                  "description": "Diseñar e implementar una arquitectura documental institucional con control de versiones, responsables y flujos de aprobación",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr7.ka3",
                  "description": "Implementar un repositorio digital único con acceso controlado y trazabilidad de cambios",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr4.tkr7.ka4",
                  "description": "Formalizar lineamientos institucionales de actualización, revisión y archivo documental",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            }
          ]
        },
        {
          "id": "pkr5",
          "name": "Garantizar una arquitectura tecnológica escalable que soporte el 100% de la producción y operación del modelo Ean Virtual 2.0 en 2026.",
          "metricMain": "Avance Estratégico",
          "baseline": 0,
          "target": 100,
          "current": 0,
          "unit": "%",
          "verificationSource": "Reporte Institucional",
          "indicatorType": "Estratégico",
          "weightInOKR": 20,
          "responsibleId": "u2",
          "tkrs": [
            {
              "id": "pkr5.tkr1",
              "name": "Asegurar que el 100% de los procesos críticos de producción y operación del modelo Ean Virtual 2.0 estén soportados por soluciones tecnológicas formalmente definidas y operativas en 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr5.tkr1.ka1",
                  "description": "Identificar y validar el 100% de los procesos críticos de producción y operación del modelo Ean Virtual 2.0 que requieren soporte tecnológico",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr1.ka2",
                  "description": "Evaluar el nivel de soporte tecnológico existente para cada proceso crítico identificado, determinando brechas funcionales",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr1.ka3",
                  "description": "Definir requerimientos tecnológicos específicos para cubrir las brechas detectadas en los procesos críticos",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr1.ka4",
                  "description": "Implementar o ajustar soluciones tecnológicas para cubrir al menos el 100% de los procesos críticos definidos",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr1.ka5",
                  "description": "Establecer un mecanismo de monitoreo semestral que verifique que los procesos críticos continúan con soporte tecnológico efectivo",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 20.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr5.tkr2",
              "name": "Implementar una hoja de ruta funcional de evolución tecnológica del modelo Ean Virtual 2.0, ejecutando al menos el 80% de las mejoras priorizadas para 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr5.tkr2.ka1",
                  "description": "Diseñar y aprobar una hoja de ruta anual de evolución tecnológica del modelo Ean Virtual 2.0, priorizada según impacto académico, escalabilidad y experiencia del usuario",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr2.ka2",
                  "description": "Ejecutar al menos el 80% de las mejoras tecnológicas priorizadas en la hoja de ruta 2026",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr2.ka3",
                  "description": "Realizar validación funcional y medición de experiencia de usuario para cada mejora implementada antes de su despliegue definitivo",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr2.ka4",
                  "description": "Monitorear el impacto de las mejoras implementadas y realizar ajustes iterativos cuando se identifiquen desviaciones funcionales",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr5.tkr3",
              "name": "Garantizar que el 80% de los indicadores estratégicos del modelo Ean Virtual 2.0 cuenten con medición automatizada y visualización institucional en 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr5.tkr3.ka1",
                  "description": "Definir y validar el listado oficial de indicadores estratégicos del modelo Ean Virtual 2.0 priorizando aquellos críticos para producción, operación y crecimiento regional",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr3.ka2",
                  "description": "Implementar mecanismos de integración y automatización de datos para al menos el 80% de los KPIs definidos en 2026",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr3.ka3",
                  "description": "Desplegar dashboards ejecutivos y operativos con actualización periódica para la toma de decisiones en el modelo Ean Virtual 2.0",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr3.ka4",
                  "description": "Establecer espacios formales de revisión y toma de decisiones basados en los dashboards al menos una vez por trimestre",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr5.tkr4",
              "name": "Alcanzar un índice de satisfacción ≥85% en el soporte tecnológico asociado a la producción y operación del modelo Ean Virtual 2.0 en 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr5.tkr4.ka1",
                  "description": "Definir y formalizar el modelo de soporte tecnológico para producción y operación del modelo Ean Virtual 2.0, incluyendo niveles de servicio (SLA), tiempos de respuesta y canales oficiales de atención",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr4.ka2",
                  "description": "Implementar e formalizar herramientas de registro y seguimiento de solicitudes e incidencias tecnológicas asociadas al modelo",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr4.ka3",
                  "description": "Garantizar que al menos el 90% de las solicitudes tecnológicas se atiendan dentro de los tiempos definidos en los SLA establecidos",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr4.ka4",
                  "description": "Aplicar medición trimestral de satisfacción del servicio de soporte y ejecutar acciones de mejora cuando el índice sea inferior al 85%",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            },
            {
              "id": "pkr5.tkr5",
              "name": "Lograr que al menos el 85% de los actores institucionales clave demuestren competencia operativa en el uso del ecosistema tecnológico del modelo Ean Virtual 2.0 en 2026.",
              "metric": "Cumplimiento de metas",
              "formula": "(Real / Meta) * 100",
              "target": 100,
              "current": 0,
              "baseline": 0,
              "unit": "%",
              "responsibleId": "u3",
              "periodicity": "Mensual",
              "weightInPKR": 20.0,
              "kas": [
                {
                  "id": "pkr5.tkr5.ka1",
                  "description": "Diseñar y aprobar el marco de competencias tecnológicas requeridas para actores institucionales clave (tutores, directores, producción, coordinación académica)",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr5.ka2",
                  "description": "Aplicar una evaluación diagnóstica de competencias digitales al 100% de los actores institucionales clave en 2026",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr5.ka3",
                  "description": "Desarrollar e implementar un plan de habilitación tecnológica focalizado en las brechas identificadas, priorizando roles críticos del modelo",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                },
                {
                  "id": "pkr5.tkr5.ka4",
                  "description": "Validar que al menos el 85% de los actores institucionales clave demuestren competencia operativa en el uso del ecosistema TIC mediante evaluación práctica o evidencia de uso activo",
                  "responsibleId": "u4",
                  "startDate": "2026-03-01",
                  "endDate": "2026-12-31",
                  "status": "No iniciado",
                  "progress": 0,
                  "impactWeight": 25.0,
                  "region": "Bogotá",
                  "notes": ""
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'okr2',
      name: 'Fortalecer la excelencia académica y la innovación pedagógica en la oferta virtual',
      horizon: 'anual',
      strategicWeight: 35,
      responsibleUnit: 'Vicerrectoría Académica',
      priority: 'Alta',
      color: '#10b981',
      projectKRs: [
        {
          id: 'pkr4',
          name: 'Rediseñar el 100% de los programas virtuales bajo el marco de Ean Virtual 2.0',
          metricMain: 'Programas rediseñados según nuevo modelo',
          baseline: 0,
          target: 12,
          current: 7,
          unit: 'programas',
          verificationSource: 'Actas de aprobación Comité Curricular',
          indicatorType: 'Formación',
          weightInOKR: 55,
          responsibleId: 'u4',
          tkrs: [
            {
              id: 'tkr8',
              name: 'Rediseñar 6 programas de pregrado virtual en el primer semestre',
              metric: 'Programas de pregrado actualizados',
              formula: 'Programas con plan de estudios aprobado / Total programas',
              target: 6,
              current: 4,
              baseline: 0,
              unit: 'programas',
              responsibleId: 'u4',
              periodicity: 'Mensual',
              weightInPKR: 60,
              kas: [
                {
                  id: 'ka19',
                  description: 'Taller de co-diseño curricular con docentes y estudiantes (6 programas)',
                  responsibleId: 'u4',
                  startDate: '2026-01-20',
                  endDate: '2026-03-15',
                  status: 'Completado',
                  progress: 100,
                  impactWeight: 35,
                  region: 'Bogotá',
                  notes: '6 talleres realizados con 45 participantes totales.'
                },
                {
                  id: 'ka20',
                  description: 'Rediseñar microcredenciales apilables para 4 programas prioritarios',
                  responsibleId: 'u4',
                  startDate: '2026-02-01',
                  endDate: '2026-05-31',
                  status: 'En progreso',
                  progress: 55,
                  impactWeight: 40,
                  region: 'Bogotá',
                  notes: '2 programas con microcredenciales en piloto.'
                },
                {
                  id: 'ka21',
                  description: 'Aprobar en Comité Curricular los 6 programas rediseñados',
                  responsibleId: 'u4',
                  startDate: '2026-04-01',
                  endDate: '2026-06-30',
                  status: 'No iniciado',
                  progress: 10,
                  impactWeight: 25,
                  region: 'Bogotá',
                  notes: '2 programas ya aprobados, 4 pendientes.'
                }
              ]
            },
            {
              id: 'tkr9',
              name: 'Certificar 80% de docentes virtuales en metodologías innovadoras',
              metric: 'Docentes certificados en metodología Ean Virtual 2.0',
              formula: '(Docentes certificados / Total docentes virtuales) × 100',
              target: 80,
              current: 52,
              baseline: 30,
              unit: '%',
              responsibleId: 'u4',
              periodicity: 'Bimestral',
              weightInPKR: 40,
              kas: [
                {
                  id: 'ka22',
                  description: 'Diseñar programa de formación docente Ean Virtual 2.0 (40 horas)',
                  responsibleId: 'u4',
                  startDate: '2026-01-10',
                  endDate: '2026-02-28',
                  status: 'Completado',
                  progress: 100,
                  impactWeight: 30,
                  region: 'Bogotá',
                  notes: 'Programa diseñado y aprobado.'
                },
                {
                  id: 'ka23',
                  description: 'Ejecutar 4 cohortes de formación docente (semestres 1 y 2)',
                  responsibleId: 'u4',
                  startDate: '2026-02-15',
                  endDate: '2026-11-30',
                  status: 'En progreso',
                  progress: 40,
                  impactWeight: 70,
                  region: 'Bogotá',
                  notes: '1 cohorte completada (28 docentes), 3 pendientes.'
                }
              ]
            }
          ]
        },
        {
          id: 'pkr5',
          name: 'Implementar sistema de analítica académica para personalización del aprendizaje',
          metricMain: 'Estudiantes con rutas de aprendizaje personalizadas',
          baseline: 0,
          target: 800,
          current: 245,
          unit: 'estudiantes',
          verificationSource: 'LMS + Dashboard de analítica',
          indicatorType: 'Implementación',
          weightInOKR: 45,
          responsibleId: 'u4',
          tkrs: [
            {
              id: 'tkr10',
              name: 'Integrar LMS con sistema de analítica de aprendizaje en el primer semestre',
              metric: 'Integración LMS-Analítica operativa al 100%',
              formula: 'Módulos integrados / Total módulos planificados',
              target: 100,
              current: 60,
              baseline: 0,
              unit: '%',
              responsibleId: 'u4',
              periodicity: 'Mensual',
              weightInPKR: 100,
              kas: [
                {
                  id: 'ka24',
                  description: 'Seleccionar y contratar proveedor de analítica educativa',
                  responsibleId: 'u2',
                  startDate: '2026-01-05',
                  endDate: '2026-02-15',
                  status: 'Completado',
                  progress: 100,
                  impactWeight: 25,
                  region: 'Bogotá',
                  notes: 'Contrato firmado con Civitas Learning.'
                },
                {
                  id: 'ka25',
                  description: 'Integrar datos del LMS con la plataforma de analítica',
                  responsibleId: 'u4',
                  startDate: '2026-02-16',
                  endDate: '2026-04-30',
                  status: 'En progreso',
                  progress: 65,
                  impactWeight: 50,
                  region: 'Bogotá',
                  notes: '60% de integración completada, faltan módulos de evaluación.'
                },
                {
                  id: 'ka26',
                  description: 'Activar rutas de aprendizaje personalizadas para 800 estudiantes',
                  responsibleId: 'u4',
                  startDate: '2026-05-01',
                  endDate: '2026-07-31',
                  status: 'No iniciado',
                  progress: 0,
                  impactWeight: 25,
                  region: 'Bogotá',
                  notes: 'Pendiente integración completa.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'okr3',
      name: 'Construir la infraestructura tecnológica y de gobernanza del Modelo Ean Virtual 2.0',
      horizon: 'anual',
      strategicWeight: 25,
      responsibleUnit: 'Dirección de Tecnología e Innovación',
      priority: 'Alta',
      color: '#f59e0b',
      projectKRs: [
        {
          id: 'pkr6',
          name: 'Lanzar la plataforma tecnológica Ean Virtual 2.0 con disponibilidad ≥ 99.5%',
          metricMain: 'Disponibilidad plataforma (%)',
          baseline: 97.2,
          target: 99.5,
          current: 98.8,
          unit: '%',
          verificationSource: 'Monitoreo 24/7 – System Status Dashboard',
          indicatorType: 'Operativo',
          weightInOKR: 100,
          responsibleId: 'u2',
          tkrs: [
            {
              id: 'tkr11',
              name: 'Migrar el 100% de la infraestructura a arquitectura cloud en el Q1',
              metric: 'Porcentaje de migración completada',
              formula: 'Servicios migrados / Total servicios × 100',
              target: 100,
              current: 85,
              baseline: 0,
              unit: '%',
              responsibleId: 'u2',
              periodicity: 'Semanal',
              weightInPKR: 60,
              kas: [
                {
                  id: 'ka27',
                  description: 'Migrar servidores LMS a AWS (educación cloud architecture)',
                  responsibleId: 'u2',
                  startDate: '2026-01-01',
                  endDate: '2026-02-28',
                  status: 'Completado',
                  progress: 100,
                  impactWeight: 50,
                  region: 'Bogotá',
                  notes: 'LMS en AWS completamente migrado.'
                },
                {
                  id: 'ka28',
                  description: 'Implementar CDN global para reducción de latencia < 100ms',
                  responsibleId: 'u2',
                  startDate: '2026-02-01',
                  endDate: '2026-03-31',
                  status: 'En progreso',
                  progress: 70,
                  impactWeight: 30,
                  region: 'Barranquilla',
                  notes: 'CDN activo en 3 regiones de 5.'
                },
                {
                  id: 'ka29',
                  description: 'Configurar monitoreo automático y alertas de disponibilidad 24/7',
                  responsibleId: 'u2',
                  startDate: '2026-02-15',
                  endDate: '2026-04-30',
                  status: 'En progreso',
                  progress: 80,
                  impactWeight: 20,
                  region: 'Bogotá',
                  notes: 'DataDog configurado, falta alertas de WhatsApp.'
                }
              ]
            },
            {
              id: 'tkr12',
              name: 'Implementar modelo de gobernanza digital con roles y flujos aprobados',
              metric: 'Documentos de gobernanza aprobados',
              formula: 'Documentos aprobados por Comité Directivo / Total requeridos',
              target: 8,
              current: 5,
              baseline: 1,
              unit: 'documentos',
              responsibleId: 'u2',
              periodicity: 'Mensual',
              weightInPKR: 40,
              kas: [
                {
                  id: 'ka30',
                  description: 'Redactar y aprobar política de gobernanza digital Ean Virtual 2.0',
                  responsibleId: 'u2',
                  startDate: '2026-01-15',
                  endDate: '2026-03-31',
                  status: 'Completado',
                  progress: 100,
                  impactWeight: 40,
                  region: 'Bogotá',
                  notes: 'Aprobado en Consejo Académico del 14 Feb 2026.'
                },
                {
                  id: 'ka31',
                  description: 'Definir estructura de roles y responsabilidades del modelo digital',
                  responsibleId: 'u2',
                  startDate: '2026-02-01',
                  endDate: '2026-04-30',
                  status: 'En progreso',
                  progress: 75,
                  impactWeight: 35,
                  region: 'Bogotá',
                  notes: 'Roles definidos, pendiente socialización con equipos.'
                },
                {
                  id: 'ka32',
                  description: 'Capacitar a líderes en modelo de gobernanza digital adoptado',
                  responsibleId: 'u4',
                  startDate: '2026-04-01',
                  endDate: '2026-06-30',
                  status: 'No iniciado',
                  progress: 0,
                  impactWeight: 25,
                  region: 'Bogotá',
                  notes: ''
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  compositeIndex: {
    captacion: { weight: 0.40, label: 'Captación de Matrículas', value: 72.8, target: 100 },
    reputacion: { weight: 0.20, label: 'Reputación y Visibilidad', value: 77.3, target: 100 },
    alianzas: { weight: 0.20, label: 'Alianzas Estratégicas', value: 50.0, target: 100 },
    nps: { weight: 0.10, label: 'NPS Estudiantil', value: 87.3, target: 100 },
    retencion: { weight: 0.10, label: 'Retención Semestral', value: 93.2, target: 100 }
  },
  regionData: {
    Bogotá: { target: 700, current: 540, trend: [380, 420, 480, 520, 540] },
    Medellín: { target: 350, current: 285, trend: [180, 210, 245, 270, 285] },
    Cali: { target: 280, current: 198, trend: [120, 145, 165, 185, 198] },
    Barranquilla: { target: 250, current: 187, trend: [100, 125, 148, 168, 187] },
    Bucaramanga: { target: 220, current: 100, trend: [50, 62, 74, 88, 100] }
  },
  decisions: [
    {
      id: 'd1',
      date: '2026-02-14',
      title: 'Aprobación Política de Gobernanza Digital Ean Virtual 2.0',
      body: 'El Consejo Académico aprobó la política de gobernanza digital que establece roles, flujos y responsabilidades del modelo virtual.',
      responsibleId: 'u1',
      relatedOKR: 'okr3',
      priority: 'Alta'
    },
    {
      id: 'd2',
      date: '2026-02-10',
      title: 'Contratación Civitas Learning como proveedor de analítica educativa',
      body: 'Se firmó contrato con Civitas Learning para integración de analítica académica al LMS institucional por un período de 24 meses.',
      responsibleId: 'u1',
      relatedOKR: 'okr2',
      priority: 'Alta'
    },
    {
      id: 'd3',
      date: '2026-01-28',
      title: 'Priorización de regiones para despliegue Q1 2026',
      body: 'Se definió Bogotá y Medellín como regiones prioritarias para el despliegue intensivo en Q1, seguidas de Cali y Barranquilla en Q2.',
      responsibleId: 'u1',
      relatedOKR: 'okr1',
      priority: 'Crítica'
    }
  ],
  checkins: [
    { id: 'ci1', date: '2026-02-17', type: 'weekly', okrId: 'okr1', summary: 'Campaña de captación activa en Bogotá y Medellín. CRM mostrando mejora en conversión (+2pp). Riesgo identificado en alianzas empresariales por ciclo de aprobación lento.', riskLevel: 'Medio', responsibleId: 'u2' },
    { id: 'ci2', date: '2026-02-10', type: 'weekly', okrId: 'okr2', summary: 'Integración LMS avanzó al 60%. Primera cohorte docente completada con 28 participantes. Microcredenciales en revisión curricular.', riskLevel: 'Bajo', responsibleId: 'u4' },
    { id: 'ci3', date: '2026-02-17', type: 'weekly', okrId: 'okr3', summary: 'Infraestructura cloud al 85% migrada. CDN operativo en 3 regiones. Monitoreo 24/7 casi completo.', riskLevel: 'Bajo', responsibleId: 'u2' }
  ],
  monthlyTrend: {
    labels: ['Sep 25', 'Oct 25', 'Nov 25', 'Dic 25', 'Ene 26', 'Feb 26'],
    okr1: [28, 34, 41, 47, 52, 58],
    okr2: [15, 25, 35, 44, 51, 62],
    okr3: [20, 35, 48, 58, 68, 77]
  }
};

// ── Data access helpers (Firestore) ───────────
const DB = (() => {
  let _data = null;
  const COLLECTION = 'okr_system';
  const DOC_ID = 'main_data';

  async function load() {
    try {
      console.log("📥 Cargando datos desde Firestore...");
      const doc = await window.dbFirestore.collection(COLLECTION).doc(DOC_ID).get();
      if (doc.exists) {
        _data = doc.data();
        console.log("✅ Datos cargados desde Firestore");
      } else {
        console.log("🌱 No se encontraron datos en Firestore. Usando SEED.");
        _data = JSON.parse(JSON.stringify(SEED));
        await save();
      }
    } catch (err) {
      console.error("❌ Error cargando desde Firestore:", err);
      const local = localStorage.getItem(DB_KEY);
      _data = local ? JSON.parse(local) : JSON.parse(JSON.stringify(SEED));
    }
    return _data;
  }

  async function save() {
    if (!_data) return;
    try {
      await window.dbFirestore.collection(COLLECTION).doc(DOC_ID).set(_data);
      localStorage.setItem(DB_KEY, JSON.stringify(_data));
      console.log("💾 Datos sincronizados con Firestore");
    } catch (err) {
      console.error("❌ Error guardando en Firestore:", err);
      localStorage.setItem(DB_KEY, JSON.stringify(_data));
    }
  }

  function subscribeToChanges(callback) {
    return window.dbFirestore.collection(COLLECTION).doc(DOC_ID).onSnapshot(doc => {
      if (doc.exists) {
        _data = doc.data();
        console.log("🔄 Actualizando UI por cambio en Firestore");
        if (callback) callback(_data);
      }
    });
  }

  function get() {
    if (!_data) {
      const local = localStorage.getItem(DB_KEY);
      return local ? JSON.parse(local) : SEED;
    }
    return _data;
  }

  async function reset() {
    _data = JSON.parse(JSON.stringify(SEED));
    await save();
    return _data;
  }

  function update(fn) {
    if (!_data) return;
    fn(_data);
    save();
    return _data;
  }

  return { get, load, save, update, reset, subscribeToChanges };
})();

// ── Auth & Permissions ────────────────────────
const Auth = {
  isViewer() {
    const user = AppState.currentUser;
    return !user || user.role === 'viewer';
  },

  getPermissionForPKR(pkrId) {
    const data = DB.get();
    const user = AppState.currentUser;
    if (!user) return 'view';
    if (user.role === 'admin') return 'edit1'; // Admin has full power
    if (user.role === 'viewer') return 'view';  // Viewers never edit

    // Check individual PKR shares first
    let effectivePerm = 'view';
    data.okrs.forEach(o => o.projectKRs.forEach(p => {
      if (p.id === pkrId && p.shares) {
        const share = p.shares.find(s => s.email === user.email);
        if (share) effectivePerm = share.permission;
      }
    }));

    // If no explicit share, grant role-based permissions
    if (effectivePerm === 'view') {
      if (user.role === 'project_lead') effectivePerm = 'edit1';
      else if (user.role === 'tkr_owner') effectivePerm = 'edit2';
      else if (user.role === 'ka_owner') effectivePerm = 'edit3';
    }
    return effectivePerm;
  },

  canEdit(level, pkrId) {
    const user = AppState.currentUser;
    if (!user || user.role === 'viewer') return false;
    const perm = this.getPermissionForPKR(pkrId);
    if (perm === 'edit1') return true;
    if (perm === 'edit2' && (level === 2 || level === 3)) return true;
    if (perm === 'edit3' && level === 3) return true;
    return false;
  },

  requireEdit(pkrId, level = 3) {
    if (!this.canEdit(level, pkrId)) {
      showToast('Acceso denegado: permisos insuficientes', 'error');
      return false;
    }
    return true;
  },

  requireNotViewer() {
    if (this.isViewer()) {
      showToast('Acceso denegado: los visualizadores no pueden editar', 'error');
      return false;
    }
    return true;
  }
};

// ── Calculation engine ────────────────────────
const Calc = {
  kaProgress(ka) {
    return ka.progress;
  },

  tkrProgress(tkr) {
    const kas = tkr.kas;
    if (!kas || kas.length === 0) return 0;
    const totalWeight = kas.reduce((s, k) => s + k.impactWeight, 0);
    if (totalWeight === 0) return 0;
    return kas.reduce((s, k) => s + (k.progress * k.impactWeight) / totalWeight, 0);
  },

  pkrProgress(pkr) {
    const tkrs = pkr.tkrs;
    if (!tkrs || tkrs.length === 0) return 0;
    const totalWeight = tkrs.reduce((s, t) => s + t.weightInPKR, 0);
    if (totalWeight === 0) return 0;
    return tkrs.reduce((s, t) => s + (Calc.tkrProgress(t) * t.weightInPKR) / totalWeight, 0);
  },

  okrProgress(okr) {
    const pkrs = okr.projectKRs;
    if (!pkrs || pkrs.length === 0) return 0;
    const totalWeight = pkrs.reduce((s, p) => s + p.weightInOKR, 0);
    if (totalWeight === 0) return 0;
    return pkrs.reduce((s, p) => s + (Calc.pkrProgress(p) * p.weightInOKR) / totalWeight, 0);
  },

  compositeIndex(ci) {
    const captNorm = Math.min(ci.captacion.value / ci.captacion.target, 1);
    const repNorm = Math.min(ci.reputacion.value / ci.reputacion.target, 1);
    const aliNorm = Math.min(ci.alianzas.value / ci.alianzas.target, 1);
    const npsNorm = Math.min(ci.nps.value / ci.nps.target, 1);
    const retNorm = Math.min(ci.retencion.value / ci.retencion.target, 1);

    let idx = (0.40 * captNorm) + (0.20 * repNorm) + (0.20 * aliNorm) + (0.10 * npsNorm) + (0.10 * retNorm);
    const captPct = ci.captacion.value / ci.captacion.target;
    if (captPct < 0.90) idx *= 0.70;
    return idx * 100;
  },

  globalProgress(data) {
    const okrs = data.okrs;
    const totalW = okrs.reduce((s, o) => s + o.strategicWeight, 0);
    if (totalW === 0) return 0;
    return okrs.reduce((s, o) => s + (Calc.okrProgress(o) * o.strategicWeight) / totalW, 0);
  },

  trafficLight(pct) {
    if (pct >= 70) return 'green';
    if (pct >= 40) return 'amber';
    return 'red';
  },

  trafficLightLabel(pct) {
    if (pct >= 70) return 'En camino';
    if (pct >= 40) return 'En riesgo';
    return 'Crítico';
  }
};

// ── Utility helpers ───────────────────────────
const Utils = {
  fmt(n, decimals = 1) { return typeof n === 'number' ? n.toFixed(decimals) : n; },
  pct(v, t) { return t ? Math.min((v / t) * 100, 100) : 0; },
  statusColor: {
    'Completado': '#10b981',
    'En progreso': '#6366f1',
    'No iniciado': '#94a3b8',
    'Riesgo': '#ef4444'
  },
  priorityColor: {
    'Crítica': '#ef4444',
    'Alta': '#f59e0b',
    'Media': '#6366f1'
  },
  roleLabel: {
    admin: 'Administrador Estratégico',
    project_lead: 'Líder de Proyecto',
    tkr_owner: 'Responsable TKR',
    ka_owner: 'Responsable KA',
    viewer: 'Visualizador Ejecutivo'
  },
  findUser(data, id) {
    return data.users.find(u => u.id === id || u.name === id) || { name: id || '—', role: '' };
  },
  today() {
    return new Date().toISOString().split('T')[0];
  },
  formatDate(str) {
    if (!str) return '—';
    const d = new Date(str + 'T00:00:00');
    return d.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
  },
  uuid() {
    return 'id' + Math.random().toString(36).substr(2, 9);
  }
};
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

    const canEdit = AppState.currentUser.role === 'admin' || AppState.currentUser.role === 'project_lead';
    const editBtn = canEdit
      ? `<button class="btn btn-ghost btn-sm" style="position:absolute;top:10px;right:10px;padding:4px;color:#fff;background:rgba(0,0,0,0.2)" onclick="openEditRegion('${name}')" title="Editar Región">✎</button>`
      : '';

    return `<div class="heatmap-cell ${cls}" style="padding:20px 18px;position:relative">
      ${editBtn}
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

function openEditRegion(regionName) {
  const data = DB.get();
  const r = data.regionData[regionName];
  if (!r) return;
  Modal.open(`Editar Región: ${regionName}`, `
    <div class="form-row">
      <div class="form-group"><label class="form-label">Matrículas Actuales</label>
        <input type="number" class="form-control" id="er-current" value="${r.current}"></div>
      <div class="form-group"><label class="form-label">Meta Final</label>
        <input type="number" class="form-control" id="er-target" value="${r.target}"></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveEditRegion('${regionName}')">Guardar</button>`);
}

function saveEditRegion(regionName) {
  const current = parseFloat(document.getElementById('er-current')?.value);
  const target = parseFloat(document.getElementById('er-target')?.value);
  if (isNaN(current) || isNaN(target)) { showToast('Valores numéricos requeridos', 'error'); return; }

  DB.update(data => {
    if (data.regionData[regionName]) {
      data.regionData[regionName].current = current;
      data.regionData[regionName].target = target;
      data.regionData[regionName].trend[data.regionData[regionName].trend.length - 1] = current;
    }
  });

  Modal.close(); showToast('Región actualizada ✓', 'success');
  renderHeatmapPage(document.getElementById('page-content'));
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
            <th>Responsable</th><th>Peso / Fecha</th><th>Progreso / Actual</th><th>Acciones</th>
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
      const respName = document.getElementById('pkr-resp').value;
      const user = data.users.find(u => u.name === respName);
      if (user) {
        pkr.responsibleId = user.id;
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
    { val: 'view', label: 'Solo visualización' },
    { val: 'edit1', label: 'Edición Nivel 1 (PKR, TKR, KA, metas)' },
    { val: 'edit2', label: 'Edición Nivel 2 (TKR, KA, metas)' },
    { val: 'edit3', label: 'Edición Nivel 3 (KA, metas)' }
  ].map(o => `<option value="${o.val}">${o.label}</option>`).join('');

  const sharesList = pkr.shares.length === 0 ? '<p style="font-size:12px;color:var(--text-3);font-style:italic">No compartido aún.</p>' :
    pkr.shares.map(s => {
      const baseUrl = window.location.href.split('?')[0];
      const remoteLink = `${baseUrl}?u=${encodeURIComponent(s.email)}`;
      return `<div style="padding:10px 0; border-bottom:1px solid var(--border); font-size:12px">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px">
            <span><strong>${s.email}</strong> <span style="color:var(--text-3)">(${s.permissionName})</span></span>
            <button class="btn btn-ghost btn-sm" style="color:var(--red); padding:0" onclick="removeSharePKR('${okrId}', '${pkrId}', '${s.email}')">Eliminar</button>
        </div>
        <div style="background:var(--surface-1); padding:6px; border-radius:4px; font-family:monospace; font-size:10px; word-break:break-all; border:1px dashed var(--border)">
            ${remoteLink}
        </div>
        <div style="margin-top:4px"><a href="${remoteLink}" target="_blank" style="font-size:10px; color:var(--brand-primary)">Probar acceso ↗</a></div>
      </div>`;
    }).join('');

  Modal.open('Compartir KR Estratégico', `
    <p style="font-size:12.5px;color:var(--text-2);margin-bottom:16px"><strong>${pkr.name}</strong></p>
    
    <div style="background:var(--surface-0); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border); margin-bottom: 20px;">
        <div class="form-group" style="margin-bottom:10px"><label class="form-label">Correo electrónico</label>
        <input type="email" class="form-control" id="share-email" placeholder="usuario@ean.edu.co"></div>
        <div class="form-group" style="margin-bottom:10px"><label class="form-label">Permisos</label>
        <select class="form-control" id="share-perm">${permOpts}</select></div>
        <button class="btn btn-primary btn-sm" style="width:100%" onclick="addSharePKR('${okrId}', '${pkrId}')">Invitar y crear enlace</button>
    </div>

    <div class="form-group"><label class="form-label">Accesos y Enlaces Remotos</label>
        <div id="pkr-shares-list">${sharesList}</div>
    </div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cerrar</button>`);
}

window.addSharePKR = function (okrId, pkrId) {
  const email = document.getElementById('share-email').value.trim();
  if (!email) { showToast('Ingresa un correo', 'warning'); return; }
  const permSelect = document.getElementById('share-perm');
  const permVal = permSelect.value;
  const permName = permSelect.options[permSelect.selectedIndex].text;

  DB.update(data => {
    data.okrs.forEach(o => {
      if (o.id === okrId) {
        o.projectKRs.forEach(p => {
          if (p.id === pkrId) {
            if (!p.shares) p.shares = [];
            // Check if already shared
            if (!p.shares.find(s => s.email === email)) {
              p.shares.push({ email, permission: permVal, permissionName: permName });
            }
          }
        })
      }
    });
  });

  showToast('Invitación enviada y acceso otorgado', 'success');
  // Refresh modal
  openSharePKR(okrId, pkrId);
  renderManage(document.getElementById('page-content'));
};

window.removeSharePKR = function (okrId, pkrId, email) {
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
  renderManage(document.getElementById('page-content'));
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
  if (!Auth.requireNotViewer()) return;
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
  const isAdmin = AppState.currentUser && AppState.currentUser.role === 'admin';
  const items = [...data.decisions]
    .filter(d => AppState.activeOkrId === 'all' || d.relatedOKR === AppState.activeOkrId)
    .reverse().map(d => {
      const okr = data.okrs.find(o => o.id === d.relatedOKR);
      const resp = Utils.findUser(data, d.responsibleId);
      return `<div class="decision-item">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:6px">
        <div class="dec-title">${d.title}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:100px;background:${Utils.priorityColor[d.priority]}22;color:${Utils.priorityColor[d.priority]};white-space:nowrap">${d.priority}</span>
          ${isAdmin ? `<button class="btn btn-ghost btn-sm" style="color:var(--red);padding:2px 6px;font-size:11px" onclick="deleteDecision('${d.id}')" title="Eliminar decision">✕</button>` : ''}
        </div>
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
      ${!Auth.isViewer() ? `<button class="btn btn-primary btn-sm" onclick="openNewDecision()">+ Nueva Decisión</button>` : ''}
    </div>
    <div class="card"><div class="card-body">${items || '<div class="empty-state"><div class="es-icon">◉</div><div class="es-title">Sin decisiones registradas</div></div>'}</div></div>`;
}

function deleteDecision(decisionId) {
  if (!Auth.requireNotViewer()) return;
  if (!confirm('¿Eliminar esta decisión? Esta acción no se puede deshacer.')) return;
  DB.update(data => {
    data.decisions = data.decisions.filter(d => d.id !== decisionId);
  });
  showToast('Decisión eliminada');
  renderDecisions(document.getElementById('page-content'));
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
  if (!Auth.requireNotViewer()) return;
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
      <button class="btn btn-ghost btn-sm" onclick="openEditUser('${u.id}')" title="Editar usuario">✎</button>
    </div>`;
  }).join('');

  container.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">Gobernanza y Roles</div><div class="section-sub">Estructura de responsabilidad y permisos del sistema</div></div>
      <button class="btn btn-primary btn-sm" onclick="openAddUser()">+ Invitar usuario</button>
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
    localStorage.setItem('currentUser', JSON.stringify(user));
    showToast(`Sesión cambiada a: ${user.name}`);
    renderSidebar();
    renderGovernance(document.getElementById('page-content'));
  }
}

function openEditUser(userId) {
  if (AppState.currentUser.role !== 'admin') { showToast('Solo administradores pueden editar usuarios', 'error'); return; }
  const data = DB.get();
  const u = data.users.find(x => x.id === userId);
  if (!u) return;
  const roleOpts = ['admin', 'project_lead', 'tkr_owner', 'ka_owner', 'viewer']
    .map(r => `<option value="${r}" ${u.role === r ? 'selected' : ''}>${Utils.roleLabel[r] || r}</option>`).join('');
  Modal.open('Editar Usuario', `
    <div class="form-group"><label class="form-label">Nombre completo</label>
      <input type="text" class="form-control" id="eu-name" value="${u.name}"></div>
    <div class="form-group"><label class="form-label">Correo electrónico</label>
      <input type="email" class="form-control" id="eu-email" value="${u.email}"></div>
    <div class="form-group"><label class="form-label">Rol</label>
      <select class="form-control" id="eu-role">${roleOpts}</select></div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-ghost" style="color:var(--red)" onclick="deleteUser('${userId}')">Eliminar Usuario</button>
     <button class="btn btn-primary" onclick="saveEditUser('${userId}')">Guardar cambios</button>`);
}

function saveEditUser(userId) {
  if (AppState.currentUser.role !== 'admin') { showToast('Acceso denegado', 'error'); return; }
  const name = document.getElementById('eu-name')?.value.trim();
  const email = document.getElementById('eu-email')?.value.trim();
  const role = document.getElementById('eu-role')?.value;
  if (!name || !email) { showToast('Nombre y correo son requeridos', 'error'); return; }
  DB.update(data => {
    const u = data.users.find(x => x.id === userId);
    if (u) { u.name = name; u.email = email; u.role = role; }
  });
  if (AppState.currentUser.id === userId) {
    AppState.currentUser = DB.get().users.find(u => u.id === userId);
    localStorage.setItem('currentUser', JSON.stringify(AppState.currentUser));
    renderSidebar();
  }
  Modal.close(); showToast('Usuario actualizado ✓');
  renderGovernance(document.getElementById('page-content'));
}

function openAddUser() {
  if (AppState.currentUser.role !== 'admin') { showToast('Solo administradores pueden invitar usuarios', 'error'); return; }
  const roleOpts = ['admin', 'project_lead', 'tkr_owner', 'ka_owner', 'viewer']
    .map(r => `<option value="${r}">${Utils.roleLabel[r] || r}</option>`).join('');
  Modal.open('Invitar Usuario', `
    <div class="form-group"><label class="form-label">Nombre completo</label>
      <input type="text" class="form-control" id="nu-name" placeholder="Ej: Juan Pérez"></div>
    <div class="form-group"><label class="form-label">Correo electrónico</label>
      <input type="email" class="form-control" id="nu-email" placeholder="Ej: jperez@ean.edu.co"></div>
    <div class="form-group"><label class="form-label">Rol inicial</label>
      <select class="form-control" id="nu-role">${roleOpts}</select></div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveAddUser()">Enviar invitación</button>`);
}

function saveAddUser() {
  const name = document.getElementById('nu-name')?.value.trim();
  const email = document.getElementById('nu-email')?.value.trim();
  const role = document.getElementById('nu-role')?.value;
  if (!name || !email) { showToast('Nombre y correo son requeridos', 'error'); return; }

  DB.update(data => {
    data.users.push({ id: Utils.uuid(), name, email, role });
  });

  Modal.close(); showToast('Invitación enviada ✓', 'success');
  renderGovernance(document.getElementById('page-content'));
}

function deleteUser(userId) {
  if (AppState.currentUser.role !== 'admin') { showToast('Solo administradores pueden eliminar usuarios', 'error'); return; }
  if (userId === AppState.currentUser.id) { showToast('No puedes eliminar tu propia cuenta', 'error'); return; }
  if (confirm('¿Estás seguro de eliminar este usuario? No podrá acceder al sistema.')) {
    DB.update(data => {
      data.users = data.users.filter(u => u.id !== userId);
    });
    Modal.close();
    showToast('Usuario eliminado', 'info');
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

  rows.forEach((row, index) => {
    // Robust key mapping: Normalize keys to lowercase and trim
    const normRow = {};
    Object.keys(row).forEach(k => {
      const cleanKey = k.toString().toLowerCase().trim();
      normRow[cleanKey] = row[k];
    });

    const type = (normRow['tipo'] || '').toString().trim().toUpperCase();
    if (!type || type === 'OKR') return;

    const id = normRow['id'] ? normRow['id'].toString() : Utils.uuid();
    const name = (normRow['nombre'] || normRow['descripción'] || normRow['descripcion'] || 'Sin nombre').toString().trim();

    if (type === 'PKR' || type === 'PROJECT KR') {
      const pkr = {
        id: id,
        name: name,
        metricMain: normRow['metrica'] || normRow['métrica'] || name,
        baseline: parseFloat(normRow['linea base'] || normRow['línea base']) || 0,
        target: parseFloat(normRow['meta']) || 100,
        current: parseFloat(normRow['actual']) || 0,
        unit: normRow['unidad medida'] || normRow['unidad'] || '',
        verificationSource: normRow['fuente'] || normRow['fuente verificación'] || '',
        indicatorType: normRow['tipo indicador'] || 'Estratégico',
        weightInOKR: parseFloat(normRow['peso']) || 20,
        responsibleId: resolveUserNameToId(normRow['responsable']) || defaultUser,
        tkrs: []
      };
      targetOkr.projectKRs.push(pkr);
      lastPkr = pkr;
      addedCount++;
    }
    else if (type === 'TKR' || type === 'TACTICAL KR') {
      if (!lastPkr) {
        console.warn(`Row ${index + 1}: TKR sin PKR padre previo. Saltando.`);
        return;
      }
      const tkr = {
        id: id,
        name: name,
        metric: normRow['metrica'] || normRow['métrica'] || name,
        formula: normRow['formula'] || normRow['fórmula'] || '',
        baseline: parseFloat(normRow['linea base'] || normRow['línea base']) || 0,
        target: parseFloat(normRow['meta']) || 100,
        current: parseFloat(normRow['actual']) || 0,
        unit: normRow['unidad medida'] || normRow['unidad'] || '',
        weightInPKR: parseFloat(normRow['peso']) || 25,
        periodicity: normRow['periodicidad'] || 'Mensual',
        responsibleId: resolveUserNameToId(normRow['responsable']) || defaultUser,
        kas: []
      };
      lastPkr.tkrs.push(tkr);
      lastTkr = tkr;
      addedCount++;
    }
    else if (type === 'KA' || type === 'KEY ACTION' || type === 'ACCIÓN') {
      if (!lastTkr) {
        console.warn(`Row ${index + 1}: KA sin TKR padre previo. Saltando.`);
        return;
      }
      const ka = {
        id: id,
        description: name,
        responsibleId: resolveUserNameToId(normRow['responsable']) || defaultUser,
        status: normRow['estado'] || 'No iniciado',
        startDate: normRow['fecha inicio'] || Utils.today(),
        endDate: normRow['fecha fin'] || '',
        progress: parseFloat(normRow['progreso'] || normRow['avance']) || 0,
        impactWeight: parseFloat(normRow['peso']) || 25,
        region: normRow['region'] || normRow['región'] || 'Nacional',
        notes: normRow['notas'] || ''
      };
      lastTkr.kas.push(ka);
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
  toast.innerHTML = `<span>${icons[type] || '✓'}</span> ${msg}`;
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
      html += `<div class="nav-section-label">${item.section}</div>`;
      lastSection = item.section;
    }
    const isActive = AppState.currentPage === item.id;
    const badge = item.badge && criticalCount > 0 ? `<span class="nav-badge">${criticalCount}</span>` : '';
    html += `<div class="nav-item ${isActive ? 'active' : ''}" data-page="${item.id}">
      <span class="nav-icon">${item.icon}</span>
      <span>${item.label}</span>
      ${badge}
    </div>`;
  });

  document.getElementById('sidebar-nav').innerHTML = html;

  // Footer
  const roleColors = { admin: '#6366f1', project_lead: '#10b981', tkr_owner: '#f59e0b', ka_owner: '#06b6d4', viewer: '#94a3b8' };
  document.getElementById('sidebar-footer').innerHTML = `
    <div class="avatar" style="background:${roleColors[user.role] || '#6366f1'}">${user.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</div>
    <div class="user-info">
      <div class="user-name">${user.name}</div>
      <select class="user-role-switcher" onchange="AppState.currentUser = DB.get().users.find(u=>u.id===this.value); renderSidebar(); renderPage(AppState.currentPage);" style="background:transparent; border:none; color:var(--text-4); font-size:10px; cursor:pointer; width:100%">
        ${data.users.map(u => `<option value="${u.id}" ${u.id === user.id ? 'selected' : ''}>${Utils.roleLabel[u.role] || u.role} (${u.name})</option>`).join('')}
      </select>
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
async function init() {
  // 1. Carga inicial asíncrona
  await DB.load();
  const data = DB.get();

  // 2. Suscribirse a cambios en tiempo real
  DB.subscribeToChanges((newData) => {
    renderPage(AppState.currentPage);
    renderSidebar();
    showToast('Datos actualizados en tiempo real', 'info', 1500);
  });

  // Populate OKR context switcher
  const switcher = document.getElementById('okr-context-switcher');
  if (switcher) {
    let opts = '<option value="all">Todos los OKRs (Global)</option>';
    data.okrs.forEach(okr => {
      opts += `<option value="${okr.id}">${okr.name.substring(0, 50)}${okr.name.length > 50 ? '…' : ''}</option>`;
    });
    switcher.innerHTML = opts;
    switcher.value = AppState.activeOkrId;
  }

  // 3. IDENTIFICACION DE USUARIO (Persistencia y Acceso Remoto)
  let user = null;
  const params = new URLSearchParams(window.location.search);
  const userParam = params.get('u');

  if (userParam) {
    // Intenta loguear por URL (Acceso Remoto)
    user = data.users.find(u => u.email === userParam || u.id === userParam);
    if (!user) {
      // Si no es un usuario interno, verificar si tiene algún KR compartido
      let hasShare = false;
      data.okrs.forEach(o => o.projectKRs.forEach(p => {
        if (p.shares && p.shares.find(s => s.email === userParam)) hasShare = true;
      }));
      if (hasShare) {
        user = { id: 'guest-' + Utils.uuid(), name: userParam.split('@')[0], role: 'viewer', email: userParam, isGuest: true };
      }
    }

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      // Limpiar URL para no dejar el correo expuesto innecesariamente
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }

  if (!user) {
    // Intenta recuperar de persistencia local
    const saved = localStorage.getItem('currentUser');
    if (saved) {
      try { user = JSON.parse(saved); } catch (e) { }
    }
  }

  // Fallback final: Si no hay usuario, poner Rector (u5/viewer) o el primero si no existe u5.
  if (!user) {
    user = data.users.find(u => u.id === 'u5') || data.users[4] || data.users[0];
  }

  AppState.currentUser = user;

  Modal.init();
  renderSidebar();
  renderPage('dashboard');
  AppState.expandedOKRs.add('okr1');
}

// Ensure init runs only once after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
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
          ${(() => {
          const data = DB.get();
          let pkrId = null;
          data.okrs.forEach(o => o.projectKRs.forEach(p => { if (p.tkrs.find(t => t.id === tkrId)) pkrId = p.id; }));
          return Auth.canEdit(3, pkrId) ? `<button class="ka-btn" onclick="openKAEdit('${ka.id}')">Editar</button>` : '';
        })()}
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
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
        <div class="heatmap-region" style="font-size:14px">${name}</div>
        ${['admin', 'project_lead'].includes(AppState.currentUser?.role) ? `<button class="btn btn-ghost btn-sm" style="padding:2px 4px;height:auto;font-size:11px" onclick="openEditRegion('${name}')" title="Editar Captación">✎</button>` : ''}
      </div>
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

function openEditRegion(regionName) {
  if (!['admin', 'project_lead'].includes(AppState.currentUser?.role)) {
    showToast('Permisos insuficientes para editar captación regional', 'error'); return;
  }
  const data = DB.get();
  const rd = data.regionData[regionName];
  if (!rd) return;
  Modal.open(`Editar Captación — ${regionName}`, `
    <div class="form-group"><label class="form-label">Matrículas Actuales</label>
      <input type="number" class="form-control" id="er-current" value="${rd.current}"></div>
    <div class="form-group"><label class="form-label">Meta</label>
      <input type="number" class="form-control" id="er-target" value="${rd.target}"></div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveEditRegion('${regionName}')">Guardar cambios</button>`);
}

function saveEditRegion(regionName) {
  const current = parseInt(document.getElementById('er-current')?.value, 10);
  const target = parseInt(document.getElementById('er-target')?.value, 10);
  if (isNaN(current) || isNaN(target)) { showToast('Por favor ingresa números válidos', 'error'); return; }
  DB.update(data => {
    if (data.regionData[regionName]) {
      const rd = data.regionData[regionName];
      if (rd.current !== current && rd.trend) {
        rd.trend.push(rd.current); // Save history before update
      }
      rd.current = current;
      rd.target = target;
    }
  });
  Modal.close(); showToast('Captación regional actualizada ✓');
  renderHeatmapPage(document.getElementById('page-content'));
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
    const perms = (rolePerms[u.role] || []).map(p => `< span class="perm-chip" > ${p}</span > `).join('');
    return `<div class="role-card">
      <div class="role-avatar" style="background:${color}">${initials}</div>
      <div style="flex:1;min-width:0">
        <div class="role-name">${u.name}</div>
        <div class="role-label">${Utils.roleLabel[u.role]} · ${u.email}</div>
        <div class="role-perms" style="margin-top:6px">${perms}</div>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="openEditUser('${u.id}')" title="Editar usuario">✎</button>
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
    localStorage.setItem('currentUser', JSON.stringify(user));
    showToast(`Sesión cambiada a: ${user.name} `);
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
      <td style="white-space:nowrap">
        ${AppState.currentUser.role === 'admin' ? `
        <label class="btn btn-ghost btn-sm" style="cursor:pointer; color:#10b981" title="Importar Excel a este OKR">📥 Excel
            <input type="file" style="display:none" accept=".xlsx, .xls" onchange="importExcelToOkr(event, '${okr.id}')">
        </label>
        <button class="btn btn-ghost btn-sm" onclick="openOKREdit('${okr.id}')">✎ Editar</button>
        <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deleteOKR('${okr.id}')">✕</button>
        ` : '<span style="color:var(--text-4); font-size:10px">Solo lectura</span>'}
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
        <td style="white-space:nowrap">
          ${Auth.canEdit(1, pkr.id) ? `
          <button class="btn btn-ghost btn-sm" style="color:#0ea5e9" onclick="openSharePKR('${okr.id}','${pkr.id}')">🔗 Compartir</button>
          <button class="btn btn-ghost btn-sm" onclick="openPKREdit('${pkr.id}')">✎ Editar</button>
          <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deletePKR('${okr.id}','${pkr.id}')">✕</button>
          ` : (Auth.getPermissionForPKR(pkr.id) !== 'view' ? `<button class="btn btn-ghost btn-sm" style="color:#0ea5e9" onclick="openSharePKR('${okr.id}','${pkr.id}')">🔗 Compartir</button>` : '')}
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
          <td style="white-space:nowrap">
            ${Auth.canEdit(2, pkr.id) ? `
            <button class="btn btn-ghost btn-sm" onclick="openTKREdit('${pkr.id}','${tkr.id}')">✎ Editar</button>
            <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deleteTKR('${pkr.id}','${tkr.id}')">✕</button>
            ` : ''}
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
            <td style="white-space:nowrap">
              ${Auth.canEdit(3, pkr.id) ? `
              <button class="btn btn-ghost btn-sm" onclick="openKAEdit('${ka.id}')">✎ Editar</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deleteKA('${tkr.id}','${ka.id}')">✕</button>
              ` : ''}
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
            ${Auth.canEdit(2, pkr.id) ? `
            <button class="btn btn-ghost btn-sm" onclick="openIndicadorEdit('${pkr.id}','${tkr.id}')">✎ Editar</button>
            ` : ''}
          </td>
        </tr>`);
      });
    });
  });

  // ── Creation toolbar ──────────────────────────
  const isAdmin = AppState.currentUser.role === 'admin';
  const toolbar = `
  <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
    <span style="font-size:11.5px;font-weight:700;color:var(--text-3);margin-right:4px">+ Agregar:</span>
      ${isAdmin ? `
      <button class="btn btn-sm" style="background:#eef2ff;color:#4f46e5;font-weight:700" onclick="openNewOKR()">
        ◈ OKR Estratégico
      </button>
      <button class="btn btn-sm" style="background:#ede9fe;color:#7c3aed;font-weight:700" onclick="openNewPKR()">
        ↳ KR Estratégico
      </button>
      ` : ''
    }
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
          <th>Responsable</th><th>Peso / Fecha</th><th>Progreso / Actual</th><th>Acciones</th>
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
    `< button class="btn btn-secondary" onclick = "Modal.close()" > Cancelar</button >
  <button class="btn btn-primary" onclick="saveNewOKR()">Crear OKR</button>`);
}

function saveNewOKR() {
  if (AppState.currentUser.role !== 'admin') { showToast('Acceso denegado: Se requiere rol Admin', 'error'); return; }
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
      <select class="form-control" id="pkr-parent">${okrOpts}</select></div >
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
  if (AppState.currentUser.role !== 'admin') { showToast('Acceso denegado: Se requiere rol Admin', 'error'); return; }
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
      <select class="form-control" id="tkr-parent">${pkrOpts}</select></div >
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
  const [okrId, pkrId] = document.getElementById('tkr-parent').value.split('|');
  if (!Auth.canEdit(2, pkrId)) { showToast('Acceso denegado', 'error'); return; }
  const name = document.getElementById('tkr-name').value.trim();
  if (!name) { showToast('El nombre es requerido', 'error'); return; }
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
  const [pkrId, tkrId] = document.getElementById('ka-parent').value.split('|');
  if (!Auth.canEdit(3, pkrId)) { showToast('Acceso denegado', 'error'); return; }
  const desc = document.getElementById('ka-description').value.trim();
  if (!desc) { showToast('La descripción es requerida', 'error'); return; }
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
  if (!Auth.canEdit(2, pkrId)) { showToast('Acceso denegado', 'error'); return; }
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
  if (AppState.currentUser.role !== 'admin') { showToast('Acceso denegado', 'error'); return; }
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
  if (!Auth.canEdit(1, pkrId)) { showToast('Acceso denegado', 'error'); return; }
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
    pkr.shares.map(s => {
      const baseUrl = window.location.href.split('?')[0];
      const remoteLink = `${baseUrl}?u=${encodeURIComponent(s.email)}`;
      return `<div style="padding:10px 0; border-bottom:1px solid var(--border); font-size:12px">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px">
            <div style="display:flex; flex-direction:column">
                <strong>${s.email}</strong>
                <span style="color:var(--text-3); font-size:10px">${s.permissionName}</span>
            </div>
            <button class="btn btn-ghost btn-sm" style="color:var(--red); padding:4px" onclick="removeSharePKR('${okrId}', '${pkrId}', '${s.email}')">✕ Revocar</button>
        </div>
        <div style="background:var(--surface-1); padding:6px; border-radius:4px; font-family:monospace; font-size:10px; word-break:break-all; border:1px dashed var(--border)">
            ${remoteLink}
        </div>
        <div style="margin-top:4px"><a href="${remoteLink}" target="_blank" style="font-size:10px; color:var(--brand-primary)">Probar acceso ↗</a></div>
      </div>`;
    }).join('');

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
        <button class="btn btn-primary" style="width:100%; margin-top:8px" onclick="addSharePKR('${okrId}', '${pkrId}')">Invitar y crear enlace</button>
    </div>

    <div class="form-group"><label class="form-label">Accesos y Enlaces Remotos</label>
        <div id="pkr-shares-list">${sharesList}</div>
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
    // 1. Add to global users if not exists
    if (!data.users.find(u => u.email === email)) {
      data.users.push({
        id: 'u_' + Utils.uuid().substring(0, 8),
        name: email.split('@')[0],
        role: permVal === 'view' ? 'viewer' : 'tkr_owner', // default role mapping
        email: email
      });
    }

    // 2. Add to PKR shares
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
  if (!Auth.canEdit(2, pkrId)) { showToast('Acceso denegado', 'error'); return; }
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
  if (AppState.currentUser.role !== 'admin') { showToast('Acceso denegado', 'error'); return; }
  if (!confirm('¿Eliminar este OKR y todos sus niveles hijos? Esta acción no se puede deshacer.')) return;
  DB.update(data => { data.okrs = data.okrs.filter(o => o.id !== okrId); });
  showToast('OKR eliminado'); renderManage(document.getElementById('page-content'));
}
function deletePKR(okrId, pkrId) {
  if (!Auth.canEdit(1, pkrId)) { showToast('Acceso denegado', 'error'); return; }
  if (!confirm('¿Eliminar este KR Estratégico y sus KRs tácticos y acciones?')) return;
  DB.update(data => { const o = data.okrs.find(x => x.id === okrId); if (o) o.projectKRs = o.projectKRs.filter(p => p.id !== pkrId); });
  showToast('KR Estratégico eliminado'); renderManage(document.getElementById('page-content'));
}
function deleteTKR(pkrId, tkrId) {
  if (!Auth.canEdit(2, pkrId)) { showToast('Acceso denegado', 'error'); return; }
  if (!confirm('¿Eliminar este KR Táctico y sus Key Actions?')) return;
  DB.update(data => { data.okrs.forEach(o => o.projectKRs.forEach(p => { if (p.id === pkrId) p.tkrs = p.tkrs.filter(t => t.id !== tkrId); })); });
  showToast('KR Táctico eliminado'); renderManage(document.getElementById('page-content'));
}
function deleteKA(tkrId, kaId) {
  const data = DB.get();
  let pkrId = null;
  data.okrs.forEach(o => o.projectKRs.forEach(p => { if (p.tkrs.find(t => t.id === tkrId)) pkrId = p.id; }));
  if (!Auth.canEdit(3, pkrId)) { showToast('Acceso denegado', 'error'); return; }
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
  if (AppState.currentUser.role === 'viewer') { showToast('Acceso denegado: Los observadores no pueden realizar check-ins', 'error'); return; }
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

// ── End of Bundle ──
