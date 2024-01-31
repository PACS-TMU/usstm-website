"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Other imports
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from "@/app/_components/general/header";
import "./your-team.css";

export default function YourTeam() {

    // Make this fetch from the main json when images are updated
    const [yourTeamData, setYourTeamData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/your-team.json');
                const data = await res.json();
                setYourTeamData(data);
            } catch (error) {
                console.error('Error fetching past-boards data:', error);
            }
        }
        fetchData();
    }, []);

    function Carousel({ img1, img2, img3, name }) {
        return (
            <Swiper
                loop={true}
                slidesPerGroupSkip={0}
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full h-full text-center text-lg flex justify-center items-center"
            >
                <SwiperSlide>
                    <Image
                        src={`/images/about/committee/${img1}`}
                        alt={name}
                        width={5184}
                        height={3456}
                        priority={true}
                        className='w-auto h-full max-h-[100vh] block mx-auto object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={`/images/about/committee/${img2}`}
                        alt={name}
                        width={5184}
                        height={3456}
                        priority={true}
                        className='w-auto h-full max-h-[100vh] mx-auto block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={`/images/about/committee/${img3}`}
                        alt={name}
                        width={5184}
                        height={3456}
                        priority={true}
                        className='w-auto h-full max-h-[100vh] mx-auto block object-cover'
                    />
                </SwiperSlide>
            </Swiper>
        );
    }

    return (
        <section id="your-team-page">
            <Header title="Meet the Faces Behind USSTM" />
            <div className="main flex flex-col">
                <p className='lg:text-lg'> Welcome to the heart of USSTM, where a passionate team of individuals works tirelessly to bring the best experiences to our members. Get to know the leaders and contributors who drive our society forward:</p>
                {
                    yourTeamData.map((committee) => (
                        <div key={committee.id} className="flex flex-col space-y-3 w-[90%] self-center max-w-5xl">
                            {/* This div element is to encase all the photos and labels*/}


                            <div className="space-y-5">
                                <p className="font-semibold text-center pt-5 text-xl lg:text-2xl xl:text-3xl text-highlight-dark">
                                    {committee['committee-name']}
                                </p>

                                <Carousel img1={committee['committee-image'][0]} img2={committee['committee-image'][1]} img3={committee['committee-image'][2]} name={committee['committee-name']} />

                                <p className=" pt-2">
                                    {committee['committee-description']}
                                </p>

                                <a href={`/about/your-team/${committee.path}`}>
                                    <button
                                        className="w-full box-border bg-highlight-dark text-background py-3 my-4 rounded-sm font-medium hover:text-highlight-dark hover:bg-background hover:border hover:border-highlight-dark hover:ease-in-out duration-300"
                                    >
                                        Meet the Team
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))
                }
                <p className='text-2xl lg:text-3xl xl:text-4xl py-4'>How We Work Together</p>
                <p className='lg:text-lg'> Our diverse team collaborates to ensure that the needs and aspirations of our members are met. Through open communication and a shared commitment to excellence, we strive to make USSTM a vibrant and inclusive community.

                    Join us on this exciting journey as we continue to innovate, engage, and inspire!
                </p>
            </div>
        </section>
    )
}