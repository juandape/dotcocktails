'use client';

import Image from 'next/image';

import LearnBreadcrumb from '@/components/learn-breadcrump';
import { titleClass } from '@/components/styles';

export default function Glasses() {
  return (
    <div className='animate-page-enter'>
      <LearnBreadcrumb name='Herramientas' />
      <div className='mx-5'>
        <h1 className={titleClass}>Herramientas del bar</h1>
        <p className='text-white text-center'>
          En el mundo de la coctelería, se
          emplean una variedad de herramientas imprescindibles para llevar a
          cabo la preparación de bebidas con precisión y estilo. A continuación,
          te presentamos algunas de estas herramientas esenciales que
          encontrarás en cualquier bar digno de su nombre.
        </p>
        <Image
          alt='tools1'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708712714/upload-folder/Diapositiva1_idyzrj.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='tools2'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708712714/upload-folder/Diapositiva2_zm02dz.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='tools3'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708712714/upload-folder/Diapositiva3_egwutr.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='tools4'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708712714/upload-folder/Diapositiva5_fulftj.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='tools5'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708712714/upload-folder/Diapositiva4_z8alyz.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='tools6'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708712714/upload-folder/Diapositiva6_qebrbs.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='tools7'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708712714/upload-folder/Diapositiva7_e6jd8o.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='tools8'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708712714/upload-folder/Diapositiva8_b85dco.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='tools9'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708712718/upload-folder/Diapositiva9_llhbiu.jpg'
          width={1000}
        />
      </div>
    </div>
  );
}
