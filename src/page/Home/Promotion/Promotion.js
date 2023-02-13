import React from 'react';
import BannerCarousel from '../../../comps/BannerCarousel/BannerCarousel';

const Promotion = () => {
    return (
        <div className='max-w-7xl mx-auto mt-20 mb-20 promotion_area'>
            <h1 className='p-5 text-center text-4xl booking_title border-b-2 w-80 mx-auto capitalize'>Our best promotional tours</h1>
            <div>
                <BannerCarousel></BannerCarousel>
            </div>
        </div>
    );
};

export default Promotion;