import { title } from 'process'
import React from 'react'

const ProductPageOptions = () => {
    const options: { title: string }[] = [
        { title: "Deals" },
        { title: "Snacks" },
        { title: "BreakFast" },
        { title: "Warm Beverages" },
        { title: "Cold Beverages" },
        { title: "Cooking Staples" },
        { title: "Baby Food" },
        { title: "Candy & Chocolate" },
        { title: "Subscribe & Save" },
        { title: "International Foods" },
        { title: "SNAP-eligible Groceries" },
    ]
    return (
        <>
            <div className="text-xs flex gap-3 px-3 border-b border-black border-opacity-20 bg-[#f1f1f1]">
                <div className="font-medium py-2 px-2 hover:text-orange-500 cursor-pointer hover:border-b hover:border-orange-500 border-b border-transparent">Grocery</div>
                {
                    options.map((opt, index) => {
                        return <div className="px-2 hover:text-orange-500 cursor-pointer py-2 hover:border-b hover:border-orange-500 border-b border-transparent" key={index}>{opt.title}</div>
                    })
                }

            </div>
            <div className=""></div>
        </>
    )
}

export default ProductPageOptions