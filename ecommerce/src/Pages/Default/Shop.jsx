import React from 'react'
import { ReactLenis } from 'lenis/react'
import { productData } from '../productData';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../Components/Common/Card'


const Shop = () => {
    const navigate = useNavigate()
    const handleProductClick = (item) => {
        navigate(`/shop/${item.slug}`);
    };
    return (
        <>
            <ReactLenis root>
                <main>
                    <section className='px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64'>
                        <div className='flex md:justify-end xl:px-8 xl:py-5 py-4 font-quicksand'>
                            <Link to={`/`}>
                                <span className='text-[#646467]'>Home</span>
                            </Link> <span className='ms-1'> / </span>
                            <span className='ms-1'>Shop</span>
                        </div>
                        <div className='md:my-10 my-5'>
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                                {productData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="cursor-pointer"
                                        onClick={() => handleProductClick(item)}
                                    >
                                        <Card
                                            imgsrc={item.img}
                                            product_category={item.category}
                                            product_name={item.name}
                                            product_price={item.price.toFixed(2)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </ReactLenis>
        </>
    )
}

export default Shop