import React, { useState } from 'react'
import { SIDEIMG } from '../../assets/index'
import { Button, Input } from '@material-tailwind/react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import Loader from '../../Components/Loader/Loader';


const Login = () => {
    const loginEmail = "admin@dashboardui.com";
    const loginPassword = "admin123";
    const [email, setEmail] = useState(loginEmail)
    const [password, setPassword] = useState(loginPassword)
    //                                      ================ STATE FOR LOADER  ================
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault()
        if (email === '') {
            toast.error("Email is Required !")
        }
        else if (password === '') {
            toast.error("Password is Required !")
        }
        else if (email === "" && password === "") {
            toast.error("Fields can't be empty !")
        }
        else {
            setIsLoading(true);
            console.log(email, password);

            setTimeout(() => {
                if (email === loginEmail && loginPassword === password) {
                    toast.success("Login Successful !", {
                        style: {
                            background: '#000000CC',
                            color: '#fff',
                        }
                    });
                    setEmail('');
                    setPassword('');
                    setIsLoading(false)
                    navigate("/dashboard")
                }
                else {
                    toast.error("Invalid Credentials !");
                    setIsLoading(false)
                }
            }, 1000);
        }
    }
    return (
        <>
            <section className='h-screen p-6 flex w-full font-geist'>
                {/* ================ LEFT SECTION ================ */}

                <div className='md:w-2/3 w-full p-6 flex flex-col justify-center'>
                    {/* ================ HEADING ================ */}

                    <div className='mb-16'>
                        <h2 className="block antialiased tracking-normal text-2xl md:text-4xl leading-[1.3] text-inherit font-bold mb-4">Log In</h2>
                        <h4 className='md:text-lg text-sm'>Enter Your Credentials To Log in.</h4>
                    </div>

                    {/* ================ LOGIN FORM ================ */}

                    <form onSubmit={handleLogin} className='mb-16 max-w-[40rem]'>
                        <div className='w-full mb-6'>
                            <Input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='text-[16px] w-full tracking-wide font-geist'
                                size="lg"
                                label="Enter Email"

                            />
                        </div>
                        <div className='w-full'>
                            <Input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='text-[16px] w-full tracking-wide font-geist'
                                size="lg"
                                label="Enter Password"

                            />
                        </div>
                        <div className='mt-16'>
                            <Button
                                type='submit'
                                className='w-full p-3 tracking-wider text-[14px] font-normal capitalize font-geist bg-black'>
                                {
                                    isLoading
                                        ?
                                        <Loader
                                            strokeColor={`white`}
                                            mode={`buttonLoader`}
                                        />
                                        : <span className='font-geist'>Login</span>
                                }
                            </Button>
                        </div>
                    </form>

                    {/* ================ NAV TO REGISTER ================ */}

                    {/* <div className='flex flex-col md:flex-row items-center'>
                        <div className='text-gray-500 md:me-3'>Don't Have Account ?</div>
                        <Link to='/register' className='cursor-pointer'>Register Here</Link>
                    </div> */}
                </div>

                {/* ================ RIGHT SECTION ================ */}

                <div className='md:w-1/3 hidden md:flex'>
                    <img src={SIDEIMG} alt="Side image" className='rounded-3xl' />
                </div>
            </section>
        </>
    )
}

export default Login