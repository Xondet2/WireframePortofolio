import { Code2, Brain, Lightbulb, LucideIcon, Mail, Github, Linkedin } from "lucide-react"

export interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  image?: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface EducationItem {
  period: string
  title: string
  description: string
  items: string[]
}

export interface Highlight {
  icon: LucideIcon
  title: string
  description: string
}

export interface SocialLink {
  icon: LucideIcon
  label: string
  href: string
  value?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  tags: string[]
}

export interface NavItem {
  label: string
  href: string
}

export interface PortfolioContent {
  personalInfo: {
    name: string
    fullName: string
    title: string
    description: string
    longDescription: string
    avatarUrl: string
    email: string
    socials: {
      github: string
      linkedin: string
    }
  }
  navItems: NavItem[]
  highlights: Highlight[]
  projects: Project[]
  skills: SkillCategory[]
  education: EducationItem[]
  technologies: string[]
  socialLinks: SocialLink[]
  blogPosts: BlogPost[]
  ui: {
    hero: {
      greeting: string
      viewProjects: string
      contact: string
    }
    about: {
      badge: string
      title: string
      intro: string
    }
    projects: {
      badge: string
      title: string
      subtitle: string
      explore: string
    }
    skills: {
      badge: string
      title: string
      subtitle: string
    }
    education: {
      badge: string
      title: string
      subtitle: string
    }
    technologies: {
      badge: string
      title: string
      subtitle: string
    }
    contact: {
      badge: string
      title: string
      subtitle: string
      send: string
    }
    blog: {
      badge: string
      title: string
      subtitle: string
      readMore: string
      back: string
    }
  }
}

