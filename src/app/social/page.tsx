import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from 'react-icons/io';

import { socialMediaStyle, titleClass } from '@/components/styles';

export default function SocialNetworkPage() {
  return (
    <div className='animate-page-enter bg-gradient-to-t from-blue-tp to-black-top'>
      <div className='mx-5 pt-10 pb-20'>
        <p className={titleClass}>Encuéntranos en nuestras redes sociales</p>
        <div className='flex text-peach-fuzz m-auto p-4 sm:w-96 w-80'>
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
            href='https://facebook.com/dotcocktails'
            rel='noreferrer'
            target='_blank'
          >
            <IoLogoFacebook className='inline' />
          </a>
          <a
            className={socialMediaStyle}
            href='https://www.instagram.com/dotcocktails/'
            rel='noreferrer'
            target='_blank'
          >
            <IoLogoInstagram className='inline' />
          </a>
        </div>
      </div>
    </div>
  );
}
