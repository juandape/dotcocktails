'use client';

import Link from 'next/link';
import { FaCocktail } from 'react-icons/fa';

import useFetchData from '@/components/fetch-data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/v1/cocktails`;

export default function TopCocktailsPage() {
  const { data: cocktails, loading, loadingState } = useFetchData(url);

  if (loading) {
    return loadingState;
  }

  const subtitleClass =
    'text-peach-fuzz text-xl font-bold text-center mb-4 mt-2';
  const textClass = 'text-white text-center my-5';
  const containerClass =
    'xl:mr-10 border-2 border-peach-fuzz rounded-xl w-64 px-3 hover:bg-gradient-to-t from-black-top to-blue-tp mb-5 mx-auto';

  return (
    <div className='animate-page-enter bg-gradient-to-t from-blue-tp to-black-top'>
      <div className='mx-5 my-10 pt-10'>
        <h1 className='text-3xl xl:text-4xl font-bold text-peach-fuzz xl:mb-10 mt-5 mb-6 flex justify-center'>
          <FaCocktail /> <div className='mx-5'>Cocteles del Mes</div>
          <FaCocktail />
        </h1>
        <div className='xl:flex justify-center '>
          {cocktails &&
            cocktails.map(
              (cocktail: {
                _id: string;
                name: string;
                ingredients: string[];
                image: string;
              }) => {
                return (
                  <div key={cocktail._id}>
                    {cocktail.name === 'Margarita' && (
                      <Link href={`/search/cocktail-search/${cocktail._id}`}>
                        <div className={containerClass}>
                          <div className={subtitleClass}>{cocktail.name}</div>
                          <div className={textClass}>
                            {cocktail.ingredients.map((ingredient: string) => (
                              <span
                                className='flex items-center'
                                key={ingredient}
                              >
                                <div>
                                  <FaCocktail className='mr-2' />
                                </div>
                                {ingredient}
                              </span>
                            ))}
                          </div>
                          <div className='text-white ml-40 text-xs'>
                            Ver mas...
                          </div>
                        </div>
                      </Link>
                    )}
                    {cocktail.name === 'Mojito' && (
                      <Link href={`/search/cocktail-search/${cocktail._id}`}>
                        <div className={containerClass}>
                          <div className={subtitleClass}>{cocktail.name}</div>
                          <div className={textClass}>
                            {cocktail.ingredients.map((ingredient: string) => (
                              <span
                                className='flex items-center'
                                key={ingredient}
                              >
                                <FaCocktail className='mr-2' />
                                {ingredient}
                              </span>
                            ))}
                          </div>
                          <div className='text-white ml-40 text-xs'>
                            Ver mas...
                          </div>
                        </div>
                      </Link>
                    )}

                    {cocktail.name === 'Moscow Mule' && (
                      <Link href={`/search/cocktail-search/${cocktail._id}`}>
                        <div className={containerClass}>
                          <div className={subtitleClass}>{cocktail.name}</div>
                          <div className={textClass}>
                            {cocktail.ingredients.map((ingredient: string) => (
                              <span
                                className='flex items-center'
                                key={ingredient}
                              >
                                <FaCocktail className='mr-2' />
                                {ingredient}
                              </span>
                            ))}
                          </div>
                          <div className='text-white ml-40 text-xs'>
                            Ver mas...
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
}
