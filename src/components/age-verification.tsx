'use client';

import { useEffect, useState } from 'react';

import SubmitButton from './submit-button';

export default function AgeVerificationAlert({
  onConfirm,
}: {
  onConfirm: () => void;
}) {
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New state variable for initial loading
  const [doNotAskAgain, setDoNotAskAgain] = useState(false); // New state variable for "do not ask again" feature

  useEffect(() => {
    const isOver18 = localStorage.getItem('isOver18');
    if (isOver18) {
      setIsAgeConfirmed(true);
    }
    setIsLoading(false); // Update loading state once the initial check is done
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('isOver18', 'true');
    setIsAgeConfirmed(true);
    if (doNotAskAgain) {
      localStorage.setItem('doNotAskAgain', 'true');
    }
    onConfirm();
  };

  const handleCheckboxChange = () => {
    setDoNotAskAgain(!doNotAskAgain);
  };

  if (
    isLoading ||
    isAgeConfirmed ||
    localStorage.getItem('doNotAskAgain') === 'true'
  ) {
    // Display nothing while initial loading is in progress
    return null;
  }

  return (
    <div className='w-screen h-screen fixed top-0 left-0  bg-black/[0.5]'>
      <div className='mx-auto mt-40 bg-blue-tp w-80 sm:w-96 h-70 relative rounded-lg p-4 animate-page-enter'>
        <h2 className='text-xl font-bold text-peach-fuzz text-center'>
          Esta pagina contiene informacion sobre bebidas alcoholicas
        </h2>
        <p className='my-6 text-sm sm:text-base text-center font-bold text-white'>
          Por favor, confirma que eres mayor de edad para continuar
        </p>
        <hr />
        <label className='flex items-center my-4 text-blue-tp text-xs'>
          <input
            checked={doNotAskAgain}
            className='mr-2'
            onChange={handleCheckboxChange}
            type='checkbox'
          />
          No volver a preguntar en este equipo
        </label>
        <SubmitButton onClick={handleConfirm} title='Si, soy mayor de edad' />
      </div>
    </div>
  );
}
