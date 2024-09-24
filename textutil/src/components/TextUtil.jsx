import React, { useEffect, useState } from 'react'

const TextUtil = () => {
    const [text, setText] = useState('')

    const convertToUppercase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const convertToLowercase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const clearText = () => {
        setText('')
    }


    const maxLength = 200
    return (
        <>
            <main className='font-geist'>
                <div className='my-5 flex justify-center'>
                    <h1 className='text-3xl'>Text Util</h1>
                </div>
                <div className='flex justify-center h-screen bg-[#fefefe]'>
                    <div>
                        <div className='flex flex-col md:w-[calc(100vw-20rem)] px-6 mb-4'>
                            <div>
                                <textarea
                                    className='p-2 border border-{#979797] rounded-lg w-full'
                                    rows={5}
                                    cols={50}
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    maxLength={maxLength}
                                ></textarea>
                                <span>{text.length} / {maxLength}</span>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='w-full justify-center items-center flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3 px-10 md:px-0'>
                            <button
                                className='p-2 bg-black w-full md:w-[104.83px] text-white rounded-md text-sm hover:bg-black/75 transition-all ease-in-out duration-300' onClick={convertToUppercase}>To Uppercase</button>
                            <button
                                className='p-2 bg-black w-full md:w-[104.83px] text-white rounded-md text-sm hover:bg-black/75 transition-all ease-in-out duration-300' onClick={convertToLowercase}>To Lowercase</button>
                            <button
                                className='p-2 bg-black w-full md:w-[104.83px] text-white rounded-md text-sm hover:bg-black/75 transition-all ease-in-out duration-300' onClick={clearText}>Clear</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default TextUtil