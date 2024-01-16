"use client";
import AnnualEvent from '@/app/_components/events/annual-event';
import { useEffect, useState } from 'react';
import Header from "@/app/_components/general/header";

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

        fetchData();
    }, []);

    return (
        <section id="annual-events-page">
            <Header title={`Annual Events`} />
            <div className="main">
              {annualEvents.map((annualEvent) => (
                <AnnualEvent key={annualEvent.id} event={annualEvent} />
            ))}
            </div>
        </section>
    )
}