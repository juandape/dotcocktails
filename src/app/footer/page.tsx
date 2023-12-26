export default function Footer() {
  return (
    <footer className='bg-gradient-to-t from-black-top to-blue-tp fixed bottom-0 w-screen h-10'>
      <div>
        <p className='text-center text-white sm:text-sm text-xs mt-4'>
          &copy; {new Date().getFullYear()} Dot Cocktails. Todos los derechos reservados.
          <a
            className='text-blue-tp'
          >
            </a>
        </p>
      </div>
    </footer>
  );
}
