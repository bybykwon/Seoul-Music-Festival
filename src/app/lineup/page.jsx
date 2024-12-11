import Header from '@/components/layout/header/Header';
import Image from 'next/image';
import React from 'react';

const Lineup = () => {
    return (
        <div>
            <Header />
            <div className='min-h-screen flex flex-col items-center justify-center p-5'>
                <strong className='pt-[50px] pb-2 text-3xl font-bold animate-slide-up text-violet-900'>라인업</strong>
                <Image
                    className='h-[80vh] w-[85vh] object-contain
										 object-center 
										shadow-lg animate-slide-up delay-700'
                    src='/images/components/lineup.jpg'
                    alt=''
                    width={600}
                    height={600}
                />
            </div>
        </div>
    );
};

export default Lineup;
