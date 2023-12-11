import Image from 'next/image';

import Header from '@/app/header/page';
import logoNegro from '@/assets/logoNegro.png';

export default function Home() {
  return (
    <>
      <Header />
      <Image
        alt='dot cocktails logo'
        className='m-auto pt-40'
        height={750}
        src={logoNegro}
        width={750}
      />
    </>
  );
}
