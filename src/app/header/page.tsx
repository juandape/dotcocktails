'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import logoBlanco from '@/assets/logoBlanco.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen);
    setSelected('');
  };

  const handleDropdown = (value: string) => {
    if (selected === value && isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setSelected(value);
    }
  };

  const menuClass =
    'sm:self-center text-lg font-bold text-cofee-1 hover:text-muted-clay cursor-pointer duration-500';
  const subMenuClass =
    'bg-peach-fuzz w-60 sm:w-40 sm:shadow-xl px-4 pb-7 sm:pb-4 sm:pt-4 rounded-md';

  const dropdownClass = isOpen ? 'block' : 'hidden';

  return (
    <nav className='sm:flex w-screen bg-peach-fuzz px-4 sm:px-20 sm:h-16 fixed'>
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
      <div className='hidden sm:block relative sm:p-4'>
        {/* Your logo or brand */}
        <Image
          alt='Logo'
          className='h-8 bg-cofee-1 rounded-sm mr-20'
          height={25}
          src={logoBlanco}
          width={35}
        />
      </div>

      {/* Menu items */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex sm:w-auto sm:space-x-20 -ml-2 -mt-5 sm:ml-0 sm:mt-0 bg-peach-fuzz h-50 sm:h-auto sm:px-0 px-4 sm:py-0 py-4`}
        id='menu'
      >
        <div className={`sm:relative ${menuClass}`}>
          <div onClick={() => handleDropdown('historia')}>Historia ▿</div>
          {selected === 'historia' && (
            <div
              className={`sm:absolute top-7 sm:top-10 left-0 ${dropdownClass}`}
            >
              <ul className={subMenuClass}>
                <li className={menuClass} onClick={toggle}>
                  Cocteleria
                </li>
                <li className={menuClass} onClick={toggle}>
                  Destilados
                </li>
                <li className={menuClass} onClick={toggle}>
                  Cocteles
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className={`sm:relative ${menuClass}`}>
          <div onClick={() => handleDropdown('recetas')}>Recetas ▿</div>
          {selected === 'recetas' && (
            <div
              className={`sm:absolute top-7 sm:top-10 left-0 ${dropdownClass}`}
            >
              <ul className={subMenuClass}>
                <li className={menuClass} onClick={toggle}>
                  Gin
                </li>
                <li className={menuClass} onClick={toggle}>
                  Ron
                </li>
                <li className={menuClass} onClick={toggle}>
                  Tequila
                </li>
                <li className={menuClass} onClick={toggle}>
                  Vodka
                </li>
                <li className={menuClass} onClick={toggle}>
                  Whisky
                </li>
                <li className={menuClass} onClick={toggle}>
                  Otros
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* <Link className={menuClass} href={'/cocktailcard'}>
          <div>Recetas</div>
        </Link> */}
        <Link className={menuClass} href={'/cocktailsform'}>
          <div>Nuevo Cocktail</div>
        </Link>
        <div className={menuClass}>Todo sobre cocteleria</div>
        <div className={menuClass}>Contacto</div>
      </div>
    </nav>
  );
}
