'use client';

import Image from 'next/image';

import BackButton from '@/components/back-button';
import useFetchData from '@/components/fetch-data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/cocktails`;

export default function BeerCocktails() {
  const { data: cocktails, loading, error, loadingState } = useFetchData(url);

  if (loading) {
    return loadingState;
  }

  if (error) {
    return <div>Algo salió mal...{(error as Error).message}</div>;
  }

  return (
    <div>
      <BackButton />
      {cocktails
        .filter((cocktail: any) => cocktail.nameId === 'beer')
        .map((cocktail: any) => (
          <div className='bg-white rounded-lg shadow-lg mt-20' key={cocktail._id}>
            <div className='p-4'>
              <h2 className='text-2xl font-bold text-gray-800'>
                {cocktail.name}
              </h2>
              <Image
                alt='cocktail'
                className='rounded-t-lg'
                height={300}
                src={cocktail.image}
                width={300}
              />
              <p>
                <strong>Historia</strong>
              </p>
              <p className='mt-2 text-gray-600'>{cocktail.history}</p>
              <p>
                <strong>Ingredientes</strong>
              </p>
              <p className='flex flex-col'>
                {cocktail.ingredients.map((ingredient: any) => (
                  <span key={ingredient}>{ingredient}</span>
                ))}
              </p>
              <p>
                <strong>Preparacion</strong>
              </p>
              <p className='flex flex-col'>
                {cocktail.preparation.map((step: any) => (
                  <span key={step}>{step}</span>
                ))}
              </p>
              <div className='mt-4 flex justify-between'>
                <div className='flex items-center'>
                  <span className='text-sm text-gray-600'>Calificación:</span>
                  <span className='ml-2 text-sm text-gray-600'>
                    {cocktail.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
