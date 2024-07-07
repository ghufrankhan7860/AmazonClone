import Image from 'next/image'
import React from 'react'

type Props = {
    product: {
        url: string,
        type: string,
        data: string
    }
}

const CardBarTypeA = ({ product }: Props) => {
    return (
        <div>
            <div className="flex flex-col items-center min-w-[220px] w-[220px] max-w-[220px] h-[300px] p-3 gap-3 border-black border rounded-lg border-opacity-20 cursor-pointer">
                <div className="h-[250px] max-h-[250px]">
                    <Image src={product.url} alt='product' width={1000} className='hover:scale-105 max-h-[190px]' height={1000} />
                </div>
                <div className="flex flex-col gap-1 items-center text-sm">
                    <div className="text-black text-opacity-60 text-xs">{product.type}</div>
                    <div className="font-bold text-black text-opacity-80">{product.data}</div>
                </div>
            </div>
        </div>
    )
}

export default CardBarTypeA