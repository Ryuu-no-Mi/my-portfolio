export const content = {
    es: {
        name: "Jaime Andrés Monserrate Villa",
        username: "Ryuu_no_mi",
        role: "Desarrollador Junior | Spring Boot & .NET | React & Vue.js",
        nav: {
            about: "Sobre mí",
            experience: "Experiencia",
            projects: "Proyectos",
            skills: "Habilidades",
            contact: "Contacto",
        },
        hero: {
            greeting: "Hola, soy",
            subtitle:
                "Desarrollador junior buscando su primera oportunidad laboral",
            cta: "Ver proyectos",
            contact: "Contactar",
        },
        about: {
            title: "Sobre mí",
            text: "Desarrollador junior conocimientos en tecnologías backend y frontend.",
            description:
                " Me adapto con facilidad a nuevos lenguajes y tecnologías, y disfruto trabajando en equipo aportando soluciones eficientes.",
        },
        experience: {
            title: "Experiencia Laboral",
            jobs: [
                {
                    company: "AM System S.L",
                    role: "Desarrollador Full Stack",
                    period: "Jun - Sept 2025",
                    type: "Prácticas EPES",
                    achievements: [
                        "Implementación de autenticación y autorización mediante JWT y roles, fortaleciendo la seguridad de la aplicación",
                        "Construí una interfaz modular y reutilizable en Vue.js, optimizando la productividad en el desarrollo frontend",
                        "Añadí funcionalidades clave como paginación, filtrado y búsqueda, mejorando la experiencia del usuario final",
                    ],
                    tech: ".NET 8+, Vue.js, Axios, SQL Server, JWT",
                },
                {
                    company: "RK ACM",
                    role: "Desarrollador Full Stack",
                    period: "Mar - Jun 2025",
                    type: "Prácticas FCT",
                    achievements: [
                        "Desarrollo de aplicación Android para gestión y visualización de propiedades inmobiliarias",
                        "Mantenimiento y optimización del sitio web corporativo basado en WordPress",
                        "Integración del desarrollo móvil y web para fortalecer la presencia digital de la empresa",
                    ],
                    tech: "Spring Boot, Android, MySQL, WordPress",
                },
            ],
        },
        skills: {
            title: "Habilidades Técnicas",
            backend: "Backend",
            frontend: "Frontend",
            database: "Bases de Datos",
            tools: "Herramientas",
        },
        projects: {
            title: "Proyectos Destacados",
            list: [
                {
                    name: "VisitALO - Control de Presencia",
                    desc: "Sistema completo de gestión y control de presencia empresarial con autenticación JWT, roles de usuario y dashboard administrativo para reportes y estadísticas.",
                    tech: [".NET", "Vue.js", "SQL Server", "JWT", "Pagination"],
                    link: "https://github.com/Ryuu-no-Mi/visitALO_Front",
                    img: `${
                        import.meta.env.BASE_URL
                    }assets/proyecto_visitalo.png`,
                },
                {
                    name: "Gestión de Flotas",
                    desc: "Aplicación para administración de flotas vehiculares con seguimiento en tiempo real, mantenimiento predictivo, gestión de conductores y reportes detallados.",
                    tech: [
                        ".NET",
                        "Vue.js",
                        "TypeScript",
                        "SQL Server",
                        "JWT",
                        "Pagination",
                    ],
                    link: "https://github.com/Ryuu-no-Mi/Gestion-de-flotas",
                    img: `${
                        import.meta.env.BASE_URL
                    }assets/proyecto_gestor_de_flotas_2.jpg`,
                },
                {
                    name: "Inmotech Backend",
                    desc: "API RESTful robusta para plataforma inmobiliaria con gestión de propiedades, usuarios, búsqueda avanzada con filtros y sistema de notificaciones.",
                    tech: ["Spring Boot", "MySQL", "REST API", "JWT"],
                    link: "https://github.com/Ryuu-no-Mi/Inmotech-Backend",
                },
            ],
        },
        contact: {
            title: "¿Hablamos?",
            subtitle:
                "Estoy abierto a nuevas oportunidades laborales y colaboraciones",
            email: "Email",
            phone: "Teléfono",
        },
        footer: "Diseñado y desarrollado con",
        education: {
            fp1: "FP GS Desarrollo de Aplicaciones Multiplataforma - IES Las Fuentezuelas, Jaén (2025)",
            fp2: "FP GS Desarrollo de Aplicaciones Web - Medac (2026)",
        },
    },
    en: {
        name: "Jaime Andrés Monserrate Villa",
        username: "Ryuu_no_mi",
        role: "Junior Developer | Java & .NET",
        nav: {
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            greeting: "Hi, I'm",
            subtitle:
                "Developer passionate about creating robust and scalable web solutions",
            cta: "View projects",
            contact: "Contact",
        },
        about: {
            title: "About Me",
            text: "Junior developer with solid knowledge in backend and frontend technologies. I easily adapt to new languages and technologies, and I enjoy working in teams providing efficient solutions. Graduated in Multiplatform Application Development with practical experience in real projects.",
        },
        experience: {
            title: "Work Experience",
            jobs: [
                {
                    company: "AM System S.L",
                    role: "Full Stack Developer",
                    period: "Jun - Sept 2025",
                    type: "EPES Internship",
                    achievements: [
                        "Implementation of authentication and authorization using JWT and roles, strengthening application security",
                        "Built a modular and reusable interface in Vue.js, optimizing frontend development productivity",
                        "Added key features like pagination, filtering and search, improving end-user experience",
                    ],
                    tech: ".NET 8+, Vue.js, Axios, SQL Server, JWT",
                },
                {
                    company: "RK ACM",
                    role: "Full Stack Developer",
                    period: "Mar - Jun 2025",
                    type: "FCT Internship",
                    achievements: [
                        "Development of Android application for real estate property management and visualization",
                        "Maintenance and optimization of WordPress-based corporate website",
                        "Integration of mobile and web development to strengthen the company's digital presence",
                    ],
                    tech: "Spring Boot, Android, MySQL, WordPress",
                },
            ],
        },
        skills: {
            title: "Technical Skills",
            backend: "Backend",
            frontend: "Frontend",
            database: "Databases",
            tools: "Tools",
        },
        projects: {
            title: "Featured Projects",
            list: [
                {
                    name: "VisitALO - Attendance Control",
                    desc: "Complete business attendance management and control system with JWT authentication, user roles and administrative dashboard for reports and statistics.",
                    tech: [".NET", "Vue.js", "SQL Server", "JWT", "Pagination"],
                    link: "https://github.com/Ryuu-no-Mi/visitalo-control",
                },
                {
                    name: "Fleet Management",
                    desc: "Application for vehicle fleet administration with real-time tracking, predictive maintenance, driver management and detailed reports.",
                    tech: [
                        ".NET",
                        "Vue.js",
                        "SQL Server",
                        "TypeScript",
                        "JWT",
                        "REST API",
                    ],
                    link: "https://github.com/Ryuu-no-Mi/gestion-flotas",
                },
                {
                    name: "Inmotech Backend",
                    desc: "Robust RESTful API for real estate platform with property management, users, advanced search with filters and notification system.",
                    tech: ["Spring Boot", "MySQL", "REST API", "JWT"],
                    link: "https://github.com/Ryuu-no-Mi/inmotech-backend",
                },
            ],
        },
        contact: {
            title: "Let's Talk?",
            subtitle: "I'm open to new job opportunities and collaborations",
            email: "Email",
            phone: "Phone",
        },
        footer: "Designed and developed with",
        education: {
            fp1: "Higher Degree in Multiplatform Application Development - IES Las Fuentezuelas, Jaén (2025)",
            fp2: "Higher Degree in Web Application Development - Medac (2026)",
        },
    },
};

export const skillsData = {
    backend: ["Java", "Spring Boot", ".NET", "Python", "API REST", "JWT"],
    frontend: ["Vue.js", "Angular", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    database: ["MySQL", "SQL Server", "PostgreSQL", "SQLite", "MongoDB"],
    tools: ["Git", "AWS EC2", "WordPress", "Postman", "Maven", "Gradle"],
};
