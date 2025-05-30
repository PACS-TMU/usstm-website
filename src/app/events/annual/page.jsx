"use client";
import AnnualEvent from '@/app/events/annual/_components/annual-event';
import { useEffect, useState } from 'react';
import Header from "@/app/_components/general/header";
import Image from 'next/image';
import UnderConstruction from "@/app/_components/general/under-construction";

export default function Annual() {
    const [annualEvents, setAnnualEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/events/annual/annual-events.json`);
                const data = await response.json();
                setAnnualEvents(data);
            } catch (error) {
                console.error('Mo is too fat to fetch data:', error);
            }
        };
        fetchData()
    }, []);

    return (
        <section>
            <UnderConstruction />
        </section>
        // <section id="annual-events-page">
        //     <Header title={`Annual Events`}/>
        //     <div className="main">
        //         {annualEvents.map((annualEvent) => (
        //             <div key={annualEvent.id}
        //                  className={`flex ${annualEvent.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
        //                 <Image src={'https://usstm.ca/images/about/your-team/usstm-people.png'} alt="USSTM People" width={500}
        //                        height={500} className="w-1/2"/>
        //                 <AnnualEvent event={annualEvent} className="w-1/2"/>
        //             </div>
        //         ))}
        //     </div>
        // </section>

    )
}