"use client";
import React, { useState } from 'react';

const UserBox = () => {

    const [openUserBoxFloatingBox, setOpenUserBoxFloatingBox] = useState<boolean>(false);

    const options: { title: string }[] = [
        { title: "Account" },
        { title: "Orders" },
        { title: "Recommendations" },
        { title: "Browsing History" },
        { title: "Watchlist" },
        { title: "Video Purchases & Rentals" },
        { title: "Kindle Unlimited" },
        { title: "Content & Devices" },
        { title: "Subscribe & Save Items" },
        { title: "Memberships & Subscriptions" },
        { title: "Music Library" }
    ];


    return (
        <>

            <div className="relative" onMouseLeave={() => {
                setOpenUserBoxFloatingBox(false);
            }}>
                <div className="cursor-pointer hover:outline px-1 py-1 rounded" onMouseEnter={() => {
                    setOpenUserBoxFloatingBox(true);
                }}>
                    <div className="text-xs">Hello, Ghufran</div>
                    <div className="text-sm font-black">Accounts & Lists</div>
                </div>

                {
                    openUserBoxFloatingBox &&
                    <div className="absolute rounded-lg shadow-card top-8 bg-white text-neutral-900 z-10 -left-[200%] " >
                        <div className="flex flex-col p-3 gap-2 w-[500px] text-[12px]">
                            <div className="flex justify-center items-center flex-col gap-1">
                                <div className="bg-yellow-400 px-10 py-1 rounded-xl cursor-pointer hover:bg-yellow-500">Sign In</div>
                                <div className="cursor-pointer">New Customer? <span className='text-blue-500'>Start here.</span></div>
                            </div>
                            <div className="flex border-t-2 pt-2">
                                <div className="px-3 border-r-2 flex flex-col gap-1 w-1/2 text-[12px]">
                                    <div className="text-[16px] font-semibold text-black text-opacity-70">Your Lists</div>
                                    <div className="cursor-pointer hover:bg-black px-1 py-1 rounded hover:bg-opacity-5">Create a List</div>
                                    <div className="cursor-pointer hover:bg-black px-1 py-1 rounded hover:bg-opacity-5">Find a List or Registry</div>
                                </div>
                                <div className="px-3 flex flex-col w-1/2 text-[12px]">
                                    <div className="text-[16px] font-semibold text-black py-1 text-opacity-70">Your Account</div>
                                    {
                                        options.map((opt, index) => {
                                            return (
                                                <div key={index} className="cursor-pointer hover:bg-black px-1 py-1 rounded hover:bg-opacity-5">{opt.title}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }


            </div>

        </>
    )
}

export default UserBox