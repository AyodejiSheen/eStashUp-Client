import React, { useContext } from 'react';
import { motion, AnimatePresence } from "framer-motion"; //check note.txt for notes on framer motion



export const Alert = () => {



    return (
        <>

            <div className={ "dark" }>
                {
                    alert.showAlert &&
                    <AnimatePresence>  {/*AnimatePresence allows to use the exit attribute*/}
                        <motion.div
                            animate={{ x: [0, -20, -50, -10], scale: 1 }}
                            initial={{ scale: 0 }}
                            transition={{ type: "twin", ease: "easeInOut" }}
                            exit={{ x: -200 }}
                            className={`fixed z-30 w-72 px-6  py-3.5 lg:py-5 rounded-xl right-10  my-auto top-8  dark:text-gray-100 text-base md:font-medium bg-white shadow-md dark:bg-gray-800 dark:border-2 dark:border-purple-600 ${alert.type === "danger" ? "text-red-600" : alert.type === "success" ? "text-green-700" : "text-yellow-600"}`}>
                            <div className='flex'>
                                <p>
                                    {
                                        alert.type === "danger" ?
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg> : alert.type === "success" ?

                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg> :
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                    }
                                </p>

                                <p className='ml-3 text-sm'>{alert.msg}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                }
            </div>

        </>
    )
}