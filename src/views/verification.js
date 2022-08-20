import React from 'react';
import Logo from '../assets/logo1.png'
import image1 from '../assets/3.png'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';



export const Verification = () => {

    let navigate = useNavigate();

    const initialValues = {
        code1 : ""
    }

    // const validationSchema = Yup.object().shape({
    //     code1: Yup.number().max(1).required("Please input your phone number"),
    // })


    const submit = () => {
        navigate('/activated')
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
                            <p className='font-medium'>Have an Account?</p>
                            <Link to="/signin" className='border-2 rounded-full px-6 py-3.5 md:w-52 lg:w-auto md:py-5 md:px-12 lg:px-16 font-bold bg-none shadow-xl border-yellow-600 hover:bg-teal-800 hover:border-teal-800 hover:text-white transition-colors'> SIGN IN</Link>
                        </div>
                    </div>
                </div>


                <div className='lg:flex mt-14 md:mt-28 lg:mt-36 gap-20 justify-between items-center'>
                    <div className='lg:w-4/6'>
                        <h1 className='text-5xl md:text-6xl lg:text-6xl text-rose-600 font-bold mb-2'>Verify your Email</h1>
                        <p className=''>Enter the code sent to <span className='font-semibold'>yourname@email.com</span> </p>
                        <Formik initialValues={initialValues} onSubmit={submit}>
                            <Form className='space-y-10 mt-8 lg:mt-16 lg:w-11/12'>
                                <div className='text-center justify-center md:justify-start flex flex-wrap gap-4'>
                                    <Field name="code1" maxLength={1} className="text-3xl shadow-md shadow-slate-200 w-24 text-center  h-16 px-6 border border-slate-100 focus:outline-none" type="text" />
                                    <Field name="code1" maxLength={1} className="text-3xl shadow-md shadow-slate-200 w-24 text-center  h-16 px-6 border border-slate-100 focus:outline-none" type="text" />
                                    <Field name="code1" maxLength={1} className="text-3xl shadow-md shadow-slate-200 w-24 text-center  h-16 px-6 border border-slate-100 focus:outline-none" type="text" />
                                    <Field name="code1" maxLength={1} className="text-3xl shadow-md shadow-slate-200 w-24 text-center  h-16 px-6 border border-slate-100 focus:outline-none" type="text" />
                                    <Field name="code1" maxLength={1} className="text-3xl shadow-md shadow-slate-200 w-24 text-center  h-16 px-6 border border-slate-100 focus:outline-none" type="text" />
                                    <Field name="code1" maxLength={1} className="text-3xl shadow-md shadow-slate-200 w-24 text-center  h-16 px-6 border border-slate-100 focus:outline-none" type="text" />
                                </div>

                                <div className='mt-8 w-full lg:w-3/4 text-slate-500'>
                                    <div className='font-semibold cursor-pointer'>Didn't get the code? <span className='font-bold'>Resend Code</span></div>
                                </div>

                                <button type='submit' className='bg-teal-800 text-white px-28 shadow-lg font-bold py-5 rounded-full w-full lg:w-auto'>VERIFY</button>

                            </Form>
                        </Formik>
                    </div>


                    <div className='mt-14 md:mt-20 lg:mt-0 w-full lg:w-3/6'>
                        <img src={image1} alt="" className='lg:scale-125  mt-12' />
                    </div>
                </div>





            </main>

        </>
    )
}