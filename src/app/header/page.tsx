'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuClass =
    'self-center text-lg font-bold text-white hover:text-gray-600 cursor-pointer duration-500';

  return (
    <nav className='flex w-screen bg-teal-500 justify-between px-20 h-16 fixed'>
      <div className={menuClass} onClick={toggle}>
        <div>Historia</div>
        <div className={isOpen ? 'block' : 'hidden'}>
          <ul>
            <li className={menuClass}>Cocteleria</li>
            <li className={menuClass}>Destilados</li>
            <li className={menuClass}>Cocteles</li>
          </ul>
        </div>
      </div>
      <Link className={menuClass} href={'/cocktailcard'}>
        <div>Recetas</div>
      </Link>

      <Link className={menuClass} href={'/cocktailsform'}>
        <div>Nuevo Cocktail</div>
      </Link>
      <div className={menuClass}>Todo sobre cocteleria</div>
      <div className={menuClass}>Contacto</div>
    </nav>
  );
}
