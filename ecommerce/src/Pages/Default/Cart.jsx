// src/components/Cart.js
import React from 'react';
import { ReactLenis } from 'lenis/react';
import { useCartContext } from '../../Context/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';

const Cart = () => {
    const { cart, removeFromCartProduct, updateCartQuantity } = useCartContext();

    const updateQuantity = (id, value) => {
        if (value > 0 && value <= 10) {
            updateCartQuantity(id, value);
        }
    };

    return (
        <ReactLenis root>
            <main>
                <section className="px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 py-[5rem]">
                    <div className="relative overflow-x-auto font-quicksand">
                        {cart.length > 0 ? (
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead className="border-b border-black/15 uppercase tracking-widest">
                                    <tr>
                                        <td scope="col" className="px-6 py-3">Item</td>
                                        <td scope="col" className="px-6 py-3">Price</td>
                                        <td scope="col" className="px-6 py-3">Quantity</td>
                                        <td scope="col" className="px-6 py-3">Total</td>
                                        <td scope="col" className="px-6 py-3">Remove</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id} className="border-b border-black/10">
                                            <td className="px-6 py-4 flex items-center min-w-48">
                                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                                                <span className="ml-4">{item.name}</span>
                                            </td>
                                            <td className="px-6 py-4">{`$${item.price.toFixed(2)}`}</td>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <div className='flex items-center space-x-4'>
                                                        <button className='text-xl font-quicksand' onClick={() => updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)}>-</button>
                                                        <input
                                                            type="text"
                                                            className='p-3.5 max-w-14 bg-white border border-[#6666ff29] text-center text-black disabled:text-black'
                                                            disabled
                                                            value={item.quantity}
                                                        />
                                                        <button className='text-xl font-quicksand' onClick={() => updateQuantity(item.id, item.quantity < 10 ? item.quantity + 1 : 10)}>+</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">{`$${(item.price * item.quantity).toFixed(2)}`}</td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => removeFromCartProduct(item.id)}>
                                                    <TrashIcon className="w-5 h-5 text-red-600 hover:text-red-800" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <h2 className='flex justify-center text-xl uppercase items-center h-96 ps-20'>OOPS ! Cart is Empty</h2>
                        )}
                    </div>
                </section>
            </main>
        </ReactLenis>
    );
};

export default Cart;
