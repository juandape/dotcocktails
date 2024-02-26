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
          alt='cocteleras'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980731/upload-folder/Diapositiva1_z0izye.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='coladores'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980724/upload-folder/Diapositiva2_wyuqgr.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='cucharas'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980724/upload-folder/Diapositiva3_w8gcb1.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='sacacorchos y cortes'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980724/upload-folder/Diapositiva5_cmkdnm.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='dosificadores'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980724/upload-folder/Diapositiva4_skrxj6.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='organizadores'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980725/upload-folder/Diapositiva8_foenmx.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='servicio'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980724/upload-folder/Diapositiva6_bcqgpi.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='utensilios1'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708981039/upload-folder/diapositiva8.jpg'
          width={1000}
        />
        <hr />
        <Image
          alt='utensilios2'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980728/upload-folder/Diapositiva9_getqje.jpg'
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
