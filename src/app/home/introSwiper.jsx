import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { AspectRatio } from '@chakra-ui/react';
import Program from '../about/components/program';
import { ArrowBigDown, Icon } from 'lucide-react';

export default function IntroSwiper() {
    const slides = [
        {
            image: '/images/components/swiper/heart.png',
            p: '하트 스테이지',
            small: '실력파 밴드뮤지션의 진정한 라이브 STAGE',
        },
        {
            image: '/images/components/swiper/note.png',
            p: '부스 스테이지',
            small: '다양한 참여 프로그램, 체험부스에서 만나요',
        },
        {
            image: '/images/components/swiper/smile.png',
            p: '스마일 스테이지',
            small: '누구나 함께 즐길 수 있는 노들섬의 플레이리스트',
        },
    ];

    return (
        <div className='relative w-auto h-[600px]'>
            {/* 배경 이미지 */}
            <div className="absolute w-screen h-full bg-[url('/images/components/site_map.jpg')] bg-cover bg-center z-0"></div>

            {/* 콘텐츠 */}
            <div className='relative z-10 h-full'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3500, // 슬라이드가 3초마다 자동으로 전환
                        disableOnInteraction: false, // 슬라이드를 클릭해도 자동 슬라이드가 멈추지 않도록 설정
                    }}
                    speed={900}
                    modules={[Pagination, Navigation, Autoplay]}
                    className='mySwiper h-full content-start'
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <AspectRatio>
                                <Program
                                    image={slide.image}
                                    p={slide.p}
                                    small={slide.small}
                                />
                            </AspectRatio>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
