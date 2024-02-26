'use client';

import Image from 'next/image';

import LearnBreadcrumb from '@/components/learn-breadcrump';
import {
  pharagraphClass,
  subtitleClass,
  titleClass,
} from '@/components/styles';

export default function EquivalencesPage() {
  return (
    <div className='animate-page-enter'>
      <LearnBreadcrumb name='Equivalencias' />
      <div className='mx-5'>
        <h1 className={titleClass}>Equivalencias</h1>
        <div className={subtitleClass}>La Onza</div>
        <p className={pharagraphClass}>
          Una onza (oz.) es una medida de estilo americano o anglosajón que
          equivale a 28,33cc (2.8 cl) y se aproxima a 30 ml. Se utiliza para la
          preparación de tragos y cócteles. Es utilizada por la mayoría de los
          bartenders del mundo.
        </p>

        <Image
          alt='Equivalencias'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708706541/upload-folder/tabla_equivalencias_m5409c.jpg'
          width={1000}
        />
      </div>
    </div>
  );
}
