'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GoPerson } from 'react-icons/go';

import logoBlanco from '@/assets/logoBlanco.png';
import Modal from '@/components/login-modal';

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
    'xl:self-center 2xl:text-lg text-sm font-bold text-peach-fuzz hover:text-cofee-1 cursor-pointer duration-500';
  const subMenuClass =
    'xl:bg-gradient-to-b from-black-top to-blue-tp w-60 xl:w-60 xl:shadow-xl px-4 pb-7 xl:pb-4 xl:pt-4 rounded-md';

  const dropdownClass = isOpen ? 'block' : 'hidden';

  return (
    <nav className='xl:flex xl:w-screen xl:justify-center bg-gradient-to-b from-black-top to-blue-tp px-4 xl:px-20 xl:h-16 fixed'>
      {/* Hamburger Icon for Mobile */}
      <div className='flex items-center xl:hidden duration-500 h-16'>
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

      <div className='hidden font-extrabold xl:block relative xl:p-4'>
        <Image
          alt='Logo'
          className='h-8 mr-20'
          height={40}
          src={logoBlanco}
          width={40}
        />
      </div>

      {/* Menu items */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } xl:flex xl:w-auto xl:space-x-20 -ml-2 -mt-5 xl:ml-0 xl:mt-0 xl:bg-gradient-to-b from-black-top to-blue-tp h-50 xl:h-auto xl:px-0 px-4 xl:py-0 py-4`}
        id='menu'
      >
        <div className={`xl:relative ${menuClass}`}>
          <div onClick={() => handleDropdown('historia')}>Historia ▿</div>
          {selected === 'historia' && (
            <div
              className={`xl:absolute top-7 xl:top-10 left-0 ${dropdownClass}`}
            >
              <ul className={subMenuClass}>
                <Link
                  className={menuClass}
                  href={'/history/cocktail'}
                  onClick={toggle}
                >
                  <li>Historia del Cocktail</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/history/beer'}
                  onClick={toggle}
                >
                  <li>Historia de la Cerveza</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/history/gin'}
                  onClick={toggle}
                >
                  <li>Historia del Gin</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/history/rum'}
                  onClick={toggle}
                >
                  <li>Historia del Ron</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/history/tequila'}
                  onClick={toggle}
                >
                  <li>Historia del Tequila</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/history/wine'}
                  onClick={toggle}
                >
                  <li>Historia del Vino</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/history/vodka'}
                  onClick={toggle}
                >
                  <li>Historia del Vodka</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/history/whisky'}
                  onClick={toggle}
                >
                  <li>Historia del Whisky</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
        <div className={`xl:relative ${menuClass}`}>
          <div onClick={() => handleDropdown('recetas')}>Recetas ▿</div>
          {selected === 'recetas' && (
            <div
              className={`xl:absolute top-7 xl:top-10 left-0 ${dropdownClass}`}
            >
              <ul className={subMenuClass}>
                <Link
                  className={menuClass}
                  href={'/recipes/beer'}
                  onClick={toggle}
                >
                  <li>Cocteles con Cerveza</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/recipes/gin'}
                  onClick={toggle}
                >
                  <li>Cocteles con Gin</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/recipes/rum'}
                  onClick={toggle}
                >
                  <li>Cocteles con Ron</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/recipes/tequila'}
                  onClick={toggle}
                >
                  <li>Cocteles con Tequila</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/recipes/wine'}
                  onClick={toggle}
                >
                  <li>Cocteles con Vino</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/recipes/vodka'}
                  onClick={toggle}
                >
                  <li>Cocteles con Vodka</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/recipes/whisky'}
                  onClick={toggle}
                >
                  <li>Cocteles con Whisky</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/recipes/other'}
                  onClick={toggle}
                >
                  <li>Otros Cocteles</li>
                </Link>
                <Link
                  className={menuClass}
                  href={'/recipes/mocktails'}
                  onClick={toggle}
                >
                  <li>Mocktails</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
        <Link className={menuClass} href={'/cocktailsform'}>
          <div>Nuevo Cocktail</div>
        </Link>
        <div className={menuClass}>Todo sobre cocteleria</div>
        <div className={menuClass}>Servicios</div>
        <Link className={menuClass} href={'/about'}>
          <div>Acerca de</div>
        </Link>

        <Link className={menuClass} href={'contact'}>
          <div>Contacto</div>
        </Link>
        <button
          className={`font-extrabold xl:border-2 xl:border-peach-fuzz xl:rounded-full hover:border-cofee-1 ${menuClass}`}
          onClick={openModal}
        >
          <GoPerson />
        </button>
        {isModalOpen && <Modal isOpen={false} onClose={closeModal} />}
      </div>
    </nav>
  );
}
