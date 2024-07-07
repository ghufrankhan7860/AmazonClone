"use client";
import HorizontalBarTypeA from '@/components/horizontalBars/HorizontalBarTypeA';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousal = () => {

    const carousalLinks: { url: string }[] = [
        { url: "/images/carousal/car1.jpg" },
        { url: "/images/carousal/car2.jpg" },
        { url: "/images/carousal/car3.jpg" },
        { url: "/images/carousal/car4.jpg" },
        { url: "/images/carousal/car1.jpg" },
        { url: "/images/carousal/car2.jpg" },
        { url: "/images/carousal/car3.jpg" },
        { url: "/images/carousal/car4.jpg" },
    ];

    const carousalRef = useRef<HTMLDivElement | null>(null);
    const leftScrollCarousal: React.MouseEventHandler<HTMLDivElement> = () => {
        carousalRef?.current?.scrollBy({
            left: -window.innerWidth,
            behavior: "smooth"
        });
    };

    const rightScrollCarousal: React.MouseEventHandler<HTMLDivElement> = () => {
        carousalRef?.current?.scrollBy({
            left: +window.innerWidth,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (carousalRef?.current?.scrollLeft !== undefined && carousalRef?.current?.scrollLeft >= window.innerWidth * (carousalLinks.length - 1)) {
                carousalRef?.current?.scrollBy({
                    left: -(window.innerWidth * (carousalLinks.length - 1)),
                    behavior: 'smooth',
                });
            } else {
                carousalRef?.current?.scrollBy({
                    left: +window.innerWidth,
                    behavior: 'smooth',
                });
            }
        }, 3000);
        return () => clearInterval(intervalId);
    }, [carousalLinks?.length]);



    return (
        <>

            <div className="relative min-h-[690px] h-fit">

                {/* carousal */}
                <div className="w-[100vw] overflow-x-auto removescroll" ref={carousalRef}>
                    <div className="grid" style={{
                        width: `100*${carousalLinks.length}vw`,
                        gridTemplateColumns: `repeat(${carousalLinks.length},1fr)`
                    }}>
                        {
                            carousalLinks.map((car, index) => {
                                return (
                                    <Image key={index} src={car.url} alt='carousal' width={2000} height={600} className='min-w-[100vw] h-[600px]' />
                                )
                            })
                        }
                    </div>
                </div>


                {/* content box */}
                <div className="absolute top-0 w-[100vw] px-6">
                    {/* buttons */}
                    <div className="flex justify-between w-full py-3">
                        <div className="py-20 cursor-pointer border border-black hover:bg-white hover:bg-opacity-20 rounded px-5 text-[40px]" onClick={leftScrollCarousal}>
                            <FaChevronLeft />
                        </div>
                        <div className="py-20 cursor-pointer hover:bg-white hover:bg-opacity-20  border border-black rounded px-5 text-[40px]" onClick={rightScrollCarousal}>
                            <FaChevronRight />
                        </div>
                    </div>
                    {/* cards section */}

                    <HorizontalBarTypeA />

                </div>
            </div>
        </>
    )
}

export default Carousal