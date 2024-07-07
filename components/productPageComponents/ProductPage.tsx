import React from 'react'
import ProductPageOptions from './ProductPageOptions'
import ProductLandingBox from './ProductLandingBox'
import ProductExtraDetailsSection from './ProductExtraDetailsSection'
import ProductReviewSection from './ProductReviewSection'

const ProductPage = () => {
    return (
        <>
            <ProductPageOptions />
            <ProductLandingBox />
            <ProductExtraDetailsSection />
            <ProductReviewSection />
            <div className=""></div>
        </>
    )
}

export default ProductPage