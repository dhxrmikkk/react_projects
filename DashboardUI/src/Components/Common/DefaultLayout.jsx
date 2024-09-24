import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const DefaultLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        if (isSidebarOpen) {
            setSidebarOpen(false);
        }
    };

    return (
        <>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden z-10"
                    onClick={closeSidebar}
                ></div>
            )}

            <main className="flex h-screen">
                <div className={`fixed md:static z-[100]
                 shadow-xl shadow-blue-gray-900/5 md:shadow-none transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                    <Sidebar closeSidebar={closeSidebar} />
                </div>

                <div className="flex-1 h-screen overflow-y-auto">
                    <Header toggleSidebar={toggleSidebar} />

                    <div className="p-6 bg-[#fefefe] h-[calc(100dvh-72px)]">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    );
};

export default DefaultLayout;
