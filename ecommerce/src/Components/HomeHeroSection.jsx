import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeroSection = () => {
    return (
        <>
            <main>
                <section className='flex items-center font-quicksand lg:h-[42rem] xl:h-[48rem] h-[35rem] w-full'>
                    <div className='flex flex-col lg:space-y-10 space-y-6'>
                        <div className='text-white lg:text-lg text-sm tracking-wider uppercase'>Welcome to Flawless Store</div>
                        <div className='flex flex-col lg:space-y-8 space-y-4'>
                            <span className='lg:text-7xl text-4xl text-white'>The Best Skin</span>
                            <span className='lg:text-7xl text-4xl text-white'> Cleanser for You</span>
                        </div>
                        <div>
                            <Link to={`/shop`}>
                                <button className='uppercase py-3.5 px-8 border border-white text-white font-semibold hover:bg-white hover:text-pink-500 transition-colors duration-300 ease-in-out'>Shop Now</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomeHeroSection