export type Lang = 'es' | 'en';
type T = { es: string; en: string };
type TL = { es: string[]; en: string[] };

export const profile = {
  name: 'Johan Hernández',
  email: 'jshernandezo97@gmail.com',
  github: 'https://github.com/JohanHdez',
  linkedin: 'https://www.linkedin.com/in/johan-ai-solutions-architect',
  kmaleon: 'https://kmaleon.co',
  cv: '/johan-hernandez-cv.pdf',
  location: 'Medellín, Colombia',
};

export const ui = {
  es: {
    metaTitle: 'Johan Hernández — AI Engineer & Solutions Architect',
    metaDescription:
      'AI Engineer en Medellín. Llevo sistemas de IA del prompt a producción: pipelines LLM, agentes de voz y sistemas multi-agente. Fundador de Kmaleon.',
    nav: { work: 'Casos', how: 'Cómo trabajo', experience: 'Trayectoria', contact: 'Contacto', cv: 'CV' },
    hero: {
      status: 'disponible para proyectos',
      hello: 'Hola, soy',
      line1: 'Llevo la IA',
      line2: 'del prompt',
      line3: 'a producción.',
      lead: 'La mayoría de AI engineers entrega APIs, prototipos o notebooks. Yo entrego producto completo: una interfaz que la gente usa, desplegada, monitoreada y con métricas reales.',
      ctaWork: 'Ver mis casos',
      ctaCv: 'Descargar CV',
      nowLabel: 'Ahora mismo',
      nowTitle: 'Construyendo Kmaleon',
      nowText: 'Búsqueda de empleo con IA para 17 países de LATAM. Soy el único ingeniero; el resto del equipo son 6 agentes de Claude Code.',
      nowLink: 'Ver kmaleon.co',
    },
    numbers: [
      { value: '8+', label: 'años de ingeniería de software' },
      { value: '1.5+', label: 'años con LLMs en producción' },
      { value: '7', label: 'productos publicados que puedes abrir' },
      { value: '6', label: 'agentes en mi equipo de desarrollo' },
    ],
    how: {
      kicker: 'Cómo trabajo',
      title: 'Mi equipo son seis agentes. Las decisiones irreversibles las tomo yo.',
      text: 'Cada agente tiene un rol, su propio contexto curado (CLAUDE.md) y un protocolo que no se salta. Se coordinan por GitHub Issues: así entrego como un equipo, sin dejar de ser responsable de cada línea que llega a producción.',
      me: 'Yo',
      meRole: 'apruebo lo irreversible',
      steps: [
        { n: '01', t: 'Investigar', d: 'El agente lee el código y el contexto antes de proponer nada.' },
        { n: '02', t: 'Reportar', d: 'Explica qué encontró, qué haría y qué podría romperse.' },
        { n: '03', t: 'Aprobar', d: 'Yo decido. Human-in-the-loop en todo lo que no se puede deshacer.' },
        { n: '04', t: 'Implementar', d: 'Código, code review y deploy, con evidencia de que funciona.' },
      ],
      footnote: 'El mismo patrón lo llevé a ARS Primera: un orquestador que coordina cuatro repositorios en producción.',
    },
    work: {
      kicker: 'Casos',
      title: 'Cosas que construí y están vivas',
      role: 'Mi rol',
      built: 'Qué construí',
      visit: 'Visitar',
      code: 'Código',
      store: 'Chrome Web Store',
      app: 'Probar la app',
      gallery: 'Más capturas',
      privateCode: 'Código privado del cliente',
    },
    more: {
      title: 'También construí',
      apk: 'Descargar APK',
      play: 'Jugar en el navegador',
      visit: 'Visitar',
      requestCode: 'Pedir acceso al código',
      requestSubject: 'Solicitud de acceso al código de',
      code: 'Código',
    },
    request: {
      greeting: 'Hola Johan,',
      want: 'Me gustaría ver el código de',
      repo: 'Repositorio',
      fill: 'Mis datos (para darme acceso):',
      fields: ['Nombre:', 'Empresa o proyecto:', 'Usuario de GitHub:', 'Para qué lo quiero ver:'],
      thanks: '¡Gracias!',
    },
    clients: {
      kicker: 'Para clientes',
      title: 'Automatizaciones que ya trabajan solas',
    },
    experience: { kicker: 'Trayectoria', title: 'De frontend a arquitecto de IA', education: 'Formación' },
    contact: {
      kicker: 'Contacto',
      title: '¿Tienes un proceso que debería hacerse solo?',
      text: 'Cuéntame qué quieres automatizar o qué producto quieres sacar. Te respondo con cómo lo resolvería.',
      subject: 'Hola Johan, quiero hablar de un proyecto',
    },
    dialog: {
      kicker: 'Escríbeme',
      text: 'Elige cómo prefieres enviarlo. El asunto y el mensaje ya van escritos.',
      gmail: 'Abrir en Gmail',
      app: 'App de correo',
      copy: 'Copiar correo',
      copied: '¡Copiado!',
      close: 'Cerrar',
    },
    footer: 'Diseñado y construido en Medellín.',
    langSwitch: 'EN',
    localTime: 'en Medellín',
  },
  en: {
    metaTitle: 'Johan Hernández — AI Engineer & Solutions Architect',
    metaDescription:
      'AI Engineer based in Medellín. I take AI systems from prompt to production: LLM pipelines, voice agents and multi-agent systems. Founder of Kmaleon.',
    nav: { work: 'Work', how: 'How I work', experience: 'Experience', contact: 'Contact', cv: 'CV' },
    hero: {
      status: 'open to projects',
      hello: "Hi, I'm",
      line1: 'I take AI',
      line2: 'from prompt',
      line3: 'to production.',
      lead: 'Most AI engineers ship APIs, prototypes or notebooks. I ship the whole product: an interface people actually use, deployed, monitored and with real metrics.',
      ctaWork: 'See my work',
      ctaCv: 'Download CV',
      nowLabel: 'Right now',
      nowTitle: 'Building Kmaleon',
      nowText: "AI job search for 17 Latin American countries. I'm the only engineer; the rest of the team is 6 Claude Code agents.",
      nowLink: 'Visit kmaleon.co',
    },
    numbers: [
      { value: '8+', label: 'years of software engineering' },
      { value: '1.5+', label: 'years shipping LLMs to production' },
      { value: '7', label: 'shipped products you can open' },
      { value: '6', label: 'agents on my dev team' },
    ],
    how: {
      kicker: 'How I work',
      title: 'My team is six agents. I make the irreversible calls.',
      text: 'Each agent has a role, its own curated context (CLAUDE.md) and a protocol it never skips. They coordinate through GitHub Issues, so I deliver like a team while staying accountable for every line that reaches production.',
      me: 'Me',
      meRole: 'I approve the irreversible',
      steps: [
        { n: '01', t: 'Investigate', d: 'The agent reads the code and context before proposing anything.' },
        { n: '02', t: 'Report', d: 'It explains what it found, what it would do and what could break.' },
        { n: '03', t: 'Approve', d: 'I decide. Human-in-the-loop for everything that can’t be undone.' },
        { n: '04', t: 'Implement', d: 'Code, code review and deploy, with evidence that it works.' },
      ],
      footnote: 'I brought the same pattern to ARS Primera: an orchestrator coordinating four repositories in production.',
    },
    work: {
      kicker: 'Work',
      title: 'Things I built that are live',
      role: 'My role',
      built: 'What I built',
      visit: 'Visit',
      code: 'Code',
      store: 'Chrome Web Store',
      app: 'Try the app',
      gallery: 'More screenshots',
      privateCode: 'Private client code',
    },
    more: {
      title: 'I also built',
      apk: 'Download APK',
      play: 'Play in the browser',
      visit: 'Visit',
      requestCode: 'Request code access',
      requestSubject: 'Code access request for',
      code: 'Code',
    },
    request: {
      greeting: 'Hi Johan,',
      want: "I'd like to see the code of",
      repo: 'Repository',
      fill: 'My details (so you can grant access):',
      fields: ['Name:', 'Company or project:', 'GitHub username:', 'Why I want to see it:'],
      thanks: 'Thanks!',
    },
    clients: {
      kicker: 'For clients',
      title: 'Automations that already run on their own',
    },
    experience: { kicker: 'Experience', title: 'From frontend to AI architect', education: 'Education' },
    contact: {
      kicker: 'Contact',
      title: 'Got a process that should run by itself?',
      text: "Tell me what you want to automate or the product you want to ship. I'll reply with how I'd solve it.",
      subject: "Hi Johan, I'd like to talk about a project",
    },
    dialog: {
      kicker: 'Email me',
      text: 'Pick how you want to send it. The subject and message are already filled in.',
      gmail: 'Open in Gmail',
      app: 'Mail app',
      copy: 'Copy email',
      copied: 'Copied!',
      close: 'Close',
    },
    footer: 'Designed and built in Medellín.',
    langSwitch: 'ES',
    localTime: 'in Medellín',
  },
} as const;

