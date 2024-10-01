import React, { useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { productData } from '../productData';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../Components/Common/Card';
import Pagination from '../../Components/Common/Pagination'

const Shop = () => {
    const itemsPerPage = 8;
    const [selectedFilter, setSelectedFilter] = useState('Filter');
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const handleProductClick = (item) => {
        navigate(`/shop/${item.slug}`);
    };

    const getFilteredProducts = () => {
        let filteredProducts = [...productData];

        if (selectedFilter === 'Price High To Low') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (selectedFilter === 'Price Low To High') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (selectedFilter === 'Popular') {
            filteredProducts = filteredProducts.filter((_, index) => index % 2 === 0);
        }

        return filteredProducts;
    };
    0
    const filteredProducts = getFilteredProducts();

    const paginatedData = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <>
            <ReactLenis root>
                <main>
                    <section className='px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64'>
                        <div className='flex md:justify-end py-5 font-quicksand'>
                            <Link to={`/`}>
                                <span className='text-[#646467]'>Home</span>
                            </Link>
                            <span className='ms-1'> / </span>
                            <span className='ms-1'>Shop</span>
                        </div>
                        <div className='flex justify-start my-5 sm:ps-2 md:ps-6 lg:ps-3 xl:ps-2 2xl:ps-8 font-quicksand'>
                            <div className="relative inline-block">
                                <select
                                    value={selectedFilter}
                                    className='md:p-3 p-2 border border-[#6666ff29] focus-visible:outline-none text-sm appearance-none pr-10 min-w-44'
                                    onChange={(e) => {
                                        setSelectedFilter(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                >
                                    <option value="Filter">Default Filter</option>
                                    <option value="Popular">Popular</option>
                                    <option value="Price High To Low">Price High To Low</option>
                                    <option value="Price Low To High">Price Low To High</option>
                                </select>
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className='md:my-5 my-5'>
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                                {paginatedData.map((item) => (
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
                        <div className='py-4'>
                            {
                                filteredProducts.length > itemsPerPage ? (
                                    <>
                                        <div className='w-full flex md:justify-end justify-center'>
                                            <Pagination
                                                totalPages={totalPages}
                                                currentPage={currentPage}
                                                onPageChange={handlePageChange}
                                            />
                                        </div>
                                    </>
                                )
                                    :
                                    ""
                            }
                        </div>
                    </section>
                </main>
            </ReactLenis>
        </>
    );
};

export default Shop;
