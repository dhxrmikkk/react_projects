import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <footer className='bg-[#f8f8ff] lg:pt-[7.5rem] pt-[5rem] border-t border-[#6666ff29]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 font-quicksand gap-6 px-4 sm:px-8 md:px-8 xl:px-32 2xl:px-64 mb-24'>
                    <div className='flex flex-col text-center lg:text-start lg:flex-row space-x-4 items-center'>
                        <div className='bg-white p-4 rounded-full flex items-center justify-center mb-2 lg:mb-0'>
                            <i className="fa-solid fa-truck text-pink-500 text-[18px]"></i>
                        </div>
                        <div className='flex flex-col'>
                            <span className='uppercase tracking-wider'>
                                Free Delivery
                            </span>
                            <span className='text-[#646467] tracking-wider text-sm'>
                                Nullam pharetra egestas mollis
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col text-center lg:text-start lg:flex-row space-x-4 items-center'>
                        <div className='bg-white p-4 rounded-full flex items-center justify-center mb-2 lg:mb-0'>
                            <i className="fa-regular fa-credit-card text-pink-500 text-[18px]"></i>
                        </div>
                        <div className='flex flex-col'>
                            <span className='uppercase tracking-wider'>
                                Easy Payment
                            </span>
                            <span className='text-[#646467] tracking-wider text-sm'>
                                Urna est enim pellentesque
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col text-center lg:text-start lg:flex-row space-x-4 items-center'>
                        <div className='bg-white p-4 rounded-full flex items-center justify-center mb-2 lg:mb-0'>
                            <i className="fa-solid fa-truck-pickup text-pink-500 text-[18px]"></i>
                        </div>
                        <div className='flex flex-col'>
                            <span className='uppercase tracking-wider'>
                                Track Order
                            </span>
                            <span className='text-[#646467] tracking-wider'>
                                Mauris lacus nunc pellentesque
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col text-center lg:text-start lg:flex-row space-x-4 items-center'>
                        <div className='bg-white p-4 rounded-full flex items-center justify-center mb-2 lg:mb-0'>
                            <i className="fa-solid fa-circle-question text-pink-500 text-[18px]"></i>
                        </div>
                        <div className='flex flex-col'>
                            <span className='uppercase tracking-wider'>
                                Have Questions?
                            </span>
                            <span className='text-[#646467] tracking-wider'>
                                Vulputate enim quis sollicitudin
                            </span>
                        </div>
                    </div>
                </div>
                {/* <div className='w-full h-[0.5px] bg-[#6666ff29] mt-20'></div> */}
                <div className='md:py-[4rem] py-[2rem] border-t px-4 sm:px-8 md:px-8 xl:px-32 2xl:px-64 border-[#6666ff29] border-b font-quicksand'>
                    <div className='flex justify-center'>
                        <h1 className='text-3xl my-7'>Flawless</h1>
                    </div>
                    <nav className='flex justify-center my-7'>
                        <ul className='flex flex-col md:flex-row md:space-x-16 text-center md:text-start space-y-3 md:space-y-0'>
                            <li>
                                <Link to="/"><span className={pathname === "/" ? "text-pink-500 capitalize text-lg" : "capitalize text-lg hover:text-pink-500"}>Home</span></Link>
                            </li>
                            <li>
                                <Link to="/shop"><span className={pathname === "/shop" ? "text-pink-500 capitalize text-lg" : "capitalize text-lg hover:text-pink-500"}>Shop</span></Link>
                            </li>
                            <li>
                                <Link to="/about"><span className={pathname === "/about" ? "text-pink-500 capitalize text-lg" : "capitalize text-lg hover:text-pink-500"}>About</span></Link>
                            </li>
                            <li>
                                <Link to="/contact"><span className={pathname === "/contact" ? "text-pink-500 capitalize text-lg" : "capitalize text-lg hover:text-pink-500"}>Contact</span></Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='flex space-x-7 justify-center my-7 pt-7'>
                        <Link to={`https://www.instagram.com/`}><i className="fa-brands fa-instagram text-xl cursor-pointer hover:text-pink-500"></i></Link>
                        <Link to={`https://www.facebook.com/`}><i className="fa-brands fa-facebook text-xl cursor-pointer hover:text-pink-500"></i></Link>
                        <Link to={`https://x.com/`}><i className="fa-brands fa-twitter text-xl cursor-pointer hover:text-pink-500"></i></Link>
                    </div>
                </div>
                <div className='py-[2rem] flex justify-center font-quicksand'>
                    <span className='sm:text-sm text-[#646467] text-[12px]'>© 2024 Skin Cleanser Store. Powered by Skin Cleanser Store.</span>
                </div>
            </footer>
        </>
    )
}

export default Footer