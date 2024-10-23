import './projects.css';
import { BiSolidFileBlank, BiLogoTypescript, BiLogoGithub, BiLogoFirebase, BiLogoJavascript, BiLogoReact, BiWorld, BiLogoHtml5, BiLogoCss3, BiLogoBootstrap, BiLogoVuejs, BiLogoJava, BiLogoSpringBoot, BiLogoPostgresql } from 'react-icons/bi';
import { SiExpress, SiMysql } from "react-icons/si";
import { useTranslation } from 'react-i18next';
import projecthb from '../../assets/projects/projects-homebanking.png';
import projectp from '../../assets/projects/projects-ecommerce.png';
import projectgl from '../../assets/projects/projects-guitarLA.jpeg';
import projecthe from '../../assets/projects/projects-hevent.png';

export default function Projects() {
    const { t } = useTranslation()

    const getTechnologyIcon = (technology) => {
        switch (technology) {
            case 'HTML':
                return <BiLogoHtml5 className='fs-4 me-1' />;
            case 'CSS':
                return <BiLogoCss3 className='fs-4 me-1' />;
            case 'Bootstrap':
                return <BiLogoBootstrap className='fs-4 me-1' />;
            case 'Vue.js':
                return <BiLogoVuejs className='fs-4 me-1' />;
            case 'Java':
                return <BiLogoJava className='fs-4 me-1' />;
            case 'Spring':
                return <BiLogoSpringBoot className='fs-4 me-1' />;
            case 'PostgreSQL':
                return <BiLogoPostgresql className='fs-4 me-1' />;
            case 'React.js': 
            case 'React':
                return <BiLogoReact className='fs-4 me-1' />;
            case 'Firebase':
                return <BiLogoFirebase className='fs-4 me-1' />;
            case 'Javascript':
                return <BiLogoJavascript className='fs-4 me-1' />;
            case 'Typescript':
                return <BiLogoTypescript className='fs-4 me-1' />;
            case 'Express':
                return <SiExpress className='fs-5 me-1' />;
            case 'MySQL':
                return <SiMysql className='fs-4 me-1' />;
            default:
                return <BiSolidFileBlank className='fs-4 me-1' />;
        }
    };

    const projectsData = [
        {
            name: 'Hevent',
            image: projecthe,
            text: [t('projectsCard8Text'), t('projectsCard8Text2')],
            onlineLink: 'https://main--guitar-lav.netlify.app/',
            githubLink: 'https://github.com/ValentinaBS/recipe-nest',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js']
        },
        {
            name: 'Mindhub Bank',
            image: projecthb,
            text: [
                t('projectsCard2Text'),
                t('projectsCard2Text2')
            ],
            onlineLink: '',
            githubLink: 'https://github.com/WeixingOu/Homebanking-SafeHomeBank',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js', 'Java', 'Spring', 'PostgreSQL']
        },
        {
            name: 'Purity',
            image: projectp,
            text: [t('projectsCard1Text'), t('projectsCard1Text2')],
            onlineLink: '',
            githubLink: 'https://github.com/ValentinaBS/e-commerce-mindhub',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js', 'Java', 'Spring', 'PostgreSQL']
        },
        {
            name: 'GuitarLA',
            image: projectgl,
            text: [t('projectsCard8Text'), t('projectsCard8Text2')],
            onlineLink: 'https://main--guitar-lav.netlify.app/',
            githubLink: 'https://github.com/ValentinaBS/recipe-nest',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js']
        },
    ];

    return (
        <section id='projects'>
            <h2 className='text-center mb-5'>
                {t('projectsTitle')}
            </h2>
            <div className='mx-3 mx-md-5 d-flex flex-wrap justify-content-around align-items-center row-gap-5 column-gap-5'>
                {projectsData.map((project, index) => (
                    <article key={index} className='card'>
                        <img src={project.image} className='card-img-top' alt={`Project ${index}`} />
                        <div className='card-body p-4'>
                            <h3 className='card-title'>
                                {project.name}
                            </h3>
                            <div className='my-4'>
                                {project.text.map((text, idx) => (
                                    <p key={idx} className='card-text'>
                                        {text}
                                    </p>
                                ))}
                            </div>
                            <div className='d-flex justify-content-between'>
                                {project.onlineLink &&
                                    <a target='__blank' href={project.onlineLink} className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                        <BiWorld className='fs-5' />
                                        {t('projectsCardBtn')}
                                    </a>
                                }
                                <a target='__blank' href={project.githubLink} className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                    <BiLogoGithub className='fs-5' />
                                    Github
                                </a>
                            </div>
                        </div>
                        <div className='card-footer mt-2 p-4'>
                            <p>{t('projectsCardFooter')}</p>
                            <div className='d-flex flex-wrap column-gap-4 row-gap-3 mb-3'>
                                {project.technologies.map((tech, idx) => (
                                    <div key={idx}>
                                        {getTechnologyIcon(tech)}
                                        <span>{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}