export const agents = [
  { es: 'Director', en: 'Director' },
  { es: 'Arquitecto', en: 'Architect' },
  { es: 'Frontend', en: 'Frontend' },
  { es: 'Backend', en: 'Backend' },
  { es: 'Database', en: 'Database' },
  { es: 'DevOps', en: 'DevOps' },
];

export interface Shot {
  src: string;
  alt: T;
  url?: string; // texto en la barra del navegador
  kind?: 'browser' | 'phone' | 'panel';
}

export interface CaseStudy {
  slug: string;
  name: string;
  year: string;
  badge?: T;
  title: T;
  summary: T;
  role: T;
  built: TL;
  metrics: { value: string; label: T }[];
  stack: string[];
  shots: Shot[];
  /** Más capturas, en una tira debajo de las principales (se abren en grande). */
  gallery?: Shot[];
  links: { label: 'visit' | 'code' | 'store' | 'app' | 'play' | 'apk'; href: string }[];
  privateCode?: boolean;
  /** Repos privados: botón que abre un correo pidiendo acceso, con el nombre y el enlace del repo. */
  requestAccess?: { name: string; repo: string }[];
  accent: string;
}

export const cases: CaseStudy[] = [
  {
    slug: 'fallen-legends-3d',
    name: 'Fallen Legends 3D',
    year: '2026',
    badge: { es: 'Se juega en el navegador y en Android', en: 'Playable in the browser and on Android' },
    accent: '#b45309',
    title: {
      es: 'Un ARPG en 3D con bots que juegan como personas, que corre hasta en un celular',
      en: 'A 3D action RPG with bots that play like people, running even on a phone',
    },
    summary: {
      es: 'Mi juego de rol de acción en tercera persona, hecho en Godot. Eliges una de siete leyendas y peleas contra hordas de criaturas o contra equipos de bots, solo o con compañeros. Lo exporto a WebAssembly para jugarlo sin instalar nada y a APK para Android, y estoy construyendo el modo en línea con servidor propio.',
      en: 'My third-person action RPG, built in Godot. You pick one of seven legends and fight hordes of creatures or teams of bots, alone or with teammates. I export it to WebAssembly so it plays with nothing to install, and to an APK for Android, and I am building an online mode with its own server.',
    },
    role: { es: 'Autor: diseño, código, IA de los bots y publicación', en: 'Author: design, code, bot AI and release' },
    built: {
      es: [
        'Modo Horda: 10 oleadas de cinco especies y un jefe desde la oleada 5; si cae todo el equipo se acaba, y un compañero agachado a tu lado te levanta',
        'Combates de 1v1 a 4v4 contra bots al mejor de 3 rondas, con un gas que va cerrando el mapa',
        'Bots que se esconden en la hierba alta, esquivan trampas y se reaniman entre ellos; el balance lo mido con torneos entre bots y semillas fijas',
        'Siete leyendas con 21 habilidades, ciclo de día y noche, controles táctiles y una calidad ligera para la web que en una Intel HD 620 pasó de 5 a 15 FPS',
        'Puerta de calidad automática: pruebas puras, partidas de humo, sondas de partida y prueba de la sala en línea con servidor y clientes sin pantalla',
      ],
      en: [
        'Horde mode: 10 waves of five species and a boss from wave 5; if the whole team falls it is over, and a teammate crouching next to you revives you',
        '1v1 to 4v4 fights against bots, best of 3 rounds, with gas that closes in on the map',
        'Bots that hide in tall grass, dodge traps and revive each other; I measure balance with bot tournaments and fixed seeds',
        'Seven legends with 21 abilities, a day/night cycle, touch controls and a lite web quality that took an Intel HD 620 from 5 to 15 FPS',
        'Automated quality gate: pure tests, smoke matches, match probes and an online-room test with a headless server and clients',
      ],
    },
    metrics: [
      { value: '7', label: { es: 'leyendas jugables', en: 'playable legends' } },
      { value: '21', label: { es: 'habilidades', en: 'abilities' } },
      { value: '10', label: { es: 'oleadas en el modo Horda', en: 'waves in Horde mode' } },
    ],
    stack: ['Godot 4', 'GDScript', 'Game AI', 'WebAssembly', 'Android', 'WebSockets', 'Railway'],
    shots: [
      { src: '/projects/fl3d-horda.webp', url: 'fallen-legends-3d · horda', kind: 'browser', alt: { es: 'Fallen Legends 3D: un equipo de cuatro leyendas contra la horda en el bosque, con el Tormentero lanzando rayos', en: 'Fallen Legends 3D: a team of four legends fighting the horde in the forest, with the Stormcaller casting lightning' } },
      { src: '/projects/fl3d-4v4.webp', url: 'fallen-legends-3d · 4 contra 4', kind: 'browser', alt: { es: 'Fallen Legends 3D: ronda 2 de un 4 contra 4, el equipo azul avanza por el bosque', en: 'Fallen Legends 3D: round 2 of a 4 vs 4, the blue team pushes through the forest' } },
    ],
    gallery: [
      { src: '/projects/fl3d-menu.webp', kind: 'browser', alt: { es: 'Menú de inicio: modos Horda y 1v1 a 4v4, tamaño del equipo y elección de leyenda', en: 'Start menu: Horde and 1v1 to 4v4 modes, team size and legend picker' } },
      { src: '/projects/fallen-legends-3d.webp', kind: 'browser', alt: { es: 'Fallen Legends 3D: combate contra la horda en el bosque', en: 'Fallen Legends 3D: fighting the horde in the forest' } },
    ],
    links: [
      { label: 'play', href: 'https://fallen-legends-3d.up.railway.app' },
      { label: 'apk', href: 'https://drive.google.com/file/d/11vD-vsULm-V3ioa2qACETLnN7IefMEFf/view' },
    ],
    requestAccess: [{ name: 'Fallen Legends 3D', repo: 'https://github.com/JohanHdez/fallen-legends-3d' }],
  },
  {
    slug: 'vinyl',
    name: 'Vinyl Player',
    year: '2026',
    badge: { es: 'Lleva una semana funcionando en un gimnasio', en: 'Running at a gym for a week now' },
    accent: '#c2410c',
    title: {
      es: 'La música del gimnasio la eligen todos desde su celular',
      en: 'Everyone at the gym picks the music from their phone',
    },
    summary: {
      es: 'Un tocadiscos en el navegador con salas en tiempo real. La música suena en un solo parlante y cada persona entra con un QR, sin instalar nada: pide canciones, vota cuál sigue y conversa. Lleva una semana funcionando en un gimnasio real: el primer día sonó cuatro horas seguidas sin problemas y a la gente le gustó; con lo que pidieron ahí agregué co-anfitriones y salas que sobreviven a los reinicios.',
      en: 'A turntable in the browser with real-time rooms. Music plays on a single speaker and everyone joins with a QR code, nothing to install: they request songs, vote on what plays next and chat. It has been running at a real gym for a week: on day one it played four hours straight with no issues and people loved it; from what they asked for there I added co-hosts and rooms that survive restarts.',
    },
    role: { es: 'Autor', en: 'Author' },
    built: {
      es: [
        'Salas tipo Messenger: entran con QR o código, piden, votan y chatean; la canción más votada suena primero',
        'Roles: el anfitrión nombra co-anfitriones que manejan la música desde su celular, le pasa el mando a otra persona o saca a alguien de la sala',
        'Salas y chat que sobreviven a reinicios y despliegues (volumen en Railway), y vuelta automática si se cae la conexión',
        'Sigue sonando con la pantalla apagada: controles en la pantalla de bloqueo y reanudación si el navegador la pausa',
        'Radio automática para que la música nunca pare, explorar como YouTube Music y compartir por WhatsApp con vista previa',
      ],
      en: [
        'Messenger-style rooms: people join by QR or code, request, vote and chat; the most-voted song plays next',
        'Roles: the host names co-hosts who control the music from their phones, hands control to someone else, or removes people from the room',
        'Rooms and chat that survive restarts and deploys (a Railway volume), with automatic rejoin when the connection drops',
        'Keeps playing with the screen off: lock-screen controls and resume when the browser pauses it',
        'Auto radio so the music never stops, YouTube Music-style explore and WhatsApp sharing with link previews',
      ],
    },
    metrics: [
      { value: '7', label: { es: 'días funcionando en un gimnasio real', en: 'days running at a real gym' } },
      { value: '120', label: { es: 'pruebas automáticas', en: 'automated tests' } },
      { value: '0', label: { es: 'apps que instalar', en: 'apps to install' } },
    ],
    stack: ['Angular 21', 'Signals', 'Express 5', 'Socket.IO', 'Media Session API', 'Vitest', 'GitHub Actions', 'Docker'],
    shots: [
      { src: '/projects/vinyl-sala.webp', url: 'johan-hdez-musica · sala', kind: 'browser', alt: { es: 'Sala de Vinyl Player: chat con una canción compartida, reacciones y la cola compartida', en: 'Vinyl Player room: chat with a shared song, reactions and the shared queue' } },
      { src: '/projects/vinyl-chat-phone.webp', kind: 'phone', alt: { es: 'Sala del gimnasio en el celular: chat con una canción pedida para el cardio y sus votos', en: 'Gym room on a phone: chat with a song requested for cardio and its votes' } },
    ],
    gallery: [
      { src: '/projects/vinyl-personas-phone.webp', kind: 'phone', alt: { es: 'Participantes de la sala: Laura es co-host y el anfitrión puede quitarle el rol, pasarle el mando o sacarla', en: 'Room participants: Laura is a co-host and the host can remove the role, hand over control or remove her' } },
      { src: '/projects/vinyl-cola-phone.webp', kind: 'phone', alt: { es: 'Cola de la sala ordenada por votos', en: 'Room queue sorted by votes' } },
      { src: '/projects/vinyl-player.webp', kind: 'browser', alt: { es: 'Vinyl Player: tocadiscos, cola con canciones de la radio y sugerencias', en: 'Vinyl Player: turntable, queue with radio songs and suggestions' } },
    ],
    links: [
      { label: 'visit', href: 'https://johan-hdez-musica.up.railway.app' },
      { label: 'code', href: 'https://github.com/JohanHdez/vinyl-player' },
    ],
  },
  {
    slug: 'kmaleon',
    name: 'Kmaleon',
    year: '2024 —',
    badge: { es: 'Mi startup · prelanzamiento', en: 'My startup · pre-launch' },
    accent: '#2f7a4c',
    title: {
      es: 'Búsqueda de empleo con IA, pensada para Latinoamérica',
      en: 'AI job search built for Latin America',
    },
    summary: {
      es: 'SaaS B2C que reúne vacantes de 5 portales para 17 países, analiza tu CV contra cada oferta y lo adapta para que pases los filtros ATS. Lo diseñé, lo construí y lo opero yo solo, con un equipo de 6 agentes.',
      en: 'B2C SaaS that gathers jobs from 5 boards across 17 countries, scores your CV against each posting and tailors it to get past ATS filters. I designed, built and run it alone, with a team of 6 agents.',
    },
    role: { es: 'Fundador y único ingeniero', en: 'Founder and sole engineer' },
    built: {
      es: [
        'Pipeline de análisis ATS con Anthropic Claude: keywords, scoring de match perfil-vacante y recomendaciones, respetando el idioma de la oferta (ES/EN)',
        'Optimizador de CV que identifica brechas y reescribe secciones sin inventar: los hechos verificables se preservan por diseño del prompt',
        'Matching semántico con vacantes de JSearch, RemoteOK, Remotive, TheMuse y Computrabajo',
        'Producción real: NestJS + MongoDB Atlas + BullMQ/Redis en Railway, React en Cloudflare Pages, logs con correlation IDs y caché de respuestas LLM para bajar costos',
      ],
      en: [
        'ATS analysis pipeline on Anthropic Claude: keywords, profile-to-job match scoring and recommendations, keeping the posting’s language (ES/EN)',
        'CV optimizer that finds gaps and rewrites sections without inventing: verifiable facts are preserved by prompt design',
        'Semantic matching against jobs from JSearch, RemoteOK, Remotive, TheMuse and Computrabajo',
        'Real production: NestJS + MongoDB Atlas + BullMQ/Redis on Railway, React on Cloudflare Pages, correlation-ID logging and LLM response caching to cut costs',
      ],
    },
    metrics: [
      { value: '17', label: { es: 'países', en: 'countries' } },
      { value: '5', label: { es: 'fuentes de vacantes', en: 'job sources' } },
      { value: '6', label: { es: 'agentes construyéndolo', en: 'agents building it' } },
    ],
    stack: ['Anthropic Claude', 'NestJS', 'MongoDB Atlas', 'BullMQ + Redis', 'React', 'Railway', 'Cloudflare Pages'],
    shots: [
      { src: '/projects/kmaleon.webp', url: 'kmaleon.co', kind: 'browser', alt: { es: 'Portada de Kmaleon: búsqueda de empleo pensada para Latinoamérica', en: 'Kmaleon homepage: job search built for Latin America' } },
    ],
    links: [{ label: 'visit', href: 'https://kmaleon.co' }],
  },
  {
    slug: 'pbm',
    name: 'FarmaSalud PBM',
    year: '2026',
    badge: { es: 'En producción', en: 'In production' },
    accent: '#1d6fb8',
    privateCode: true,
    title: {
      es: 'Arquitectura agéntica para el ecosistema de farmacias de ARS Primera',
      en: 'Agentic architecture for ARS Primera’s pharmacy ecosystem',
    },
    summary: {
      es: 'Plataforma de gestión farmacéutica de una aseguradora de salud en República Dominicana: autorizaciones, consumo de afiliados y prestadores. Monté la arquitectura agéntica que coordina sus cuatro repositorios y se entregaron 4 proyectos.',
      en: 'Pharmacy benefit management platform for a health insurer in the Dominican Republic: authorizations, member consumption and providers. I set up the agentic architecture that coordinates its four repositories, and 4 projects were delivered.',
    },
    role: { es: 'AI Architect & Full-stack Engineer', en: 'AI Architect & Full-stack Engineer' },
    built: {
      es: [
        'Orquestador con Claude Code y agentes especializados que reciben cada historia de usuario, la verifican contra el código, la envían al repo correcto y auditan el drift entre repos',
        'Portales de Farmacias, Gestión Médica y Gestión de Programas en React 19 con BFF .NET 10 (Clean Architecture + DDD)',
        'Design System compartido de 33 familias de componentes',
        'Corrección de incidentes de producción en autorizaciones y consumo de afiliados',
      ],
      en: [
        'Claude Code orchestrator with specialized agents that take each user story, verify it against the code, route it to the right repo and audit cross-repo drift',
        'Pharmacies, Medical Management and Program Management portals in React 19 with .NET 10 BFFs (Clean Architecture + DDD)',
        'Shared Design System with 33 component families',
        'Production incident fixes in authorizations and member consumption',
      ],
    },
    metrics: [
      { value: '4', label: { es: 'proyectos entregados', en: 'projects delivered' } },
      { value: '4', label: { es: 'repos orquestados', en: 'repos orchestrated' } },
      { value: '33', label: { es: 'familias de componentes', en: 'component families' } },
    ],
    stack: ['Claude Code', 'React 19', '.NET 10', 'TypeScript', 'Tailwind 4', 'Azure DevOps'],
    shots: [
      { src: '/projects/pbm-resumen.webp', url: 'design-system · playground', kind: 'browser', alt: { es: 'Panel de autorizaciones del Design System de FarmaSalud (datos de ejemplo)', en: 'FarmaSalud Design System authorizations dashboard (sample data)' } },
    ],
    links: [],
  },
  {
    slug: 'english-coach',
    name: 'English Coach',
    year: '2026',
    badge: { es: 'En la Chrome Web Store · 5.0 ★', en: 'On the Chrome Web Store · 5.0 ★' },
    accent: '#5b5bd6',
    title: {
      es: 'Un coach de inglés que escucha tus reuniones, sin mandar tu audio a nadie',
      en: 'An English coach that listens to your meetings without sending your audio anywhere',
    },
    summary: {
      es: 'Lo hice porque lo necesitaba: hablo inglés en reuniones de trabajo y quería saber qué decía mal. La extensión graba por separado tu voz y la del otro, transcribe con Whisper dentro del navegador y un LLM te sugiere respuestas y te deja un informe. Tiene también versión PWA para reuniones presenciales.',
      en: 'I built it because I needed it: I speak English in work meetings and wanted to know what I got wrong. The extension records your voice and the other person’s separately, transcribes with Whisper inside the browser, and an LLM suggests answers and leaves you a report. There is also a PWA for in-person meetings.',
    },
    role: { es: 'Autor', en: 'Author' },
    built: {
      es: [
        'Whisper corriendo en el navegador (transformers.js + ONNX): el audio no sale del equipo',
        'Coach con LLM (Groq gratis o Claude) que propone respuestas, frases y un informe de la sesión',
        'PWA que distingue tu voz de la del interlocutor por huella de voz, con un solo micrófono',
        'Sin build ni dependencias, con pruebas unitarias y e2e',
      ],
      en: [
        'Whisper running in the browser (transformers.js + ONNX): audio never leaves the machine',
        'LLM coach (free Groq or Claude) that suggests answers, phrases and a session report',
        'PWA that tells your voice from the other speaker by voice print, with one microphone',
        'No build, no dependencies, with unit and e2e tests',
      ],
    },
    metrics: [
      { value: '5.0★', label: { es: 'en la Chrome Web Store', en: 'on the Chrome Web Store' } },
      { value: '0', label: { es: 'audio enviado a servidores', en: 'audio sent to servers' } },
    ],
    stack: ['Chrome MV3', 'Whisper', 'ONNX Runtime', 'LLM', 'PWA', 'Web Audio'],
    shots: [
      { src: '/projects/english-coach-panel.webp', kind: 'panel', alt: { es: 'Panel lateral de English Coach con frases y controles', en: 'English Coach side panel with phrases and controls' } },
    ],
    links: [
      { label: 'store', href: 'https://chromewebstore.google.com/detail/english-coach-%E2%80%94-transcrip/oghhgmcnchilddbnigfnklehimieimhm' },
      { label: 'app', href: 'https://english-coach.up.railway.app' },
      { label: 'code', href: 'https://github.com/JohanHdez/english-coach' },
    ],
    requestAccess: [{ name: 'English Coach (PWA)', repo: 'https://github.com/JohanHdez/English-coah-app' }],
  },
  {
    slug: 'chapa',
    name: 'Chapa Monedero',
    year: '2026',
    badge: { es: 'Vendiendo en CO y MX', en: 'Selling in CO and MX' },
    accent: '#1f6feb',
    title: {
      es: 'E-commerce para un fabricante: dos países, dos monedas, un solo código',
      en: 'E-commerce for a manufacturer: two countries, two currencies, one codebase',
    },
    summary: {
      es: 'Landing y checkout para ARCAS, que fabrica una cerradura mecánica de monedas para baños públicos. Cada país tiene su dominio, su moneda y su cuenta de Mercado Pago, con los medios de pago que la gente usa allá.',
      en: 'Landing and checkout for ARCAS, which makes a mechanical coin lock for public restrooms. Each country has its own domain, currency and Mercado Pago account, with the payment methods people actually use there.',
    },
    role: { es: 'Desarrollo de punta a punta', en: 'End-to-end development' },
    built: {
      es: [
        'Checkout con tarjeta, OXXO, SPEI, PSE, Nequi y Bancolombia',
        'Webhooks de pago cuyas reglas de seguridad se verifican con hooks de Claude Code',
        'Subagentes, comandos y skills propios dentro del repositorio',
      ],
      en: [
        'Checkout with card, OXXO, SPEI, PSE, Nequi and Bancolombia',
        'Payment webhooks whose security rules are enforced by Claude Code hooks',
        'Custom subagents, commands and skills inside the repo',
      ],
    },
    metrics: [
      { value: '2', label: { es: 'países', en: 'countries' } },
      { value: '6', label: { es: 'medios de pago locales', en: 'local payment methods' } },
    ],
    stack: ['Next.js 14', 'TypeScript', 'Mercado Pago', 'Claude Code', 'Vercel'],
    shots: [
      { src: '/projects/chapa-monedero.webp', url: 'chapamonedero.vercel.app/co', kind: 'browser', alt: { es: 'Landing de Chapa Monedero para Colombia', en: 'Chapa Monedero landing for Colombia' } },
    ],
    links: [
      { label: 'visit', href: 'https://chapamonedero.vercel.app' },
      { label: 'code', href: 'https://github.com/JohanHdez/chapamonedero' },
    ],
  },
];

