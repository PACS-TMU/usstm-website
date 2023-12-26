"use client";
import AnnualEvent from '@/app/_components/events/annual-event';
import { useEffect, useState } from 'react';

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
        <section id='AnnualEvents' className='main'>
            <p className='text-center'>Our Annual Events</p>
            {annualEvents.map((annualEvent) => (
                <AnnualEvent key={annualEvent.id} event={annualEvent} />
            ))}
        </section>
    )
}