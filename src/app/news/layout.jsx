'use client';

import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import { CloseButton, Container } from '@chakra-ui/react';
import React from 'react';

const NewsLayout = ({ children }) => {
    return (
        <>
            <div>
                <Header
                    type='type2'
                    title={'뉴스'}
                />
                <CloseButton
                    className='absolute top-0 right-10 h-20 w-20 z-50'
                    onClick={() => (window.location.href = '/')}
                />
            </div>

            <Main>
                <Container className='pt-20 pb-20'>{children}</Container>
            </Main>
        </>
    );
};

export default NewsLayout;
