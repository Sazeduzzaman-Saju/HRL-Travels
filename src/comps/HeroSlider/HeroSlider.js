import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import './HeroSlider.css'
// import required modules
import { Autoplay, EffectCards } from "swiper";

export default function HeroSlider() {
    const data = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1577672612072-cf28c7f9782e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
            name: "Alaska"
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
            name: "Bali Island"
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1523952578875-e6bb18b26645?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            name: "California"
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1596625820723-f0f481ff80be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            name: "Sahara"
        },
        {
            id: 5,
            img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80',
            name: "India"
        },
        {
            id: 6,
            img: 'https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
            name: "Scottish "
        },
        {
            id: 7,
            img: 'https://images.unsplash.com/photo-1457459686225-c7db79d4e59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
            name: "Switzerland"
        },
        {
            id: 8,
            img: 'https://images.unsplash.com/flagged/photo-1566028658087-d725a402df80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            name: " Cox's Bazar"
        },
        {
            id: 9,
            img: 'https://images.unsplash.com/photo-1586948298331-a07cd866d3bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            name: "Sain Marting"
        },
        {
            id: 10,
            img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            name: "Tanguar Haowr"
        }
    ]
    return (
        <>
            <Swiper
                initialSlide="3"
                speed={1200}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={"cards"}
                grabCursor={true}
                zoom={true}
                modules={[Autoplay, EffectCards]}
                className="mySwiper"
            >
                {data.map((singleData) => <SwiperSlide key={singleData.id}>
                    <div className="">
                        <div class="box">
                            <img className="" src={singleData.img} alt="" />
                            <div class="box-content">
                                <h3 class="title">{singleData.name}</h3>
                            </div>
                            <ul class="icon">
                                <li><a href="/"><i class="fa fa-search"></i></a></li>
                                <li><a href="/"><i class="fa fa-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>)}

            </Swiper>
        </>
    );
}
