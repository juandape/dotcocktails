import Link from 'next/link';

export default function GeneralBreadcrumb({ name }: { name: string }) {
  return (
    <nav className='flex'>
      <Link href='/'>
        <div className='text-white hover:underline ml-6 text-xs'>Home</div>
      </Link>
      <span className='mx-2 text-xs text-white'>/</span>
      <span className='text-gray-500 text-xs'>{name}</span>
    </nav>
  );
}
