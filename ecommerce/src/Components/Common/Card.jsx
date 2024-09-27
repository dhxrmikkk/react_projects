import React from 'react'
import { StarIcon } from '@heroicons/react/24/outline'

const Card = (
    {
        imgsrc,
        product_category,
        product_name,
        product_price
    }
) => {
    return (
        <>
            <div className='flex flex-col font-geist'>
                <img src={imgsrc} alt="" className='w-[260px] object-cover mb-1 pointer-events-none' />
                <span className='text-[#979797] mb-1 text-sm capitalize'>{product_category}</span>
                <span className='text-black mb-1 text-[16px]'>{product_name}</span>
                <div className='flex mb-1'>
                    <StarIcon className='w-4 h-4 cursor-pointer text-[#646467]' />
                    <StarIcon className='w-4 h-4 cursor-pointer text-[#646467]' />
                    <StarIcon className='w-4 h-4 cursor-pointer text-[#646467]' />
                    <StarIcon className='w-4 h-4 cursor-pointer text-[#646467]' />
                    <StarIcon className='w-4 h-4 cursor-pointer text-[#646467]' />
                </div>
                <div>
                    <span className='text-[#979797] font-semibold'> $ {product_price}</span>
                </div>
            </div>
        </>
    )
}

export default Card