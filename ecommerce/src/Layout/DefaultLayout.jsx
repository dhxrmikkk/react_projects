import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Components/Header'
import HomeHeroSection from '../Components/HomeHeroSection'
import AboutHeroSection from '../Components/AboutHeroSection'
import ContactHeroSection from '../Components/ContactHeroSection'

const DefaultLayout = () => {
    const { pathname } = useLocation()
    return (
        <>
            <main>
                <div className=
                    {
                        pathname === "/"
                            ? "bg-[url(./assets/images/background.webp)] bg-cover bg-center md:bg-top"
                            : pathname === "/about"
                                ?
                                "bg-[url(./assets/images/background2.webp)] bg-cover bg-center md:bg-top"
                                :
                                pathname === "/contact"
                                    ?
                                    "bg-[url(./assets/images/background3.webp)] bg-cover bg-center md:bg-top"
                                    :
                                    "bg-white"
                    }
                >
                    <Header />
                    <div className='px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 '>
                        {
                            pathname === "/"
                                ?
                                <HomeHeroSection />
                                :
                                pathname === "/about"
                                    ?
                                    <AboutHeroSection />
                                    :
                                    pathname === "/contact"
                                        ?
                                        <ContactHeroSection />
                                        :
                                        ""
                        }
                    </div>
                </div>
                <div className='px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 '>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default DefaultLayout