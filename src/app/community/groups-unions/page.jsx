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
    const [hoveredTitle, setHoveredTitle] = useState(null);

    const extractTitle = (htmlString) => {
        const match = htmlString.match(/<a[^>]*>(.*?)<\/a>/);
        return match ? match[1] : ''; // Extract text between <a> and </a>
    };

    const handleMouseEnter = (index, title) => {
        setHoveredIndex(index);
        setHoveredTitle(title);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setHoveredTitle(null);
    };

    const unsortedStudentGroups = sgcuData.filter(group => group.type === 'SG');
    const studentGroups = unsortedStudentGroups.sort((a, b) => a['group-name'].localeCompare(b['group-name']));
    const unsortedCourseUnions = sgcuData.filter(group => group.type === 'CU');
    const courseUnions = unsortedCourseUnions.sort((a, b) => a['group-name'].localeCompare(b['group-name']));

    const renderGroupCards = (groups) => (
        <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-4 items-center justify-center' style={{ display: 'grid', gap: '20px' }}>
            {groups.map((group, index) => (
                <div
                    key={index}
                    style={{ textAlign: 'center', padding: '10px', display: 'grid', gridTemplateRows: '50% 50%', gridTemplateColumns: '85%' }}
                    className='flex flex-col aspect-square items-center justify-center bg-gray-100 shadow-md rounded-md'
                    onMouseEnter={() => handleMouseEnter(index, extractTitle(group['contact-info'][0]))}
                    onMouseLeave={handleMouseLeave}
                >
                    <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
                        <Image
                            src={`/images/sg-logos/${group['group-logo']}`}
                            alt={group['group-name']}
                            width={500}
                            height={500}
                            className='mx-auto h-auto w-1/2'
                            style={{ marginBottom: '10px', cursor: 'pointer' }}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center" style={{ textAlign: 'center' }}>
                        <p
                            style={{ margin: '0', cursor: 'pointer' }}
                            className='font-semibold'
                        >
                            {group['group-name']}
                        </p>
                        {copiedEmail === group['contact-info'][1] && <p style={{ color: 'green' }}>Email Copied!</p>}

                        {hoveredIndex === index && hoveredTitle && (
                            <>
                                <p style={{ margin: '0', color: 'black' }}>{group['contact-info'][1]}</p>
                                <p style={{ margin: '0', color: 'black' }}>Instagram: @{hoveredTitle}</p>
                            </>

                        )}

                        <div className="flex mt-2">
                            {hoveredIndex === index && (
                                <>
                                    {group['contact-info'][1] && (
                                        <button
                                            className="rounded-full bg-highlight-dark text-white px-4 py-2 mr-2 flex items-center"
                                            onClick={() => copyToClipboard(group['contact-info'][1])}
                                        >
                                            Copy Email
                                        </button>)}
                                    {group['contact-info'][0].match(/href='(https:\/\/.*?)'/) && (
                                        <button
                                            className="rounded-full bg-highlight text-white px-4 py-2 flex items-center"
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
        </div>
    );

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
        <div className='main p-4'>
            <h1 className="text-5xl font-semibold pb-4 leading-relaxed" style={{ textAlign: 'center' }}>Student Groups</h1>
            {renderGroupCards(studentGroups)}

            <h1 className="text-5xl font-semibold pb-4 leading-relaxed" style={{ textAlign: 'center' }}>Course Unions</h1>
            {renderGroupCards(courseUnions)}
        </div>
    );
}
