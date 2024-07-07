import React from 'react'
import ProductCardTypeA from './ProductCardTypeA'
import RelatedSearchesBox from './RelatedSearchesBox'
import NextPageScroller from './NextPageScroller'

const ProductPage = () => {
    return (
        <>
            <div className="px-5 flex flex-col gap-5">
                <div className="">
                    <div className="text-[1.2rem] font-medium">Showing results for <span className='italic'>smartphone</span></div>
                    <div className="text-[0.8rem] text-teal-700">Search instead for smart phone</div>
                </div>
                <div className="">
                    <div className="font-bold text-[1.2rem]">Results</div>
                    <div className="text-[0.8rem] font-semibold text-black text-opacity-80">Check each product page for other buying options.</div>
                    <div className="flex flex-col gap-3 py-3">
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                        <ProductCardTypeA />
                    </div>
                    <RelatedSearchesBox />
                    <NextPageScroller />
                    <div className="py-5">
                        <div className="text-[1.5rem] font-semibold">Need help?</div>
                        <div className="flex gap-1">
                            <div className="text-teal-700">Visit the help section</div>
                            <div className="">or</div>
                            <div className="text-teal-700">contact us</div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </>
    )
}

export default ProductPage