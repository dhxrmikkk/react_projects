import { Avatar, Breadcrumbs, Input } from '@material-tailwind/react'
import React, { useState } from 'react'
import { COVER_IMG } from '../../assets/index'
import { CameraIcon, PencilSquareIcon } from '@heroicons/react/16/solid'

const Settings = () => {
    const initialInfo = {
        firstName: "Dharmik",
        lastName: "Vadgama",
        email: "dharmik@dashboardui.com",
        instagram: "https://www.instagram.com/dharmik_vadgama?igsh=Yzk2MDE1NDcwbGgx&utm_source=qr",
        linkedInUrl: "https://in.linkedin.com/in/dharmik-vadgama-18b427277",
        github: "https://github.com/dhxrmikkk",
    }
    const [firstName, setFirstName] = useState(initialInfo.firstName)
    const [userEmail, setUserEmail] = useState(initialInfo.email)
    const [lastName, setLastName] = useState(initialInfo.lastName)
    const [instaUrl, setInstaUrl] = useState(initialInfo.instagram)
    const [linkedInUrl, setLinkedInUrl] = useState(initialInfo.linkedInUrl)
    const [gitHubUrl, setGitHubUrl] = useState(initialInfo.github)
    const saveUserInfo = (e) => {
        e.preventDefault();
        setFirstName(firstName);
        setLastName(lastName)
        setInstaUrl(instaUrl)
        setLinkedInUrl(linkedInUrl)
        setGitHubUrl(gitHubUrl)

    }
    return (
        <>
            <div className='flex w-full flex-col'>
                <div className='relative w-full'>
                    <div className='w-full rounded-md
                    h-[12rem]
                    min-h-[12rem]
                    sm:min-h-[15rem]
                    md:min-h-[20rem]
                    lg:min-h-[20rem]'>
                        <img
                            src={COVER_IMG}
                            alt=""
                            className='w-full object-cover h-full rounded-md pointer-events-none'
                        />
                        <div className='absolute bottom-6 right-5 p-1.5 bg-white/90 hover:bg-white hover:backdrop-blur-none backdrop-blur-[1px] rounded-full'>
                            <input type="file" name="file" id="file" className="inputfile hidden" />
                            <label htmlFor="file">
                                <PencilSquareIcon className='w-5 h-5 text-[#000] cursor-pointer' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-center my-8 absolute top-[45%] sm:top-[55%] md:top-[60%] lg:top-[58%] xl:top-[57%] transform left-[50%] translate-x-[-50%] rounded-full p-3 bg-white/40 backdrop-blur-[1px]'>
                        <Avatar
                            variant="circular"
                            alt="tania andrew"
                            htmlFor="file"
                            className='
                            min-w-36 min-h-36 max-w-36 max-h-36
                            sm:min-w-36 sm:max-w-36 sm:min-h-36 sm:max-h-36
                            md:min-w-44 md:max-w-44 md:min-h-44 md:max-h-44
                            lg:min-w-48 lg:max-w-48 lg:min-h-48 lg:max-h-48
                            xl:min-h-52 xl:min-w-52 rounded-full pointer-events-none'
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                        <div className='absolute bottom-6 right-5 p-1.5 bg-white/90 hover:bg-white hover:backdrop-blur-none backdrop-blur-[1px] border border-[#d6d6d6] rounded-full'>
                            <input type="file" name="file" id="file" className="inputfile hidden" />
                            <label htmlFor="file">
                                <CameraIcon className='w-6 h-6 text-[#000] cursor-pointer' />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:mt-32 lg:mt-40 mt-28 flex items-center justify-center'>
                <h2 className='text-3xl font-light font-geist'>{`Dharmik Vadgama`}</h2>
            </div>
            <div className='mt-10'>
                <form onSubmit={saveUserInfo}>
                    <div className='w-full flex flex-col xl:flex-row font-geist mb-4'>
                        <div className='w-full xl:w-1/3 mb-6 xl:mb-0'>
                            <div className='flex flex-col space-y-2'>
                                <h1 className='text-xl font-semibold'>Personal Info</h1>
                                <span className='text-black/80 text-sm'>Add your personal info here</span>
                            </div>
                        </div>
                        <div className='w-full xl:w-2/3'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                                <Input
                                    size="lg"
                                    label="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className='text-[16px] font-geist text-black'
                                />
                                <Input
                                    size="lg"
                                    label="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className='text-[16px] font-geist text-black'
                                />
                                <Input
                                    size="lg"
                                    label="Email"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    className='text-[16px] font-geist text-black'
                                />

                            </div>

                        </div>
                    </div>
                    <hr className='border-dashed border-[#b0bec5] mb-4' />
                    <div className='w-full flex flex-col xl:flex-row font-geist my-8'>
                        <div className='w-full xl:w-1/3 mb-6 xl:mb-0'>
                            <div className='flex flex-col space-y-2'>
                                <h1 className='text-xl font-semibold'>Url</h1>
                                <span className='text-black/80 text-sm'>Add your urls here</span>
                            </div>
                        </div>
                        <div className='w-full xl:w-2/3'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                                <Input
                                    size="lg"
                                    label="Instagram"
                                    value={instaUrl}
                                    onChange={(e) => setInstaUrl(e.target.value)}
                                    className='text-[16px] font-geist text-black'
                                />
                                <Input
                                    size="lg"
                                    label="Linked In"
                                    value={linkedInUrl}
                                    onChange={(e) => setLinkedInUrl(e.target.value)}
                                    className='text-[16px] font-geist text-black'
                                />
                                <Input
                                    size="lg"
                                    label="Github"
                                    value={gitHubUrl}
                                    onChange={(e) => setGitHubUrl(e.target.value)}
                                    className='text-[16px] font-geist text-black'
                                />

                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-end pb-4'>
                        <button type='submit' className='p-2 rounded-md bg-black text-white w-28'>Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Settings