import React from 'react'
import Stars from '../common/utils/Stars'

const OptionsCompontent = () => {

  const brands: { name: string, selected: boolean }[] = [
    { name: "Furinno", selected: false },
    { name: "HOOBRO", selected: false },
    { name: "Sweetcrispy", selected: false },
    { name: "OLIXIS", selected: false },
    { name: "Flash Furniture", selected: false },
    { name: "ODK", selected: false },
    { name: "FDW", selected: false },
  ];

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="">
          <div className="font-semibold text-[1.5rem]">Customer Reviews</div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center cursor-pointer hover:text-orange-500 text-black text-opacity-70">
              <Stars star={4} starSize={20} />
              <div className="text-sm">& Up</div>
            </div>
            <div className="flex gap-1 items-center cursor-pointer hover:text-orange-500 text-black text-opacity-70">
              <Stars star={3} starSize={20} />
              <div className="text-sm">& Up</div>
            </div>
            <div className="flex gap-1 items-center cursor-pointer hover:text-orange-500 text-black text-opacity-70">
              <Stars star={2} starSize={20} />
              <div className="text-sm">& Up</div>
            </div>
            <div className="flex gap-1 items-center cursor-pointer hover:text-orange-500 text-black text-opacity-70">
              <Stars star={1} starSize={20} />
              <div className="text-sm">& Up</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="font-semibold text-[1.5rem]">Brands</div>
          <div className="flex flex-col max-w-fit">
            {
              brands.map((br, index) => {
                return (
                  <label htmlFor={`${index}check`} className="flex gap-1 items-center hover:text-orange-500 cursor-pointer" key={index}>
                    <div className="">
                      <input type="checkbox" name="" id={`${index}check`} className='p-3 hover:border-teal-500 accent-teal-700' />
                    </div>
                    <div className="text-sm font-medium">
                      {br.name}
                    </div>
                  </label>
                )
              })
            }
          </div>
        </div>
        <div className="">
          <div className="font-semibold text-[1.5rem]">Price</div>
          <div className="font-medium text-sm">
            <div className="hover:text-orange-500 cursor-pointer">Under $25</div>
            <div className="hover:text-orange-500 cursor-pointer">$25 to $50</div>
            <div className="hover:text-orange-500 cursor-pointer">$50 to $100</div>
            <div className="hover:text-orange-500 cursor-pointer">$100 to $200</div>
            <div className="hover:text-orange-500 cursor-pointer">$200 & Above</div>
          </div>
          <div className="flex gap-2 py-2">
            <div className="flex border px-3 py-1 rounded border-black border-opacity-20 shadow-inner">
              <div className="">$</div>
              <input type="text" placeholder='Min' className="w-10 outline-none"/>
            </div>
            <div className="flex border px-3 py-1 rounded border-black border-opacity-20 shadow-inner">
              <div className="">$</div>
              <input type="text" placeholder='Max' className="w-10 outline-none"/>
            </div>
            <div className="flex border px-3 py-1 rounded border-black border-opacity-20 shadow hover:bg-teal-500 hover:bg-opacity-80 hover:text-white cursor-pointer">Go</div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </>
  )
}

export default OptionsCompontent