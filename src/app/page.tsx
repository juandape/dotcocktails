'use client';

import DashboardPage from '@/app/dashboard/page';
import AgeVerificationAlert from '@/components/age-verification';

import Footer from './footer/page';

export default function Home() {
  return (
    <>
      <AgeVerificationAlert onConfirm={() => {}} />
      <DashboardPage />
      <Footer />
    </>
  );
}
