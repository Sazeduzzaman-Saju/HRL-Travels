import React from 'react';
import BrandCarousel from '../../../comps/BrandCarousel/BrandCarousel';
import './Brand.css'

const Brand = () => {
    return (
        <div className='max-w-7xl mx-auto mt-20 mb-20'>
            <h1 className='p-5 text-center text-4xl booking_title border-b-2 w-80 mx-auto capitalize font-bold pb-10'>Our partners</h1>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
            <div className=''>
                <div className=" subscribe_area w-1/2 mx-auto rounded-lg mt-16 dark:bg-gray-500 main_shadow">
                    <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10 bg-[#ffffffb5]">
                        <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">Get Our Updates</h1>
                        <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
                        <div className="flex flex-row">
                            <input type="text" placeholder="example@email.com" className="w-3/5 p-3 text-black text-[20px] bg-transparent sm:w-2/3" />
                            <button type="button" className="button-89">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Brand;