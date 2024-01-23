import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Swal from 'sweetalert2';

import SubmitButton from './submit-button';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    Swal.fire({
      title: 'Login Successful!',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const labelStyle = 'block mb-2 text-sm font-bold text-peach-fuzz';
  const inputStyle =
    'w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline';

  return (
    <>
      <div className='w-screen h-screen fixed top-0 left-0 sm:-left-20 bg-black/[0.5]'>
        <div
          className={`mx-auto mt-40 bg-gradient-to-b from-black-top to-blue-tp w-80 sm:w-96 h-70 relative rounded-lg p-4 ${
            isOpen ? 'open' : ''
          }`}
        >
          <h2 className='text-4xl font-bold text-peach-fuzz text-center'>
            Login
          </h2>
          <div className='absolute top-0 right-0'>
            <button
              className='absolute top-4 right-4 px-2 rounded-sm text-peach-fuzz hover:bg-peach-fuzz hover:text-blue-tp duration-500'
              onClick={onClose}
            >
              <MdClose size={20} />
            </button>
          </div>
          <form className='flex flex-col m-4' onSubmit={handleSubmit}>
            <label className={labelStyle}>Email:</label>
            <input
              className={inputStyle}
              placeholder='correo@mail.com'
              required
              type='email'
            />
            <label className={labelStyle}>Password:</label>
            <div className='flex relative sm:w-80'>
              <input
                className={inputStyle}
                placeholder='*****'
                required
                type={showPassword ? 'text' : 'password'}
              />
              <div
                className='absolute pt-2 right-0 mr-5 cursor-pointer'
                onClick={togglePassword}
              >
                {showPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaRegEye size={20} />
                )}
              </div>
            </div>

            <SubmitButton title='Login' />
          </form>
          <div className='text-peach-fuzz flex justify-between text-xs mx-2 mt-6'>
            <div
              className='hover:text-white hover:text-sm cursor-pointer duration-500
            '
            >
              <Link href='/create/usersform'>Registrate</Link>
            </div>
            <div
              className='hover:text-white hover:text-sm cursor-pointer duration-500
            '
            >
              Olvidaste el password?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
