import React, { useState } from "react";
import { SIDEBAR_LOGO } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { BellAlertIcon, CogIcon, HomeIcon, ShoppingBagIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ closeSidebar }) => {
    const { pathname } = useLocation();

    return (
        <>
            <Card className="h-screen w-[20rem] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none sticky">
                <Link to={`/dashboard`} onClick={closeSidebar}>
                    <div className="mb-2 flex items-center py-2 px-4">
                        <img src={SIDEBAR_LOGO} alt="brand" className="w-40 h-auto" />
                    </div>
                </Link>
                <List>
                    <Link to={`/dashboard`} onClick={closeSidebar}>
                        <ListItem className={`${pathname.includes('/dashboard') ? "bg-[#f0f2f4]" : "bg-white"}`}>
                            <ListItemPrefix>
                                <HomeIcon className="h-5 w-5 text-black" />
                            </ListItemPrefix>
                            <span className="text-black font-geist">Dashboard</span>
                        </ListItem>
                    </Link>
                    <Link to={`/products`} onClick={closeSidebar}>
                        <ListItem className={`${pathname.includes('/products') ? "bg-[#f0f2f4]" : "bg-white"}`}>
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5 text-black" />
                            </ListItemPrefix>
                            <span className="text-black font-geist">Products</span>
                        </ListItem>
                    </Link>
                    <Link to={`/users`} onClick={closeSidebar}>
                        <ListItem className={`${pathname.includes('/users') ? "bg-[#f0f2f4]" : "bg-white"}`}>
                            <ListItemPrefix>
                                <UsersIcon className="h-5 w-5 text-black" />
                            </ListItemPrefix>
                            <span className="text-black font-geist">Users</span>
                        </ListItem>
                    </Link>
                    <Link to={`/notification`} onClick={closeSidebar}>
                        <ListItem className={`${pathname.includes('/notification') ? "bg-[#f0f2f4]" : "bg-white"}`}>
                            <ListItemPrefix>
                                <BellAlertIcon className="h-5 w-5 text-black" />
                            </ListItemPrefix>
                            <span className="text-black font-geist">Notification</span>
                        </ListItem>
                    </Link>
                    <Link to={`/setting`} onClick={closeSidebar}>
                        <ListItem className={`${pathname.includes('/setting') ? "bg-[#f0f2f4]" : "bg-white"}`}>
                            <ListItemPrefix>
                                <CogIcon className="h-5 w-5 text-black" />
                            </ListItemPrefix>
                            <span className="text-black font-geist">Settings</span>
                        </ListItem>
                    </Link>
                </List>
            </Card>
        </>
    );
};

export default Sidebar;
