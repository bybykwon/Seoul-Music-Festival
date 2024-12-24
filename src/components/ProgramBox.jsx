import Image from 'next/image';
import React from 'react';

const ProgramBox = ({ image1, image2 }) => {
    return (
        <div className='max-w-[1440px] m-auto relative'>
            <div className='flex items-center justify-center mt-[60px] mb-[60px] box-border'>
                {/* flex-col로 세로 배치, 중앙 정렬 */}
                <div className='flex w-full mb-15 p-5 bg-gray-100 md:flex-row flex-col justify-center items-center gap-4 rounded-lg'>
                    {/* 첫 번째 이미지 */}
                    <div className='w-1/2 pr-2'>
                        <Image
                            src={image1.url}
                            alt={image1.description}
                            className='max-w-full h-auto align-top'
                            width={image1.width}
                            height={image1.height}
                            layout='intrinsic' // 비율 유지
                        />
                    </div>
                    {/* 두 번째 이미지 */}
                    <div className='w-1/2 pl-2'>
                        <Image
                            src={image2.url}
                            alt={image2.description}
                            className='max-w-full h-auto align-top'
                            width={image2.width}
                            height={image2.height}
                            layout='intrinsic' // 비율 유지
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramBox;
