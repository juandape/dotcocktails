'use client';

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

  if (
    isLoading ||
    isCookieConfirmed
  ) {
    // Display nothing while initial loading is in progress
    return null;
  }

  return (
    <div className='fixed bottom-10 left-0  bg-black/[0.5]'>
      <div className='mx-auto w-screen bg-gradient-to-b from-white to-blue-tp h-30 relative rounded-lg p-2'>
        <p className='my-2 text-sm sm:text-base text-center font-bold text-blue-tp'>
          Esta pagina utiliza cookies para mejorar tu experiencia, si continuas navegando aceptas su uso
        </p>
        <SubmitButton onClick={handleConfirm} title='Acepto' />
      </div>
    </div>
  );
}
