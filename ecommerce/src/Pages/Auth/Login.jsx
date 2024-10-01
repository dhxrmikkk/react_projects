import React, { useState } from 'react'
import { ReactLenis } from 'lenis/react'
import { LADY_IMG2 } from '../../assets/index'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')
    const handleFormData = (e) => {
        e.preventDefault()
        setEmail(email)
        setPassowrd(password)
        console.log(email, password);

    }
    return (
        <>
            <ReactLenis root>
                <main className='py-[7.5rem]'>
                    <section className='px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64'>
                        <div className='w-full flex items-center space-x-8'>
                            <div className='w-1/2 min-h-full'>
                                <img src={LADY_IMG2} alt="" className='min-w-full min-h-full' />
                            </div>
                            <div className='w-1/2'>
                                <form action="" className='my-10 font-quicksand' onSubmit={handleFormData}>
                                    <div className='flex flex-col space-y-2 mb-4'>
                                        <label htmlFor="email" className='font-quicksand text-[#646467] tracking-wider font-semibold'>Email <span className='text-red-500 text-lg'>*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className='p-2 md:p-4 bg-white border border-[#dddddd] focus:outline-none focus:border-dotted focus:border-[#dddddd]'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoComplete='off'
                                            required

                                        />
                                    </div>
                                    <div className='flex flex-col space-y-2 mb-4'>
                                        <label htmlFor="password" className='font-quicksand text-[#646467] tracking-wider font-semibold'>Password <span className='text-red-500 text-lg'>*</span></label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className='p-2 md:p-4 bg-white border border-[#dddddd] focus:outline-none focus:border-dotted focus:border-[#dddddd]'
                                            value={password}
                                            onChange={(e) => setPassowrd(e.target.value)}
                                            autoComplete='off'
                                            required

                                        />
                                    </div>
                                    <div>
                                        <button
                                            type='submit'
                                            className='uppercase lg:py-3.5 py-2.5 px-6 border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white transition-colors duration-300 ease-in-out'>Log In</button>
                                    </div>
                                    <div>
                                        Don't have an account ?
                                    </div>
                                </form>
                            </div>

                        </div>
                    </section>
                </main>

            </ReactLenis>
        </>
    )
}

export default Login