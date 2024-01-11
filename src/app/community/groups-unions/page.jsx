"use client";
import Header from "@/app/_components/general/header";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GroupsUnions() {
    const [sgcuData, setSgcuData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/sgcu-db.json');
                const data = await res.json();
                setSgcuData(data);
            } catch (error) {
                console.error('Error fetching past-boards data:', error);
            }
        }
        fetchData();
    }, []);

    const [copiedEmail, setCopiedEmail] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const studentGroups = sgcuData.filter(group => group.type === 'SG');
    const courseUnions = sgcuData.filter(group => group.type === 'CU');
    const combinedGroups = [...studentGroups, ...courseUnions];

    const copyToClipboard = (email) => {
        navigator.clipboard.writeText(email);
        setCopiedEmail(email);

        setTimeout(() => {
            setCopiedEmail(null);
        }, 2000);
    };

    const redirectToInstagram = (instagramUrl) => {
        window.open(instagramUrl, '_blank');
    };

    

    return (
<<<<<<< HEAD
        <div className='main p-4'>
            <h1 className="text-5xl font-semibold pb-4 leading-relaxed" style={{ textAlign: 'center' }}>Groups And Unions</h1>
            <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-4 items-center justify-center' style={{ display: 'grid', gap: '20px' }}>
                {combinedGroups.map((group, index) => (
                    <div
                        key={index}
                        style={{ textAlign: 'center', padding: '10px', display: 'grid', gridTemplateRows: '50% 50%' }}
                        className='flex flex-col aspect-square items-center justify-center bg-gray-100 shadow-md rounded-md'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            src={`/images/sg-logos/${group['group-logo']}`}
                            alt={group['group-name']}
                            width={100}
                            height={100}
                            className='mx-auto'
                            style={{marginBottom: '10px', cursor: 'pointer' }}
                        />
                    </div>
                    <div style={{ textAlign: 'center' }}>    
                        <p
                            style={{ margin: '0', cursor: 'pointer' }}
                            className='font-semibold'
                        >
                            {group['group-name']}
                        </p>
                        {copiedEmail === group['contact-info'][1] && <p style={{ color: 'green' }}>Email Copied!</p>}
                        
                        <div className="flex mt-2">
                            {hoveredIndex === index && (
                                <>
                                    {group['contact-info'][1] && (
                                    <button
                                    className="rounded-full bg-blue-500 text-white px-4 py-2 mr-2 flex items-center"
                                    onClick={() => copyToClipboard(group['contact-info'][1])}
                                    >
                                        Copy Email
                                    </button>)}
                                    {group ['contact-info'][0].match(/href='(https:\/\/.*?)'/) && (
                                        <button
                                        className="rounded-full bg-purple-500 text-white px-4 py-2 flex items-center"
                                        onClick={() => redirectToInstagram(group['contact-info'][0].match(/href='(https:\/\/.*?)'/)[1])}
                                        >
                                            Instagram
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                     </div>
                  </div>
                ))}
=======
        <section id="sg-cu">
            <Header title="Student Groups and Course Unions" />
            <div className='main p-4'>
                <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-4 items-center justify-center' style={{ display: 'grid', gap: '20px' }}>
                    {sgcuData.map((group, index) => (
                        <div
                            key={index}
                            style={{ textAlign: 'center', padding: '10px' }}
                            className='flex flex-col aspect-square items-center justify-center bg-gray-100 shadow-md rounded-md'
                        >
                            <Image
                                src={`/images/sg-logos/${group['group-logo']}`}
                                width={500}
                                height={500}
                                alt={group['group-name']}
                                className='mx-auto'
                                style={{ width: '100px', height: 'auto', marginBottom: '10px', cursor: 'pointer' }}
                                priority={true}
                            />
                            <p
                                style={{ margin: '0', cursor: 'pointer' }}
                                className='font-semibold'
                            >
                                {group['group-name']}
                            </p>
                            {copiedEmail === group['contact-info'][1] && <p style={{ color: 'green' }}>Email Copied!</p>}

                            <div className="flex mt-2">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 mr-2"
                                    onClick={() => copyToClipboard(group['contact-info'][1])}
                                >
                                    Copy Email
                                </button>
                                <button
                                    className="bg-purple-500 text-white px-4 py-2"
                                    onClick={() => redirectToInstagram(group['instagram-url'])}
                                >
                                    Instagram
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
>>>>>>> cf9c2d979bb0e2ed01e22c4927e5fb90e31d8aeb
            </div>
        </section>
    );
}