// ─────────────────────────────────────────────
//  Strategic OKR Intelligence System – Data Layer
// ─────────────────────────────────────────────

const DB_KEY = 'okr_ean_db';

// ── Seed data ────────────────────────────────
const SEED = {
  "metadata": {
    "version": "2.0",
    "org": "Universidad EAN",
    "program": "Modelo Ean Virtual 2.0",
    "horizon": "2026",
    "lastUpdated": "2026-02-22"
  },
  "users": [
    {
      "id": "u1",
      "name": "Director Ean Virtual",
      "role": "admin",
      "email": "director@ean.edu.co"
    },
    {
      "id": "u2",
      "name": "L\u00edder Proyecto Digital",
      "role": "project_lead",
      "email": "lider@ean.edu.co"
    },
    {
      "id": "u3",
      "name": "Coordinadora Mercadeo",
      "role": "tkr_owner",
      "email": "mercadeo@ean.edu.co"
    },
    {
      "id": "u4",
      "name": "Analista Acad\u00e9mica",
      "role": "ka_owner",
      "email": "academica@ean.edu.co"
    },
    {
      "id": "u5",
      "name": "Rector",
      "role": "viewer",
      "email": "rector@ean.edu.co"
    }
  ],
  "regions": [
    "Bogot\u00e1",
    "Medell\u00edn",
    "Cali",
    "Barranquilla",
    "Bucaramanga"
  ],
  "okrs": [
    {
      "id": "okr1",
      "name": "Desplegar el Modelo Ean Virtual 2.0 en las regiones de Colombia, fortaleciendo la cobertura nacional y aumentando en un 51,07% (5.227) la adquisici\u00f3n de esta modalidad frente a 2025",
      "horizon": "anual",
      "strategicWeight": 40,
      "responsibleUnit": "VIA/PyC",
      "priority": "Cr\u00edtica",
      "color": "#6366f1",
      "projectKRs": [
          {
                    "id": "pkr1",
                    "name": "Posicionar e Incrementar",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr1.tkr1",
                                        "name": "Diseñar el modelo Ean Virtual en regiones priorizadas",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 14.29,
                                        "kas": [
                                                  {
                                                            "id": "id018d2cf0",
                                                            "description": "Gestionar cobertura de medios en al menos 6 medios masivos nacionales y 6 regionales (prensa, radio, TV, portales especializados).",
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
                                                            "id": "id5a0ac472",
                                                            "description": "Gestionar participación de referencias Ean en al menos 6 medios masivos nacionales y 6 regionales (prensa, radio, TV, portales especializados).",
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
                                                            "id": "id10c1d8e1",
                                                            "description": "Asegurar participación como ponentes en al menos 2 eventos académicos de alto impacto (nacionales e internacionales).",
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
                                                            "id": "id55055bb9",
                                                            "description": "Renovar, modular y participar en rankings académicos por internet para los programas de modalidad virtual.",
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
                                        "id": "pkr1.tkr2",
                                        "name": "Consolidar 5 acuerdos estratégicos regionales B2B/B2G",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 14.29,
                                        "kas": [
                                                  {
                                                            "id": "iddcb59f61",
                                                            "description": "Identificar y priorizar sectores B2B y B2G regionales con potencial de captación para los diferentes programas de modalidad virtual.",
                                                            "responsibleId": "u4",
                                                            "startDate": "2026-03-01",
                                                            "endDate": "2026-12-31",
                                                            "status": "No iniciado",
                                                            "progress": 0,
                                                            "impactWeight": 50.0,
                                                            "region": "Bogotá",
                                                            "notes": ""
                                                  },
                                                  {
                                                            "id": "id50582f49",
                                                            "description": "Establecer al menos 5 acuerdos estratégicos regionales B2B/B2G con matrícula asociadas.",
                                                            "responsibleId": "u4",
                                                            "startDate": "2026-03-01",
                                                            "endDate": "2026-12-31",
                                                            "status": "No iniciado",
                                                            "progress": 0,
                                                            "impactWeight": 50.0,
                                                            "region": "Bogotá",
                                                            "notes": ""
                                                  }
                                        ]
                              },
                              {
                                        "id": "pkr1.tkr3",
                                        "name": "Ejecutar la AISA-Ean 2026 Frente 1",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 14.29,
                                        "kas": []
                              },
                              {
                                        "id": "pkr1.tkr4",
                                        "name": "Ejecutar la AISA-Ean 2026 Frente 2",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 14.29,
                                        "kas": []
                              },
                              {
                                        "id": "pkr1.tkr5",
                                        "name": "Ejecutar la AISA-Ean 2026 Frente 3",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 14.29,
                                        "kas": []
                              },
                              {
                                        "id": "pkr1.tkr6",
                                        "name": "Ejecutar la AISA-Ean 2026 Frente V2.0",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 14.29,
                                        "kas": []
                              },
                              {
                                        "id": "pkr1.tkr7",
                                        "name": "Ejecutar lanzamiento nacional del modelo Ean Virtual 2.0",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 14.29,
                                        "kas": [
                                                  {
                                                            "id": "id7a4ed3d3",
                                                            "description": "Diseñar y ejecutar el evento de lanzamiento nacional del modelo Ean Virtual 2.0.",
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
                                                            "id": "id88c859ce",
                                                            "description": "Realizar 4 clínicas sello los regionales presenciales o híbridos asociados a tecnología.",
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
                                                            "id": "ida012685a",
                                                            "description": "Activar campaña digital segmentada por región asociada al lanzamiento.",
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
                              }
                    ]
          },
          {
                    "id": "pkr2",
                    "name": "Optimizar la conversión y captación",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr2.tkr1",
                                        "name": "Segmentar metas de captación por región y programa virtual",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id73337dcd",
                                                            "description": "Segmentar metas de captación por región y programa virtual, de acuerdo con oferta según producción.",
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
                                                            "id": "id44cfcde3",
                                                            "description": "Optimizar campañas digitales regionales con seguimiento de conversión por canal.",
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
                                                            "id": "id6a8ea08d",
                                                            "description": "Implementar proceso de seguimiento de oportunidades de leads + matrícula.",
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
                                                            "id": "id89e44e44",
                                                            "description": "Ajustar mensajes resaltando interactividad, flexibilidad y personalización, por programa.",
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
                    "name": "Implementar oferta no formal",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr3.tkr1",
                                        "name": "Generar 15% de nuevos ingresos regionales vía oferta formal-no formal",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "idbd626f44",
                                                            "description": "Generar 15% de nuevos ingresos regionales vía oferta formal-no formal.",
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
                                                            "id": "id2fc608d3",
                                                            "description": "Estructurar un mix de programas no formal con potencial de reconversión.",
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
                                                            "id": "id7a93a1cd",
                                                            "description": "Diseñar el menos 5 microcredenciales o cursos no formales alineados a las necesidades regionales.",
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
                                                            "id": "iddb3cb46b",
                                                            "description": "Integrar la oferta no formal en canales online y plataformas regionales.",
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
                                                            "id": "id6dd95cf1",
                                                            "description": "Medir ingresos de rubros de tasas fijos flexibles regionales.",
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
                    "id": "pkr4",
                    "name": "Definir e implementar modelo financiero virtual",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr4.tkr1",
                                        "name": "Definir el modelo de costos de programa virtual",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 50.0,
                                        "kas": [
                                                  {
                                                            "id": "id405f2983",
                                                            "description": "Identificar y clasificar el 100% de los ingresos y costos asociados a producción u operación de la modalidad virtual.",
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
                                                            "id": "id4df8cdb3",
                                                            "description": "Definir el modelo de costos de programa virtual.",
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
                                                            "id": "id0ccb2a2a",
                                                            "description": "Validar competitividad del modelo financiero con contabilidad institucional.",
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
                                        "name": "Alcanzar un margen EBITDA sostenible",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 50.0,
                                        "kas": [
                                                  {
                                                            "id": "id77b0dac7",
                                                            "description": "Establecer presupuesto actual del modelo con metas mensuales de margen EBITDA.",
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
                                                            "id": "id8779a413",
                                                            "description": "Identificar y ejecutar iniciativas de optimización de costos en producción y operación.",
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
                                                            "id": "id48a91645",
                                                            "description": "Implementar seguimiento mensual de desalances presupuestales.",
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
                                                            "id": "idfadf55d8",
                                                            "description": "Realizar control financiero periódico para toma de decisiones correctivas.",
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
                    "name": "Evaluar y asegurar modelo de producción",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr5.tkr1",
                                        "name": "Analizar el modelo de producción y estadística por programa virtual",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "idb2e16039",
                                                            "description": "Analizar económica el modelo de producción y estadística por programas virtual.",
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
                                                            "id": "id56cc4988",
                                                            "description": "Proponer ajustes de pricing por programa.",
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
                                                            "id": "id59b99347",
                                                            "description": "Monitorear impacto de ajustes en captación y margen periódicamente.",
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
                              }
                    ]
          },
          {
                    "id": "pkr6",
                    "name": "Diseñar y monitorear indicadores comparativos Ean Virtual 2.0",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr6.tkr1",
                                        "name": "Definir un conjunto de indicadores comparativos en producción y operación",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id3996f7be",
                                                            "description": "Definir un conjunto de indicadores comparativos entre la producción y operación del modelo Ean Virtual 2.0 frente al modelo anterior.",
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
                                                            "id": "id7c472937",
                                                            "description": "Establecer línea base histórica del modelo anterior y compararla con el modelo 2.0 para evidenciar variaciones en eficiencia.",
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
                                                            "id": "id4199bbed",
                                                            "description": "Integrar al menos el 80% de los indicadores de eficiencia en el tablero financiero institucional con actualización mensual.",
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
                                                            "id": "id474517dd",
                                                            "description": "Utilizar los indicadores de eficiencia como criterio diagnóstico en decisiones de expansión, inversión y optimización operativa.",
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
                    "id": "pkr7",
                    "name": "Desgranar / Culminar ANI proyectados",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr7.tkr1",
                                        "name": "Desarrollar los ANI proyectados por prioridad",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "ide07e822d",
                                                            "description": "Desarrollar los ANI proyectados para la prioridad 1.",
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
                                                            "id": "id999dd52e",
                                                            "description": "Desarrollar los ANI proyectados para la prioridad 2.",
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
                                                            "id": "id288f7275",
                                                            "description": "Desarrollar los ANI proyectados para la prioridad 3.",
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
                                                            "id": "id5b619b53",
                                                            "description": "Desarrollar los ANI proyectados para la prioridad 4.",
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
                                                            "id": "idc048d994",
                                                            "description": "Desarrollar los ANI proyectados para la prioridad 5.",
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
                    "id": "pkr8",
                    "name": "Actualizar ANI con criterios de calidad y mejora continua",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr8.tkr1",
                                        "name": "Definir, implementar y evaluar criterios de calidad y mejora continua para ambientes virtuales",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id770f219a",
                                                            "description": "Realizar la actualización de los ANI proyectados para la prioridad 1.",
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
                                                            "id": "id22d8c94f",
                                                            "description": "Realizar la actualización de los ANI proyectados para la prioridad 2.",
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
                                                            "id": "id2a45e4ec",
                                                            "description": "Realizar la actualización de los ANI proyectados para la prioridad 3.",
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
                                                            "id": "id5d892b51",
                                                            "description": "Realizar la actualización de los ANI proyectados para la prioridad 4.",
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
                                                            "id": "id93941526",
                                                            "description": "Realizar la actualización de los ANI proyectados para la prioridad 5.",
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
                    "id": "pkr9",
                    "name": "Incrementar la eficiencia de producción de ANI",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr9.tkr1",
                                        "name": "Mapear, optimizar y estandarizar el flujo complejo de producción de ANI",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "idc525bfef",
                                                            "description": "Diseñar e implementar un agente IA que automatice la reescritura de los procesos de producción.",
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
                                                            "id": "id7df4ce80",
                                                            "description": "Establecer y monitorear KPI en tiempo prometidos de entrega por programa.",
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
                                                            "id": "idda6fd273",
                                                            "description": "Evaluar, seleccionar e integrar innovaciones pedagógicas digitales emergentes al flujo oficial de producción.",
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
                                                            "id": "ide4d7964e",
                                                            "description": "Integrar la IA en el proceso de producción virtual de los ANI.",
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
                    "id": "pkr10",
                    "name": "Lograr disposición positiva de actores clave hacia el modelo de producción",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr10.tkr1",
                                        "name": "Promover la conciencia y eficacia del modelo de producción entre actores clave",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id31bcda07",
                                                            "description": "Lograr que el 75% de los actores clave manifiesten disposición positiva hacia el nuevo modelo en encuesta de percepción.",
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
                                                            "id": "idd8308650",
                                                            "description": "Lograr que el 90% de los actores clave estén informados en la comunicación y objetivos del modelo.",
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
                                                            "id": "id8bb7e40a",
                                                            "description": "Certificar el 85% de los actores clave en la aplicación práctica del modelo diciembre 2026.",
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
                              }
                    ]
          },
          {
                    "id": "pkr11",
                    "name": "Implementar sistema de refuerzo y gobernanza institucional",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr11.tkr1",
                                        "name": "Implementar un sistema de refuerzo con medición de desempeño visible",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "idc98f514e",
                                                            "description": "Implementar un sistema de refuerzo que incluya: medición de desempeño, reconocimiento visible, retroalimentación estructurada y rendición de cuentas.",
                                                            "responsibleId": "u4",
                                                            "startDate": "2026-03-01",
                                                            "endDate": "2026-12-31",
                                                            "status": "No iniciado",
                                                            "progress": 0,
                                                            "impactWeight": 100.0,
                                                            "region": "Bogotá",
                                                            "notes": ""
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "pkr12",
                    "name": "Implementar sistema de refuerzo and gobernanza institucional",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr12.tkr1",
                                        "name": "Implementar un sistema de refuerzo con medición de desempeño visible",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id1c6b1253",
                                                            "description": "Definir el 100% de roles para la modalidad de producción ajustados al modelo.",
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
                                                            "id": "id75ec740f",
                                                            "description": "Implementar una arquitectura documental institucional con control de versiones, responsabilidades y flujos de aprobación.",
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
                                                            "id": "id6679da12",
                                                            "description": "Implementar un repositorio digital único con acceso controlado y trazabilidad de cambios.",
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
                                                            "id": "id295bdc17",
                                                            "description": "Desarrollar mecanismos institucionales de actualización, revisión y archivo documental.",
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
                    "id": "pkr13",
                    "name": "Garantizar estándar de satisfacción al cliente en programas virtuales",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr13.tkr1",
                                        "name": "Implementar estándar de medición de satisfacción al cliente",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id611c6305",
                                                            "description": "Implementar un estándar de medición de satisfacción al cliente de cada período académico en el 100% de los programas virtuales.",
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
                                                            "id": "id57265519",
                                                            "description": "Realizar análisis trimestral de resultados de satisfacción, identificando brechas críticas y priorizando al menos tres oportunidades de mejora por año.",
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
                                                            "id": "ida8374124",
                                                            "description": "Publicar un informe semestral de nivel del resultado del modelo al menos al 80% de todos los actores institucionales clave al 2026.",
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
                              }
                    ]
          },
          {
                    "id": "pkr14",
                    "name": "Lograr que el tutor Ean Virtual 2.0 cumpla perfil integral",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr14.tkr1",
                                        "name": "Diseñar y aprobar el perfil integral del tutor Ean Virtual 2.0",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id28e74904",
                                                            "description": "Diseñar y aprobar el perfil integral del tutor Ean Virtual 2.0, especificando competencias pedagógicas, tecnológicas y de acompañamiento, con criterios observables de evaluación.",
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
                                                            "id": "id4b9d1c84",
                                                            "description": "Implementar un proceso de acompañamiento pedagógico que confirme el perfil definido, asegurando que el 100% de los nuevos tutores cumplan los criterios estadísticos.",
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
                                                            "id": "id469ecf30",
                                                            "description": "Establecer un proceso formal de habilitación técnica y pedagógica obligatoria para el 100% de los actores antes de asignarlos a ANI en 2026.",
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
                                                            "id": "id547e5266",
                                                            "description": "Realizar verificación periódica del cumplimiento del perfil mediante evaluación de desempeño al modelo habilitado al modelo.",
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
                    "id": "pkr15",
                    "name": "Incrementar el acompañamiento y seguimiento estudiantil con soluciones TIC",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr15.tkr1",
                                        "name": "Realizar un mapeo de oportunidades de mejora con análisis TIC",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 33.33,
                                        "kas": [
                                                  {
                                                            "id": "id5982d059",
                                                            "description": "Realizar un mapeo de oportunidades de mejora con un análisis con TIC e identificar brechas de acompañamiento, seguimiento a estudiantes en riesgo y trazabilidad tutorial.",
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
                                                            "id": "id376bdb34",
                                                            "description": "Diseñar e implementar al menos 2 fichas de soluciones TIC e indicadores con métricas con KPI u objetivos definidos para mejorar el requerimiento de acompañamiento a estudiantes en riesgo y trazabilidad tutorial.",
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
                                                            "id": "idefb6770a",
                                                            "description": "Diseñar e implementar un flujo en plano en monitoreo virtual con follow-up seguimiento de calidad, avance y desempeño de ANI.",
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
                                                            "id": "id8683a440",
                                                            "description": "Escalar las soluciones TIC-IA a partir del éxito comprobado, escalando al menos el 40% de las más durante el ciclo académico 2026.",
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
                                                            "id": "id4d9d676d",
                                                            "description": "Medir el impacto de las soluciones implementadas logrando un incremento mínimo de: 15% en indicadores clave de acompañamiento (frecuencia de interacción, tiempo de respuesta, retención y permanencia).",
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
                                        "id": "pkr15.tkr2",
                                        "name": "Alcanzar nivel de interactividad del modelo Ean Virtual 2.0",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 33.33,
                                        "kas": [
                                                  {
                                                            "id": "idadd1b2f0",
                                                            "description": "Medir el nivel de interactividad del grado del modelo Ean Virtual 2.0, especificando tipología de indicadores y otros mínimos de calidad al interno de la operación académica.",
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
                                                            "id": "id9fb1ab63",
                                                            "description": "Definir y usar instituciones en al menos 3 módulos demostrando dimensiones estratégicas (Mindset digital, retos, emprendimiento, Internacionalización y bienestar vínculo académico).",
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
                                                            "id": "id79c2082a",
                                                            "description": "Implementar al menos una iniciativa de interactividad contextual por programa virtual en 2026.",
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
                                        "id": "pkr15.tkr3",
                                        "name": "Asegurar participación mínima del 40% de estudiantes en iniciativas",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 33.33,
                                        "kas": [
                                                  {
                                                            "id": "id31c8801a",
                                                            "description": "Asegurar una participación mínima del 40% de estudiantes activos en las iniciativas implementadas por Programas.",
                                                            "responsibleId": "u4",
                                                            "startDate": "2026-03-01",
                                                            "endDate": "2026-12-31",
                                                            "status": "No iniciado",
                                                            "progress": 0,
                                                            "impactWeight": 50.0,
                                                            "region": "Bogotá",
                                                            "notes": ""
                                                  },
                                                  {
                                                            "id": "id575f1563",
                                                            "description": "Medir el impacto de las instancias de conexión en al menos 2 dimensiones (retención y comunicación) alcanzando una calificación del 80% en nivel de experiencia.",
                                                            "responsibleId": "u4",
                                                            "startDate": "2026-03-01",
                                                            "endDate": "2026-12-31",
                                                            "status": "No iniciado",
                                                            "progress": 0,
                                                            "impactWeight": 50.0,
                                                            "region": "Bogotá",
                                                            "notes": ""
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "pkr16",
                    "name": "Garantizar diagnóstico y actualización curricular",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr16.tkr1",
                                        "name": "Realizar diagnóstico integral del 100% de syllabus y matrices de congruencia",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id1254fd81",
                                                            "description": "Realizar un diagnóstico integral del 100% de los syllabus y matrices de congruencia vigentes en los programas virtuales antes de cierre de primer semestre de 2026.",
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
                                                            "id": "idcc5e89d9",
                                                            "description": "Aplicar el referente estándares actualizados correctas de versión de las y métricas de alineación para asegurar relevancia, pertinencia y consistencia.",
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
                                                            "id": "id2c895fe6",
                                                            "description": "Realizar un flujo estándar de actualización y aprobación curricular que incluya el 100% de los programas virtuales.",
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
                              }
                    ]
          },
          {
                    "id": "pkr17",
                    "name": "Lograr que actores académicos conozcan y apliquen el modelo Ean Virtual 2.0",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr17.tkr1",
                                        "name": "Garantizar que el 100% de actores académicos conozcan roles, prácticas y expectativas del modelo",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "ideac060ae",
                                                            "description": "Garantizar que el 100% de los actores académicos conozcan las prácticas, roles y expectativas del modelo Ean Virtual 2.0 mediante comunicación estructurada y validación de comprensión.",
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
                                                            "id": "id878df78c",
                                                            "description": "Garantizar que el 100% de los tutores esté formados y habilitados en las herramientas disponibles con disposición por procesos de los instructores (TIC-plataforma).",
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
                                                            "id": "id2c060ab4",
                                                            "description": "Asegurar que el 90% de los actores académicos demuestren comprensión específica del modelo mediante evaluación de pointer o sus similares.",
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
                                                            "id": "id08125510",
                                                            "description": "Lograr que al menos el 80% de los actores académicos con coherencia aplicación correcta del modelo durante 2026.",
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
                    "id": "pkr18",
                    "name": "Implementar sistema formal de seguimiento y rendición de cuentas académica",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr18.tkr1",
                                        "name": "Implementar sistema formal de refuerzo con medidas de desempeño y reconocimiento",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 50.0,
                                        "kas": [
                                                  {
                                                            "id": "id6b22dad8",
                                                            "description": "Implementar un sistema formal de refuerzo que incluya medidas de desempeño, reconocimiento visible, retroalimentación estructurada y rendición de cuentas.",
                                                            "responsibleId": "u4",
                                                            "startDate": "2026-03-01",
                                                            "endDate": "2026-12-31",
                                                            "status": "No iniciado",
                                                            "progress": 0,
                                                            "impactWeight": 100.0,
                                                            "region": "Bogotá",
                                                            "notes": ""
                                                  }
                                        ]
                              },
                              {
                                        "id": "pkr18.tkr2",
                                        "name": "Implementar y documentar el 100% de las acciones académicas necesarias al modelo",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 50.0,
                                        "kas": [
                                                  {
                                                            "id": "id389ba587",
                                                            "description": "Implementar y documentar el 100% de las acciones académicas necesarias al modelo.",
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
                                                            "id": "id9f8ff008",
                                                            "description": "Diseñar e implementar una arquitectura documental institucional con control de versiones, responsabilidades y flujos de aprobación.",
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
                                                            "id": "idad30f389",
                                                            "description": "Implementar un repositorio digital único con acceso controlado y trazabilidad de cambios.",
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
                                                            "id": "id2e01ec87",
                                                            "description": "Formalizar lineamientos institucionales de actualización, revisión y archivo documental.",
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
                    "id": "pkr19",
                    "name": "Garantizar soporte tecnológico para operación de Ean Virtual 2.0",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr19.tkr1",
                                        "name": "Asegurar que la operación del modelo Ean Virtual 2.0 tenga soporte tecnológico efectivo",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id87d77377",
                                                            "description": "Identificar y clasificar el 100% of los procesos críticos identificados, determinando las funciones tecnológicas.",
                                                            "responsibleId": "u4",
                                                            "startDate": "2026-03-01",
                                                            "endDate": "2026-12-31",
                                                            "status": "No iniciado",
                                                            "progress": 0,
                                                            "impactWeight": 100.0,
                                                            "region": "Bogotá",
                                                            "notes": ""
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "pkr20",
                    "name": "Garantizar soporte tecnológico para operación of Ean Virtual 2.0",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr20.tkr1",
                                        "name": "Asegurar que la operación del modelo Ean Virtual 2.0 tenga soporte tecnológico efectivo",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 50.0,
                                        "kas": [
                                                  {
                                                            "id": "id4dba8232",
                                                            "description": "Evaluar el nivel de soporte tecnológico externo para cada proceso crítico identificado, determinando brechas funcionales.",
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
                                                            "id": "idca64bc51",
                                                            "description": "Definir requerimientos tecnológicos específicos para cubrir las brechas identificadas para los procesos críticos.",
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
                                                            "id": "id2de39e59",
                                                            "description": "Contratar y adjudicar soluciones tecnológicas en oportunidad al 100% de los procesos críticos antes de diciembre 2026.",
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
                                                            "id": "idb02b1063",
                                                            "description": "Establecer un mecanismo de monitoreo permanente que verifique que los procesos críticos con soporte tecnológico efectivo.",
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
                                        "id": "pkr20.tkr2",
                                        "name": "Adoptar y proponer hoja de ruta anual de evolución tecnológica del modelo Ean Virtual 2.0",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 50.0,
                                        "kas": [
                                                  {
                                                            "id": "idadc35480",
                                                            "description": "Adoptar y proponer una hoja de ruta anual de evolución tecnológica del modelo Ean Virtual 2.0, para cada según impacto académico, escalabilidad y experiencia del usuario.",
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
                                                            "id": "id045bd89a",
                                                            "description": "Generar al 80% las mejores 3 soluciones tecnológicas para adecuar 2026.",
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
                                                            "id": "idcba28924",
                                                            "description": "Realizar validación funcional y medición de experiencia de usuario para cada mejora implementada antes de su despliegue definitivo.",
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
                                                            "id": "id7e6834a0",
                                                            "description": "Monitorear el impacto de las mejoras implementadas y realizar ajustes de nivel de acuerdo al identificar brechas de las motivaciones.",
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
                    "id": "pkr21",
                    "name": "Garantizar integración y automatización de datos del modelo",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr21.tkr1",
                                        "name": "Implementar mecanismos de integración y automatización de datos para al menos el 80% de KPIs",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id594b6f3b",
                                                            "description": "Implementar mecanismos de integración y automatización de datos para al menos el 80% de los KPIs definidos en 2026.",
                                                            "responsibleId": "u4",
                                                            "startDate": "2026-03-01",
                                                            "endDate": "2026-12-31",
                                                            "status": "No iniciado",
                                                            "progress": 0,
                                                            "impactWeight": 100.0,
                                                            "region": "Bogotá",
                                                            "notes": ""
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "pkr22",
                    "name": "Garantizar integración y automatización of datos del modelo",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr22.tkr1",
                                        "name": "Implementar mecanismos of integración y automatización de datos para al menos el 80% de KPIs",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "ide34739f4",
                                                            "description": "Desplegar dashboards ejecutivos y operacionales con actualización periódica para la toma de decisiones en el modelo Ean Virtual 2.0.",
                                                            "responsibleId": "u4",
                                                            "startDate": "2026-03-01",
                                                            "endDate": "2026-12-31",
                                                            "status": "No iniciado",
                                                            "progress": 0,
                                                            "impactWeight": 50.0,
                                                            "region": "Bogotá",
                                                            "notes": ""
                                                  },
                                                  {
                                                            "id": "id7ecd9498",
                                                            "description": "Establecer formularios of seguimiento en el modelo al menos en 2 dimensiones de la demanda.",
                                                            "responsibleId": "u4",
                                                            "startDate": "2026-03-01",
                                                            "endDate": "2026-12-31",
                                                            "status": "No iniciado",
                                                            "progress": 0,
                                                            "impactWeight": 50.0,
                                                            "region": "Bogotá",
                                                            "notes": ""
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "pkr23",
                    "name": "Alcanzar modelo de soporte tecnológico para producción y operación",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr23.tkr1",
                                        "name": "Definir y formalizar el modelo de soporte tecnológico para producción y operación del modelo Ean Virtual 2.0",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id61b35aa6",
                                                            "description": "Definir y formalizar el modelo de soporte tecnológico para producción y operación del modelo Ean Virtual 2.0, incluyendo niveles de servicio (SLA), tiempos de respuesta y canales oficiales de atención.",
                                                            "responsibleId": "u4",
                                                            "startDate": "2026-03-01",
                                                            "endDate": "2026-12-31",
                                                            "status": "No iniciado",
                                                            "progress": 0,
                                                            "impactWeight": 100.0,
                                                            "region": "Bogotá",
                                                            "notes": ""
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "pkr24",
                    "name": "Alcanzar modelo of soporte tecnológico para producción y operación",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr24.tkr1",
                                        "name": "Definir y formalizar el modelo of soporte tecnológico para producción y operación del modelo Ean Virtual 2.0",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id4bab985d",
                                                            "description": "Garantizar que el 100% de los actores involucrados en producción y operación conozcan y estén capacitados en los protocolos tecnológicas establecidas al modelo.",
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
                                                            "id": "id811a66b1",
                                                            "description": "Garantizar que el 30% of las soluciones tecnológicas se atiendan dentro de los campos definidos en los SLA establecidos.",
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
                                                            "id": "id7a101107",
                                                            "description": "Aplicar modelo con tri-mensual of satisfacción del servicio de soporte y accionar acciones de mejora cuando el índice sea inferior al 85%.",
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
                              }
                    ]
          },
          {
                    "id": "pkr25",
                    "name": "Lograr capacidades digitales de actores institucionales clave",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr25.tkr1",
                                        "name": "Diseñar y apoyar construcción de capacidades digitales de actores institucionales clave",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "idef26a589",
                                                            "description": "Diseñar y apoyar en construcción of capacidades de digital y seguimiento de actores institucionales clave (tutores, directores, producción, coordinación académica).",
                                                            "responsibleId": "u4",
                                                            "startDate": "2026-03-01",
                                                            "endDate": "2026-12-31",
                                                            "status": "No iniciado",
                                                            "progress": 0,
                                                            "impactWeight": 100.0,
                                                            "region": "Bogotá",
                                                            "notes": ""
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "pkr26",
                    "name": "Lograr capacidades digitales of actores institucionales clave",
                    "metricMain": "Estratégico",
                    "baseline": 0,
                    "target": 100,
                    "current": 0,
                    "unit": "%",
                    "verificationSource": "Reporte Institucional",
                    "indicatorType": "Estratégico",
                    "weightInOKR": 4.76,
                    "responsibleId": "u2",
                    "tkrs": [
                              {
                                        "id": "pkr26.tkr1",
                                        "name": "Diseñar y apoyar construcción of capacidades digitales de actores institucionales clave",
                                        "metric": "Avance de metas",
                                        "formula": "(Cumplimiento / Meta) * 100",
                                        "target": 100,
                                        "current": 0,
                                        "baseline": 0,
                                        "unit": "%",
                                        "responsibleId": "u3",
                                        "periodicity": "Mensual",
                                        "weightInPKR": 100.0,
                                        "kas": [
                                                  {
                                                            "id": "id8cfaee99",
                                                            "description": "Aplicar una evaluación diagnóstico of competencias digitales en el 100% de los actores institucionales clave en 2026.",
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
                                                            "id": "id98cb2b2f",
                                                            "description": "Desarrollar un plan of habilitación en tecnología focalizado en las brechas identificadas, priorizando roles con mayor impacto en el modelo.",
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
                                                            "id": "id3f589ce6",
                                                            "description": "Implementar una ruta of capacitación del sistema TIC mediante la evaluación práctica y evidencia de uso activo.",
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
                              }
                    ]
          }
]
    }
  ],
  "compositeIndex": {
    "captacion": {
      "weight": 0.4,
      "label": "Captaci\u00f3n de Matr\u00edculas",
      "value": 72.8,
      "target": 100
    },
    "reputacion": {
      "weight": 0.2,
      "label": "Reputaci\u00f3n y Visibilidad",
      "value": 77.3,
      "target": 100
    },
    "alianzas": {
      "weight": 0.2,
      "label": "Alianzas Estrat\u00e9gicas",
      "value": 50,
      "target": 100
    },
    "nps": {
      "weight": 0.1,
      "label": "NPS Estudiantil",
      "value": 87.3,
      "target": 100
    },
    "retencion": {
      "weight": 0.1,
      "label": "Retenci\u00f3n Semestral",
      "value": 93.2,
      "target": 100
    }
  },
  "regionData": {
    "Bogot\u00e1": {
      "target": 700,
      "current": 540,
      "trend": [
        380,
        420,
        480,
        520,
        540
      ]
    },
    "Medell\u00edn": {
      "target": 350,
      "current": 285,
      "trend": [
        180,
        210,
        245,
        270,
        285
      ]
    },
    "Cali": {
      "target": 280,
      "current": 198,
      "trend": [
        120,
        145,
        165,
        185,
        198
      ]
    },
    "Barranquilla": {
      "target": 250,
      "current": 187,
      "trend": [
        100,
        125,
        148,
        168,
        187
      ]
    },
    "Bucaramanga": {
      "target": 220,
      "current": 100,
      "trend": [
        50,
        62,
        74,
        88,
        100
      ]
    }
  },
  "decisions": [
    {
      "id": "d1",
      "date": "2026-02-14",
      "title": "Aprobaci\u00f3n Pol\u00edtica de Gobernanza Digital Ean Virtual 2.0",
      "body": "El Consejo Acad\u00e9mico aprob\u00f3 la pol\u00edtica de gobernanza digital que establece roles, flujos y responsabilidades del modelo virtual.",
      "responsibleId": "u1",
      "relatedOKR": "okr3",
      "priority": "Alta"
    },
    {
      "id": "d2",
      "date": "2026-02-10",
      "title": "Contrataci\u00f3n Civitas Learning como proveedor de anal\u00edtica educativa",
      "body": "Se firm\u00f3 contrato con Civitas Learning para integraci\u00f3n de anal\u00edtica acad\u00e9mica al LMS institucional por un per\u00edodo de 24 meses.",
      "responsibleId": "u1",
      "relatedOKR": "okr2",
      "priority": "Alta"
    },
    {
      "id": "d3",
      "date": "2026-01-28",
      "title": "Priorizaci\u00f3n de regiones para despliegue Q1 2026",
      "body": "Se defini\u00f3 Bogot\u00e1 y Medell\u00edn como regiones prioritarias para el despliegue intensivo en Q1, seguidas de Cali y Barranquilla en Q2.",
      "responsibleId": "u1",
      "relatedOKR": "okr1",
      "priority": "Cr\u00edtica"
    }
  ],
  "checkins": [
    {
      "id": "ci1",
      "date": "2026-02-17",
      "type": "weekly",
      "okrId": "okr1",
      "summary": "Campa\u00f1a de captaci\u00f3n activa en Bogot\u00e1 y Medell\u00edn. CRM mostrando mejora en conversi\u00f3n (+2pp). Riesgo identificado en alianzas empresariales por ciclo de aprobaci\u00f3n lento.",
      "riskLevel": "Medio",
      "responsibleId": "u2"
    },
    {
      "id": "ci2",
      "date": "2026-02-10",
      "type": "weekly",
      "okrId": "okr2",
      "summary": "Integraci\u00f3n LMS avanz\u00f3 al 60%. Primera cohorte docente completada con 28 participantes. Microcredenciales en revisi\u00f3n curricular.",
      "riskLevel": "Bajo",
      "responsibleId": "u4"
    },
    {
      "id": "ci3",
      "date": "2026-02-17",
      "type": "weekly",
      "okrId": "okr3",
      "summary": "Infraestructura cloud al 85% migrada. CDN operativo en 3 regiones. Monitoreo 24/7 casi completo.",
      "riskLevel": "Bajo",
      "responsibleId": "u2"
    }
  ],
  "monthlyTrend": {
    "labels": [
      "Sep 25",
      "Oct 25",
      "Nov 25",
      "Dic 25",
      "Ene 26",
      "Feb 26"
    ],
    "okr1": [
      28,
      34,
      41,
      47,
      52,
      58
    ],
    "okr2": [
      15,
      25,
      35,
      44,
      51,
      62
    ],
    "okr3": [
      20,
      35,
      48,
      58,
      68,
      77
    ]
  }
};

// ── Versi\u00f3n Inicial (Bloqueada) ───────────────
const INITIAL_VERSION = JSON.parse(JSON.stringify(SEED));

// ── Data access helpers ───────────────────────
const DB = (() => {
  let _data = null;

  function load() {
    try {
      const raw = localStorage.getItem(DB_KEY);
      _data = raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(INITIAL_VERSION));
    } catch {
      _data = JSON.parse(JSON.stringify(INITIAL_VERSION));
    }
    return _data;
  }

  function save() {
    localStorage.setItem(DB_KEY, JSON.stringify(_data));
  }

  function get() {
    if (!_data) load();
    return _data;
  }

  function reset() {
    _data = JSON.parse(JSON.stringify(INITIAL_VERSION));
    save();
    return _data;
  }

  function update(fn) {
    if (!_data) load();
    fn(_data);
    save();
    return _data;
  }

  return { get, load, save, update, reset };
})();

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
