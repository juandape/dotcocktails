'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GoPerson } from 'react-icons/go';

import logoBlanco from '@/assets/logoBlanco.png';
import Modal from '@/components/modal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    'sm:self-center text-lg font-bold text-peach-fuzz hover:text-cofee-1 cursor-pointer duration-500';
  const subMenuClass =
    'sm:bg-gradient-to-b from-black-top to-blue-tp w-60 sm:w-40 sm:shadow-xl px-4 pb-7 sm:pb-4 sm:pt-4 rounded-md';

  const dropdownClass = isOpen ? 'block' : 'hidden';

  return (
    <nav className='sm:flex w-screen bg-gradient-to-b from-black-top to-blue-tp px-4 sm:px-20 sm:h-16 fixed'>
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

      <div className='hidden font-extrabold sm:block relative sm:p-4'>
        <Image
          alt='Logo'
          className='h-8 mr-20'
          height={55}
          src={logoBlanco}
          width={40}
        />
      </div>

      {/* Menu items */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex sm:w-auto sm:space-x-20 -ml-2 -mt-5 sm:ml-0 sm:mt-0 sm:bg-gradient-to-b from-black-top to-blue-tp h-50 sm:h-auto sm:px-0 px-4 sm:py-0 py-4`}
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
        <div className={menuClass}>Acerca de</div>
        <Link className={menuClass} href={'contact'}>
          <div>Contacto</div>
        </Link>
        <button
          className={`font-extrabold sm:border-2 sm:border-peach-fuzz sm:rounded-full hover:border-cofee-1 ${menuClass}`}
          onClick={openModal}
        >
          <GoPerson />
        </button>
        {isModalOpen && <Modal isOpen={false} onClose={closeModal} />}
      </div>
    </nav>
  );
}
