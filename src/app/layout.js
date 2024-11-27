'use client';

import '@/styles/globals.css';
import { Providers } from '@/components/providers';

export default function RootLayout({ children }) {
    return (
        <html
            lang='ko'
            className='light'
        >
            <head>
                <meta charSet='UTF-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <title>next.js themplate</title>
                <meta
                    property='og:type'
                    content='website'
                />
                <meta
                    property='og:title'
                    content='페이지 제목'
                />
                <meta
                    property='og:description'
                    content='페이지 설명'
                />
                <meta
                    property='og:image'
                    content='http://www.mysite.com/article/article1_featured_image.jpg'
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
                    content='페이지 제목'
                />
                <meta
                    name='twitter:description'
                    content='페이지 설명'
                />
                <meta
                    name='twitter:image'
                    content='http://www.mysite.com/article/article1.html'
                />
                <meta
                    name='twitter:domain'
                    content='사이트 명'
                />
                <link
                    rel='shortcut icon'
                    href='http://www.mysite.com/favicon.ico'
                />
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css'
                />
            </head>
            <body>
                <Providers>
                    <div id='skip-nav'>
                        <a href='#gnb'>메뉴 바로가기</a>
                        <a href='#container'>본문 바로가기</a>
                    </div>
                    <div id='wrap'>{children}</div>
                </Providers>
            </body>
        </html>
    );
}
