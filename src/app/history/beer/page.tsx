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

export default function BeerHistory() {
  const { data: histories, loading, error, loadingState } = useFetchData(url);
  const [userRole, setUserRole] = useState('');
  console.log('histories', histories);

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

  return (
    <>
      <BackButton />
      {histories
        .filter((history: any) => history.nameId === 'beer')
        .map((history: any) => (
          <div
            className='bg-white rounded-lg shadow-lg mt-20 mx-6'
            key={history._id}
          >
            <div>{history.title}</div>
            <div>
              <Image
                alt='histories image'
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
      {userRole.includes('ADMIN') && (
        <>
          <hr className='my-6' />
          {histories
            .filter((history: any) => history.nameId === 'beer')
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
    </>
  );
}
