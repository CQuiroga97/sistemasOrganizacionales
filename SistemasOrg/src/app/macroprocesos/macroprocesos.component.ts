import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-macroprocesos',
  templateUrl: './macroprocesos.component.html',
  styleUrls: ['./macroprocesos.component.scss']
})
export class MacroprocesosComponent {
  tabla = [
    {
        "titulo_macro": "Estrategia y Desarrollo de Negocios",
        "procesos": [
            {
                "titulo_proceso": "Análisis de Mercado",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Investigación de Mercado",
                        "procedimientos": [
                            "Realización de encuestas",
                            "Análisis de datos recopilados",
                            "Identificación de tendencias",
                            "Elaboración de informes",
                            "Presentación de resultados"
                        ]
                    },
                    {
                        "titulo_subproceso": "Análisis de Competencia",
                        "procedimientos": [
                            "Evaluación de competidores",
                            "Análisis de productos/servicios",
                            "Benchmarking",
                            "Elaboración de informes",
                            "Estrategias competitivas"
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Planificación Estratégica",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Definición de Objetivos",
                        "procedimientos": [
                            "Establecimiento de metas",
                            "Priorización de objetivos",
                            "Definición de indicadores",
                            "Elaboración de planes",
                            "Revisión y ajuste de objetivos"
                        ]
                    },
                    {
                        "titulo_subproceso": "Formulación de Estrategias",
                        "procedimientos": [
                            "Desarrollo de estrategias",
                            "Evaluación de alternativas",
                            "Selección de estrategias",
                            "Implementación de estrategias",
                            "Monitoreo y ajuste estratégico"
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Gestión Comercial",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Desarrollo de Propuestas Comerciales",
                        "procedimientos": [
                            "Creación de propuestas",
                            "Diseño de propuestas",
                            "Validación de propuestas",
                            "Presentación de propuestas",
                            "Negociación de propuestas"
                        ]
                    },
                    {
                        "titulo_subproceso": "Gestión de Clientes y Alianzas",
                        "procedimientos": [
                            "Seguimiento de clientes",
                            "Gestión de reclamaciones",
                            "Fidelización de clientes",
                            "Gestión de alianzas estratégicas",
                            "Negociación de acuerdos"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "titulo_macro": "Innovación y Desarrollo Tecnológico",
        "procesos": [
            {
                "titulo_proceso": "Investigación y Desarrollo (I+D)",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Investigación de Tecnologías Emergentes",
                        "procedimientos": [
                            "Identificación de nuevas tecnologías",
                            "Análisis de viabilidad",
                            "Evaluación de impacto",
                            "Priorización de tecnologías",
                            "Informe de investigación"
                        ]
                    },
                    {
                        "titulo_subproceso": "Desarrollo de Prototipos",
                        "procedimientos": [
                            "Creación de prototipos",
                            "Pruebas de prototipos",
                            "Validación de prototipos",
                            "Ajustes y mejoras",
                            "Documentación de prototipos"
                        ]
                    },
                    {
                        "titulo_subproceso": "Implementación Tecnológica",
                        "procedimientos": [
                            "Implementación de soluciones",
                            "Configuración de soluciones",
                            "Capacitación de usuarios",
                            "Soporte post-implementación",
                            "Evaluación de implementación"
                        ]
                    },
                    {
                        "titulo_subproceso": "Pruebas y Validación",
                        "procedimientos": [
                            "Realización de pruebas",
                            "Análisis de resultados",
                            "Ajustes y correcciones",
                            "Documentación de pruebas",
                            "Validación final"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "titulo_macro": "Gestión de Proyectos",
        "procesos": [
            {
                "titulo_proceso": "Planificación de Proyectos",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Definición de Alcance",
                        "procedimientos": [
                            "Establecimiento de objetivos",
                            "Definición de requisitos",
                            "Desarrollo de WBS",
                            "Estimación de tiempos",
                            "Asignación de recursos"
                        ]
                    },
                    {
                        "titulo_subproceso": "Estimación de Recursos",
                        "procedimientos": [
                            "Identificación de recursos",
                            "Estimación de costos",
                            "Asignación de presupuesto",
                            "Planificación de adquisiciones",
                            "Elaboración de cronograma"
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Ejecución de Proyectos",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Coordinación de Equipos",
                        "procedimientos": [
                            "Organización de equipos",
                            "Monitoreo y control",
                            "Gestión de cambios",
                            "Comunicación de avances",
                            "Resolución de conflictos"
                        ]
                    },
                    {
                        "titulo_subproceso": "Seguimiento y Control",
                        "procedimientos": [
                            "Monitoreo de avances",
                            "Control de calidad",
                            "Análisis de desviaciones",
                            "Ajuste de planificación"
                        ]
                    },
                    {
                        "titulo_subproceso": "Cierre de Proyectos",
                        "procedimientos": [
                            "Evaluación de Resultados",
                            "Documentación de lecciones aprendidas",
                            "Liberación de recursos",
                            "Entrega de resultados",
                            "Evaluación de satisfacción del cliente"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "titulo_macro": "Desarrollo de Software",
        "procesos": [
            {
                "titulo_proceso": "Diseño de Software",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Definición de Requisitos",
                        "procedimientos": [
                            "Reunión de requisitos",
                            "Análisis de requisitos",
                            "Priorización de requisitos",
                            "Documentación de requisitos"
                        ]
                    },
                    {
                        "titulo_subproceso": "Diseño de Arquitectura",
                        "procedimientos": [
                            "Creación de arquitectura",
                            "Definición de componentes",
                            "Diagramación de arquitectura",
                            "Revisión de arquitectura",
                            "Documentación de arquitectura"
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Desarrollo",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Desarrollo de Código",
                        "procedimientos": [
                            "Codificación de software",
                            "Revisión de código",
                            "Pruebas unitarias",
                            "Corrección de errores",
                            "Documentación de código"
                        ]
                    },
                    {
                        "titulo_subproceso": "Pruebas Unitarias",
                        "procedimientos": [
                            "Planificación de pruebas",
                            "Ejecución de pruebas",
                            "Registro de resultados",
                            "Corrección de defectos",
                            "Documentación de pruebas"
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Implementación",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Implementación y Mantenimiento",
                        "procedimientos": [
                            "Integración de componentes",
                            "Validación de integración",
                            "Documentación de integración",
                            "Soporte post-integración",
                            "Ajustes y mejoras",
                            "Documentación de mantenimiento"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "titulo_macro": "Desarrollo de Hardware",
        "procesos": [
            {
                "titulo_proceso": "Diseño y Prototipado",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Especificaciones Técnicas",
                        "procedimientos": [
                            "Definición de especificaciones",
                            "Revisión de especificaciones",
                            "Validación de especificaciones",
                            "Documentación de especificaciones"
                        ]
                    },
                    {
                        "titulo_subproceso": "Prototipado",
                        "procedimientos": [
                            "Creación de prototipos",
                            "Pruebas de prototipos",
                            "Validación de prototipos",
                            "Ajustes y mejoras",
                            "Documentación de prototipos"
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Fabricación y control de calidad",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Fabricación",
                        "procedimientos": [
                            "Elección de proveedores",
                            "Negociación de condiciones",
                            "Evaluación de proveedores",
                            "Aprobación de proveedores",
                            "Registro de proveedores",
                            "Seguimiento de proveedores",
                            "Evaluación de desempeño",
                            "Gestión de contratos"
                        ]
                    },
                    {
                        "titulo_subproceso": "Control de Calidad",
                        "procedimientos": [
                            "Definición de estándares",
                            "Inspección de materiales",
                            "Pruebas de calidad",
                            "Registro de resultados",
                            "Ajustes y correcciones",
                            "Documentación de calidad",
                            "Certificaciones de calidad",
                            "Auditorías de calidad"
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Pruebas de Hardware",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Pruebas y Validación",
                        "procedimientos": [
                            "Realización de pruebas",
                            "Registro de resultados",
                            "Ajustes y correcciones",
                            "Validación final",
                            "Obtención de certificaciones",
                            "Preparación de documentación",
                            "Presentación a entidades",
                            "Seguimiento de trámites",
                            "Aprobación de certificaciones"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "titulo_macro": "Gestion de Ventas",
        "procesos": [
            {
                "titulo_proceso": "Generación de Leads y Prospección",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Identificación y atracción de clientes potenciales",
                        "procedimientos": [
                            "Investigación de mercado y segmentación.",
                            "Creación de estrategias de generación de leads (marketing digital, eventos, networking)",
                            "Captura de información de clientes potenciales en CRM."
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Cualificación de Leads",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Evaluación de la calidad y potencial de los leads generados",
                        "procedimientos": [
                            "Cualificación de leads según criterios predefinidos (presupuesto, necesidades, autoridad para comprar.",
                            "Priorización de leads cualificados para asignación a los equipos de ventas."
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Presentación de Propuestas",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Elaboración y presentación de propuestas comerciales y demostraciones de productos.",
                        "procedimientos": [
                            "Reuniones de descubrimiento para comprender las necesidades del cliente.",
                            "Diseño de propuestas personalizadas según los requerimientos del cliente.",
                            "Coordinación de demostraciones de productos y soluciones."
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Negociación y Cierre de Ventas",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Negociación de términos, condiciones y precios para cerrar la venta",
                        "procedimientos": [
                            "Presentación de cotizaciones y negociación de precios",
                            "Resolución de objeciones y dudas.",
                            "Formalización de contratos y acuerdos comerciales."
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Gestión Post-Venta",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Atención al cliente y seguimiento después de la venta",
                        "procedimientos": [
                            "Entrega e instalación de los productos vendidos.",
                            "Capacitación del cliente en el uso de los productos.",
                            "Soporte técnico y atención a consultas post-venta.",
                            "Solicitudes de retroalimentación y seguimiento de satisfacción del cliente."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "titulo_macro": "Marketing Digital",
        "procesos": [
            {
                "titulo_proceso": "Investigación y Análisis de Mercado",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Obtención de información sobre el mercado y competencia.",
                        "procedimientos": [
                            "Análisis de la industria de la domótica y tendencias del mercado.",
                            "Investigación de competidores y análisis de su presencia en línea.",
                            "Identificación de segmentos de mercado y nichos específicos."
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Desarrollo de Estrategia de Marketing Digital",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Definición de objetivos y planificación de acciones",
                        "procedimientos": [
                            "Establecimiento de objetivos SMART (específicos, medibles, alcanzables, relevantes y limitados en el tiempo).",
                            "Selección de canales digitales adecuados (redes sociales, SEO, SEM, email marketing.",
                            "Creación de un calendario editorial y de publicaciones."
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Creación de Contenido",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Producción de materiales para la estrategia de marketing",
                        "procedimientos": [
                            "Reuniones de descubrimiento para comprender las necesidades del cliente.",
                            "Diseño de propuestas personalizadas según los requerimientos del cliente.",
                            "Coordinación de demostraciones de productos y soluciones."
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Difusión y Promoción",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Distribución del contenido y promoción de la marca",
                        "procedimientos": [
                            "Publicación en redes sociales y gestión de la comunidad.",
                            "Implementación de campañas de publicidad online (SEM, display, social ads.)",
                            "Envío de newsletters y emails promocionales."
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Gestión de Relaciones con Clientes (CRM)",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Interacción y seguimiento con clientes y prospectos",
                        "procedimientos": [
                            "Implementación y mantenimiento de un sistema CRM para gestionar contactos y clientes.",
                            "Segmentación de la base de datos para campañas específicas.",
                            "Automatización de flujos de trabajo y seguimiento de clientes potenciales."
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Análisis y Optimización",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Evaluación del rendimiento y ajuste de estrategias",
                        "procedimientos": [
                            "Monitoreo de métricas clave de marketing (tráfico web, conversiones, ROI)",
                            "Análisis de la efectividad de las campañas y acciones realizadas.",
                            "Realización de pruebas A/B y experimentos para mejorar el rendimiento."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "titulo_macro": "Gestion del talento humano",
        "procesos": [
            {
                "titulo_proceso": "Reclutamiento y selección",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Identificación de necesidades del personal",
                        "procedimientos": [
                            "Publicación de vacantes, evaluación de candidatos",
                            "Selección y contratación"
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Capacitación y desarrollo",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Identificación de necesidades de capacitación",
                        "procedimientos": [
                            "Diseño de programas de capacitación, implementación de programas de capacitación",
                            "Evaluación del impacto de la capacitación"
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Evaluación del desempeño",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Definición de objetivos y metas",
                        "procedimientos": [
                            "Evaluación del desempeño, retroalimentación y desarrollo",
                            "Planificación del desarrollo profesional"
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Compensación y beneficios",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Análisis de puestos y determinación de salarios",
                        "procedimientos": [
                            "Gestión de beneficios sociales, administración de compensaciones variables",
                            "Gestión de reclamaciones de empleados"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "titulo_macro": "Gestión financiera y administrativa",
        "procesos": [
            {
                "titulo_proceso": "Gestión financiera",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Presupuesto",
                        "procedimientos": [
                            "Elaboración de presupuestos anuales"
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Gestión administrativa",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Facturación y cobranza",
                        "procedimientos": [
                            "Seguimiento y control de presupuestos",
                            "Generación de facturas",
                            "Gestión de cuentas por cobrar",
                            "Seguimiento de pagos"
                        ]
                    },
                    {
                        "titulo_subproceso": "Contabilidad",
                        "procedimientos": [
                            "Registro de transacciones contables",
                            "Conciliaciones bancarias",
                            "Elaboración de estados financieros"
                        ]
                    },
                    {
                        "titulo_subproceso": "Gestión de recursos humanos",
                        "procedimientos": [
                            "Proceso de reclutamiento y selección",
                            "Administración de nómina y beneficios"
                        ]
                    },
                    {
                        "titulo_subproceso": "Gestión de compras",
                        "procedimientos": [
                            "Identificación de proveedores",
                            "Cotización y selección de proveedores",
                            "Proceso de compra y recepción de bienes y servicios"
                        ]
                    },
                    {
                        "titulo_subproceso": "Gestión de inventarios",
                        "procedimientos": [
                            "Control de inventarios",
                            "Reabastecimiento de inventarios",
                            "Gestión de activos fijos"
                        ]
                    },
                    {
                        "titulo_subproceso": "Gestión de proyectos",
                        "procedimientos": [
                            "Planificación y seguimiento de proyectos",
                            "Asignación de recursos"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "titulo_macro": "Evaluación",
        "procesos": [
            {
                "titulo_proceso": "Evaluación",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Evaluación del desempeño",
                        "procedimientos": [
                            "Definición de objetivos y metas",
                            "Realización de evaluaciones de desempeño",
                            "Retroalimentación y desarrollo"
                            
                        ]
                    },
                    {
                        "titulo_subproceso": "Evaluación de proyectos",
                        "procedimientos": [
                            "Planificación y seguimiento de proyectos",
                            "Análisis de resultados y lecciones aprendidas"
                            
                            
                        ]
                    },
                    {
                        "titulo_subproceso": "Evaluación de competencias",
                        "procedimientos": [
                            "Identificación de competencias clave",
                            "Evaluación de competencias mediante pruebas"
                            
                            
                        ]
                    },
                    {
                        "titulo_subproceso": "Evaluación de proveedores",
                        "procedimientos": [
                            "Evaluación de calidad y cumplimiento de plazos",
                            "Revisión de retroalimentación de clientes"
                            
                            
                        ]
                    },
                    {
                        "titulo_subproceso": "Evaluación de satisfacción del cliente",
                        "procedimientos": [
                            "Recopilación y análisis de opiniones de clientes",
                            "Acciones correctivas y mejora continua"
                            
                            
                        ]
                    }
                ]
            }
            
        ]
    },
    {
        "titulo_macro": "Administración y finazas",
        "procesos": [
            {
                "titulo_proceso": "Administración",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Gestión de Recursos Humanos",
                        "procedimientos": [
                            "Reclutamiento y selección de personal",
                            "Gestión de nómina y beneficios"
                            
                            
                        ]
                    },
                    {
                        "titulo_subproceso": "Gestión de Compras",
                        "procedimientos": [
                            "Identificación y selección de proveedores",
                            "Proceso de compra y recepción de bienes y servicios"
                            
                            
                            
                        ]
                    },
                    {
                        "titulo_subproceso": "Gestión de Inventarios",
                        "procedimientos": [
                            "Control de inventarios",
                            "Gestión de activos fijos"
                            
                            
                            
                        ]
                    },
                    {
                        "titulo_subproceso": "Gestión de Proyectos",
                        "procedimientos": [
                            "Planificación y seguimiento de proyectos"
                            
                            
                        ]
                    }
                ]
            },
            {
                "titulo_proceso": "Finanzas",
                "subprocesos": [
                    {
                        "titulo_subproceso": "Contabilidad",
                        "procedimientos": [
                            "Elaboración y seguimiento del presupuesto",
                            "Generación de facturas y gestión de cobranzas",
                            "Registro de transacciones contables y elaboración de estados financieros"
                            
                            
                            
                        ]
                    },
                    {
                        "titulo_subproceso": "Gestión de Tesorería",
                        "procedimientos": [
                            "Gestión de flujo de efectivo y cuentas bancarias",
                            "Análisis y gestión de inversiones",
                            "Preparación y presentación de informes financieros"
                            
                            
                            
                            
                        ]
                    }
                ]
            }
            
        ]
    }
]
constructor(private route: ActivatedRoute,app:AppComponent) { 
  app.pagina = 6;
}
private fragment: any = "";
ngOnInit() {
  this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
}

  getRowSpan(macro:any){
    let count = 0;
    macro.procesos.forEach((el:any)=>{
      el.subprocesos.forEach((el2:any)=>{
        count+=el2.procedimientos.length;
      })
    })
    return count;
  }
  getRowSpanProcesos(macro:any){
    let count = 0;
      macro.subprocesos.forEach((el2:any)=>{
        count+=el2.procedimientos.length;
      })
    return count;
  }

}
