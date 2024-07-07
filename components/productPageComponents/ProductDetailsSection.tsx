import React from 'react';
import Stars from '../common/utils/Stars';
import { FiMapPin } from "react-icons/fi";

const ProductDetailsSection = () => {

    const mainDetails: { ques: string, ans: string }[] = [
        { ques: "Flavour", ans: "Himalayan" },
        { ques: "Brand", ans: "Tata" },
        { ques: "Item Weight", ans: "1000 Grams" },
        { ques: "Unit Count", ans: "35.274 Ounces" },
        { ques: "Number of Items", ans: "1" },
    ];

    const aboutItems: { point: string }[] = [
        { point: "Vacuum evaporated iodised salt" },
        { point: "Lodine helps in mental development of children and prevents iodine deficiency disorders in adults" },
        { point: "1 kg pack" },
        { point: "Tata salt has ventured into new product segments to meet the changing needs of its customers, adding tata salt lite, tata salt plus, sprinklers, tata black salt and tata rock salt to its repertoire" },
    ];

    return (
        <>
            <div className="flex">
                <div className="w-3/4 pr-10">
                    <div className="border-b border-black border-opacity-30">
                        <div className="text-[1.5rem] font-medium">Tata Salt, 1kg Pack</div>
                        <div className="text-teal-700">Brand: Tata</div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center">
                                <div className="">4.4</div>
                                <div className=""><Stars star={4.5} starSize={14} /></div>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <div className="text-teal-700">539 ratings</div>
                                <div className="">|</div>
                                <div className="text-teal-700">Search this page</div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-b border-black border-opacity-30 flex flex-col gap-1 pb-1">
                        {
                            mainDetails.map((details, index) => {
                                return (
                                    <div className="flex text-sm" key={index}>
                                        <div className="w-1/3 font-medium">{details.ques}</div>
                                        <div className="">{details.ans}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="">
                        <div className="py-2 font-semibold text-[1.1rem]">About this item</div>
                        <div className="">
                            <ul className='list-disc'>
                                {
                                    aboutItems.map((item, index) => {
                                        return <li key={index} className='text-sm'>{item.point}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 flex flex-col gap-2">
                    <div className="border border-black border-opacity-20 p-5 pb-7 rounded-lg shadow">
                        <div className="text-sm">No featured offers available</div>
                        <div className="text-teal-700">Learn more</div>
                    </div>
                    <div className="text-xs flex flex-col gap-2 p-4 border border-black border-opacity-30 rounded-lg shadow">
                        <div className="flex items-center gap-1">
                            <FiMapPin />
                            <span className='text-teal-700'>Deliver to India</span>
                        </div>
                        <button className="bg-[#f7ca00] font-medium text-center py-2 rounded-lg shadow-md">See Similar Items</button>
                        <button className="border text-center font-medium py-2 rounded-lg shadow-md hover:bg-[#f9f9f9]">See All Buying Options</button>
                        <div className="">
                            <hr />
                        </div>
                        <button className="border border-black border-opacity-30 px-2 font-medium py-2 rounded-lg shadow-md hover:bg-[#f9f9f9]">Add to list</button>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsSection