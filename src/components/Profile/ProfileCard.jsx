import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay, Pagination } from 'swiper/modules';

const ProfileCard = ({text1, text2, text3, text4}) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide>
                    <img src="/images/card.png" className="w-full h-full object-cover rounded-lg" alt="Profile Card 1" />
                    <div className="absolute rounded-lg bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent text-center">
                        <p className="text-white text-lg font-semibold">{text1}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/card.png" className="w-full h-full object-cover rounded-lg" alt="Profile Card 1" />
                    <div className="absolute rounded-lg bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent text-center">
                        <p className="text-white text-lg font-semibold">{text2}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/card.png" className="w-full h-full object-cover rounded-lg" alt="Profile Card 1" />
                    <div className="absolute rounded-lg bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent text-center">
                        <p className="text-white text-lg font-semibold">{text3}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/card.png" className="w-full h-full object-cover rounded-lg" alt="Profile Card 1" />
                    <div className="absolute rounded-lg bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent text-center">
                        <p className="text-white text-lg font-semibold">{text4}</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            <style jsx>
                {`
                .swiper-pagination {
                    position: absolute;
                    bottom: 20px; /* Adjust as needed */
                    left: 0;
                    width: 100%;
                    text-align: center;
                    z-index: 10; /* Ensure it is on top of the images */
                }

                .swiper-pagination-bullet {
                    width: 50px; /* Bar width */
                    height: 8px; /* Bar height */
                    margin: 0 5px; /* Spacing between bars */
                    background-color: rgba(255, 255, 255, 0.7); /* Default bar color */
                    border-radius: 4px; /* Optional: round edges for bars */
                    opacity: 0.6; /* Default opacity */
                    transition: opacity 0.3s, transform 0.3s;
                }

                .swiper-pagination-bullet-active {
                    background-color: rgba(255, 255, 255, 1); /* Active bar color */
                    transform: scale(1.2); /* Optional: increase size when active */
                }
                `}
            </style>
        </>
    );
}

export default ProfileCard;
