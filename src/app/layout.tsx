import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import Header from '@/app/header/page';
import CookieConsent from '@/components/cookie-consent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dot Cocktails',
  description: 'A collection of cocktails from Dot Cocktails',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://res.cloudinary.com/dpvmwsbq8/image/upload/v1706739163/upload-folder/logoNegro_jwfjcv.png'
          rel='shortcut icon'
          type='image/x-icon'
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
