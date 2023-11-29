'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';

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

  const inputStyle = 'border border-gray-400 p-2 my-2 w-80 mx-auto';

  return (
    <div>
      <h1 className='text-6xl font-bold text-center my-20'>New Cocktail Form</h1>
      <form
        className='border-2 flex flex-col my-20 text-center'
        onSubmit={handleSubmit}
      >
        <label>Nombre del Cocktail</label>
        <input
          className={inputStyle}
          name='name'
          onChange={handleChange}
          type='text'
          value={cocktails.name}
        />
        <label>Imagen</label>
        <input
          className={inputStyle}
          name='image'
          onChange={handleChange}
          type='text'
          value={cocktails.image}
        />
        <label>Historia</label>
        <textarea
          className={inputStyle}
          name='history'
          onChange={handleChange}
          value={cocktails.history}
        />
        <label>Metodo de preparacion</label>
        <input
          className={inputStyle}
          name='preparationMethod'
          onChange={handleChange}
          type='text'
          value={cocktails.preparationMethod}
        />
        <label>Vaso</label>
        <input
          className={inputStyle}
          name='glass'
          onChange={handleChange}
          type='text'
          value={cocktails.glass}
        />
        <label>Categoria</label>
        <input
          className={inputStyle}
          name='category'
          onChange={handleChange}
          type='text'
          value={cocktails.category}
        />
        <label>Contenido de alcohol</label>
        <input
          className={inputStyle}
          name='alcoholContent'
          onChange={handleChange}
          type='text'
          value={cocktails.alcoholContent}
        />
        <label>Valor nutricional</label>
        <input
          className={inputStyle}
          name='nutritionalValue'
          onChange={handleChange}
          type='text'
          value={cocktails.nutritionalValue}
        />
        <label>Ingredientes</label>
        <input
          className={inputStyle}
          name='ingredients'
          onChange={handleChange}
          type='text'
          value={cocktails.ingredients}
        />
        <label>Decoracion</label>
        <input
          className={inputStyle}
          name='garnish'
          onChange={handleChange}
          type='text'
          value={cocktails.garnish}
        />
        <label>Preparacion</label>
        <textarea
          className={inputStyle}
          name='preparation'
          onChange={handleChange}
          value={cocktails.preparation}
        />
        <button
          className='m-auto w-20 border-2 border-teal-400 rounded-lg hover:bg-teal-300 hover:text-white cursor-pointer duration-500'
          type='submit'
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
