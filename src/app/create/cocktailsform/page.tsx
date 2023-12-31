'use client';

import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import Swal from 'sweetalert2';

import BackButton from '@/components/back-button';
import SubmitButton from '@/components/submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/cocktails`;

const initialForm = {
  nameId: '',
  name: '',
  image: '',
  history: '',
  preparationMethod: '',
  glass: '',
  category: '',
  alcoholContent: '',
  nutritionalValue: '',
  ingredients: [] as string[],
  garnish: '',
  preparation: [] as string[],
};

export default function CocktailsFormPage() {
  const router = useRouter();
  const [cocktails, setCocktails] = useState(initialForm);
  const [files, setFiles] = useState([]);

  const handleUpload = (e: { target: { files: any } }) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(cocktails);

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/upload/files`,
        formData
      );
      const result = response.data;

      const imageUrl = result.map(
        (image: { secure_url: any }) => image.secure_url
      );

      console.log('imageurl', imageUrl);

      const updateCocktails = { ...cocktails, image: imageUrl[0] };

      const res = await axios.post(url, updateCocktails);
      console.log(res);

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
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | {
          target: {
            files?: FileList;
            name: string;
            value: any;
          };
        }
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

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

    if (name === 'image' && files) {
      handleUpload({ target: { files } });
    }
  };

  const labelStyle =
    'block mb-2 text-sm sm:text-base font-bold text-peach-fuzz';
  const inputStyle =
    'sm:w-96 w-80 px-3 py-2 mb-6 mx-auto leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline';

  return (
    <div>
      <BackButton />
      <div className='text-4xl font-bold text-peach-fuzz text-center sm:my-6 mt-20 mb-6'>
        Nuevo Cocktail
      </div>
      <form
        className='flex flex-col text-left m-auto w-96 p-4'
        onSubmit={handleSubmit}
      >
        <label className={labelStyle}>Id</label>
        <select
          className={inputStyle}
          name='nameId'
          onChange={handleChange}
          required
          value={cocktails.nameId}
        >
          <option className='flex' disabled hidden value=''>
            Selecciona un id para el cocktail ▿
          </option>
          <option value='beer'>Cerveza</option>
          <option value='gin'>Gin</option>
          <option value='rum'>Ron</option>
          <option value='tequila'>Tequila</option>
          <option value='vodka'>Vodka</option>
          <option value='whisky'>Whisky</option>
          <option value='wine'>Vino</option>
          <option value='mocktails'>Mocktails</option>
          <option value='liquors'>Otros Licores</option>
          <option value='syrups'>Jarabes</option>
        </select>
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
        <div className='mb-4'>
          {Array.from(files).map((file, index) => (
            <Image
              alt='cocktail image'
              height={100}
              key={index}
              src={file ? URL.createObjectURL(file) : ''}
              width={100}
            />
          ))}
        </div>

        <label className={labelStyle}>Historia</label>
        <textarea
          className={inputStyle}
          name='history'
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
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
        <textarea
          className={inputStyle}
          name='ingredients'
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
          placeholder='Ingresa los ingredientes separados por comas'
          required
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
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
          placeholder='Ingresa los pasos separados por comas'
          required
          value={cocktails.preparation}
        />
        <SubmitButton title='Enviar' />
      </form>
    </div>
  );
}
