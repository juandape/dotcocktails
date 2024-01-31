'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowAltCircleRight, FaCocktail } from 'react-icons/fa';
import Swal from 'sweetalert2';

import BackButton from '@/components/back-button';
import useFetchData from '@/components/fetch-data';

import SubmitButton from './submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/v1/cocktails`;

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
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const getLocalRole = async () => {
      if (typeof window !== 'undefined') {
        const userData = localStorage.getItem('user');
        const { role = '' } = userData ? JSON.parse(userData) : {};
        return role;
      }
    };
    const fetchRole = async () => {
      const localRole = await getLocalRole();
      setUserRole(localRole);
    };
    fetchRole();
  }, []);

  if (loading) {
    return loadingState;
  }

  if (error) {
    return <div>Algo salió mal...{(error as Error).message}</div>;
  }

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      icon: 'warning',
      title: '¿Estás seguro?',
      text: 'No podrás recuperar el cocktail una vez eliminado',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${url}/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'X-User-Role': userRole,
          },
        });
        Swal.fire({
          icon: 'success',
          title: 'Eliminado!',
          text: 'El cocktail ha sido eliminado.',
          timer: 1500,
        });
        location.reload();
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error en la Eliminación!',
          text: `${(error as any).message},
          ${(error as any).response.data.message}`,
          showCloseButton: true,
        });
      }
    }
  };

  const subtitleClass = 'text-peach-fuzz text-xl font-bold mb-2 mt-4';
  const textClass = 'text-white';

  return (
    <>
      <BackButton />
      <div className='text-peach-fuzz text-center mt-20 text-3xl font-bold'>
        {title}
      </div>
      {filteredCocktails.map((cocktail: any) => (
        <div
          className='border-2 border-peach-fuzz bg-gradient-to-t from-black-top to-blue-tp rounded-lg mt-20 w-96 sm:w-1/2 mx-auto p-6'
          key={cocktail._id}
        >
          <div className='text-2xl font-bold text-peach-fuzz text-center mb-6'>
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
          <div className={textClass}>{cocktail.history}</div>
          <div className={subtitleClass}>Metodo de Preparacion</div>
          <div className={textClass}>{cocktail.preparationMethod}</div>
          <div className={subtitleClass}>Vaso o copa</div>
          <div className={textClass}>{cocktail.glass}</div>
          <div className={subtitleClass}>Categoria</div>
          <div className={textClass}>{cocktail.category}</div>
          <div className={subtitleClass}>Contenido de alcohol</div>
          <div className={textClass}>{cocktail.alcoholContent}</div>
          <div className={subtitleClass}>Valor nutricional</div>
          <div className={textClass}>{cocktail.nutritionalValue}</div>
          <div className={subtitleClass}>Ingredientes</div>
          <div className={`flex flex-col ${textClass}`}>
            {cocktail.ingredients.map((ingredient: any) => (
              <span className='flex items-center' key={ingredient}>
                <FaCocktail className='mr-2' />
                {ingredient}
              </span>
            ))}
          </div>
          <div className={subtitleClass}>Adorno</div>
          <div className={textClass}>{cocktail.garnish}</div>
          <div className={subtitleClass}>Preparacion</div>
          <div className={`flex flex-col ${textClass}`}>
            {cocktail.preparation.map((step: any) => (
              <span className='flex items-center' key={step}>
                <FaArrowAltCircleRight className='mr-2' />
                {step}
              </span>
            ))}
          </div>
          {userRole.includes('ADMIN') && (
            <>
              <hr className='my-6' />
              <div className='flex justify-center '>
                <Link href={`/create/cocktails-form?id=${cocktail._id}`}>
                  <div className='mr-4'>
                    <SubmitButton title='Editar' />
                  </div>
                </Link>

                <div>
                  <SubmitButton
                    onClick={() => handleDelete(cocktail._id)}
                    title='Eliminar'
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}
