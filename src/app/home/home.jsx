import React from 'react';
import IntroSwiper from './introSwiper';
import News from './news';
import { mockNews } from '@/data/newsData';
import Link from 'next/link';
import Image from 'next/image';
import Hero from './hero';
import Bento from './bento';
import WhiteFull from '@/components/layout/WhiteFull';

const Home = () => {
    return (
        <>
            <Hero />
            <WhiteFull />
            <Bento />
            <IntroSwiper title='Programs' />
            <News
                mockNews={mockNews}
                title={<span className='text-3xl font-semibold tracking-tight text-gray-900'>NEWS</span>}
                class='flex items-center text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700'
            />
        </>
    );
};

export default Home;
