import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
    title: string,
    options?: { title: string }[]
}

const SideMenuCard = ({ title, options }: Props) => {


    return (
        <>
            <div className=" flex flex-col gap-3 py-3 border">
                <div className="text-[18px] px-10 font-bold text-black text-opacity-80">
                    {title}
                </div>
                <div className="flex flex-col gap-1 px-0">
                    {
                        options?.map((opt, index) => {
                            return (
                                <div key={index} className="cursor-pointer hover:bg-stone-200 py-2 px-10 rounded flex items-center justify-between">
                                    <div className="">
                                        {opt.title}
                                    </div>
                                    <div className="">
                                        <FaChevronRight />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SideMenuCard