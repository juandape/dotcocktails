'use client';

import Image from 'next/image';

import LearnBreadcrumb from '@/components/learn-breadcrump';
import {
  pharagraphClass,
  subtitleClass,
  titleClass,
} from '@/components/styles';

export default function BarToolsPage() {
  return (
    <div className='animate-page-enter'>
      <LearnBreadcrumb name='Herramientas' />
      <div className='mx-5'>
        <h1 className={titleClass}>Herramientas del bar</h1>
        <p className='text-white text-center'>
          En el mundo de la coctelería, se emplean una variedad de herramientas
          imprescindibles para llevar a cabo la preparación de bebidas con
          precisión y estilo. A continuación, te presentamos algunas de estas
          herramientas esenciales que encontrarás en cualquier bar digno de su
          nombre.
        </p>
        <Image
          alt='tools1'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708965565/upload-folder/COCTELERAS_u8femp.jpg'
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
        <hr />
        <div className='border-2 border-peach-fuzz rounded-md mt-6 xl:mx-40'>
          <h2 className={subtitleClass}>Mantenimiento de Equipos</h2>
          <ul>
            <li className={pharagraphClass}>
              Después que uses los utensilios, lávalos con agua caliente.
            </li>
            <li className={pharagraphClass}>
              Antes de guardar tus trastes de plástico o metal, sécalos bien. No
              uses trapos de algodón
            </li>
            <li className={pharagraphClass}>
              Procura lavar los utensilios de vidrio, solamente con la esponja
              de lava trastes para evitar ralladuras.
            </li>
            <li className={pharagraphClass}>
              Mantén destapados y limpios todos los conductos, tanto los de
              alimentación como los de desecho de tu bar.
            </li>
            <li className={pharagraphClass}>
              Revisa que no hayan fugas en los sistemas de tubería para evitar
              humedad en los muros y pisos del bar.
            </li>
          </ul>
        </div>
        <div className={titleClass}>
          EL BUEN BARTENDER SIEMPRE TIENE Y CUIDA SUS HERRAMIENTAS
        </div>
      </div>
    </div>
  );
}
