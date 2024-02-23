'use client';

import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';

import useFetchData from '@/components/fetch-data';
import { useGetRole } from '@/components/get-role';
import handleDelete from '@/components/handle-delete';
import HistoryBreadcrumb from '@/components/history-breadcrump';
import {
  imageClass,
  pharagraphClass,
  subtitle2Class,
  subtitleClass,
  titleClass,
} from '@/components/styles';
import SubmitButton from '@/components/submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/v1/histories`;

export default function BeerHistory() {
  const { data: histories, loading, error, loadingState } = useFetchData(url);
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

  const onDelete = async (id: string) => {
    handleDelete(id, url, userRole);
  };

  return (
    <div className='animate-page-enter'>
      <HistoryBreadcrumb nameId='cocktail' />
      {histories
        .filter((history: any) => history.nameId === 'cocktail')
        .map((history: any) => (
          <div
            className='border-2 border-peach-fuzz rounded-lg shadow-lg mt-20 mx-6 py-5'
            key={history._id}
          >
            <div className={titleClass}>{history.title}</div>
            <div className={imageClass}>
              <Image
                alt='cocktails history image'
                className='mx-auto my-10 shadow-lg'
                height={500}
                src={history.images[0]}
                width={500}
              />
            </div>
            <h2 className={subtitleClass}>{history.subtitle1}</h2>
            <div className='sm:flex'>
              <div className='sm:flex sm:flex-col'>
                <div className={pharagraphClass}>{history.content1}</div>
                <div className={imageClass}>
                  <Image
                    alt='cocktail glass'
                    className='mx-auto -mt-20 shadow-lg'
                    height={200}
                    src={history.images[5]}
                    width={200}
                  />
                </div>
              </div>
              <div className='sm:flex sm:flex-col'>
                <h2 className={subtitleClass}>{history.subtitle2}</h2>
                <div className={pharagraphClass}>{history.content2}</div>
                <Image
                  alt='cock fight'
                  className='mx-auto mb-10 shadow-lg'
                  height={300}
                  src={history.images[1]}
                  width={300}
                />
              </div>
            </div>
            <hr />
            <h3 className={subtitle2Class}>{history.subtitle3}</h3>
            <div className='sm:flex'>
              <div className='sm:flex sm:flex-col'>
                <div className={pharagraphClass}>{history.content3}</div>
                <Image
                  alt='feathers'
                  className='mx-auto shadow-lg'
                  height={300}
                  src={history.images[4]}
                  width={300}
                />
              </div>
              <div className='sm:flex sm:flex-col'>
                <div className={pharagraphClass}>{history.content4}</div>
                <div className='mx-6'>
                  <Image
                    alt='street'
                    className='mx-auto shadow-lg'
                    height={400}
                    src={history.images[2]}
                    width={400}
                  />
                </div>
              </div>
            </div>

            <h2 className={subtitleClass}>{history.subtitle5}</h2>
            <div className={pharagraphClass}>{history.content5}</div>
            <h3 className={subtitleClass}>{history.subtitle6}</h3>
            <div className={pharagraphClass}>{history.content6}</div>
            <h3 className={subtitle2Class}>{history.subtitle7}</h3>
            <div className={pharagraphClass}>{history.content7}</div>
            <h3 className={`text-center ${subtitle2Class}`}>
              {history.subtitle8}
            </h3>
          </div>
        ))}
      {userRole.includes('ADMIN') && (
        <>
          <hr className='my-6' />
          {histories
            .filter((history: any) => history.nameId === 'cocktail')
            .map((history: any) => (
              <div className='flex justify-center mb-10' key={history._id}>
                <Link href={`/create/history-form?id=${history._id}`}>
                  <div className='mr-4'>
                    {/* <SubmitButton title='Editar' /> */}
                  </div>
                </Link>

                <div>
                  <SubmitButton
                    onClick={() => onDelete(history._id)}
                    title='Eliminar'
                  />
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}
