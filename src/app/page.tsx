import Image from 'next/image';

import Header from '@/app/header/page';
import logoBlanco from '@/assets/logoBlanco.png';

import Footer from './footer/page';

export default function Home() {
  return (
    <>
      <Header />
      <Image
        alt='dot cocktails logo'
        className='m-auto pt-40'
        height={750}
        src={logoBlanco}
        width={750}
      />
      <Footer />
    </>
  );
}
