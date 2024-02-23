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

export default function VodkaHistory() {
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
      <HistoryBreadcrumb nameId='vodka' />
      {histories
        .filter((history: any) => history.nameId === 'vodka')
        .map((history: any) => (
          <div
            className='border-2 border-peach-fuzz rounded-lg shadow-lg mt-20 mx-6'
            key={history._id}
          >
            <div className={titleClass}>{history.title}</div>
            <div className={imageClass}>
              <Image
                alt='vodkas'
                className='mx-auto my-10 shadow-lg'
                height={600}
                src={history.images[1]}
                width={600}
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
            <h2 className={subtitle2Class}>{history.subtitle5}</h2>
            <div className={pharagraphClass}>{history.content5}</div>
            <h3 className={subtitle2Class}>{history.subtitle6}</h3>
            <div className='sm:flex sm:items-center'>
              <div className='mx-6'>
                <Image
                  alt='alambique'
                  className='shadow-lg'
                  height={300}
                  src={history.images[0]}
                  width={300}
                />
              </div>
              <div className={`sm:w-fit ${pharagraphClass}`}>
                {history.content6}
              </div>
            </div>
            <h3 className={subtitle2Class}>{history.subtitle7}</h3>
            <div className={pharagraphClass}>{history.content7}</div>
            <hr />
            <h3 className={subtitleClass}>{history.subtitle8}</h3>
            <div className={pharagraphClass}>{history.content8}</div>
            <h2 className={subtitle2Class}>{history.subtitle9}</h2>
            <div className='sm:flex sm:items-center'>
              <div className='mx-6'>
                <Image
                  alt='vodka centeno'
                  className='shadow-lg'
                  height={200}
                  src={history.images[2]}
                  width={200}
                />
              </div>
              <div className={`sm:w-fit ${pharagraphClass}`}>
                {history.content9}
              </div>
            </div>
            <h3 className={subtitle2Class}>{history.subtitle10}</h3>
            <div className='sm:flex sm:items-center'>
              <div className='mx-6'>
                <Image
                  alt='vodka melaza'
                  className='shadow-lg'
                  height={200}
                  src={history.images[3]}
                  width={200}
                />
              </div>
              <div className={`sm:w-fit ${pharagraphClass}`}>
                {history.content10}
              </div>
            </div>
            <h3 className={subtitle2Class}>{history.subtitle11}</h3>
            <div className='sm:flex sm:items-center'>
              <div className='mx-6'>
                <Image
                  alt='vodka papa'
                  className='shadow-lg'
                  height={200}
                  src={history.images[4]}
                  width={200}
                />
              </div>
              <div className={`sm:w-fit ${pharagraphClass}`}>
                {history.content11}
              </div>
            </div>
            <h3 className={subtitle2Class}>{history.subtitle12}</h3>
            <div className='sm:flex sm:items-center mb-4'>
              <div className='mx-6'>
                <Image
                  alt='vodka trigo'
                  className='shadow-lg'
                  height={200}
                  src={history.images[5]}
                  width={200}
                />
              </div>
              <div className={`sm:w-fit ${pharagraphClass}`}>
                {history.content12}
              </div>
            </div>
            <hr />
            <h3 className={subtitleClass}>{history.subtitle13}</h3>
            <div className={subtitle2Class}>Neutro:</div>
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
            .filter((history: any) => history.nameId === 'vodka')
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
