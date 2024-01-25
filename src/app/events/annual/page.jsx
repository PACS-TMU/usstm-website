"use client";
import AnnualEvent from '@/app/_components/events/annual-event';
import {useEffect, useState} from 'react';
import Header from "@/app/_components/general/header";
import Image from 'next/image';

export default function Annual() {
    const [annualEvents, setAnnualEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/annual-events.json');
                const data = await response.json();
                setAnnualEvents(data);
            } catch (error) {
                console.error('Mo is too fat to fetch data:', error);
            }
        };
        fetchData()
    }, []);

    return (
        <section id="annual-events-page">
            <Header title={`Annual Events`}/>
            <div className="main">
                {annualEvents.map((annualEvent) => (
                    <div key={annualEvent.id}
                         className={`flex ${annualEvent.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                        <Image src={'/images/about/your-team/usstm-people.png'} alt="USSTM People" width={500}
                               height={500} className="w-1/2"/>
                        <AnnualEvent event={annualEvent} className="w-1/2"/>
                    </div>
                ))}
            </div>
        </section>
    )
}