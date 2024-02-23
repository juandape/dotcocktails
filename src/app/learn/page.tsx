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
      <div className='flex justify-center'>
        <div className='flex flex-col'>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/learn/basics'
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
            href='/learn/cocktail-family'
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
