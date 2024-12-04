'use client';

import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Header = ({ type = 'type1' }) => {
    const renderheader = () => {};

    return renderheader();
};

const renderHeader = () => {
    switch (type) {
        case 'type1':
            return (
                <header className='fixed top-0 left-0 right-0 z-50 bg-white-700 backdrop-blur-md py-3'>
                    <Container
                        size='full'
                        className='flex justify-between items-center'
                    >
                        <Heading as='h1'>logo</Heading>
                        <nav>nav</nav>
                    </Container>
                </header>
            );
        case 'type2':
            return (
                <header>
                    {' '}
                    <Container>
                        <button>이전</button>
                        {title && <Heading>{title}</Heading>}
                        {sharing && <button>공유</button>}
                        {/* {등록 && <button>등록</button>} */}
                    </Container>
                </header>
            );
        case 'type3':
            return <div>type3</div>;
        default:
            return <div>default</div>;
    }
};

export default Header;
