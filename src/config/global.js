export default {
  global: {
    componenteFormativo:
      'Implementación de comunicaciones unificadas y sistemas de seguridad',
    descripcionCurso:
      'Este componente aborda la implementación de comunicaciones unificadas y sistemas de seguridad y abarca el diseño y ejecución de sistemas <i>VoIP</i>, integración de comunicaciones empresariales, y soluciones de seguridad electrónica como CCTV y alarmas. Por otra parte, también detalla la importancia de centros de control y la gestión de incidentes, orientados a optimizar la seguridad y la colaboración en entornos corporativos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Telefonía IP',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Arquitectura <i>VoIP</i>.',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Protocolos de señalización',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Calidad de servicio',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Integración de sistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Comunicaciones unificadas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Servicios de mensajería',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Colaboración empresarial',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguridad electrónica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Sistemas CCTV',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Control de acceso',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sistemas de alarma',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Monitoreo y gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Centros de control',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Analítica de video',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Gestión de incidentes',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.  Integración de sistemas ',
      referencia:
        'Cisco. (2011). <i>Cisco simplifica y reduce los costos de su solución de comunicaciones unificadas para las empresas medianas</i>. Blog Cisco Latinoamérica. Comunicaciones Unificadas',
      tipo: 'Blog Digital Web',
      link:
        'https://gblogs.cisco.com/la/cisco-simplifica-reduce-los-costos-de-su-solucion-de-comunicaciones-unificadas-para-las-empresas-medianas/?form=MG0AV3',
    },
    {
      tema:
        'https://gblogs.cisco.com/la/cisco-simplifica-reduce-los-costos-de-su-solucion-de-comunicaciones-unificadas-para-las-empresas-medianas/?form=MG0AV3',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023f, octubre 04). <i>Monitoreo de seguridad web.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VusaSKjpYLg',
    },
    {
      tema: '3. Seguridad electrónica',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022f, marzo 11). <i>Introducción a la Ciberseguridad, sus fundamentos y normativa.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3rqfPRqnKIM',
    },
    {
      tema: '4. Seguridad electrónica',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023f, febrero 01). <i>Metodología y estrategias de la ciberseguridad</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Dc7PGh5Aiss',
    },
    {
      tema: '5. Gestión de incidentes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023f, diciembre 01). <i>Monitoreo y respuesta de incidentes de seguridad digital</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Gwu7EATxkZ0',
    },
  ],
  glosario: [
    {
      termino: 'Analítica de video',
      significado:
        'Proceso de análisis de imágenes de video para detectar y comprender patrones o eventos específicos en tiempo real o diferido.',
    },
    {
      termino: 'Arquitectura <i>VoIP</i>',
      significado:
        'Estructura tecnológica que permite transmitir comunicaciones de voz a través de internet utilizando el protocolo IP, optimizando costos y recursos.',
    },
    {
      termino: 'Calidad de servicio (QoS)',
      significado:
        'Conjunto de técnicas y parámetros que garantizan el rendimiento adecuado de una red para la transmisión de datos críticos, como voz y video.',
    },
    {
      termino: 'Centros de control',
      significado:
        'Instalaciones especializadas donde se monitorean y gestionan sistemas de seguridad y comunicaciones en tiempo real.',
    },
    {
      termino: 'Colaboración empresarial',
      significado:
        'Estrategias y herramientas que facilitan la comunicación y cooperación entre empleados, equipos y organizaciones para mejorar la productividad.',
    },
    {
      termino: 'Comunicaciones unificadas',
      significado:
        'Integración de múltiples herramientas de comunicación (mensajería, videollamadas, email, etc.) en una plataforma única para mejorar la eficiencia.',
    },
    {
      termino: 'Control de acceso',
      significado:
        'Mecanismos y tecnologías que regulan quién puede entrar o salir de un área física o acceder a información digital, basándose en permisos y autenticaciones.',
    },
    {
      termino: 'CCTV (Circuito Cerrado de Televisión)',
      significado:
        'Sistema de cámaras de video instaladas para la vigilancia y monitoreo de espacios específicos, utilizado en seguridad electrónica.',
    },
    {
      termino: 'Documentación',
      significado:
        'Proceso de registro y organización de información relacionada con sistemas de seguridad y comunicaciones para referencia futura.',
    },
    {
      termino: 'Gestión de incidentes',
      significado:
        'Metodología de identificación, evaluación y resolución de incidentes de seguridad para minimizar riesgos y restablecer el servicio.',
    },
    {
      termino: 'Integración de sistemas',
      significado:
        'Proceso de conectar y unificar diferentes sistemas de comunicación para que funcionen de manera coordinada y eficiente.',
    },
    {
      termino: 'Mensajería',
      significado:
        'Servicio que permite el envío y recepción de mensajes en tiempo real, facilitando la comunicación rápida y efectiva en entornos corporativos.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Vigilancia constante de sistemas y redes para asegurar su correcto funcionamiento y prevenir o detectar problemas de seguridad.',
    },
    {
      termino: 'Protocolo de señalización',
      significado:
        'Normas que regulan el establecimiento, mantenimiento y finalización de conexiones en sistemas de comunicación, como SIP o H.323 en <i>VoIP</i>.',
    },
    {
      termino: 'Redes IP',
      significado:
        'Redes basadas en el Protocolo de Internet (IP), que permiten la transmisión de datos de manera eficiente y son la base para servicios como <i>VoIP</i>',
    },
    {
      termino: 'Seguridad electrónica',
      significado:
        'Conjunto de tecnologías y métodos utilizados para proteger sistemas e infraestructuras mediante equipos electrónicos como cámaras y sensores.',
    },
    {
      termino: 'Servicios de mensajería',
      significado:
        'Herramientas digitales que permiten el envío de mensajes entre usuarios de manera instantánea, contribuyendo a la comunicación en tiempo real.',
    },
    {
      termino: 'Sistemas de alarma',
      significado:
        'Dispositivos y sensores que detectan eventos no deseados, como intrusiones, y alertan a los responsables de seguridad.',
    },
    {
      termino: 'Telefonía IP',
      significado:
        'Tecnología que permite realizar llamadas de voz a través de redes IP, reduciendo costos y mejorando la flexibilidad en la comunicación.',
    },
    {
      termino: '<i>VoIP (Voice over IP)</i>',
      significado:
        'Tecnología que permite la transmisión de voz sobre internet en lugar de líneas telefónicas convencionales, facilitando la telefonía IP.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bosch Security and Safety Systems. (s.f.).<i> Documentación técnica de Video Analytics</i>. Recuperado de ',
      link:
        'https://www.boschsecurity.com/xl/es/soluciones/sistemas-de-video/video-analytics/documentacion-tecnica-de-video-analytics/',
    },
    {
      referencia:
        'Chao, H. C., & Lin, J. (2019). <i>Quality of Service in VoIP and Unified Communications. Journal of Communications, 43</i>(4), 257-266. Disponible en: ',
      link:
        'https://www.fortinet.com/resources/cyberglossary/qos-quality-of-service',
    },
    {
      referencia:
        'Eagle Eye Networks. (2021). <i>GUÍA DE BUENAS PRÁCTICAS Manual de Videoseguridad</i>. Tomado de: ',
      link:
        'https://www.een.com/wp-content/uploads/2021/05/Video-Security-Primer-20210519_ES_compressed.pdf',
    },
    {
      referencia:
        'García, M., & Fernández, L. (2018). <i>Tecnologías de comunicaciones unificadas en entornos empresariales</i>. Editorial Reverte. Disponible en: ',
      link:
        'https://editorialreverte.com/catalogo https://alphaenginyeria.com/la-importancia-de-las-comunicaciones-unificadas-en-el-entorno-empresarial',
    },
    {
      referencia:
        'Kumar, R., & Rodrigues, J. J. P. C. (2010).<i> Voice over IP Security: Vulnerabilities, Threats, and Countermeasures. In Security for Telecommunications Networks</i>. Springer, 125-151.',
    },
    {
      referencia:
        'Martínez, C., & Pérez, L. (2020). <i>Centros de control y operaciones en sistemas de seguridad avanzada</i>. Universidad de Alcalá. Disponible en: Repositorio Institucional de la Universidad de Alcalá',
    },
    {
      referencia:
        'Microsoft. (2023). <i>Messaging Services in Unified Communication Systems</i>. Disponible en: ',
      link:
        'https://learn.microsoft.com/en-us/microsoftteams/teams-security-guide',
    },
    {
      referencia:
        'Nolasco-Mamani, M. A., Espinoza, S. A., & Choque-Salcedo, R. (2023). <i>Innovación y Transformación Digital en el Empresa. Revista de Innovación Empresarial</i>, 10(2), 123-145. Tomado de: ',
      link:
        'https://www.researchgate.net/publication/376210760_Innovacion_y_Transformacion_Digital_en_el_Empresa',
    },
    {
      referencia:
        'Organización Internacional de Normalización (ISO). (2013). <i>ISO/IEC 27001:2013: Tecnología de la información - Técnicas de seguridad - Sistemas de gestión de seguridad de la información - Requisitos</i>.',
    },
    {
      referencia:
        'Reinhold, S., & Peterson, L. (2020). <i>Signaling Protocols in VoIP Communication Systems. Journal of Digital Communication Systems, 47(3), 134-150</i>. Tomado de: ',
      link:
        'https://www.researchgate.net/publication/221034718_Patterns_for_VoIP_Signaling_Protocol_Architectures',
    },
    {
      referencia:
        'Sánchez, D. (2021). <i>Analítica de video en la seguridad urbana: Implementación y resultados. Revista Científica de Tecnología y Seguridad Urbana</i>. Tomado de: ',
      link:
        'https://innovacionindustrial.net/ciudades-inteligentes/como-analitica-video-transformando-seguridad-ciudades-inteligentes/',
    },
    {
      referencia:
        'Securitas España. (s.f.). <i>Analítica de vídeo: lo que el ojo no ve.</i> Recuperado de: ',
      link: 'https://www.securitas.es/blog/analitica-de-video/',
    },
  ],
}
