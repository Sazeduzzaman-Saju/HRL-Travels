import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"


const Header = () => {
    return (
        <section className='max-w-7xl mx-auto '>
            <nav class="bg-[#ffffff87] px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 ">
                <div class="max-w-7xl mx-auto  flex flex-wrap items-center justify-between">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <img src={logo} class="h-20 mr-3 sm:h-20" alt="brand Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <div class="flex md:order-2">
                        <Link to={'/login'}><button type="button" class="button-89">Login</button></Link>

                        <Link to={'/register'}><button type="button" class="button-89">Register</button></Link>


                        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <Link className='mr-3' to={'/home'}>Home</Link>
                            <Link className='mr-3' to={'/flight'}>Flight</Link>
                            <Link className='mr-3' to={'/tours'}>Tours</Link>
                            <Link className='mr-3' to={'/hotels'}>Hotels</Link>
                            <Link className='mr-3' to={'/about'}>About</Link>
                            <Link className='mr-3' to={'/gallery'}>Gallery</Link>
                            <Link className='mr-3' to={'/contact'}>Contact</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </section >
    );
};

export default Header;

