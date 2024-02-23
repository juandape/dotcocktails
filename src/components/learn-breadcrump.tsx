import Link from 'next/link';

export default function LearnBreadcrumb({ name }: { name: string }) {
  return (
    <nav className='flex'>
      <Link href='/'>
        <div className='text-white hover:underline ml-6 text-xs'>Home</div>
      </Link>
      <span className='mx-2 text-xs text-white'>/</span>
      <Link href='/learn'>
        <div className='text-white hover:underline text-xs'>Aprende</div>
      </Link>
      <span className='mx-2 text-xs text-white'>/</span>
      <span className='text-gray-500 text-xs'>{name}</span>
    </nav>
  );
}
