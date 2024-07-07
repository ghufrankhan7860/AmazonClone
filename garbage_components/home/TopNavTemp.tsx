import Image from 'next/image'
import React from 'react'

type props = {
    data: {
        imagelink: string,
        imageText: string
    }
}

const TopNavTemp = ({ data }: props) => {
    return (
        <div className="flex cursor-pointer flex-col items-center" >
            <div className="">
                <Image src={data.imagelink} width={1000} height={1000} alt='icon' className='hover:scale-110 transition-all w-[100px] h-[100px]' />
            </div>
            <div className="text-[12px]">{data.imageText}</div>
        </div>
    )
}

export default TopNavTemp