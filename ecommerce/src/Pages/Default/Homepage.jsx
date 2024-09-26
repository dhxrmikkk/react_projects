import React from 'react'
import { Link } from 'react-router-dom'
import {
    PRODUCT_ONE,
    PRODUCT_TWO,
    PRODUCT_THREE,
    PRODUCT_FOUR,
    PRODUCT_FIVE,
    PRODUCT_SIX,
    PRODUCT_SEVEN,
    PRODUCT_EIGHT,
} from '../../assets/index'

import Card from '../../Components/Common/Card'


const Homepage = () => {
    const productData = [
        {
            id: 1,
            img: PRODUCT_ONE,
            name: "Hybrid Cleansing Balm",
            price: 32.90,
            category: "cleanser"
        },
        {
            id: 2,
            img: PRODUCT_TWO,
            name: "Soothing Sunscreen Gel",
            price: 24.50,
            category: "sunscreens"
        },
        {
            id: 3,
            img: PRODUCT_THREE,
            name: "Energizing Marine Lotion",
            price: 20.50,
            category: "Body lotion"
        },
        {
            id: 4,
            img: PRODUCT_FOUR,
            name: "Calm Hydrating Moisturizer",
            price: 34.90,
            category: "Bundles"
        },
        {
            id: 5,
            img: PRODUCT_FIVE,
            name: "Makeup Melting Cleanser",
            price: 29.90,
            category: "Cleanser"
        },
        {
            id: 6,
            img: PRODUCT_SIX,
            name: "Balancing Daily Cleanser",
            price: 34.90,
            category: "Cleanser"
        },
        {
            id: 7,
            img: PRODUCT_SEVEN,
            name: "Hydrating Gel Oil",
            price: 20.00,
            category: "Moisturizer"
        },
        {
            id: 8,
            img: PRODUCT_EIGHT,
            name: "Cleanser Concentrate",
            price: 30.00,
            category: "Cleanser"
        },
    ]
    return (
        <>
            <section className='lg:py-[7.5rem] py-[4rem] font-quicksand'>
                <div className='flex justify-between items-center mb-10'>
                    <span className='lg:text-4xl text-2xl'>New Arrivals</span>
                    <div>
                        <Link to={`/shop`}>
                            <button className='uppercase lg:py-3.5 py-2.5 px-6 border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white transition-colors duration-300 ease-in-out'>Shop Now</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                        {
                            productData.map((items) => (
                                <div key={items.id}>
                                    <Card
                                        imgsrc={items.img}
                                        product_category={items.category}
                                        product_name={items.name}
                                        product_price={items.price.toFixed(2)}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage