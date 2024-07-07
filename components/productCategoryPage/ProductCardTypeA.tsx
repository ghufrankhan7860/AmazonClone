import Image from 'next/image'
import React from 'react'
import Stars from '../common/utils/Stars'

const ProductCardTypeA = () => {
    return (
        <>
            <div className="flex border rounded gap-3">
                <div className="flex justify-center items-center rounded-l p-3 bg-[#fafafa]">
                    <Image src={"/images/products/Bar1/a2.jpeg"} alt='picture' width={200} height={200} className='w-[200px] h-[200px] hover:scale-105 object-contain mix-blend-multiply' />
                </div>
                <div className="max-w-[50dvw]">
                    <div className="max-w-[50dvw] line-clamp-2 text-[1.2rem] font-medium">Motorola Moto G Stylus | 2022 | 2-Day Battery | Unlocked | Made for US 4/128GB | 50MP Camera | Twilight Blue </div>
                    <div className="flex gap-3 items-center">
                        <Stars star={2.5} starSize={16}/>
                        <div className="text-sm text-teal-700">654</div>
                    </div>
                    <div className="text-[0.9rem] text-black text-opacity-80 ">3K+ bought in past month</div>
                    <div className="flex items-start">
                        <div className="text-sm py-2">$</div>
                        <div className="text-[2rem] font-medium">126</div>
                        <div className="text-sm py-2">99</div>
                    </div>
                    <div className="text-xs">Ships to India</div>
                    <div className="text-black text-sm text-opacity-80">More Buying Choices</div>
                    <div className="text-[14px]">$84.10 <span className="text-teal-700">(51 used & new offers)</span></div>
                    <div className=""></div>
                </div>
            </div>
        </>
    )
}

export default ProductCardTypeA