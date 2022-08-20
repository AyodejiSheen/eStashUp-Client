import React from 'react';
import Logo from '../assets/logo1.png'
import image1 from '../assets/5.png'
import image2 from '../assets/i1.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';



export const SetPage = () => {


    return (
        <>
            <main className='px-5 md:px-20 lg:px-14 xl:px-20 2xl:px-40 py-10'>
                <div className='md:flex justify-between items-center'>
                    <div className=''>
                        <img src={Logo} alt="" className='w-3/6 md:w-1/2 lg:w-56' />
                    </div>
                    <div className='mt-14 md:mt-0'>
                        <div className='flex md:space-x-5 lg:space-x-10 justify-between lg:justify-start items-center'>
                            <p className='font-medium'>Don't have an Account?</p>
                            <Link to="/signup" className='border-2 rounded-full px-6 py-3.5 md:w-52 lg:w-auto md:py-5 md:px-12 lg:px-16 font-bold bg-none shadow-xl border-yellow-600 hover:bg-teal-800 hover:border-teal-800 hover:text-white transition-colors'> SIGN UP</Link>
                        </div>
                    </div>
                </div>


                <div className='lg:flex mt-14 md:mt-28 lg:mt-36 gap-20 justify-between items-center'>
                    <div className='lg:w-3/6'>
                        <motion.div 
                        animate={{scale:[1, 0.6, 1, 0.8, 1]}}
                        initial={{scale:0}}
                        transition={{ type: "twin", ease: "easeInOut", duration:1}}
                        className='mb-14'><img src={image2} alt="" className='w-28' /></motion.div>
                        <div className='space-y-4'>
                            <h1 className='text-5xl md:text-6xl lg:text-5xl text-rose-600 font-bold mb-2'>You are good to go!</h1>
                            <p className='font-semibold lg:text-lg'>yourname@email.com</p>
                            <p className='md:w-80'>eStashUp  dynamic eco-system offers
                                you a variety of services at your
                                finger tips always.</p>
                        </div>
                        <button className='bg-teal-800 text-white px-8 md:px-28 shadow-lg font-bold py-5 rounded-full w-full lg:w-auto mt-14'>PROCEED TO DASHBAORD</button>
                    </div>


                    <div className='mt-14 md:mt-20 lg:mt-0 w-full lg:w-3/6'>
                        <img src={image1} alt="" className='lg:scale-125  mt-12' />
                    </div>
                </div>





            </main>

        </>
    )
}