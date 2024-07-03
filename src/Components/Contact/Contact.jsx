import './contact.css';
import { BsPersonFill, BsQuestionCircleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BiSolidMessageAltDetail } from 'react-icons/bi';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation()

    const [submitMessage, setSubmitMessage] = useState('');
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ujrdh08', 'template_lx21mjs', form.current, 'zY84JLP4qM0BkitzZ')
            .then((result) => {
                setSubmitMessage("Your message has been submitted correctly! I'll be in touch with you shortly.")

            }, (error) => {
                console.log(error)
                setSubmitMessage("Your message couldn't be submitted. Try again!")
            });
        
        form.current.reset();
    };

    return (
        <section id='contact'>
            <h2 className='text-center'>
                {t('contactTitle')}
            </h2>
            {submitMessage &&
                <p className='text-center mx-3 mx-md-auto my-5'>{ submitMessage }</p>}
            {!submitMessage &&
                <form className='form mx-auto my-5' ref={form} onSubmit={sendEmail}>
                    <div className='mb-4'>
                        <label htmlFor='fullName' className='form-label d-flex align-items-center column-gap-2'>
                            <BsPersonFill className='fs-5' />
                            {t('contactInputName')}
                        </label>
                        <input type='text' className='form-control' id='fullName' name='name' placeholder='Jane Doe' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='form-label d-flex align-items-center column-gap-2'>
                            <MdEmail className='fs-5' />
                            {t('contactInputEmail')}
                        </label>
                        <input type='email' className='form-control' id='email' placeholder='janedoe@gmail.com' name='email' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='subject' className='form-label d-flex align-items-center column-gap-2'>
                            <BsQuestionCircleFill className='fs-5' />
                            {t('contactInputSubject')}
                        </label>
                        <select defaultValue="" className='form-select' id='subject' name='subject' required>
                            <option value="" disabled>{t('contactInputSubjectPlaceholder')}</option>
                            <option value="I'd like to ask a question">{t('contactInputSubject1')}</option>
                            <option value="I'd like to start a project">{t('contactInputSubject2')}</option>
                            <option value="I'd like to make a proposal">{t('contactInputSubject3')}</option>
                            <option value="Other">{t('contactInputSubject4')}</option>
                        </select>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="message" className='form-label d-flex align-items-center column-gap-2'>
                            <BiSolidMessageAltDetail className='fs-5' />
                            {t('contactInputMessage')}
                        </label>
                        <textarea name="message" placeholder={t('contactInputMessagePlaceholder')} className="form-control" id="message" required></textarea>
                    </div>
                    <input type='submit' className='btn primary-btn w-100 mt-3' value={t('contactBtn')}></input>
                </form>
            }
        </section>
    )
}