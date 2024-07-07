"use client";
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import SideMenu from './Navbar.SideMenu';
import { RxCross2 } from "react-icons/rx";

const SecondBox = () => {

    const [sideMenuActivated, setSideMenuActivated] = useState<boolean>(false);

    const options: { data: string }[] = [
        { data: "Amazon Pay" },
        { data: "Gift Cards" },
        { data: "Amazon miniTV" },
        { data: "Sell" },
        { data: "Health,Household & Personal Care" },
        { data: "Buy Again" },
        { data: "Coupons" },
        { data: "Toys & Games" },
        { data: "Baby" },
        { data: "Coupons" },
        { data: "Customer Service" },
        { data: "Subscribe & Save" },
        { data: "Sports, Fitness & Outdoors" },
    ];


    return (
        <>
            <div className='bg-[#232f3e] text-white text-opacity-80 flex px-1 py-1'>
                <div className="flex gap-2 text-[12px] px-1">
                    <div className="flex items-center gap-1 py-2 hover:outline rounded cursor-pointer px-1" onClick={() => {
                        setSideMenuActivated(true);
                    }}>
                        <div><GiHamburgerMenu /></div>
                        <div>All</div>
                    </div>
                    <div className="flex gap-2 text-[12px] px-1">
                        {
                            options.map((opt, index) => {
                                return (
                                    <div className="py-2 hover:outline rounded cursor-pointer px-1" key={index}>
                                        {opt.data}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {
                sideMenuActivated && (
                    <div className="absolute top-0 left-0 z-20 bg-white backdrop-blur bg-opacity-5 w-[100vw] h-[100vh] flex gap-3" onMouseLeave={() => {
                        setSideMenuActivated(false);
                    }}>
                        <SideMenu />
                        <RxCross2 className='text-white cursor-pointer' size={40} onClick={() => {
                            setSideMenuActivated(false);
                        }} />
                    </div>)
            }
        </>
    )
}

export default SecondBox