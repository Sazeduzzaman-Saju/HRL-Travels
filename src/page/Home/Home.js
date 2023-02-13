import React, { useEffect, useState } from 'react';
import UseWebTitle from '../../hooks/UseWebTitle/UseWebTitle';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Booking from './Booking/Booking';
import Brand from './Brand/Brand';
import Gallery from './Gallery/Gallery';
import GlobGallery from './GlobGallery/GlobGallery';
import Promotion from './Promotion/Promotion';


const Home = () => {
    UseWebTitle('HRL Travels Home Page')

    return (
        <div className=''>
            <Banner></Banner>
            <Booking></Booking>
            <Gallery></Gallery>
            <Promotion></Promotion>
            <Blog></Blog>
            <GlobGallery></GlobGallery>
            <Brand></Brand>
        </div>
    );
};

export default Home;