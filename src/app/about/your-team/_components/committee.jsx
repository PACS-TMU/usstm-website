"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Committee({ fileName, group }) {
    const blur = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4" +
        "gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAA" +
        "AAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAA" +
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZX" +
        "NjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAA" +
        "BUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAA" +
        "DxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1" +
        "AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA" +
        "9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjA" +
        "AAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxAD" +
        "b/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71" +
        "////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj" +
        "4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCACCAIIDASIAAhEBAxEB/8QAFwAAAwEAAA" +
        "AAAAAAAAAAAAAAAAECA//EABgQAQEBAQEAAAAAAAAAAAAAAAABERIC/8QAFgEBAQEAAAAAAAAAAA" +
        "AAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/ANzh4cjTIioUipEVUVE" +
        "xUAzIIoACiaVUmiJpVVLFEBWFgiQrACuRjTkYiow8VgwCMAUwQAwRgRKAJwsXgwRGFjTBijPA0wAvk" +
        "YvBjKs8LGlibFEA6VAgQAwRgZlFQBgw5DwCwYrDwEYF4AMAIFU1dRQTUVVTVCpFS0FHE6cBcVERcBUV" +
        "CioAACAAAAAAKinai0CrO1VqLVCtLStLVFaqVnqpQaSrjOVcqDSKjOVcoKAlCAAAFpWo6K+gVai0rU2q" +
        "gtRaLU2gLU6VpaorVSs9VKDWVUrKVcqDWVcrGVUoNZT1nKfQNNDPoCsui6ZdDoRpfSb6R0XSoq1NpWla" +
        "AtLRpaIenKjT0GkqpWUqpRWsqp6Yz0qegbdH0x6PoVr0GXQBh0OmejVZrTotRp6grRqdAh6QID0aRCK09" +
        "SNVWkp6z09Faaes9PQXoRoBiABDMAAYCAIAQgAAAChmAKZgCgAA/9k=";

    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (group === "none") {
            const fetchData = async () => {
                try {
                    const response = await fetch(`/data/about/your-team/committees/${fileName}.json`);
                    const data = await response.json();
                    setMembers(data);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                    setLoading(false);
                    console.error('Error fetching committee data: ', error);
                }
            };

            fetchData();
        } else {
            setMembers(group);
            setLoading(false);
        }
    }, [fileName, group]);

    if (loading) return <div className="loading">Loading...</div>
    if (error) return <div className="error">Error: {error.message}</div>

    return (
        <div className="grid gap-5 grid-cols-1 mx-12 lg:mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-4 items-center justify-center">
            {members.map((item, index) => (
                <div key={index} className="w-full h-full flex flex-col">
                    <Image
                        src={`/images/about/your-team/committees/${fileName}/${item.image}`}
                        alt={item.name}
                        width={1200}
                        height={800}
                        loading='lazy'
                        placeholder="blur"
                        blurDataURL={blur}
                        className="w-full h-auto aspect-square object-cover object-top shadow-md rounded-full rotate-0"
                    />
                    <div>
                        {item.name}
                    </div>
                    <div>
                        {item.position}
                    </div>
                </div>
            ))}
        </div>

    )
}