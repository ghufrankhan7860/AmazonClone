import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Stars = ({ star,starSize }: { star: number,starSize:number }) => {
    const starsArray = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= star) {
            starsArray.push(<FaStar key={i} size={starSize} className='text-orange-500' />);
        } else if (i - 0.5 === star) {
            starsArray.push(<FaStarHalfAlt key={i} size={starSize} className='text-orange-500' />);
        } else {
            starsArray.push(<FaRegStar key={i} size={starSize} className='text-orange-500' />);
        }
    }

    return (
        <>
            <div className="flex">
                {starsArray}
            </div>
        </>
    );
};

export default Stars;
