import Image from 'next/image';

import Header from '@/app/header/page';

import Footer from './footer/page';

export default function Home() {
  return (
    <>
      <Header />
      <Image
        alt='dot cocktails logo'
        className='m-auto pt-40'
        height={700}
        priority
        src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1706739163/upload-folder/logoBlanco_k0nyhu.png'
        width={700}
      />
      <Footer />
    </>
  );
}
