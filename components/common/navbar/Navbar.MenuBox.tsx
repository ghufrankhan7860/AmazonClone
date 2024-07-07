"use client";
import React, { useState } from 'react'

const MenuBox = () => {

    const options: { title: string }[] = [
        { title: "All Departments" },
        { title: "Arts & Crafts" },
        { title: "All Categories" },
        { title: "Alexa Skills" },
        { title: "Amazon Devices" },
        { title: "Amazon Fashion" },
        { title: "Amazon Pharmacy" },
        { title: "Appliances" },
        { title: "Apps & Games" },
        { title: "Audible Audiobooks" },
        { title: "Baby" },
        { title: "Beauty" },
        { title: "Books" },
        { title: "Car & Motorbike" },
        { title: "Clothing & Accessories" },
        { title: "Collectibles" },
        { title: "Computers & Accessories" },
        { title: "Electronics" },
        { title: "Furniture" },
        { title: "Garden & Outdoors" },
        { title: "Gift Cards" },
        { title: "Grocery & Gourmet Foods" },
        { title: "Health & Personal Care" },
        { title: "Home & Kitchen" },
        { title: "Industrial & Scientific" },
        { title: "Jewellery" },
        { title: "Kindle Store" },
        { title: "Luggage & Bags" },
        { title: "Luxury Beauty" },
        { title: "Movies & TV Shows" },
        { title: "Music" },
        { title: "Musical Instruments" },
        { title: "Office Products" },
        { title: "Pet Supplies" },
        { title: "Prime Video" },
        { title: "Shoes & Handbags" },
        { title: "Software" },
        { title: "Sports, Fitness & Outdoors" },
        { title: "Subscribe & Save" },
        { title: "Tools & Home Improvement" },
        { title: "Toys & Games" },
        { title: "Under ₹500" },
        { title: "Video Games" },
        { title: "Watches" },
    ];

    const [selectedMenuOptions, setSelectedMenuOptions] = useState<string>("All");
    const [selectedMenuOptionsActivate, setSelectedMenuOptionsActivate] = useState<boolean>(false);



    return (
        <>

            <div className="relative h-full" onMouseLeave={() => {
                setSelectedMenuOptionsActivate(false);
            }} >

                <div className="w-full px-5 bg-neutral-200 rounded-l-md py-2 hidden md:flex justify-center  border-r text-neutral-900 border-neutral-900 text-[12px] h-[100%] items-center" onMouseEnter={
                    () => {
                        setSelectedMenuOptionsActivate(true);
                    }}>
                    {selectedMenuOptions}
                </div>

                {
                    selectedMenuOptionsActivate && (
                        <div className="absolute rounded-lg shadow-card top-10 bg-white text-neutral-900 z-10 -left-10" >
                            <div className="flex flex-col text-[14px] min-w-[250px] p-3">
                                <div className="flex flex-col max-h-[300px] overflow-y-auto">
                                    {
                                        options.map((data, index) => {
                                            return (
                                                <div key={index} className="py-2 cursor-pointer hover:bg-blue-500 hover:bg-opacity-50 rounded-lg px-3" onClick={() => {
                                                    setSelectedMenuOptions(data.title);
                                                }}>{data.title}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }



            </div>
        </>
    )
}

export default MenuBox