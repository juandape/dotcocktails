'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

import LearnBreadcrumb from '@/components/learn-breadcrump';
import {
  labelStyle,
  pharagraphClass,
  subtitleClass,
  titleClass,
} from '@/components/styles';

export default function EquivalencesPage() {
  const [oz, setOz] = useState('');
  const [ml, setMl] = useState('');
  const [cl, setCl] = useState('');

  const convertToMl = (inputValue: string, sourceUnit: string) => {
    if (sourceUnit === 'oz') {
      setMl((parseFloat(inputValue) * 30).toFixed(2));
    } else if (sourceUnit === 'cl') {
      setMl((parseFloat(inputValue) * 10).toFixed(2));
    }
  };

  const convertToOz = (inputValue: string, sourceUnit: string) => {
    if (sourceUnit === 'ml') {
      setOz((parseFloat(inputValue) / 30).toFixed(2));
    } else if (sourceUnit === 'cl') {
      setOz((parseFloat(inputValue) / 3).toFixed(2));
    }
  };

  const convertToCl = (inputValue: string, sourceUnit: string) => {
    if (sourceUnit === 'ml') {
      setCl((parseFloat(inputValue) / 10).toFixed(2));
    } else if (sourceUnit === 'oz') {
      setCl((parseFloat(inputValue) * 3).toFixed(2));
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    sourceUnit: string
  ) => {
    const inputValue = e.target.value;
    if (inputValue === '') {
      setOz('');
      setMl('');
      setCl('');
      return;
    }
    if (sourceUnit === 'oz') {
      setOz(inputValue);
      convertToMl(inputValue, 'oz');
      convertToCl(inputValue, 'oz');
    } else if (sourceUnit === 'ml') {
      setMl(inputValue);
      convertToOz(inputValue, 'ml');
      convertToCl(inputValue, 'ml');
    } else if (sourceUnit === 'cl') {
      setCl(inputValue);
      convertToOz(inputValue, 'cl');
      convertToMl(inputValue, 'cl');
    }
  };

  const inputClass = 'border-2 border-gray-300 p-1 rounded-md my-2 ml-5 w-32';

  return (
    <div className='animate-page-enter'>
      <LearnBreadcrumb name='Conversor de unidades' />
      <div className='mx-5'>
        <h1 className={titleClass}>Conversor de unidades</h1>
        <fieldset className='xl:flex justify-center w-1/2 mx-auto border-2 py-5 rounded-lg border-peach-fuzz mb-5'>
          <div className='items-center'>
            <label className={`ml-6 text-xl ${labelStyle}`} htmlFor='oz'>
              Onzas:
            </label>
            <input
              className={inputClass}
              id='oz'
              onChange={(e) => handleInputChange(e, 'oz')}
              type='number'
              value={oz}
            />
          </div>
          <div className='items-center'>
            <label className={`ml-6 text-xl ${labelStyle}`} htmlFor='ml'>
              Mililitros:
            </label>
            <input
              className={inputClass}
              id='ml'
              onChange={(e) => handleInputChange(e, 'ml')}
              type='number'
              value={ml}
            />
          </div>
          <div className='items-center'>
            <label className={`ml-6 text-xl ${labelStyle}`} htmlFor='cl'>
              Centilitros:
            </label>
            <input
              className={inputClass}
              id='cl'
              onChange={(e) => handleInputChange(e, 'cl')}
              type='number'
              value={cl}
            />
          </div>
        </fieldset>
        <div className='xl:w-1/2 mx-auto'>
          <div className={subtitleClass}>La Onza</div>
          <p className={pharagraphClass}>
            Una onza (oz.) es una medida de estilo americano o anglosajón que
            equivale a 28,33cc (2.8 cl) y se aproxima a 30 ml. Se utiliza para
            la preparación de tragos y cócteles. Es utilizada por la mayoría de
            los bartenders del mundo.
          </p>
        </div>

        <hr />
        <Image
          alt='Equivalencias'
          className='mx-auto my-10 shadow-lg'
          height={1000}
          src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1709147964/upload-folder/tabla_wv2ann.jpg'
          width={1000}
        />
      </div>
    </div>
  );
}
