import React, { useState } from 'react'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import { Input, Option, Radio, Select, Textarea } from '@material-tailwind/react'
import { FolderOpenIcon } from '@heroicons/react/24/outline'

const AddProduct = () => {
    const [isTrackInventory, setIsTrackInventory] = useState(true)

    // Form data state
    const [productTitle, setProductTitle] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productType, setProductType] = useState('')
    const [productCategory, setProductCategory] = useState('')

    const showStock = () => {
        setIsTrackInventory(true);
    };

    const hideStock = () => {
        setIsTrackInventory(false);
    };

    const newProductData = (e) => {

        e.preventDefault()
        console.log(productTitle, productPrice, productDescription, productType, productCategory);
    }

    return (
        <>
            <section>
                <div className='w-full flex lg:justify-end mb-5'>
                    <BreadCrumb
                        parentPage={`Products`}
                        currenPage={`Add Product`}
                    />
                </div>
                <form action="" onSubmit={newProductData}>
                    {/* ================ Summary section ================ */}
                    <div className='w-full flex flex-col xl:flex-row font-geist mb-4'>
                        <div className='w-full xl:w-1/3 mb-6 xl:mb-0'>
                            <div className='flex flex-col space-y-2'>
                                <h1 className='text-xl font-semibold'>Summary</h1>
                                <span className='text-black/80 text-sm'>Add your product description and necessary information from here</span>
                            </div>
                        </div>
                        <div className='w-full xl:w-2/3'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                                <Input
                                    label='Product Title'
                                    value={productTitle}
                                    onChange={(e) => setProductTitle(e.target.value)}
                                />
                                <Input
                                    type='number'
                                    label='Product Price (₹)'
                                    value={productPrice}
                                    onChange={(e) => setProductPrice(e.target.value)}
                                    placeholder='10000'
                                />
                                <Select
                                    label="Product Type"
                                    value={productType}
                                    onChange={(value) => setProductType(value)}
                                >
                                    <Option value="physical">Physical Product</Option>
                                    <Option value="digital">Digital Product</Option>
                                </Select>
                                <Select
                                    label="Product Category"
                                    value={productCategory}
                                    onChange={(value) => setProductCategory(value)}
                                >
                                    <Option value="men-accessories">Men's Accessories</Option>
                                    <Option value="women-accessories">Women's Accessories</Option>
                                    <Option value="electronics">Electronics</Option>
                                </Select>
                            </div>
                            <div className='w-full'>
                                <Textarea
                                    label="Description"
                                    value={productDescription}
                                    onChange={(e) => setProductDescription(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <hr className='border-dashed border-[#b0bec5] mb-4' />

                    {/* ================ Product image section ================ */}
                    <div className='w-full flex flex-col xl:flex-row font-geist my-10'>
                        <div className='w-full xl:w-1/3 mb-6 xl:mb-0'>
                            <div className='flex flex-col space-y-2'>
                                <h1 className='text-xl font-semibold'>Upload Product Images</h1>
                                <span className='text-black/80 text-sm'>Upload your product image gallery here</span>
                            </div>
                        </div>
                        <div className='w-full xl:w-2/3'>
                            <div className='border border-dashed border-[#b0bec5] rounded-lg'>
                                <input type="file" name="file" id="file" className="inputfile hidden" />
                                <label htmlFor="file" className='w-screen'>
                                    <div className='w-full cursor-pointer'>
                                        <div className='flex flex-col p-6 items-center justify-center h-40 xl:h-52 sapce-y-4'>
                                            <FolderOpenIcon className='w-8 h-8 text-[#aaaaaa]' />
                                            <span className='text-[#aaaaaa] text-sm'>upload media here</span>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr className='border-dashed border-[#b0bec5] mb-4' />

                    {/* ================ Inventory section ================ */}
                    <div className='w-full flex flex-col xl:flex-row font-geist mt-10'>
                        <div className='w-full xl:w-1/3 mb-6 xl:mb-0'>
                            <div className='flex flex-col space-y-2'>
                                <h1 className='text-xl font-semibold'>Inventory Tracking</h1>
                                <span className='text-black/80 text-sm'>Add your product inventory info here</span>
                            </div>
                        </div>
                        <div className='w-full xl:w-2/3'>
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col">
                                    <Radio
                                        name="type"
                                        label="Track inventory for this product"
                                        defaultChecked={isTrackInventory}
                                        onClick={showStock}
                                    />
                                    <Radio
                                        name="type"
                                        label="Don't track inventory for this product"
                                        defaultChecked={!isTrackInventory}
                                        onClick={hideStock}
                                    />
                                </div>
                                <div>
                                    {isTrackInventory && (
                                        <div className="grid gap-y-2">
                                            <Input
                                                type='number'
                                                label='Current Stock'
                                                placeholder='100'
                                            />
                                            <Input
                                                type='number'
                                                label='Low Stock'
                                                placeholder='10'
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex lg:justify-end my-4'>
                        <button
                            type='submit'
                            className="bg-black py-2 px-4 mb-5 text-white rounded-lg">
                            <span className='font-geist text-[14px] font-normal'>Add Product</span>
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddProduct
