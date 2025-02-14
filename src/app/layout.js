'use client';

import '@/styles/globals.scss';
import { Providers } from '@/components/providers';
import SkipNav from '@/components/layout/header/SkipNav';

import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <Head>
        <title>Seoul-Music-Festival</title>
        <meta
          property='og:type'
          content='권병윤 개인프로젝트'
        />
        <meta
          property='og:title'
          content='Seoul-Music-Festival'
        />
        <meta
          property='og:description'
          content='권병윤 개인프로젝트'
        />
        <meta
          property='og:image'
          content='/images/titleImage.jpg'
        />
        <meta
          property='og:url'
          content='http://www.mysite.com/article/article1.html'
        />
        <meta
          name='twitter:card'
          content='summary'
        />
        <meta
          name='twitter:title'
          content='Seoul-Music-Festival'
        />
        <meta
          name='twitter:description'
          content='권병윤 개인프로젝트'
        />
        <meta
          name='twitter:image'
          content='http://www.mysite.com/article/article1.html'
        />
        <meta
          name='twitter:domain'
          content='Seoul-Music-Festival'
        />
      </Head>
      <body>
        <Providers>
          <SkipNav />
          <div
            id='wrap'
            className='min-h-screen flex flex-col'
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
