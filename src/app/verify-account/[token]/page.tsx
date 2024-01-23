'use client';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/auth/local/activate`;

export default function VerifyAccountPage() {
  const [activationStatus, setActivationStatus] = useState('');
  const token = useParams().token;
  const router = useRouter();

  async function handleClick() {
    try {
      await axios.post(`${url}/${token}`).then((res) => {
        setActivationStatus(res.data.message || 'Account activated');
        Swal.fire({
          icon: 'success',
          title: 'Cuenta activada',
          showCloseButton: true,
        });

        router.push('/');
      });
    } catch (error) {
      console.log('error', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al activar la cuenta',
        showCloseButton: true,
      });
    }
  }

  return (
    <div className='mx-auto mt-40 bg-gradient-to-b from-black-top to-blue-tp w-80 sm:w-96 h-70 relative rounded-lg p-4 border-peach-fuzz border-2'>
      <div className='text-center py-10 text-peach-fuzz text-xl'>
        <button
          className='px-4 py-2 font-bold text-white bg-blue-tp border-2 border-peach-fuzz rounded hover:bg-peach-fuzz hover:text-blue-tp hover:font-bold hover:cursor-pointer focus:outline-none focus:shadow-outline duration-500 flex mt-4 mx-auto'
          disabled={!token || activationStatus === 'Account activated'}
          onClick={handleClick}
        >
          Click para activar tu cuenta
        </button>
      </div>
    </div>
  );
}
