import React from 'react'

type Props = {
    star: number,
    percent: number
}

const ReviewBar = ({ star, percent }: Props) => {

    return (
        <>
            <div className="flex gap-2">
                <div className="text-teal-700">{star} star</div>
                <div className="w-2/3 rounded border border-black border-opacity-30 bg-[#f1f1f1]">
                    <div className="bg-orange-500 h-full"
                        style={{
                            width: `${percent * 2}px`
                        }}
                    ></div>
                </div>
                <div className="text-teal-700">{percent}%</div>
            </div>
        </>
    )
}

export default ReviewBar