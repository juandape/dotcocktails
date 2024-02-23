'use client';

import Image from 'next/image';

import LearnBreadcrumb from '@/components/learn-breadcrump';
import { titleClass } from '@/components/styles';

export default function EquivalencesPage() {
  return (
    <div>
      <LearnBreadcrumb name='Equivalencias' />
      <h1 className={titleClass}>Equivalencias</h1>
      <p className='text-white text-center'>
        Equivalencias de las medidas mas usadas en coctelería
      </p>
      <Image
        alt='Equivalencias'
        className='mx-auto my-10 shadow-lg'
        height={1000}
        src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708706541/upload-folder/tabla_equivalencias_m5409c.jpg'
        width={1000}
      />
    </div>
  );
}