export interface SmallProject {
  name: string;
  text: T;
  tags: string[];
  image: string;
  imageAlt: T;
  apk?: string;
  play?: string;
  site?: string;
  /** Repo privado: el botón "Pedir acceso" manda un correo con el nombre y este enlace. */
  privateRepo?: string;
  repo?: string;
}

export const smallProjects: SmallProject[] = [
  {
    name: 'Fallen Legends',
    text: {
      es: 'El original en 2D isométrico: mazmorras generadas, jefes y siete leyendas con habilidades propias.',
      en: 'The isometric 2D original: generated dungeons, bosses and seven legends with their own abilities.',
    },
    tags: ['Godot 4', '2D isometric', 'Android'],
    image: '/projects/fallen-legends-2d.webp',
    imageAlt: { es: 'Fallen Legends: mazmorra isométrica con enemigos', en: 'Fallen Legends: isometric dungeon with enemies' },
    apk: 'https://drive.google.com/file/d/15DNWNpVLzrVBKJGhTV7UvVOtxdNjtxXF/view',
    privateRepo: 'https://github.com/JohanHdez/arena-arpg',
  },
];

export const clientWork = [
  {
    name: 'Planet Entertainment',
    title: { es: 'Agentes de voz que agendan citas', en: 'Voice agents that book appointments' },
    text: {
      es: 'Sistema multi-agente de voz con Vapi, ElevenLabs y Twilio: conversación multi-turno, integración con CRM, follow-ups y paso a un humano cuando hace falta.',
      en: 'Multi-agent voice system on Vapi, ElevenLabs and Twilio: multi-turn conversation, CRM integration, follow-ups and handoff to a human when needed.',
    },
    result: { es: '−70% de tiempo en llamadas manuales', en: '−70% manual call handling time' },
  },
  {
    name: 'WhatsApp ↔ Voz',
    title: { es: 'Microservicio de automatización reutilizable', en: 'Reusable automation microservice' },
    text: {
      es: 'Workflows en n8n con backend Node.js que recogen datos de CRM, validan con OTP y conectan WhatsApp con voz.',
      en: 'n8n workflows with a Node.js backend that collect CRM data, validate with OTP and bridge WhatsApp and voice.',
    },
    result: { es: 'Onboarding de clientes: de días a horas', en: 'Client onboarding: from days to hours' },
  },
  {
    name: 'Job Agent',
    title: { es: 'Agente autónomo de vacantes', en: 'Autonomous job agent' },
    text: {
      es: 'Sistema multi-agente en TypeScript que busca oportunidades, las califica semánticamente y genera reportes sin intervención manual. Fue la semilla de Kmaleon.',
      en: 'TypeScript multi-agent system that finds openings, scores them semantically and writes reports with no manual work. It was the seed of Kmaleon.',
    },
    result: { es: 'Cero pasos manuales', en: 'Zero manual steps' },
  },
];

