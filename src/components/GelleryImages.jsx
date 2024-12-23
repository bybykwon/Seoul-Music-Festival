'use client';

import Image from 'next/image';
import React from 'react';

const GelleryImages = ({ images }) => {
    // images가 비어있을 경우에 대비하여 기본값을 설정
    if (!images || images.length === 0) {
        return <div>이미지가 없습니다.</div>; // 이미지가 없을 때의 표시
    }

    return (
        <div className='max-w-screen-xl mx-auto px-4'>
            {/* 모든 8개의 이미지를 한 번에 출력 */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className='relative'
                    >
                        <Image
                            src={image.url}
                            alt={image.description}
                            width={image.width}
                            height={image.height}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GelleryImages;
