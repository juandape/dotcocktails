'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';

import BackButton from '@/components/back-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/cocktails`;

const initialForm = {
  name: '',
  image: '',
  history: '',
  preparationMethod: '',
  glass: '',
  category: '',
  alcoholContent: '',
  nutritionalValue: '',
  ingredients: [],
  garnish: '',
  preparation: '',
};

export default function CocktailsFormPage() {
  const router = useRouter();
  const [cocktails, setCocktails] = useState(initialForm);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(cocktails);

    try {
      const res = await axios.post(url, cocktails);
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    setCocktails(initialForm);
    console.log('form submitted');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Cocktail creado',
      showConfirmButton: false,
      timer: 1500,
    });
    router.push('/');
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    if (name === 'ingredients') {
      const ingredientsArray = value
        .split(',')
        .map((ingredient: string) => ingredient);
      setCocktails({ ...cocktails, [name]: ingredientsArray });
    } else if (name === 'preparation') {
      const preparationArray = value.split(',').map((step: string) => step);
      setCocktails({ ...cocktails, [name]: preparationArray });
    } else {
      setCocktails({ ...cocktails, [name]: value });
    }
  };

  const inputStyle = 'border border-gray-400 p-2 sm:w-96 my-6';
  const labelStyle = 'text-xl font-bold text-peach-fuzz';
  const borderStyle = 'border-b-2 mb-4 w-80 sm:w-96 m-auto border-dotted';

  return (
    <div>
      <BackButton />
      <h1 className='text-6xl font-bold text-center text-peach-fuzz my-20'>
        Nuevo Cocktail
      </h1>
      <form
        className='flex flex-col text-left m-auto w-96 p-4'
        onSubmit={handleSubmit}
      >
        <label className={labelStyle}>Nombre del Cocktail</label>
        <input
          className={inputStyle}
          name='name'
          onChange={handleChange}
          type='text'
          value={cocktails.name}
        />
        <div className={borderStyle}></div>
        <label className={labelStyle}>Imagen</label>
        <input
          accept='image/*'
          className='my-4 text-peach-fuzz hover:cursor-pointer sm:w-96'
          name='image'
          onChange={handleChange}
          type='file'
          value={cocktails.image}
        />
        <div className={borderStyle}></div>
        <label className={labelStyle}>Historia</label>
        <textarea
          className={inputStyle}
          name='history'
          onChange={handleChange}
          value={cocktails.history}
        />
        <div className={borderStyle}></div>
        <label className={labelStyle}>Metodo de preparacion</label>
        <input
          className={inputStyle}
          name='preparationMethod'
          onChange={handleChange}
          type='text'
          value={cocktails.preparationMethod}
        />
        <div className={borderStyle}></div>
        <label className={labelStyle}>Vaso</label>
        <input
          className={inputStyle}
          name='glass'
          onChange={handleChange}
          type='text'
          value={cocktails.glass}
        />
        <div className={borderStyle}></div>
        <label className={labelStyle}>Categoria</label>
        <input
          className={inputStyle}
          name='category'
          onChange={handleChange}
          type='text'
          value={cocktails.category}
        />
        <div className={borderStyle}></div>
        <label className={labelStyle}>Contenido de alcohol</label>
        <input
          className={inputStyle}
          name='alcoholContent'
          onChange={handleChange}
          type='text'
          value={cocktails.alcoholContent}
        />
        <div className={borderStyle}></div>
        <label className={labelStyle}>Valor nutricional</label>
        <input
          className={inputStyle}
          name='nutritionalValue'
          onChange={handleChange}
          type='text'
          value={cocktails.nutritionalValue}
        />
        <div className={borderStyle}></div>
        <label className={labelStyle}>Ingredientes</label>
        <input
          className={inputStyle}
          name='ingredients'
          onChange={handleChange}
          type='text'
          value={cocktails.ingredients}
        />
        <div className={borderStyle}></div>
        <label className={labelStyle}>Decoracion</label>
        <input
          className={inputStyle}
          name='garnish'
          onChange={handleChange}
          type='text'
          value={cocktails.garnish}
        />
        <div className={borderStyle}></div>
        <label className={labelStyle}>Preparacion</label>
        <textarea
          className={inputStyle}
          name='preparation'
          onChange={handleChange}
          value={cocktails.preparation}
        />
        <div className={borderStyle}></div>
        <button
          className='m-auto my-4 text-blue-tp bg-peach-fuzz w-20 border-2 border-peach-fuzz rounded-lg hover:bg-blue-tp hover:text-peach-fuzz cursor-pointer duration-500'
          type='submit'
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
