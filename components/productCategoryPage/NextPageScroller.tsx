import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextPageScroller = () => {
    return (
        <>
            <div className="flex justify-end px-10 py-5 max-w-[60dvw]">
                <div className="flex items-center border border-black rounded px-5 py-0 border-opacity-20 shadow font-semibold text-black text-opacity-80">
                    <div className="flex items-center cursor-pointer border-r pr-5">
                        <FaChevronLeft />
                        <div className="">Previous</div>
                    </div>
                    <div className=" text-black font-normal text-[1.5rem] border-opacity-20 py-0 border-black text-opacity-60 flex">
                        <div className="px-4 py-1 cursor-pointer">1</div>
                        <div className="px-4 py-1">...</div>
                        <div className="px-4 py-1 cursor-pointer">4</div>
                        <div className="px-4 py-1 cursor-pointer border border-black text-black">5</div>
                        <div className="px-4 py-1 cursor-pointer">6</div>
                        <div className="px-4 py-1">...</div>
                        <div className="px-4 py-1 cursor-pointer">20</div>
                    </div>
                    <div className="flex items-center cursor-pointer border-l pl-5">
                        <div className="">Next</div>
                        <FaChevronRight />
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </>
    )
}

export default NextPageScroller