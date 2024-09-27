import React from 'react'
import { ReactLenis } from 'lenis/react'
import Loader from '../../Components/Loader'

const Shop = () => {
    return (
        <>
            <ReactLenis root>
                <div className='h-32 flex items-center justify-center'>
                    <Loader />
                </div>
                <span className='text-lg flex justify-center my-5 font-quicksand'>Coming Soon...</span>
            </ReactLenis>
        </>
    )
}

export default Shop