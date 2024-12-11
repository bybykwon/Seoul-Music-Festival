'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import '@/styles/gsap.scss';
import '@/styles/globals.scss';

//스크롤 y값 변경, 시간차로 입체감 효과
const Hero = () => {
    const [clientWidth, setClientWidth] = useState(0);

    useEffect(() => {
        // 컴포넌트가 마운트된 이후에 clientWidth 초기화
        const handleResize = () => setClientWidth(window.innerWidth);

        handleResize(); // 초기값 설정
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (clientWidth > 800) {
                gsap.to('.night', { y: scrollY * 2.05 });
                gsap.to('.nightstar', { y: scrollY * 1.75 });
                gsap.to('.moon', { y: scrollY * 1.05 });

                gsap.to('.cityback', { y: scrollY * -0.1 });
                gsap.to('.skycloud1', { y: scrollY * -0.1 });
                gsap.to('.skycloud2', { y: scrollY * -0.15 });
                gsap.to('.skycloud3', { y: scrollY * -0.18 });
                gsap.to('.green_right', { y: scrollY * -0.2 });
                gsap.to('.green_left', { y: scrollY * -0.2 });
                gsap.to('.green_left', { y: scrollY * -0.3 });
                gsap.to('.cat', { y: scrollY * -0.3 });
                gsap.to('.cat2', { y: scrollY * -0.3 });
                gsap.to('.blue02', { y: scrollY * -0.4 });

                for (let i = 0; i <= 7; i++) {
                    gsap.to(`#mountain${i}`, { y: scrollY * (0.95 - i * 0.1) });
                }
            }
        };

        const handleResize = () => {
            setClientWidth(window.innerWidth);

            if (window.innerWidth < 800) {
                gsap.to('#sun, #gray-clouds, #white-clouds, #bird1, #bird2, #bird3', { x: 0, y: 0 });
                for (let i = 0; i <= 7; i++) {
                    gsap.to(`#mountain${i}`, { y: 0 });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [clientWidth]);

    useEffect(() => {
        const tl = gsap.timeline();

        // 애니메이션 시작
        tl.from('#page-1', { opacity: 0 });
        tl.from('.cityback', { y: +30, opacity: 0, ease: 'linear' }, 1);
        tl.from('.green_left', { x: 30, y: 30, opacity: 0 }, 0);
        tl.from('.green_right', { x: 30, y: 30, opacity: 0 }, 0);
        tl.from('.blue02', { y: 30, opacity: 0 }, '<');
        // tl.from('.flower_left', { x: -50, y: -50, opacity: 0 });
        // tl.from('.flower_right', { x: 50, y: 30, opacity: 0 });
        tl.from('.music_green', { y: 30, opacity: 0 });
        tl.to('.music_green', { y: 30, repeat: -1, yoyo: true });
        tl.from('.music_yellowpink', { y: 30, opacity: 0 }, 2);
        tl.to('.music_yellowpink', {
            duration: 2,
            transformOrigin: 'center bottom',
            rotation: -20,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
        });
        tl.from('.main_title .text', { duration: 3, y: 30, repeat: -1, yoyo: true, ease: 'linear' }, '-=2');
        tl.from('.main_title .explore', { y: 30, opacity: 0 });
        tl.from('.cat', { rotation: -3, repeat: -1, yoyo: true, ease: 'linear' }, 1);
        tl.from('.cat2', { rotation: 5, repeat: -1, yoyo: true, ease: 'linear' }, 1);
        tl.fromTo(
            '.cloud-small',
            { y: 430, scale: 0.1, opacity: 0 },
            { duration: 8, y: 0, scale: 1.5, opacity: 1, repeat: -1, ease: 'linear', delay: 2 },
            0
        );
        tl.fromTo(
            '.cloud-big',
            { y: 230, scale: 0.1, opacity: 0 },
            {
                duration: 4,
                y: -100,
                scale: 1.5,
                opacity: 1,
                repeat: -1,
                ease: 'linear',
            },
            1
        );
        tl.fromTo(
            '.cloud-middle',
            { y: 150, scale: 0.1, opacity: 0 },
            { duration: 7, x: -100, y: -130, scale: 1.8, opacity: 1, repeat: -1, ease: 'linear' },
            3
        );
        tl.fromTo(
            '.cloud-middle2',
            { y: 50, scale: 0.1, opacity: 0 },
            { duration: 3, x: +100, y: -100, scale: 1.7, opacity: 1, repeat: -1, ease: 'linear' },
            3
        );
    }, []);

    return (
        <section
            id='oneScroll'
            className='page-1'
            priority='true'
        >
            <div
                id='page-1'
                className='page on'
            >
                <div className='bg'>
                    <Image
                        src='/images/story/top/sky.png'
                        alt=''
                        width={1366}
                        height={1358}
                    />
                </div>
                <div className='moon'>
                    <Image
                        src='/images/story/top/sky/moon.png'
                        alt=''
                        width={1366}
                        height={1358}
                    />
                </div>
                <div className='night'>
                    <Image
                        src='/images/story/top/sky/night.png'
                        alt=''
                        width={1366}
                        height={1358}
                    />
                </div>
                <div className='nightstar'>
                    <Image
                        src='/images/story/top/sky/nightstar.png'
                        alt=''
                        width={1366}
                        height={1358}
                    />
                </div>
                <div className='skycloud1'>
                    <Image
                        src='/images/story/top/sky/skycloud1.svg'
                        alt=''
                        width={1366}
                        height={1358}
                    />
                </div>
                <div className='skycloud2'>
                    <Image
                        src='/images/story/top/sky/skycloud2.svg'
                        alt=''
                        width={1366}
                        height={1358}
                    />
                </div>
                <div className='skycloud3'>
                    <Image
                        src='/images/story/top/sky/skycloud3.png'
                        alt=''
                        width={1366}
                        height={1358}
                    />
                </div>
                <div className='mountain'>
                    <Image
                        src='/images/story/top/sky/mountain.png'
                        alt=''
                        width={1366}
                        height={1358}
                    />
                </div>

                <div className='cloud-big'>
                    <Image
                        src='/images/story/top/cloud01.png'
                        alt=''
                        width={100}
                        height={200}
                    />
                </div>
                <div className='cloud-small'>
                    <Image
                        src='/images/story/top/cloud02.png'
                        alt=''
                        width={120}
                        height={100}
                    />
                </div>
                <div className='cloud-middle'>
                    <Image
                        src='/images/story/top/cloud03.png'
                        alt=''
                        width={100}
                        height={200}
                    />
                </div>
                <div className='cloud-middle2'>
                    <Image
                        src='/images/story/top/cloud04.png'
                        alt=''
                        width={120}
                        height={100}
                    />
                </div>

                <div className='music_green'>
                    <Image
                        src='/images/story/top/music_green.png'
                        alt=''
                        width={80}
                        height={80}
                    />
                </div>
                <div className='blue02'>
                    <Image
                        src='/images/story/top/blue02.png'
                        alt=''
                        width={1920}
                        height={416}
                    />
                </div>

                <div className='green_left'>
                    <Image
                        src='/images/story/top/green_left.png'
                        alt=''
                        width={1366}
                        height={768}
                    />
                </div>
                <div className='cat'>
                    <Image
                        src='/images/story/top/people.png'
                        alt=''
                        width={200}
                        height={200}
                    />
                </div>
                <div className='cat2'>
                    <Image
                        src='/images/story/top/people2.png'
                        alt=''
                        width={200}
                        height={200}
                    />
                </div>
                <div className='music_yellowpink'>
                    <Image
                        src='/images/story/top/music_yellowpink.png'
                        alt=''
                        width={120}
                        height={50}
                    />
                </div>
                <div className='cityback'>
                    <Image
                        src='/images/story/top/cityback.png'
                        alt=''
                        width={1920}
                        height={1780}
                    />
                </div>
                <div className='green_right'>
                    <Image
                        src='/images/story/top/green_right.png'
                        alt=''
                        width={1366}
                        height={768}
                    />
                </div>

                <div className='main_title'>
                    <h2 className='text'>
                        <Image
                            src='/images/story/top/title_main.png'
                            alt=''
                            width={400}
                            height={100}
                        />
                    </h2>
                    <div className='explore'>
                        <Image
                            src='/images/story/top/explore.png'
                            alt=''
                            width={200}
                            height={50}
                        />
                    </div>
                    <div className='explore'>
                        <Image
                            src='/images/story/top/explore.png'
                            alt=''
                            width={200}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
