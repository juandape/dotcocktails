'use client';

import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import Swal from 'sweetalert2';

import BackButton from '@/components/back-button';
import SubmitButton from '@/components/submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/histories`;

const initialForm = {
  title: '',
  images: [] as string[],
  content1: '',
  content2: '',
  content3: '',
  content4: '',
  content5: '',
};

export default function HistoryFormPage() {
  const router = useRouter();
  const [histories, setHistories] = useState(initialForm);
  const [files, setFiles] = useState([]);

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
        `${BASE_URL}/api/upload/files`,
        formData
      );
      const result = response.data;

      const imageUrl = result.map(
        (image: { secure_url: any }) => image.secure_url
      );

      console.log('imageurl', imageUrl);

      const newHistory = {
        ...histories,
        images: imageUrl,
      };

      const res = await axios.post(url, newHistory);
      console.log(res);

      setHistories(initialForm);

      console.log('form submitted');

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Historia creada',
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
      <div className='text-4xl font-bold text-peach-fuzz text-center sm:my-6 mt-20 mb-6'>
        Nueva Historia
      </div>
      <form
        className='flex flex-col text-left m-auto w-96 p-4'
        onSubmit={handleSubmit}
      >
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
          value={histories.images}
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
        <label className={labelStyle}>Contenido 2</label>
        <textarea
          className={inputStyle}
          name='content2'
          onChange={handleChange}
          placeholder='contenido 2'
          value={histories.content2}
        />
        <label className={labelStyle}>Contenido 3</label>
        <textarea
          className={inputStyle}
          name='content3'
          onChange={handleChange}
          placeholder='contenido 3'
          value={histories.content3}
        />
        <label className={labelStyle}>Contenido 4</label>
        <textarea
          className={inputStyle}
          name='content4'
          onChange={handleChange}
          placeholder='contenido 4'
          value={histories.content4}
        />
        <label className={labelStyle}>Contenido 5</label>
        <textarea
          className={inputStyle}
          name='content5'
          onChange={handleChange}
          placeholder='contenido 5'
          value={histories.content5}
        />

        <SubmitButton title='Enviar' />
      </form>
    </div>
  );
}
