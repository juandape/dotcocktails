'use client';

import axios from 'axios';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, Suspense, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

// import BackButton from '@/components/back-button';
import { useGetRole } from '@/components/get-role';
import {
  inputStyle,
  labelStyle,
  textAreaStyle,
  titleClass,
} from '@/components/styles';
import SubmitButton from '@/components/submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/v1/histories`;

const initialForm = {
  nameId: '',
  title: '',
  images: [] as string[],
  subtitle1: '',
  content1: '',
  subtitle2: '',
  content2: '',
  subtitle3: '',
  content3: '',
  subtitle4: '',
  content4: '',
  subtitle5: '',
  content5: '',
  subtitle6: '',
  content6: '',
  subtitle7: '',
  content7: '',
  subtitle8: '',
  content8: '',
  subtitle9: '',
  content9: '',
  subtitle10: '',
  content10: '',
  subtitle11: '',
  content11: '',
  subtitle12: '',
  content12: '',
  subtitle13: '',
  content13: '',
  subtitle14: '',
  content14: '',
  subtitle15: '',
  content15: '',
};

function HistoryFormContent() {
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
        images: [...imageUrl],
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

  return (
    <div>
      {/* <BackButton /> */}
      {editing ? (
        <div className={titleClass}>Editar Historia</div>
      ) : (
        <div className={titleClass}>Nueva Historia</div>
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
        <label className={labelStyle}>Subtitulo 1</label>
        <input
          className={inputStyle}
          name='subtitle1'
          onChange={handleChange}
          placeholder='Subtitulo 1'
          type='text'
          value={histories.subtitle1}
        />
        <label className={labelStyle}>Contenido 1</label>
        <textarea
          className={textAreaStyle}
          name='content1'
          onChange={handleChange}
          placeholder='contenido 1'
          value={histories.content1}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 2</label>
        <input
          className={inputStyle}
          name='subtitle2'
          onChange={handleChange}
          placeholder='Subtitulo 2'
          type='text'
          value={histories.subtitle2}
        />

        <label className={labelStyle}>Contenido 2</label>
        <textarea
          className={textAreaStyle}
          name='content2'
          onChange={handleChange}
          placeholder='contenido 2'
          value={histories.content2}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 3</label>
        <input
          className={inputStyle}
          name='subtitle3'
          onChange={handleChange}
          placeholder='Subtitulo 3'
          type='text'
          value={histories.subtitle3}
        />

        <label className={labelStyle}>Contenido 3</label>
        <textarea
          className={textAreaStyle}
          name='content3'
          onChange={handleChange}
          placeholder='contenido 3'
          value={histories.content3}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 4</label>
        <input
          className={inputStyle}
          name='subtitle4'
          onChange={handleChange}
          placeholder='Subtitulo 4'
          type='text'
          value={histories.subtitle4}
        />

        <label className={labelStyle}>Contenido 4</label>
        <textarea
          className={textAreaStyle}
          name='content4'
          onChange={handleChange}
          placeholder='contenido 4'
          value={histories.content4}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 5</label>
        <input
          className={inputStyle}
          name='subtitle5'
          onChange={handleChange}
          placeholder='Subtitulo 5'
          type='text'
          value={histories.subtitle5}
        />

        <label className={labelStyle}>Contenido 5</label>
        <textarea
          className={textAreaStyle}
          name='content5'
          onChange={handleChange}
          placeholder='contenido 5'
          value={histories.content5}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 6</label>
        <input
          className={inputStyle}
          name='subtitle6'
          onChange={handleChange}
          placeholder='Subtitulo 6'
          type='text'
          value={histories.subtitle6}
        />

        <label className={labelStyle}>Contenido 6</label>
        <textarea
          className={textAreaStyle}
          name='content6'
          onChange={handleChange}
          placeholder='contenido 6'
          value={histories.content6}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 7</label>
        <input
          className={inputStyle}
          name='subtitle7'
          onChange={handleChange}
          placeholder='Subtitulo 7'
          type='text'
          value={histories.subtitle7}
        />

        <label className={labelStyle}>Contenido 7</label>
        <textarea
          className={textAreaStyle}
          name='content7'
          onChange={handleChange}
          placeholder='contenido 7'
          value={histories.content7}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 8</label>
        <input
          className={inputStyle}
          name='subtitle8'
          onChange={handleChange}
          placeholder='Subtitulo 8'
          type='text'
          value={histories.subtitle8}
        />

        <label className={labelStyle}>Contenido 8</label>
        <textarea
          className={textAreaStyle}
          name='content8'
          onChange={handleChange}
          placeholder='contenido 8'
          value={histories.content8}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 9</label>
        <input
          className={inputStyle}
          name='subtitle9'
          onChange={handleChange}
          placeholder='Subtitulo 9'
          type='text'
          value={histories.subtitle9}
        />

        <label className={labelStyle}>Contenido 9</label>
        <textarea
          className={textAreaStyle}
          name='content9'
          onChange={handleChange}
          placeholder='contenido 9'
          value={histories.content9}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 10</label>
        <input
          className={inputStyle}
          name='subtitle10'
          onChange={handleChange}
          placeholder='Subtitulo 10'
          type='text'
          value={histories.subtitle10}
        />

        <label className={labelStyle}>Contenido 10</label>
        <textarea
          className={textAreaStyle}
          name='content10'
          onChange={handleChange}
          placeholder='contenido 10'
          value={histories.content10}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 11</label>
        <input
          className={inputStyle}
          name='subtitle11'
          onChange={handleChange}
          placeholder='Subtitulo 11'
          type='text'
          value={histories.subtitle11}
        />
        <label className={labelStyle}>Contenido 11</label>
        <textarea
          className={textAreaStyle}
          name='content11'
          onChange={handleChange}
          placeholder='contenido 11'
          value={histories.content11}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 12</label>
        <input
          className={inputStyle}
          name='subtitle12'
          onChange={handleChange}
          placeholder='Subtitulo 12'
          type='text'
          value={histories.subtitle12}
        />
        <label className={labelStyle}>Contenido 12</label>
        <textarea
          className={textAreaStyle}
          name='content12'
          onChange={handleChange}
          placeholder='contenido 12'
          value={histories.content12}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 13</label>
        <input
          className={inputStyle}
          name='subtitle13'
          onChange={handleChange}
          placeholder='Subtitulo 13'
          type='text'
          value={histories.subtitle13}
        />
        <label className={labelStyle}>Contenido 13</label>
        <textarea
          className={textAreaStyle}
          name='content13'
          onChange={handleChange}
          placeholder='contenido 13'
          value={histories.content13}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 14</label>
        <input
          className={inputStyle}
          name='subtitle14'
          onChange={handleChange}
          placeholder='Subtitulo 14'
          type='text'
          value={histories.subtitle14}
        />
        <label className={labelStyle}>Contenido 14</label>
        <textarea
          className={textAreaStyle}
          name='content14'
          onChange={handleChange}
          placeholder='contenido 14'
          value={histories.content14}
        />
        <hr />
        <label className={labelStyle}>Subtitulo 15</label>
        <input
          className={inputStyle}
          name='subtitle15'
          onChange={handleChange}
          placeholder='Subtitulo 15'
          type='text'
          value={histories.subtitle15}
        />
        <label className={labelStyle}>Contenido 15</label>
        <textarea
          className={textAreaStyle}
          name='content15'
          onChange={handleChange}
          placeholder='contenido 15'
          value={histories.content15}
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

export default function HistoryFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HistoryFormContent />
    </Suspense>
  );
}
