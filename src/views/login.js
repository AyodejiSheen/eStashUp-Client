import React from 'react';
import Logo from '../assets/logo1.png'
import image1 from '../assets/1.png'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom'



export const Login = () => {


    const initialValues={
        email:'',
        password: ''
    }


    return (
        <>
            <main className='px-5 md:px-20 lg:px-14 xl:px-20 2xl:px-40 py-10'>
                <div className='md:flex justify-between items-center'>
                    <div className=''>
                        <img src={Logo} alt="" className='w-3/6 md:w-1/2 lg:w-56' />
                    </div>
                    <div className='mt-14 md:mt-0'>
                        <div className='flex md:space-x-5 lg:space-x-10 justify-between lg:justify-start items-center'>
                            <p className='font-medium text-lg'>Don't have an Account?</p>
                            <Link to="/signup" className='border-2 rounded-full px-6 py-3.5 md:w-52 lg:w-auto md:py-5 md:px-12 lg:px-16 font-bold bg-none shadow-xl border-yellow-600 hover:bg-teal-800 hover:border-teal-800 hover:text-white transition-colors'> SIGN UP</Link>
                        </div>
                    </div>
                </div>


                <div className='lg:flex mt-14 md:mt-28 lg:mt-36 gap-20 justify-between items-center'>
                    <div className='lg:w-4/6'>
                        <h1 className='text-5xl md:text-6xl lg:text-5xl text-rose-600 font-bold mb-2'>Welcome Back</h1>
                        <p className='text-xl lg:text-lg'>Sign in to continue</p>
                        <Formik initialValues={initialValues}>
                            <Form className='space-y-10 mt-16 lg:w-11/12'>
                                <div>
                                    <Field name="email" className="text-sm shadow-md shadow-slate-200 h-16 px-6 w-full lg:w-3/4 border border-slate-100 focus:outline-none" placeholder="Email Address" type="email" />
                                    <ErrorMessage name="email" component="span" className="text-red-500" />
                                </div>

                                <div>
                                    <Field name="password" className="text-sm shadow-md block shadow-slate-200 h-16 px-6 w-full lg:w-3/4 border border-slate-100 focus:outline-none" placeholder="Password" type="password" />
                                    <ErrorMessage name="password" component="span" className="text-red-500" />
                                    <div className='text-right mt-8 w-full lg:w-3/4'>
                                        <Link to="#" className='font-semibold'>Forgot Password?</Link>
                                    </div>
                                </div>

                                <button className='bg-teal-800 text-white px-28 shadow-lg font-bold py-5 rounded-full w-full lg:w-auto'>SIGN IN</button>

                            </Form>
                        </Formik>
                    </div>


                    <div className='mt-14 md:mt-20 lg:mt-0 w-full lg:w-3/6'>
                        <h4 className='font-semibold text-3xl lg:text-2xl'>It's Good to Have You Back!</h4>
                        <p className='text-yellow-600 lg:text-sm'>Lorem ipsum dolor sit amet consectetur</p>
                        <img src={image1} alt="" className='lg:scale-125 mt-12 lg:mt-20' />
                    </div>
                </div>





            </main>
        </>
    )
}