import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {

    return (
        <>
            <div className={`h-screen flex items-center justify-center`}>
                {/* <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="#ff4899"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor={`#fff`}

                /> */}
                <InfinitySpin
                    visible={true}
                    width="200"
                    color="#ff4899"
                    ariaLabel="infinity-spin-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor={`#fff`}
                />
            </div>
        </>
    )
}

export default Loader