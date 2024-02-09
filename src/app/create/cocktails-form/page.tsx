'use client';

import axios from 'axios';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, Suspense, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import BackButton from '@/components/back-button';
import { useGetRole } from '@/components/get-role';
import {
  inputStyle,
  labelStyle,
  textAreaStyle,
  titleClass,
} from '@/components/styles';
import SubmitButton from '@/components/submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/v1/cocktails`;

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

function CocktailsFormContent() {
  const router = useRouter();
  const [cocktails, setCocktails] = useState(initialForm);
  const [files, setFiles] = useState([]);
  const [editing, setEditing] = useState(false);
  const userRole = useGetRole();
  const params = useSearchParams();
  const id = params.get('id');

  useEffect(() => {
    const fetchCocktail = async () => {
      if (id) {
        try {
          const response = await axios.get(`${url}/${id}`);
          const result = response.data;
          setCocktails(result);
          setEditing(true);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchCocktail();
  }, [id]);

  const handleUpload = (e: { target: { files: any } }) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/upload/files`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      const result = response.data;

      const imageUrl = result.map(
        (image: { secure_url: any }) => image.secure_url
      );

      const updateCocktails = { ...cocktails, image: imageUrl[0] };

      if (editing) {
        try {
          await axios.patch(`${url}/${id}`, updateCocktails, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'X-User-Role': userRole,
            },
          });
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cocktail editado satisfactoriamente',
            showConfirmButton: false,
            timer: 1500,
          });
          router.back();
        } catch (error) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Algo salió mal',
            text: `${(error as any).message},
            ${(error as any).response.data.message}`,
            showConfirmButton: true,
          });
          console.log(error);
        }
      } else {
        await axios.post(url, updateCocktails, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setCocktails(initialForm);

        console.log('form submitted');

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cocktail creado satisfactoriamente',
          showConfirmButton: false,
          timer: 1500,
        });
        router.push('/');
      }
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Algo salió mal',
        text: `${(error as any).message},
        ${(error as any).response.data.message}`,
        showCloseButton: true,
      });
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

  return (
    <div>
      <BackButton />
      {editing ? (
        <div className={titleClass}>Editar Cocktail</div>
      ) : (
        <div className={titleClass}>Nuevo Cocktail</div>
      )}
      <form
        className='flex flex-col text-left m-auto w-96 p-4'
        onSubmit={handleSubmit}
      >
        <label className={labelStyle}>Clase</label>
        <select
          className={inputStyle}
          name='nameId'
          onChange={handleChange}
          required
          value={cocktails.nameId}
        >
          <option className='flex' disabled hidden value=''>
            Selecciona una clase de cocktail ▿
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
        <div className='mb-4 mx-auto'>
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
        <input
          accept='image/*'
          className='my-4 text-peach-fuzz hover:cursor-pointer sm:w-96'
          name='image'
          onChange={handleChange}
          {...(editing ? {} : { required: true })}
          type='file'
          // value={cocktails.image}
        />

        <label className={labelStyle}>Historia</label>
        <textarea
          className={textAreaStyle}
          name='history'
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
          placeholder='Historia'
          required
          value={cocktails.history}
        />

        <label className={labelStyle}>Método de Elaboración</label>
        <select
          className={inputStyle}
          name='preparationMethod'
          onChange={handleChange}
          required
          value={cocktails.preparationMethod}
        >
          <option className='flex' disabled hidden value=''>
            Selecciona un Método ▿
          </option>
          <option value='Directo'>Directo</option>
          <option value='Agitado - Shake'>Agitado - Shake</option>
          <option value='Refrescado - Stirr'>Refrescado - Stirr</option>
          <option value='Licuado - Blend'>Licuado - Blend</option>
          <option value='Swizzle'>Swizzle</option>
          <option value='Rolado - Throwing'>Rolado - Throwing</option>
        </select>

        <label className={labelStyle}>Vaso</label>
        <select
          className={inputStyle}
          name='glass'
          onChange={handleChange}
          required
          value={cocktails.glass}
        >
          <option className='flex' disabled hidden value=''>
            Selecciona un tipo de vaso ▿
          </option>
          <option value='Copa Balon'>Copa Balon</option>
          <option value='Copa Champaña'>Copa Champaña</option>
          <option value='Copa Cognac'>Copa Cognac</option>
          <option value='Copa Flauta'>Copa Flauta</option>
          <option value='Copa Hurricane'>Copa Hurricane</option>
          <option value='Copa Irlandesa'>Copa Irlandesa</option>
          <option value='Copa Margarita'>Copa Margarita</option>
          <option value='Copa Martini'>Copa Martini</option>
          <option value='Copa Shot'>Copa Shot</option>
          <option value='Copa Tiki'>Copa Tiki</option>
          <option value='Copa Vino'>Copa Vino</option>
          <option value='Jarra'>Jarra</option>
          <option value='Mule Mug'>Mule Mug</option>
          <option value='Vaso Collins'>Vaso Collins</option>
          <option value='Vaso Old Fashioned'>Vaso Old Fashioned</option>
          <option value='Vaso Highball'>Vaso Highball</option>
          <option value='Vaso Pilsner'>Vaso Pilsner</option>
        </select>

        <label className={labelStyle}>Familia</label>
        <select
          className={inputStyle}
          name='category'
          onChange={handleChange}
          placeholder='Categoria'
          required
          value={cocktails.category}
        >
          <option className='flex' disabled hidden value=''>
            Selecciona la Familia del Cocktail ▿
          </option>
          <option value='Clerico'>Clerico</option>
          <option value='Cobbler'>Cobbler</option>
          <option value='Collins'>Collins</option>
          <option value='Cooler'>Cooler</option>
          <option value='Crusta'>Crusta</option>
          <option value='Daisy'>Daisy</option>
          <option value='Egg-Nog'>Egg-Nogg</option>
          <option value='Fix'>Fix</option>
          <option value='Fizz'>Fizz</option>
          <option value='Flips'>Flip</option>
          <option value='Frappe'>Frappe</option>
          <option value='Grog'>Grog/Toddy</option>
          <option value='Highball'>Highball</option>
          <option value='Julep'>Julep</option>
          <option value='Posset'>Posset</option>
          <option value='Sours'>Sours</option>
        </select>

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
          className={`h-40 ${inputStyle}`}
          name='preparation'
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
          placeholder='Ingresa los pasos separados por comas'
          required
          value={cocktails.preparation}
        />
        {editing ? (
          <div className='flex'>
            <SubmitButton title='Guardar' />
            <SubmitButton title='Cancelar' />
          </div>
        ) : (
          <SubmitButton title='Crear' />
        )}
      </form>
    </div>
  );
}

export default function HistoryFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CocktailsFormContent />
    </Suspense>
  );
}
