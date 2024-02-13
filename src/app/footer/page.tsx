export default function Footer() {
  return (
    <footer className='bg-gradient-to-t from-black-top to-blue-tp fixed bottom-0 w-screen h-10 cursor-default'>
      <div>
        <p className='text-center text-white sm:text-sm text-xs mt-4'>
          Copyright &copy; 2019-2024
          <a
            className='hover:text-peach-fuzz duration-500'
            href='https://juandape.dev'
            target='blank'
          >
            <strong> juandape.dev - Dot Cocktails </strong>
          </a>
          All rights reserved.
          <a className='text-blue-tp'></a>
        </p>
      </div>
    </footer>
  );
}
