'use client';

import Header from '@/components/layout/header/Header';
import Image from 'next/image';
import React, { useState } from 'react';
import StageInfo from '@/components/StageInfo'; // StageInfo 컴포넌트 불러오기

const Lineup = () => {
    const [activeContent, setActiveContent] = useState(1);

    const handleButtonClick = (contentIndex) => {
        setActiveContent(contentIndex);
    };

    return (
        <div>
            <Header />
            <div>
                <div className='min-h-screen flex  items-center justify-center p-5'>
                    <Image
                        className='h-[80vh] w-[85vh] object-contain object-center animate-slide-up delay-700 sm:block hidden'
                        src='/images/components/lineup.jpg'
                        alt='Lineup'
                        width={600}
                        height={600}
                    />

                    {/* 버튼들 */}
                    <div className='mt-12 pt-4'>
                        <strong className='ml-[20px] text-3xl font-bold animate-slide-up text-violet-900'>
                            라인업
                        </strong>
                        <div className='flex-col mt-10'>
                            {' '}
                            <div className='mt-10 flex gap-4'>
                                <button
                                    onClick={() => handleButtonClick(1)}
                                    className={`relative px-6 py-2 font-semibold rounded-lg transition duration-300 group
			                            ${activeContent === 1 ? 'text-black' : 'text-gray-500'}`}
                                >
                                    9.27 FRI
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300 transform 
			                                ${
                                                activeContent === 1 ? 'scale-x-100' : 'scale-x-0'
                                            } origin-left group-hover:scale-x-100`}
                                    ></span>
                                </button>
                                <button
                                    onClick={() => handleButtonClick(2)}
                                    className={`relative px-6 py-2 font-semibold rounded-lg transition duration-300 group
			                            ${activeContent === 2 ? 'text-black' : 'text-gray-500'}`}
                                >
                                    9.28 SAT
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300 transform 
			                                ${
                                                activeContent === 2 ? 'scale-x-100' : 'scale-x-0'
                                            } origin-left group-hover:scale-x-100`}
                                    ></span>
                                </button>
                                <button
                                    onClick={() => handleButtonClick(3)}
                                    className={`relative px-6 py-2 font-semibold rounded-lg transition duration-300 group
			                            ${activeContent === 3 ? 'text-black' : 'text-gray-500'}`}
                                >
                                    9.29 SUN
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300 transform 
			                                ${
                                                activeContent === 3 ? 'scale-x-100' : 'scale-x-0'
                                            } origin-left group-hover:scale-x-100`}
                                    ></span>
                                </button>
                            </div>
                        </div>
                        {/* 전환되는 콘텐츠 */}
                        <div className='mt-6 p-4 w-full max-w-3xl bg-white rounded-lg'>
                            {activeContent === 1 && (
                                <>
                                    <StageInfo
                                        stageName='하트 스테이지'
                                        description='크라잉넛'
                                        imageUrl='/images/components/lineup/cryin.jpg'
                                        width='200px'
                                    />
                                    <StageInfo
                                        stageName='스마일 스테이지'
                                        description='브로콜리너마저'
                                        imageUrl='/images/components/lineup/brocoli.jpg'
                                        width='200px'
                                    />
                                </>
                            )}
                            {activeContent === 2 && (
                                <>
                                    <StageInfo
                                        stageName='하트 스테이지'
                                        description='김윤아'
                                        imageUrl='/images/components/lineup/kim.jpg'
                                        width='200px'
                                    />
                                    <StageInfo
                                        stageName='스마일 스테이지'
                                        description='ADOY'
                                        imageUrl='/images/components/lineup/adoy.jpg'
                                        width='200px'
                                    />
                                </>
                            )}
                            {activeContent === 3 && (
                                <>
                                    <StageInfo
                                        stageName='하트 스테이지'
                                        description='빅마마'
                                        imageUrl='/images/components/lineup/bigmama.jpg'
                                        width='200px'
                                    />
                                    <StageInfo
                                        stageName='스마일 스테이지'
                                        description='소란'
                                        imageUrl='/images/components/lineup/soran.jpg'
                                        width='200px'
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lineup;
