export default {
  global: {
    componenteFormativo: 'Procesos de corte y confección',
    descripcionCurso:
      'Para confeccionar prendas de vestir es importante tener en cuenta los diferentes procesos de detalles y características particulares de cada prenda, en este componente se describen y especifican cada uno de los procedimientos para realizar el corte y armado de falda, blusa, camisa y pantalón de manera detallada y didáctica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Corte y confección de la falda ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pinzas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Filetear piezas ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Cierre ',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Costados ',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Pretina ',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Ruedo ',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Corte y confección de la blusa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Corte de la blusa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Pasos para la confección de la blusa',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Corte y confección de la camisa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Preparación de las piezas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ensamble',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Los ruedos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Terminación',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Corte y confección del pantalón',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Montaje de cierre',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Bolsillo lateral',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Bolsillos posteriores',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: ' Tiro posterior',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Cerrada de los costados',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Cerrada de la entrepierna',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Pasadores',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Pretina',
            hash: 't_4_8',
          },
          {
            numero: '4.9',
            titulo: 'Ruedo',
            hash: 't_4_9',
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
      tema: 'Trazo sistematizado',
      referencia: '',
      tipo: 'video',
      link: 'https://youtu.be/fscxWYsenLE',
    },
    {
      tema: 'Corte con trazo manual',
      referencia: '',
      tipo: 'video',
      link: 'https://youtu.be/2EkELdwTkew',
    },
    {
      tema: 'Corte industrial',
      referencia: '',
      tipo: 'video',
      link: 'https://youtu.be/V3zxsruHRyI',
    },
  ],
  glosario: [
    {
      termino: 'Caja bobina',
      significado:
        'Es una herramienta usada en la parte inferior de la máquina plana y es la que recibe y hace que el carretel con hilo sean los que entrelacen la puntada.',
    },
    {
      termino: 'Corte',
      significado: 'Es la separación de la tela o cuero en piezas diferentes.',
    },
    {
      termino: 'Devanador',
      significado:
        'Parte de la máquina plana de una aguja que permite llenar el carretel de hilo para alimentar la puntada inferior de la costura.',
    },
    {
      termino: 'Destornillador',
      significado:
        'Es una herramienta que se utiliza para apretar y aflojar tornillos y otros elementos de máquinas que se necesitan para el cambio de agujas y para realizar ajustes ocasionales a las máquinas.',
    },
    {
      termino: 'Hilo',
      significado:
        'Es una hebra larga y delgada de un material textil, especialmente se usa para coser, los más comunes en la confección son el hilo de algodón, el poliéster y el nylon.',
    },
    {
      termino: '<em>Looper</em>',
      significado:
        'Son tomadores de lazada que junto con las agujas forman la puntada.',
    },
    {
      termino: 'Metro',
      significado:
        'Cinta que tiene marcada la longitud del metro y sus divisiones y sirve para medir distancias o longitudes, usada para dar medidas exactas en cualquiera de los procedimientos de la confección.',
    },
    {
      termino: 'Pulidora',
      significado:
        'Máquina - herramienta para quitar las hebras en procesos cuando ya está terminada.',
    },
    {
      termino: 'Trazo',
      significado:
        'Línea o raya que constituye la forma o el contorno de algo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alfahogar (2017). Características máquinas de coser industrial.',
      link: '',
    },
    {
      referencia:
        'Clayton, Marie (2009). Coser en casa: fundamentos, técnicas, corte y confección, sastrería avanzada, ropa de hogar y arreglos. Barcelona (España): Editorial Blume. ISBN 978-84-8076-842-9. R.',
      link: '',
    },
    {
      referencia: 'El baúl de las costureras. (2017). Maquinaria y accesorios.',
      link: '',
    },
    {
      referencia:
        'SENA. (2013). Modistería: la máquina de coser. Bogotá, Colombia: Centro de Gestión de Mercados, logística y TIC´s: Bogotá, Colombia [Versión en línea]. Recuperado de:',
      link:
        'http://repositorio.sena.edu.co/sitios/modisteria_conocimientos_basicos/hilos_maquina/maquina_coser.html#',
    },
    {
      referencia:
        'SENA. (2013). Modistería: hilos y tela. Bogotá, Colombia: Centro de Gestión de Mercados, logística y TIC´s: Bogotá, Colombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Paola Morales Paez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
