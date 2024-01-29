export default function Footer() {
  const currentTimestamp = Date.now();
  const currentDate = new Date(currentTimestamp);
  const currentYear = currentDate.getUTCFullYear();
  return (
    <footer className='bg-gradient-to-t from-black-top to-blue-tp fixed bottom-0 w-screen h-10 cursor-default'>
      <div>
        <p className='text-center text-white sm:text-sm text-xs mt-4'>
          Copyright &copy; {currentYear}{' '}
          <a
            className='hover:text-peach-fuzz duration-500'
            href='https://juandape.dev'
            target='blank'
          >
            <em> juandape.dev </em>
          </a>
          All rights reserved.
          <a className='text-blue-tp'></a>
        </p>
      </div>
    </footer>
  );
}
