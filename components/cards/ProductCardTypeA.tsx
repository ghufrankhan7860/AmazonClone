import Image from 'next/image'
import React from 'react'

type Product = {
    url: string,
    discount: number,
    price: number,
    prevPrice: number,
    description: string
}

type Props = {
    product: Product
}

const ProductCardTypeA = ({ product }: Props) => {
    return (
        <>
            <div className="bg-[#f7f8f8] rounded w-[250px] flex flex-col items-center">
                <div className="min-h-[250px] flex items-center">
                    <Image src={product.url} alt='product_image' width={400} height={500} className='w-[200px] max-w-[200px] px-5 py-3 hover:scale-105 cursor-pointer mix-blend-multiply' />
                </div>
                <div className="flex flex-col gap-1 w-[250px]">
                    <div className="flex items-center gap-2 text-[12px]">
                        <div className="text-[#f7f8f8] px-3 py-1 rounded bg-[#cc0c39]">33% off</div>
                        <div className="text-[#cc0c39]">Deal</div>
                    </div>
                    <div className="flex gap-1">
                        <div className="flex">
                            <div className="text-[12px]">$</div>
                            <div className="font-black">{product.price}</div>
                        </div>
                        <div className="flex gap-1 items-end text-[12px] text-black text-opacity-70">
                            <div className="">List Price:</div>
                            <div className="line-through ">${product.prevPrice}</div>
                        </div>
                    </div>
                    <div className="text-[14px] text-black text-opacity-70 whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {product.description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCardTypeA