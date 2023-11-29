'use client';

import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/cocktails`;

export default function CocktailCardPage() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const res = await axios.get(url);
        setCocktails(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCocktails();
  }, []);

  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        {cocktails.map((cocktail: any) => (
          <div className='bg-white rounded-lg shadow-lg' key={cocktail._id}>
            <Image
              alt='cocktail'
              className='rounded-t-lg'
              src={cocktail.image}
            />
            <div className='p-4'>
              <h2 className='text-2xl font-bold text-gray-800'>
                {cocktail.name}
              </h2>
              <p><strong>Historia</strong></p>
              <p className='mt-2 text-gray-600'>{cocktail.history}</p>
              <p><strong>Ingredientes</strong></p>
              <p className='flex flex-col'>{cocktail.ingredients.map((ingredient: any) => (
                <span key={ingredient}>{ingredient}</span>
              ))

              }</p>
              <p><strong>Preparacion</strong></p>
              <p className='flex flex-col'>{cocktail.preparation.map((step: any) => (
                <span key={step}>{step}</span>
              ))}</p>
              <div className='mt-4 flex justify-between'>
                <div className='flex items-center'>
                  <div className='text-sm font-bold text-gray-700'>
                    {cocktail.category}
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='text-sm font-bold text-gray-700'>
                    {cocktail.glass}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
