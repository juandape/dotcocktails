'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';

import BackButton from '@/components/back-button';
import SubmitButton from '@/components/submit-button';

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

  const labelStyle = 'block mb-2 text-sm sm:text-base font-bold text-peach-fuzz';
  const inputStyle =
    'sm:w-96 w-80 px-3 py-2 mb-6 mx-auto leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline';

  return (
    <div>
      <BackButton />
      <h2 className='text-4xl font-bold text-peach-fuzz text-center sm:my-6 mt-20 mb-6'>
        Nuevo Cocktail
      </h2>
      <form
        className='flex flex-col text-left m-auto w-96 p-4'
        onSubmit={handleSubmit}
      >
        <label className={labelStyle}>Nombre del Cocktail</label>
        <input
          className={inputStyle}
          name='name'
          onChange={handleChange}
          placeholder='Nombre del Cocktail'
          required
          type='text'
          value={cocktails.name}
        />

        <label className={labelStyle}>Imagen</label>
        <input
          accept='image/*'
          className='my-4 text-peach-fuzz hover:cursor-pointer sm:w-96'
          name='image'
          onChange={handleChange}
          required
          type='file'
          value={cocktails.image}
        />

        <label className={labelStyle}>Historia</label>
        <textarea
          className={inputStyle}
          name='history'
          onChange={handleChange}
          placeholder='Historia'
          required
          value={cocktails.history}
        />

        <label className={labelStyle}>Metodo de preparacion</label>
        <input
          className={inputStyle}
          name='preparationMethod'
          onChange={handleChange}
          placeholder='Metodo de preparacion'
          required
          type='text'
          value={cocktails.preparationMethod}
        />

        <label className={labelStyle}>Vaso</label>
        <input
          className={inputStyle}
          name='glass'
          onChange={handleChange}
          placeholder='Vaso'
          required
          type='text'
          value={cocktails.glass}
        />

        <label className={labelStyle}>Categoria</label>
        <input
          className={inputStyle}
          name='category'
          onChange={handleChange}
          placeholder='Categoria'
          required
          type='text'
          value={cocktails.category}
        />

        <label className={labelStyle}>Contenido de alcohol</label>
        <input
          className={inputStyle}
          name='alcoholContent'
          onChange={handleChange}
          placeholder='Contenido de alcohol'
          required
          type='text'
          value={cocktails.alcoholContent}
        />

        <label className={labelStyle}>Valor nutricional</label>
        <input
          className={inputStyle}
          name='nutritionalValue'
          onChange={handleChange}
          placeholder='Valor nutricional'
          required
          type='text'
          value={cocktails.nutritionalValue}
        />

        <label className={labelStyle}>Ingredientes</label>
        <input
          className={inputStyle}
          name='ingredients'
          onChange={handleChange}
          placeholder='Ingredientes'
          required
          type='text'
          value={cocktails.ingredients}
        />

        <label className={labelStyle}>Decoracion</label>
        <input
          className={inputStyle}
          name='garnish'
          onChange={handleChange}
          placeholder='Decoracion'
          required
          type='text'
          value={cocktails.garnish}
        />

        <label className={labelStyle}>Preparacion</label>
        <textarea
          className={inputStyle}
          name='preparation'
          onChange={handleChange}
          placeholder='Preparacion'
          required
          value={cocktails.preparation}
        />
        <SubmitButton title='Enviar'/>
      </form>
    </div>
  );
}
