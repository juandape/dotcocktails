import Image from 'next/image';

export default function UnderConstructionPage() {
  return (
    <div className='animate-page-enter'>
      <div className='text-peach-fuzz text-4xl text-center mt-40 mb-10'>
        Comming soon...
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
