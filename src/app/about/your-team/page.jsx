'use client';
import Header from "@/app/_components/general/header";
import Carousel from './_components/carousel';
import { useState, useEffect } from 'react';

export default function YourTeam() {

    // Make this fetch from the main json when images are updated
    const [yourTeamData, setYourTeamData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://usstm.ca/data/about/your-team/your-team.json');
                const data = await res.json();
                setYourTeamData(data);
            } catch (error) {
                console.error('Error fetching your-team data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <section id="your-team-page">
            <Header title="Your 2023/24 Team" />
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