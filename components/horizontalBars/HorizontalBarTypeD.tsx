"use client";
import Image from 'next/image';
import React, { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ProductCardTypeA from '../cards/ProductCardTypeA';

type Product = {
    url: string,
    discount: number,
    price: number,
    prevPrice: number,
    description: string
}

const HorizontalBarTypeD = () => {

    const products: Product[] = [
        {
            discount: 20, description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sunt, hic sapiente necessitatibus optio, tenetur quia quo nulla eligendi deleniti voluptates? Rem pariatur ab repudiandae iusto quo obcaecati reprehenderit nam.`, prevPrice: 240, price: 160, url: "/images/products/Bar1/a1.jpeg"
        },
        {
            discount: 20, description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sunt, hic sapiente necessitatibus optio, tenetur quia quo nulla eligendi deleniti voluptates? Rem pariatur ab repudiandae iusto quo obcaecati reprehenderit nam.`, prevPrice: 240, price: 160, url: "/images/products/Bar1/a2.jpeg"
        },
        {
            discount: 20, description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sunt, hic sapiente necessitatibus optio, tenetur quia quo nulla eligendi deleniti voluptates? Rem pariatur ab repudiandae iusto quo obcaecati reprehenderit nam.`, prevPrice: 240, price: 160, url: "/images/products/Bar1/a3.jpeg"
        },
        {
            discount: 20, description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sunt, hic sapiente necessitatibus optio, tenetur quia quo nulla eligendi deleniti voluptates? Rem pariatur ab repudiandae iusto quo obcaecati reprehenderit nam.`, prevPrice: 240, price: 160, url: "/images/products/Bar1/a4.jpeg"
        },
        {
            discount: 20, description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sunt, hic sapiente necessitatibus optio, tenetur quia quo nulla eligendi deleniti voluptates? Rem pariatur ab repudiandae iusto quo obcaecati reprehenderit nam.`, prevPrice: 240, price: 160, url: "/images/products/Bar1/a5.jpeg"
        },
        {
            discount: 20, description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sunt, hic sapiente necessitatibus optio, tenetur quia quo nulla eligendi deleniti voluptates? Rem pariatur ab repudiandae iusto quo obcaecati reprehenderit nam.`, prevPrice: 240, price: 160, url: "/images/products/Bar1/a6.jpeg"
        },
        {
            discount: 20, description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sunt, hic sapiente necessitatibus optio, tenetur quia quo nulla eligendi deleniti voluptates? Rem pariatur ab repudiandae iusto quo obcaecati reprehenderit nam.`, prevPrice: 240, price: 160, url: "/images/products/Bar1/a7.jpeg"
        },
        {
            discount: 20, description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sunt, hic sapiente necessitatibus optio, tenetur quia quo nulla eligendi deleniti voluptates? Rem pariatur ab repudiandae iusto quo obcaecati reprehenderit nam.`, prevPrice: 240, price: 160, url: "/images/products/Bar1/a1.jpeg"
        },
        {
            discount: 20, description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sunt, hic sapiente necessitatibus optio, tenetur quia quo nulla eligendi deleniti voluptates? Rem pariatur ab repudiandae iusto quo obcaecati reprehenderit nam.`, prevPrice: 240, price: 160, url: "/images/products/Bar1/a5.jpeg"
        }
    ]


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
            <div className="bg-white rounded px-3 py-5">
                <div className="flex gap-3 items-end">
                    <div className="text-[24px] font-black text-black text-opacity-90 whitespace-nowrap overflow-hidden">Deals Under $25</div>
                    <div className="py-1 text-green-700">See more</div>
                </div>
                <div className="relative">
                    <div className="overflow-x-auto overflow-y-hidden scrollBar" ref={containerRef}>
                        <div className="flex gap-3 removescroll">
                            {
                                products.map((product: Product, index) => {
                                    return (
                                        <ProductCardTypeA product={product} key={index} />
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

export default HorizontalBarTypeD