import './footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Footer() {

    return (
        <footer className='text-center pb-4 pt-5'>
            <a target='__blank' className='fs-2' href='https://www.linkedin.com/in/weixingou'>
                <BsLinkedin />
            </a>
            <a target='__blank' className='fs-2 ms-5' href='https://github.com/WeixingOu'>
                <BsGithub />
            </a>
            <p className='text-white mt-3'>
                ©Weixing Ou - 2024
            </p>
        </footer>
    )
}