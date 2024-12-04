'use client';

import { Button, Container, Heading } from '@chakra-ui/react';
import { ChevronLeft, Menu, Share } from 'lucide-react';
import React, { useState } from 'react';
import Navigation from './Navigation';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel } from '@headlessui/react';

const navigation = [
    { name: 'SMF 소개', href: '#' },
    { name: '라인업', href: '#' },
    { name: '프로그램', href: '#' },
    { name: '갤러리', href: '#' },
];

const Header = ({ type = 'type1', title, sharing, prev }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const renderHeader = () => {
        switch (type) {
            // 메인헤더
            case 'type1':
                return (
                    <Container
                        size='full'
                        className='flex justify-between items-center'
                    >
                        <div
                            aria-label='Global'
                            className='flex items-center justify-between lg:px-8 w-full'
                        >
                            <h1 className='flex lg:flex-1'>
                                <a
                                    href='#'
                                    className='-m-1.5 p-1.5'
                                >
                                    <span className='sr-only'>Your Company</span>
                                    <Image
                                        alt=''
                                        src='/images/pattern/common/logo.png'
                                        width={32}
                                        height={32}
                                        className='h-8 w-auto'
                                    />
                                </a>
                            </h1>
                            <div className='flex lg:hidden'>
                                <button
                                    type='button'
                                    onClick={() => setMobileMenuOpen(true)}
                                    className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                                >
                                    <span className='sr-only'>Open main menu</span>
                                    <Bars3Icon
                                        aria-hidden='true'
                                        className='size-6'
                                    />
                                </button>
                            </div>
                            <nav className='hidden lg:flex lg:gap-x-12'>
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className='text-sm/6 font-semibold text-gray-900'
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                                <a
                                    href='#'
                                    className='text-sm/6 font-semibold text-gray-900'
                                >
                                    Log in <span aria-hidden='true'>&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <Dialog
                            open={mobileMenuOpen}
                            onClose={setMobileMenuOpen}
                            className='lg:hidden'
                        >
                            <div className='fixed inset-0 z-50' />
                            <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                                <div className='flex items-center justify-between'>
                                    <a
                                        href='#'
                                        className='-m-1.5 p-1.5'
                                    >
                                        <span className='sr-only'>Your Company</span>
                                        <Image
                                            alt=''
                                            src='/images/pattern/common/logo.png'
                                            width={36}
                                            height={36}
                                            className='h-8 w-auto'
                                        />
                                    </a>
                                    <button
                                        type='button'
                                        onClick={() => setMobileMenuOpen(false)}
                                        className='-m-2.5 rounded-md p-2.5 text-gray-700'
                                    >
                                        <span className='sr-only'>Close menu</span>
                                        <XMarkIcon
                                            aria-hidden='true'
                                            className='size-6'
                                        />
                                    </button>
                                </div>
                                <div className='mt-6 flow-root'>
                                    <div className='-my-6 divide-y divide-gray-500/10'>
                                        <div className='space-y-2 py-6'>
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                        <div className='py-6'>
                                            <a
                                                href='#'
                                                className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                                            >
                                                Log in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </Dialog>
                    </Container>
                );
            // 이전, 타이틀, 각페이지에 맞는 버튼
            case 'type2':
                return (
                    <Container className='flex justify-between items-center'>
                        {prev && (
                            <Button
                                variant='icon'
                                align='left'
                            >
                                <ChevronLeft
                                    strokeWidth={3}
                                    size={3}
                                />
                                <span className='blind'>이전</span>
                            </Button>
                        )}
                        {title && <Heading>{title}</Heading>}
                        {sharing && (
                            <Button
                                variant='icon'
                                align='right'
                            >
                                <Share strokeWidth={3} />
                                <span className='blind'>공유</span>
                            </Button>
                        )}
                        {/* {등록 && <Button>등록</Button>} */}
                    </Container>
                );
            // 로그인 헤더
            case 'type3':
                return <Container>type3</Container>;
            default:
                return <Container>default</Container>;
        }
    };

    return (
        <>
            <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 flex items-center h-20'>
                {renderHeader()}
            </header>
        </>
    );
};

export default Header;
