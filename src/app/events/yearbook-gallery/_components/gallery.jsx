'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Gallery() {
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://usstm.ca/data/events/yearbook-gallery/gallery-images.json');
            const data = await response.json();
            setGalleryData(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 main">
            {galleryData.map((image, index) => (
                <div key={index} className="relative">
                    <Image 
                        overrideSrc={`https://usstm.ca/images/events/yearbook/${image.path}`}
                        alt={image.title} 
                        width={1920} 
                        height={1080} 
                        className="rounded-lg" 
                    />
                    <h1 className="text-center font-serif font-semibold absolute bottom-2 left-2 bg-white bg-opacity-75 px-2 py-1 rounded">
                        {image.title} - {image.year}
                    </h1>
                </div>
            ))}
        </div>
    );
}
