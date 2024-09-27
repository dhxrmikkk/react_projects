import React from 'react'
import { ReactLenis } from 'lenis/react'
import { Link } from 'react-router-dom'
import FAQ from '../../Components/FAQ'

const Contact = () => {
    return (
        <>
            <ReactLenis root>
                <section className='bg-[#f8f8ff] px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 lg:py-[7.5rem] py-[5rem] '>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 font-quicksand gap-6  mb-24'>
                        <div className='flex flex-col text-center  items-center justify-center'>
                            <div className='bg-white py-3 px-5 rounded-full mb-2 lg:mb-5'>
                                <i className="fas fa-map-marker-alt text-pink-500 text-2xl w-full rounded-full"></i>
                            </div>
                            <div>
                                <span className='capitalize tracking-wider text-xl'>
                                    Track Order
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col text-center  items-center justify-center'>
                            <div className='bg-white py-3 px-4 rounded-full mb-2 lg:mb-5'>
                                <i className="fas fa-boxes text-pink-500 text-2xl w-full rounded-full"></i>
                            </div>
                            <div>
                                <span className='capitalize tracking-wider text-xl'>
                                    Packaging & Delivery
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col text-center  items-center justify-center'>
                            <div className='bg-white py-3 px-4 rounded-full mb-2 lg:mb-5'>
                                <i className="far fa-question-circle text-pink-500 text-2xl w-full rounded-full"></i>
                            </div>
                            <div>
                                <span className='capitalize tracking-wider text-xl'>
                                    FAQ Services
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col text-center  items-center justify-center'>
                            <div className='bg-white py-3 px-4 rounded-full mb-2 lg:mb-5'>
                                <i className="fas fa-sync-alt text-pink-500 text-2xl w-full rounded-full"></i>
                            </div>
                            <div>
                                <span className='capitalize tracking-wider text-xl'>
                                    Returns Policy
                                </span>
                            </div>
                        </div>
                    </div>
                    <iframe
                        src="https://maps.google.com/maps?q=San%20Francisco&t=m&z=14&output=embed&iwloc=near"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                        className='w-full h-[35rem]'
                    ></iframe>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center font-quicksand gap-6 my-24'>
                        <div className='flex flex-col text-center lg:text-start lg:flex-row space-x-4 items-center'>
                            <div className='bg-white p-4 rounded-full flex items-center justify-center mb-2 lg:mb-0'>
                                <i className="fas fa-map-marker-alt text-pink-500 text-[18px]"></i>
                            </div>
                            <div className='flex flex-col'>
                                <span className='uppercase tracking-widest mb-1 text-sm'>
                                    Find Us
                                </span>
                                <span className='text-[#000] tracking-wider max-w-64'>
                                    123 Demo St, San Francisco, CA 45678, United States
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col text-center lg:text-start lg:flex-row space-x-4 items-center'>
                            <div className='bg-white p-4 rounded-full flex items-center justify-center mb-2 lg:mb-0'>
                                <i className="fa-solid fa-phone text-pink-500 text-[18px]"></i>
                            </div>
                            <div className='flex flex-col'>
                                <span className='uppercase tracking-widest mb-1 text-sm'>
                                    Support
                                </span>
                                <span className='text-[#000] tracking-wider'>
                                    Call: <Link to={`tel:555-555-5555"`}>+1 123 456 7890</Link>
                                </span>
                                <div className='text-[#000] tracking-wider'>
                                    Email: <Link to={`mailto:mail@example.com`}>mail@example.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col text-center lg:text-start lg:flex-row space-x-4 items-center'>
                            <div className='bg-white p-4 rounded-full flex items-center justify-center mb-2 lg:mb-0'>
                                <i className="fa-solid fa-clock text-pink-500 text-[18px]"></i>
                            </div>
                            <div className='flex flex-col'>
                                <span className='uppercase tracking-widest mb-1 text-sm'>
                                    Working hours
                                </span>
                                <span className='text-[#000] tracking-wider'>
                                    Mon - Fri: 08:30 - 20:00
                                </span>
                                <div className='text-[#000] tracking-wider'>
                                    Sat & Sun: 09:30 - 21:30
                                </div>
                            </div>
                        </div>
                        {/* <FAQ /> */}
                    </div>
                </section>
            </ReactLenis>
        </>
    )
}

export default Contact