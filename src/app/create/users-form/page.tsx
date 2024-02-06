'use client';

import axios from 'axios';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

import BackButton from '@/components/back-button';
import SubmitButton from '@/components/submit-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/v1/users`;
const tokenFile = process.env.NEXT_PUBLIC_TOKEN_FILE;

const initialForm = {
  name: '',
  email: '',
  avatar: '',
  password: '',
  confirmPassword: '',
};

export default function UsersFormPage() {
  const [users, setUsers] = useState(initialForm);
  const [files, setFiles] = useState([]);
  const [editing, setEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get('id');

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        try {
          const response = await axios.get(`${url}/${id}`);
          const result = response.data;
          setUsers(result);
          setEditing(true);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchUser();
  }, [id]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleUpload = (e: { target: { files: any } }) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!editing) {
      if (users.password !== users.confirmPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Las contraseñas no coinciden',
          showCloseButton: true,
        });
        return;
      }

      const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.<>,:;{}=+])[A-Za-z\d@$!%*?&@$!%*?&.<>,:;{}=+]{8,}$/;

      if (!passwordRegex.test(users.password)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'La contraseña debe tener al menos una mayúscula, un número y un carácter especial',
          showCloseButton: true,
        });
        return;
      }

      // Check if the email already exists
      const response = await axios.get(url);
      const result = response.data.some(
        (user: { email: string }) => user.email === users.email
      );

      if (result) {
        Swal.fire({
          icon: 'error',
          title: 'El email ya está registrado',
          text: 'Por favor, introduce otro email',
          showCloseButton: true,
        });
        return;
      }
    }

    // Upload the image
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
            Authorization: `Bearer ${
              editing ? localStorage.getItem('token') : tokenFile
            } `,
          },
        }
      );

      const result = response.data;

      const imageUrl = result.map(
        (image: { secure_url: any }) => image.secure_url
      );

      const updateUsers = { ...users, avatar: imageUrl[0] };

      if (editing) {
        try {
          await axios.patch(`${url}/${id}`, updateUsers, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          localStorage.setItem('user', JSON.stringify(updateUsers));
          Swal.fire({
            icon: 'success',
            title: 'Tus datos se actualizaron correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
          router.push('/');
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
        await axios.post(url, updateUsers);

        setUsers(initialForm);

        console.log('form submitted');

        Swal.fire({
          icon: 'success',
          title: 'Usuario creado correctamente',
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
      console.log((error as Error).message);
    }
  };

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | { target: { files?: FileList; name: string; value: string } }
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setUsers({ ...users, [name]: value });

    if (name === 'avatar' && files) {
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
          Editar Usuario
        </div>
      ) : (
        <div className='text-4xl font-bold text-peach-fuzz text-center sm:my-6 mt-20 mb-6'>
          Nuevo Usuario
        </div>
      )}
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
        {editing ? null : (
          <>
            <label className={labelStyle}>Email</label>
            <input
              className={inputStyle}
              id='email'
              name='email'
              onChange={handleChange}
              placeholder='Email'
              {...(editing ? {} : { required: true })}
              type='email'
              value={users.email}
            />
            <label className={labelStyle}>Password</label>
            <div className='flex relative sm:w-96'>
              <input
                className={inputStyle}
                id='password'
                minLength={8}
                name='password'
                onChange={handleChange}
                placeholder='Password'
                {...(editing ? {} : { required: true })}
                type={showPassword ? 'text' : 'password'}
                value={users.password}
              />
              <div
                className='absolute pt-2 right-0 mr-5 cursor-pointer'
                onClick={togglePassword}
              >
                {showPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaRegEye size={20} />
                )}
              </div>
            </div>

            <label className={labelStyle}>Confirma tu Password</label>
            <div className='flex relative sm:w-96'>
              <input
                className={inputStyle}
                id='confirmPassword'
                name='confirmPassword'
                onChange={handleChange}
                placeholder='Confirmar Password'
                {...(editing ? {} : { required: true })}
                type={showConfirmPassword ? 'text' : 'password'}
                value={users.confirmPassword}
              />
              <div
                className='absolute pt-2 right-0 mr-5 cursor-pointer'
                onClick={toggleConfirmPassword}
              >
                {showConfirmPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaRegEye size={20} />
                )}
              </div>
            </div>
          </>
        )}
        <label className={labelStyle}>Avatar</label>
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
          className={inputStyle}
          id='avatar'
          name='avatar'
          onChange={handleChange}
          type='file'
        />
        {editing ? (
          <SubmitButton title='Guardar cambios' />
        ) : (
          <SubmitButton title='Crear' />
        )}
      </form>
    </div>
  );
}
