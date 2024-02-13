import Link from 'next/link';

import useFetchData from '@/components/fetch-data';

export default function Breadcrumb({ nameId }: { nameId: string }) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/histories`;
  const { data: histories, loading } = useFetchData(url);

  if (loading) return null;

  const filteredHistories = histories.filter(
    (history: any) => history.nameId === nameId
  );

  return (
    <nav className='flex items-center'>
      <Link href='/'>
        <div className='text-white hover:underline ml-6 text-xs'>Home</div>
      </Link>
      <span className='mx-2 text-xs text-white'>/</span>
      <span className='text-gray-500 text-xs'>Historias</span>
      <span className='mx-2 text-xs text-white'>/</span>
      {filteredHistories.map((history: any) => (
        <span className='text-gray-500 text-xs' key={history.id}>
          {history.title}
        </span>
      ))}
    </nav>
  );
}
