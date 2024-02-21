'use client';
import { useState, useEffect } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import './carousel.css';

export default function Carousel() {
    const [yearbookData, setYearbookData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/data/events/yearbook-gallery/yearbook-images.json');
            const data = await response.json();
            setYearbookData(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="w-full bg-highlight-blue pt-10 pb-2 flex mt-4 mb-14 items-center justify-center">
            <div className="slider-container main">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerGroupSkip={0}
                    navigation
                    loop={yearbookData.length > 1 ? true : false}
                    centeredSlides={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    breakpoints={
                        {
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }
                    }
                    className="w-full h-auto text-center text-lg flex justify-center items-center"
                >
                    {yearbookData.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image.path}
                                alt={image.title}
                                width={2400}
                                height={1600}
                                priority={true}
                                className="rounded-md w-full h-auto"
                            />

                            <h1 className="text-center pb-10 font-serif font-semibold">{image.title}, {image.year}</h1>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}