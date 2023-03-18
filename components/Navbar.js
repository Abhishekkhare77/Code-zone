import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between shadow py-2 bg-gray-50 dark:bg-slate-900 sticky top-0'>
            <div className='flex'>
                <Link href={'/'}><Image src="/logo.png" alt="logo" width={100} height={100} className='p-2 mx-2 dark:invert' /></Link>
                <form className="hidden md:flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                        </div>
                        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
            </div>
            <ul className='hidden md:flex items-center justify-center mx-2'>
                <li className='px-3 font-bold text-lg- mx-2 hover: text-blue-700 hover:dark:text-blue-700 dark:text-white cursor-pointer'>Categories</li>
                <li className='px-3 font-bold text-lg- mx-2 hover: text-blue-700 hover:dark:text-blue-700  dark:text-white cursor-pointer'>Popular</li>
                <li className='px-3 font-bold text-lg- mx-2 hover: text-blue-700 hover:dark:text-blue-700  dark:text-white cursor-pointer'>Upload</li>
                <Link href={'/login'}><li className='px-3 p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Login</li></Link>
                <Link href={'/signup'}><li className='px-3 p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Signup</li></Link>
            </ul>
            <div className="hamburger md:hidden">
                <div className="line w-5 h-[2px] my-1 mx-3 bg-black dark:bg-white"></div>
                <div className="line w-5 h-[2px] my-1 mx-3 bg-black dark:bg-white"></div>
                <div className="line w-5 h-[2px] my-1 mx-3 bg-black dark:bg-white"></div>
            </div>
        </div>
    )
}

export default Navbar
