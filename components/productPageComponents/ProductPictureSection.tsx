"use client";
import React, { useState } from 'react';
import Image from 'next/image';


const ProductPictureSection = () => {
    const imageUrls: { url: string }[] = [
        { url: "/images/products/Bar1/a1.jpeg" },
        { url: "/images/products/Bar1/a2.jpeg" },
        { url: "/images/products/Bar1/a3.jpeg" },
        { url: "/images/products/Bar1/a4.jpeg" },
        { url: "/images/products/Bar1/a5.jpeg" },
        { url: "/images/products/Bar1/a6.jpeg" },
        { url: "/images/products/Bar1/a7.jpeg" },
    ];
    const [currentUrl, setCurrentUrl] = useState<string>(imageUrls[0]?.url);

    const selectThisImage = (e: any) => {
        let ind = e.target?.dataset?.index;
        if (ind) {
            ind = Number.parseInt(ind);
            setCurrentUrl(imageUrls[ind]?.url);
        }
    }

    return (
        <>
            <div className="flex gap-3">
                <div className="flex flex-col gap-3">
                    {
                        imageUrls.map((imageUrl, index) => {
                            return (
                                <div className="border-2 rounded-lg border-black border-opacity-20 hover:border-2 hover:border-teal-500 hover:shadow shadow-teal-500" key={index}>
                                    <Image src={imageUrl.url} alt='product' width={50} height={50} className='p-1 w-[50px] h-[50px] object-contain cursor-pointer' onMouseEnter={selectThisImage} onTouchEnd={selectThisImage} data-index={index} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="min-h-[700px]">
                    <Image src={currentUrl} alt='product' width={1000} height={1000} className='max-w-[500px] object-contain p-5' />
                </div>
            </div>
        </>
    )
}

export default ProductPictureSection