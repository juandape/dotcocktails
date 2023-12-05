'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen);
    setSelected('');
  }

  const handleDropdown = (value: string) => {
    setIsOpen(true);
    setSelected(value);
  }

  const menuClass =
    'sm:self-center text-lg font-bold text-white hover:text-gray-600 cursor-pointer duration-500';

  const dropdownClass = isOpen ? 'block' : 'hidden';

  return (
    <nav className='sm:flex w-screen bg-teal-500 px-4 sm:px-20 sm:h-16 fixed'>
      {/* Hamburger Icon for Mobile */}
      <div className='flex items-center sm:hidden duration-500 h-16'>
        <button className='text-white' onClick={toggle}>
          <svg
            className='w-8 h-7'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
            />
          </svg>
        </button>
      </div>

      {/* Logo */}
      <div className='hidden sm:block relative'>
        {/* Your logo or brand */}
        {/* For example: <img src='/logo.png' alt='Logo' className='h-8' /> */}
      </div>

      {/* Menu items */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex sm:w-auto sm:space-x-20 -ml-2 -mt-5 sm:ml-0 sm:mt-0 bg-teal-500 h-40 sm:h-auto sm:px-0 px-4 sm:py-0 py-4`}
        id='menu'
      >
        <div className={`relative ${menuClass}`}>
          <div onClick={() => handleDropdown('historia')}>Historia</div>
          {selected === 'historia' && (
            <div className={`absolute top-7 ms:top-12 left-0 ${dropdownClass}`}>
              <ul className='bg-teal-600 p-4 shadow-xl rounded-md'>
                <li className={menuClass} onClick={toggle}>Cocteleria</li>
                <li className={menuClass} onClick={toggle}>Destilados</li>
                <li className={menuClass} onClick={toggle}>Cocteles</li>
              </ul>
            </div>
          )}
        </div>
        <Link className={menuClass} href={'/cocktailcard'}>
          <div>Recetas</div>
        </Link>
        <Link className={menuClass} href={'/cocktailsform'}>
          <div>Nuevo Cocktail</div>
        </Link>
        <div className={menuClass}>Todo sobre cocteleria</div>
        <div className={menuClass}>Contacto</div>
      </div>
    </nav>
  );
}