export const experience = [
  {
    period: { es: 'May 2024 — hoy', en: 'May 2024 — now' },
    role: { es: 'AI Engineer & Fundador', en: 'AI Engineer & Founder' },
    org: { es: 'Kmaleon', en: 'Kmaleon' },
    text: {
      es: 'SaaS de búsqueda de empleo con IA para 17 países. Pipelines LLM en producción y un equipo de 6 agentes de Claude Code.',
      en: 'AI job search SaaS for 17 countries. Production LLM pipelines and a team of 6 Claude Code agents.',
    },
  },
  {
    period: { es: 'May — Nov 2026', en: 'May — Nov 2026' },
    role: { es: 'AI Architect & Full-stack Engineer', en: 'AI Architect & Full-stack Engineer' },
    org: { es: 'ARS Primera · FarmaSalud PBM', en: 'ARS Primera · FarmaSalud PBM' },
    text: {
      es: 'Arquitectura agéntica y orquestación de cuatro repositorios. 4 proyectos de farmacias entregados y en producción.',
      en: 'Agentic architecture and orchestration of four repositories. 4 pharmacy projects delivered and in production.',
    },
  },
  {
    period: { es: 'May 2024 — hoy', en: 'May 2024 — now' },
    role: { es: 'AI Solutions Architect', en: 'AI Solutions Architect' },
    org: { es: 'Clientes directos', en: 'Direct clients' },
    text: {
      es: 'Agentes de voz, automatizaciones con n8n y MVPs de IA desplegados en Docker sobre VPS.',
      en: 'Voice agents, n8n automations and AI MVPs deployed with Docker on VPS.',
    },
  },
  {
    period: { es: 'Feb 2023 — Abr 2025', en: 'Feb 2023 — Apr 2025' },
    role: { es: 'Senior Frontend Engineer · Tech Lead', en: 'Senior Frontend Engineer · Tech Lead' },
    org: { es: 'Rapicredit', en: 'Rapicredit' },
    text: {
      es: 'Modernicé el frontend de la plataforma principal en 4 semanas con un equipo de 4, sin caídas en producción. CI/CD en Azure DevOps y AWS. 2.º lugar en la feria de innovación con "Sessionless Payments".',
      en: 'Modernized the flagship platform’s frontend in 4 weeks with a team of 4, zero production downtime. CI/CD on Azure DevOps and AWS. 2nd place at the innovation fair with "Sessionless Payments".',
    },
  },
  {
    period: { es: 'Oct 2018 — Ene 2023', en: 'Oct 2018 — Jan 2023' },
    role: { es: 'Frontend / Software Engineer', en: 'Frontend / Software Engineer' },
    org: { es: 'Klym · IAS Software · Capgemini · iGerencia', en: 'Klym · IAS Software · Capgemini · iGerencia' },
    text: {
      es: 'Aplicaciones para Bancolombia, Emtelco y fintechs. Lideré equipos de hasta 8 personas. En Capgemini, el monitoreo que implementé mejoró la estabilidad un 15%.',
      en: 'Applications for Bancolombia, Emtelco and fintechs. Led teams of up to 8. At Capgemini, the monitoring I built improved stability by 15%.',
    },
  },
];

