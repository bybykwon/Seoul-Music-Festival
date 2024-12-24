import React, { Component } from 'react';
import Image from 'next/image';
import { ArrowBigDown } from 'lucide-react';

class Program extends Component {
    render() {
        const { p, small, image } = this.props;
        const defaultImage = 'https://via.placeholder.com/600x400?text=Default+Image'; // 기본 이미지

        return (
            <div className='flex flex-col items-center justify-center max-h-[600px] space-y-6 text-center lg:items-start lg:text-left lg:space-y-0 lg:space-x-5'>
                <div className='transition p-7 z-20'>
                    <p className='text-[1.14rem] text-gray-900 font-bold pb-2 max-lg:text-center'>{p}</p>
                    <small className='text-sm/6 text-gray-600 max-lg:text-center'>{small}</small>
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
