import Link from 'next/link';

export default function Header() {
  const menuClass =
    'self-center text-lg font-bold text-white hover:text-gray-600 cursor-pointer duration-500';

  return (
    <>
      <div className='flex w-screen bg-teal-500 justify-between px-20 h-16 fixed'>
        <div className={menuClass}>Historia</div>
        <Link className={menuClass} href={'/cocktailcard'}>
          <div>Recetas</div>
        </Link>

        <Link className={menuClass} href={'/cocktailsform'}>
          <div>Nuevo Cocktail</div>
        </Link>
        <div className={menuClass}>Todo sobre cocteleria</div>
        <div className={menuClass}>Contacto</div>
      </div>
    </>
  );
}
