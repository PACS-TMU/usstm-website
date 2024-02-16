'use client';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNext, CustomPrev } from './customarrow';

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
    }

    const settings = {
        className: "center",
        focusOnSelect: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        nextArrow: <CustomNext />,
        prevArrow: <CustomPrev />,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="slider-container my-[3.5rem]">
            <Slider {...settings}>
                {yearbookData.map((image, index) => (
                    <div key={index} className="cursor-pointer">
                        <Image src={image.path} alt={image.title} width={1920} height={1080} className="px-[1.25rem]" />
                        <h1 className="text-center">{image.title}, {image.year}</h1>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
