import Image from 'next/image';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <div className='animate-page-enter'>
      <div className='bg-gradient-to-t from-blue-tp to-black-top'>
        <hr />
        <div>
          <div className='mt-20 mb-10 xl:flex xl:content-center '>
            <Image
              alt='cocktails'
              className='rounded-xl mx-auto xl:ml-10'
              height={300}
              priority
              src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1709063877/upload-folder/cocktails2_xzt6gi.jpg'
              width={300}
            />
            <p className='text-white text-xl xl:text-2xl mt-5 px-10 ml-4 xl:my-auto xl:mr-10'>
              Sumérgete en nuestra amplia colección de recetas y descubre la
              diversidad de cócteles que ofrecemos en nuestro sitio. Desde
              clásicos atemporales hasta creaciones innovadoras, te invitamos a
              explorar y aprender a preparar tus propios cócteles. Con nuestras
              detalladas instrucciones y consejos de expertos, estarás listo
              para impresionar a tus amigos y familiares con bebidas deliciosas
              y únicas en cualquier ocasión. ¡Desata tu creatividad y
              conviértete en un maestro de la coctelería desde la comodidad de
              tu hogar!
            </p>
          </div>
          <p className='text-white text-sm mt-10 text-right mr-10 mb-5'>
            <Link
              className='hover:text-peach-fuzz cursor-pointer'
              href='/recipes'
            >
              Ver mas...
            </Link>
          </p>
        </div>
      </div>
      <div className='bg-gradient-to-t from-blue-tp to-black-top'>
        <hr />
        <div>
          <div className='mt-20 mb-10 xl:flex xl:content-center '>
            <p className='text-white text-xl xl:text-2xl mt-5 px-10 ml-4 xl:my-auto mb-5'>
              Descubre la fascinante historia detrás de una amplia gama de
              destilados, desde los antiguos procesos de destilación hasta las
              historias intrigantes que rodean a cada bebida, explorando cómo
              han evolucionado a lo largo del tiempo y cómo han influido en la
              cultura y la sociedad en diferentes partes del mundo. Sumérgete en
              el mundo de los destilados y aprende sobre sus orígenes, técnicas
              de producción, roles culturales y contribuciones a la gastronomía
              y el arte de la coctelería.
            </p>
            <Image
              alt='cocktails'
              className='rounded-xl mx-auto xl:mr-10'
              height={300}
              priority
              src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1709067659/upload-folder/historias_xxycpn.jpg'
              width={300}
            />
          </div>
          <p className='text-white text-sm mt-10 text-right mr-10 mb-5'>
            <Link
              className='hover:text-peach-fuzz cursor-pointer'
              href='/history'
            >
              Ver mas...
            </Link>
          </p>
        </div>
      </div>
      <div className='bg-gradient-to-t from-blue-tp to-black-top'>
        <hr />
        <div>
          <div className='mt-20 mb-10 xl:flex xl:content-center '>
            <Image
              alt='cocktails'
              className='rounded-xl mx-auto xl:ml-10'
              height={300}
              priority
              src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1706807531/upload-folder/d70e2609cc94657417ba0de7a5f15715.jpg'
              width={300}
            />
            <p className='text-white text-xl xl:text-2xl mt-5 px-10 ml-4 xl:my-auto xl:mr-10'>
              ¿Quieres dominar la habilidad de preparar cócteles clásicos y
              contemporáneos desde la comodidad de tu hogar? ¿O tal vez estás
              planeando un evento especial y deseas impresionar a tus invitados
              con exquisitas bebidas? En nuestra sección de servicios, te
              brindamos la oportunidad de contratar a un bartender profesional.
              Ya sea para aprender a mezclar los cócteles más destacados o para
              delegar la preparación a manos expertas, nuestro equipo se
              encargará de proporcionarte una experiencia memorable.
            </p>
          </div>
          <p className='text-white text-sm mt-10 text-right mr-10 mb-5'>
            <Link
              className='hover:text-peach-fuzz cursor-pointer'
              href='/services'
            >
              Ver mas...
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
