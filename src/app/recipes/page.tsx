import Image from 'next/image';
import Link from 'next/link';

import { subtitleClass, titleClass } from '@/components/styles';

export default function RecipesPage() {
  return (
    <div className='animate-page-enter'>
      <nav className='flex'>
        <Link href='/'>
          <div className='text-white hover:underline ml-6 text-xs'>Home</div>
        </Link>
        <span className='mx-2 text-xs text-white'>/</span>
        <span className='text-gray-500 text-xs'>Recetas</span>
      </nav>
      <h1 className={titleClass}>Recetas</h1>
      <Image
        alt='cocktails'
        className='rounded-xl mx-auto mb-10'
        height={400}
        priority
        src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1709063877/upload-folder/cocktails2_xzt6gi.jpg'
        width={400}
      />
      <div className='w-96 mx-auto mb-5'>
        <hr />
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col'>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/recipes/beer'
          >
            Cocteles con Cerveza
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/recipes/gin'
          >
            Cocteles con Gin
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/recipes/rum'
          >
            Cocteles con Ron
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/recipes/tequila'
          >
            Cocteles con Tequila
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/recipes/wine'
          >
            Cocteles con Vino
          </Link>
        </div>
        <div className='flex flex-col'>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/recipes/vodka'
          >
            Cocteles con Vodka
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/recipes/whisky'
          >
            Cocteles con Whisky
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/recipes/various'
          >
            Otros cocteles
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/recipes/mocktails'
          >
            Mocktails
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/recipes/syrups'
          >
            Jarabes
          </Link>
        </div>
      </div>
    </div>
  );
}
