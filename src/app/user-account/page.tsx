'use client';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import BackButton from '@/components/back-button';
import SubmitButton from '@/components/submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/v1/users`;

export default function UsersUpdatePage() {
  const [files, setFiles] = useState([]);
  const [users, setUsers] = useState({
    _id: '',
    name: '',
    avatar: '',
  });
  const router = useRouter();
  console.log('users', users);

  useEffect(() => {
    const getLocalId = async () => {
      if (typeof window !== 'undefined') {
        const userData = localStorage.getItem('user');
        const { id = '' } = userData ? JSON.parse(userData) : {};
        return id;
      }
    };

    const fetchUser = async () => {
      const localId = await getLocalId();
      setUsers((prevUsers) => ({ ...prevUsers, id: localId }));
      const response = await axios.get(`${url}/${localId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const { data } = response;
      setUsers(data);
    };

    fetchUser();
  }, []);

  const handleUpload = (e: { target: { files: any } }) => {
    setFiles(e.target.files);
  };

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | { target: { files?: FileList; name: string; value: string } }
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setUsers({...users, [name]: value});

    if (name === 'avatar' && files) {
      handleUpload({ target: { files } });
    }
  };

  console.log('User ID:', users._id);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!users._id) {
      console.error('No user id');
      return;
    }

    const { _id, name } = users;
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

      const updateUsers = { ...users, avatar: imageUrl[0] };
      formData.append('name', name);
      formData.append('avatar', imageUrl[0]);

      const res = await axios.patch(`${url}/${_id}`, updateUsers, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('res', res);

      setUsers({
        _id: '',
        name: '',
        avatar: '',
      });

      Swal.fire({
        icon: 'success',
        title: 'Actualización Exitosa',
        timer: 2000,
      });
      console.log('form submitted');

      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(updateUsers));
      }

      router.push('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal!, intentalo de nuevo',
        text: `${error}`,
        showCloseButton: true,
      });
      console.log(error);
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
        Actualiza tus Datos
      </div>
      {/* <Image
        alt='avatar'
        className='my-4 mx-auto'
        height={60}
        src={users.avatar}
        width={60}
      /> */}
      <form
        className='flex flex-col text-left m-auto w-96 p-4'
        onSubmit={handleSubmit}
      >
        <label className={labelStyle}>Nombre</label>
        <input
          className={inputStyle}
          id='name'
          name='name'
          onChange={handleChange}
          placeholder='Nombre'
          required
          type='text'
          value={users.name}
        />

        <label className={labelStyle}>Nuevo Avatar</label>
        <input
          accept='image/*'
          className={inputStyle}
          id='avatar'
          name='avatar'
          onChange={handleChange}
          type='file'
        />
        <div className='mb-4'>
          {Array.from(files).map((file, index) => (
            <Image
              alt='avatar'
              height={100}
              key={index}
              src={file ? URL.createObjectURL(file) : ''}
              width={100}
            />
          ))}
        </div>
        <SubmitButton title='Actualizar' />
      </form>
    </div>
  );
}
