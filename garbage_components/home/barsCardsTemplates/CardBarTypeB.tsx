import React from 'react'
import { FaAngleRight } from "react-icons/fa"
import CardBarTypeC from './CardBarTypeC'

const CardBarTypeB = () => {
    return (
        <div>
            <div className="bg-white p-3 rounded flex gap-2 flex-col">
                <div className="flex justify-between py-3">
                    <div className="text-[18px] font-bold text-opacity-90 text-black">Beauty, Food, Toys & more</div>
                    <div className="w-6 h-6 bg-blue-800 flex justify-center items-center rounded-full cursor-pointer hover:scale-105">
                        <FaAngleRight className='text-white' size={14} />
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 h-[600px] gap-4 px-3 mb-2">
                    <CardBarTypeC />
                    <CardBarTypeC />
                    <CardBarTypeC />
                    <CardBarTypeC />
                </div>
            </div>
        </div>
    )
}

export default CardBarTypeB