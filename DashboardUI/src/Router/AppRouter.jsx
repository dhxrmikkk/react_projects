import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

//Default Layout
import DefaultLayout from '../Components/Common/DefaultLayout'

//Admin Pages 
import {
    Dashboard,
    Settings,
    Products,
    AddProduct,
    EditProduct,
    Notification,
    Users,
    Login,
    Register
} from '../Pages/index'


const AppRouter = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<DefaultLayout />}>
                    <Route index path="/dashboard" element={<Dashboard />} />
                    <Route path="/setting" element={<Settings />} />

                    {/* products pages  */}
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/addproduct" element={<AddProduct />} />
                    <Route path="/products/editproduct" element={<EditProduct />} />

                    {/* user pages   */}
                    <Route path="/users" element={<Users />} />
                    <Route path="/notification" element={<Notification />} />
                </Route>
            </Routes>

        </>
    )
}

export default AppRouter