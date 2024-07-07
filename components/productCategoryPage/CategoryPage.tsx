import React from 'react'
import FeatureBox from '../categoryPageComponents/FeatureBox'
import OptionsCompontent from './OptionsCompontent'
import ProductPage from './ProductPage'

const CategoryPage = () => {
  return (
    <>
      <div className="flex justify-between items-center px-5 shadow-md py-2">
        <div className="text-sm">1-16 of over 2,000 results for &quot;smartphone&quot;</div>
        <div className="">
          <FeatureBox />
        </div>
      </div>
      <div className="flex px-5 py-2">
        <div className="min-w-[300px] w-[10dvw]">
          <OptionsCompontent />
        </div>
        <div className="w-[calc(90dvw-40px)] ">
          <ProductPage/>
        </div>
      </div>
    </>
  )
}

export default CategoryPage