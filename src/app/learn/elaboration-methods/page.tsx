'use client';

import Image from 'next/image';

import LearnBreadcrumb from '@/components/learn-breadcrump';
import {
  pharagraphClass,
  subtitle2Class,
  subtitleClass,
  titleClass,
} from '@/components/styles';

export default function ElaborationMethodsPage() {
  return (
    <div className='animate-page-enter'>
      <LearnBreadcrumb name='Métodos de Elaboración' />
      <div className='mx-5'>
        <h1 className={titleClass}>Métodos de Elaboración de los Cocteles</h1>
        <p className={pharagraphClass}>
          En los métodos de elaboración la principal característica es la
          impresión de energía (cinética, calórica o mecánica) para incorporar
          los ingredientes, diluirlos u homogeneizarlos, y afectar el cambio de
          temperatura. De lo anterior podemos concluir la siguiente ecuación
          para los cocteles:
        </p>
        <p className='text-white text-center text-xl'>
          {' '}
          <strong>
            (INGREDIENTES + HIELO) X ENERGÍA = DILUCION, HOMOGENIZACION,
            TEMPERATURA, OXIGENACION
          </strong>
        </p>
        <h2 className={subtitleClass}>Principales Métodos de Elaboración</h2>
        <h3 className={subtitle2Class}>Directo:</h3>
        <p className={pharagraphClass}>
          En este metodo preparamos el coctel directamente en el vaso que
          ofrecemos la bebida. La energia de preparacion es baja, por lo general
          lo usamos cuando los ingredientes son pocos y son faciles de mezclar.
          Ej: Mojito, Gin & Tonic, Old Fashioned
        </p>
        <Image
          alt='directo'
          className='mx-auto my-10 shadow-lg rounded-t-xl'
          height={400}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708984827/upload-folder/Imagen1_rmzyxk.gif'
          width={400}
        />
        <hr />
        <h3 className={subtitle2Class}>Agitado - Shake:</h3>
        <p className={pharagraphClass}>
          En este metodo preparamos el coctel usando una coctelera para mezclar
          los ingredientes. La energia de preparacion es alta, por lo general lo
          usamos cuando los ingredientes son de diferentes densidades. Ej:
          Margarita, Daiquirí, Gin Basil Smash
        </p>
        <Image
          alt='shake'
          className='mx-auto my-10 shadow-lg rounded-t-xl'
          height={400}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708984828/upload-folder/Imagen2_nizv8a.jpg'
          width={400}
        />
        <hr />
        <h3 className={subtitle2Class}>Refrescado - Stir:</h3>
        <p className={pharagraphClass}>
          En este metodo preparamos el coctel usando un Mixing Glass para
          mezclar los ingredientes. La energia de preparacion es baja, por lo
          general lo usamos cuando los ingredientes son de baja densidad y
          viscosidad y no requieren mucha dilución. Ej: Martini
        </p>
        <Image
          alt='stir'
          className='mx-auto my-10 shadow-lg rounded-t-xl'
          height={400}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708984822/upload-folder/pasabahce-timeless-cocktail-mixing-glass-492772_gyrebo.jpg'
          width={400}
        />
        <hr />
        <h3 className={subtitle2Class}>Licuado - Blend:</h3>
        <p className={pharagraphClass}>
          En este metodo preparamos el coctel usando una licuadora para mezclar
          los ingredientes. La energia de preparacion es alta, por lo general lo
          usamos cuando los ingredientes son de de diferentes densidades o
          solidos y cuando se quiere un acabado frozen. Ej: Piña Colada
        </p>
        <Image
          alt='blend'
          className='mx-auto my-10 shadow-lg rounded-t-xl'
          height={400}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708984827/upload-folder/Imagen3_km6ltz.jpg'
          width={400}
        />
        <hr />
        <h3 className={subtitle2Class}>Swizzle:</h3>
        <p className={pharagraphClass}>
          En este metodo preparamos el coctel usando un molinillo o baton lele
          para mezclar los ingredientes. La energia de preparacion es media, por
          lo general lo usamos cuando los ingredientes son de de diferentes
          densidades que se mezclan en hielo pilé. Ej: Tropical punch
        </p>
        <Image
          alt='blend'
          className='mx-auto my-10 shadow-lg rounded-t-xl'
          height={400}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708984822/upload-folder/swizzle_nwnk25.jpg'
          width={400}
        />
        <hr />
        <h3 className={subtitle2Class}>Boada - Rolado:</h3>
        <p className={pharagraphClass}>
          Este metodo es usado comunmente con ingredientes que se mezclan facil y requieren oxigenación. La energia de preparacion es media -
          baja. Ej: Vinos, jugos vegetales.
        </p>
        <Image
          alt='blend'
          className='mx-auto my-10 shadow-lg rounded-t-xl'
          height={400}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708984823/upload-folder/escanciado_jga7db.jpg'
          width={400}
        />
      </div>
    </div>
  );
}
