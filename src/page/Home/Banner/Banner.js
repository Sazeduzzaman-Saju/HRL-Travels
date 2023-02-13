import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
import HeroSlider from '../../../comps/HeroSlider/HeroSlider';
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';
import './Banner.css'
// import HeroBannerCarousel from '../../../comps/BannerCarousel/HeroBannerCarousel';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='max-w-7xl mx-auto pt-24'>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-20 items-center'>
                    <div>
                        <div className="flex flex-col justify-center py-12 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-semibold leading-none sm:text-8xl capitalize hero_title">Explore the
                                <span className="text-[#0F298A] font-bold"> world </span>together
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12">Find awesome flights, hotel, tour, car and packages
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start book_btn">
                                <button className='button-86 '>Book Now</button>

                                <button className="flex justify-center items-center ml-2 button-89 offcanvas_button" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
                                    Explore More  <RiArrowRightLine className='ml-5'></RiArrowRightLine>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className='slider_area'>
                        <div className='slider-container'>
                            <HeroSlider></HeroSlider>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;