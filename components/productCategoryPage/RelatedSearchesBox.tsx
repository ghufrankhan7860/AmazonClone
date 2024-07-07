import React from 'react';
import { CiSearch } from "react-icons/ci";

const RelatedSearchesBox = () => {
    const options: { title: string }[] = [
        { title: "smartphone unlocked" },
        { title: "iphone" },
        { title: "phone" },
        { title: "smartphone samsung" },
        { title: "xiaomi" },
        { title: "google pixel" },
    ];
    return (
        <>
            <div className="flex flex-col gap-3 py-3 max-w-[60dvw]">
                <div className="text-[1.4rem] font-semibold">Related searches</div>
                <div className="grid grid-cols-3 gap-2">
                    {
                        options.map((op, index) => {
                            return (
                                <div key={index} className="border border-black border-opacity-20 cursor-pointer hover:underline decoration-orange-500 hover:text-orange-500 rounded px-3 py-5 flex gap-5 items-center">
                                    <CiSearch size={14}/>
                                    <div className="text-sm font-semibold">{op.title}</div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default RelatedSearchesBox