export const portfolioData: Record<"es" | "en", PortfolioContent> = {
  es: {
    personalInfo: {
      name: "David Ordoñez",
      fullName: "David Esteban Ordoñez Lasso",
      title: "Desarrollador de Software",
      description: "Desarrollador enfocado en software, inteligencia artificial y proyectos creativos.",
      longDescription: "Estudiante apasionado por la tecnología, el diseño de sistemas y la creación de experiencias digitales innovadoras. Me especializo en desarrollo web y exploración de soluciones con IA.",
      avatarUrl: "/face.webp",
      email: "david.ordonezla@campusucc.edu.co",
      socials: {
        github: "https://github.com/Xondet2",
        linkedin: "#",
      }
    },
    navItems: [
      { label: "Inicio", href: "/#inicio" },
      { label: "Sobre mí", href: "/#sobre-mi" },
      { label: "Proyectos", href: "/#proyectos" },
      { label: "Habilidades", href: "/#habilidades" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/#contacto" },
    ],
    highlights: [
      {
        icon: Code2,
        title: "Desarrollo de Software",
        description: "Creación de aplicaciones web modernas con tecnologías actuales y buenas prácticas de código.",
      },
      {
        icon: Brain,
        title: "Inteligencia Artificial",
        description: "Exploración de soluciones con IA para automatización y generación de contenido.",
      },
      {
        icon: Lightbulb,
        title: "Creatividad Digital",
        description: "Diseño de experiencias interactivas que combinan tecnología y expresión artística.",
      },
    ],
    projects: [
      {
        title: "AXI – Aplicación de Dibujo Creativo",
        description: "Aplicación enfocada en desarrollar la creatividad mediante ejercicios interactivos para todas las edades.",
        tags: ["Creatividad", "Interactivo", "UI/UX"],
        link: "#",
      },
      {
        title: "SmartMarketAI",
        description: "Scraper inteligente de páginas web para análisis de benchmarking utilizando inteligencia artificial.",
        tags: ["Python", "IA", "Web Scraping", "Análisis"],
        link: "#",
      },
      {
        title: "Proyectos de Bases de Datos",
        description: "Análisis y modelado de sistemas de información utilizando diagramas entidad-relación.",
        tags: ["SQL", "Modelado", "Análisis"],
        link: "#",
      },
    ],
    skills: [
      {
        title: "Frontend",
        skills: ["Next.js", "HTML", "CSS", "Tailwind CSS", "React"],
      },
      {
        title: "Backend",
        skills: ["Java", "Python", "Arquitectura de Software", "APIs"],
      },
      {
        title: "Bases de Datos",
        skills: ["Modelado E-R", "SQL", "Integridad de Datos", "Diseño de BD"],
      },
    ],
    education: [
      {
        period: "2025 – Actualidad",
        title: "Estudios en Tecnología y Desarrollo de Software",
        description: "Formación académica enfocada en el desarrollo de aplicaciones y sistemas de información.",
        items: [
          "Bases de datos y modelado de sistemas",
          "Desarrollo web con tecnologías modernas",
          "Análisis y diseño de software",
        ],
      },
    ],
    technologies: [
      "Java", "Python", "Next.js", "React", "Tailwind CSS", "SQL", 
      "HTML/CSS", "Inteligencia Artificial", "Web Scraping", 
      "Desarrollo Web", "Git",
    ],
    socialLinks: [
      {
        icon: Mail,
        label: "Email",
        href: "mailto:david.ordonezla@campusucc.edu.co",
        value: "david.ordonezla@campusucc.edu.co",
      },
      {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/Xondet2",
        value: "@Xondet2",
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        href: "#",
        value: "David Ordoñez",
      },
    ],
    blogPosts: [
      {
        slug: "futuro-ia-desarrollo-web",
        title: "El futuro de la IA en el desarrollo web",
        excerpt: "Cómo las herramientas generativas están cambiando la forma en que escribimos código y diseñamos interfaces.",
        date: "2024-03-15",
        readingTime: "5 min",
        tags: ["IA", "Web", "Futuro"],
      },
      {
        slug: "mejores-practicas-nextjs-15",
        title: "Mejores prácticas en Next.js 15",
        excerpt: "Una guía completa sobre las nuevas funcionalidades de Next.js y cómo aprovecharlas al máximo.",
        date: "2024-02-28",
        readingTime: "8 min",
        tags: ["Next.js", "React", "Frontend"],
      },
    ],
    ui: {
      hero: {
        greeting: "Hola, soy",
        viewProjects: "Ver proyectos",
        contact: "Contactar",
      },
      about: {
        badge: "Perfil",
        title: "Sobre mí",
        intro: "Soy",
      },
      projects: {
        badge: "Portafolio",
        title: "Proyectos Destacados",
        subtitle: "Una selección de proyectos en los que he trabajado, combinando tecnología y creatividad.",
        explore: "Explorar Proyecto",
      },
      skills: {
        badge: "Competencias",
        title: "Habilidades",
        subtitle: "Tecnologías y competencias que domino y aplico en mis proyectos.",
      },
      education: {
        badge: "Trayectoria",
        title: "Educación",
        subtitle: "Mi trayectoria académica y formación profesional.",
      },
      technologies: {
        badge: "Stack",
        title: "Tecnologías",
        subtitle: "Herramientas y tecnologías que utilizo en mi trabajo diario.",
      },
      contact: {
        badge: "Conectemos",
        title: "Contacto",
        subtitle: "¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.",
        send: "Enviar mensaje",
      },
      blog: {
        badge: "Pensamientos y Tutoriales",
        title: "Blog Personal",
        subtitle: "Comparto lo que aprendo sobre desarrollo web, IA y tecnología.",
        readMore: "Leer más",
        back: "Volver al blog",
      }
    }
  },
  en: {
    personalInfo: {
      name: "David Ordoñez",
      fullName: "David Esteban Ordoñez Lasso",
      title: "Software Developer",
      description: "Developer focused on software, artificial intelligence, and creative projects.",
      longDescription: "Passionate student of technology, systems design, and the creation of innovative digital experiences. Specialized in web development and AI solutions exploration.",
      avatarUrl: "/face.webp",
      email: "david.ordonezla@campusucc.edu.co",
      socials: {
        github: "https://github.com/Xondet2",
        linkedin: "#",
      }
    },
    navItems: [
      { label: "Home", href: "/#inicio" },
      { label: "About", href: "/#sobre-mi" },
      { label: "Projects", href: "/#proyectos" },
      { label: "Skills", href: "/#habilidades" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/#contacto" },
    ],
    highlights: [
      {
        icon: Code2,
        title: "Software Development",
        description: "Creation of modern web applications with current technologies and best coding practices.",
      },
      {
        icon: Brain,
        title: "Artificial Intelligence",
        description: "Exploration of AI solutions for automation and content generation.",
      },
      {
        icon: Lightbulb,
        title: "Digital Creativity",
        description: "Design of interactive experiences that combine technology and artistic expression.",
      },
    ],
    projects: [
      {
        title: "AXI – Creative Drawing App",
        description: "Application focused on developing creativity through interactive exercises for all ages.",
        tags: ["Creativity", "Interactive", "UI/UX"],
        link: "#",
      },
      {
        title: "SmartMarketAI",
        description: "Intelligent web scraper for benchmarking analysis using artificial intelligence.",
        tags: ["Python", "AI", "Web Scraping", "Analysis"],
        link: "#",
      },
      {
        title: "Database Projects",
        description: "Analysis and modeling of information systems using entity-relationship diagrams.",
        tags: ["SQL", "Modeling", "Analysis"],
        link: "#",
      },
    ],
    skills: [
      {
        title: "Frontend",
        skills: ["Next.js", "HTML", "CSS", "Tailwind CSS", "React"],
      },
      {
        title: "Backend",
        skills: ["Java", "Python", "Software Architecture", "APIs"],
      },
      {
        title: "Databases",
        skills: ["E-R Modeling", "SQL", "Data Integrity", "DB Design"],
      },
    ],
    education: [
      {
        period: "2025 – Present",
        title: "Software Development & Technology Studies",
        description: "Academic training focused on application development and information systems.",
        items: [
          "Databases and systems modeling",
          "Web development with modern technologies",
          "Software analysis and design",
        ],
      },
    ],
    technologies: [
      "Java", "Python", "Next.js", "React", "Tailwind CSS", "SQL", 
      "HTML/CSS", "Artificial Intelligence", "Web Scraping", 
      "Web Development", "Git",
    ],
    socialLinks: [
      {
        icon: Mail,
        label: "Email",
        href: "mailto:david.ordonezla@campusucc.edu.co",
        value: "david.ordonezla@campusucc.edu.co",
      },
      {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/Xondet2",
        value: "@Xondet2",
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        href: "#",
        value: "David Ordoñez",
      },
    ],
    blogPosts: [
      {
        slug: "futuro-ia-desarrollo-web",
        title: "The Future of AI in Web Development",
        excerpt: "How generative tools are changing the way we write code and design interfaces.",
        date: "2024-03-15",
        readingTime: "5 min",
        tags: ["AI", "Web", "Future"],
      },
      {
        slug: "mejores-practicas-nextjs-15",
        title: "Best Practices in Next.js 15",
        excerpt: "A complete guide on the new features of Next.js and how to make the most of them.",
        date: "2024-02-28",
        readingTime: "8 min",
        tags: ["Next.js", "React", "Frontend"],
      },
    ],
    ui: {
      hero: {
        greeting: "Hi, I'm",
        viewProjects: "View projects",
        contact: "Contact",
      },
      about: {
        badge: "Profile",
        title: "About me",
        intro: "I am",
      },
      projects: {
        badge: "Portfolio",
        title: "Featured Projects",
        subtitle: "A selection of projects I've worked on, combining technology and creativity.",
        explore: "Explore Project",
      },
      skills: {
        badge: "Competencies",
        title: "Skills",
        subtitle: "Technologies and competencies I master and apply in my projects.",
      },
      education: {
        badge: "Trajectory",
        title: "Education",
        subtitle: "My academic trajectory and professional training.",
      },
      technologies: {
        badge: "Stack",
        title: "Technologies",
        subtitle: "Tools and technologies I use in my daily work.",
      },
      contact: {
        badge: "Let's Connect",
        title: "Contact",
        subtitle: "Have a project in mind or want to collaborate? Feel free to contact me.",
        send: "Send message",
      },
      blog: {
        badge: "Thoughts and Tutorials",
        title: "Personal Blog",
        subtitle: "I share what I learn about web development, AI, and technology.",
        readMore: "Read more",
        back: "Back to blog",
      }
    }
  }
}
