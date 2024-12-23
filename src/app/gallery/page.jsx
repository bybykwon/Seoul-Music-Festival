'use client';

import GelleryImages from '@/components/GelleryImages';
import Header from '@/components/layout/header/Header';
import React, { useState } from 'react';

const Gallery = () => {
    const [activeContent, setActiveContent] = useState(2024); // 기본적으로 2024 이미지 활성화

    const handleButtonClick = (contentYear) => {
        setActiveContent(contentYear); // 클릭된 버튼의 연도 값으로 activeContent 상태 변경
    };

    // 각 연도별로 이미지를 설정
    const images = {
        2024: [
            { url: '/images/components/gallery/2024/img1.jpg', description: '2024 이미지 1', width: 400, height: 300 },
            { url: '/images/components/gallery/2024/img2.jpg', description: '2024 이미지 2', width: 400, height: 300 },
            { url: '/images/components/gallery/2024/img3.jpg', description: '2024 이미지 3', width: 400, height: 300 },
            { url: '/images/components/gallery/2024/img4.jpg', description: '2024 이미지 4', width: 400, height: 300 },
            { url: '/images/components/gallery/2024/img5.jpg', description: '2024 이미지 5', width: 400, height: 300 },
            { url: '/images/components/gallery/2024/img6.jpg', description: '2024 이미지 6', width: 400, height: 300 },
            { url: '/images/components/gallery/2024/img7.jpg', description: '2024 이미지 7', width: 400, height: 300 },
            { url: '/images/components/gallery/2024/img8.jpg', description: '2024 이미지 8', width: 400, height: 300 },
        ],
        2023: [
            { url: '/images/components/gallery/2023/img1.jpg', description: '2023 이미지 1', width: 400, height: 300 },
            { url: '/images/components/gallery/2023/img2.jpg', description: '2023 이미지 2', width: 400, height: 300 },
        ],
        2022: [
            { url: '/images/components/gallery/2022/img1.jpg', description: '2022 이미지 1', width: 400, height: 300 },
            { url: '/images/components/gallery/2022/img2.jpg', description: '2022 이미지 2', width: 400, height: 300 },
            { url: '/images/components/gallery/2022/img3.jpg', description: '2022 이미지 3', width: 400, height: 300 },
            { url: '/images/components/gallery/2022/img4.jpg', description: '2022 이미지 4', width: 400, height: 300 },
        ],
        2019: [
            { url: '/images/components/gallery/2019/img1.jpg', description: '2019 이미지 1', width: 400, height: 300 },
            { url: '/images/components/gallery/2019/img2.jpg', description: '2019 이미지 2', width: 400, height: 300 },
            { url: '/images/components/gallery/2019/img3.jpg', description: '2019 이미지 3', width: 400, height: 300 },
            { url: '/images/components/gallery/2019/img4.jpg', description: '2019 이미지 4', width: 400, height: 300 },
            { url: '/images/components/gallery/2019/img5.jpg', description: '2019 이미지 5', width: 400, height: 300 },
            { url: '/images/components/gallery/2019/img6.jpg', description: '2019 이미지 6', width: 400, height: 300 },
            { url: '/images/components/gallery/2019/img7.jpg', description: '2019 이미지 7', width: 400, height: 300 },
            { url: '/images/components/gallery/2019/img8.jpg', description: '2019 이미지 8', width: 400, height: 300 },
        ],
    };

    return (
        <div>
            <Header />
            <div className='min-h-screen flex items-center justify-center p-5'>
                {/* 버튼들 */}
                <div className='mt-12 pt-4'>
                    <strong className='ml-[20px] text-3xl font-bold animate-slide-up text-violet-900'>갤러리</strong>
                    <div className='flex-col mt-10'>
                        <div className='mt-10 flex gap-4'>
                            <button
                                onClick={() => handleButtonClick(2024)}
                                className={`relative px-6 py-2 font-semibold rounded-lg transition duration-300 group
                                    ${activeContent === 2024 ? 'text-black' : 'text-gray-500'}`}
                            >
                                2024
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300 transform 
                                        ${activeContent === 2024 ? 'scale-x-100' : 'scale-x-0'}
                                        origin-left group-hover:scale-x-100`}
                                ></span>
                            </button>
                            <button
                                onClick={() => handleButtonClick(2023)}
                                className={`relative px-6 py-2 font-semibold rounded-lg transition duration-300 group
                                    ${activeContent === 2023 ? 'text-black' : 'text-gray-500'}`}
                            >
                                2023
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300 transform 
                                        ${activeContent === 2023 ? 'scale-x-100' : 'scale-x-0'}
                                        origin-left group-hover:scale-x-100`}
                                ></span>
                            </button>
                            <button
                                onClick={() => handleButtonClick(2022)}
                                className={`relative px-6 py-2 font-semibold rounded-lg transition duration-300 group
                                    ${activeContent === 2022 ? 'text-black' : 'text-gray-500'}`}
                            >
                                2022
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300 transform 
                                        ${activeContent === 2022 ? 'scale-x-100' : 'scale-x-0'}
                                        origin-left group-hover:scale-x-100`}
                                ></span>
                            </button>
                            <button
                                onClick={() => handleButtonClick(2019)}
                                className={`relative px-6 py-2 font-semibold rounded-lg transition duration-300 group
                                    ${activeContent === 2019 ? 'text-black' : 'text-gray-500'}`}
                            >
                                2019
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300 transform 
                                        ${activeContent === 2019 ? 'scale-x-100' : 'scale-x-0'}
                                        origin-left group-hover:scale-x-100`}
                                ></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* 선택된 연도의 이미지 표시 */}
                <GelleryImages images={images[activeContent]} />
            </div>
        </div>
    );
};

export default Gallery;
