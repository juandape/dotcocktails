'use client';

import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Swal from 'sweetalert2';

import { labelStyle } from '@/components/styles';

import SubmitButton from './submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/auth/local/login`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onClose();

    try {
      const res = await axios.post(url, formdata);
      console.log('response', res);

      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.profile));
        Swal.fire({
          title: 'Bienvenido de nuevo!',
          text: `${res.data.profile.name}`,
          icon: 'success',
          timer: 3000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error en Login!',
        text: 'Verifica tus datos',
        icon: 'error',
        showConfirmButton: true,
      });
      console.log('error', error);
    } finally {
      location.reload();
    }
  }

  const inputStyle =
    'w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline';

  return (
    <div className='w-screen h-screen fixed top-0 left-0 sm:-left-20 bg-black/[0.5]'>
      <div
        className={`mx-auto mt-40 bg-gradient-to-b from-black-top to-blue-tp w-80 sm:w-96 h-70 relative rounded-lg p-4 animate-page-enter ${
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
            name='email'
            onChange={handleChange}
            placeholder='correo@mail.com'
            required
            type='email'
            value={formdata.email}
          />
          <label className={labelStyle}>Password:</label>
          <div className='flex relative sm:w-80'>
            <input
              className={inputStyle}
              name='password'
              onChange={handleChange}
              placeholder='*****'
              required
              type={showPassword ? 'text' : 'password'}
              value={formdata.password}
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
            <Link href='/create/users-form' onClick={onClose}>
              Registrate
            </Link>
          </div>
          <div
            className='hover:text-white hover:text-sm cursor-pointer duration-500
            '
          >
            <Link href='/forgot-password' onClick={onClose}>
              Olvidaste el password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
