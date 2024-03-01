'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import SubmitButton from './submit-button';

export default function CookieConsent() {
  const [isCookieConfirmed, setIsCookieConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New state variable for initial loading

  useEffect(() => {
    const cookieAcepted = localStorage.getItem('cookieAcepted');
    if (cookieAcepted) {
      setIsCookieConfirmed(true);
    }
    setIsLoading(false); // Update loading state once the initial check is done
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('cookieAcepted', 'true');
    setIsCookieConfirmed(true);
  };

  if (isLoading || isCookieConfirmed) {
    // Display nothing while initial loading is in progress
    return null;
  }

  return (
    <div className='fixed bottom-10 left-0  bg-black/[0.5] animate-page-enter'>
      <div className='flex flex-col w-screen bg-blue-tp h-30 relative rounded-lg p-2'>
        <p className='my-2 text-sm sm:text-base text-center font-bold text-peach-fuzz'>
          Esta pagina utiliza cookies para mejorar tu experiencia, si continuas
          navegando aceptas su uso
        </p>
        <div className='text-center'>
          <Link
            className='text-xs text-white hover:underline'
            href='/cookies-policy'
          >
            Politicas de cookies
          </Link>
        </div>
        <SubmitButton onClick={handleConfirm} title='Acepto' />
      </div>
    </div>
  );
}
