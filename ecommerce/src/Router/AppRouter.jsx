import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../Layout/DefaultLayout'

//Admin Pages 
import {
    Homepage,
    Shop,
    About,
    Contact,
    ProductDetail,
    ErrorPage,
    Cart
} from '../Pages/index'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path={`*`} element={<ErrorPage />}></Route>
                <Route element={<DefaultLayout />}>
                    <Route path='/' element={<Homepage />}></Route>
                    <Route path='/shop' element={<Shop />}></Route>
                    <Route path='/shop/:slug' element={<ProductDetail />} />
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default AppRouter