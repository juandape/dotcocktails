'use client';

import Image from 'next/image';
import { FaArrowAltCircleRight } from 'react-icons/fa';

import BackButton from '@/components/back-button';
import useFetchData from '@/components/fetch-data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/cocktails`;

export default function CocktailCard({
  nameId,
  title,
}: {
  nameId: string;
  title: string;
}) {
  const { data: cocktails, loading, error, loadingState } = useFetchData(url);
  const filteredCocktails = cocktails.filter(
    (cocktail: any) => cocktail.nameId === nameId
  );

  if (loading) {
    return loadingState;
  }

  if (error) {
    return <div>Algo salió mal...{(error as Error).message}</div>;
  }

  const subtitleClass = 'text-gray-600 text-xl font-bold mb-2 mt-4';

  return (
    <>
      <BackButton />
      <div className='text-peach-fuzz text-center mt-20 text-3xl font-bold'>
        {title}
      </div>
      {filteredCocktails.map((cocktail: any) => (
        <div
          className='bg-white rounded-lg shadow-lg mt-20 w-96 sm:w-1/2 mx-auto p-6'
          key={cocktail._id}
        >
          <div className='text-2xl font-bold text-gray-800 text-center mb-6'>
            {cocktail.name}
          </div>
          <Image
            alt='cocktail'
            className='rounded-t-xl mx-auto mb-6'
            height={300}
            src={cocktail.image}
            width={300}
          />
          <hr className='mb-6' />
          <div className={subtitleClass}>Historia</div>
          <div className='text-gray-600'>{cocktail.history}</div>
          <div className={subtitleClass}>Metodo de Preparacion</div>
          <div>{cocktail.preparationMethod}</div>
          <div className={subtitleClass}>Vaso o copa</div>
          <div>{cocktail.glass}</div>
          <div className={subtitleClass}>Categoria</div>
          <div>{cocktail.category}</div>
          <div className={subtitleClass}>Contenido de alcohol</div>
          <div>{cocktail.alcoholContent}</div>
          <div className={subtitleClass}>Valor nutricional</div>
          <div>{cocktail.nutritionalValue}</div>
          <div className={subtitleClass}>Ingredientes</div>
          <div className='flex flex-col'>
            {cocktail.ingredients.map((ingredient: any) => (
              <span className='flex items-center' key={ingredient}>
                <FaArrowAltCircleRight className='mr-2' />
                {ingredient}
              </span>
            ))}
          </div>
          <div className={subtitleClass}>Adorno</div>
          <div>{cocktail.garnish}</div>
          <div className={subtitleClass}>Preparacion</div>
          <div className='flex flex-col'>
            {cocktail.preparation.map((step: any) => (
              <span key={step}>{step}</span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
