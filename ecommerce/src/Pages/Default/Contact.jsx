import React from 'react'
import { ReactLenis } from 'lenis/react'

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
                </section>
            </ReactLenis>
        </>
    )
}

export default Contact