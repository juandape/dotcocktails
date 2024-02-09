'use client';

import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';

import BackButton from '@/components/back-button';
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

export default function RumHistory() {
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
    <>
      <BackButton />
      <div>
        {histories
          .filter((history: any) => history.nameId === 'tequila')
          .map((history: any) => (
            <div
              className='border-2 border-peach-fuzz rounded-lg shadow-lg mt-20 mx-6'
              key={history._id}
            >
              <div className={titleClass}>{history.title}</div>
              <div className={imageClass}>
                <Image
                  alt='tequila history image'
                  className='mx-auto my-10 shadow-lg'
                  height={500}
                  src={history.images[3]}
                  width={500}
                />
              </div>
              <h2 className={subtitleClass}>{history.subtitle1}</h2>
              <div className={pharagraphClass}>{history.content1}</div>
              <h2 className={subtitle2Class}>{history.subtitle2}</h2>
              <div className={pharagraphClass}>{history.content2}</div>
              <h3 className={subtitle2Class}>{history.subtitle3}</h3>
              <div className={pharagraphClass}>{history.content3}</div>
              <hr />
              <h2 className={subtitleClass}>{history.subtitle4}</h2>
              <div className={pharagraphClass}>{history.content4}</div>
              <h2 className={subtitle2Class}>{history.subtitle5}</h2>
              <div className='sm:flex sm:items-center sm:justify-center'>
                <div className={imageClass}>
                  <Image
                    alt='agave'
                    className='my-10 shadow-lg'
                    height={300}
                    src={history.images[0]}
                    width={300}
                  />
                </div>
                <div className={imageClass}>
                  <Image
                    alt='pinas cortadas'
                    className='my-10 shadow-lg'
                    height={300}
                    src={history.images[2]}
                    width={300}
                  />
                </div>
              </div>
              <div className={pharagraphClass}>{history.content5}</div>
              <h3 className={subtitle2Class}>{history.subtitle6}</h3>
              <div className={pharagraphClass}>{history.content6}</div>
              <h3 className={subtitle2Class}>{history.subtitle7}</h3>
              <div className={pharagraphClass}>{history.content7}</div>
              <h3 className={subtitle2Class}>{history.subtitle8}</h3>
              <div className={pharagraphClass}>{history.content8}</div>
              <h2 className={subtitle2Class}>{history.subtitle9}</h2>
              <div className={imageClass}>
                  <Image
                    alt='alambique'
                    className='my-10 shadow-lg'
                    height={300}
                    src={history.images[1]}
                    width={300}
                  />
                </div>
              <div className={pharagraphClass}>{history.content9}</div>
              <hr />
              <h3 className={subtitleClass}>{history.subtitle10}</h3>
              <div className={imageClass}>
                  <Image
                    alt='tragos de tequila'
                    className='my-10 shadow-lg'
                    height={300}
                    src={history.images[4]}
                    width={300}
                  />
                </div>
              <div className={pharagraphClass}>{history.content10}</div>
              <h3 className={pharagraphClass}>{history.subtitle11}</h3>
              <div className={pharagraphClass}>{history.content11}</div>
              <h3 className={subtitleClass}>{history.subtitle12}</h3>
              <div className={pharagraphClass}>{history.content12}</div>
              <h3 className={pharagraphClass}>{history.subtitle13}</h3>
              <div className={pharagraphClass}>{history.content13}</div>
            </div>
          ))}
        {userRole.includes('ADMIN') && (
          <>
            <hr className='my-6' />
            {histories
              .filter((history: any) => history.nameId === 'tequila')
              .map((history: any) => (
                <div className='flex justify-center mb-10' key={history._id}>
                  <Link href={`/create/history-form?id=${history._id}`}>
                    <div className='mr-4'>
                      <SubmitButton title='Editar' />
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
    </>
  );
}
