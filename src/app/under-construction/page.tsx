import Image from 'next/image';
import Link from 'next/link';

export default function UnderConstructionPage() {
  return (
    <div className='animate-page-enter'>
      <nav className='flex'>
        <Link href='/'>
          <div className='text-white hover:underline ml-6 text-xs'>Home</div>
        </Link>
        <span className='mx-2 text-xs text-white'>/</span>
        <span className='text-gray-500 text-xs'>Under Construction</span>
      </nav>
      <div className='text-peach-fuzz text-4xl text-center mt-40 mb-10'>
        Proximamente...
      </div>
      <Image
        alt='under construction'
        className='w-fit-content shadow-lg mx-auto rounded-lg'
        height={1000}
        src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1707495009/upload-folder/under-construction-1000x500_ezazsk.jpg'
        width={1000}
      />
    </div>
  );
}
