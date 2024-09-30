import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const getItemProps = (index) => ({
        className: `px-3 py-1  ${currentPage === index ? 'bg-pink-500 text-white text-lg font-quicksand' : 'text-pink-500 hover:bg-pink-500 hover:text-white text-lg font-quicksand'}`,
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
            <button
                className={`flex items-center gap-1 px-3 py-1 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={prev}
                disabled={currentPage === 1}
            >
                <ChevronLeftIcon strokeWidth={2} className="h-4 w-4 text-pink-500" />
            </button>
            <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, index) => (
                    <button key={index} {...getItemProps(index + 1)}>
                        <span className="font-geist text-sm">{index + 1}</span>
                    </button>
                ))}
            </div>
            <button
                className={`flex items-center gap-1 px-3 py-1 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={next}
                disabled={currentPage === totalPages}
            >
                <ChevronRightIcon strokeWidth={2} className="h-4 w-4 text-pink-500" />
            </button>
        </div>
    );
};

export default Pagination;
