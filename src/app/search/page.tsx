'use client';

import React, { useState } from 'react';

import BackButton from '@/components/back-button';
import CocktailCard from '@/components/cocktails-card';
import useFetchData from '@/components/fetch-data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/v1/cocktails`;

export default function Search() {
  const [search, setSearch] = useState('');
  const {
    data: cocktails,
    loading,
    loadingState,
  } = useFetchData(` ${url}?search=${search}`);

  const filteredCocktails = cocktails.filter(
    (cocktail: any) =>
      cocktail.name.toLowerCase().includes(search.toLowerCase()) ||
      cocktail.ingredients.some((ingredient: string) =>
        ingredient.toLowerCase().includes(search.toLowerCase())
      )
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    loadingState;
  };

  return (
    <>
      <BackButton />
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-peach-fuzz text-center sm:my-6 mt-20 mb-6'>
          Encuentra tu cocktail favorito
        </h1>

        <div className='flex items-center justify-center'>
          <input
            className='sm:w-96 w-80 px-3 py-2 mb-6 mx-auto leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
            onChange={handleSearch}
            placeholder='Ingresa palabra clave'
            type='text'
            value={search}
          />
        </div>
      </div>
      {search && !loading && filteredCocktails.length === 0 && (
        <h2 className='text-2xl font-bold text-center text-peach-fuzz dark:text-gray-600'>
          No se encontraron resultados
        </h2>
      )}
      {search && !loading && filteredCocktails.length > 0 && (
        <div>
          {filteredCocktails.map((cocktail: any) => (
            <CocktailCard
              key={cocktail._id}
              nameId={cocktail.nameId}
              title=''
            />
          ))}
        </div>
      )}
    </>
  );
}
