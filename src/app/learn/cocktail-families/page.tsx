'use client';

import Image from 'next/image';

import LearnBreadcrumb from '@/components/learn-breadcrump';
import {
  pharagraphClass,
  subtitle2Class,
  titleClass,
} from '@/components/styles';

export default function CocktailFamiliesPage() {
  return (
    <div className='animate-page-enter'>
      <LearnBreadcrumb name='Familias' />
      <div className='mx-5'>
        <h1 className={titleClass}>Familias de Los Cocteles</h1>
        <p className='text-white xl:text-center text-xl'>
          Se caracterizan por usar ingredientes en común; algunas familias ya no
          existen o no se elaboran, pero es bueno conocerlas. La gran mayoría
          nacieron entre 1820 y 1920 y luego se dejaron de hacer o muchas
          recetas se perdieron debido a la época de la prohibición. Aun así
          existen registros más antiguos de cócteles.
        </p>
        <Image
          alt='cocktails'
          className='mx-auto my-10 shadow-lg rounded-t-xl'
          height={400}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1708989209/upload-folder/cocktails_obkj4y.jpg'
          width={400}
        />
      </div>
      <div>
        <h3 className={subtitle2Class}>Cobblers:</h3>
        <p className={pharagraphClass}>
          son combinaciones que se hacen a base de vinos generosos, aguardientes
          o espumantes combinados con jarabes y licores diersos a elección:
          también son combinados con zumo fresco de limón y se sirven sobre
          hielo trozado directamente en el vaso. La principal característica: al
          final se adornan con fruta de estación, cortada en pequeños cubos; se
          puede cambiar por medias lunas de naranja, rodajas de limón o
          estrellas de carambolo. Contienen: Aguardientes, vinos o espumantes /
          Azúcar / se decora con frutas
        </p>
        <h3 className={subtitle2Class}>Collins:</h3>
        <p className={pharagraphClass}>
          Son combinaciones refrescantes de origen Norteamericano. El primer
          Collins fue creado en Nueva York alrededor de 1874 por Jhon Collins.
          Luego la receta fue añadida al primer libro de coctelería de Jerry
          Thomas «The Bartenders Guide» Contienen: Aguardientes / Sour Mix
          (azúcar-limón) / Agua carbonatada
        </p>
        <h3 className={subtitle2Class}>Coolers:</h3>
        <p className={pharagraphClass}>
          Son combinaciones de origen Estadounidense los cuales llevan como base
          un aguardiente o licor y son completados con alguna bebida
          carbonatada. Su característica principal es que son decorados con
          espirales de limón o naranja dentro del vaso. Contienen: Aguardientes
          o licor / Bebida carbonatada / Piel cítrico
        </p>
        <h3 className={subtitle2Class}>Cup ó clérico:</h3>
        <p className={pharagraphClass}>
          son combinaciones de origen anglosajón, en su preparación se utilizan
          vinos rosados, blancos o espumantes como el champagne, el secreto de
          la preparación está en enfriar los vinos con antelación y luego
          combinarlos con jugos de frutas naturales, jarabe de goma y licores a
          elección. Es decir son combinaciones de inspiración personal, la
          característica es que siempre van a llevar como ingrediente adicional
          fruta de estación finamente picada. Estas combinaciones se suelen
          preparar en recipientes especiales llamados cups. Contienen: Vinos o
          espumantes (fríos) / Licores / Zumos / Frutas / Bebida carbonatada
        </p>
        <h3 className={subtitle2Class}>Crusta:</h3>
        <p className={pharagraphClass}>
          se le atribuyen a Joseph Santini entre 1840 y 1850: apareció por
          primera vez en referencias escritas en la guía de Jerry Thomas en
          1862. Se caracterizan por llevar las copas escarchadas de azúcar y una
          piel de lima o limón. Contienen: Aguardientes / Zumo de cítricos /
          Azúcar / Bitters / Crusta / Piel cítrico
        </p>
        <h3 className={subtitle2Class}>Daisy:</h3>
        <p className={pharagraphClass}>
          son combinaciones de origen norteamericano que se elaboran combinando
          aguardientes, licores diversos a gusto, jugo de limón, jarabe de
          granadina, hielo y se completa con agua con gas. Algunas fórmulas
          incluyen jugos de frutas. Los Daisies tienen una característica que es
          la de llevar también frutas, se sirven en vasos largos con pitillos y
          hielo. Contienen: Aguardientes o licor / Zumo de cítricos / Azúcar /
          Curazao o granadina / Frutas / Agua con gas
        </p>
        <h3 className={subtitle2Class}>EGG – NOGG:</h3>
        <p className={pharagraphClass}>
          Se descubrió por primera vez en el siglo XVII. Pero la palabra eggnog
          se mencionó por primera vez a principios del siglo XIX,
          popularizándose tanto en Inglaterra como en los Estados Unidos. En los
          Estados Unidos, se volvió muy popular donde existía una gran cantidad
          de granjas y productos lácteos, al igual que de ron. El ron llegaba a
          estas costas a través del Comercio Triangular desde el Caribe; por
          consiguiente era más económico que el brandy, cuyos impuestos eran muy
          elevados, u otras bebidas alcohólicas europeas a las que reemplazó.
          Son bebidas de alto poder nutritivo, llevan leche fría o caliente y
          llevan yemas de huevo, un aguardiente base y al final llevan canela o
          nuez moscada. Contienen: Aguardientes / Azúcar / Yema de huevo / Leche
          (lácteo)
        </p>
        <h3 className={subtitle2Class}>Frappés:</h3>
        <p className={pharagraphClass}>
          Son combinaciones refrescantes y de alto poder digestivo. Consiste en
          servir licores o combinaciones sobre hielo granulado, frappé o pilé.
          Los cócteles adoptan el nombre del aguardiente base más la palabra
          frappé. Frappé significa agitado o helado.
        </p>
        <h3 className={subtitle2Class}>Fizz:</h3>
        <p className={pharagraphClass}>
          son una familia de cócteles refrescantes y efervescentes que se
          elaboran combinando aguardientes diersos, siropes, zumos de cítricos y
          se les añade agua de sifón. Algunas fórmulas contienen claras de huevo
          o la yema, o con ambas. Fue mencionado por primera vez en «Bartender’s
          Guide» de Jerry Thomas en 1887. Contienen: Aguardientes / Zumos
          cítricos / Azúcar / Clara de huevo / Agua carbonatada
        </p>
        <h3 className={subtitle2Class}>Flips:</h3>
        <p className={pharagraphClass}>
          son combinaciones de alto poder nutritivo de origen estadounidense,
          cuyo nombre parte de la receta original Porto Flip (palabra incluida
          en el diccionario de Oxford desde 1695), son preparados en base a
          vinos u otros generosos e inclusive licores, yema de huevo, azúcar y
          natas. Pueden beberse a toda hora, siempre que no olvide espolvorear
          con nuez moscada o canela rallada. Contienen: Licor o vino / Azúcar /
          Yema de huevo / Nuez moscada
        </p>
        <h3 className={subtitle2Class}>Fix:</h3>
        <p className={pharagraphClass}>
          son combinaciones elaboradas a base de aguardientes diversos, en
          ocasiones licores, zumo fresco de limón, azúcar impalpable a veces
          claras de huevo y principalmente son completados con agua natural.
          Contienen: Aguardientes o licor / Azúcar / Agua natural / Decorar con
          bayas
        </p>
        <h3 className={subtitle2Class}>Grogs/Toddy:</h3>
        <p className={pharagraphClass}>
          son bebidas de carácter terapéutico que se caracterizan por llevar
          dentro de sus ingredientes infusiones o agua muy caliente, también se
          le agrega zumo de cítricos y aguardientes diversos y son servidos en
          cristalería resistente al calor. Contienen: Aguardientes / Cítrico /
          Azúcar / Agua hirviendo
        </p>
        <h3 className={subtitle2Class}>Highballs:</h3>
        <p className={pharagraphClass}>
          son llamados también «combinaciones americanas», son servidos en vasos
          Highball acompañados de un mezclador. Contienen: Aguardientes / Bebida
          carbonatada (Cubata)
        </p>
        <h3 className={subtitle2Class}>Juleps:</h3>
        <p className={pharagraphClass}>
          son combinaciones refrescantes y de mucha fragancia, se caracterizan
          por llevar hojas de menta o hierbabuena que les proporcionan el
          bouquet que los caracterizan. En su preparación se utilizan
          aguardientes diversos, por lo general zumo de limón y son completados
          con agua con gas, además de llevar hielo granulado (frappé).
          Contienen: Aguardientes / Hierbabuena o menta (se agrega pero no se
          maja) / Azúcar / Agua carbonatada
        </p>
        <h3 className={subtitle2Class}>Mullers:</h3>
        <p className={pharagraphClass}>
          Son combinaciones de agradable aroma y sabor, originarias de Alemania
          modificadas en los Estados Unidos; su principal ingredientes es la
          cerveza muy fría, combinados con zumo de limón y aguardientes o
          licores. Existe una fórmula que se hace con cerveza negra y vino
          espumante. Contienen: Aguardientes o licorers / Zumos / Cerveza
        </p>
        <h3 className={subtitle2Class}>Ponches fríos y calientes «Posset»:</h3>
        <p className={pharagraphClass}>
          son combinaciones de origen Británico que datan desde antes del siglo
          XVI, se preparan a base de leche fría o caliente, licores diversos
          combinados con azúcar y algunas veces zumos de cítricos, el Posset era
          una bebida caliente británica de leche cuajada con vino o cerveza, a
          menudo con especias, que era popular de la época medieval hasta el
          siglo XIX. La palabra se utiliza principalmente en la actualidad un
          postre relacionados con similares a Syllabub. En la edad media, fue
          utilizado como un remedio de resfriados y gripe y fue más una bebida
          que un mousse. Contienen: Aguardientes o licores / Azúcar / Lácteo
          (frío o caliente) / Vino o cerveza / En ocasiones especias
        </p>
        <h3 className={subtitle2Class}>Pousse coffee:</h3>
        <p className={pharagraphClass}>
          son cócteles que se hacen con ingredientes de diferentes densidades y
          colores. Son de alto contenido alcohólico, genrealmente se sirve a
          tempratura ambiente y en recipientes pequeños. Son combinaciones con
          propiedades digestivas. Se popularizaron en EE.UU. y Australia como
          «shooters» Contienen: Aguardientes o licores en capas.
        </p>
        <h3 className={subtitle2Class}>Slings:</h3>
        <p className={pharagraphClass}>
          es casi un término arcaico para referirse a bebidas alcohólicas sin
          amargos o bitters como el angostura por ejemplo. Los que si los
          llevaban eran catalogados como cócteles. Esta diferencia era un poco
          ridícula y como en lo divertido de la coctelería es combinar pues uno
          se acabó mezclando con el otro y finalmente a todos se les acabó
          llamando cocktail. El típico Sling se compone de una base de múltiples
          ingredientes, algunos tipos de alcohol, sabores afrutados, agua (con o
          sin gas) y azúcar. Contienen: Aguardientes / Azúcar / Agua mineral
          (con gas o sin gas)
        </p>
        <h3 className={subtitle2Class}>Smash:</h3>
        <p className={pharagraphClass}>
          son una familia de cócteles de origen estadounidense como alternativa
          corta a los juleps, se utiliza menta o hierbabuena fresca pudiendo
          utilizar otras hierbas aromáticas. Son servidos en vasos Old Fashioned
          o vasos de metal decorados con brotes de menta. Algunos llevan bebidas
          gaseosas pero sin abusar de ellas. Contienen: Aguardientes / Tipos de
          mentas (se machacan) / Azúcar / Agua carbonatada (opcional)
        </p>
        <h3 className={subtitle2Class}>Sours:</h3>
        <p className={pharagraphClass}>
          Son combinaciones de origen latinoamericano (Perú) que recibieron
          inicialmente el nombre de «amargo» por el sabor del limón de pica
          (Producto con denominación de origen Chileno) gracias a su creador
          Eliott Stubb quien era el mayordomo de la embarcación Inglesa
          «Sunshine». Esta combinación hecha llegaría hasta los más famosos y
          visitados clubes y clases sociales del Reino Unido donde lo empezaron
          a llamar Whisky Sour. También se dice que nació en EE.UU. Donde se
          publicó en un diario de Wisconsin pero no hay pruebas de ello.
          Contienen: Aguardientes / Zumo de cítricos / Azúcar / Clara de huevo
          (opcional)
        </p>
        <h3 className={subtitle2Class}>Sangrías:</h3>
        <p className={pharagraphClass}>
          son combinaciones de tradición hispánica, en su elaboración se
          utilizan vinos tintos de mucho cuerpo. Son combinaciones de
          inspiración personal al cual se le agregan zumos de fruta (de carácter
          no muy cítrico) para no matar el vino, a veces siropes, trozos de
          fruta grandes y si debemos reforzar el grado alcohólico utilizar
          alcoholes vínicos. En el caso de los licores ninguno que pueda
          distorsionar el sabor del vino, se pueden utilizar especias y se
          sirven en jarras o tradicionalmente en botas. Contienen: Aguardientes
          / Licores / Frutas / Zumos / Vino tinto / Bebida carbonatada
        </p>
        <h3 className={subtitle2Class}>Shandy:</h3>
        <p className={pharagraphClass}>
          son combinaciones de origen británico, en su preparación se utilizan
          cervezas rubias o claras, combinadas con zumos de frutas cítricas, se
          sirven en vasos altos y se decoran con rodajas de limón. Son bebidas
          de bajo contenido alcohólico. Contienen: Cerveza rubia / Zumos de
          frutas cítricas
        </p>
      </div>
    </div>
  );
}
