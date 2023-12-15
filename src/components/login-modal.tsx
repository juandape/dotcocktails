import React from 'react';
import { MdClose } from 'react-icons/md';
import Swal from 'sweetalert2';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    Swal.fire({
      title: 'Login Successful!',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <>
      <div className='w-screen h-screen fixed  top-0 left-0 sm:-left-20 bg-black/[0.5]'>
        <div
          className={`mx-auto mt-40 bg-peach-fuzz w-80 sm:w-96 h-70 relative rounded-lg p-4 ${
            isOpen ? 'open' : ''
          }`}
        >
          <div className='text-center font-bold border-b-2 border-dotted border-black pb-2'>
            Login
          </div>
          <div className='absolute top-0 right-0'>
            <button
              className='absolute top-4 right-4 px-2 rounded-sm hover:text-peach-fuzz hover:bg-blue-tp duration-500'
              onClick={onClose}
            >
              <MdClose size={20} />
            </button>
          </div>
          <form className='flex flex-col m-4' onSubmit={handleSubmit}>
            <label className='mb-4'></label>
              Email:
              <input required type='email' />

            <label className='mb-4'></label>
              Password:
              <input required type='password' />

            <button
              className='border-2 w-20 mx-auto my-4 bg-blue-tp text-peach-fuzz rounded-xl hover:font-bold duration-500 hover:border-blue-tp'
              type='submit'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
