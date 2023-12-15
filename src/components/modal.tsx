
import { MdClose } from 'react-icons/md';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({isOpen, onClose }: Props) {
  return (
    <>
      <div className='w-screen h-screen fixed top-0 left-0 bg-black/[0.5] flex'>
        <div className={`mx-auto mt-40 bg-peach-fuzz w-96 h-60 relative rounded-lg p-4 ${isOpen ? 'open' : ''}`}>
          <div className='text-center font-bold border-b-2 border-dotted border-black pb-4'>
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
          <form className='flex flex-col m-4'>
          <label className='mb-4'>
            Username:
            <input type='text' />
          </label>
          <label className='mb-4'>
            Password:
            <input type='password' />
          </label>
          <button
            className='border-2 w-20 m-auto bg-blue-tp text-peach-fuzz rounded-xl'
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
