import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

const BrandCarousel = () => {
    const brand = [
        {
            id: 1,
            brand_img: "https://andtour-vue.netlify.app/img/4.7c486ccb.png"
        },
        {
            id: 2,
            brand_img: "https://andtour-vue.netlify.app/img/5.c88c10d5.png"
        },
        {
            id: 3,
            brand_img: "https://andtour-vue.netlify.app/img/6.50639b22.png"
        },
        {
            id: 4,
            brand_img: "https://andtour-vue.netlify.app/img/7.7c486ccb.png"
        },
        {
            id: 5,
            brand_img: "https://andtour-vue.netlify.app/img/8.1b03af65.png"
        },
        {
            id: 6,
            brand_img: "https://andtour-vue.netlify.app/img/7.7c486ccb.png"
        },
        {
            id: 7,
            brand_img: "https://andtour-vue.netlify.app/img/8.1b03af65.png"
        },
        {
            id: 8,
            brand_img: "https://andtour-vue.netlify.app/img/6.50639b22.png"
        },
        {
            id: 9,
            brand_img: "https://andtour-vue.netlify.app/img/4.7c486ccb.png"
        },
        {
            id: 10,
            brand_img: "https://andtour-vue.netlify.app/img/8.1b03af65.png"
        },
    ]
    return (
        <>
            <Swiper
                slidesPerView={8}
                spaceBetween={10}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper mt-10"
            >
                {brand.map((singleBrand) => <SwiperSlide key={singleBrand.id}>
                    <img src={singleBrand.brand_img} alt="" />
                </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}
export default BrandCarousel;