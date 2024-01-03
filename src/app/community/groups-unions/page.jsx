"use client";
import sgcuData from '../../../../public/data/sgcu-db.json';
import { useState } from 'react';
import Image from 'next/image';

export default function GroupsUnions() {
    const [copiedEmail, setCopiedEmail] = useState(null);

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
            <h1 className="text-5xl font-semibold pb-4 leading-relaxed" style={{ textAlign: 'center' }}>Groups And Unions</h1>
            <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-4 items-center justify-center' style={{ display: 'grid', gap: '20px' }}>
                {sgcuData.map((group, index) => (
                    <div
                        key={index}
                        style={{ textAlign: 'center', padding: '10px' }}
                        className='flex flex-col aspect-square items-center justify-center bg-gray-100 shadow-md rounded-md'
                    >
                        <Image
                            src={`/images/sg-logos/${group['group-logo']}`}
                            alt={group['group-name']}
                            className='mx-auto'
                            style={{ width: '100px', height: 'auto', marginBottom: '10px', cursor: 'pointer' }}
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
        </div>
    );
}