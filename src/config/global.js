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
            numero: '3.1.1',
            titulo: 'Preparación del cuello',
            hash: 't_3_1_1',
          },
          {
            numero: '3.1.2',
            titulo: 'Preparación de la perilla',
            hash: 't_3_1_2',
          },
          {
            numero: '3.1.3',
            titulo: 'Preparación y ensamble de bolsillo',
            hash: 't_3_1_3',
          },
          {
            numero: '3.1.4',
            titulo: 'Delanteros y espaldar',
            hash: 't_3_1_4',
          },
          {
            numero: '3.2',
            titulo: 'Ensamble',
            hash: 't_3_2',
          },
          {
            numero: '3.2.1',
            titulo: 'Ensamble de la espalda',
            hash: 't_3_2_1',
          },
          {
            numero: '3.2.2',
            titulo: 'Ensamble de las mangas',
            hash: 't_3_2_3',
          },
          {
            numero: '3.2.3',
            titulo: 'Ensamble delanteros',
            hash: 't_3_2_3',
          },
          {
            numero: '3.2.4',
            titulo: 'Ensamble del cuello',
            hash: 't_3_2_4',
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
        download: 'downloads/CF2_52450390_DU.pdf',
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
      tema: '1. Corte y confección de falda',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de https://youtu.be/w9GGdFRgpzY',
      tipo: 'video',
      link: 'https://youtu.be/w9GGdFRgpzY',
    },
    {
      tema: '3. Corte y confección de camisa',
      referencia:
        'Acoldemoda [@Acoldemoda]. (s/f). Confección de CAMISA CLÁSICA MASCULINA - DIY - Paso a paso. Youtube. Recuperado de https://www.youtube.com/watch?v=x7d_FSKU5_o',
      tipo: 'video',
      link: 'https://youtu.be/x7d_FSKU5_o',
    },
    {
      tema: '4.2 Bolsillo lateral',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de https://youtu.be/zozv1G9Yk_M',
      tipo: 'video',
      link: 'https://youtu.be/zozv1G9Yk_M',
    },
  ],
  glosario: [
    {
      termino: 'Aletilla',
      significado: 'Pieza de tela que acompaña a la cremallera del pantalón.',
    },
    {
      termino: 'Bastas',
      significado:
        'También llamadas pespunte, es una serie de puntadas en uno o más materiales',
    },
    {
      termino: 'Bocamanga',
      significado: 'Medida de la parte inferior de las mangas.',
    },
    {
      termino: 'Bragueta',
      significado:
        'abertura delantera de los pantalones o calzoncillos. Inventada en Francia en el siglo XV, originalmente no llevaba botones; se trataba de un triángulo de tela que se ataba con un lazo y que servía para guardar las monedas.',
    },
    {
      termino: 'Complementos',
      significado:
        'Son las piezas adicionales que hacen parte de una prenda, estas se emplean para dar un mejor acabado o terminado a la camisa, entre estas se hallan la pechera o extensión de la abotonadura, el sesgo de la portañuela, la portañuela y las entretelas.',
    },
    {
      termino: 'Dobladillo',
      significado:
        'Es el borde de la tela doblada dos veces sobre si misma asegurada con puntadas a mano o a máquina en la parte inferior de faldas, vestidos, pantalones y orillos de mangas etc.',
    },
    {
      termino: 'Embonar',
      significado:
        'Ocultar los extremos de dos telas previamente cosidas por medio de otra costura, remplaza la costura de filete.',
    },
    {
      termino: 'Enhebrar',
      significado:
        'Pasar la hebra por el ojo de la aguja o por el agujero de las cuentas, perlas, etc.',
    },
    {
      termino: 'Entretela',
      significado:
        'Tejido que se pone entre la tela y el forro de una prenda de vestir, para reforzarla o darle consistencia.',
    },
    {
      termino: 'Falso',
      significado:
        'Tela de refuerzo, doblez. Es la pieza que se ubica en la parte interna de las chaquetas, dándole generalmente un mejor acabado a la prenda.',
    },
    {
      termino: 'Fuelle',
      significado:
        'Prense que se hace en partes de las prendas (Bolsillo, espalda) para dar más amplitud.',
    },
    {
      termino: 'Ojal',
      significado:
        ' es un orificio elaborado generalmente al borde de una prenda a través del cual pasa un botón, la medida del ojal debe corresponder con el diámetro del botón, es recomendable entretelar la tela en la ubicación del ojal.',
    },
    {
      termino: 'Lateral',
      significado: ' El lado o el costado de una pieza.',
    },
    {
      termino: 'Pernera',
      significado: 'Parte del pantalón que cubre cada pierna.',
    },
    {
      termino: 'Pliegue',
      significado:
        'Doblez hecho para ceñir como pinza hueca. Doblez hecho para dar amplitud como los usados en el plisado.',
    },
    {
      termino: 'Presillar',
      significado:
        'Son puntadas realizadas por ciclos en la máquina presilladora, para darle seguridad y terminación en las uniones de elásticos, sesgos y cargaderas.',
    },
    {
      termino: 'Quiebre',
      significado: 'El doblez que tiene la solapa.',
    },
    {
      termino: 'Talle',
      significado:
        'Cintura del cuerpo humano. Parte del vestido que corresponde a la cintura. Medida tomada para un vestido o traje, comprendida desde el cuello a la cintura, tanto por delante como por detrás.',
    },
    {
      termino: 'Tiro',
      significado: 'Es la parte del pantalón donde se unen las piernas.',
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
        'Mors de Castro, Lucía (2010). Patronaje de moda: una guía práctica paso a paso. Barcelona (España): Promopress. ISBN 978-84-9364-087-3.',
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
          nombre: 'Olga Constanza Bermúdez James',
          cargo: 'Experto temático V1',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Carolina Jiménez ',
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
