'use client';

import axios from 'axios';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import BackButton from '@/components/back-button';
import { useGetRole } from '@/components/get-role';
import SubmitButton from '@/components/submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/v1/histories`;

const initialForm = {
  nameId: '',
  title: '',
  image1: [] as string[],
  content1: '',
  image2: [] as string[],
  content2: '',
  image3: [] as string[],
  content3: '',
  image4: [] as string[],
  content4: '',
  image5: [] as string[],
  content5: '',
  image6: [] as string[],
  content6: '',
  image7: [] as string[],
  content7: '',
  image8: [] as string[],
  content8: '',
  image9: [] as string[],
  content9: '',
  image10: [] as string[],
  content10: '',
};

export default function HistoryFormPage() {
  const router = useRouter();
  const [histories, setHistories] = useState(initialForm);
  const [files, setFiles] = useState([]);
  const [editing, setEditing] = useState(false);
  const userRole = useGetRole();
  const params = useSearchParams();
  const id = params.get('id');

  useEffect(() => {
    const fetchHistory = async () => {
      if (id) {
        try {
          const response = await axios.get(`${url}/${id}`);
          const result = response.data;
          setHistories(result);
          setEditing(true);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchHistory();
  }, [id]);

  const handleUpload = (e: { target: { files: any } }) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(histories);

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

      const newHistory = {
        ...histories,
        images: imageUrl,
      };

      if (editing) {
        try {
          await axios.patch(`${url}/${id}`, newHistory, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'X-User-Role': userRole,
            },
          });
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Historia editada satisfactoriamente',
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
          console.log((error as Error).message);
        }
      } else {
        await axios.post(url, newHistory, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setHistories(initialForm);

        console.log('form submitted');

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Historia creada satisfactoriamente',
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
      | { target: { name: any; value: any; files?: FileList } }
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setHistories({ ...histories, [name]: value });

    if (name === 'images' && files) {
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
      {editing ? (
        <div className='text-4xl font-bold text-peach-fuzz text-center sm:my-6 mt-20 mb-6'>
          Editar Historia
        </div>
      ) : (
        <div className='text-4xl font-bold text-peach-fuzz text-center sm:my-6 mt-20 mb-6'>
          Nueva Historia
        </div>
      )}
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
          value={histories.nameId}
        >
          <option className='flex' disabled hidden value=''>
            Selecciona un id para la historia ▿
          </option>
          <option value='cocktail'>Cocktail</option>
          <option value='beer'>Cerveza</option>
          <option value='gin'>Gin</option>
          <option value='rum'>Ron</option>
          <option value='tequila'>Tequila</option>
          <option value='wine'>Vino</option>
          <option value='vodka'>Vodka</option>
          <option value='whisky'>Whisky</option>
        </select>
        <label className={labelStyle}>Titulo</label>
        <input
          className={inputStyle}
          name='title'
          onChange={handleChange}
          placeholder='Titulo de la historia'
          type='text'
          value={histories.title}
        />
        <label className={labelStyle}>imagenes</label>
        <input
          accept='image/*'
          className='my-4 text-peach-fuzz hover:cursor-pointer sm:w-96'
          multiple
          name='images'
          onChange={handleChange}
          type='file'
          // value={histories.images}
        />
        <div className='mb-4 flex'>
          {Array.from(files).map((file, index) => (
            <Image
              alt='images'
              height={100}
              key={index}
              src={file ? URL.createObjectURL(file) : ''}
              width={100}
            />
          ))}
        </div>
        <label className={labelStyle}>Contenido 1</label>
        <textarea
          className={inputStyle}
          name='content1'
          onChange={handleChange}
          placeholder='contenido 1'
          value={histories.content1}
        />
        <hr />

        <label className={labelStyle}>Contenido 2</label>
        <textarea
          className={inputStyle}
          name='content2'
          onChange={handleChange}
          placeholder='contenido 2'
          value={histories.content2}
        />
        <hr />

        <label className={labelStyle}>Contenido 3</label>
        <textarea
          className={inputStyle}
          name='content3'
          onChange={handleChange}
          placeholder='contenido 3'
          value={histories.content3}
        />
        <hr />

        <label className={labelStyle}>Contenido 4</label>
        <textarea
          className={inputStyle}
          name='content4'
          onChange={handleChange}
          placeholder='contenido 4'
          value={histories.content4}
        />
        <hr />

        <label className={labelStyle}>Contenido 5</label>
        <textarea
          className={inputStyle}
          name='content5'
          onChange={handleChange}
          placeholder='contenido 5'
          value={histories.content5}
        />
        <hr />

        <label className={labelStyle}>Contenido 6</label>
        <textarea
          className={inputStyle}
          name='content6'
          onChange={handleChange}
          placeholder='contenido 6'
          value={histories.content6}
        />
        <hr />

        <label className={labelStyle}>Contenido 7</label>
        <textarea
          className={inputStyle}
          name='content7'
          onChange={handleChange}
          placeholder='contenido 7'
          value={histories.content7}
        />
        <hr />

        <label className={labelStyle}>Contenido 8</label>
        <textarea
          className={inputStyle}
          name='content8'
          onChange={handleChange}
          placeholder='contenido 8'
          value={histories.content8}
        />
        <hr />

        <label className={labelStyle}>Contenido 9</label>
        <textarea
          className={inputStyle}
          name='content9'
          onChange={handleChange}
          placeholder='contenido 9'
          value={histories.content9}
        />
        <hr />

        <label className={labelStyle}>Contenido 10</label>
        <textarea
          className={inputStyle}
          name='content10'
          onChange={handleChange}
          placeholder='contenido 10'
          value={histories.content10}
        />
        <hr />
        {editing ? (
          <div className='flex'>
            <SubmitButton title='Editar' />
            <SubmitButton title='Cancelar' />
          </div>
        ) : (
          <SubmitButton title='Crear' />
        )}
      </form>
    </div>
  );
}
