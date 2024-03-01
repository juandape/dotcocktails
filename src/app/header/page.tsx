'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LegacyRef, useEffect, useState } from 'react';
import { GoPerson, GoSearch } from 'react-icons/go';

import Modal from '@/components/login-modal';
import { menuClass, subMenuClass } from '@/components/styles';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userAvatar, setUserAvatar] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [menuRef, setMenuRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const getRoleFromLocalStorage = () => {
      if (typeof window !== 'undefined') {
        const userData = localStorage.getItem('user');
        const { role = '' } = userData ? JSON.parse(userData) : {};
        return role;
      }
      return null;
    };

    const getAvatarFromLocalStorage = () => {
      if (typeof window !== 'undefined') {
        const userData = localStorage.getItem('user');
        const { avatar = '' } = userData ? JSON.parse(userData) : {};
        return avatar;
      }
      return null;
    };

    const getIdFromLocalStorage = () => {
      if (typeof window !== 'undefined') {
        const userData = localStorage.getItem('user');
        const { id = '' } = userData ? JSON.parse(userData) : {};
        return id;
      }
      return null;
    };

    const id = getIdFromLocalStorage();
    setId(id);

    const userAvatar = getAvatarFromLocalStorage();
    setUserAvatar(userAvatar);

    const role = getRoleFromLocalStorage();

    const evaluateRole = (roles: string) => {
      if (role && role.length > 0 && role[0] === roles) {
        return roles;
      } else {
        return null;
      }
    };

    setUserRole(evaluateRole(role[0]));
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef && !menuRef.contains(e.target as Node)) {
        setIsOpen(false);
        setSelected('');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
    setSelected('');
  };

  const handleClose = () => {
    localStorage.clear();
    setUserRole(null);
    setUserAvatar(null);
    closeModal();
  };

  const handleDropdown = (value: string) => {
    if (selected === value && isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setSelected(value);
    }
  };

  const dropdownClass = isOpen ? 'block' : 'hidden';

  return (
    <div className='flex bg-gradient-to-b from-black-top to-blue-tp'>
      <nav
        className='xl:flex w-screen xl:justify-center px-4 xl:px-20 xl:h-16'
        ref={setMenuRef as LegacyRef<HTMLDivElement>}
      >
        {/* Hamburger Icon for Mobile */}
        <div
          className='flex items-center xl:hidden duration-500 h-16'
          onClick={toggle}
        >
          <button className='text-white'>
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

        {/* Menu items */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } xl:flex xl:w-auto xl:space-x-20 -ml-2 xl:ml-0 xl:mt-0 xl:bg-gradient-to-b from-black-top to-blue-tp h-50 xl:h-auto xl:px-0 px-4 xl:py-0 py-4`}
          id='menu'
        >
          <div className={`xl:relative -mt-2 sm:mt-0 ${menuClass}`}>
            <div
              className='font-extrabold'
              onClick={() => handleDropdown('recetas')}
            >
              Recetas▿
            </div>
            {selected === 'recetas' && (
              <div
                className={`xl:absolute top-7 xl:top-10 left-0 ${dropdownClass}`}
              >
                <ul className={`xl:w-52 ${subMenuClass}`}>
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
                    href={'/recipes/various'}
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
                  <Link
                    className={menuClass}
                    href={'/recipes/syrups'}
                    onClick={toggle}
                  >
                    <li>Jarabes y Pre-Mixes</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <div className={`xl:relative -mt-2 sm:mt-0 ${menuClass}`}>
            <div
              className='font-extrabold'
              onClick={() => handleDropdown('historia')}
            >
              Historia▿
            </div>
            {selected === 'historia' && (
              <div
                className={`xl:absolute top-7 xl:top-10 left-0 ${dropdownClass}`}
              >
                <ul className={`xl:w-28 ${subMenuClass}`}>
                  <Link
                    className={menuClass}
                    href={'/history/cocktail'}
                    onClick={toggle}
                  >
                    <li>Cocktail</li>
                  </Link>
                  <Link
                    className={menuClass}
                    href={'/history/beer'}
                    onClick={toggle}
                  >
                    <li>Cerveza</li>
                  </Link>
                  <Link
                    className={menuClass}
                    href={'/history/gin'}
                    onClick={toggle}
                  >
                    <li>Gin</li>
                  </Link>
                  <Link
                    className={menuClass}
                    href={'/history/rum'}
                    onClick={toggle}
                  >
                    <li>Ron</li>
                  </Link>
                  <Link
                    className={menuClass}
                    href={'/history/tequila'}
                    onClick={toggle}
                  >
                    <li>Tequila</li>
                  </Link>
                  <Link
                    className={menuClass}
                    href={'/history/wine'}
                    onClick={toggle}
                  >
                    <li>Vino</li>
                  </Link>
                  <Link
                    className={menuClass}
                    href={'/history/vodka'}
                    onClick={toggle}
                  >
                    <li>Vodka</li>
                  </Link>
                  <Link
                    className={menuClass}
                    href={'/history/whisky'}
                    onClick={toggle}
                  >
                    <li>Whisky</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <div className={`xl:relative -mt-2 sm:mt-0 ${menuClass}`}>
            <div
              className='font-extrabold'
              onClick={() => handleDropdown('aprende')}
            >
              Aprende ▿
            </div>
            {selected === 'aprende' && (
              <div
                className={`xl:absolute top-7 xl:top-10 left-0 ${dropdownClass}`}
              >
                <ul className={subMenuClass}>
                  {/* <Link
                    className={menuClass}
                    href={'/under-construction'}
                    onClick={toggle}
                  >
                    <li>Nociones Básicas</li>
                  </Link> */}
                  <Link
                    className={menuClass}
                    href={'/learn/glasses'}
                    onClick={toggle}
                  >
                    <li>Cristalería</li>
                  </Link>
                  <Link
                    className={menuClass}
                    href={'/learn/equivalences'}
                    onClick={toggle}
                  >
                    <li>Conversor de unidades</li>
                  </Link>
                  <Link
                    className={menuClass}
                    href={'/learn/bar-tools'}
                    onClick={toggle}
                  >
                    <li>Herramientas del Bar</li>
                  </Link>
                  <Link
                    className={menuClass}
                    href={'/learn/cocktail-families'}
                    onClick={toggle}
                  >
                    <li>Familias de los Cocteles</li>
                  </Link>
                  <Link
                    className={menuClass}
                    href={'/learn/elaboration-methods'}
                    onClick={toggle}
                  >
                    <li>Métodos de elaboración</li>
                  </Link>
                  <Link
                    className={menuClass}
                    href={'/learn/bartender-dictionary'}
                    onClick={toggle}
                  >
                    <li>Mini diccionario del Bartender</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <Link className={menuClass} href={'/services'} onClick={toggle}>
            <div className='mb-2 sm:mb-0 animate-fadeIn sm:animate-none font-extrabold'>
              Servicios
            </div>
          </Link>
          <Link className={menuClass} href={'/about'} onClick={toggle}>
            <div className='mb-2 sm:mb-0 animate-fadeIn sm:animate-none font-extrabold'>
              Nuestra Empresa
            </div>
          </Link>
          <Link className={menuClass} href={'/contact'} onClick={toggle}>
            <div className='mb-2 sm:mb-0 animate-fadeIn sm:animate-none font-extrabold'>
              Contacto
            </div>
          </Link>
          {userRole === 'ADMIN' ? (
            <div className={`xl:relative ${menuClass}`}>
              <div
                className='font-extrabold'
                onClick={() => handleDropdown('nuevo')}
              >
                Tools▿
              </div>
              {selected === 'nuevo' && (
                <div
                  className={`xl:absolute top-7 xl:top-10 left-0 ${dropdownClass}`}
                >
                  <ul className={`xl:w-40 ${subMenuClass}`}>
                    <Link
                      className={menuClass}
                      href={'/create/cocktails-form'}
                      onClick={toggle}
                    >
                      <li>Nuevo Cocktail</li>
                    </Link>
                    <Link
                      className={menuClass}
                      href={'/create/history-form'}
                      onClick={toggle}
                    >
                      <li>Nueva Historia</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          ) : null}
          {userRole ? (
            <div className={`xl:relative ${menuClass}`}>
              <div onClick={() => handleDropdown('user')}>
                <Image
                  alt='Avatar'
                  className='rounded-full hover:rounded-sm mt-2'
                  height={40}
                  src={userAvatar || ''}
                  width={40}
                />
              </div>
              {selected === 'user' && (
                <div
                  className={`xl:absolute top-7 xl:top-10 left-0 ${dropdownClass}`}
                >
                  <ul
                    className={`xl:mt-4 mt-2 xl:w-40 xl:h-20 ${subMenuClass}`}
                  >
                    <Link
                      className={menuClass}
                      href={`/create/users-form?id=${id}`}
                      onClick={toggle}
                    >
                      <li>Perfil</li>
                    </Link>
                    <div className={menuClass} onClick={toggle}>
                      <li onClick={handleClose}>Cerrar Sesión</li>
                    </div>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button
              className={`font-extrabold border-2 border-peach-fuzz rounded-full hover:border-cofee-1 ${menuClass}`}
              onClick={openModal}
            >
              <GoPerson className='text-xl' />
            </button>
          )}
          {isModalOpen && <Modal isOpen={false} onClose={closeModal} />}
        </div>
      </nav>
        <div
          className={`border-2 rounded-full xl:border-peach-fuzz  w-10 xl:w-14 xl:text-peach-fuzz text-white xl:hover:text-cofee-1 hover:text-peach-fuzz xl:hover:border-cofee-1 hover:border-peach-fuzz  h-8 mt-4 xl:mt-2 absolute ml-20 xl:mr-28 xl:right-0`}
        >
          <Link href='/search'>
            <GoSearch className='text-xl ml-2 mt-1' />
          </Link>
        </div>
      <Link className='h-16 hover:animate-pulse ml-10 xl:absolute' href='/'>
        <Image
          alt='Logo'
          className='cursor-pointer mt-2 xl:mt-1 mr-16 xl:mr-10'
          height={50}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1706739163/upload-folder/logoBlanco_k0nyhu.png'
          width={50}
        />
      </Link>
    </div>
  );
}
