import './nav.css';
import { LuMenu } from 'react-icons/lu';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Nav() {
    const { i18n, t } = useTranslation()
    const [activeLang, setActiveLang] = useState('en');
    
    const onClickLang = (e) => {
        const lang_code = e.target.innerHTML
        setActiveLang(lang_code)
        i18n.changeLanguage(lang_code)
    }

    return (
        <nav className="animate__animated animate__fadeInDown navbar sticky-top navbar-expand-lg mx-auto mt-lg-4 fs-5 fw-bold">
            <div className="container-fluid">
                <a className="navbar-brand ms-2 ms-md-3" target='__blank' href="https://www.linkedin.com/in/weixingou/">Weixing</a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <LuMenu />
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <div className="navbar-nav text-center my-2 my-md-0 ms-md-5 column-gap-5 row-gap-2">
                        <a className="nav-link hover-underline-animation" href="#home">
                            {t('navHome')}
                        </a>
                        <a className="nav-link hover-underline-animation" href="#about">
                            {t('navAbout')}
                        </a>
                        <a className="nav-link hover-underline-animation" href="#projects">
                            {t('navProjects')}
                        </a>
                        <a className="nav-link hover-underline-animation" href="#contact">
                            {t('navContact')}
                        </a>
                        <div className='d-flex align-items-center justify-content-center'>
                            <button onClick={onClickLang} className={`nav-link ${activeLang === 'en' ? 'active' : ''} text-uppercase`}>
                                en
                            </button>
                            <span>/</span>
                            <button onClick={onClickLang} className={`nav-link ${activeLang === 'es' ? 'active' : ''} text-uppercase`}>
                                es
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}