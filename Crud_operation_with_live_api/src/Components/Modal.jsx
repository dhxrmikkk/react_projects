import React from 'react';
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import Loader from './Loader'
const Modal = ({
    open,
    handleOpen,
    title,
    content,
    setTitle,
    setContent,
    className,
    handleSubmit,
    modalType,
    headerText,
    submitButtonText,
    operationLoading
}) => {
    return (
        <Dialog open={open} handler={handleOpen} className={className}>
            <DialogHeader>{headerText || 'Add Post'}</DialogHeader>
            <hr />
            <DialogBody>
                {modalType === 'delete' ? (
                    <div className='w-full text-center'>
                        <span className='text-lg'>Are you sure you want to delete this post?</span>
                    </div>
                ) : (
                    <>
                        <input
                            type="text"
                            className='p-3 w-full rounded-md border border-[#e1e1e1] placeholder:text-[#979797] mb-4'
                            placeholder='Enter post title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            className='p-3 w-full rounded-md border border-[#e1e1e1] placeholder:text-[#979797]'
                            placeholder='Enter post content'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}

                        />
                    </>
                )}
            </DialogBody>
            <DialogFooter className='flex justify-center'>
                <button
                    className={
                        modalType === 'add' ? "py-2 px-5 bg-[#383336] text-white rounded-md font-semibold me-4 w-28 min-w-28 text-center" :
                            modalType === 'delete' ? "py-2 px-5 bg-red-300 text-white rounded-md font-semibold me-4 w-28 min-w-28 text-center" :
                                modalType === 'edit' ? "py-2 px-5 bg-green-300 text-white rounded-md font-semibold me-4 w-28 min-w-28 text-center" :
                                    "py-2 px-5 bg-[#383336] text-white rounded-md font-semibold me-4"
                    }
                    onClick={handleSubmit}
                    disabled={operationLoading}
                >
                    {operationLoading
                        ?
                        <Loader
                            visible={true}
                            height="25"
                            width="25"
                            color="#fff"
                            secondaryColor="transparent"
                            ariaLabel="oval-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            className={`flex justify-center items-center`}
                        />
                        :
                        submitButtonText || 'Add Post'}
                </button>

                <button
                    className='py-2 px-5 bg-gray-600 text-white rounded-md font-semibold  w-28 min-w-28 text-center'
                    onClick={handleOpen}
                >
                    Cancel
                </button>
            </DialogFooter>
        </Dialog>
    );
};

export default Modal;