import React from 'react'
import ProductPictureSection from './ProductPictureSection'
import ProductDetailsSection from './ProductDetailsSection'

const ProductLandingBox = () => {
    return (
        <>
            <div className='flex px-5 pt-10'>
                <div className='w-2/5 '>
                    <ProductPictureSection />
                </div>
                <div className='w-3/5'>
                    <ProductDetailsSection />
                </div>
            </div>
            <div className=''></div>
        </>
    )
}

export default ProductLandingBox