export const education = [
  { es: 'Ingeniería de Software — Politécnico Grancolombiano, 2021', en: 'Software Engineering — Politécnico Grancolombiano, 2021' },
  { es: 'Tecnólogo en Análisis y Desarrollo de Sistemas — SENA, 2016', en: 'Systems Analysis & Development Technologist — SENA, 2016' },
  { es: 'Scrum Foundation Professional Certificate — CertiProf, 2020', en: 'Scrum Foundation Professional Certificate — CertiProf, 2020' },
  { es: 'Un año de inmersión en inglés en Australia', en: 'One year of English immersion in Australia' },
];

export const stack = [
  { group: { es: 'IA y LLMs', en: 'AI & LLMs' }, items: ['Anthropic Claude', 'OpenAI', 'Claude Code', 'Multi-agent', 'Prompt engineering', 'Semantic matching'] },
  { group: { es: 'Voz', en: 'Voice' }, items: ['Vapi', 'ElevenLabs', 'Twilio', 'WhatsApp Cloud API', 'Whisper'] },
  { group: { es: 'Backend y datos', en: 'Backend & data' }, items: ['TypeScript', 'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL', 'BullMQ + Redis', 'n8n'] },
  { group: { es: 'Infra', en: 'Infra' }, items: ['Docker', 'Azure DevOps', 'GitHub Actions', 'AWS', 'Railway', 'Cloudflare'] },
  { group: { es: 'Producto', en: 'Product' }, items: ['React', 'Angular', 'Next.js', 'Tailwind'] },
];
