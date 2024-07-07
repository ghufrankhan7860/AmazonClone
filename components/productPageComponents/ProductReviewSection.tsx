import React from 'react'
import ProductReviewChart from './ProductReviewChart'
import ProductReviewWrite from './ProductReviewWrite'

const ProductReviewSection = () => {
    return (
        <>
            <div className="border-t px-5 flex py-10 border-black border-opacity-30">
                <div className="w-1/5">
                    <ProductReviewChart />
                    <ProductReviewWrite />
                </div>
                <div className="w-4/5">
                    review details
                </div>
            </div>
            <div className=""></div>
        </>
    )
}

export default ProductReviewSection