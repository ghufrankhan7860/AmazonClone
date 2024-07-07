import Image from 'next/image'
import React from 'react'

type Props = {
    cardHeading?: string,
    url: string,
    title: string
}

const Card1in1 = ({ cardHeading, url, title }: Props) => {

    return (
        <>
            <div className="bg-white p-3 rounded">
                <div className="text-[24px] font-black text-black text-opacity-9c0  whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {cardHeading}</div>
                <div className="grid grid-cols-1 w-full grid-rows-1 gap-3">
                    <div className="p-2 flex justify-center items-center" >
                        <Image src={url} alt='card_image' width={200} height={200} className='min-w-[300px] max-h-[300px] hover:scale-105' />
                        <div className="text-[12px] text-black text-opacity-80">{title}</div>
                    </div>
                </div>
                <div className="text-[14px] text-teal-600 cursor-pointer">End of season sale</div>
            </div>
        </>
    )
}

export default Card1in1