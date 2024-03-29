import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMdMail,
} from 'react-icons/io';

import GeneralBreadcrumb from '@/components/general-breadcrump';
import { socialMediaStyle } from '@/components/styles';
import SubmitButton from '@/components/submit-button';

export default function ContactPage() {
  const labelStyle = 'block mb-2 text-sm font-bold text-peach-fuzz';
  const inputStyle =
    'w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline';

  return (
    <div className='animate-page-enter'>
      <GeneralBreadcrumb name='Contacto' />
      <div className='flex mx-auto mt-20 sm:mt-20 border-peach-fuzz rounded-xl border-2 sm:w-96 w-80'>
        <div className='m-auto'>
          <div className='p-4'>
            <h2 className='text-4xl font-bold text-peach-fuzz text-center'>
              Contacto
            </h2>
            <p className='text-peach-fuzz w-70 my-6 text-center'>
              Escribenos y te responderemos lo mas pronto posible
            </p>
            <form>
              <div className='mt-4'>
                <label className={labelStyle}>Nombre</label>
                <input
                  className={inputStyle}
                  id='name'
                  placeholder='Nombre'
                  required
                  type='text'
                />
              </div>
              <div className='mt-4'>
                <label className={labelStyle}>Correo</label>
                <input
                  className={inputStyle}
                  id='email'
                  placeholder='correo@mail.com'
                  required
                  type='email'
                />
              </div>
              <div className='mt-4'>
                <label className={labelStyle}>Celular</label>
                <input
                  className={inputStyle}
                  id='celular'
                  placeholder='+57 1234567890'
                  required
                  type='number'
                />
              </div>
              <div className='mt-4'>
                <label className={labelStyle}>Mensaje</label>
                <textarea
                  className={inputStyle}
                  id='message'
                  placeholder='Mensaje'
                  required
                />
              </div>
              <SubmitButton title='Enviar' />
            </form>
          </div>
        </div>
      </div>
      <p className='text-peach-fuzz text-center mt-5'>
        O encuéntranos en nuestras redes sociales
      </p>
      <div className='flex text-peach-fuzz m-auto mt-4 p-4 border-peach-fuzz rounded-xl border-2 sm:w-96 w-80'>
        <a className={socialMediaStyle} href='mailto:dotcocktails@gmail.com'>
          <IoMdMail className='inline' />
        </a>
        <a
          className={socialMediaStyle}
          href='http://wa.link/a82yfj'
          rel='noreferrer'
          target='_blank'
        >
          <IoLogoWhatsapp className='inline' />
        </a>
        <a
          className={socialMediaStyle}
          href='https://www.instagram.com/dotcocktails/'
          rel='noreferrer'
          target='_blank'
        >
          <IoLogoInstagram className='inline' />
        </a>
        <a
          className={socialMediaStyle}
          href='https://facebook.com/dotcocktails'
          rel='noreferrer'
          target='_blank'
        >
          <IoLogoFacebook className='inline' />
        </a>
      </div>
    </div>
  );
}
