import box1 from '../../assets/box.png'
import box2 from '../../assets/box2.png'
import coin from '../../assets/coin.png'
import cuate from '../../assets/caute.png'

import { Link } from 'react-router-dom'


export const Dashboard = () => {

    return (
        <>
            <div className='md:flex lg:flex-col xl:flex-row justify-between gap-10 xl:gap-16 space-y-6 md:space-y-0'>
                <div className='w-full md:w-2/3 lg:w-full xl:w-2/3 bg-yellow-50 rounded-3xl shadow-xl shadow-slate-100 lg:h-44 py-6'>
                    <div className='md:px-8 flex items-center gap-6 px-5'>
                        <div><img src={box1} alt="" className='md:w-48' /></div>
                        <div className='lg:flex items-center'>
                            <div className='space-y-2.5'>
                                <h2 className='md:text-lg lg:text-2xl xl:text-3xl lg:font-medium font-semibold'>Create Group</h2>
                                <p className='text-sm lg:text-base'>Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet</p>
                            </div>
                            <div className='mx-0 lg:mx-8 mt-6'>
                                <Link to="#" className='bg-teal-800 text-sm text-white px-7 py-3 rounded-full hover:bg-white hover:text-teal-800 border-2 border-teal-800'>Create</Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full md:w-1/3 lg:w-full xl:w-1/3 bg-yellow-200 rounded-3xl shadow-xl shadow-yellow-100 lg:h-44 py-6'>
                    <div className='items-center gap-10 px-8 flex justify-between'>
                        <div className='space-y-2.5'>
                            <h2 className='text-3xl'>₦ 0</h2>
                            <p className='text-base font-medium'>TOTAL BALANCE</p>
                        </div>

                        <div><img src={coin} alt="" className='w-32 md:w-36' /></div>
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <div className='md:flex lg:flex-col xl:flex-row justify-between gap-10 lg:gap-16 space-y-6 md:space-y-0 mt-16'>
                <div className='w-full md:w-2/3 lg:w-full xl:w-2/3 space-y-12 '>
                    <div>
                        <h3 className='mb-6 font-medium text-slate-700'>OVERVIEW</h3>
                        <div className='bg-white shadow-xl shadow-slate-200 rounded-3xl p-8 md:px-3 xl:p-14'>
                            <div className='flex xl:gap-10'>
                                <div className='w-1/2 border-r'>
                                    <div className='flex flex-col md:flex-row text-center items-center gap-5 px-4'>
                                        <div className='bg-teal-100 rounded-full p-5 text-teal-800'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className='text-lg md:text-2xl'>0</h2>
                                            <p className='text-sm lg:text-base text-slate-700 font-medium'>COMPLETED STASHES</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <div className='flex flex-col md:flex-row text-center items-center gap-5 px-4'>
                                        <div className='bg-yellow-100 rounded-full p-5 text-red-800'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                                            </svg>

                                        </div>
                                        <div>
                                            <h2 className='text-lg md:text-2xl'>0</h2>
                                            <p className='text-sm lg:text-base text-slate-700 font-medium'>PENDING STASHES</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h3 className='mb-6 font-medium text-slate-700'>EXPLORE EVENTS</h3>
                        <div className='bg-white shadow-xl shadow-slate-200 rounded-3xl py-10 md:py-16'>
                            <div className='px-8 flex items-center gap-6 md:gap-10 '>
                                <div><img src={box2} alt="" className='w-40' /></div>
                                <div className='flex flex-col lg:flex-row lg:items-center  lg:space-y-0 gap-6 lg:gap-10'>
                                    <div className=''>
                                        <h2 className='font-semibold text-lg mb-2 md:mb-0'>No available events</h2>
                                        <p className='text-sm lg:text-base'>There is no available events right now.</p>
                                        <p className='text-sm lg:text-base'>Take the lead. Create an event.</p>
                                    </div>
                                    <div className='lg:mx-8'>
                                        <Link to="#" className='bg-teal-800 text-sm text-white px-7 rounded-full py-3 hover:bg-white hover:text-teal-800 border-2 border-teal-800'>Create</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full md:w-1/3 lg:w-full xl:w-1/3 '>
                    <div className='flex justify-between mb-6'>
                        <p className='text-slate-700 font-medium'>YOUR GROUPS</p>
                        <p className='text-slate-700 font-medium break-words'>See All</p>
                    </div>

                    <div className='bg-white shadow-xl shadow-slate-200 rounded-3xl'>
                        <div className='px-8 py-28 text-center gap-10'>
                            <div><img src={cuate} alt="" className='w-40 mx-auto mb-6' /></div>
                            <div className=''>
                                <h2 className='font-semibold text-lg'>No events yet</h2>
                                <p className='text-sm lg:text-base'>There is no available events right now.</p>
                                <p className='text-sm lg:text-base'>Take the lead. Create an event.</p>
                            </div>
                            <div className='mt-8'>
                                <Link to="#" className='bg-teal-800 text-white text-sm px-7 rounded-full py-3 hover:bg-white hover:text-teal-800 border-2 border-teal-800'>Explore</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}