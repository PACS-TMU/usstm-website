"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Other imports
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from "@/app/_components/general/header";

export default function YourTeam() {
    function Carousel({ img1, img2, img3 }) {
        return (
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="w-full h-full text-center text-lg flex justify-center items-center"
            >
                <SwiperSlide>
                    <Image
                        src={`/images/about/your-team/${img1}`}
                        alt="placeholder"
                        width={1500}
                        height={750}
                        priority={true}
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={`/images/about/your-team/${img2}`}
                        alt="placeholder"
                        width={1500}
                        height={750}
                        priority={true}
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={`/images/about/your-team/${img3}`}
                        alt="placeholder"
                        width={1500}
                        height={750}
                        priority={true}
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
            </Swiper>
        );
    }

    const [yourTeamData, setYourTeamData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/your-team-temp.json');
                const data = await res.json();
                setYourTeamData(data);
            } catch (error) {
                console.error('Error fetching past-boards data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <section id="your-team-page">
            <Header title="Your 2023-2024 Team" />
            <div className="main flex flex-col">
                {
                    yourTeamData.map((committee) => (
                        <div key={committee.id} className="flex flex-col space-y-3 w-[90%] self-center max-w-5xl">
                            {/* This div element is to encase all the photos and labels*/}


                            <div className="space-y-5">
                                <p className="font-semibold text-center pt-5 text-xl lg:text-2xl xl:text-3xl text-highlight-dark">
                                    {committee['committee-name']}
                                </p>

                                <Carousel img1={committee['committee-image'][0]} img2={committee['committee-image'][1]} img3={committee['committee-image'][2]} />

                                <p className=" pt-2">
                                    {committee['committee-description']}
                                </p>

                                <a href="/about/your-team/directors">
                                    <button
                                        className="w-full box-border bg-highlight-dark text-background py-3 my-4 hover:text-highlight-dark hover:bg-background hover:border hover:border-highlight-dark hover:ease-in-out duration-300"
                                    >
                                        Meet the Team
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}