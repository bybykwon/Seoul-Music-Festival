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
            <IntroSwiper />
            <News
                mockNews={mockNews}
                title='뉴스'
            />
        </>
    );
};

export default Home;
