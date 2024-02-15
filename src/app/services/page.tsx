import Image from 'next/image';
import Link from 'next/link';

import {
  pharagraphClass,
  subtitle2Class,
  subtitleClass,
  titleClass,
} from '@/components/styles';

export default function Services() {
  return (
    <div className='animate-page-enter'>
      <nav className='flex'>
        <Link href='/'>
          <div className='text-white hover:underline ml-6 text-xs'>Home</div>
        </Link>
        <span className='mx-2 text-xs text-white'>/</span>
        <span className='text-gray-500 text-xs'>Servicios</span>
      </nav>
      <h1 className={titleClass}>Cocktail Experience</h1>
      <div className='mt-20 border-peach-fuzz rounded-xl border-2 sm:mx-40 mx-5'>
        <h2 className='text-center text-peach-fuzz font-bold text-2xl mt-6'>Clases de Coctelería Básica en Casa</h2>
        <div className='w-80 sm:w-96 mx-auto my-6'>
          <Image
            alt='bartender'
            className='rounded-t-xl '
            height={100}
            layout='responsive'
            src={
              'https://res.cloudinary.com/dpvmwsbq8/image/upload/v1706807531/upload-folder/d70e2609cc94657417ba0de7a5f15715.jpg'
            }
            width={100}
          />
        </div>

        <h3 className={subtitle2Class}>En que consiste</h3>
        <p className={pharagraphClass}>
          Es un servicio de enseñanza a domicilio, donde paso a paso con nuestra
          ayuda aprenderás a preparar desde cero tus cócteles favoritos de una
          manera amena, también aprenderás un poco de historia y conceptos
          básicos sobre la coctelería para que sorprendas a tus invitados,
          convirtiéndote en un excelente anfitrión.
        </p>
        <p className={pharagraphClass}>No necesitas conocimientos previos!</p>
        <p className={pharagraphClass}>
          Si no quieres aprender solo, pues entonces invita a tus amigos o
          familiares y disfruta con ellos de esta magnífica experiencia.
        </p>
        <h3 className={subtitle2Class}>Como funciona</h3>
        <p className={pharagraphClass}>
          <strong>Es muy fácil</strong>
        </p>
        <ol className={pharagraphClass}>
          <li>
            1. Elige los cocteles que quieres aprender a preparar (máximo 5), o
            si prefieres déjate sorprender por nosotros.
          </li>
          <li>2. Selecciona la fecha y hora que mejor te convenga.</li>
          <li>
            3. Define el sitio donde quieres recibir la clase presencial (Solo
            Area Metropolitana)
          </li>
          <li>4. O define la fecha y la hora para tu clase virtual</li>
          <li>5. Realiza el pago del servicio.</li>
        </ol>
        <p className={pharagraphClass}>
          <em>
            Si quieres reservar tu clase o tienes dudas,{' '}
            <strong>
              <Link
                className='text-peach-fuzz hover:text-xl duration-500'
                href='/contact'
              >
                Contáctanos
              </Link>
            </strong>
          </em>
        </p>
      </div>
      <div className='mt-20 border-peach-fuzz rounded-xl border-2 sm:mx-40 mx-5'>
        <h2 className={`text-center ${subtitleClass}`}>Eventos</h2>
        <div className='w-80 sm:w-96 mx-auto my-6'>
          <Image
            alt='cocteles'
            className='rounded-t-xl '
            height={100}
            layout='responsive'
            src={
              'https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708033802/upload-folder/eventos_kxuxm4.jpg'
            }
            width={100}
          />
        </div>

        <h3 className={subtitle2Class}>En que consiste</h3>
        <p className={pharagraphClass}>
          Atendemos tus eventos familiares y empresariales. Te preparamos una
          carta de cócteles de acuerdo a tus necesidades.
          Te ofrecemos cócteles con y sin alcohol
        </p>

        <h3 className={subtitle2Class}>Como funciona</h3>
        <p className={pharagraphClass}>
          <em>
            Simplemente{' '}
            <strong>
              <Link
                className='text-peach-fuzz hover:text-xl duration-500'
                href='/contact'
              >
                Contáctanos
              </Link>
            </strong>
            , y te ofreceremos una propuesta de acuerdo a tus necesidades
          </em>
        </p>
      </div>
    </div>
  );
}
