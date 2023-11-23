import Image from 'next/image';

import logonegro from '@/assets/logonegro.png';
import Header from '@/components/header/page';

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-screen text-center px-80'>
        <Image alt='dot cocktails logo' src={logonegro} />
      </main>
    </>
  );
}
