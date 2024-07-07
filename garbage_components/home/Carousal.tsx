"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Carousal = () => {

    const carousalImage: { url: string }[] = [
        {
            url: "/images/carousal/car1.jpg",
        },
        {
            url: "/images/carousal/car2.jpg",
        },
        {
            url: "/images/carousal/car3.jpg",
        },
        {
            url: "/images/carousal/car1.jpg",
        },
        {
            url: "/images/carousal/car2.jpg",
        },
        {
            url: "/images/carousal/car3.jpg",
        }
    ];

    const carRef = useRef<HTMLDivElement | null>(null);
    const handleLeftScrool: React.MouseEventHandler<HTMLDivElement> = () => {
        carRef?.current?.scrollBy({
            left: -window.innerWidth,
            behavior: 'smooth',
        });
    };

    const handleRightScroll: React.MouseEventHandler<HTMLDivElement> = () => {
        carRef?.current?.scrollBy({
            left: +window.innerWidth,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (carRef?.current?.scrollLeft !== undefined && carRef?.current?.scrollLeft >= window.innerWidth * (carousalImage.length - 1)) {
                carRef?.current?.scrollBy({
                    left: -(window.innerWidth * (carousalImage.length - 1)),
                    behavior: 'smooth',
                });
            } else {
                carRef?.current?.scrollBy({
                    left: +window.innerWidth,
                    behavior: 'smooth',
                });
            }
        }, 2000);
        return () => clearInterval(intervalId);
    }, [carousalImage?.length]);

    return (
        <div className='my-3'>
            <div className="relative">
                <div className="absolute bg-white left-3 top-1 h-[242px] rounded-md bg-opacity-70 cursor-pointer flex items-center px-5 text-[32px]" onClick={handleLeftScrool}>
                    <FaAngleLeft />
                </div>
                <div className="w-full overflow-x-scroll removescroll" ref={carRef}>
                    <div className="grid" style={{
                        gridTemplateColumns: `repeat(${carousalImage.length}, 1fr)`,
                        width: `${(carousalImage.length) * 100}dvw`,
                        // gridRow: 1
                    }}>
                        {
                            carousalImage.map((data, index) => {
                                return <Image width={2000} height={200} key={index} src={data.url} alt='carousal' className='w-[100dvw]' style={{ width: "100dvw", height: "250px" }} />
                            })
                        }
                    </div>
                </div>
                <div className="absolute bg-white top-1 h-[242px] rounded-md bg-opacity-70 cursor-pointer flex items-center px-5 right-3 text-[32px]" onClick={handleRightScroll}>
                    <FaAngleRight />
                </div>
            </div>
        </div>
    )
}

export default Carousal