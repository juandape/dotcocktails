'use client';

import Image from 'next/image';

import BackButton from '@/components/back-button';
import useFetchData from '@/components/fetch-data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/v1/histories`;

export default function CocktailHistory() {
  const { data: histories, loading, error, loadingState } = useFetchData(url);

  if (loading) {
    return loadingState;
  }

  if (error) {
    return <div>Algo salió mal...{(error as Error).message}</div>;
  }
  return (
    <div>
      <BackButton />
      {histories
        .filter((history: any) => history.nameId === 'cocktail')
        .map((history: any) => (
          <div
            className='bg-white rounded-lg shadow-lg mt-20 mx-6'
            key={history._id}
          >
            <div>{history.title}</div>
            <div>
              <Image
                alt='cocktail'
                className='rounded-t-lg'
                height={300}
                src={history.images[0]}
                width={300}
              />
            </div>
            <div>{history.subtitle}</div>
            <div>{history.content1}</div>
            <div>{history.content2}</div>
            <div>{history.content3}</div>
            <div>{history.content4}</div>
            <div>{history.content5}</div>
          </div>
        ))}
    </div>
  );
}
