import React from 'react'
import { CgProfile } from "react-icons/cg";
import SideMenuCard from './Navbar.SideMenuCard';

const SideMenu = () => {
    return (
        <>

            <div className="w-[400px] h-full">
                <div className="flex text-[24px] font-bold text-opacity-90 bg-[#232f3e] text-white items-center gap-2 px-10 h-[50px]">
                    <CgProfile />
                    <div className="">Hello, sign in</div>
                </div>
                <div className="bg-white h-[calc(100%-50px)] overflow-y-auto">
                    <SideMenuCard title={"Digital Content & Devices"} key={0} options={[
                        { title: "Amazon Music" },
                        { title: "Kindle E-readers & Books" },
                        { title: "Amazon Appstore" }
                    ]
                    } />
                    <SideMenuCard title={"Shop by Department"} key={1} options={
                        [
                            { title: "Electronics" },
                            { title: "Computers" },
                            { title: "Smart Home" },
                            { title: "Arts & Crafts" },
                            { title: "Artotomotive" },
                            { title: "Baby" },
                            { title: "Beauty and Personal Care" },
                            { title: "Women's Fashion" },
                            { title: "Men's Fashion" },
                            { title: "Girls' Fashion" },
                            { title: "Boys' Fashion" },
                            { title: "Health and Kitchen" },
                            { title: "Home and Kitchen" },
                            { title: "Industrial and Scientific" },
                            { title: "Luggage" },
                        ]
                    } />
                    <SideMenuCard title={"Programs & Features"} key={2} options={
                        [
                            { title: "Gift Cards" },
                            { title: "Shop By Interset" },
                            { title: "Amazon Live" },
                            { title: "International Shopping" },
                        ]
                    } />
                    <SideMenuCard title={"Help & Settings"} key={3} options={
                        [
                            { title: "Your Account" },
                            { title: "English" },
                            { title: "India" },
                            { title: "Customer Service" },
                            { title: "Sign In" },
                        ]
                    } />
                </div>
            </div>

        </>
    )
}

export default SideMenu