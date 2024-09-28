import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productData } from '../productData';


const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate();
    const { slug } = useParams();
    const product = productData.find(item => item.slug === slug)

    useEffect(() => {
        if (!product) {
            navigate('*');
        }
    }, [product, navigate]);

    return (
        <>
            <main>
                <section className='bg-[#f8f8ff] px-4 sm:px-8 md:px-8 xl:px-32 2xl:px-64 py-[4rem] font-quicksand'>
                    <div className='p-4 sm:p-8 md:p-16 lg:p-20 flex justify-center bg-white'>
                        {product &&
                            <div className='w-full h-full grid lg:grid-cols-2 gap-5'>
                                <div className='flex justify-center w-full bg-[#F7F6F9] xl:bg-transparent'>
                                    <img src={product.img} alt="" className='max-w-[455px] max-h-[680px] w-full h-full object-cover pointer-events-none' loading="lazy" />
                                </div>
                                <div className='flex items-center w-full h-full'>
                                    <div className='flex flex-col'>
                                        <div>
                                            <span className='capitalize md:text-lg trext-sm tracking-wider font-[500] text-[#646467]'>{product?.category}</span>
                                        </div>
                                        <div className='my-5'>
                                            <h2 className='md:text-4xl text-2xl tracking-wide '>{product?.name}</h2>
                                        </div>
                                        <div className='flex flex-col sm:flex-row sm:items-center'>
                                            <h3 className='font-[500] tracking-wide text-[#646467] md:text-3xl text-xl'>{`$ ${product.price.toFixed(2)}`}</h3>
                                            <span className='md:text-lg text-sm font-normal sm:ms-2'>+ Free Shipping</span>
                                        </div>
                                        <div className='w-full h-[0.5px] bg-black/25 my-8'></div>
                                        <div className='flex flex-col space-y-4'>
                                            <h2 className='uppercase tracking-widest text-[#646467] font-[500]'>Description</h2>
                                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur molestiae nulla inventore magni. Sequi iusto error repellat ipsum aliquid.</h4>

                                            <h4>Repudiandae optio quas eos quasi vero, autem architecto. Quaerat corrupti voluptate veritatis magni quis? Alias quos porro, blanditiis commodi, error recusandae aliquam saepe velit quae perferendis rerum laboriosam dolore deserunt? Exercitationem sit iste adipisci porro inventore? Doloribus dolorem cumque voluptatibus aperiam facere?</h4>

                                            <h4>consectetur adipisicing elit. Nemo ducimus facere harum dolorum libero et? Odio aliquid error nobis. Obcaecati, blanditiis! Harum dignissimos perspiciatis facilis.</h4>
                                        </div>
                                        <div className='my-8 flex flex-col items-center lg:items-start space-y-8'>
                                            <div>
                                                <div className='flex items-center space-x-4 '>
                                                    <button className='text-xl font-quicksand' onClick={() => quantity > 1 ? setQuantity(quantity - 1) : quantity}>-</button>
                                                    <input
                                                        type="text"
                                                        className='p-3.5 max-w-14 bg-white border border-[#6666ff29] text-center text-black disabled:text-black'
                                                        disabled
                                                        value={quantity}
                                                        onChange={(e) => setQuantity(e.target.value)}

                                                    />
                                                    <button className='text-xl font-quicksand' onClick={() => quantity < 10 ? setQuantity(quantity + 1) : quantity}>+</button>
                                                </div>
                                            </div>
                                            <button
                                                type='submit'
                                                className='uppercase lg:py-3.5 py-2.5 px-6 border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white transition-colors duration-300 ease-in-out w-full sm:w-auto'>Add to cart</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                </section>
            </main>
        </>

    );
};

export default ProductDetail;

