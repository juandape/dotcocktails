import Image from 'next/image';

import Header from '@/app/header/page';
import logonegro from '@/assets/logonegro.png';

export default function Home() {
  return (
    <>
      <Header />
      <Image
        alt='dot cocktails logo'
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        height={750}
        src={logonegro}
        width={750}
      />
    </>
  );
}
