import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './BannerCarousel.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, Autoplay, FreeMode, Pagination } from "swiper";



const BannerCarousel = () => {
    const data = [
        {
            id: 1,
            img: "https://source.unsplash.com/600x600/?sea?1",
            title: "Kantua hotel, Thailand",
            rating: "4.8/5 Excellent",
            rating_person: "(1214 reviews)",
            price: "$99.00  ",

        },
        {
            id: 2,
            img: "https://source.unsplash.com/600x600/?sea?2",
            title: "Kantua hotel, Thailand",
            rating: "4.8/5 Excellent",
            rating_person: "(1214 reviews)",
            price: "$99.00  ",

        },
        {
            id: 3,
            img: "https://source.unsplash.com/600x600/?sea?3",
            title: "Kantua hotel, Thailand",
            rating: "4.8/5 Excellent",
            rating_person: "(1214 reviews)",
            price: "$99.00  ",

        },
        {
            id: 4,
            img: "https://source.unsplash.com/600x600/?sea?4",
            title: "Kantua hotel, Thailand",
            rating: "4.8/5 Excellent",
            rating_person: "(1214 reviews)",
            price: "$99.00  ",

        },
        {
            id: 5,
            img: "https://source.unsplash.com/600x600/?sea?5",
            title: "Kantua hotel, Thailand",
            rating: "4.8/5 Excellent",
            rating_person: "(1214 reviews)",
            price: "$99.00  ",

        },
        {
            id: 6,
            img: "https://source.unsplash.com/600x600/?sea?6",
            title: "Kantua hotel, Thailand",
            rating: "4.8/5 Excellent",
            rating_person: "(1214 reviews)",
            price: "$99.00  ",

        },
        {
            id: 7,
            img: "https://source.unsplash.com/600x600/?sea?7",
            title: "Kantua hotel, Thailand",
            rating: "4.8/5 Excellent",
            rating_person: "(1214 reviews)",
            price: "$99.00  ",

        },
    ]
    return (
        <>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                slidesPerView={4}
                spaceBetween={30}
                breakpoints={{
                    // when window width is >= 640px
                    500: {

                        slidesPerView: 1,
                    },
                    600: {

                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {

                        slidesPerView: 4,
                    }
                }}
                modules={[Navigation, Autoplay, FreeMode, Pagination]}
                className="mySwiper mt-20 mb-20"
            >
                {data.map((singleData) => <SwiperSlide key={singleData.id}>
                    <div>
                        <div class="w-full max-w-sm bg-white  rounded-lg shadow mb-5">
                            <a href="/">
                                <img class=" rounded-t-lg" src={singleData.img} alt="product" />
                            </a>
                            <div class="px-5 pb-5">
                                <a href="/">
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{singleData.title}</h5>
                                </a>
                                <div class="flex items-center mt-2.5 mb-5">
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                    {singleData.rating_person.slice(1, 12)}
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-3xl font-bold text-gray-900 dark:text-white">{singleData.price}</span>
                                    <a href="/" class="button-86">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}

export default BannerCarousel;