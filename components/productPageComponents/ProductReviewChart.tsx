import React from 'react'
import Stars from '../common/utils/Stars'
import ReviewBar from './ReviewBar'

const ProductReviewChart = () => {

    const reviewBarDetails: { star: number, percent: number }[] = [
        { star: 5, percent: 70 },
        { star: 4, percent: 21 },
        { star: 3, percent: 6 },
        { star: 2, percent: 1 },
        { star: 1, percent: 2 },
    ]

    return (
        <>
            <div className="">
                <div className="font-semibold text-[1.5rem]">Customer reviews</div>
                <div className="flex gap-3 items-center">
                    <Stars star={4.5} starSize={20} />
                    <div className="text-[1.2rem]">4.5 out of 5</div>
                </div>
                <div className="">61,886 global ratings</div>
                <div className="flex flex-col gap-2 py-2">
                    {
                        reviewBarDetails.map((rev, index) => {
                            return <ReviewBar percent={rev.percent} star={rev.star} key={index} />
                        })
                    }
                </div>

            </div>
            <div className=""></div>
        </>
    )
}

export default ProductReviewChart