'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import BackButton from '@/components/back-button';
import useFetchData from '@/components/fetch-data';
import SubmitButton from '@/components/submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/v1/histories`;

export default function GinHistory() {
  const { data: histories, loading, error, loadingState } = useFetchData(url);
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
      text: 'No podrás recuperar la historia una vez eliminado',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarla!',
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
          text: 'La historia ha sido eliminada.',
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

  const titleClass = 'text-3xl font-bold text-center mt-6';
  const subtitleClass = 'text-2xl font-bold mt-6 ml-6';
  const subtitle2Class = 'text-xl font-bold mt-6 ml-6';
  const pharagraphClass = 'text-lg text-justify mx-6';
  const imageClass = 'mt-10 mx-6';

  return (
    <>
      <BackButton />
      <div>
        {histories
          .filter((history: any) => history.nameId === 'gin')
          .map((history: any) => (
            <div
              className='bg-white rounded-lg shadow-lg mt-20 mx-6'
              key={history._id}
            >
              <div className={titleClass}>{history.title}</div>
              <div>
                <Image
                  alt='gin history image'
                  className='mx-auto my-10 shadow-lg'
                  height={300}
                  src={history.images[2]}
                  width={300}
                />
              </div>
              <div className={pharagraphClass}>{history.content1}</div>
              <h2 className={subtitleClass}>Historia</h2>
              <div className={pharagraphClass}>{history.content2}</div>
              <h3 className={subtitle2Class}>El apogeo del Gin</h3>
              <div className={imageClass}>
                <Image
                  alt='histories image1'
                  className='shadow-lg mb-10'
                  height={300}
                  src={history.images[3]}
                  width={300}
                />
              </div>
              <div className={pharagraphClass}>{history.content3}</div>
              <h2 className={subtitleClass}>Preparación</h2>
              <div className={imageClass}>
                <Image
                  alt='histories image1'
                  className='shadow-lg mb-10'
                  height={300}
                  src={history.images[1]}
                  width={300}
                />
              </div>
              <div className={pharagraphClass}>{history.content4}</div>
              <h2 className={subtitleClass}>¿Gin o Ginebra?</h2>
              <div className={pharagraphClass}>{history.content5}</div>
              <h2 className={subtitleClass}>Tipos de Gin</h2>
              <div className={pharagraphClass}>{history.content6}</div>
              <h2 className={subtitleClass}>Botánicos</h2>
              <div className={imageClass}>
                <Image
                  alt='histories image1'
                  className='shadow-lg mb-10'
                  height={300}
                  src={history.images[0]}
                  width={300}
                />
              </div>
              <div className={pharagraphClass}>{history.content7}</div>
            </div>
          ))}
        {userRole.includes('ADMIN') && (
          <>
            <hr className='my-6' />
            {histories
              .filter((history: any) => history.nameId === 'gin')
              .map((history: any) => (
                <div className='flex justify-center mb-10' key={history._id}>
                  <Link href={`/create/history-form?id=${history._id}`}>
                    <div className='mr-4'>
                      <SubmitButton title='Editar' />
                    </div>
                  </Link>

                  <div>
                    <SubmitButton
                      onClick={() => handleDelete(history._id)}
                      title='Eliminar'
                    />
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
}
