import './about.css';
import aboutImg from '../../assets/about.png'
import { FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation()

    return (
        <section id='about' className='about mx-auto'>
            <h2 className='text-center mb-5'>
                {t('aboutTitle')}
            </h2>
            <div className='d-flex flex-column-reverse flex-md-row align-items-center justify-content-center'>
                <div className='d-flex flex-column row-gap-3'>
                    <p>
                        {t('aboutText1')}
                    </p>
                    <p >
                        {t('aboutText2')}
                    </p>
                    <p>
                        {t('aboutText3')}
                    </p>
                    <a href='#contact' className='contact-about-btn fw-bold btn primary-btn py-2 d-flex align-items-center justify-content-center'>
                        <FaPaperPlane className='me-2' />
                        {t('aboutBtn')}
                    </a>
                </div>
                <img className='about-img mb-5 mb-md-0' src={aboutImg} alt='Woman working on her PC' />
            </div>
        </section>
    )
}