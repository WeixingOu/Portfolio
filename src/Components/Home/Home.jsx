import './home.css';
import profile from '../../assets/profile.jpg'
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation()

    return (
        <header id='home' className='d-flex flex-column-reverse flex-md-row column-gap-5 mx-auto'>
            <img className='animate__animated animate__rollIn header-img mt-5 mt-md-0 mx-auto' src={profile} alt='Profile picture' />
            <div className='animate__animated animate__slideInRight text-center text-md-start'>
                <h1 className='header-title'>
                    {t('homeTitle')}
                </h1>
                <p className='my-4'>
                    {t('homeSubtitle')}
                </p>
                <a href='https://drive.google.com/file/d/1pxpxSGcB8r4cmOY1fifN9i2lipKDljPf/view?usp=sharing' target='__blank' className='btn btn-lg primary-btn me-3'>
                    {t('homePrimaryBtn')}
                </a>
                <a href='#projects' className='btn btn-lg secondary-btn'>
                    {t('homeSecondaryBtn')}
                </a>
            </div>
        </header>
    )
}