import Image from 'next/image';
import Link from 'next/link';

import { subtitleClass, titleClass } from '@/components/styles';

export default function HistoryPage() {
  return (
    <div className='animate-page-enter'>
      <nav className='flex'>
        <Link href='/'>
          <div className='text-white hover:underline ml-6 text-xs'>Home</div>
        </Link>
        <span className='mx-2 text-xs text-white'>/</span>
        <span className='text-gray-500 text-xs'>Historias</span>
      </nav>
      <h1 className={titleClass}>Historias</h1>
      <Image
        alt='cocktails'
        className='rounded-xl mx-auto mb-10'
        height={400}
        priority
        src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1709067659/upload-folder/historias_xxycpn.jpg'
        width={400}
      />
      <div className='w-96 mx-auto mb-5'>
        <hr />
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col'>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/history/beer'
          >
            Historia de la Cerveza
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/history/cocktail'
          >
            Historia del Coctel
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/history/gin'
          >
            Historia del Gin
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/history/rum'
          >
            Historia del Ron
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/history/tequila'
          >
            Historia del Tequila
          </Link>
        </div>
        <div className='flex flex-col'>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/history/vodka'
          >
            Historia del Vodka
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/history/whisky'
          >
            Historia del Whisky
          </Link>
          <Link
            className={`hover:text-cofee-1 ${subtitleClass}`}
            href='/history/wine'
          >
            Historia del Vino
          </Link>
        </div>
      </div>
    </div>
  );
}
