import Image from 'next/image';

import BackButton from '@/components/back-button';

export default function UnderConstructionPage() {
  return (
    <>
      <BackButton />
      <div className='flex flex-col items-center  h-screen'>
        <div className='text-peach-fuzz text-4xl my-10'>Comming soon...</div>
        <Image
          alt='under construction'
          className='h-fit-content w-fit-content shadow-lg'
          height={2500}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1707495009/upload-folder/under-construction-1000x500_ezazsk.jpg'
          width={2500}
        />
      </div>
    </>
  );
}
