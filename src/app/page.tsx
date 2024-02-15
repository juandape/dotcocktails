'use client';

import Image from 'next/image';

import AgeVerificationAlert from '@/components/age-verification';

import Footer from './footer/page';

export default function Home() {
  return (
    <>
      <AgeVerificationAlert onConfirm={() => {}} />
      <Image
        alt='dot cocktails logo'
        className='m-auto pt-20'
        height={700}
        priority
        src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1706739163/upload-folder/logoBlanco_k0nyhu.png'
        width={700}
      />
      <Footer />
    </>
  );
}
