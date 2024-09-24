import React from 'react';
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

    const getItemProps = (index) => ({
        variant: currentPage === index ? "filled" : "text",
        color: "gray",
        onClick: () => onPageChange(index),
    });

    const next = () => {
        if (currentPage === totalPages) return;
        onPageChange(currentPage + 1);
    };

    const prev = () => {
        if (currentPage === 1) return;
        onPageChange(currentPage - 1);
    };

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="text"
                className="flex items-center gap-1"
                onClick={prev}
                disabled={currentPage === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, index) => (
                    <IconButton key={index} {...getItemProps(index + 1)}>
                        <span className='font-geist text-sm'>{index + 1}</span>
                    </IconButton>
                ))}
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={next}
                disabled={currentPage === totalPages}
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default Pagination;
