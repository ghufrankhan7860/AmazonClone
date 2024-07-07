import Image from 'next/image'
import React from 'react'
import { CiSearch, CiShop } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import LoginButton from './LoginButton';
import ThreeDotsMenuBotton from './ThreeDotsMenuBotton';

const Navbar = () => {
    return (
        <div className='bg-white bg-opacity-95 px-5 py-3 flex items-center gap-3 justify-around'>
            <div className="">
                <Image width={150} height={100} src={"/images/flipkart_logo.png"} alt='logo' className='cursor-pointer' />
            </div>
            <div className="w-1/2 flex bg-blue-100 items-center px-3 rounded-md">
                <CiSearch className='text-[24px] cursor-pointer' />
                <input type="text" className='outline-none px-3 py-2 w-full bg-blue-100' placeholder='Search For Products, Brands and More' />
            </div>
            <div className="flex gap-10 items-center ">
                <LoginButton />
                <div className="flex gap-2 cursor-pointer ">
                    <div className="relative flex items-center">
                        <IoCartOutline className='text-[24px]' />
                        <div className="absolute text-[8px] -top-0 bg-red-500
                        flex items-center justify-center rounded-full left-2
                         text-white w-4 h-4">6</div>
                    </div>
                    <div className="">Cart</div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className=""><CiShop className='text-[24px]' /></div>
                    <div className="">Become a Seller</div>
                </div>
                <ThreeDotsMenuBotton />
            </div>
        </div>
    )
}

export default Navbar