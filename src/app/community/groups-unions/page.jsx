"use client";
import Header from "@/app/_components/general/header";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GroupsUnions() {
    const [sgcuData, setSgcuData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/community/groups-unions/sgcu-db.json');
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
        <div className='grid-cols-1 mx-12 lg:mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-4 items-center justify-center' style={{ display: 'grid', gap: '20px' }}>
            {groups.map((group, index) => (
                <div
                    key={index}
                    style={{ textAlign: 'center', padding: '10px', display: 'grid', gridTemplateRows: '50% 50%', gridTemplateColumns: '85%' }}
                    className='flex flex-col aspect-square items-center justify-center bg-gray-100 shadow-md rounded-md'
                    onMouseEnter={() => handleMouseEnter(index, extractTitle(group['contact-info'][0]))}
                    onMouseLeave={handleMouseLeave}
                >
                    <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'end' }}>
                        <Image
                            src={`/images/community/sg-logos/${group['group-logo']}`}
                            alt={group['group-name']}
                            width={500}
                            height={500}
                            className='mx-auto h-auto w-1/2 mb-0 mt-auto'
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center" style={{ textAlign: 'center' }}>
                        <p
                            style={{ margin: '0' }}
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
        <section id="sg-cu-page">
            <Header title="Student Groups & Course Unions" />
            <div className='main p-4'>

                <h2 className="py-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Student Groups</h2>
                <p className="lg:text-lg pb-4 text-left">
                    Discover the diverse range of student groups that enhance the USSTM experience. These groups cater to specific interests,
                    providing opportunities for networking, skill development, and social engagement.
                </p>
                {renderGroupCards(studentGroups)}

                <h2 className="pb-4 pt-12 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Course Unions</h2>
                <p className="lg:text-lg pb-4 text-left">
                    Course Unions represent students in their specific programs. They all have positions that work to run events, advocate for students
                    facing issues and be a source of support for students.
                </p>
                {renderGroupCards(courseUnions)}

                <h2 className="pb-4 pt-12 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">How to Start/Revive a Student Group at USSTM?</h2>
                <p className="lg:text-lg pb-4 text-left">
                    Have a group idea that is not being repersented or a group that no longer exists? Empower your passion for a specific scientific field or interest by
                    starting your own student group at the Undergrad Science Society of Toronto Metropolitan (USSTM)
                </p>
                <p className="lg:text-lg pb-4 text-left">
                    Check out our <a href="https://docs.google.com/document/d/10Oe5miU2aVl9_-vld1zPplsTLl-MJBKOVbk0o6mJY04" target="_blank">Student Group Package</a> to 
                    find out how to start your own student group!
                </p>

                <h2 className="pb-4 pt-8 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Join or Start Today!</h2>
                <p className="lg:text-lg pb-4 text-left">
                    Explore the existing student groups and course unions, or start your own to create a community tailored to your scientific interests.
                    For more information, contact us at <a href="mailto:vp.operations@usstm.ca" target="_blank">vp.operations@usstm.ca</a>.
                </p>
                <p className="lg:text-lg pb-4 text-left">
                    We look forward to supporting your journey in building and participating in the vibrant student group community at USSTM!
                </p>
            </div>
        </section>
    );
}
