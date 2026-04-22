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

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
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
  testimonials: Testimonial[]
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
    testimonials: {
      badge: string
      title: string
      subtitle: string
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
      avatarUrl: "/face.png",
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
        image: "/AXI.png",
      },
      {
        title: "DBVision",
        description: "Scraper inteligente de páginas web para análisis de benchmarking utilizando inteligencia artificial.",
        tags: ["Python", "IA", "Web Scraping", "Análisis"],
        link: "https://smartmarket-ai.vercel.app/dashboard",
        image: "/Smartmarket.png",
      },
      {
        title: "Proyectos de Bases de Datos",
        description: "Análisis y modelado de sistemas de información utilizando diagramas entidad-relación.",
        tags: ["SQL", "Modelado", "Análisis"],
        link: "#",
        image: "/Aws.png",
      },
    ],
    skills: [
      {
        title: "Frontend",
        skills: ["Next.js", "React", "Tailwind CSS", "Rendering SSR / CSR", "Component-based Architecture"],
      },
      {
        title: "Backend",
        skills: ["Java", "Python", "Node.js", "Clean Architecture", "RESTful APIs", "MQTT", "Automatización vía APIs", "Unit Testing con pytest"],
      },
      {
        title: "Bases de Datos",
        skills: ["SQL Avanzado", "MySQL", "AWS RDS", "Modelado Relacional"],
      },
      {
        title: "Cloud & Dev Environment",
        skills: ["AWS", "Ubuntu", "WSL"],
      },
      {
        title: "Inteligencia Artificial Aplicada",
        skills: ["Integración de LLMs", "Automatización con IA", "Prompt Engineering"],
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
      "Java", "Python", "Node.js", "Next.js", "React", "Tailwind CSS", 
      "SQL Avanzado", "AWS", "Ubuntu", "Clean Architecture", 
      "RESTful APIs", "MQTT", "Integración de LLMs", "Prompt Engineering",
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
        slug: "pruebas-unitarias-python-pytest-api-rest",
        title: "Pruebas unitarias en Python con pytest aplicadas a una API REST",
        excerpt: "Cómo estructurar pruebas claras y mantenibles usando pytest para validar lógica de negocio en backend desacoplado.",
        date: "2026-04-20",
        readingTime: "8 min",
        tags: ["Backend", "Python", "Testing"],
      },
      {
        slug: "integracion-llm-api-backend-modular",
        title: "Integración de modelos de lenguaje vía API en un backend modular",
        excerpt: "Experiencia práctica integrando LLMs como ChatGPT y Claude en aplicaciones reales mediante automatización y consumo de APIs.",
        date: "2026-04-10",
        readingTime: "10 min",
        tags: ["IA", "Backend", "APIs"],
      },
      {
        slug: "clean-architecture-proyectos-pequenos",
        title: "Aplicando Clean Architecture en proyectos pequeños",
        excerpt: "Separación de responsabilidades, desacoplamiento del núcleo de negocio e integración con infraestructura externa en sistemas backend.",
        date: "2026-03-30",
        readingTime: "7 min",
        tags: ["Arquitectura", "Backend", "Diseño"],
      },
      {
        slug: "aws-rds-proyectos-academicos-buenas-practicas",
        title: "Uso de AWS RDS en proyectos académicos: errores y buenas prácticas",
        excerpt: "Aprendizajes prácticos al trabajar con bases de datos relacionales en la nube usando Amazon Web Services y SQL avanzado.",
        date: "2026-03-18",
        readingTime: "6 min",
        tags: ["Cloud", "SQL", "Backend"],
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
      },
      testimonials: {
        badge: "Feedback",
        title: "Testimonios",
        subtitle: "Lo que otros dicen sobre mi trabajo y mi portafolio.",
      }
    },
    testimonials: [
      {
        name: "Reinel Ordoñez",
        role: "Visitante",
        content: "Indica todas las tecnologías que ha usado hasta el momento. Buenas animaciones.",
        rating: 4.5
      },
      {
        name: "Alexandra Lasso",
        role: "Visitante",
        content: "La presentación me pareció interesante. Me gusta el modo oscuro, la foto de perfil y el texto muy claro.",
        rating: 4.5
      },
      {
        name: "Carlos Méndez",
        role: "Desarrollador Fullstack",
        content: "Un portafolio muy sólido. La arquitectura limpia se nota en la fluidez de la página.",
        rating: 5.0
      },
      {
        name: "Elena Rodríguez",
        role: "UX Designer",
        content: "Excelente uso de los componentes de UI. La navegación es intuitiva y el diseño es muy profesional.",
        rating: 4.8
      },
      {
        name: "Julián Castro",
        role: "Tech Lead",
        content: "Muy buena integración de proyectos de IA. Se nota el dominio de las herramientas modernas.",
        rating: 4.7
      }
    ]
  },
  en: {
    personalInfo: {
      name: "David Ordoñez",
      fullName: "David Esteban Ordoñez Lasso",
      title: "Software Developer",
      description: "Developer focused on software, artificial intelligence, and creative projects.",
      longDescription: "Passionate student of technology, systems design, and the creation of innovative digital experiences. Specialized in web development and AI solutions exploration.",
      avatarUrl: "/face.png",
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
        image: "/AXI.png",
      },
      {
        title: "DBVision",
        description: "Intelligent web scraper for benchmarking analysis using artificial intelligence.",
        tags: ["Python", "AI", "Web Scraping", "Analysis"],
        link: "https://smartmarket-ai.vercel.app/dashboard",
        image: "/Smartmarket.png",
      },
      {
        title: "Database Projects",
        description: "Analysis and modeling of information systems using entity-relationship diagrams.",
        tags: ["SQL", "Modeling", "Analysis"],
        link: "#",
        image: "/Aws.png",
      },
    ],
    skills: [
      {
        title: "Frontend",
        skills: ["Next.js", "React", "Tailwind CSS", "Rendering SSR / CSR", "Component-based Architecture"],
      },
      {
        title: "Backend",
        skills: ["Java", "Python", "Node.js", "Clean Architecture", "RESTful APIs", "MQTT", "API Automation", "Unit Testing with pytest"],
      },
      {
        title: "Databases",
        skills: ["SQL Advanced", "MySQL", "AWS RDS", "Relational Modeling"],
      },
      {
        title: "Cloud & Dev Environment",
        skills: ["AWS", "Ubuntu", "WSL"],
      },
      {
        title: "Applied Artificial Intelligence",
        skills: ["LLM Integration", "AI Automation", "Prompt Engineering"],
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
      "Java", "Python", "Node.js", "Next.js", "React", "Tailwind CSS", 
      "Advanced SQL", "AWS", "Ubuntu", "Clean Architecture", 
      "RESTful APIs", "MQTT", "LLM Integration", "Prompt Engineering",
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
        slug: "pruebas-unitarias-python-pytest-api-rest",
        title: "Unit Testing in Python with pytest applied to a REST API",
        excerpt: "How to structure clear and maintainable tests using pytest to validate business logic in a decoupled backend.",
        date: "2026-04-20",
        readingTime: "8 min",
        tags: ["Backend", "Python", "Testing"],
      },
      {
        slug: "integracion-llm-api-backend-modular",
        title: "LLM Integration via API in a Modular Backend",
        excerpt: "Practical experience integrating LLMs like ChatGPT and Claude into real applications through automation and API consumption.",
        date: "2026-04-10",
        readingTime: "10 min",
        tags: ["AI", "Backend", "APIs"],
      },
      {
        slug: "clean-architecture-proyectos-pequenos",
        title: "Applying Clean Architecture in Small Projects",
        excerpt: "Separation of concerns, business core decoupling, and integration with external infrastructure in backend systems.",
        date: "2026-03-30",
        readingTime: "7 min",
        tags: ["Architecture", "Backend", "Design"],
      },
      {
        slug: "aws-rds-proyectos-academicos-buenas-practicas",
        title: "AWS RDS in Academic Projects: Mistakes and Best Practices",
        excerpt: "Practical learnings from working with relational databases in the cloud using Amazon Web Services and advanced SQL.",
        date: "2026-03-18",
        readingTime: "6 min",
        tags: ["Cloud", "SQL", "Backend"],
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
      },
      testimonials: {
        badge: "Feedback",
        title: "Testimonials",
        subtitle: "What others say about my work and my portfolio.",
      }
    },
    testimonials: [
      {
        name: "Reinel Ordoñez",
        role: "Visitor",
        content: "Shows all the technologies used so far. Good animations.",
        rating: 4.5
      },
      {
        name: "Alexandra Lasso",
        role: "Visitor",
        content: "The presentation seemed interesting to me. I like the dark mode, the profile photo, and the very clear text.",
        rating: 4.5
      },
      {
        name: "Carlos Méndez",
        role: "Fullstack Developer",
        content: "A very solid portfolio. The clean architecture is evident in the site's fluidity.",
        rating: 5.0
      },
      {
        name: "Elena Rodríguez",
        role: "UX Designer",
        content: "Excellent use of UI components. Navigation is intuitive and the design is very professional.",
        rating: 4.8
      },
      {
        name: "Julián Castro",
        role: "Tech Lead",
        content: "Very good integration of AI projects. Mastery of modern tools is evident.",
        rating: 4.7
      }
    ]
  }
}
