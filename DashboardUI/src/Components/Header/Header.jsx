import { Bars2Icon, BellAlertIcon, ClockIcon, PowerIcon, UserCircleIcon, UserIcon, UsersIcon } from '@heroicons/react/24/outline';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import {
    Avatar, Badge, Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    IconButton,
    Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
    return (
        <>
            <header className="sticky top-0 py-4 px-6 shadow-md shadow-blue-gray-900/5 z-[99] bg-white h-[72px]">
                <nav className="flex justify-between h-full items-center">
                    <div className="flex items-center space-x-4">

                        <button className="md:hidden" onClick={toggleSidebar}>
                            <Bars2Icon className="w-6 h-6" />
                        </button>
                        <SearchBar
                            label={`Search...`}
                            className={`min-w-72 border border-[#ededed] border-t-[#ededed]`}
                        />
                    </div>

                    <ul className="flex justify-end items-center space-x-4">
                        <Badge content="3" withBorder className='bg-black font-geist'>
                            <Menu>
                                <MenuHandler>
                                    <IconButton variant="text" className='focus-visible:outline-none'>
                                        <BellAlertIcon className='w-5 h-5' />
                                    </IconButton>
                                </MenuHandler>
                                <MenuList className="flex flex-col gap-2 overflow-y-auto h-[15rem] custom-scrollbar">
                                    <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                                        <Avatar
                                            variant="circular"
                                            alt="Alyx Jacobs"
                                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <Typography variant="small" color="black" className="font-geist">
                                                Alyx sent a message
                                            </Typography>
                                            <Typography className="flex items-center gap-1 text-sm font-medium">
                                                <ClockIcon className='w-3 h-3' />
                                                <span className='font-geist'>1 minutes ago</span>
                                            </Typography>
                                        </div>
                                    </MenuItem>
                                    <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                                        <Avatar
                                            variant="circular"
                                            alt="tania andrew"
                                            src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <Typography variant="small" color="black" className=" font-geist">
                                                John sent a message
                                            </Typography>
                                            <Typography className="flex items-center gap-1 text-sm font-medium">
                                                <ClockIcon className='w-3 h-3' />
                                                <span className='font-geist'>13 minutes ago</span>
                                            </Typography>
                                        </div>
                                    </MenuItem>
                                    <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                                        <Avatar
                                            variant="circular"
                                            alt="natali craig"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <Typography variant="small" color="black" className=" font-geist">
                                                Natali replied to your email.
                                            </Typography>
                                            <Typography className="flex items-center gap-1 text-sm font-medium">
                                                <ClockIcon className='w-3 h-3' /><span className='font-geist'>1 day ago</span>
                                            </Typography>
                                        </div>
                                    </MenuItem>

                                </MenuList>
                            </Menu>
                        </Badge>
                        <button>

                            <Menu
                                animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}
                            >
                                <MenuHandler>
                                    <Avatar
                                        variant="circular"
                                        alt="tania andrew"
                                        className="max-w-9 min-w-9 max-h-9 min-h-9"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                </MenuHandler>
                                <MenuList>
                                    <Link to={`/setting`}>
                                        <div className=' hover:bg-[#f0f2f4] rounded-lg'>
                                            <div className='flex space-x-1 items-center p-2'>
                                                <UserCircleIcon className='w-6 h-5 text-black' /><span className='font-geist text-black'>Profile</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to={`/login`}>
                                        <div className=' hover:bg-[#f0f2f4] rounded-lg'>
                                            <div className='flex space-x-1 items-center p-2'>
                                                <PowerIcon className='w-5 h-5 text-red-500' /><span className='text-red-500 font-geist'>Logout</span>
                                            </div>
                                        </div>
                                    </Link>
                                </MenuList>
                            </Menu>
                        </button>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
