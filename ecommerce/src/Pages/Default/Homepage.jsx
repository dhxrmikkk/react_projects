import React from 'react'
import { Link } from 'react-router-dom'
import { ReactLenis, useLenis } from 'lenis/react'
import {
    PRODUCT_ONE,
    PRODUCT_TWO,
    PRODUCT_THREE,
    PRODUCT_FOUR,
    PRODUCT_FIVE,
    PRODUCT_SIX,
    PRODUCT_SEVEN,
    PRODUCT_EIGHT,
    LADY_IMG
} from '../../assets/index'

import Card from '../../Components/Common/Card'


const Homepage = () => {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })
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
            <ReactLenis root>
                <main>
                    <section className='px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 '>
                        <div className='lg:py-[7.5rem] py-[4rem] font-quicksand'>
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
                        </div>
                    </section>
                    {/* <section className='bg-[#f8f8ff]'>
                        <div className='lg:pt-[7.5rem] pt-[4rem] lg:pb-[5rem] pb-[3rem] px-4 sm:px-8 md:px-8 xl:px-32 2xl:px-64 h-full'>
                            <div className='flex flex-col sm:flex-row w-full space-x-0 sm:space-x-3 h-full'>
                                <div className='sm:w-1/3 w-full flex justify-center h-full object-cover'>
                                    <img src={LADY_IMG} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className='sm:w-2/3 w-full h-full flex items-center justify-center'>
                                    a
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section className='bg-[#f8f8ff] px-4 sm:px-8 md:px-8 xl:px-32 2xl:px-64 py-[5rem] h-full'>
                        <div className='w-full flex flex-col sm:flex-row sm:space-x-4 space-x-0'>
                            <div className='sm:w-1/2 '>
                                <img src={LADY_IMG} alt="" className='object-cover w-full' />
                            </div>
                            <div className='sm:w-1/2 h-full w-full flex py-6 md:px-16 md:py-16 sm:px-8 sm:py-8 items-center'>
                                <div className='flex flex-col'>
                                    <div className='w-20 h-[0.5px] bg-black mb-10'></div>
                                    <div className='mb-5'>
                                        <span className='text-2xl sm:text-xl lg:text-3xl xl:text-3xl 2xl:text-3xl'>Beauty Flawless Skin</span>
                                    </div>
                                    <div>
                                        <span className='text-[12px] lg:text-sm'>Enim lectus mauris faucibus turpis convallis ipsum odio lorem dignissim id odio sed enim nullam venenatis erat in cursus tortor tristique aliquam nulla quis.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </ReactLenis>
        </>
    )
}

export default Homepage