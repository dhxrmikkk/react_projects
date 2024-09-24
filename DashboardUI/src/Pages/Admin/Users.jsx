import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { EllipsisVerticalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    CardBody,
    Chip,
    Avatar,
    Tooltip,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import Pagination from '../../Components/Pagination/Pagination';
import Model from '../../Components/Model/Model';

const table_heading = ["Name", "Email", "Phone", "City", "Status", "Actions"];
const itemsPerPage = 5;

const initialData = [
    {
        id: 1,
        profilepic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        name: "John Jacobs",
        email: "john@icloud.com",
        phone: "+91 98989 89898",
        city: "Rajkot",
        isActive: true,
    },
    {
        id: 2,
        profilepic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
        name: "Keefe Benjamin",
        email: "aptent.taciti.sociosqu@icloud.com",
        phone: "+91 72254 52217",
        city: "Jodiya",
        isActive: false,
    },
    {
        id: 3,
        profilepic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
        name: "Sawyer Stafford",
        email: "dapibus.quam.quis@yahoo.com",
        phone: "+91 83797 78942",
        city: "Shreenath Gadh",
        isActive: false,
    },
    {
        id: 4,
        profilepic: "https://docs.material-tailwind.com/img/face-2.jpg",
        name: "Ulric Morton",
        email: "hendrerit.id.ante@google.com",
        phone: "+91 76646 54572",
        city: "Amreli",
        isActive: true,
    },
    {
        id: 5,
        profilepic: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
        name: "Adrian Buchanan",
        email: "et.ultrices@hotmail.org",
        phone: "+91 83797 78942",
        city: "Rajkot",
        isActive: true,
    },
    {
        id: 6,
        profilepic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        name: "Gage Pratt",
        email: "faucibus.ut.nulla@google.com",
        phone: "+91 95823 26829",
        city: "Jodiya",
        isActive: true,
    },
    {
        id: 7,
        profilepic: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
        name: "Caryn Murray",
        email: "neque.tellus.imperdiet@yahoo.com",
        phone: "+91 84466 74436",
        city: "Ahmedabad",
        isActive: true,
    },
    {
        id: 8,
        profilepic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
        name: "Kay Estes",
        email: "ut@icloud.com",
        phone: "+91 92873 28377",
        city: "Surendranagar",
        isActive: false,
    },
    {
        id: 9,
        profilepic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
        name: "Gisela Pickett",
        email: "sagittis.lobortis@google.com",
        phone: "+91 72277 18947",
        city: "Wakaner",
        isActive: true,
    },
    {
        id: 10,
        profilepic: "https://docs.material-tailwind.com/img/face-2.jpg",
        name: "Kaitlin Owens",
        email: "mauris.aliquam@yahoo.com",
        phone: "+91 68967 74225",
        city: "Navagam",
        isActive: false,
    },
];

const Users = () => {
    const [data, setData] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handlePageChange = (page) => setCurrentPage(page);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginatedData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleOpenModal = (user) => {
        setUserToDelete(user);
        setOpen(true);
    };

    const deleteUser = (id) => {
        setIsLoading(true);
        setTimeout(() => {
            setData((prevData) => prevData.filter(user => user.id !== id));
            setIsLoading(false);
            setOpen(false);
            toast.success("User deleted successfully !", {
                style: {
                    background: '#000000',
                    color: '#fff',
                }
            });
        }, 1000);
    };

    return (
        <>
            <Card className="w-full shadow-none border border-[#ededed]">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <Typography variant="h5" color="black">
                            <span className='font-geist text-xl'>Users List</span>
                        </Typography>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <form className="w-full md:w-72">
                            <Input
                                label="Search Users"
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
                                                <Avatar src={items.profilepic} alt={items.name} size="md" />
                                                <div className="flex flex-col">
                                                    <Typography variant="h6" color="blue-gray" className="font-normal">
                                                        <span className='font-geist'>{items.name}</span>
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}><span className='font-geist'>{items.email}</span></td>
                                        <td className={classes}><span className='font-geist'>{items.phone}</span></td>
                                        <td className={classes}><span className='font-geist'>{items.city}</span></td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={items.isActive ? "Active" : "In Active"}
                                                    color={items.isActive ? "green" : "gray"}
                                                    className={items.isActive ? "bg-black/75 text-white capitalize font-light text-[14px]" : "bg-[#f0f2f4] text-black capitalize font-light text-[14px]"}
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Options">
                                                <Menu>
                                                    <MenuHandler>
                                                        <button className='p-2' onClick={() => handleOpenModal(items)}>
                                                            <EllipsisVerticalIcon className="h-5 w-5 text-black" />
                                                        </button>
                                                    </MenuHandler>
                                                    <MenuList>
                                                        <MenuItem>
                                                            <span>{items.isActive ? "Mark as Inactive" : "Mark as Active"}</span>
                                                        </MenuItem>
                                                        <MenuItem onClick={() => handleOpenModal(items)}>
                                                            <span className='text-red-500'>Delete User</span>
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </CardBody>
            </Card>

            {/* Pagination */}
            <div className='py-4'>
                <div className='w-full flex justify-center'>
                    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
                </div>
            </div>

            {/* Modal Component */}
            <Model
                open={open}
                handleOpen={() => setOpen(false)}
                onDeleteConfirm={() => deleteUser(userToDelete?.id)}
                productName={userToDelete?.name}
                isLoading={isLoading}
            />
        </>
    );
};

export default Users;
