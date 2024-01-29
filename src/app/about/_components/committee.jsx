"use client";
import { useState, useEffect } from "react";
import ImageFallback from "@/app/about/_components/imageFallback";

export default function Committee({ fileName }) {
    const [error, setError] = useState(false);

    const [members, setMembers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/data/committees/${fileName}.json`);
                const data = await response.json();
                setMembers(data);
            } catch (error) {
                console.error('Error fetching governance data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="grid gap-5 grid-cols-1 mx-12 lg:mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-4 items-center justify-center">
            {members.map((item, index) => (
                <div key={index} className="w-full h-full flex flex-col">
                    <ImageFallback 
                        fileName={fileName}
                        imageName={item.image}
                        alt={item.name}
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                    />
                    <div>
                        {item.name}
                    </div>
                    <div>
                        {item.position}
                    </div>
                </div>
            ))
            }
        </div>

    )
}