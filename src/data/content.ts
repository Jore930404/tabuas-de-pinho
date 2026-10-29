export type Lang = 'pt' | 'es';

export const site = {
  name: 'Tábuas de Pinho',
  fullName: 'Tábuas de Pinho — Carpintaria & Design',
  phoneDisplay: '+55 42 99867-5871',
  phoneRaw: '5542998675871',
  facebook: 'https://facebook.com/tabuasdepinho',
  tiktok: 'https://www.tiktok.com/@palletdesignpg',
  instagram: null,
  address: {
    street: 'Rua Aurora Alves Vieira da Silva, 790',
    district: 'Neves',
    city: 'Ponta Grossa',
    region: 'PR',
    postal: '84023-100',
    country: 'BR',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Rua Aurora Alves Vieira da Silva, 790, Neves, Ponta Grossa - PR, 84023-100'),
  ogImage: '/og.jpg',
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

const pt = {
  lang: 'pt' as Lang,
  htmlLang: 'pt-BR',
  localeLabel: 'Português',
  otherLang: { code: 'es', href: '/es/', label: 'Español' },
  meta: {
    title: 'Tábuas de Pinho — Móveis sob medida em pino maciço | Ponta Grossa',
    description:
      'Carpintaria em Ponta Grossa: guarda-roupas, armários de cozinha e móveis sob medida em pino maciço, feitos à mão no ateliê do Neves. Peça seu orçamento.',
  },
  nav: {
    services: 'Serviços',
    gallery: 'Projetos',
    process: 'Como funciona',
    about: 'Ateliê',
    faq: 'Dúvidas',
    contact: 'Contato',
  },
  ctaQuote: 'Solicitar orçamento',
  ctaVisit: 'Agendar visita',
  tagline: 'Naturais, resistentes, feitos para durar.',
  hero: {
    eyebrow: 'Carpintaria em Ponta Grossa',
    titleLead: 'Móveis sob medida em',
    titleAccent: 'pino maciço',
    lead: 'Peças únicas, desenhadas para o seu espaço e feitas à mão no ateliê do bairro Neves. Madeira natural, acabamento cuidado e medidas exatas.',
    primary: 'Pedir orçamento no WhatsApp',
    secondary: 'Conhecer os projetos',
    note: 'Ponta Grossa e região · Visitas com agendamento',
    imageAlt: 'Aparador em pino maciço com duas gavetas, feito pela Tábuas de Pinho',
    badge: 'Feito à mão',
    stats: [
      { value: '10', label: 'anos de ofício' },
      { value: 'Pino', label: 'madeira maciça' },
      { value: 'Sob', label: 'medida' },
    ],
  },
  services: {
    eyebrow: 'O que fazemos',
    title: 'Três frentes, o mesmo cuidado com a madeira',
    lead: 'Cada projeto começa com uma conversa e termina com a madeira no lugar certo. Trabalhamos o pino maciço do desenho à montagem.',
    items: [
      {
        icon: 'wardrobe',
        title: 'Guarda-roupas',
        text: 'Projetos que aproveitam cada centímetro, com portas, gavetas e divisões pensadas para a sua rotina.',
      },
      {
        icon: 'kitchen',
        title: 'Armários de cozinha',
        text: 'Cozinhas funcionais em pino maciço, com acabamento resistente e soluções para organizar o dia a dia.',
      },
      {
        icon: 'custom',
        title: 'Móveis sob medida',
        text: 'Camas, mesas, painéis, bancadas e peças únicas desenhadas a partir do seu espaço.',
      },
    ],
  },
  gallery: {
    eyebrow: 'Projetos',
    title: 'Feitos no ateliê',
    lead: 'Uma seleção de peças produzidas sob medida. Cada projeto começa com uma conversa e termina com a madeira no lugar certo.',
    cta: 'Quero uma peça assim',
    zoom: 'Ampliar foto',
    close: 'Fechar',
    items: [
      { slug: 'cama', caption: 'Cama em pino maciço' },
      { slug: 'bar', caption: 'Balcão de bar' },
      { slug: 'mesa', caption: 'Mesa auxiliar' },
      { slug: 'poltronas', caption: 'Poltronas em pino' },
      { slug: 'painel', caption: 'Painel para TV' },
      { slug: 'carrinho', caption: 'Carrinho organizador' },
      { slug: 'balcao', caption: 'Balcão com lambri' },
      { slug: 'estante', caption: 'Estante sob medida' },
    ],
  },
  process: {
    eyebrow: 'Como funciona',
    title: 'Do primeiro traço à montagem',
    steps: [
      {
        title: 'Conversa e medidas',
        text: 'Entendemos o uso, o espaço e o orçamento. Agendamos a visita ao ateliê e alinhamos as medidas.',
      },
      {
        title: 'Projeto e orçamento',
        text: 'Desenhamos a peça e apresentamos madeira, acabamento, prazo e valor, sem compromisso.',
      },
      {
        title: 'Fabricação',
        text: 'Cortamos, montamos e acabamos cada peça no ateliê, trabalhando o pino maciço do início ao fim.',
      },
      {
        title: 'Retirada e montagem',
        text: 'Combinamos a retirada no ateliê, no Neves, e a montagem no endereço.',
      },
    ],
  },
  about: {
    eyebrow: 'Sobre o ateliê',
    title: 'Dez anos de madeira, medida e detalhe',
    paragraphs: [
      'A Tábuas de Pinho nasceu do ofício de Jonathan Louis, que há dez anos transforma pino maciço em móveis para Ponta Grossa e região.',
      'No ateliê do bairro Neves, cada peça é desenhada, cortada, montada e acabada à mão. Sem linha de produção e sem atalhos: o tempo da madeira é respeitado.',
    ],
    facts: [
      { value: '10 anos', label: 'de ofício' },
      { value: 'Jonathan Louis', label: 'à frente do ateliê' },
      { value: 'Neves', label: 'Ponta Grossa – PR' },
      { value: 'Com agendamento', label: 'visitas ao ateliê' },
    ],
    imageAlt: 'Jonathan Louis, à frente do ateliê da Tábuas de Pinho',
    imageTag: 'Jonathan Louis · mestre carpinteiro',
    cta: 'Agendar uma visita',
  },
  materials: {
    title: 'Madeira que se escolhe a dedo',
    items: ['Pino maciço', 'Acabamento artesanal', 'Ferragens selecionadas', 'Medidas exatas'],
  },
  faq: {
    eyebrow: 'Dúvidas',
    title: 'Antes de encomendar',
    items: [
      {
        q: 'Como peço um orçamento?',
        a: 'Pelo WhatsApp, com uma foto de referência e as medidas aproximadas do espaço. Se preferir, use o formulário abaixo e a mensagem chega pronta.',
      },
      {
        q: 'Vocês atendem fora de Ponta Grossa?',
        a: 'Atendemos Ponta Grossa e região. O alcance depende do projeto e do transporte, então vale conversar antes.',
      },
      {
        q: 'Fazem medição no local?',
        a: 'A visita e a medição são combinadas durante o orçamento, conforme o tipo de móvel.',
      },
      {
        q: 'Qual é o prazo de entrega?',
        a: 'Varia com a peça e com a fila do ateliê. O prazo é informado no orçamento, antes de fechar.',
      },
      {
        q: 'Têm transporte?',
        a: 'Não contamos com serviço de transporte. A retirada é no ateliê, no Neves, e a montagem é combinada.',
      },
      {
        q: 'Qual madeira vocês usam?',
        a: 'Pino maciço, com acabamento e ferragens escolhidos para cada projeto.',
      },
    ],
  },
  contact: {
    eyebrow: 'Orçamento',
    title: 'Conte o que você precisa',
    lead: 'Mande uma foto, a medida aproximada e a sua ideia. Respondemos pelo WhatsApp com os próximos passos.',
    form: {
      name: 'Seu nome',
      phone: 'Seu WhatsApp',
      type: 'Tipo de móvel',
      message: 'Conte sobre o projeto',
      messagePlaceholder: 'Ex.: guarda-roupa de 2,40 m para um quarto pequeno...',
      submit: 'Enviar pelo WhatsApp',
      note: 'Ao enviar, abrimos o WhatsApp com a mensagem pronta. Nada é enviado por este site.',
      options: ['Guarda-roupa', 'Armário de cozinha', 'Cama', 'Mesa', 'Painel', 'Outro'],
      defaultOption: 'Selecione uma opção',
    },
    direct: 'Prefere falar direto?',
    addressTitle: 'Ateliê',
    addressNote: 'Visitas com agendamento.',
    socialTitle: 'Acompanhe',
    mapCta: 'Ver no mapa',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento.',
  },
  footer: {
    tagline: 'Móveis sob medida em pino maciço. Naturais, resistentes, feitos para durar.',
    navTitle: 'Navegação',
    contactTitle: 'Contato',
    socialTitle: 'Redes',
    rights: 'Todos os direitos reservados.',
  },
  a11y: {
    skip: 'Pular para o conteúdo',
    menu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    theme: 'Idioma',
    whatsapp: 'Falar no WhatsApp',
  },
};

const es: typeof pt = {
  lang: 'es',
  htmlLang: 'es',
  localeLabel: 'Español',
  otherLang: { code: 'pt', href: '/', label: 'Português' },
  meta: {
    title: 'Tábuas de Pinho — Muebles a medida en pino macizo | Ponta Grossa',
    description:
      'Carpintería en Ponta Grossa: armarios, cocinas y muebles a medida en pino macizo, hechos a mano en el taller del barrio Neves. Pedí tu presupuesto.',
  },
  nav: {
    services: 'Servicios',
    gallery: 'Proyectos',
    process: 'Cómo funciona',
    about: 'Taller',
    faq: 'Dudas',
    contact: 'Contacto',
  },
  ctaQuote: 'Pedir presupuesto',
  ctaVisit: 'Agendar visita',
  tagline: 'Naturales, resistentes, hechos para durar.',
  hero: {
    eyebrow: 'Carpintería en Ponta Grossa',
    titleLead: 'Muebles a medida en',
    titleAccent: 'pino macizo',
    lead: 'Piezas únicas, diseñadas para tu espacio y hechas a mano en el taller del barrio Neves. Madera natural, terminación cuidada y medidas exactas.',
    primary: 'Pedir presupuesto por WhatsApp',
    secondary: 'Conocer los proyectos',
    note: 'Ponta Grossa y región · Visitas con cita previa',
    imageAlt: 'Aparador en pino macizo con dos cajones, hecho por Tábuas de Pinho',
    badge: 'Hecho a mano',
    stats: [
      { value: '10', label: 'años de oficio' },
      { value: 'Pino', label: 'madera maciza' },
      { value: 'A', label: 'medida' },
    ],
  },
  services: {
    eyebrow: 'Qué hacemos',
    title: 'Tres frentes, el mismo cuidado con la madera',
    lead: 'Cada proyecto empieza con una conversación y termina con la madera en su lugar. Trabajamos el pino macizo del diseño al montaje.',
    items: [
      {
        icon: 'wardrobe',
        title: 'Armarios y vestidores',
        text: 'Proyectos que aprovechan cada centímetro, con puertas, cajones y divisiones pensadas para tu rutina.',
      },
      {
        icon: 'kitchen',
        title: 'Armarios de cocina',
        text: 'Cocinas funcionales en pino macizo, con terminación resistente y soluciones para organizar el día a día.',
      },
      {
        icon: 'custom',
        title: 'Muebles a medida',
        text: 'Camas, mesas, paneles, mostradores y piezas únicas diseñadas a partir de tu espacio.',
      },
    ],
  },
  gallery: {
    eyebrow: 'Proyectos',
    title: 'Hechos en el taller',
    lead: 'Una selección de piezas producidas a medida. Cada proyecto empieza con una conversación y termina con la madera en su lugar.',
    cta: 'Quiero una pieza así',
    zoom: 'Ampliar foto',
    close: 'Cerrar',
    items: [
      { slug: 'cama', caption: 'Cama en pino macizo' },
      { slug: 'bar', caption: 'Barra de bar' },
      { slug: 'mesa', caption: 'Mesa auxiliar' },
      { slug: 'poltronas', caption: 'Sillones en pino' },
      { slug: 'painel', caption: 'Panel para TV' },
      { slug: 'carrinho', caption: 'Carrito organizador' },
      { slug: 'balcao', caption: 'Mostrador con revestimiento' },
      { slug: 'estante', caption: 'Estantería a medida' },
    ],
  },
  process: {
    eyebrow: 'Cómo funciona',
    title: 'Del primer trazo al montaje',
    steps: [
      {
        title: 'Conversación y medidas',
        text: 'Entendemos el uso, el espacio y el presupuesto. Agendamos la visita al taller y alineamos las medidas.',
      },
      {
        title: 'Proyecto y presupuesto',
        text: 'Diseñamos la pieza y presentamos madera, terminación, plazo y valor, sin compromiso.',
      },
      {
        title: 'Fabricación',
        text: 'Cortamos, montamos y terminamos cada pieza en el taller, trabajando el pino macizo de principio a fin.',
      },
      {
        title: 'Retiro y montaje',
        text: 'Combinamos el retiro en el taller, en el barrio Neves, y el montaje en el domicilio.',
      },
    ],
  },
  about: {
    eyebrow: 'Sobre el taller',
    title: 'Diez años de madera, medida y detalle',
    paragraphs: [
      'Tábuas de Pinho nació del oficio de Jonathan Louis, que hace diez años transforma pino macizo en muebles para Ponta Grossa y la región.',
      'En el taller del barrio Neves, cada pieza se diseña, corta, monta y termina a mano. Sin línea de producción y sin atajos: se respeta el tiempo de la madera.',
    ],
    facts: [
      { value: '10 años', label: 'de oficio' },
      { value: 'Jonathan Louis', label: 'al frente del taller' },
      { value: 'Neves', label: 'Ponta Grossa – PR' },
      { value: 'Con cita previa', label: 'visitas al taller' },
    ],
    imageAlt: 'Jonathan Louis, al frente del taller de Tábuas de Pinho',
    imageTag: 'Jonathan Louis · maestro carpintero',
    cta: 'Agendar una visita',
  },
  materials: {
    title: 'Madera que se elige a mano',
    items: ['Pino macizo', 'Terminación artesanal', 'Herrajes seleccionados', 'Medidas exactas'],
  },
  faq: {
    eyebrow: 'Dudas',
    title: 'Antes de encargar',
    items: [
      {
        q: '¿Cómo pido un presupuesto?',
        a: 'Por WhatsApp, con una foto de referencia y las medidas aproximadas del espacio. Si preferís, usá el formulario de abajo y el mensaje llega listo.',
      },
      {
        q: '¿Atienden fuera de Ponta Grossa?',
        a: 'Atendemos Ponta Grossa y la región. El alcance depende del proyecto y del transporte, así que conviene conversarlo.',
      },
      {
        q: '¿Hacen medición en el domicilio?',
        a: 'La visita y la medición se combinan durante el presupuesto, según el tipo de mueble.',
      },
      {
        q: '¿Cuál es el plazo de entrega?',
        a: 'Varía según la pieza y la agenda del taller. El plazo se informa en el presupuesto, antes de cerrar.',
      },
      {
        q: '¿Tienen transporte?',
        a: 'No contamos con servicio de transporte. El retiro es en el taller, en el barrio Neves, y el montaje se combina.',
      },
      {
        q: '¿Qué madera usan?',
        a: 'Pino macizo, con terminación y herrajes elegidos para cada proyecto.',
      },
    ],
  },
  contact: {
    eyebrow: 'Presupuesto',
    title: 'Contanos qué necesitás',
    lead: 'Mandá una foto, la medida aproximada y tu idea. Respondemos por WhatsApp con los próximos pasos.',
    form: {
      name: 'Tu nombre',
      phone: 'Tu WhatsApp',
      type: 'Tipo de mueble',
      message: 'Contanos sobre el proyecto',
      messagePlaceholder: 'Ej.: placar de 2,40 m para un cuarto pequeño...',
      submit: 'Enviar por WhatsApp',
      note: 'Al enviar, abrimos WhatsApp con el mensaje listo. Este sitio no envía nada.',
      options: ['Armario', 'Cocina', 'Cama', 'Mesa', 'Panel', 'Otro'],
      defaultOption: 'Elegí una opción',
    },
    direct: '¿Preferís hablar directo?',
    addressTitle: 'Taller',
    addressNote: 'Visitas con cita previa.',
    socialTitle: 'Seguinos',
    mapCta: 'Ver en el mapa',
    whatsappMessage: '¡Hola! Vengo del sitio y quisiera un presupuesto.',
  },
  footer: {
    tagline: 'Muebles a medida en pino macizo. Naturales, resistentes, hechos para durar.',
    navTitle: 'Navegación',
    contactTitle: 'Contacto',
    socialTitle: 'Redes',
    rights: 'Todos los derechos reservados.',
  },
  a11y: {
    skip: 'Saltar al contenido',
    menu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    theme: 'Idioma',
    whatsapp: 'Hablar por WhatsApp',
  },
};

export type Content = typeof pt;
export const content: Record<Lang, Content> = { pt, es };
export const getContent = (lang: Lang): Content => content[lang];
