export type Lang = 'es' | 'en';

export const profile = {
  name: 'Johan Hernández',
  email: 'jshernandezo97@gmail.com',
  github: 'https://github.com/JohanHdez',
  linkedin: 'https://www.linkedin.com/in/johan-front-end-developer',
  location: 'Medellín, Colombia',
};

export const ui = {
  es: {
    metaTitle: 'Johan Hernández — AI Solutions Architect',
    metaDescription:
      'AI Solutions Architect en Medellín. Diseño y despliego sistemas multi-agente, automatizaciones y productos de IA de punta a punta.',
    nav: { projects: 'Proyectos', services: 'Qué hago', experience: 'Experiencia', contact: 'Contacto' },
    hero: {
      eyebrow: 'AI Solutions Architect · Medellín, Colombia',
      title: 'Convierto procesos complejos en sistemas de IA que trabajan solos.',
      lead: 'Más de 7 años de ingeniería. Diseño y despliego ecosistemas de IA de punta a punta: agentes que orquestan flujos de negocio, voz que atiende llamadas y productos que corren en producción.',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Hablemos',
      stats: [
        { value: '7+', label: 'años de ingeniería' },
        { value: '70%', label: 'menos llamadas manuales con Voice AI' },
        { value: '6', label: 'agentes coordinados en un SaaS' },
      ],
    },
    services: {
      title: 'Qué hago',
      items: [
        {
          title: 'Sistemas multi-agente',
          text: 'Equipos de agentes con Claude Code y frameworks agénticos que se reparten el trabajo: investigan, deciden y ejecutan.',
        },
        {
          title: 'Automatización de negocio',
          text: 'Flujos en n8n, APIs en Node.js y pipelines que conectan CRM, WhatsApp y voz sin intervención manual.',
        },
        {
          title: 'Voz y conversación',
          text: 'Agentes de voz con Vapi, ElevenLabs y Twilio; transcripción en el navegador con Whisper.',
        },
        {
          title: 'Producto de punta a punta',
          text: 'Del MVP a producción: interfaz, backend, pagos, despliegue y la experiencia que hace que la IA se use.',
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Sistemas en producción y productos propios que puedes probar.',
      clientTitle: 'Trabajo con clientes',
      clientSubtitle: 'Sistemas privados: el código no es público, los resultados sí.',
      demo: 'Probar',
      code: 'Código',
      store: 'Chrome Web Store',
      apk: 'Descargar APK (Android)',
      privateCode: 'Código privado del cliente',
    },
    experience: {
      title: 'Experiencia',
    },
    stack: { title: 'Stack' },
    contact: {
      title: '¿Tienes un proceso que debería hacerse solo?',
      text: 'Cuéntame qué quieres automatizar y te digo cómo lo resolvería.',
      email: 'Escríbeme',
    },
    footer: 'Hecho con Astro.',
    langSwitch: 'EN',
  },
  en: {
    metaTitle: 'Johan Hernández — AI Solutions Architect',
    metaDescription:
      'AI Solutions Architect based in Medellín. I design and deploy end-to-end multi-agent systems, automations and AI products.',
    nav: { projects: 'Projects', services: 'What I do', experience: 'Experience', contact: 'Contact' },
    hero: {
      eyebrow: 'AI Solutions Architect · Medellín, Colombia',
      title: 'I turn complex workflows into AI systems that run on their own.',
      lead: '7+ years of engineering. I design and deploy end-to-end AI ecosystems: agents that orchestrate business workflows, voice that answers calls, and products that run in production.',
      ctaPrimary: 'See projects',
      ctaSecondary: "Let's talk",
      stats: [
        { value: '7+', label: 'years of engineering' },
        { value: '70%', label: 'fewer manual calls with Voice AI' },
        { value: '6', label: 'coordinated agents in one SaaS' },
      ],
    },
    services: {
      title: 'What I do',
      items: [
        {
          title: 'Multi-agent systems',
          text: 'Agent teams built with Claude Code and agentic frameworks that split the work: they research, decide and execute.',
        },
        {
          title: 'Business automation',
          text: 'n8n workflows, Node.js APIs and pipelines that connect CRM, WhatsApp and voice with no manual steps.',
        },
        {
          title: 'Voice & conversation',
          text: 'Voice agents with Vapi, ElevenLabs and Twilio; in-browser transcription with Whisper.',
        },
        {
          title: 'End-to-end product',
          text: 'From MVP to production: interface, backend, payments, deployment and the UX that makes AI actually get used.',
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'Systems in production and my own products you can try.',
      clientTitle: 'Client work',
      clientSubtitle: 'Private systems: the code is closed, the results are not.',
      demo: 'Try it',
      code: 'Code',
      store: 'Chrome Web Store',
      apk: 'Download APK (Android)',
      privateCode: 'Private client code',
    },
    experience: {
      title: 'Experience',
    },
    stack: { title: 'Stack' },
    contact: {
      title: 'Got a process that should run by itself?',
      text: "Tell me what you want to automate and I'll tell you how I'd solve it.",
      email: 'Email me',
    },
    footer: 'Built with Astro.',
    langSwitch: 'ES',
  },
} as const;

type T = { es: string; en: string };

export interface Project {
  slug: string;
  name: string;
  tagline: T;
  description: T;
  highlights: { es: string[]; en: string[] };
  tags: string[];
  repo?: string;
  demo?: string;
  store?: string;
  apk?: string; // enlace de descarga del APK (p. ej. GitHub Releases)
  badge?: T; // etiqueta destacada, p. ej. "En producción"
  privateCode?: boolean; // código de cliente, no público
  image?: string; // captura en /public/projects
  imageAlt?: T;
  accent: string; // color del bloque visual
  glyph: string; // símbolo del bloque visual
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'pbm-farmasalud',
    name: 'FarmaSalud PBM',
    featured: true,
    privateCode: true,
    accent: '#3fb6ff',
    glyph: '✚',
    image: '/projects/pbm-resumen.png',
    imageAlt: {
      es: 'Panel de autorizaciones del Design System de FarmaSalud PBM (datos de ejemplo)',
      en: 'FarmaSalud PBM Design System authorizations dashboard (sample data)',
    },
    badge: { es: 'En producción', en: 'In production' },
    tagline: {
      es: 'Arquitectura agéntica para el ecosistema de farmacias de ARS Primera: 4 proyectos entregados',
      en: 'Agentic architecture for ARS Primera’s pharmacy ecosystem: 4 projects delivered',
    },
    description: {
      es: 'Ecosistema PBM de ARS Primera (República Dominicana): portales de Farmacias, Gestión Médica y Gestión de Programas que manejan autorizaciones, consumo de afiliados y prestadores, sobre un Design System compartido.',
      en: 'ARS Primera’s PBM ecosystem (Dominican Republic): Pharmacies, Medical Management and Program Management portals handling authorizations, member consumption and providers, on a shared Design System.',
    },
    highlights: {
      es: [
        'Diseñé y monté la arquitectura agéntica del proyecto: un orquestador con Claude Code y agentes especializados que reciben cada historia de usuario, la verifican, la enrutan al repo correcto y auditan el drift entre repos',
        '4 proyectos del ecosistema de farmacias finalizados y en producción: 3 portales React 19 + BFF .NET 10 (Clean Architecture + DDD) y un Design System de 33 familias de componentes',
        'Corrección de incidentes de producción en autorizaciones y consumo de afiliados',
      ],
      en: [
        'Designed and set up the project’s agentic architecture: a Claude Code orchestrator with specialized agents that take each user story, verify it, route it to the right repo and audit cross-repo drift',
        '4 pharmacy-ecosystem projects delivered and in production: 3 React 19 portals + .NET 10 BFFs (Clean Architecture + DDD) and a 33-family component Design System',
        'Production incident fixes in authorizations and member consumption',
      ],
    },
    tags: ['Agentic architecture', 'Multi-agent', 'Claude Code', 'React 19', '.NET 10', 'TypeScript', 'Design System', 'Azure DevOps'],
  },
  {
    slug: 'english-coach',
    name: 'English Coach',
    featured: true,
    accent: '#7c5cff',
    glyph: '◉',
    tagline: {
      es: 'Coach de inglés con IA, publicado en la Chrome Web Store',
      en: 'AI English coach, live on the Chrome Web Store',
    },
    description: {
      es: 'Extensión de Chrome que graba por separado tu micrófono y el audio de la pestaña, transcribe la conversación por hablante y genera un reporte de tu inglés.',
      en: 'Chrome extension that records your microphone and the tab audio as separate tracks, transcribes the conversation by speaker and writes a report on your English.',
    },
    highlights: {
      es: [
        'Whisper corre dentro del navegador (transformers.js + ONNX): el audio no sale del equipo',
        'Coach con LLM (Groq gratis o Claude) que sugiere respuestas y frases',
        'Traducción en vivo con el traductor integrado de Chrome',
      ],
      en: [
        'Whisper runs inside the browser (transformers.js + ONNX): audio never leaves the machine',
        'LLM coach (free Groq or Claude) that suggests answers and phrases',
        "Live translation with Chrome's built-in translator",
      ],
    },
    tags: ['Chrome MV3', 'Whisper', 'ONNX', 'LLM', 'JavaScript'],
    repo: 'https://github.com/JohanHdez/english-coach',
    store:
      'https://chromewebstore.google.com/detail/english-coach-%E2%80%94-transcrip/oghhgmcnchilddbnigfnklehimieimhm',
  },
  {
    slug: 'english-coach-pwa',
    name: 'English Coach PWA',
    featured: true,
    accent: '#22c3a6',
    glyph: '◐',
    tagline: {
      es: 'Un solo micrófono, dos voces: separa quién habla por huella de voz',
      en: 'One microphone, two voices: tells speakers apart by voice print',
    },
    description: {
      es: 'App instalable para reuniones en inglés: distingue tu voz de la del interlocutor, transcribe, traduce y te sugiere qué responder en tiempo real.',
      en: 'Installable app for meetings in English: tells your voice from the other speaker, transcribes, translates and suggests what to answer in real time.',
    },
    highlights: {
      es: [
        'Identificación de hablante con un modelo de embeddings de voz en el navegador',
        'Sin build ni dependencias: módulos puros con pruebas unitarias y e2e',
        'Funciona offline después de la primera carga (service worker)',
      ],
      en: [
        'Speaker identification with an in-browser voice embedding model',
        'No build, no dependencies: pure modules with unit and e2e tests',
        'Works offline after the first load (service worker)',
      ],
    },
    tags: ['PWA', 'Speaker ID', 'Whisper', 'LLM', 'Web Audio'],
    repo: 'https://github.com/JohanHdez/English-coah-app',
  },
  {
    slug: 'chapamonedero',
    name: 'Chapa Monedero',
    featured: true,
    accent: '#ffb547',
    glyph: '◎',
    tagline: {
      es: 'E-commerce multipaís con Mercado Pago, construido con un equipo de agentes',
      en: 'Multi-country e-commerce with Mercado Pago, built with an agent team',
    },
    description: {
      es: 'Landing y checkout para vender una cerradura mecánica de monedas en México y Colombia, cada país con su dominio, moneda y medios de pago locales.',
      en: 'Landing and checkout to sell a mechanical coin lock in Mexico and Colombia, each country with its own domain, currency and local payment methods.',
    },
    highlights: {
      es: [
        'Pagos con tarjeta, OXXO, SPEI, PSE, Nequi y Bancolombia',
        'Webhooks con reglas de seguridad de pagos verificadas por hooks de Claude Code',
        'Subagentes, comandos y skills propios en el repositorio',
      ],
      en: [
        'Card, OXXO, SPEI, PSE, Nequi and Bancolombia payments',
        'Webhooks whose payment-security rules are enforced by Claude Code hooks',
        'Custom subagents, commands and skills in the repo',
      ],
    },
    tags: ['Next.js 14', 'TypeScript', 'Mercado Pago', 'Claude Code', 'Vercel'],
    repo: 'https://github.com/JohanHdez/chapamonedero',
    demo: 'https://chapamonedero.vercel.app',
  },
  {
    slug: 'vinyl-player',
    name: 'Vinyl Player',
    accent: '#ff6b6b',
    glyph: '◍',
    tagline: {
      es: 'Tocadiscos web con sesiones colaborativas en tiempo real',
      en: 'Web turntable with real-time collaborative sessions',
    },
    description: {
      es: 'Reproductor de música de YouTube con un tocadiscos animado y "Jam Sessions": los invitados entran con un QR y comparten la misma playlist.',
      en: 'YouTube music player with an animated turntable and "Jam Sessions": guests join with a QR code and share the same playlist.',
    },
    highlights: {
      es: ['Playlist sincronizada con Socket.IO y reconexión automática', 'Docker listo para desplegar'],
      en: ['Playlist synced with Socket.IO and automatic reconnection', 'Docker-ready'],
    },
    tags: ['Angular 21', 'Express 5', 'Socket.IO', 'Docker'],
    repo: 'https://github.com/JohanHdez/vinyl-player',
  },
  {
    slug: 'fallen-legends-3d',
    name: 'Fallen Legends 3D',
    accent: '#5aa9ff',
    glyph: '◆',
    tagline: {
      es: 'Juego de rol de acción en 3D con bots y modo en línea',
      en: '3D action RPG with bots and online play',
    },
    description: {
      es: 'ARPG en tercera persona hecho en Godot: modo Horda de 10 oleadas y combates por equipos de 1v1 a 4v4 contra bots, con servidor para jugar en línea.',
      en: 'Third-person ARPG built in Godot: a 10-wave Horde mode and 1v1 to 4v4 team fights against bots, with a server for online play.',
    },
    highlights: {
      es: ['IA de bots para compañeros y rivales', 'Mapa procedural y exportación a Android'],
      en: ['Bot AI for allies and enemies', 'Procedural map and Android export'],
    },
    tags: ['Godot 4', 'GDScript', 'Game AI', 'Multiplayer', 'Android'],
    repo: 'https://github.com/JohanHdez/fallen-legends-3d',
    apk: 'https://drive.google.com/file/d/11vD-vsULm-V3ioa2qACETLnN7IefMEFf/view',
  },
  {
    slug: 'fallen-legends',
    name: 'Fallen Legends',
    accent: '#a78bfa',
    glyph: '◇',
    tagline: {
      es: 'ARPG isométrico en 2D, el juego original de la saga',
      en: 'Isometric 2D ARPG, the original game of the saga',
    },
    description: {
      es: 'El juego hermano en 2D de Fallen Legends 3D: mismo mundo, leyendas y balance, con mazmorras generadas y modo Horda.',
      en: 'The 2D sibling of Fallen Legends 3D: same world, legends and balance, with generated dungeons and Horde mode.',
    },
    highlights: {
      es: ['Generación procedural de mazmorras', 'Exportado a Android'],
      en: ['Procedural dungeon generation', 'Exported to Android'],
    },
    tags: ['Godot 4', 'GDScript', '2D isometric', 'Android'],
    apk: 'https://drive.google.com/file/d/15DNWNpVLzrVBKJGhTV7UvVOtxdNjtxXF/view',
  },
  {
    slug: 'nails',
    name: 'Alejandra Ochoa Nails',
    accent: '#e8789a',
    glyph: '❖',
    tagline: {
      es: 'Sitio para un estudio de uñas con video controlado por scroll',
      en: 'Nail studio website with scroll-driven video',
    },
    description: {
      es: 'Sitio de una página para un negocio local de Copacabana, Antioquia: el video avanza cuadro a cuadro con el scroll y los servicios se muestran en un bento grid.',
      en: 'One-page site for a local business in Copacabana, Antioquia: video scrubs frame by frame with scroll and services sit in a bento grid.',
    },
    highlights: {
      es: ['HTML, CSS y JS sin frameworks', 'Totalmente responsive'],
      en: ['Vanilla HTML, CSS and JS', 'Fully responsive'],
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'Cliente'],
    repo: 'https://github.com/JohanHdez/nails',
  },
];

export const clientWork = [
  {
    title: { es: 'Job Agent SaaS', en: 'Job Agent SaaS' },
    text: {
      es: 'Monorepo en TypeScript con un equipo de 6 agentes de Claude Code que automatiza la búsqueda de empleo y el emparejamiento de candidatos.',
      en: 'TypeScript monorepo powered by a 6-agent Claude Code team that automates job search and candidate matching.',
    },
    tags: ['Multi-agent', 'TypeScript', 'Claude Code'],
  },
  {
    title: { es: 'Voice AI para agendamiento', en: 'Voice AI scheduling' },
    text: {
      es: 'Agentes de voz con Vapi, ElevenLabs y Twilio que agendan citas solos. Redujo en 70% las llamadas atendidas a mano.',
      en: 'Voice agents built on Vapi, ElevenLabs and Twilio that book appointments on their own. Cut manual call handling by 70%.',
    },
    tags: ['Vapi', 'ElevenLabs', 'Twilio'],
  },
  {
    title: { es: 'LinkedIn Job Bot', en: 'LinkedIn Job Bot' },
    text: {
      es: 'Agente autónomo que califica ofertas y se postula sin intervención manual.',
      en: 'Autonomous agent that qualifies job postings and applies with zero manual intervention.',
    },
    tags: ['Agents', 'Automation'],
  },
  {
    title: { es: 'Microservicios de IA en n8n', en: 'AI microservices on n8n' },
    text: {
      es: 'Flujos reutilizables que integran datos de CRM y conectan WhatsApp con voz.',
      en: 'Reusable workflows that integrate CRM data and bridge WhatsApp to voice.',
    },
    tags: ['n8n', 'WhatsApp API', 'CRM'],
  },
];

export const experience = [
  {
    role: { es: 'AI Architect & Full-stack Engineer', en: 'AI Architect & Full-stack Engineer' },
    org: 'ARS Primera · FarmaSalud PBM',
    period: { es: 'May – Nov 2026', en: 'May – Nov 2026' },
    text: {
      es: 'Monté la arquitectura agéntica del proyecto y la orquestación multi-agente con Claude Code que coordina los cuatro repositorios del ecosistema. Se finalizaron 4 proyectos de farmacias, hoy en producción: los portales de Farmacias, Gestión Médica y Gestión de Programas (React 19 + .NET 10) y el Design System.',
      en: 'I set up the project’s agentic architecture and the Claude Code multi-agent orchestration that coordinates the ecosystem’s four repositories. 4 pharmacy projects were delivered and are now in production: the Pharmacies, Medical Management and Program Management portals (React 19 + .NET 10) and the Design System.',
    },
  },
  {
    role: { es: 'AI Solutions Architect (independiente)', en: 'AI Solutions Architect (independent)' },
    org: '',
    text: {
      es: 'Diseño flujos agénticos y MVPs de IA sobre infraestructura propia (VPS), desde la arquitectura hasta producción.',
      en: 'I design agentic workflows and AI MVPs on self-managed VPS infrastructure, from architecture to production.',
    },
  },
  {
    role: { es: 'Senior Frontend Engineer', en: 'Senior Frontend Engineer' },
    org: 'Rapicredit',
    text: {
      es: 'Lideré el rebranding de toda la compañía. Premio de innovación por "Sessionless Payments".',
      en: 'Led the company-wide rebranding. Innovation award for "Sessionless Payments".',
    },
  },
  {
    role: { es: 'Frontend Engineer', en: 'Frontend Engineer' },
    org: 'Bancolombia · Emtelco · Capgemini',
    text: {
      es: 'Más de 5 años construyendo aplicaciones escalables para banca y grandes empresas.',
      en: '5+ years building scalable applications for banking and enterprise clients.',
    },
  },
];

export const stack = [
  { group: 'AI & Agents', items: ['Claude Code', 'Multi-agent orchestration', 'LLM pipelines', 'Prompt engineering', 'Whisper / ONNX'] },
  { group: 'Automation', items: ['n8n', 'Node.js APIs', 'GitHub Actions', 'Docker'] },
  { group: 'Voice & Comms', items: ['Vapi', 'ElevenLabs', 'Twilio', 'WhatsApp Cloud API'] },
  { group: 'Product', items: ['TypeScript', 'React / Next.js', 'Angular', 'NestJS', 'AWS'] },
];
