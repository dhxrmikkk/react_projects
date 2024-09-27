import React from 'react'
import { ReactLenis } from 'lenis/react'
const ContactHeroSection = () => {
    return (
        <>
            <ReactLenis root>
                <main>
                    <section className='flex items-center justify-center font-quicksand lg:h-[42rem] xl:h-[38.5rem]  h-[35rem] w-full'>
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className='lg:text-7xl text-4xl text-white mb-6'>Get in Touch</h2>
                            <span className="w-2/3 text-center md:text-lg text-sm text-white font-semibold mb-10">Enim lectus mauris faucibus turpis convallis ipsum odio lorem dignissim odio enim nullam venenatis erat cursus tortor tristique aliquam nulla.</span>
                            <div className='flex justify-center'>
                                <div className='w-24 h-[0.5px] bg-white'></div>
                            </div>
                        </div>
                    </section>
                </main>
            </ReactLenis>
        </>
    )
}

export default ContactHeroSection