const esES = {
  nav: {
    links: [
      { href: '#about', label: 'Sobre mí' },
      { href: '#skills', label: 'Stack' },
      { href: '#experience', label: 'Experiencia' },
      { href: '#certifications', label: 'Certificaciones' },
      { href: '#contact', label: 'Contacto' },
    ],
  },
  hero: {
    eyebrow: 'Web Developer — Passo Fundo, BR',
    name: ['Bernardo', 'Stocco', 'Silva'],
    role: 'Desarrollador especialista en WordPress, PHP e integraciones ERP/API con enfoque en rendimiento, UI/UX y soluciones que entregan resultados.',
    roleAccent: ['WordPress, PHP', 'ERP/API'],
    stats: [
      { num: '3', suffix: '+', label: 'Años de exp.' },
      { num: '40', suffix: '+', label: 'Certificaciones' },
      { num: '15', suffix: '+', label: 'Sitios web hechos' },
    ],
    cta1: 'Ver experiencia',
    cta2: 'Contactar',
    scroll: 'Scroll',
  },
  about: {
    tag: '01 — Sobre mí',
    title: 'Construyo la web\nque necesitas.',
    desc: 'Soluciono problemas reales con código limpio y arquitectura pensada a largo plazo. Desde la integración de ERP hasta el píxel perfecto en el frontend.',
    highlight: 'Profesional con gran experiencia en WordPress, PHP y soluciones personalizadas para empresas que necesitan más que un sitio web.',
    paragraphs: [
      'En los últimos años, he trabajado con <strong>integración de sistemas ERP</strong> (SAP B1), desarrollo de plugins y temas personalizados, automatización de procesos con n8n, y optimización de rendimiento y SEO para sitios vinculados al banco más grande del país.',
      'Mi enfoque combina visión técnica con sensibilidad de diseño — uso <strong>Figma y principios de UI/UX</strong> para entregar interfaces que funcionan y que la gente quiere usar.',
    ],
    tags: ['PHP', 'WordPress', 'React', 'WooCommerce', 'SAP B1', 'Figma', 'n8n', 'SEO', 'Docker', 'MySQL'],
    certsHeader: 'Formación & certificados',
    certs: [
      { name: 'Análisis y Desarrollo de Sistemas', provider: 'UNOPAR', year: '2024', icon: 'frontend' },
      { name: 'PHP y MySQL', provider: 'Alura', year: '2025', icon: 'php' },
      { name: 'PHP en la Web: MVC', provider: 'Alura', year: '2025', icon: 'php' },
      { name: 'WordPress & Desarrollo de Plugins', provider: 'Certificaciones diversas', year: '2024', icon: 'wordpress' },
      { name: '30+ certificaciones en PHP', provider: 'Portfolio completo', year: '2024', icon: 'php' },
    ],
  },
  skills: {
    tag: '02 — Habilidades',
    title: 'Lo que\nhago.',
    desc: 'Dominio completo del ciclo de desarrollo web — desde la planificación técnica hasta el despliegue en producción.',
    cards: [
      {
        title: 'Backend & PHP',
        items: ['PHP 8.x avanzado', 'Arquitectura MVC', 'MySQL & optimización de consultas', 'Desarrollo de REST API', 'Integración SAP Business One', 'Autenticación & seguridad'],
      },
      {
        title: 'WordPress & Plugins',
        items: ['Desarrollo de plugins personalizados', 'Temas desde cero', 'WooCommerce avanzado', 'Elementor & Page Builders', 'Hooks, filters, actions', 'WordPress multisites'],
      },
      {
        title: 'Frontend & UI/UX',
        items: ['React.js', 'HTML5, CSS3, JavaScript ES6+', 'Diseño de interfaces en Figma', 'Responsividad & accesibilidad', 'Rendimiento & Core Web Vitals', 'Animaciones & micro-interacciones'],
      },
      {
        title: 'Integraciones & APIs',
        items: ['SAP B1 via Service Layer', 'Webhooks & event-driven', 'Automatizaciones con n8n', 'Automatización WhatsApp', 'Monitoreo de sistemas', 'Marketing automation'],
      },
      {
        title: 'Rendimiento & SEO',
        items: ['Google Search Console', 'Google Analytics 4', 'SEO técnico avanzado', 'Optimización de carga', 'Caché & CDN', 'Informes & análisis de datos'],
      },
      {
        title: 'DevOps & Infra',
        items: ['Docker & containerización', 'Ngrok & túneles seguros', 'Implementación n8n self-hosted', 'Git & control de versiones', 'Soporte técnico & mantenimiento', 'Monitoreo & alertas'],
      },
    ],
  },
  experience: {
    tag: '03 — Experiencia',
    title: 'Dónde\ntrabajé.',
    desc: 'Experiencia real en entornos exigentes, trabajando con marcas asociadas al banco más grande de Brasil.',
    totalLabel: 'Total',
    totalSub: 'de experiencia en desarrollo web',
    companies: 'Empresas',
    mainStack: 'Stack principal',
    items: [
      {
        period: 'oct 2023 — mar 2026',
        periodShort: 'oct 2023 — mar 2026',
        type: 'Tiempo completo · Remoto',
        company: 'Share Media',
        position: 'Web Developer — 2 años 6 meses',
        bullets: [
          'Integración de WordPress con ERP SAP B1 mediante desarrollo de plugins personalizados',
          'Automatización de gestión e integración de sistemas internos',
          'Desarrollo de e-commerce e interfaces web de alto rendimiento',
          'Mejora de rendimiento y SEO para sitios asociados al banco más grande del país',
          'Automatización para WhatsApp y monitoreo de estado de sistemas',
          'Creación de temas WordPress y reestructuración de identidad visual',
          'Implementación de n8n con Docker y ngrok para automatización de marketing',
        ],
        skills: ['PHP', 'WordPress', 'SAP B1', 'n8n', 'Docker', 'WooCommerce', 'Elementor', 'SEO'],
      },
      {
        period: 'abr 2023 — set 2023',
        periodShort: 'abr 2023 — set 2023',
        type: 'Tiempo completo · Remoto',
        company: 'Arara Resultados',
        position: 'Web Developer — 6 meses',
        bullets: [
          'Integración de sistemas y APIs externas',
          'Desarrollo de interfaces web responsivas',
          'Mantenimiento y evolución de sitios existentes',
        ],
        skills: ['JavaScript', 'Elementor', 'WordPress', 'PHP'],
      },
    ],
  },
  certifications: {
    tag: '04 — Certificaciones',
    title: '40+\ncredenciales.',
    desc: 'Más de 30 certificaciones en PHP consolidan la profundidad técnica en backend y desarrollo web.',
    items: [
      { label: 'PHP', name: 'PHP y MySQL', meta: 'Alura — feb 2025', icon: 'php' },
      { label: 'PHP', name: 'PHP en la Web: Patrón MVC', meta: 'Alura — ene 2025', icon: 'php' },
      { label: 'WordPress', name: 'Desarrollo de Plugins', meta: 'Certificación profesional', icon: 'wordpress' },
      { label: 'Frontend', name: 'HTML, CSS & JavaScript', meta: 'Múltiples certificaciones', icon: 'frontend' },
      { label: 'Analytics', name: 'Google Search Console', meta: '2 recomendaciones de competencia', icon: 'analytics' },
      { label: 'Analytics', name: 'Google Analytics', meta: '2 recomendaciones de competencia', icon: 'analytics' },
      { label: 'E-commerce', name: 'WooCommerce Avanzado', meta: 'Certificación técnica', icon: 'ecommerce' },
      { label: 'PHP', name: '30+ Certificaciones PHP', meta: 'Portfolio completo', icon: 'php' },
    ],
  },
  contact: {
    tag: '05 — Contacto',
    title: 'Vamos a\nconstruir\nalgo.',
  },
  footer: 'Web Developer // Passo Fundo, BR',
};

export default esES;
