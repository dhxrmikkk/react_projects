import React from 'react'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const BreadCrumb = ({ parentPage, currenPage }) => {
    return (
        <>
            <Breadcrumbs className={`bg-transparent p-0 lg:py-2 lg:px-4`}>
                <Link to='/products'>
                    <span className='font-geist text-[14px] text-[#979797] hover:text-black'>{parentPage}</span>
                </Link>
                <div>
                    <span className='font-geist text-[14px] hover:text-black/90 text-black cursor-default'>{currenPage}</span>
                </div>
            </Breadcrumbs>
        </>
    )
}

export default BreadCrumb