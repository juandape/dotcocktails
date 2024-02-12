'use client';

import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';

import useFetchData from '@/components/fetch-data';
import { useGetRole } from '@/components/get-role';
import handleDelete from '@/components/handle-delete';
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
      {histories
        .filter((history: any) => history.nameId === 'beer')
        .map((history: any) => (
          <div
            className='border-2 border-peach-fuzz rounded-lg shadow-lg mt-20 mx-6'
            key={history._id}
          >
            <div className={titleClass}>{history.title}</div>
            <div className={imageClass}>
              <Image
                alt='gin history image'
                className='mx-auto my-10 shadow-lg'
                height={300}
                src={history.images[0]}
                width={300}
              />
            </div>
            <h2 className={subtitleClass}>{history.subtitle1}</h2>
            <div className={pharagraphClass}>{history.content1}</div>
            <h2 className={subtitleClass}>{history.subtitle2}</h2>
            <div className={pharagraphClass}>{history.content2}</div>
            <h3 className={subtitle2Class}>{history.subtitle3}</h3>
            <div className={pharagraphClass}>{history.content3}</div>
            <h2 className={subtitleClass}>{history.subtitle4}</h2>
            <div className={pharagraphClass}>{history.content4}</div>
            <h2 className={subtitleClass}>{history.subtitle5}</h2>
            <div className={pharagraphClass}>{history.content5}</div>
            <h3 className={subtitleClass}>{history.subtitle6}</h3>
            <div className={pharagraphClass}>{history.content6}</div>
            <h3 className={subtitle2Class}>{history.subtitle7}</h3>
            <div className={pharagraphClass}>{history.content7}</div>
            <h3 className={subtitle2Class}>{history.subtitle8}</h3>
            <div className={pharagraphClass}>{history.content8}</div>
            <h2 className={subtitle2Class}>{history.subtitle9}</h2>
            <div className={pharagraphClass}>{history.content9}</div>
            <h3 className={subtitleClass}>Tipos de Cerveza</h3>
            <h3 className={subtitle2Class}>{history.subtitle10}</h3>
            <div className={pharagraphClass}>{history.content10}</div>
            <h3 className={subtitle2Class}>{history.subtitle11}</h3>
            <div className={pharagraphClass}>{history.content11}</div>
            <h3 className={subtitle2Class}>{history.subtitle12}</h3>
            <div className={pharagraphClass}>{history.content12}</div>
            <h3 className={subtitle2Class}>{history.subtitle13}</h3>
            <div className={pharagraphClass}>{history.content13}</div>
            <h3 className={subtitle2Class}>{history.subtitle14}</h3>
            <div className={pharagraphClass}>{history.content14}</div>
            <h3 className={subtitle2Class}>{history.subtitle15}</h3>
            <div className={pharagraphClass}>{history.content15}</div>
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
