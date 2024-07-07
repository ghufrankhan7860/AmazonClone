import React from 'react'
import MenuBox from './Navbar.MenuBox'

const SearchBox = () => {
    return (
        <>
            <div className="h-full w-full md:w-7/12 flex items-center">
                <MenuBox />
                <div className="w-10/12 h-full">
                    <input type="text" className='rounded-l h-full md:rounded-l-none w-full text-neutral-900 outline-none p-2' placeholder='Search gAmazon.in' />
                </div>
                <div className="max-w-[1/12] flex items-center justify-center h-full cursor-pointer p-2 px-3 bg-orange-400 hover:bg-orange-500 rounded-r-lg border-l border-neutral-900">
                    {/* search icon */}
                    search
                </div>
            </div>
        </>
    )
}

export default SearchBox