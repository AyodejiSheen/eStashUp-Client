import React, { useState } from "react";
import Logo from '../assets/logo2.png'
import dp from '../assets/female.jpg'
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import { Theme } from "../components/theme";



export const Dashnav = () => {


    const [mobileNav, setMobileNav] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const [showProfile, setShowProfile] = useState(false);


    const toggleNav = () => {
        setMobileNav(!mobileNav)
    }


    return (
        <>

            <div>
                <div className="lg:flex flex-wrap justify-between">
                    <div className={`z-20 fixed transform h-screen md:translate-x-0 inset-y-0 left-0 transition duration-300 ease-in-out overflow-y-auto w-80 bg-teal-800 px-12 py-20 text-white space-y-24 ${mobileNav ? "translate-x-0" : "-translate-x-full"}`}>

                        {/* hamburger close icon */}
                        <div onClick={toggleNav} className="md:hidden ml-48">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M4.28 3.22a.75.75 0 00-1.06 1.06L8.94 10l-5.72 5.72a.75.75 0 101.06 1.06L10 11.06l5.72 5.72a.75.75 0 101.06-1.06L11.06 10l5.72-5.72a.75.75 0 00-1.06-1.06L10 8.94 4.28 3.22z" clip-rule="evenodd" />
                            </svg>
                        </div>

                        <img src={Logo} className="hidden md:block close" alt="" />

                        <div>
                            <h5 className="mb-3 px-8">MENU</h5>
                            <div className="space-y-3">

                                <div className="">
                                    <NavLink to="/dashboard" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-teal-800 bg-white w-full rounded py-3 inline-flex space-x-3 items-center px-8" : "bg-none inline-flex space-x-3 py-3 px-8 text-white")} >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg> <span>Home</span>
                                    </NavLink>
                                </div>


                                <div>
                                    <NavLink to="/" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-teal-800 bg-white w-full rounded py-3 inline-flex space-x-3 items-center px-8" : "bg-none inline-flex space-x-3 py-3 px-8 text-white")} >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg> <span>Events</span>
                                    </NavLink>
                                </div>

                                <NavLink to="/" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-teal-800 bg-white w-full rounded py-3 inline-flex space-x-3 items-center px-8" : "bg-none inline-flex space-x-3 py-3 px-8 text-white")} >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg> <span>Community</span>
                                </NavLink>


                                <NavLink to="/" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-teal-800 bg-white w-full rounded py-3 inline-flex space-x-3 items-center px-8" : "bg-none inline-flex space-x-3 py-3 px-8 text-white")} >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg> <span>Messages</span>
                                </NavLink>
                            </div>
                        </div>

                        <div>
                            <h5 className="mb-3 px-8">ACCOUNT</h5>
                            <div className="space-y-3">
                                <NavLink to="#" onClick={toggleNav} className={({ isActive }) => (isActive ? "inline-flex space-x-3 items-center text-teal-800 bg-white w-full rounded px-8 py-3" : "bg-none inline-flex space-x-3 py-3 px-8 text-white")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg> <span>Profile</span>
                                </NavLink>

                                <NavLink to="#" onClick={toggleNav} className={({ isActive }) => (isActive ? "inline-flex space-x-3 items-center text-teal-800 bg-white w-full rounded px-8 py-3" : "bg-none text-white")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg> <span>Log Out</span>
                                </NavLink>
                            </div>
                        </div>

                        <div>
                            <div className="flex space-x-4 items-center">
                                <div><img src={dp} alt="" className="rounded-full w-14 border-2 shadow-xl" /></div>
                                <div>
                                    <p className="text-sm"> Adeyemi Segun</p>
                                    <p className="text-sm">aoluwasegun</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="lg:ml-80 md:flex-1 w-full 2xl:px-36 2xl:py-10">
                        <div className="flex flex-wrap items-center justify-between mx-8 my-6 lg:mr-0">
                            <div>
                                <button onClick={toggleNav} className=" focus:border-2 p-1 mr-5 -ml-1 rounded-lg md:hidden  focus:shadow-outline-purple">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex space-x-8 mr-8">
                                <div>
                                    <Theme />
                                </div>

                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>

                                </div>
                            </div>
                        </div>


                        <div className="">
                            <Outlet />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}