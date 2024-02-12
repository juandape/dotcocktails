'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import Swal from 'sweetalert2';

// import BackButton from '@/components/back-button';
import SubmitButton from '@/components/submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/auth/local/forgot-password`;

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(url, { email });
      Swal.fire({
        title: 'Revisa tu correo',
        text: 'Hemos enviado un enlace para restablecer tu password',
        icon: 'success',
        showCloseButton: true,
      });
      setEmail('');
      router.push('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al enviar correo',
        text: (error as Error).message,
        showCloseButton: true,
      });
    } finally {
      setLoading(false);
    }
  }

  const labelStyle = 'mb-2 text-sm font-bold text-peach-fuzz';
  const inputStyle =
    'w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline';

  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-black/[0.5]'>
      {/* <BackButton /> */}
      <div className='mx-auto mt-40 bg-gradient-to-b from-black-top to-blue-tp w-96 h-70 relative rounded-lg py-4'>
        <div className='mt-6 text-4xl font-bold text-peach-fuzz text-center mb-10'>
          Recuperar Password
        </div>
        <div className='absolute top-0 right-0'>
          <Link href='/'>
            <button className='absolute top-4 right-4 px-2 rounded-sm text-peach-fuzz hover:bg-peach-fuzz hover:text-blue-tp duration-500'>
              <MdClose size={20} />
            </button>
          </Link>
        </div>
        <form className='flex flex-col m-4' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className={labelStyle} htmlFor='email'>
              Email
            </label>
            <input
              className={inputStyle}
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='usuario@mail.com'
              type='email'
              value={email}
            />
          </div>
          <SubmitButton loading={loading} title='Enviar' />
        </form>
      </div>
    </div>
  );
}
