'use client';

import Image from 'next/image';

import LearnBreadcrumb from '@/components/learn-breadcrump';
import {
  pharagraphClass,
  subtitle2Class,
  subtitleClass,
  titleClass,
} from '@/components/styles';

export default function BarToolsPage() {
  return (
    <div className='animate-page-enter'>
      <LearnBreadcrumb name='Herramientas' />
      <div className='mx-5'>
        <h1 className={titleClass}>Herramientas del bar</h1>
        <p className='text-white text-center'>
          En el mundo de la coctelería, se emplean una variedad de herramientas
          imprescindibles para llevar a cabo la preparación de bebidas con
          precisión y estilo. A continuación, te presentamos algunas de estas
          herramientas esenciales que encontrarás en cualquier bar digno de su
          nombre.
        </p>
        <Image
          alt='cocteleras'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980731/upload-folder/Diapositiva1_z0izye.jpg'
          width={1000}
        />
        <h3 className={subtitle2Class}>COCTELERA AMERICANA O BOSTON:</h3>
        <p className={pharagraphClass}>
          Originaria de los EEUU esta coctelera consta de 2 partes: un vaso de
          metal de 28 oz de capacidad y un vaso de vidrio de ½ litro de
          capacidad. Algunas de estas cocteleras suelen venir con un vaso de
          metal llamado MINI TIN O MIXING TIN en reemplazo del vaso de vidrio.
          Para la categoría Flair es la más recomendada.
        </p>
        <h3 className={subtitle2Class}>
          COBBLER SHAKER O COCTELERA DE TRES CUERPOS:
        </h3>
        <p className={pharagraphClass}>
          Esta coctelera consta de 3 partes: vaso, cubre vaso (que cumple la
          función de colador) y cubre boca (que cumple la función de tapa)
          existen infinidades de modelos antiguos y modernos de esta coctelera,
          preferida por los Japoneses y la más utilizada en la época del apogeo
          de la cultura del Martini. Antes solían venir con una especie de cruz
          de metal por dentro que mantenía aislado el hielo del colador con el
          fin de que no se pegue el hielo.
        </p>
        <h3 className={subtitle2Class}>
          COCTELERA EUROPEA O FRANCESA( PARISIEN):
        </h3>
        <p className={pharagraphClass}>
          Es un tipo de coctelera que consta de dos partes (vaso y tapa) ambas
          partes son de metal. Algunos modelos antiguos venían con un colador
          incorporado en la mitad de la circunferencia de la coctelera (Por
          dentro). Su capacidad ronda los 700 ml
        </p>
        <h3 className={subtitle2Class}>COCTELERA BAHÍA:</h3>
        <p className={pharagraphClass}>
          la coctelera bahía tiene dos cuerpos cerrados, uno de los cuerpos
          tiene 1/6 de la capacidad del cuerpo mayor. Tiene un diseño en
          particular la cual hace que se le distinga por este nombre y siendo la
          más popular en Argentina. Su capacidad puede ser de hasta un litro.
        </p>
        <hr />
        <Image
          alt='coladores'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980724/upload-folder/Diapositiva2_wyuqgr.jpg'
          width={1000}
        />
        <h3 className={subtitle2Class}>COLADOR ORUGA O GUSANILLO:</h3>
        <p className={pharagraphClass}>
          Es un colador de bar que tiene un espiral de metal que rodea casi todo
          el colador que a su vez permite que no pasen restos como pulpas,
          hollejos, pepas y el hielo. Se acopla perfectamente al diámetro de la
          coctelera.
        </p>
        <h3 className={subtitle2Class}>COLADOR JULEP O JULEP STRAINER:</h3>
        <p className={pharagraphClass}>
          Fue creado para colar al consumir los cocktail julepe los cuales
          generalmente llevan hierbas. Actualmente se usa como colador de hielo
          grueso en vaso de composición o en coctelera francesa, bahía o Boston.
        </p>
        <h3 className={subtitle2Class}>COLADOR HAWTHORNE:</h3>
        <p className={pharagraphClass}>
          Es un colador de bar que tiene un espiral de metal que rodea casi todo
          el colador que a su vez permite que no pasen restos como pulpas,
          hollejos, pepas y el hielo. Se acopla perfectamente al diámetro de la
          coctelera Y permite realizar la preparación Boada.
        </p>
        <h3 className={subtitle2Class}>COLADOR DE FINO O DE MALLA:</h3>
        <p className={pharagraphClass}>
          Se usa para retener sedimentos y residuos sólidos muy pequeños.
        </p>
        <hr />
        <Image
          alt='cucharas'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980724/upload-folder/Diapositiva3_w8gcb1.jpg'
          width={1000}
        />
        <h3 className={subtitle2Class}>CUCHARA DE BAR (BAR SPOON):</h3>
        <p className={pharagraphClass}>
          Normalmente es una chuchara más larga que las cucharas tradicionales.
          Suelen tener más de 30cm ya que muchos recipientes utilizados en la
          coctelería llegan a tener hasta 20 cm. Su capacidad de medida suele
          ser de ¼ oz.
        </p>
        <h3 className={subtitle2Class}>MORTERO O PISÓN (MUDDLER):</h3>
        <p className={pharagraphClass}>
          Es indispensable para la elaboración de ciertos cócteles donde
          MACHACAR o MAJAR es necesario. Los hay de acero, fibra o plástico como
          también de madera que son muy poco utilizados.
        </p>
        <h3 className={subtitle2Class}>PALA PARA HIELO:</h3>
        <p className={pharagraphClass}>
          Se utiliza para el servicio de hielo en coctelería, evitando tocar el
          hielo con las manos.
        </p>
        <hr />
        <Image
          alt='sacacorchos y cortes'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980724/upload-folder/Diapositiva5_cmkdnm.jpg'
          width={1000}
        />
        <h3 className={subtitle2Class}>
          SACACORCHOS DE DOS TIEMPOS (CORKSCREW):
        </h3>
        <p className={pharagraphClass}>
          Elemento determinante al momento de efectuar un servicio de vinos en
          forma profesional. Los hay de los más diversos materiales y formas,
          destacándose uno que tiene forma ergonométrica que se adapta
          perfectamente a la forma de la palma de la mano.
        </p>
        <h3 className={subtitle2Class}>ACANALADOR DE CÍTRICOS (ZESTER):</h3>
        <p className={pharagraphClass}>
          Crea «hilos» de piel y tiras de diferentes cítricos con fines
          decorativos.
        </p>
        <h3 className={subtitle2Class}>CUCHILLO DE BAR:</h3>
        <p className={pharagraphClass}>
          Solían venir con una especie de ganchito en la punta del cuchillo para
          facilitar la colocación de decoraciones en los cocteles. Actualmente
          es fundamental contar con algunas clases de cuchillos de diferentes
          tamaños dentro de nuestro equipo de herramientas.
        </p>
        <h3 className={subtitle2Class}>TABLA PLASTICA PARA CORTES:</h3>
        <p className={pharagraphClass}>
          Está construida con un material siliconado que evita que se rompa, se
          raye, se tuerza, se astille o junte suciedad, estando prohibidas las
          de madera. Su único fin es tener comodidad y que permita trabajar de
          forma higiénica el corte de frutas y/o verduras utilizadas en el bar.
        </p>
        <hr />
        <Image
          alt='dosificadores'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980724/upload-folder/Diapositiva4_skrxj6.jpg'
          width={1000}
        />
        <h3 className={subtitle2Class}>
          DOSIFICADOR DE CAÍDA LIBRE (POUR SPOUT):
        </h3>
        <p className={pharagraphClass}>
          Son de mucha importancia para aplicar la técnica del “Free pouring” en
          el servicio de cócteles ya que nos permite optimizar la producción de
          bebidas detrás del bar. La medida oficial de la FBA (Flair Bartender
          Association) es de 285/50. Su uso acompañado de un buen free pouring
          permite crear rutinas de FLAIR.
        </p>
        <h3 className={subtitle2Class}>POUR SPOUT DE ALTA VISCOSIDAD:</h3>
        <p className={pharagraphClass}>
          Los mismos dosificadores de caída libre pero con una medida de 220/50.
          Estos dosificadores al ser más anchos permiten dosificar bebidas de
          alta densidad como siropes o licores crema.
        </p>
        <h3 className={subtitle2Class}>POUR MÉTRICO:</h3>
        <p className={pharagraphClass}>
          Vierte una medida exacta. Los hay desde ½ oz hasta las 2oz
          generalmente. Requiere hacerse chequeos del estado porque con el
          tiempo las medidas se alteran.
        </p>
        <h3 className={subtitle2Class}>
          DOSIFICADORES DE PLASTICO SPILL STOP:
        </h3>
        <p className={pharagraphClass}>
          Sirven para dosificar las bebidas aunque su vertido no siempre es
          exacto. Tienen dos orificios un escape de aire y otro que permite la
          dosificación del líquido, por lo general se usan para rutinas de
          “Exhibition Flair” ya que el escape de aire permite realizar
          movimientos donde la botella dé giros y no derrame la bebida.
        </p>
        <hr />
        <Image
          alt='organizadores'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980725/upload-folder/Diapositiva8_foenmx.jpg'
          width={1000}
        />
        <h3 className={subtitle2Class}>ORGANIZADOR DE BARRA (BAR CADDY):</h3>
        <p className={pharagraphClass}>
          Se utiliza para organizar los elementos complementarios al cocktail
          del servicio al cliente como sorbetes, agitadores, servilletas,
          espaditas, posa vasos y todos los accesorios necesarios para el
          servicio final del cóctel.
        </p>
        <h3 className={subtitle2Class}>
          ORGANIZADOR DE GARNISH (GARNISH BOX):
        </h3>
        <p className={pharagraphClass}>
          Sirve para tener cortadas y separadas las frutas y demás guarniciones
          que utilizaremos para la decoración de los cocteles. Contienen una
          tapa de plástico transparente que permite su fácil visualización y
          conservación, fuera del alcance de residuos.
        </p>
        <h3 className={subtitle2Class}>
          BAR MATS/SERVICE MATS/TAPETES DE GOMA:
        </h3>
        <p className={pharagraphClass}>
          Son tapetes de goma cuya función es la de colectar los líquidos que
          surgen de colocar las cocteleras boca abajo después de enjuagarlas o
          después de realizar el servicio de cócteles. Son antideslizantes para
          la cristalería. También se ponen debajo de la tabla para colectar los
          líquidos de ciertas materias primas o ingredientes. Pueden ser de
          diferentes tamaños.
        </p>
        <h3 className={subtitle2Class}>PISOS DE GOMA (FLOOR MATS):</h3>
        <p className={pharagraphClass}>
          Se trata de un tapete de goma estándar que se coloca sobre el piso,
          siendo sus medidas de 1,50 de largo por 0,90 de ancho. Su función es
          la de evitar roturas y resbalones producidos por líquidos derramados.
          «Equipamiento indispensable» para realizar coreografías de flair en
          forma segura. También permiten retrasar el cansancio ya que las
          jornadas de trabajo suelen ser en ocasiones más de 8 horas.
        </p>
        <hr />
        <Image
          alt='servicio'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980724/upload-folder/Diapositiva6_bcqgpi.jpg'
          width={1000}
        />
        <h3 className={subtitle2Class}>ONZERA (JIGGER):</h3>
        <p className={pharagraphClass}>
          En nuestro medio suelen ser dos copas de acero generalmente u otros
          materiales unidas por su propia base. Las más comunes suelen ser de
          2oz y 1oz de capacidad. Actualmente existen varios modelos de Jigger
          utilizados y de diferentes medidas, entre ellos tenemos: Jigger
          multinivel, Jigger Japonés, Mr. Jigger, Jigger zevro, Jigger estándar,
          tiki jiggers de varios modelos, etc.
        </p>
        <h3 className={subtitle2Class}>SOPLETE O FLAMEADOR (KITCHEN TORCH):</h3>
        <p className={pharagraphClass}>
          Emite una flama de gas butano segura y constante que permite calentar,
          encender o gratinar según sea el caso.
        </p>
        <h3 className={subtitle2Class}>PINZAS VARIAS:</h3>
        <p className={pharagraphClass}>
          Indispensable para realizar un servicio fino y pulcro de hielo,
          decoraciones, ingredientes, etc. Las hay de varios tamaños y
          materiales.
        </p>
        <h3 className={subtitle2Class}>DESTAPADOR ESPADA (SPEED OPENER):</h3>
        <p className={pharagraphClass}>
          Sirve para abrir botellas a gran velocidad, existiendo varios modelos
          y colores.
        </p>
        <hr />
        <Image
          alt='utensilios1'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708981039/upload-folder/diapositiva8.jpg'
          width={1000}
        />
        <h3 className={subtitle2Class}>RAYADOR:</h3>
        <p className={pharagraphClass}>
          Este utensilio nos permite rayar especies y pieles.
        </p>
        <h3 className={subtitle2Class}>PELER:</h3>
        <p className={pharagraphClass}>
          Este utensilio nos permite obtener pieles que posteriormente podremos
          usar para aromatizar y/o decorar.
        </p>
        <h3 className={subtitle2Class}>MOLINILLO – SWIZZLE:</h3>
        <p className={pharagraphClass}>
          Nos permite remover para homogenizar cocktails principalmente en hielo
          pilé.
        </p>
        <h3 className={subtitle2Class}>ESCARCHADOR DE BAR (BAR RIMMER):</h3>
        <p className={pharagraphClass}>
          Se utilizan para realizar «escarchados» o «crustas» en los cócteles
          como la Margarita o el Brandy Crusta. En uno de los compartimientos
          que trae una esponja, se coloca el líquido en el cual se humedecerá el
          borde de la cristalería.
        </p>
        <hr />
        <Image
          alt='utensilios2'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708980728/upload-folder/Diapositiva9_getqje.jpg'
          width={1000}
        />
        <h3 className={subtitle2Class}>MIXING GLASS:</h3>
        <p className={pharagraphClass}>
          Es un vaso de vidrio que se utiliza para mezclar los ingredientes de
          los cócteles antes de servirlos. Existen varios modelos y tamaños. Se utiliza comunmente pra el método de preparación refrescado.
        </p>
        <h3 className={subtitle2Class}>LICUADORA (BLENDER):</h3>
        <p className={pharagraphClass}>
        Es parte de la maquinaria del bar y es necesario para la elaboración de cócteles licuados y frozen. Hay dos categorías: las tipos hogareñas y las profesionales o industriales.
        </p>
        <h3 className={subtitle2Class}>TANQUES PARA JUGOS Y PRE-MIXES (JUICE CONTAINERS):</h3>
        <p className={pharagraphClass}>
        Sirven para colocar jugos, pulpas y pre-mixes, utilizados como base corporizante en la elaboración de la mayoría de cócteles Long drinks. Son muy prácticos a la hora del servicio y han reemplazado a las clásicas jarras de vidrio, brindando mayor seguridad, higiene y precisión durante el servicio. Los hay de distintos tamaños siendo las más usadas las de 1 litro; existiendo también los de ½ litro y 2 litros.
        </p>
        <hr />
        <div className='border-2 border-peach-fuzz rounded-md mt-6 xl:mx-40'>
          <h2 className={subtitleClass}>Mantenimiento de Equipos</h2>
          <ul>
            <li className={pharagraphClass}>
              Después que uses los utensilios, lávalos con agua caliente.
            </li>
            <li className={pharagraphClass}>
              Antes de guardar tus trastes de plástico o metal, sécalos bien. No
              uses trapos de algodón
            </li>
            <li className={pharagraphClass}>
              Procura lavar los utensilios de vidrio, solamente con la esponja
              de lava trastes para evitar ralladuras.
            </li>
            <li className={pharagraphClass}>
              Mantén destapados y limpios todos los conductos, tanto los de
              alimentación como los de desecho de tu bar.
            </li>
            <li className={pharagraphClass}>
              Revisa que no hayan fugas en los sistemas de tubería para evitar
              humedad en los muros y pisos del bar.
            </li>
          </ul>
        </div>
        <div className={titleClass}>
          EL BUEN BARTENDER SIEMPRE TIENE Y CUIDA SUS HERRAMIENTAS
        </div>
      </div>
    </div>
  );
}
