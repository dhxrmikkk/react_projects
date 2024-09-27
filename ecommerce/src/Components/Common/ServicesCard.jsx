import React from 'react'

const ServicesCard = ({ serviceIcon, serviceName, ServiceDesc }) => {
    return (
        <>
            <div className='flex flex-col space-y-2 items-center justify-center text-center'>
                <div className='bg-white rounded-full mb-5'>
                    <i className={serviceIcon}></i>
                </div>
                <div>
                    <span className='text-2xl font-quicksand'>{serviceName}</span>
                </div>
                <div className='sm:w-96 md:w-[30rem] lg:w-auto'>
                    <span className='text-center font-quicksand '>{ServiceDesc}</span>
                </div>
            </div>
        </>
    )
}

export default ServicesCard