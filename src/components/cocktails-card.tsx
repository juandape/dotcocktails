'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowAltCircleRight, FaCocktail } from 'react-icons/fa';
import Swal from 'sweetalert2';

import useFetchData from '@/components/fetch-data';
import { useGetRole } from '@/components/get-role';
import { subtitleCardClass, textCardClass } from '@/components/styles';
import SubmitButton from '@/components/submit-button';

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
  const userRole = useGetRole();

  if (loading) {
    return loadingState;
  }

  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Algo salió mal...',
      text: (error as Error).message,
      showCloseButton: true,
    });
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

  return (
    <div className='animate-page-enter'>
      <nav className='flex'>
        <Link href='/'>
          <div className='text-white hover:underline ml-6 text-xs'>Home</div>
        </Link>
        {title && (
          <>
            <span className='mx-2 text-xs text-white'>/</span>
            <Link href='/recipes'>
              <div className='text-xs text-white'>Recetas</div>
            </Link>

            <span className='mx-2 text-xs text-white'>/</span>
            <span className='text-gray-500 text-xs'>{title}</span>
          </>
        )}
      </nav>
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
          <div className={subtitleCardClass}>Historia</div>
          <div className={textCardClass}>{cocktail.history}</div>
          <div className={subtitleCardClass}>Metodo de Preparacion</div>
          <div className={textCardClass}>{cocktail.preparationMethod}</div>
          <div className={subtitleCardClass}>Vaso o copa</div>
          <div className={textCardClass}>{cocktail.glass}</div>
          <div className={subtitleCardClass}>Categoria</div>
          <div className={textCardClass}>{cocktail.category}</div>
          <div className={subtitleCardClass}>Contenido de alcohol</div>
          <div className={textCardClass}>{cocktail.alcoholContent}</div>
          <div className={subtitleCardClass}>Valor nutricional</div>
          <div className={textCardClass}>{cocktail.nutritionalValue}</div>
          <div className={subtitleCardClass}>Ingredientes</div>
          <div className={`flex flex-col ${textCardClass}`}>
            {cocktail.ingredients.map((ingredient: any) => (
              <span className='flex items-center' key={ingredient}>
                <FaCocktail className='mr-2' />
                {ingredient}
              </span>
            ))}
          </div>
          <div className={subtitleCardClass}>Adorno</div>
          <div className={textCardClass}>{cocktail.garnish}</div>
          <div className={subtitleCardClass}>Preparacion</div>
          <div className={`flex flex-col ${textCardClass}`}>
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
    </div>
  );
}
