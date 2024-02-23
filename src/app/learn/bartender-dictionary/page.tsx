'use client';

import Image from 'next/image';

import LearnBreadcrumb from '@/components/learn-breadcrump';
import {
  pharagraphClass,
  subtitle2Class,
  titleClass,
} from '@/components/styles';

export default function BartenderDictionaryPage() {
  return (
    <div className='animate-page-enter'>
      <LearnBreadcrumb name='Diccionario' />
      <div className='mx-5'>
        <h1 className={titleClass}>Mini Diccionario del Bartender</h1>
        <p className='text-white text-center text-xl'>
          Conceptos comunes en coctelería
        </p>
        <Image
          alt='Bartender Dictionary'
          className='mx-auto my-10 shadow-lg rounded-t-xl'
          height={400}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708710878/upload-folder/diccionario_del_buen_coctelero_ojcqzg.png'
          width={400}
        />
      </div>
      <div>
        <h3 className={subtitle2Class}>Alambique:</h3>
        <p className={pharagraphClass}>
          Es un aparato destinado a la destilación. Su nombre se deriva de la
          vieja alquimia. Se compone de cuatro partes diferentes: la caldera o
          cucubita (paila metálica o de vidrio), el capitel o cachimba, el
          serpentin o cuello de cisne (para la refrigeración), y la probeta o
          depósito para el producto final.
        </p>
        <h3 className={subtitle2Class}>Añejamiento:</h3>
        <p className={pharagraphClass}>
          Es el proceso por el cual se deja envejecer ciertos alimentos
          especialmente el vino y ciertos aguardientes con el fin de que estos
          adquieran ciertas cualidades que les aporta la madera.
        </p>
        <h3 className={subtitle2Class}>Bebidas alcohólicas:</h3>
        <p className={pharagraphClass}>
          Son todas aquellas que poseen alcohol etílico (etanol), permitido para
          el consumo humano.
        </p>
        <h3 className={subtitle2Class}>Bebidas fermentadas:</h3>
        <p className={pharagraphClass}>
          Son todas aquellas bebidas que pasan por un proceso bioquímico
          natural, en el cual el azúcar que poseen se transforma en alcohol
          gracias a ciertas levaduras alcohogenas que están en el medio ambiente
          o ya sean añadidas, por intervención de la mano del hombre.
        </p>
        <h3 className={subtitle2Class}>Bebidas destiladas o espirituosas:</h3>
        <p className={pharagraphClass}>
          Bebidas alcohólicas obtenidas por la destilación de fermentos. Debido
          a la diferencia del punto de ebullición entre el alcohol y el agua.
          Toman el sabor y aroma de la materia prima fermentada. Todos los
          aguardientes como el Whisky, Pisco, Vodka, Tequila, Aguardiente
          anisado forman parte de esta categoría.
        </p>
        <h3 className={subtitle2Class}>Bebidas Fortificadas o Generosas:</h3>
        <p className={pharagraphClass}>
          Las bebidas fortificadas o generosas son aquellas que han sido
          fermentadas para ser finalmente «fortificadas» mediante adición de
          alcohol vínico para aumentar su graduación alcohólica o alcanzar un
          equilibrio en su sabor. El proceso de fortificación consiste en la
          adición de alcohol (generalmente vínico) a la mezcla para que aumente
          su contenido alcohólico. Entre estas bebidas resaltan algunos vinos
          fortificados como el oporto, jerez, madeira, Marsala, la manzanilla y
          banyuls francés.
        </p>
        <h3 className={subtitle2Class}>Bitter:</h3>
        <p className={pharagraphClass}>
          Tipo de bebida amarga preparada con varias hierbas o raíces, utilizada
          en la preparación de varios cócteles.
        </p>
        <h3 className={subtitle2Class}>Bouquet:</h3>
        <p className={pharagraphClass}>Aroma de un licor.</p>
        <h3 className={subtitle2Class}>Crusta:</h3>
        <p className={pharagraphClass}>
          Decoración con un escarchado de azúcar, sal o cualquier otro
          ingrediente en el borde de la copa o vaso.
        </p>
        <h3 className={subtitle2Class}>Destilación:</h3>
        <p className={pharagraphClass}>
          Proceso mediante el cual se separa el alcohol del agua. El alcohol
          pasa a estado gaseoso antes que el agua. Luego ese vapor vuelve a
          estado líquido ya separado del agua
        </p>
        <h3 className={subtitle2Class}>D.O.C.:</h3>
        <p className={pharagraphClass}>
          Denominación de Origen Controlada. Es una calificación que se emplea
          para proteger ciertos alimentos que, desde tiempos antiguos se
          producen en una zona determinada, contra productores de otras zonas
          que quisieran aprovechar el buen nombre que han creado los originales,
          en un largo tiempo de fabricación o cultivo.
        </p>
        <h3 className={subtitle2Class}>Dry Shake:</h3>
        <p className={pharagraphClass}>
          Agitar los ingredientes en la coctelera sin usar hielo, generalmente
          para hacer espuma.
        </p>
        <h3 className={subtitle2Class}>Fat washing:</h3>
        <p className={pharagraphClass}>
          Es una técnica simple que sirve para saborizar destilados con materia
          grasa. En coctelería arrancó a usarla Don Lee del PDT en Estados
          Unidos
        </p>
        <h3 className={subtitle2Class}>Fermentación Alcohólica:</h3>
        <p className={pharagraphClass}>
          La fermentación alcohólica (o fermentación etílica) es un proceso
          biológico de fermentación en plena ausencia de aire (oxígeno),
          originado por la actividad de algunos microorganismos que procesan los
          hidratos de carbono (por regla general azúcares: como pueden ser por
          ejemplo la glucosa, la fructosa, la sacarosa, el almidón, etc.) para
          obtener como productos finales un alcohol en forma de etanol, dióxido
          de carbono (CO2) en forma de gas y unas moléculas de ATP que consumen
          los propios microorganismos en su metabolismo celular energético
          anaeróbico. El etanol resultante de la fermentación alcohólica se
          emplea en la elaboración de algunas bebidas alcohólicas como el vino,
          la cerveza, la sidra, el cava, etc.
        </p>
        <h3 className={subtitle2Class}>Hielo:</h3>
        <p className={pharagraphClass}>
          Estado sólido del agua e ingrediente básico de los cócteles. Se pueden
          moldear de diversas formas usando moldes (cubos, esferas, etc),
          cuchillos o lijas, picahielos o licuadora (frappé, pilé)
        </p>
        <h3 className={subtitle2Class}>Infusión:</h3>
        <p className={pharagraphClass}>
          Es el proceso en que los vegetales son sumergidos en alcohol de vino u
          otros, en tanques especiales, hasta que estos tomen el sabor y aroma
          deseados.
        </p>
        <h3 className={subtitle2Class}>Licores:</h3>
        <p className={pharagraphClass}>
          Son las bebidas alcohólicas aromatizadas obtenidas por maceración,
          infusión o destilación de diversas materias primas, con alcoholes
          destilados aromatizados o por adiciones de extractos, esencias o
          aromas autorizados, o por la combinación de ambos, coloreados o no,
          con una generosa proporción de azúcar. Teniendo un contenido
          alcohólico que puede variar de acuerdo a la marca. Se diferencian de
          los aguardientes por poseer mayor o menor contenido de azúcares.
        </p>
        <h3 className={subtitle2Class}>Maceración:</h3>
        <p className={pharagraphClass}>
          Método donde se deja sumergida una sustancia sólida en un líquido
          durante un tiempo para extraer de ella las partes solubles. En
          coctelería es depositar materias en un alcohol para intercambiar
          sabores, colores y aromas a temperatura ambiente.
        </p>
        <h3 className={subtitle2Class}>Majar:</h3>
        <p className={pharagraphClass}>
          Deshacer o moler una cosa que tiene algo de humedad aplastándola o
          desmenuzándola.
        </p>
        <h3 className={subtitle2Class}>Milk washing:</h3>
        <p className={pharagraphClass}>
          Proceso para clarificar los cócteles utilizando la leche
        </p>
        <h3 className={subtitle2Class}>Mise en Place:</h3>
        <p className={pharagraphClass}>
          Ensamblaje de todo el equipo e ingredientes en su sitio antes de
          empezar el servicio “A punto, en su sitio”.
        </p>
        <h3 className={subtitle2Class}>Percolación:</h3>
        <p className={pharagraphClass}>
          Maceración intensa donde se disuelven sustancias solubles por lenta
          penetración del alcohol.
        </p>
        <h3 className={subtitle2Class}>Premix:</h3>
        <p className={pharagraphClass}>
          Son mezclas de preparaciones que sirven para preparar diversos
          cocteles
        </p>
        <h3 className={subtitle2Class}>Prebatch:</h3>
        <p className={pharagraphClass}>
          Es la pre mezcla de un cóctel el cual solamente es necesario aplicarle
          un método de elaboración.
        </p>
        <h3 className={subtitle2Class}>Sabor:</h3>
        <p className={pharagraphClass}>
          Es la impresión que causa un alimento u otra sustancia, y está
          determinado principalmente por sensaciones químicas detectadas por el
          gusto (lengua) así como por el olfato (olor). El 60 % de lo que se
          detecta como sabor es procedente de la sensación de olor. Actualmente
          se diferencian 5 sabores: Dulce, Amargo, Ácido, Salado y Umami
        </p>
      </div>
    </div>
  );
}
