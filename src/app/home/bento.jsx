import { useEffect } from 'react';
import Image from 'next/image';

export default function Bento() {
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

    return (
        <div className='bg-gray-50 py-24 sm:py-32 flex'>
            <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
                <h2 className='text-center text-base/7 font-bold text-subcolor'>음악이 있어 더 매력적인 도시, 서울</h2>
                <p className='mx-auto mt-2 max-w-lg text-balance text-center text-3xl font-bold tracking-tight text-gray-900'>
                    2025 서울 뮤직페스티벌
                </p>
                <div className='mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2'>
                    <div className='relative lg:row-span-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700'>
                        <div className='absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]'></div>
                        <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]'>
                            <div className='px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10'>
                                <p className='mt-2 text-2xl font-bold tracking-tight text-gray-950 max-lg:text-center'>
                                    Good Vibes
                                </p>
                                <p className='mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center'>
                                    노들섬에서 듣는 나만의 감성 플레이리스트
                                </p>
                            </div>
                            <div className='relative min-h-[30rem] top-10 w-full grow overflow-hidden max-lg:mx-auto max-lg:max-w-sm'>
                                <div className='absolute h-full overflow-hidden'>
                                    <Image
                                        className='size-full object-cover object-top'
                                        src='/images/components/bento/gallery6.jpg'
                                        alt=''
                                        width={600}
                                        height={600}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]'></div>
                    </div>

                    <div className='relative max-lg:row-start-1 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700'>
                        <div className='absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]'></div>
                        <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-[calc(2rem+1px)]'>
                            <div className='pt-8 sm:px-10 sm:pt-10 pb-10'>
                                <p className='mt-2 text-2xl font-bold tracking-tight text-gray-950 max-lg:text-center'>
                                    Cross Genre
                                </p>
                                <p className='mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center'>
                                    전 장르를 아우르는 대중음악
                                </p>
                            </div>
                            <div className='flex flex-1 items-center justify-center'>
                                <Image
                                    className='w-full h-full'
                                    src='/images/components/bento/gallery8.jpg'
                                    alt=''
                                    width={600}
                                    height={600}
                                />
                            </div>
                        </div>
                        <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-[2rem]'></div>
                    </div>

                    <div className='relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700'>
                        <div className='absolute inset-px rounded-lg bg-white'></div>
                        <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]'>
                            <div className='pt-8 sm:px-10 sm:pt-10 pb-10'>
                                <p className='mt-2 text-2xl font-bold tracking-tight text-gray-950 max-lg:text-center'>
                                    Culture City
                                </p>
                                <p className='mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center'>
                                    시민과 함께 만드는 문화매력도시 서울을 보여줄 2025 서울 뮤직페스티벌
                                </p>
                            </div>
                            <div className='flex flex-1 items-center justify-center'>
                                <Image
                                    className='w-full h-full'
                                    src='/images/components/bento/gallery5.jpg'
                                    alt=''
                                    width={600}
                                    height={600}
                                />
                            </div>
                        </div>
                        <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5'></div>
                    </div>

                    <div className='relative lg:row-span-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700'>
                        <div className='absolute inset-px rounded-lg bg-white max-lg:rounded-[2rem] lg:rounded-r-[2rem]'></div>
                        <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]'>
                            <div className='pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10'>
                                <p className='mt-2 text-2xl font-semibold tracking-tight text-gray-950 max-lg:text-center'>
                                    SEOUL MY SOUL
                                </p>
                                <p className='mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center'>
                                    3일간의 여정에 여러분을 초대합니다.
                                </p>
                            </div>
                            <div className='relative min-h-[30rem] top-10 w-full grow overflow-hidden max-lg:mx-auto max-lg:max-w-sm'>
                                <div className='absolute h-full overflow-hidden'>
                                    <Image
                                        className='size-full object-cover object-top'
                                        src='https://images.unsplash.com/photo-1523973740062-18e700e8da35?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        alt=''
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-[2rem] lg:rounded-r-[2rem]'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
