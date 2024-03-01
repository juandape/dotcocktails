import Link from 'next/link';

import {
  pharagraphClass,
  subtitleClass,
  titleClass,
} from '@/components/styles';

export default function CookiesPolicyPage() {
  return (
    <div className='animate-page-enter'>
      <nav className='flex'>
        <Link href='/'>
          <div className='text-white hover:underline ml-6 text-xs'>Home</div>
        </Link>
        <span className='mx-2 text-xs text-white'>/</span>
        <span className='text-gray-500 text-xs'>Politica de Cookies</span>
      </nav>
      <h1 className={titleClass}> Politicas de Cookies</h1>
      <p className={pharagraphClass}>
        El acceso a este Sitio Web puede implicar la utilización de cookies. Las
        cookies son pequeñas cantidades de información que se almacenan en el
        navegador utilizado por cada Usuario —en los distintos dispositivos que
        pueda utilizar para navegar— para que el servidor recuerde cierta
        información que posteriormente y únicamente el servidor que la
        implementó leerá. Las cookies facilitan la navegación, la hacen más
        amigable, y no dañan el dispositivo de navegación.
      </p>
      <p className={pharagraphClass}>
        Las cookies son procedimientos automáticos de recogida de información
        relativa a las preferencias determinadas por el Usuario durante su
        visita al Sitio Web con el fin de reconocerlo como Usuario, y
        personalizar su experiencia y el uso del Sitio Web, y pueden también,
        por ejemplo, ayudar a identificar y resolver errores.
      </p>
      <p className={pharagraphClass}>
        La información recabada a través de las cookies puede incluir la fecha y
        hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha
        estado en el Sitio Web y los sitios visitados justo antes y después del
        mismo. Sin embargo, ninguna cookie permite que esta misma pueda
        contactarse con el número de teléfono del Usuario o con cualquier otro
        medio de contacto personal. Ninguna cookie puede extraer información del
        disco duro del Usuario o robar información personal. La única manera de
        que la información privada del Usuario forme parte del archivo Cookie es
        que el usuario dé personalmente esa información al servidor.
      </p>
      <p className={pharagraphClass}>
        Las cookies que permiten identificar a una persona se consideran datos
        personales. Por tanto, a las mismas les será de aplicación la Política
        de Privacidad anteriormente descrita. En este sentido, para la
        utilización de las mismas será necesario el consentimiento del Usuario.
        Este consentimiento será comunicado, en base a una elección auténtica,
        ofrecido mediante una decisión afirmativa y positiva, antes del
        tratamiento inicial, removible y documentado.
      </p>
      <h2 className={subtitleClass}>Cookies propias</h2>
      <p className={pharagraphClass}>
        Son aquellas cookies que son enviadas al ordenador o dispositivo del
        Usuario y gestionadas exclusivamente por Dot Cocktails para el mejor
        funcionamiento del Sitio Web. La información que se recaba se emplea
        para mejorar la calidad del Sitio Web y su Contenido y su experiencia
        como Usuario. Estas cookies permiten reconocer al Usuario como visitante
        recurrente del Sitio Web y adaptar el contenido para ofrecerle
        contenidos que se ajusten a sus preferencias.
      </p>
      <h2 className={subtitleClass}>Cookies de redes sociales</h2>
      <p className={pharagraphClass}>
        Dot Cocktails incorpora plugins de redes sociales, que permiten acceder
        a las mismas a partir del Sitio Web. Por esta razón, las cookies de
        redes sociales pueden almacenarse en el navegador del Usuario. Los
        titulares de dichas redes sociales disponen de sus propias políticas de
        protección de datos y de cookies, siendo ellos mismos, en cada caso,
        responsables de sus propios ficheros y de sus propias prácticas de
        privacidad. El Usuario debe referirse a las mismas para informarse
        acerca de dichas cookies y, en su caso, del tratamiento de sus datos
        personales. Únicamente a título informativo se indican a continuación
        los enlaces en los que se pueden consultar dichas políticas de
        privacidad y/o de cookies:
      </p>
      <ul>
        <li className={pharagraphClass}>
          Facebook:{' '}
          <Link
            className='hover:underline'
            href='https://www.facebook.com/policies/cookies/'
          >
            https://www.facebook.com/policies/cookies/
          </Link>
        </li>
        <li className={pharagraphClass}>
          Instagram:{'  '}
          <Link
            className='hover:underline'
            href='https://help.instagram.com/1896641480634370?ref=ig'
          >
            https://help.instagram.com/1896641480634370?ref=ig
          </Link>
        </li>
      </ul>
      <h2 className={subtitleClass}>
        Deshabilitar, rechazar y eliminar cookies
      </h2>
      <p className={pharagraphClass}>
        El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o
        parcialmente— instaladas en su dispositivo mediante la configuración de
        su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox,
        Safari, Explorer). En este sentido, los procedimientos para rechazar y
        eliminar las cookies pueden diferir de un navegador de Internet a otro.
        En consecuencia, el Usuario debe acudir a las instrucciones facilitadas
        por el propio navegador de Internet que esté utilizando. En el supuesto
        de que rechace el uso de cookies —total o parcialmente— podrá seguir
        usando el Sitio Web, si bien podrá tener limitada la utilización de
        algunas de las prestaciones del mismo.
      </p>
    </div>
  );
}
