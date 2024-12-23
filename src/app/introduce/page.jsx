import Header from '@/components/layout/header/Header';
import Image from 'next/image';
import React from 'react';

const Introduce = () => {
    return (
        <div>
            <Header />
            <div className='min-h-screen flex flex-col items-center justify-center p-5'>
                <Image
                    className='h-[50vh] w-[50vh] object-contain
								 object-center 
						animate-slide-up'
                    src='/images/pattern/common/logo.png'
                    alt=''
                    width={600}
                    height={600}
                    priority
                />
                <strong className='mb-4 text-3xl font-bold  text-violet-900 animate-slide-up '>
                    음악이 있어 더 매력적인 도시, 서울
                </strong>
                <p className='mb-2 text-lg font-light animate-slide-up'>
                    노들섬에서 듣는 나만의 감성 플레이리스트 전 장르를 아우르는 대중음악을 통해 서울의 밤을 더 뜨겁게
                    달궈 시민과 함께 만드는 문화매력도시 서울을 보여줄 2025서울뮤직페스티벌
                </p>
                <p className='mb-2 text-lg font-light animate-slide-up'>
                    대중음악으로 하나되어 모두가 함께 즐기는 서울의 대표 문화예술축제로 한걸음 더 다가갈 3일간의 여정에
                    여러분을 초대합니다.
                </p>
            </div>
        </div>
    );
};
export default Introduce;
