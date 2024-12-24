import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Program from '../about/components/program';
import Image from 'next/image';

export default function IntroSwiper() {
    useEffect(() => {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.index;
                        const delay = index * 400; // 각 요소마다 200ms의 시간차
                        setTimeout(() => {
                            entry.target.classList.add('opacity-100', 'translate-y-0');
                            entry.target.classList.remove('opacity-0', 'translate-y-10');
                        }, delay);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        animatedElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

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
        <div className='animate-on-scroll opacity-0 translate-y-10 transition-all duration-700'>
            <div className='relative w-screen h-[600px] bg-gray-50'>
                {/* 배경 이미지 */}
                <div className="absolute w-[100vw] h-full md:bg-[url('/images/components/site_map.jpg')] bg-contain bg-no-repeat bg-center z-0"></div>

                {/* 콘텐츠 */}
                <div className='relative z-10 flex items-center justify-center h-full'>
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
                        className='mySwiper w-[400px] h-2/3'
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <Program
                                    image={slide.image}
                                    p={slide.p}
                                    small={slide.small}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* 텍스트 레이아웃 */}
                <div className='absolute top-[43%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 max-w-[50vw] max-h-[50vh] flex-col place-items-center justify-start hidden md:flex'>
                    {/* 텍스트 섹션 */}
                    <div className='absolute text-black mt-7 md:text-base lg:text-sm text-left whitespace-nowrap leading-8 max-w-1/2'>
                        {/* 기간 */}
                        <div className='mb-2'>
                            <span className='text-[1.12rem] text-gray-900 font-bold underline decoration-purple-400 decoration-2'>
                                기 간
                            </span>
                            <span className='ml-4 text-sm/6 text-gray-700'>2025년 9월 27일(금) ~ 29일(일)</span>
                        </div>

                        {/* 장소 */}
                        <div className='mb-2'>
                            <span className='text-[1.12rem] text-gray-900 font-bold underline decoration-purple-400 decoration-2'>
                                장 소
                            </span>
                            <span className='ml-4 text-sm/6 text-gray-700'>노들섬</span>
                        </div>

                        {/* 주최 */}
                        <div className='mb-2'>
                            <span className='text-[1.12rem] text-gray-900 font-bold underline decoration-purple-400 decoration-2'>
                                주 최
                            </span>
                            <span className='ml-4 text-sm/6 text-gray-700'>서울특별시</span>
                        </div>

                        {/* 프로그램 */}
                        <div>
                            <span className='text-[1.12rem] text-gray-900 font-bold underline decoration-purple-400 decoration-2'>
                                프로그램
                            </span>
                            <span className='ml-4 text-sm/6 text-gray-700'>메인, 서브 공연, 부대프로그램 등</span>
                        </div>
                    </div>

                    {/* 이미지 섹션 */}
                    <div className='pt-[9rem] w-full h-auto max-w-[35vw] max-h-[35vh]'>
                        <Image
                            src='/images/components/nodleisland2.png'
                            alt='nodle'
                            className='w-full h-auto object-contain animate-slide-up-down'
                            width={500}
                            height={500}
                            style={{ maxHeight: '22vh', maxWidth: '22vw' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
