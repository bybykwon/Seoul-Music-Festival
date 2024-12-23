'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/header/Header';
import ProgramBox from '@/components/ProgramBox';

const Program = () => {
    const [activeContent, setActiveContent] = useState(1); // 기본적으로 첫 번째 버튼(9.27 FRI)을 활성화 상태로 설정

    const handleButtonClick = (contentId) => {
        setActiveContent(contentId); // 버튼 클릭 시 activeContent 상태 변경
    };

    return (
        <div>
            <Header />

            <div className='max-w-screen-xl mx-auto px-4 flex-col items-center justify-center p-5'>
                <div className='mt-12 pt-4'>
                    <strong className='ml-[20px] text-3xl font-bold animate-slide-up text-violet-900'>프로그램</strong>
                    <div className='flex-col mt-10'>
                        <div className='mt-10 flex gap-4'>
                            <button
                                onClick={() => handleButtonClick(1)}
                                className={`relative px-6 py-2 font-semibold rounded-lg transition duration-300 group
	                                ${activeContent === 1 ? 'text-black' : 'text-gray-500'}`}
                            >
                                하트 스테이지
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300 transform 
	                                    ${activeContent === 1 ? 'scale-x-100' : 'scale-x-0'}
	                                    origin-left group-hover:scale-x-100`}
                                ></span>
                            </button>
                            <button
                                onClick={() => handleButtonClick(2)}
                                className={`relative px-6 py-2 font-semibold rounded-lg transition duration-300 group
	                                ${activeContent === 2 ? 'text-black' : 'text-gray-500'}`}
                            >
                                스마일 스테이지
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300 transform 
	                                    ${activeContent === 2 ? 'scale-x-100' : 'scale-x-0'}
	                                    origin-left group-hover:scale-x-100`}
                                ></span>
                            </button>
                            <button
                                onClick={() => handleButtonClick(3)}
                                className={`relative px-6 py-2 font-semibold rounded-lg transition duration-300 group
	                                ${activeContent === 3 ? 'text-black' : 'text-gray-500'}`}
                            >
                                부스 스테이지
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300 transform 
	                                    ${activeContent === 3 ? 'scale-x-100' : 'scale-x-0'}
	                                    origin-left group-hover:scale-x-100`}
                                ></span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* 전환되는 콘텐츠 */}
                <div className='mt-6 p-4 w-full max-w-3xl bg-white rounded-lg'>
                    {activeContent === 1 && (
                        <div>
                            {/* 9.27 FRI에 해당하는 콘텐츠 */}
                            <ProgramBox
                                image1={{
                                    url: '/images/components/programbox/tab01_img01.png',
                                    description: '첫 번째 이미지 설명',
                                    width: 400,
                                    height: 300,
                                }}
                                image2={{
                                    url: '/images/components/programbox/tab01_txt01.png',
                                    description: '두 번째 이미지 설명',
                                    width: 400,
                                    height: 300,
                                }}
                            />
                            {/* 추가적인 ProgramBox 컴포넌트들 */}
                        </div>
                    )}
                    {activeContent === 2 && (
                        <div>
                            {/* 9.28 SAT에 해당하는 콘텐츠 */}
                            {/* 나중에 추가 예정 */}
                        </div>
                    )}
                    {activeContent === 3 && (
                        <div>
                            {/* 9.29 SUN에 해당하는 콘텐츠 */}
                            <ProgramBox
                                image1={{
                                    url: '/images/components/programbox/tab01_img01.png',
                                    description: '첫 번째 이미지 설명',
                                    width: 400,
                                    height: 300,
                                }}
                                image2={{
                                    url: '/images/components/programbox/tab01_txt01.png',
                                    description: '두 번째 이미지 설명',
                                    width: 400,
                                    height: 300,
                                }}
                            />
                            <ProgramBox
                                image1={{
                                    url: '/images/components/programbox/tab01_img01.png',
                                    description: '첫 번째 이미지 설명',
                                    width: 400,
                                    height: 300,
                                }}
                                image2={{
                                    url: '/images/components/programbox/tab01_txt01.png',
                                    description: '두 번째 이미지 설명',
                                    width: 400,
                                    height: 300,
                                }}
                            />
                            {/* 추가적인 ProgramBox 컴포넌트들 */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Program;
