import React, { useState } from 'react';
import { MagnifyingGlassIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    CardBody,
    Chip,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import Pagination from '../../Components/Pagination/Pagination';
import Model from '../../Components/Model/Model';
const table_heading = ["Product Detail", "Price", "Category", "Stock", "Actions"];
import toast from 'react-hot-toast';


const itemsPerPage = 5;

const initialData = [
    {
        id: 1,
        img: "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/16.webp",
        name: "Versace Perfume",
        price: 8500,
        category: "Men's Acceceroies",
        instock: true,
    },
    {
        id: 2,
        img: "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/1.webp",
        name: "Casio Watch",
        price: 13400,
        category: "Men's Acceceroies",
        instock: false,
    },
    {
        id: 3,
        img: "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/11.webp",
        name: "Lip Stick",
        price: 450,
        category: "Women's Acceceroies",
        instock: false,
    },
    {
        id: 4,
        img: "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/4.webp",
        name: "Ladies Shoes",
        price: 4830,
        category: "Women's Acceceroies",
        instock: true,
    },
    {
        id: 5,
        img: "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/1.webp",
        name: "Casio Watch",
        price: 13400,
        category: "Men's Acceceroies",
        instock: false,
    },
    {
        id: 6,
        img: "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/9.webp",
        name: "IPad",
        price: 44999,
        category: "Electronics",
        instock: true,
    },
    {
        id: 7,
        img: "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/16.webp",
        name: "Versace Perfume",
        price: 8500,
        category: "Men's Acceceroies",
        instock: false,
    },
    {
        id: 8,
        img: "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/11.webp",
        name: "Lip Stick",
        price: 450,
        category: "Women's Acceceroies",
        instock: true,
    },
    {
        id: 9,
        img: "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/4.webp",
        name: "Ladies Shoes",
        price: 4830,
        category: "Women's Acceceroies",
        instock: false,
    },
    {
        id: 10,
        img: "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/11.webp",
        name: "Lip Stick",
        price: 450,
        category: "Women's Acceceroies",
        instock: true,
    },
];


const Products = () => {
    const [data, setData] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginatedData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleOpenModal = (product) => {
        setProductToDelete(product);
        setOpen(true);
    };

    const deleteProduct = () => {
        setIsLoading(true);
        setTimeout(() => {
            if (productToDelete) {
                const updatedData = data.filter(item => item.id !== productToDelete.id);
                setData(updatedData);
                toast.success("Product deleted successfully !", {
                    style: {
                        background: '#000000',
                        color: '#fff',
                    }
                })
            }
            setOpen(false);
        }, 1000);

    };

    return (
        <>
            <Card className=" w-full shadow-none border border-[#ededed]">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <Typography variant="h5" color="black">
                            <span className='font-geist text-xl'>Products List</span>
                        </Typography>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <Link to={`/products/addproduct`}>
                                <button className="bg-black py-2 px-4 text-white rounded-lg">
                                    <span className='font-geist text-[14px] font-normal'>Add Products</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <form className="w-full md:w-72">
                            <Input
                                label="Search Products"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </form>
                    </div>
                </CardHeader>
                <CardBody className="overflow-x-auto table-scrollbar px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {table_heading.map((head) => (
                                    <th key={head} className="bg-[#f0f2f4] p-4">
                                        <Typography className="font-light leading-none text-[16px]">
                                            <span className='text-black font-geist'>{head}</span>
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((items, index) => {
                                const isLast = index === paginatedData.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-[#ededed]";
                                return (
                                    <tr key={items.id}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar src={items.img} alt={items.name} size="md" className='pointer-events-none' />
                                                <div className="flex flex-col">
                                                    <Typography variant="h6" color="blue-gray" className="font-normal">
                                                        <span className='font-geist'>{items.name}</span>
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography variant="h6" color="blue-gray" className="font-normal">
                                                    <span className='font-geist text-end'>{`₹ ${items.price}`}</span>
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography variant="h6" color="blue-gray" className="font-normal">
                                                    <span className='font-geist text-end'>{items.category}</span>
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={items.instock ? "In Stock" : "Out Of Stock"}
                                                    color={items.instock ? "green" : "gray"}
                                                    className={items.instock ? "bg-black/75 text-white capitalize font-light text-[14px]" : "bg-[#f0f2f4] text-black capitalize font-light text-[14px] font-geist"}
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className='flex space-x-3'>
                                                <Tooltip content="Edit" className={`bg-[#f0f2f4] text-black font-geist`}>
                                                    <Link to={`/products/editproduct`}>
                                                        <button className='p-2'>
                                                            <PencilSquareIcon className="h-5 w-5" />
                                                        </button>
                                                    </Link>
                                                </Tooltip>
                                                <Tooltip content="Delete" className={`bg-black text-white font-geist`}>
                                                    <button className='p-2' onClick={() => handleOpenModal(items)}>
                                                        <TrashIcon className="h-5 w-5 text-red-300" />
                                                    </button>
                                                </Tooltip>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
            <div className='py-4'>
                <div className='w-full flex justify-center'>
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
            {/* Modal Component */}
            <Model
                open={open}
                handleOpen={() => setOpen(false)}
                onDeleteConfirm={deleteProduct}
                productName={productToDelete?.name}
                isLoading={isLoading} />
        </>
    )
}

export default Products