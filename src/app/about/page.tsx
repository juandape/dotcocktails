import BackButton from '@/components/back-button';

export default function AboutPage() {

  const subtitleClass = 'text-3xl text-peach-fuzz mt-6 mb-2';
  const paragraphClass = 'text-lg mb-4 sm:text-justify text-white';
  return (
    <>
      <BackButton />
      <div className='sm:mx-20 mx-4'>
        <div className='text-center text-6xl sm:my-10 my-20 text-white animate-pulse'>
          <strong>Hola Amig@</strong>
        </div>
        <div className='text-center text-4xl mb-10 text-peach-fuzz'>
          <strong>Bienvenido a nuestro sitio!</strong>
        </div>
        <div className={subtitleClass}>
          <strong>Quiénes somos</strong>
        </div>
        <p className={paragraphClass}>
          La coctelería ha sido nuestro hobby desde hace mucho años atrás, y
          siempre pensamos que no necesariamente debes ir a un lugar
          especializado como un bar o una taberna para disfrutar de un buen
          cóctel, a veces se quiere pasar una velada agradable con nuestra
          pareja, amigos o familiares en la comodidad del hogar, por eso
          decidimos crear nuestra empresa, que nace en el 2019 en la ciudad de
          Medellín (Antioquia – Colombia), buscando satisfacer esas necesidades
          de las personas que disfrutan de la coctelería y que sin salir de su
          hogar, puedan disfrutar de una agradable experiencia.
        </p>
        <div className={subtitleClass}>
          <strong>Nuestra Misión</strong>
        </div>
        <p className={paragraphClass}>
          Brindar a nuestros clientes las mejores experiencias de coctelería en
          sus reuniones familiares y de amigos, también en sus veladas y
          eventos, ofreciendo siempre productos diseñados de acuerdo a cada
          necesidad y con la mejor calidad
        </p>
        <div className={subtitleClass}>
          <strong>Nuestra Visión</strong>
        </div>
        <p className={paragraphClass}>
          Ser en el 2023 la empresa mejor reconocida que brinde experiencias de
          coctelería en los hogares
        </p>
        <div className={subtitleClass}>
          <strong>Nuestros Valores</strong>
        </div>
        <ul className='text-white text-lg'>
          <li>Cumplimento</li>
          <li>Calidad</li>
          <li>Honestidad</li>
        </ul>
        <div className={subtitleClass}>
          <strong>Nuestros Servicios</strong>
        </div>
        <p className={paragraphClass}>
          <strong className='text-xl text-peach-fuzz'>Cocktail Experience &#8211;</strong> Te ofrecemos nuestro
          servicio de enseñanza a domicilio o en linea, donde paso a paso con nuestra ayuda
          aprenderás a preparar tus cócteles favoritos de una manera amena,
          aprenderás un poco de historia y de conceptos básicos sobre la
          coctelería para que sorprendas a tus invitados, convirtiéndote en un
          excelente anfitrión. Si no quieres aprender solo, pues entonces invita
          a tus amigos o familiares y disfruta con ellos de esta magnífica
          experiencia.
        </p>
        <p className={paragraphClass}>
          <strong className='text-xl text-peach-fuzz'>Cócteles a Domicilio &#8211;</strong> Disfruta de tus veladas o tus
          fiestas con nuestros cócteles, escoge los que mas te gusten de
          nuestras recetas te los preparamos y te los llevamos listos a
          donde quieras.
        </p>
        <p className={paragraphClass}>
          <strong className='text-xl text-peach-fuzz'>Eventos &#8211;</strong> Y por supuesto! Vamos a tus eventos y
          te preparamos una carta de cócteles de acuerdo a tus necesidades
        </p>
        <div className={subtitleClass}>
          <strong>Recorre nuestro sitio</strong>
        </div>
        <p className={paragraphClass}>
          En nuestro sitio encontrarás información básica sobre coctelería para
          que conozcas, mejores o actualices tus conocimientos.
        </p>
        <p className={paragraphClass}>
          Tenemos una gran cantidad de recetas tanto de cócteles clásicos y
          modernos, así como de jarabes y pre-mixes básicos para que los
          aprendas a preparar fácilmente en tu casa como todo un profesional,
          también te enseñamos un poco de historia, donde conocerás como se
          crearon y cómo se elaboran actualmente las diferentes bebidas que son
          base para tus mezclas.
        </p>
        <p className={paragraphClass}>
          En nuestros diferentes posts, te proporcionamos información sobre
          cuáles son las herramientas y los diferentes tipos de cristalería que
          necesitas para tu barra.
        </p>
        <p className={paragraphClass}>
          Conoce aspectos técnicos como la clasificación de los cócteles, sus
          familias, que métodos de elaboración existen y una sencilla tabla de
          equivalencia para que puedas preparar tus mezclas de manera precisa,
          sin importar el sistema métrico que uses.
        </p>
        <p className={paragraphClass}>
          En nuestro mini diccionario, encuentra la definición de palabras
          técnicas que aplicamos en coctelería y que veras en las diferentes
          publicaciones.
        </p>
        <p className={paragraphClass}>
          Frecuentemente salimos a buscar nueva información para actualizar
          nuestro contenido, al igual que estamos añadiendo constantemente
          recetas nuevas, así que cada vez que nos visites encontrarás algo
          diferente. Solo navega por nuestro sitio y descubre todo lo que te
          podemos ofrecer.
        </p>
        <p className={paragraphClass}>
          Así que sin mas palabras, prepárate a entrar en un mundo lleno color y
          sabor
        </p>
      </div>
    </>
  );
}
