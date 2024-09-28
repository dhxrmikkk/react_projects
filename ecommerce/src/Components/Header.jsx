import { Bars2Icon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const { pathname } = useLocation()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto' // Cleanup when component unmounts
        }
    }, [isSidebarOpen])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsSidebarOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <header className={
                pathname === "/"
                    ? "h-[95px] flex items-center lg:px-10 px-4 text-white font-geist border-b border-white/25 bg-transparent"
                    : pathname === "/about"
                        ? "h-[95px] flex items-center lg:px-10 px-4 text-white font-geist border-b border-white/25 bg-transparent"
                        : pathname === "/contact"
                            ? "h-[95px] flex items-center lg:px-10 px-4 text-white font-geist border-b border-white/25 bg-transparent"
                            : 'h-[95px] flex items-center lg:px-10 px-4 text-black font-geist border-b border-black/10 bg-transparent'
            }>
                <nav className='flex justify-between w-full items-center'>
                    <button onClick={toggleSidebar} className="lg:hidden flex">
                        <Bars2Icon className='w-5 h-5 ' />
                    </button>
                    <ul className='lg:flex space-x-8 hidden'>
                        <li className='text-lg'>
                            <Link to={`/`}>
                                <span className={pathname === "/" ? "text-pink-500 text-xl" : " text-xl"}>Home</span>
                            </Link>
                        </li>
                        <li className='text-lg'>
                            <Link to={`/shop`}>
                                <span className={pathname === "/shop" ? "text-pink-500 text-xl" : " text-xl"}>Shop</span>
                            </Link>
                        </li>
                        <li className='text-lg'>
                            <Link to={`/about`}>
                                <span className={pathname === "/about" ? "text-pink-500 text-xl" : " text-xl"}>About</span>
                            </Link>
                        </li>
                        <li className='text-lg'>
                            <Link to={`/contact`}>
                                <span className={pathname === "/contact" ? "text-pink-500 text-xl" : " text-xl"}>Contact</span>
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <span className='capitalize font-normal lg:text-4xl text-3xl lg:me-[10rem]'>Flawless</span>
                    </div>
                    <div className='flex space-x-6 items-center'>
                        <button><UserIcon className='h-6 w-6' /></button>
                        <div className='text-lg hidden lg:flex'>$ 0.00</div>
                        <button className='hidden lg:flex'><ShoppingBagIcon className='h-6 w-6' /></button>
                    </div>
                </nav>
            </header>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full md:w-96 w-80  bg-white/85 text-black z-50 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:hidden'}`}>
                <ul className="flex flex-col space-y-8 p-6 h-screen font-geist">
                    <div className='flex justify-end mb-16 mt-4'>
                        <button onClick={closeSidebar}><XMarkIcon className='w-5 h-5' /></button>
                    </div>
                    <li>
                        <Link to="/" onClick={closeSidebar}><span className={pathname === "/" ? "text-pink-500 capitalize text-2xl" : "capitalize text-2xl"}>Home</span></Link>
                    </li>
                    <li>
                        <Link to="/shop" onClick={closeSidebar}><span className={pathname === "/shop" ? "text-pink-500 capitalize text-2xl" : "capitalize text-2xl"}>Shop</span></Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeSidebar}><span className={pathname === "/about" ? "text-pink-500 capitalize text-2xl" : "capitalize text-2xl"}>About</span></Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeSidebar}><span className={pathname === "/contact" ? "text-pink-500 capitalize text-2xl" : "capitalize text-2xl"}>contact</span></Link>
                    </li>
                    <li>
                        <div className='w-full flex space-x-4 mt-6 items-center'>
                            <button><ShoppingBagIcon className='h-6 w-6 text-lg' /></button>
                            <div className='text-lg'>$ 0.00</div>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Overlay for closing sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40" onClick={closeSidebar}></div>
            )}
        </>
    )
}

export default Header
