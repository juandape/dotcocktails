'use client';

import Image from 'next/image';
import Link from 'next/link';

import LearnBreadcrumb from '@/components/learn-breadcrump';
import { titleClass } from '@/components/styles';

export default function GlassesPage() {
  return (
    <div className='animate-page-enter'>
      <LearnBreadcrumb name='Cristaleria' />
      <div className='mx-5'>
        <h1 className={titleClass}>Cristalería</h1>
        <p className='text-white xl:text-center mx-4'>
          Existen gran variadad de copas y vasos para servir cocteles, cada uno
          tiene una función especifica. A continuación te mostramos algunos de
          los mas comunes.
        </p>
        <p className='text-white xl:text-center mx-4'>
          En cada una de las{' '}
          <Link className='text-peach-fuzz hover:text-cofee-1' href='/recipes'>
            recetas
          </Link>{' '}
          de los cocteles te indicaremos el tipo de vaso que debes utilizar.
        </p>
        <Image
          alt='glasses1'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980728/upload-folder/Diapositiva11_ep0wob.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='glasses2'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980728/upload-folder/Diapositiva12_r5wplk.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='glasses3'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980728/upload-folder/Diapositiva13_kiwebz.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='glasses4'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980729/upload-folder/Diapositiva14_zvmdud.jpg'
          width={1000}
        />
      </div>
    </div>
  );
}
