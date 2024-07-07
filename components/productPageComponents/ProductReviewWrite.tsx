import React from 'react'

const ProductReviewWrite = () => {
  return (
    <>
        <div className="my-5 py-8 border-y border-black border-opacity-30 flex flex-col gap-2">
          <div className="text-[1.3rem] font-semibold">Review this Product</div>
          <div className="text-black text-opacity-80">Share your thoughts with other customers</div>
          <button className="text-center py-1 font-sm border border-black border-opacity-30 rounded shadow-md hover:bg-[#f4f4f4]">Write a product review</button>
        </div>
        <div className=""></div>
    </>
  )
}

export default ProductReviewWrite