import React from 'react'
import { ReactLenis } from 'lenis/react'
import {
    LADY_IMG2,
    GALLERIMG_ONE,
    GALLERIMG_TWO,
    GALLERIMG_THREE,
    GALLERIMG_FOUR,
    GALLERIMG_FIVE,
    GALLERIMG_SIX,
}
    from '../../assets/index'
import { Link } from 'react-router-dom'
import ServicesCard from '../../Components/Common/ServicesCard'

const About = () => {
    const serviceData = [
        {
            id: 1,
            serviceIcon: "fa-solid fa-hand-sparkles text-pink-500 text-4xl p-4 flex justify-center items-center",
            serviceName: "All Skin Types",
            serviceDesc: "Morbi nullam odio lectus vitae lorem in non tortor aliquet eget faucibus dui dolor."
        },
        {
            id: 2,
            serviceIcon: "fa-solid fa-leaf text-pink-500 text-4xl p-4 flex justify-center items-center",
            serviceName: "Pure Organic",
            serviceDesc: "Morbi nullam odio lectus vitae lorem in non tortor aliquet eget faucibus dui dolor."
        },
        {
            id: 3,
            serviceIcon: "fa-solid fa-hand-holding-heart text-pink-500 text-4xl p-4 flex justify-center items-center",
            serviceName: "Natural Care",
            serviceDesc: "Morbi nullam odio lectus vitae lorem in non tortor aliquet eget faucibus dui dolor."
        },
    ]

    const imgGallery = [
        {
            id: 1,
            img: GALLERIMG_ONE,
        },
        {
            id: 2,
            img: GALLERIMG_TWO,
        },
        {
            id: 3,
            img: GALLERIMG_THREE,
        },
        {
            id: 4,
            img: GALLERIMG_FOUR,
        },
        {
            id: 5,
            img: GALLERIMG_FIVE,
        },
        {
            id: 6,
            img: GALLERIMG_SIX,
        },
    ]
    return (
        <>
            <ReactLenis root>
                {/* ===================================== FOUNDER INFO SECTION ===================================== */}

                <section className='px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 lg:py-[7.5rem] py-[5rem] justify-items-center flex justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <img src={LADY_IMG2} alt="" />
                        </div>
                        <div className='h-full flex flex-col justify-center  font-quicksand'>
                            <div className='flex flex-col'>
                                <h2 className='uppercase text-[#646467] mb-10 tracking-widest'>From Founder</h2>
                                <i className="fa-solid fa-quote-left text-3xl mb-3"></i>
                                <div className='mb-10'>
                                    <span className='text-xl font-semibold'>Eget porttitor facilisi nunc placerat enim luctus arcu cursus habitant vulputate venenatis iaculis nunc et at viverra viverra sociis.</span>
                                </div>
                                <div>
                                    <h2 className='text-sm font-semibold tracking-widest uppercase'>Mila Christine</h2>
                                    <span className='text-sm text-[#646467]'>Founder</span>
                                </div>
                            </div>
                            <div className='w-full h-[0.5px] bg-black/15 my-10'></div>
                            <div className='flex space-x-7 text-start'>
                                <Link to={`https://www.instagram.com/`}><i className="fa-brands fa-instagram text-xl cursor-pointer hover:text-pink-500"></i></Link>
                                <Link to={`https://www.facebook.com/`}><i className="fa-brands fa-facebook text-xl cursor-pointer hover:text-pink-500"></i></Link>
                                <Link to={`https://www.pintrest.com/`}><i className="fab fa-pinterest text-xl cursor-pointer hover:text-pink-500"></i></Link>
                                <Link to={`https://x.com/`}><i className="fa-brands fa-twitter text-xl cursor-pointer hover:text-pink-500"></i></Link>
                                <Link to={`https://www.youtube.com/`}><i className="fab fa-youtube text-xl cursor-pointer hover:text-pink-500"></i></Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===================================== OUR STORY SECTION ===================================== */}

                <section className='bg-[#f8f8ff] px-4 sm:px-8 md:px-8 xl:px-32 2xl:px-64 py-[5rem] min-h-full font-quicksand'>
                    <div className='w-full flex flex-col md:flex-row md:space-x-4 space-x-0'>
                        <div className='md:w-1/5 '>
                            <span className='text-sm uppercase tracking-widest'>Our Story</span>
                        </div>
                        <div className='w-full'>
                            <div className='text-xl font-semibold mb-4'>
                                Producing the highest quality skin cleanser products diam aliquam, libero tortor est risus diam ut sodales pharetra nibh lorem feugiat interdum.
                            </div>
                            <div className='text-lg mb-4'>Accumsan viverra volutpat vulputate pretium in sed ac feugiat rhoncus consectetur sagittis velit sollicitudin euismod amet non donec enim egestas auctor arcu id sed vulputate elementum, a aliquam proin viverra rutrum at praesent lorem feugiat viverra dictum lectus sed sit non venenatis risus ut viverra venenatis sagittis in.</div>
                            <div className='text-lg'>Aliquam scelerisque scelerisque ac laoreet laoreet faucibus vestibulum fringilla ut aliquet dictumst dignissim id eget cras nulla in venenatis dictum tristique faucibus lectus egestas aenean placerat dolor dolor phasellus eros vestibulum velit turpis ornare facilisis ante ornare.</div>
                        </div>
                    </div>

                    <div className='w-full h-[0.5px] bg-black/15 md:my-[8rem] my-[4rem]'></div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-6 gap-x-6 lg:gap-y-10 lg:gap-x-10'>
                        {
                            serviceData.map((items) => (
                                <div key={items.id}>
                                    <ServicesCard
                                        serviceIcon={items.serviceIcon}
                                        serviceName={items.serviceName}
                                        ServiceDesc={items.serviceDesc}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </section>

                {/* ===================================== IMAGE SECTION ===================================== */}

                <section className='px-4 sm:px-8 md:px-8 xl:px-32 2xl:px-64 lg:py-[7.5rem] py-[5rem] font-quicksand'>
                    <div className='flex justify-center'>
                        <h3 className='text-2xl sm:text-4xl lg:text-4xl mb-20'>Image Gallery</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                        {
                            imgGallery.map((items) => (
                                <div key={items.id}>
                                    <div className='relative overflow-hidden'>
                                        <img src={items.img} alt="" className='w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110 hover:cursor-pointer' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </ReactLenis>
        </>
    )
}

export default About