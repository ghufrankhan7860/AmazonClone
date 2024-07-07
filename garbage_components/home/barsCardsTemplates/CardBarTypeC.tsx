import Image from 'next/image'
import React from 'react'

const CardBarTypeC = () => {
    return (
        <div>
            <div className="flex flex-col items-center border border-black border-opacity-20 rounded-lg p-2 min-h-[290px] cursor-pointer">
                <div className="min-h-[230px] p-2">
                    <Image src={"/images/products/Bar1/a2.jpeg"} width={1000} height={1000} className='max-h-[210px] hover:scale-105' alt='product' />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <div className="text-[14px] text-black text-opacity-80">
                        Smart Phones
                    </div>
                    <div className="font-bold text-green-500 text-opacity-90">MIN 40% OFF </div>
                </div>
            </div>
        </div>
    )
}

export default CardBarTypeC