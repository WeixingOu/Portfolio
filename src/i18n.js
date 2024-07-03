import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    navHome: 'Home',
                    navAbout: 'About Me',
                    navProjects: 'Projects',
                    navContact: 'Contact',
                    homeTitle: "Hi! I'm Weixing Ou, a Full-Stack Web Developer",
                    homeSubtitle: "Passionate about technology and development, seeking to apply my skills in a dynamic environment that fosters continuous learning and innovation.",
                    homePrimaryBtn: 'Check my CV',
                    homeSecondaryBtn: 'My Projects',
                    aboutTitle: 'About Me',
                    aboutText1: "I'm an Informatics Engineering student at UBA with a background in customer service and a strong technical foundation in programming and agile methodologies.",
                    aboutText2: "I'm looking to leverage my technology and software development skills in a dynamic environment that encourages innovation and continuous learning.",
                    aboutText3: "Experienced in teamwork, communication, and project management with a knack for problem-solving and adaptability.",
                    aboutBtn: 'Contact Me!',
                    projectsTitle: 'My Projects',

                    projectsCard8Text:'GuitarLA is an e-commerce site specializing in guitars, designed to cater to both novice and professional musicians.',
                    projectsCard8Text2:'Users can explore varieties and easily purchase their ideal instrument.',

                    projectsCard1Text: 'Experience with a range of technologies such as Java, JavaScript, Python, and databases like MySQL and PostgreSQL.',
                    projectsCard1Text2: 'Participation in projects that require intensive collaboration and agile methodologies.',

                    projectsCard2Text:'Mindhub Bank is a digital platform designed to efficiently and securely manage personal finances.',
                    projectsCard2Text2:'This project showcases my experience in both front-end and back-end development, offering an insight into my skills as a Full Stack JAVA developer.',

                    projectsCardFooter: 'Made with:',
                    projectsCardBtn: 'View Online',
                    contactTitle: 'Contact Me',
                    contactInputName: 'Full Name',
                    contactInputEmail: 'Email Address',
                    contactInputSubject: 'What would you like to ask?',
                    contactInputSubjectPlaceholder: '- Select Subject -',
                    contactInputSubject1: "I'd like to ask a question",
                    contactInputSubject2: "I'd like to start a project",
                    contactInputSubject3: "I'd like to make a proposal",
                    contactInputSubject4: 'Other',
                    contactInputMessage: 'Your message',
                    contactInputMessagePlaceholder: "Let's talk about...",
                    contactBtn: 'Send'
                }
            },
            es: {
                translation: {
                    navHome: 'Inicio',
                    navAbout: 'Sobre Mí',
                    navProjects: 'Proyectos',
                    navContact: 'Contacto',
                    homeTitle: "Hola! Soy Weixing Ou, Desarollador Full-Stack",
                    homeSubtitle: "Apasionado por la tecnología y el desarrollo, busco aplicar mis habilidades en un entorno dinámico que promueva el aprendizaje continuo y la innovación.",
                    homePrimaryBtn: 'Ver mi CV',
                    homeSecondaryBtn: 'Mis Proyectos',
                    aboutTitle: 'Sobre Mí',
                    aboutText1: "Soy estudiante de Ingeniería Informática en la UBA con experiencia en atención al cliente y una sólida formación técnica en programación y metodologías ágiles.",
                    aboutText2: "Busco aprovechar mis habilidades en tecnología y desarrollo de software en un entorno dinámico que promueva la innovación y el aprendizaje continuo.",
                    aboutText3: "Experiencia en trabajo en equipo, comunicación y gestión de proyectos con una notable capacidad para la resolución de problemas y adaptabilidad.",
                    aboutBtn: '¡Contáctame!',
                    projectsTitle: 'Mis Proyectos',

                    projectsCard8Text:'GuitarLA es un sitio de comercio electrónico especializado en guitarras, diseñado para atender tanto a músicos novatos como a profesionales.',
                    projectsCard8Text2:'Los usuarios pueden explorar variedades y adquirir su instrumento ideal con facilidad.',

                    projectsCard1Text: 'Experiencia con una gama de tecnologías como Java, JavaScript, Python y bases de datos como MySQL y PostgreSQL.',
                    projectsCard1Text2: 'Participación en proyectos que requieren colaboración intensa y metodologías ágiles.',

                    projectsCard2Text:'Mindhub Bank es una plataforma digital diseñada para gestionar las finanzas personales de manera eficiente y segura.',
                    projectsCard2Text2:'Este proyecto muestra mi experiencia tanto en el desarrollo front-end como en el back-end y ofrece una idea de mis habilidades como desarrolladora Full Stack JAVA.',

                    projectsCardFooter: 'Hecho con:',
                    projectsCardBtn: 'Ver Online',
                    contactTitle: 'Contáctame',
                    contactInputName: 'Nombre Completo',
                    contactInputEmail: 'Correo Electrónico',
                    contactInputSubject: '¿Qué te gustaría preguntar?',
                    contactInputSubjectPlaceholder: '- Selecciona un asunto -',
                    contactInputSubject1: 'Me gustaría hacer una pregunta',
                    contactInputSubject2: 'Me gustaría iniciar un proyecto',
                    contactInputSubject3: 'Me gustaría hacer una propuesta',
                    contactInputSubject4: 'Otro',
                    contactInputMessage: 'Tu mensaje',
                    contactInputMessagePlaceholder: "Hablemos de...",
                    contactBtn: 'Enviar'
                }
            }
        }
    });

export default i18n;
