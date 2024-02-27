import Image from 'next/image';
import Link from 'next/link';

import { subtitleClass, titleClass } from '@/components/styles';

export default function LearnPage() {
  return (
    <div className='animate-page-enter'>
      <nav className='flex'>
        <Link href='/'>
          <div className='text-white hover:underline ml-6 text-xs'>Home</div>
        </Link>
        <span className='mx-2 text-xs text-white'>/</span>
        <span className='text-gray-500 text-xs'>Aprende</span>
      </nav>
      <h1 className={titleClass}>Aprende</h1>
      <Image
        alt='cocktails'
        className='rounded-xl mx-auto mb-10'
        height={400}
        priority
        src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1709069603/upload-folder/bartender_dxc9im.jpg'
        width={400}
      />
      <div className='w-96 mx-auto mb-5'>
        <hr />
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col'>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/under-construction'
          >
            Nociones Básicas
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/learn/glasses'
          >
            Cristalería
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/learn/bar-tools'
          >
            Herramientas del Bar
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/learn/cocktail-families'
          >
            Familias de los Cocteles
          </Link>
        </div>
        <div className='flex flex-col'>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/learn/elaboration-methods'
          >
            Métodos de Elaboración
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/learn/equivalences'
          >
            Tabla de Equivalencias
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/learn/bartender-dictionary'
          >
            Mini diccionario del Bartender
          </Link>
        </div>
      </div>
    </div>
  );
}
