import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";

function GlobGallery() {
    return (
        <div className="w-96 mx-auto ">
        <h2 className="p-5 text-center text-4xl booking_title border-b-2 w-80 mx-auto capitalize mb-16">See Favorite Places</h2>
            <Swiper
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={false}
                modules={[Autoplay, EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://source.unsplash.com/600x600/?sea?1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://source.unsplash.com/600x600/?sea?2" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://source.unsplash.com/600x600/?sea?3" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://source.unsplash.com/600x600/?sea?4" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
export default GlobGallery;