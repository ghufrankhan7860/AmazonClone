import Image from 'next/image';
import React from 'react';
import { BsGlobe2 } from "react-icons/bs";

const Footer = () => {

    const options: { title: string, opt: string[] }[] = [
        { "title": "Get to Know Us", opt: ["Careers", "Blog", "About Amazon", "Investor Relations", "Amazon Devices", "Amazon Science"] },
        { "title": "Make Money with Us", opt: ["Sell products on Amazon", "Sello on Amazon Business", "Sell apps on Amazon", "Become an Affliate", "Advertise Your Products", "Self-Publish with Us", "Host an Amazon Hub", "See More Make Money with Us"] },
        { "title": "Amazon Payment Products", opt: ["Amazon Business Card", "Shop with Points", "Reload Your Balance", "Amazon Currency Converter"] },
        { "title": "Let Us Help You", opt: ["Amazon and COVID-19", "Your Account", "Your Orders", "Shipping Rates & Policies", "Returns & Replacements", "Manage Your Content and Devices", "Amazon Assistant", "Help"] },
    ];

    const bottomOptions: { title: string, opt: string }[] = [
        { title: "Amazon Music", opt: "Stream millions of songs" },
        { title: "Amazon Ads", opt: "Reach customers wherever they spend their time" },
        { title: "6pm", opt: "Score deals on fashion brands" },
        { title: "AbeBooks", opt: "Books, art & collectibles" },
        { title: "ACX", opt: "Audiobook Publishing Made Easy" },
        { title: "Sell on Amazon", opt: "Start a Selling Account" },
        { title: "Amazon Business", opt: "Everything For Your Business" },
        { title: "AmazonGlobal", opt: "Ship Orders Internationally" },
        { title: "Home Services", opt: "Experienced Pros Happiness Guarantee" },
        { title: "Amazon Web Services", opt: "Scalable Cloud Computing Services" },
        { title: "Audible", opt: "Listen to Books & Original Audio Performances" },
        { title: "Box Office Mojo", opt: "Find Movie Box Office Data" },
        { title: "Goodreads", opt: "Book reviews & recommendations" },
        { title: "IMDb", opt: "Movies, TV & Celebrities" },
        { title: "IMDbPro", opt: "Get Info Entertainment Professionals Need" },
        { title: "Kindle Direct Publishin", opt: "Indie Digital & Print Publishing Made Easy" },
        { title: "Prime Video Direct", opt: "Video Distribution Made Easy" },
        { title: "Shopbop", opt: "Designer Fashion Brands" },
        { title: "Wooti", opt: "Deals and shenanigans" },
        { title: "Zappos", opt: "Shoes & Clothing" },
        { title: "Ring", opt: "Smart Home Security Systems" }
    ];

    const bottom4Options: { title: string, opt: string }[] = [
        { title: "Amazon Music", opt: "Stream millions of songs" },
        { title: "Amazon Ads", opt: "Reach customers wherever they spend their time" },
        { title: "6pm", opt: "Score deals on fashion brands" },
        { title: "AbeBooks", opt: "Books, art & collectibles" },
        { title: "Audible", opt: "Listen to Books & Original Audio Performances" },
    ];
    return (
        <>
            <div className="">
                <div className="hover:bg-[#485769] bg-[#384b64] text-white flex justify-center text-[12px] py-4 cursor-pointer">Back to top</div>
                <div className="bg-[#232f3e]">
                    <div className="py-14 w-full flex justify-center text-white">
                        <div className="w-3/5 grid grid-cols-4 gap-3">
                            {
                                options.map((opt, index) => {
                                    return <>
                                        <div key={index} className="">
                                            <div className="pb-2 text-[16px] font-semibold">{opt.title}</div>
                                            <div className=" flex flex-col gap-2">
                                                {
                                                    opt.opt.map((op, ind) => {
                                                        return <>
                                                            <div key={ind} className="text-[13px] text-white text-opacity-90 cursor-pointer hover:underline">{op}</div>
                                                        </>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                    <div className="flex justify-center gap-10 items-center border-t py-8 border-white border-opacity-20">
                        <div className="">
                            <Image src={"/images/amazon_white_logo.png"} alt='logo' width={90} height={25} />
                        </div>
                        <div className="flex text-white text-[14px] items-center gap-3">
                            <div className="flex items-center gap-1 border border-white px-2 py-1 rounded text-white text-opacity-70">
                                <div className="">
                                    <BsGlobe2 />
                                </div>
                                <div className="">English</div>
                            </div>
                            <div className="border border-white px-2 py-1 rounded text-white text-opacity-70">$ USD - U.S. Dollar</div>
                            <div className="flex items-center border border-white px-2 py-1 rounded text-white text-opacity-70 gap-1">
                                <div className="">
                                    <Image src={"/images/flags/india_flag.png"} alt='flag' width={20} height={20} />
                                </div>
                                <div className="">United States</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#131a22] flex justify-center py-10 flex-col items-center gap-5">
                    <div className="w-3/5 grid grid-cols-7 gap-5">
                        {
                            bottomOptions.map((botOp, index) => {
                                return <>
                                    <div key={index} className="cursor-pointer ">
                                        <div className="text-white text-[10px] text-opacity-100">
                                            {botOp.title}
                                        </div>
                                        <div className="text-white text-[10px] hover:underline text-opacity-70">
                                            {botOp.opt}
                                        </div>
                                    </div>
                                </>
                            })
                        }
                        <div></div>
                        {
                            bottom4Options.map((botOp, index) => {
                                return <>
                                    <div key={index} className="cursor-pointer ">
                                        <div className="text-white text-[10px] text-opacity-100">
                                            {botOp.title}
                                        </div>
                                        <div className="text-white text-[10px] hover:underline text-opacity-70">
                                            {botOp.opt}
                                        </div>
                                    </div>
                                </>
                            })
                        }
                        <div></div>
                    </div>
                    <div className="flex-col flex items-center">
                        <div className="flex text-white gap-3 text-[12px] ">
                            {
                                ["Conditions Of Use", "Privacy Notice", "Your Ads Privacy Choices"].map((opt, index) => {
                                    return <>
                                        <div className="cursor-pointer" key={index}>{opt}</div>
                                    </>
                                })
                            }
                        </div>
                        <div className="">
                            <div className="text-[12px] text-white">© 1996-2024,Amazon.com, Inc. or its affiliates</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer