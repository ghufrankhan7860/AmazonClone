"use client";
import React, { useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const ThreeDotsMenuBotton = () => {

    const [threeDotsMenuBottonActive, setThreeDotsMenuBottonActive] = useState<boolean>(false);


    return (
        <>
            <div className="relative" onMouseLeave={() => {
                setThreeDotsMenuBottonActive(false);
            }}>
                <div className="cursor-pointer px-2 hover:outline rounded-lg py-2 hover:outline-[#00000022]" onMouseEnter={() => {
                    setThreeDotsMenuBottonActive(true);
                }}>
                    <BiDotsVerticalRounded className='text-[24px]' />
                </div>

                {
                    threeDotsMenuBottonActive && (
                        <div className="absolute rounded p-3 shadow-card top-10 bg-white z-10 right-0 min-w-[220px] text-[14px]"
                        >
                            <div className="">
                                <div className="py-2 cursor-pointer hover:bg-stone-300 hover:bg-opacity-20 rounded-lg px-3">Notification Preferences</div>
                                <div className="py-2 cursor-pointer hover:bg-stone-300 hover:bg-opacity-20 rounded-lg px-3">24x7 Customer Care</div>
                                <div className="py-2 cursor-pointer hover:bg-stone-300 hover:bg-opacity-20 rounded-lg px-3">Advertise</div>
                                <div className="py-2 cursor-pointer hover:bg-stone-300 hover:bg-opacity-20 rounded-lg px-3">Download App</div>
                            </div>
                        </div>
                    )
                }

            </div>

        </>
    )
}

export default ThreeDotsMenuBotton