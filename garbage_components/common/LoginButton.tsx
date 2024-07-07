"use client";
import React, { useState } from 'react'
import { FaAngleDown, FaRegUserCircle } from 'react-icons/fa'

const LoginButton = () => {
    const [loginButtonOptionsActive, setLoginButtonOptionsActive] = useState<boolean>(false);


    return (
        <>
            <div className="relative" onMouseLeave={() => {
                setLoginButtonOptionsActive(false);
            }}>
                {
                    loginButtonOptionsActive && (
                        <div className="flex items-center gap-2 cursor-pointer outline outline-blue-500 rounded-lg px-3 py-2 bg-blue-500 text-white" onMouseEnter={() => {
                            setLoginButtonOptionsActive(true);
                        }}>
                            <div className="">
                                <FaRegUserCircle className='text-[24px]' />
                            </div>
                            <div className="">sonu</div>
                            <div className="">
                                <FaAngleDown className='text-[24px]' />
                            </div>
                        </div>
                    )
                }
                {
                    !loginButtonOptionsActive &&
                    <div className="flex items-center gap-2 cursor-pointer hover:outline hover:outline-blue-500 hover:rounded-lg px-3 py-2 hover:bg-blue-500 hover:text-white" onMouseEnter={() => {
                        setLoginButtonOptionsActive(true);
                    }}>
                        <div className="">
                            <FaRegUserCircle className='text-[24px]' />
                        </div>
                        <div className="">sonu</div>
                        <div className="">
                            <FaAngleDown className='text-[24px]' />
                        </div>
                    </div>
                }

                {
                    loginButtonOptionsActive && (
                        <div className="absolute rounded-lg shadow-card top-10 bg-white z-10 -left-10" >
                            <div className="flex flex-col text-[14px] min-w-[250px] p-3">
                                <div className="flex justify-between cursor-pointer py-2">
                                    <div className="">New Customer?</div>
                                    <div className="text-blue-500">Sign Up</div>
                                </div>
                                <div className="border-t flex flex-col">
                                    <div className="py-2 cursor-pointer hover:bg-stone-300 hover:bg-opacity-20 rounded-lg px-3">My Profile</div>
                                    <div className="py-2 cursor-pointer hover:bg-stone-300 hover:bg-opacity-20 rounded-lg px-3">Flipkart Plus Zone</div>
                                    <div className="py-2 cursor-pointer hover:bg-stone-300 hover:bg-opacity-20 rounded-lg px-3">Orderes</div>
                                    <div className="py-2 cursor-pointer hover:bg-stone-300 hover:bg-opacity-20 rounded-lg px-3">Whislist</div>
                                    <div className="py-2 cursor-pointer hover:bg-stone-300 hover:bg-opacity-20 rounded-lg px-3">Rewards</div>
                                    <div className="py-2 cursor-pointer hover:bg-stone-300 hover:bg-opacity-20 rounded-lg px-3">Gift Cards</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default LoginButton