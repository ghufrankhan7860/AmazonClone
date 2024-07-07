"use client";
import Image from 'next/image';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const HorizontalBarTypeC = () => {

    const products: { url: string }[] = [
        { url: "/images/products/Bar1/a1.jpeg" },
        { url: "/images/products/Bar1/a2.jpeg" },
        { url: "/images/products/Bar1/a3.jpeg" },
        { url: "/images/products/Bar1/a4.jpeg" },
        { url: "/images/products/Bar1/a5.jpeg" },
        { url: "/images/products/Bar1/a6.jpeg" },
        { url: "/images/products/Bar1/a7.jpeg" },
        { url: "/images/products/Bar1/a2.jpeg" },
        { url: "/images/products/Bar1/a3.jpeg" },
        { url: "/images/products/Bar1/a4.jpeg" },
        { url: "/images/products/Bar1/a5.jpeg" },
        { url: "/images/products/Bar1/a6.jpeg" },
        { url: "/images/products/Bar1/a7.jpeg" },
    ];

    const containerRef = useRef<HTMLDivElement | null>(null);
    const leftScroll: React.MouseEventHandler<HTMLDivElement> = () => {
        containerRef?.current?.scrollBy({
            left: -window.innerWidth,
            behavior: 'smooth'
        })
    };
    const rightScroll: React.MouseEventHandler<HTMLDivElement> = () => {
        containerRef?.current?.scrollBy({
            left: +window.innerWidth,
            behavior: 'smooth'
        })
    };

    return (
        <>

            <div className="bg-white rounded p-3 py-5 flex flex-col gap-3">
                <div className="text-[24px] font-black text-black text-opacity-90  whitespace-nowrap overflow-hidden ">
                    Best Sellers in Home & Kitchen
                </div>
                <div className="relative">
                    <div className="overflow-x-auto overflow-y-hidden scrollBar" ref={containerRef}>
                        <div className="flex gap-3 removescroll">
                            {
                                products.map((product, index) => {
                                    return (
                                        <Image key={index} src={product.url} alt='product' width={200} height={200} className='max-w-[150px] w-[150px] hover:scale-105 cursor-pointer p-2' />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div onClick={leftScroll} className="absolute left-0 top-0 bg-white border-2 border-black border-opacity-30 rounded px-[15px] text-[24px] bg-opacity-10 cursor-pointer hover:bg-opacity-100 py-[80px]"><FaChevronLeft /></div>
                    <div onClick={rightScroll} className="right-0 absolute top-0 bg-white border-2 border-black border-opacity-30 rounded px-[15px] text-[24px] bg-opacity-10 cursor-pointer hover:bg-opacity-100 py-[80px]"><FaChevronRight /></div>
                </div>
            </div>

        </>
    )
}

export default HorizontalBarTypeC