import React from 'react'
import TopNavTemp from './TopNavTemp';

const TopNav = () => {

    const obj: { imagelink: string, imageText: string }[] = [
        {
            imagelink: "/images/topnav/mobile.png",
            imageText: "Mobile & Tablets",
        },
        {
            imagelink: "/images/topnav/tv.png",
            imageText: "TVs & Electronics",
        },
        {
            imagelink: "/images/topnav/appliance.png",
            imageText: "Appliances",
        },
        {
            imagelink: "/images/topnav/beauty.png",
            imageText: "Beauty",
        },
        {
            imagelink: "/images/topnav/fashion.png",
            imageText: "Fashion",
        },
        {
            imagelink: "/images/topnav/home_kitchen.png",
            imageText: "Home Kitchen",
        },
    ];

    return (
        <div className='flex justify-around bg-white bg-opacity-95 mt-3 mx-3 rounded-lg'>
            <div className="flex justify-around gap-5  px-5 py-3">
                {
                    obj.map((data, index) => {
                        return <TopNavTemp data={data} key={index} />
                    })
                }
            </div>

        </div>
    )
}

export default TopNav