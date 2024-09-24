import React, { useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import Loader from "../Loader/Loader";
const Model = ({
    open,
    handleOpen,
    onDeleteConfirm,
    productName,
    isLoading,
}) => {
    return (
        <Dialog open={open} handler={handleOpen}>
            <DialogBody>
                <div className="font-geist text-xl flex flex-col justify-center py-4 text-black text-center">
                    <span> Are you sure you want to delete</span>{" "}
                    <strong className="ps-1 text-center">{`"${productName}" ?`}</strong>
                </div>
            </DialogBody>
            <div className="flex justify-center pb-4 space-x-3">
                <button
                    className="p-2 bg-white border border-black font-geist py-2 px-6 text-black rounded-lg w-[7rem]"
                    onClick={handleOpen}
                    disabled={isLoading}
                >
                    <span>Cancel</span>
                </button>
                <button
                    className="p-2 bg-black font-geist py-2 px-6 text-white rounded-lg w-[7rem]"
                    onClick={onDeleteConfirm}
                    disabled={isLoading}
                >
                    {isLoading ?
                        <Loader
                            strokeColor={`white`}
                            mode={`buttonLoader`}
                        />
                        :
                        <span>Delete</span>}
                </button>
            </div>
        </Dialog>
    );
};

export default Model;
