"use client";
import React, { useState } from 'react'

const FeatureBox = () => {
    const options: { title: string }[] = [
        { title: "Featured" },
        { title: "Price: Low to High" },
        { title: "Price: High to Low" },
        { title: "Avg. Customer Review" },
        { title: "Newest Arrivals" },
        { title: "Best Sellers" },
    ];

    const [selectedMenuOptions, setSelectedMenuOptions] = useState<string>("Featured");
    const [selectedMenuOptionsActivate, setSelectedMenuOptionsActivate] = useState<boolean>(false);



    return (
        <>

            <div className="relative h-full" onMouseLeave={() => {
                setSelectedMenuOptionsActivate(false);
            }} >

                <button className="w-full px-3 bg-neutral-200 rounded-md py-2 hidden md:flex justify-center text-neutral-900 border-neutral-900 text-[10px] h-[100%] items-center " onMouseEnter={
                    () => {
                        setSelectedMenuOptionsActivate(true);
                    }}>
                    Sort By : {selectedMenuOptions}
                </button>

                {
                    selectedMenuOptionsActivate && (
                        <div className="absolute rounded-lg shadow-card top-5 bg-white text-neutral-900 z-10 -left-32" >
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

export default FeatureBox