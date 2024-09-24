import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loader = ({ strokeColor, mode }) => {
    return (
        <>
            {
                mode === "buttonLoader"
                    ?
                    (
                        <div className='flex justify-center'>
                            <RotatingLines
                                visible={true}
                                height="21"
                                width="21"
                                strokeWidth="4"
                                strokeColor={strokeColor}
                                animationDuration="1"
                                ariaLabel="rotating-lines-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        </div>
                    )
                    :
                    (
                        <div className='flex justify-center items-center h-screen'>
                            <RotatingLines
                                visible={true}
                                height="30"
                                width="30"
                                strokeWidth="4"
                                strokeColor={strokeColor}
                                animationDuration="1"
                                ariaLabel="rotating-lines-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        </div>
                    )
            }

        </>
    )
}

export default Loader