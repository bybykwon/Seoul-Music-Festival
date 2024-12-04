import Image from 'next/image';

export default function Bento() {
    return (
        <div className='bg-gray-50 py-24 sm:py-32 flex'>
            <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
                <h2 className='text-center text-base/7 font-semibold text-indigo-600'>
                    {' '}
                    음악이 있어 더 매력적인 도시, 서울
                    <br /> 축제같은 일상 서울 뮤직페스티벌
                </h2>
                <p className='mx-auto mt-2 max-w-lg text-balance text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl'>
                    2025 서울 뮤직페스티벌
                </p>
                <div className='mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2'>
                    <div className='relative lg:row-span-2'>
                        <div className='absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]'></div>
                        <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]'>
                            <div className='px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10'>
                                <p className='mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center'>
                                    Mobile friendly
                                </p>
                                <p className='mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center'>
                                    노들섬에서 듣는 나만의 감성 플레이리스트
                                </p>
                            </div>
                            <div className='relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm'>
                                <div className='absolute inset-x-0 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] '>
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
                    <div className='relative max-lg:row-start-1'>
                        <div className='absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]'></div>
                        <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]'>
                            <div className='pt-8 sm:px-10 sm:pt-10'>
                                <p className='mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center'>
                                    Performance
                                </p>
                                <p className='mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center'>
                                    전 장르를 아우르는 대중음악
                                </p>
                            </div>
                            <div className='flex flex-1 items-center justify-center max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2 '>
                                <Image
                                    className='w-full max-lg:max-w-xs rounded-3xl'
                                    src='/images/components/bento/gallery8.jpg'
                                    alt=''
                                    width={600}
                                    height={600}
                                />
                            </div>
                        </div>
                        <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]'></div>
                    </div>
                    <div className='relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2'>
                        <div className='absolute inset-px rounded-lg bg-white'></div>
                        <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]'>
                            <div className='pt-8 sm:px-10 sm:pt-10'>
                                <p className='mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center'>
                                    Security
                                </p>
                                <p className='mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center'>
                                    시민과 함께 만드는 문화매력도시 서울을 보여줄 2024서울뮤직페스티벌
                                </p>
                            </div>
                            <div className='flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2'>
                                <Image
                                    className='h-[min(152px,40cqw)] object-cover rounded-3xl'
                                    src='/images/components/bento/gallery5.jpg'
                                    alt=''
                                    width={600}
                                    height={600}
                                />
                            </div>
                        </div>
                        <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5'></div>
                    </div>
                    <div className='relative lg:row-span-2'>
                        <div className='absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]'></div>
                        <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]'>
                            <div className='pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10'>
                                <p className='mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center'>
                                    Powerful APIs
                                </p>
                                <p className='mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center'>
                                    대중음악으로 하나되어 모두가 함께 즐기는 서울의 대표 문화예술축제로 한걸음 더 다가갈
                                    3일간의 여정에 여러분을 초대합니다.
                                </p>
                            </div>
                            <div className='relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm'>
                                <div className='absolute inset-x-0 bottom-0 top-10 overflow-hidden rounded-t-[12cqw]'>
                                    <Image
                                        className='size-full object-cover object-top'
                                        src='/images/components/bento/gallery7.jpg'
                                        alt=''
                                        width={600}
                                        height={600}
                                    />
                                    <div className='px-6 pb-14 pt-6'>{/* Your code example */}</div>
                                </div>
                            </div>
                        </div>
                        <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
