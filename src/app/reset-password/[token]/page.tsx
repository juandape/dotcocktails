'use client';

import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

import SubmitButton from '@/components/submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/auth/local/reset-password`;

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const token = useParams().token;

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Las contraseñas no coinciden',
        showCloseButton: true,
      });
      setLoading(false);
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.<>,:;{}=+])[A-Za-z\d@$!%*?&@$!%*?&.<>,:;{}=+]{8,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La contraseña debe tener al menos una mayúscula, un número y un carácter especial',
        showCloseButton: true,
      });
      return;
    }

    try {
      await axios.post(`${url}/${token}`, { password });
      Swal.fire({
        title: 'Contraseña actualizada',
        text: 'Inicia sesión con tu nueva contraseña',
        icon: 'success',
        showCloseButton: true,
      });
      console.log('Contraseña actualizada');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al actualizar contraseña',
        text: error as Error['message'],
        showCloseButton: true,
      });
    } finally {
      setLoading(false);
      setPassword('');
      setConfirmPassword('');
      router.push('/');
    }
  }

  const labelStyle = 'mb-2 text-sm font-bold text-peach-fuzz';
  const inputStyle =
    'w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline';

  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-black/[0.5]'>
      <div className='mx-auto mt-40 bg-gradient-to-b from-black-top to-blue-tp w-96 h-70 relative rounded-lg py-4'>
        <div className='text-4xl font-bold text-peach-fuzz text-center mb-10'>
          Nuevo Password
        </div>
        <form className='flex flex-col m-4' onSubmit={handleSubmit}>
          <label className={labelStyle}>Password</label>
          <div className='flex relative'>
            <input
              className={inputStyle}
              id='password'
              minLength={8}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Nuevo password'
              required
              type={showPassword ? 'text' : 'password'}
              value={password}
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
          <label className={labelStyle}> Confirma tu Password</label>
          <div className='flex relative'>
            <input
              className={inputStyle}
              id='confirmPassword'
              minLength={8}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirmar Password'
              required
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
            />
            <div
              className='absolute pt-2 right-0 mr-5 cursor-pointer'
              onClick={toggleConfirmPassword}
            >
              {showConfirmPassword ? (
                <FaRegEyeSlash size={20} />
              ) : (
                <FaRegEye size={20} />
              )}
            </div>
          </div>
          <SubmitButton loading={loading} title='Actualizar password' />
        </form>
      </div>
    </div>
  );
}
