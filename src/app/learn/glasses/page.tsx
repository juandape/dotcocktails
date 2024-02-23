'use client';

import Image from 'next/image';
import Link from 'next/link';

import LearnBreadcrumb from '@/components/learn-breadcrump';
import { titleClass } from '@/components/styles';

export default function Glasses() {
  return (
    <div>
      <LearnBreadcrumb name='Cristaleria' />
      <div className='mx-5'>
        <h1 className={titleClass}>Cristalería</h1>
        <p className='text-white text-center'>
          Existen gran variadad de copas y vasos para servir cocteles, cada uno
          tiene una función especifica. A continuación te mostramos algunos de
          los mas comunes.
        </p>
        <p className='text-white text-center'>
          En cada una de las <Link className='text-peach-fuzz hover:text-cofee-1' href='/recipes'>recetas</Link> de los cocteles te
          indicaremos el tipo de vaso que debes utilizar.
        </p>
        <Image
          alt='glasses1'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708709460/upload-folder/Diapositiva13_g7g6yw.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='glasses2'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708709460/upload-folder/Diapositiva15_x7tpef.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='glasses3'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708709460/upload-folder/Diapositiva14_gvoheg.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='glasses3'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708709460/upload-folder/Diapositiva16_dh3x2y.jpg'
          width={1000}
        />
      </div>
    </div>
  );
}
