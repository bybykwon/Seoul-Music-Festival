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
                    name='description'
                    content='권병윤 개인프로젝트'
                />
                <meta
                    property='og:image'
                    content='/images/titleImage.jpg'
                />
                <meta
                    property='og:url'
                    content='http://www.mysite.com'
                />
                {/* 기타 메타 태그 */}
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
