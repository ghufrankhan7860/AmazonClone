import Image from 'next/image';
import React from 'react'

type Props = {
    cardHeading: string
}

const Card4in1 = ({ cardHeading }: Props) => {
    const cardImgData: { title: string, url: string }[] = [
        { title: "Clothing", url: "/images/products/Bar1/a1.jpeg" },
        { title: "Footwear", url: "/images/products/Bar1/a2.jpeg" },
        { title: "Watches", url: "/images/products/Bar1/a3.jpeg" },
        { title: "Bags & wallets", url: "/images/products/Bar1/a4.jpeg" },
    ];
    return (
        <>
            <div className="bg-white p-3 rounded">
                <div className="text-[24px] font-black text-black text-opacity-90">
                    {cardHeading}</div>
                <div className="grid grid-cols-2 w-full grid-rows-2 gap-3" key={0}>
                    {
                        cardImgData.map((card, index) => {
                            return (
                                <div className="p-2" key={index}>
                                    <Image src={card.url} alt='card_image' width={200} height={200} className='w-[150px] h-[150px] hover:scale-105' />
                                    <div className="text-[12px] text-black text-opacity-80">{card.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-[14px] text-teal-600 cursor-pointer">End of season sale</div>
            </div>
        </>
    )
}

export default Card4in1