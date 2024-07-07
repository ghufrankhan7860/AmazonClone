import React from 'react'
import SearchBox from './Navbar.SearchBox'
import Image from 'next/image'
import UserBox from './Navbar.UserBox'
import { IoLocationSharp } from "react-icons/io5";
import Link from 'next/link';


const Navbar = () => {
    return (
        <>
            <div className="w-full h-[70px] flex items-center gap-2 px-3 md:px-0 md:gap-0 flex-col md:flex-row py-3 bg-opacity-100 bg-[#131921] text-neutral-50">
                <div className="w-full md:w-2/12 h-full flex justify-around items-center px-3 cursor-pointer">
                    <Link href={"/mobile/tata_salt"} className="text-3xl md:text-lg hover:outline px-3 py-3 rounded">
                        <Image src={"/images/amazon_white_logo.png"} className="" alt='logo' width={180} height={50} />
                    </Link>
                    <div className="hidden items-center md:flex hover:outline px-3 rounded text-[12px]">
                        <div className="">
                            <IoLocationSharp size={24} />
                        </div>
                        <div className="">
                            <div className="text-[10px] opacity-60">Deliver to Ghufran</div>
                            <div className="text-[10px]">New Delhi 110059</div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/12 h-full flex md:hidden justify-between items-center px-3 cursor-pointer">
                    <div className="text-sm">
                        {/* country flag */}
                        EN
                    </div>
                    <UserBox />
                    <div className="cursor-pointer">
                        <div className="text-xs">Returns</div>
                        <div className="text-sm">& Orders</div>
                    </div>
                    <div className="flex cursor-pointer">
                        <div className="flex relative">
                            <div className="text-orange-400 absolute z-10 text-3xl right-4 -top-4">0</div>
                            <div className="text-5xl text-white">
                                <Image src={"/images/cart_logo_white_bold.png"} className='text-white' alt='cart_logo' width={50} height={50} />
                            </div>
                        </div>
                    </div>
                </div>
                <SearchBox />
                <div className="w-full h-full hidden md:w-3/12 md:flex justify-between items-center px-3" >
                    <div className="text-sm cursor-pointer h-full hover:outline px-3 flex justify-center items-center rounded">
                        {/* country flag */}
                        EN
                    </div>
                    <UserBox />
                    <div className="cursor-pointer rounded flex justify-center items-center h-full flex-col hover:outline px-3">
                        <div className="text-xs">Returns</div>
                        <div className="text-[12px]">& Orders</div>
                    </div>
                    <div className="flex cursor-pointer pr-3 rounded justify-center items-center h-full flex-col hover:outline px-3">
                        <div className="flex relative">
                            <div className="text-orange-400 absolute z-10 text-3xl left-4 -top-4">0</div>
                            <div className="text-5xl text-white flex">
                                <Image src={"/images/cart_logo_white_bold.png"} className='text-white' alt='cart_logo' width={50} height={50} />
                                <span className='text-[16px]'>
                                    cart
                                </span>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Navbar