type SubmitButtonProps = {
  title: string;
  onClick?: () => Promise<void>;
};

export default function SubmitButton({ title, onClick }: SubmitButtonProps) {
  return (
    <button
      className='px-4 py-2 font-bold text-white bg-blue-tp border-2 border-peach-fuzz rounded hover:bg-peach-fuzz hover:text-blue-tp hover:font-bold focus:outline-none focus:shadow-outline duration-500 flex mt-4 mx-auto'
      onClick={onClick}
      type='submit'
    >
      {title}
    </button>
  );
}
