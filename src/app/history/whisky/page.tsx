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

export default function WhiskyHistory() {
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
          .filter((history: any) => history.nameId === 'whisky')
          .map((history: any) => (
            <div
              className='border-2 border-peach-fuzz rounded-lg shadow-lg mt-20 mx-6'
              key={history._id}
            >
              <div className={titleClass}>{history.title}</div>
              <div className={imageClass}>
                <Image
                  alt='whisky history image'
                  className='mx-auto my-10 shadow-lg'
                  height={500}
                  src={history.images[4]}
                  width={500}
                />
              </div>
              <h2 className={subtitleClass}>{history.subtitle1}</h2>
              <div className={pharagraphClass}>{history.content1}</div>
              <h2 className={subtitle2Class}>{history.subtitle2}</h2>
              <div className={pharagraphClass}>{history.content2}</div>
              <h3 className={subtitle2Class}>{history.subtitle3}</h3>
              <div className={pharagraphClass}>{history.content3}</div>
              <h2 className={subtitleClass}>{history.subtitle4}</h2>
              <div className={pharagraphClass}>{history.content4}</div>
              <h2 className={subtitleClass}>{history.subtitle5}</h2>
              <div className={pharagraphClass}>{history.content5}</div>
              <h3 className={subtitleClass}>{history.subtitle6}</h3>
              <div className={pharagraphClass}>{history.content6}</div>
              <hr />
              <h3 className={subtitleClass}>{history.subtitle7}</h3>
              <h3 className={subtitleClass}>En Escocia</h3>
              <div className={imageClass}>
                <Image
                  alt='whisky history image'
                  className='mx-auto my-10 shadow-lg'
                  height={300}
                  src={history.images[1]}
                  width={300}
                />
              </div>
              <h2 className={subtitle2Class}>Granos</h2>
              <div className={pharagraphClass}>{history.content7}</div>
              <h3 className={subtitle2Class}>{history.subtitle8}</h3>
              <div className={pharagraphClass}>{history.content8}</div>
              <h2 className={subtitle2Class}>{history.subtitle9}</h2>
              <div className={pharagraphClass}>{history.content9}</div>
              <h3 className={subtitle2Class}>{history.subtitle10}</h3>
              <div className={pharagraphClass}>{history.content10}</div>
              <h3 className={subtitleClass}>{history.subtitle11}</h3>
              <div className={imageClass}>
                <Image
                  alt='whisky history image'
                  className='mx-auto my-10 shadow-lg'
                  height={300}
                  src={history.images[2]}
                  width={300}
                />
              </div>
              <div className={pharagraphClass}>{history.content11}</div>
              <h3 className={subtitle2Class}>{history.subtitle12}</h3>
              <div className={pharagraphClass}>{history.content12}</div>
              <h3 className={subtitle2Class}>{history.subtitle13}</h3>
              <div className={pharagraphClass}>{history.content13}</div>
              <h3 className={subtitle2Class}>{history.subtitle14}</h3>
              <div className={pharagraphClass}>{history.content14}</div>
              <h3 className={subtitle2Class}>{history.subtitle15}</h3>
              <div className={pharagraphClass}>{history.content15}</div>
              <hr />
              <h3 className={subtitleClass}>
                Diferencias entre Whisky y Whiskey
              </h3>
              <div className='sm:flex sm:items-center justify-center'>
                <div className={imageClass}>
                  <Image
                    alt='whisky history image'
                    className='mx-auto my-10 shadow-lg'
                    height={300}
                    src={history.images[5]}
                    width={300}
                  />
                </div>
                <div className={imageClass}>
                  <Image
                    alt='whisky history image'
                    className='mx-auto my-10 shadow-lg'
                    height={300}
                    src={history.images[3]}
                    width={300}
                  />
                </div>
              </div>
              <h2 className={subtitle2Class}>Whisky</h2>
              <div className={pharagraphClass}>
                <ul>
                  <li>Es destilado del grano de cebada</li>
                  <li>
                    Debe ser envejecido en barricas de roble usados americanos o
                    europeos
                  </li>
                  <li>
                    Debe ser destilado con un volumen de alcohol de mas de 95°
                    de volumen de alcohol
                  </li>
                  <li>No debe embotellarse con menos de 40° de alcohol</li>
                  <li>Tiene D.O.C.</li>
                </ul>
              </div>
              <h2 className={subtitle2Class}>Whiskey</h2>
              <div className={pharagraphClass}>
                <ul>
                  <li>
                    La mezcla debe tener al menos 51% de maiz, se puede añadir
                    ademas trigo, centeno o cebada
                  </li>
                  <li>
                    Debe envejecerse en barricas de roble nuevos y carbonizados
                  </li>
                  <li>
                    Debe ser destilado con un volumen de alcohol de mas de 80°
                    de volumen de alcohol
                  </li>
                  <li>
                    Al verterse en el barril no debe sobrepasar los 62.5° de
                    alcohol
                  </li>
                  <li>Se fabrica en Canadá, Estados Unidos e Irlanda.</li>
                </ul>
              </div>
              <h3 className={subtitleClass}>Tipos de Whisky</h3>
              <h2 className={pharagraphClass}>
                <strong>Whisky escocés puro de malta:</strong> se produce
                utilizando una cebada malteada en una destilería individual,
                mediante destilación por lotes en alambiques. Debe ser
                embotellado en Escocia.
              </h2>
              <h2 className={pharagraphClass}>
                <strong>Whisky escocés de grano único:</strong> se destila en
                una destilería individual, pero con la adición de otros cereales
                malteados o sin maltear.
              </h2>
              <h2 className={pharagraphClass}>
                <strong>Whisky escocés mezclado:</strong> una mezcla de uno o
                más whiskies escoceses de malta individuales, con uno o más
                whiskies escoceses de grano único.
              </h2>
              <h2 className={pharagraphClass}>
                <strong>Whisky escocés de malta mezclada:</strong> una mezcla de
                whiskies escoceses de malta única, que se han destilado en más
                de una destilería.
              </h2>
              <h2 className={pharagraphClass}>
                <strong>Whisky escocés de grano mezclado:</strong> una mezcla de
                whiskies escoceses de grano único, que se han destilado en más
                de una destilería.
              </h2>
              <h3 className={subtitleClass}>Tipos de Whiskey</h3>
              <h2 className={pharagraphClass}>
                <strong>Whiskey de centeno:</strong> el uso de centeno imparte
                un perfil picante y audaz en el whiskey y agrega densidad al
                cuerpo final. Debe hacerse con al menos un 51% de centeno, el
                resto es una mezcla de maíz y cebada; con características notas
                picantes y, aunque se puede hacer en cualquier lugar,
                generalmente se produce en Estados Unidos o Canadá..
              </h2>
              <h2 className={pharagraphClass}>
                <strong>Whiskey Bourbon:</strong> la forma más popular de
                whiskey estadounidense, el bourbon consiste en al menos un 51%
                de maíz y utiliza una mezcla de centeno, cebada y trigo en su
                puré o mash bill. Envejecido en barricas nuevas de roble
                carbonizado, durante al menos 2 años; Típicamente compuesto por
                notas dulces de vainilla, caramelo y madera.
              </h2>
              <h2 className={pharagraphClass}>
                <strong>Whiskey Tennessee:</strong> proveniente exclusivamente
                de Tennessee, debe incluir al menos un 51% de maíz y el resto se
                compensa con cebada, centeno o trigo. Similar al bourbon, pero
                se filtra a través de carbón de arce antes de envejecerse en
                barricas de roble. El proceso de filtración le da un sabor más
                suave y dulce, con notas de caramelo y vainilla.
              </h2>
            </div>
          ))}
        {userRole.includes('ADMIN') && (
          <>
            <hr className='my-6' />
            {histories
              .filter((history: any) => history.nameId === 'whisky')
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
    </>
  );
}
