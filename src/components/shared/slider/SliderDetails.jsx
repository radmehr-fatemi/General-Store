import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

//Style
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderDetails.css';



export default function SliderDetails({ images }) {
    return (
        <>
            <Swiper
                className="mySwiper swiper-h"
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                >
                {
                    images.map((image, index) => <SwiperSlide key={index} ><img src={image} alt="product photo" /></SwiperSlide>)
                }

                <SwiperSlide>
                    <Swiper
                        className="mySwiper2 swiper-v"
                        direction={'vertical'}
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >

                    </Swiper>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
