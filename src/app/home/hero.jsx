'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import '@/styles/gsap.scss';
import '@/styles/globals.scss';

const Hero = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline();

        // 애니메이션 시작
        tl.from('#page-1', { opacity: 0 });
        tl.from('.city', { y: +30, opacity: 0 }, 0);
        tl.from('.green_left', { y: 10, repeat: -1, yoyo: true, ease: 'linear' });
        tl.from('.green_right', { x: 30, y: 30, opacity: 0 }, 3);
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
        tl.from('.main_title .explore', { y: 30, opacity: 0 }, '+=0.5');
        tl.fromTo('.cloud-small', { y: 530, scale: 0.1, opacity: 0 }, { duration: 5, y: 0, scale: 1.5, opacity: 1 }, 0);
        tl.from('.cat', { rotation: -3, repeat: -1, yoyo: true, ease: 'linear' }, 4);
        tl.from('.cat2', { rotation: 5, repeat: -1, yoyo: true, ease: 'linear' }, 4);
        tl.fromTo(
            '.cloud-big',
            { y: 330, scale: 0.2, opacity: 0 },
            { duration: 3, y: -100, scale: 1.5, opacity: 1 },
            1
        );
        tl.fromTo(
            '.cloud-middle',
            { y: 200, scale: 0.2, opacity: 0 },
            { duration: 4, y: -100, scale: 1.5, opacity: 1 },
            3
        );
        tl.fromTo(
            '.cloud-middle2',
            { y: 150, scale: 0.2, opacity: 0 },
            { duration: 3, y: -100, scale: 1.5, opacity: 1 },
            3
        );
    }, []);

    return (
        <section
            id='oneScroll'
            className='page-1'
        >
            <div
                id='page-1'
                className='page on'
            >
                <div className='bg'>
                    <Image
                        src='/images/story/top/sky.jpg'
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
                {/* <div className='flower_left'>
                    <Image
                        src='/images/story/top/flower_left.png'
                        alt=''
                        width={100}
                        height={100}
                    />
                </div> */}
                {/* <div className='flower_right'>
                    <Image
                        src='/images/story/top/flower_right.png'
                        alt=''
                        width={100}
                        height={100}
                    />
                </div> */}
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
                <div className='city'>
                    <Image
                        src='/images/story/top/city.png'
                        alt=''
                        width={1920}
                        height={1780}
                        priority
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
                </div>
            </div>
        </section>
    );
};

export default Hero;
