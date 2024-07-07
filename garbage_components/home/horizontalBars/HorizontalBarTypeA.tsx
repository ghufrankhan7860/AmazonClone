"use client";
import React from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import CardBarTypeA from '../barsCardsTemplates/CardBarTypeA';

const HorizontalBarTypeA = () => {

    const ProductList: { url: string, type: string, data: string }[] = [
        {
            url: "/images/products/Bar1/a1.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a2.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a3.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a4.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a5.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a6.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a7.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a1.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a2.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a3.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a4.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a5.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a6.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
        {
            url: "/images/products/Bar1/a7.jpeg",
            type: "Electronics",
            data: "From Rs 12333"
        },
    ]

    return (
        <div className="px-3 w-[100dvw]">
            <div className='my-3 bg-white p-3 rounded'>
                <div className="flex justify-between py-3">
                    <div className="text-[20px] font-bold text-opacity-80 text-black">Beauty, Food, Toys & more</div>
                    <div className="w-6 h-6 bg-blue-800 flex justify-center items-center rounded-full cursor-pointer hover:scale-105">
                        <FaAngleRight className='text-white' size={14} />
                    </div>
                </div>
                <div className="">
                    <div className="flex gap-3 overflow-scroll removescroll">
                        {
                            ProductList.map((product, index) => {
                                return <CardBarTypeA key={index} product={product} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalBarTypeA