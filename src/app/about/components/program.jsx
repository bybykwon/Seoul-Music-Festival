import React, { Component } from 'react';
import Image from 'next/image';
import { ArrowBigDown } from 'lucide-react';

class Program extends Component {
    render() {
        const { p, small, image } = this.props;
        const defaultImage = 'https://via.placeholder.com/600x400?text=Default+Image'; // 기본 이미지

        return (
            <div className='flex-col items-center space-x-5 max-h-[600px]'>
                <div className='text-center bg-white/80 transition p-5 z-20'>
                    <p className='text-3xl text-gray-900 font-semibold pb-2'>{p}</p>
                    <small className='text-xl text-gray-900'>{small}</small>
                </div>

                <Image
                    src={image || defaultImage}
                    alt={p}
                    width={320}
                    height={470}
                    className='object-contain max-h-[200px] animate-slide-up-down'
                />
                {/* 상단 제목 추가 */}
                {/* <div className='text-3xl font-semibold text-gray-900 absolute  -bottom-0 p-5 z-10'>FESTIVAL MAP</div> */}
            </div>
        );
    }
}

export default Program;
