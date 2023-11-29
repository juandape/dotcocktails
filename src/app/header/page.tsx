'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuClass =
    'self-center text-lg font-bold text-white hover:text-gray-600 cursor-pointer duration-500';

  const dropdownClass = isOpen ? 'block' : 'hidden';

  return (
    <nav className='flex w-screen bg-teal-500 justify-between px-20 h-16 fixed'>
      <div className={`relative ${menuClass}`}>
        <div onClick={toggle}>
          Historia
        </div>
        <div className={`absolute top-12 left-0 ${dropdownClass}`}>
          <ul className='bg-teal-500 p-4 shadow-xl rounded-md'>
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
