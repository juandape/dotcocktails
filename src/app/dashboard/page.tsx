import Image from 'next/image';

import TopCocktailsPage from '@/app/topcocktails/page';

import NewsPage from '../news/page';
import SocialNetworkPage from '../social/page';

export default function DashboardPage() {
  return (
    <div className='animate-page-enter'>
      <Image
        alt='dot cocktails logo'
        className='m-auto pt-20 mb-40'
        height={700}
        priority
        src='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1706739163/upload-folder/logoBlanco_k0nyhu.png'
        width={700}
      />
      <TopCocktailsPage />
      <NewsPage />
      <SocialNetworkPage />
    </div>
  );
}
