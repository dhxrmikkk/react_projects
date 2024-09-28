import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <div className='h-screen flex justify-center items-center font-quicksand'>
                <div>
                    <span className='text-pink-500 tracking-widest md:text-2xl text-xl '>ERROR 404 | NOT FOUND</span>
                    <div className='text-center'>
                        <span>back to home ? <Link to={`/`}><span className='hover:text-pink-500'>click here</span></Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage