import React from 'react'
import { Link } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import {
    PRODUCT_ONE,
    PRODUCT_TWO,
    PRODUCT_THREE,
    PRODUCT_FOUR,
    PRODUCT_FIVE,
    PRODUCT_SIX,
    PRODUCT_SEVEN,
    PRODUCT_EIGHT,
    LADY_IMG,
    CUSTOMER_THREE,
    CUSTOMER_ONE,
    CUSTOMER_TWO,
    GALLERIMG_ONE,
    GALLERIMG_TWO,
    GALLERIMG_THREE,
    GALLERIMG_FOUR,
    GALLERIMG_FIVE,
    GALLERIMG_SIX,
} from '../../assets/index'

import Card from '../../Components/Common/Card'
import ServicesCard from '../../Components/Common/ServicesCard'


const Homepage = () => {
    // PRODUCT DATA
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

    // MOST LOVED PRODUCT
    const lovedProduct = productData.filter((items) => {
        return items.id % 2 !== 0
    })

    // SERVICE DATA
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

    //IMG GALLERY DATA
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
                <main>

                    {/* ===================================== NEW ARRIVAL SECTION ===================================== */}

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
                                            <div key={items.id} className='cursor-pointer'>
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

                    {/* ===================================== LADY SECTION ===================================== */}

                    <section className='bg-[#f8f8ff] px-4 sm:px-8 md:px-8 xl:px-32 2xl:px-64 py-[5rem] min-h-full font-quicksand'>
                        <div className='w-full flex flex-col md:flex-row md:space-x-4 space-x-0'>
                            <div className='md:w-1/2 '>
                                <img src={LADY_IMG} alt="" className='object-cover w-full' />
                            </div>
                            <div className='md:w-1/2 min-h-full w-full flex py-6 md:px-8 md:py-6 items-center'>
                                <div className='flex flex-col'>
                                    <div className='w-20 h-[0.5px] bg-black mb-10'></div>
                                    <div className='mb-5 md:mb-3 lg:mb-5 xl:mb-12'>
                                        <span className='text-2xl sm:text-4xl md:text-xl lg:text-3xl xl:text-3xl 2xl:text-5xl'>Beauty Flawless Skin</span>
                                    </div>
                                    <div className='mb-8 md:mb-5 lg:mb-8'>
                                        <span className='text-sm sm:text-lg md:text-sm lg:text-[16px] xl:text-lg 2xl:text-lg'>Enim lectus mauris faucibus turpis convallis ipsum odio lorem dignissim id odio sed enim nullam venenatis erat in cursus tortor tristique aliquam nulla quis.</span>
                                    </div>
                                    <div className='mb-8 md:mb-5 lg:mb-8 xl:mb-12'>
                                        <span className='text-sm sm:text-lg md:text-sm lg:text-[16px] xl:text-lg 2xl:text-lg'>Aliquam scelerisque scelerisque ac laoreet laoreet faucibus vestibulum fringilla ut aliquet dictumst dignissim id eget cras nulla venenatis dictum tristique faucibus lectus egestas aenean placerat dolor dolor phasellus eros vestibulum velit turpis ornare facilisis ante ornare.</span>
                                    </div>
                                    <div>
                                        <Link to={``}>
                                            <button className='uppercase lg:py-3.5 py-2.5 px-6 border border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white transition-colors duration-300 ease-in-out text-sm xl:text-sm font-semibold'>Read More</button>
                                        </Link>
                                    </div>
                                </div>
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

                    {/* ===================================== VIDEO BG SECTION ===================================== */}

                    <section className='bg-[url(./assets/images/videobg.webp)] bg-center bg-cover h-[720px]'>
                        <div className='h-full flex items-center justify-center'>
                            <Link to={`/`}>
                                <button className='uppercase lg:py-3.5 py-2.5 px-10 border border-white text-white hover:bg-white hover:text-pink-500 transition-colors duration-300 ease-in-out text-sm font-quicksand tracking-widest font-semibold'>
                                    <i className="fa-brands fa-youtube me-2"></i>Watch the Videos
                                </button>
                            </Link>
                        </div>
                    </section>

                    {/* ===================================== LOVED PRODUCT SECTION ===================================== */}

                    <section className='px-4 sm:px-8 md:px-8 xl:px-32 2xl:px-64 lg:py-[7.5rem] py-[5rem] font-quicksand'>
                        <div className='flex flex-col items-center justify-center mb-10'>
                            <h2 className='text-2xl sm:text-4xl lg:text-4xl mb-2'>Most Loved by the Customers</h2>
                            <span className='font-semibold text-[#646467] text-sm text-center'>Mauris lacus nunc pellentesque eget bibendum vitae scelerisque</span>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
                            {
                                lovedProduct.map((items) => (
                                    <div key={items.id} className='cursor-pointer'>
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
                    </section>

                    {/* ===================================== CUSTOMER REVIEW SECTION ===================================== */}

                    <section className='bg-[#f8f8ff] px-4 sm:px-8 md:px-8 xl:px-32 2xl:px-64 lg:py-[7.5rem] py-[5rem] font-quicksand'>
                        <div className='flex justify-center'>
                            <h2 className='text-2xl sm:text-4xl lg:text-4xl mb-20'>What Our Customers Say</h2>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-6 gap-x-6 lg:gap-y-10 lg:gap-x-10'>
                            <div className='flex items-center flex-col justify-center'>
                                <div className='flex space-x-[2px] mb-4'>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                </div>
                                <div className='text-center'>
                                    <span className='text-lg'>Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.</span>
                                </div>
                                <div className='my-4'>
                                    <img src={CUSTOMER_ONE} alt="" className='rounded-full' />
                                </div>
                                <div>
                                    <span className='font-semibold text-[#646467] uppercase text-sm tracking-wider'>Jennifer Lewis</span>
                                </div>
                            </div>
                            <div className='flex items-center flex-col justify-center'>
                                <div className='flex space-x-[2px] mb-4'>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                    <i className="fa-solid fa-star-half-stroke text-pink-500"></i>
                                </div>
                                <div className='text-center'>
                                    <span className='text-lg'>Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.</span>
                                </div>
                                <div className='my-4'>
                                    <img src={CUSTOMER_TWO} alt="" className='rounded-full' />
                                </div>
                                <div>
                                    <span className='font-semibold text-[#646467] uppercase text-sm tracking-wider'>Alicia Heart</span>
                                </div>
                            </div>
                            <div className='flex items-center flex-col justify-center'>
                                <div className='flex space-x-[2px] mb-4'>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                    <i className="fa-solid fa-star text-pink-500"></i>
                                    <i className="fa-regular fa-star text-pink-500"></i>
                                </div>
                                <div className='text-center'>
                                    <span className='text-lg'>Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.</span>
                                </div>
                                <div className='my-4'>
                                    <img src={CUSTOMER_THREE} alt="" className='rounded-full' />
                                </div>
                                <div>
                                    <span className='font-semibold text-[#646467] uppercase text-sm tracking-wider'>Juan Carlos</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ===================================== IMG_GALLERY ===================================== */}

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

                </main>


            </ReactLenis>
        </>
    )
}

export default Homepage