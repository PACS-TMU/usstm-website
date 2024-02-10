'use client'
import Header from "@/app/_components/general/header";
import Directors from "@/app/about/governance/components/directors";
import Membership from "@/app/about/governance/components/membership";
import Meeting from "@/app/about/governance/components/meeting";
import Arrow from "@/app/_components/general/arrow";
import { useState, useEffect } from "react";
import { GrDocumentText } from "react-icons/gr";

export default function Governance() {
    const [currentTab, setCurrentTab] = useState('directors');
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/about/governance/gov-docs.json');
                const data = await response.json();
                setDocuments(data);
            } catch (error) {
                console.error('Error fetching governance data: ', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="governance-page lg:text-lg">
            <Header title="Governance" />
            <div className="w-full h-full">
                <div id="content" className="main">
                    <div id="introduction" className="px-6 pb-5">
                        <p className="block py-2">
                            Our commitment to transparency and excellence is reflected in the way we govern our society. Our elected body of students from the
                            Faculty of Science is dedicated to serving and representing you, the students. Learn more about the structure and leadership
                            that drives our mission forward.
                        </p>
                    </div>
                    <div className="content px-6">
                        <div className="space-y-2 flex flex-col lg:flex-row lg:space-y-0 text-highlight-dark font-semibold bg-background">
                            <div
                                id="directors-overview"
                                className="flex justify-between items-center rounded-md lg:rounded-none lg:rounded-t-md py-2 px-4 bg-highlight-blue lg:border-b border-gray-500 text-left lg:text-center"
                            >
                                <button
                                    className="w-full h-full text-left"
                                    onClick={() => {
                                        setCurrentTab('directors');
                                        document.getElementById('directors-overview').classList.add('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                        document.getElementById('membership-information').classList.remove('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                        document.getElementById('meeting-information').classList.remove('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                    }}
                                >
                                    Directors Overview
                                </button>
                                <button
                                    onClick={() => {
                                        setCurrentTab('directors');
                                        document.getElementById('directors-overview').classList.add('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                        document.getElementById('membership-information').classList.remove('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                        document.getElementById('meeting-information').classList.remove('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                    }}
                                >
                                    <Arrow id="directors-arrow" direction={"down"} />
                                </button>
                            </div>
                            <div
                                id="membership-information"
                                className="flex justify-between items-center rounded-md lg:rounded-none lg:rounded-t-md py-2 px-4 text-left lg:text-center"
                            >
                                <button
                                    className="w-full h-full text-left"
                                    onClick={() => {
                                        setCurrentTab('membership-information');
                                        document.getElementById('directors-overview').classList.remove('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                        document.getElementById('membership-information').classList.add('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                        document.getElementById('meeting-information').classList.remove('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                    }}
                                >
                                    Membership Information
                                </button>
                                <button
                                    onClick={() => {
                                        setCurrentTab('membership-information');
                                        document.getElementById('directors-overview').classList.remove('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                        document.getElementById('membership-information').classList.add('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                        document.getElementById('meeting-information').classList.remove('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                    }}
                                >
                                    <Arrow id="membership-arrow" direction={"down"} />
                                </button>

                            </div>
                            <div
                                id="meeting-information"
                                className="flex justify-between items-center rounded-t-md py-2 px-4 text-left lg:text-center"
                            >
                                <button
                                    className="w-full h-full text-left"
                                    onClick={() => {
                                        setCurrentTab('meeting-information');
                                        document.getElementById('directors-overview').classList.remove('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                        document.getElementById('membership-information').classList.remove('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                        document.getElementById('meeting-information').classList.add('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                    }}
                                >
                                    General Meetings
                                </button>
                                <button
                                    onClick={() => {
                                        setCurrentTab('membership-information');
                                        document.getElementById('directors-overview').classList.remove('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                        document.getElementById('membership-information').classList.add('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                        document.getElementById('meeting-information').classList.remove('bg-highlight-blue', 'lg:border-b', 'border-gray-500');
                                    }}
                                >
                                    <Arrow id="meeting-arrow" direction={"down"} />
                                </button>
                            </div>
                        </div>
                        <div className="bg-highlight-blue rounded-b-md px-4 py-2">
                            {currentTab === 'directors' && <Directors />}
                            {currentTab === 'membership-information' && <Membership />}
                            {currentTab === 'meeting-information' && <Meeting />}
                        </div>

                        <h2 className="py-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Governance Policies</h2>
                        <p>To ensure the highest standards of operation, we adhere to a set of governance policies: </p>
                    </div>
                </div>

                <div className="bg-highlight-dark my-4 text-background">
                    <div className="main">
                        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center py-8 mx-2 lg:mx-6 md:space-y-0 > * + * space-y-12 > * + * ">
                            {documents.map((document) => (
                                <div key={document.id} className="flex flex-col items-center space-y-4 > * + *">
                                    <a
                                        href={`/assets/governance/${document.pdf}`}
                                        target="_blank"
                                    >
                                        <button>
                                            <GrDocumentText
                                                size={70}
                                                className="text-background hover:scale-105 lg:hover:scale-110 hover:text-highlight-blue transition duration-300 ease-in-out"
                                            />
                                        </button>
                                    </a>
                                    <p>{document.name}</p>
                                    <p className="lg:text-sm text-xs italic pt-2 text-stone-300">
                                        Last Updated: {document.updated}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="main">
                    <div className="pt-2 pb-6 px-6">
                        <h2 className="py-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Your Voice Matters</h2>
                        <p>
                            As members of our society, your input is invaluable. Reach out to us with event ideas, suggestions for new services, or any
                            criticisms or complaints. You are the watchdogs for USSTM, ensuring we adhere to our Constitution, By-Laws, and other policies. If you have any
                            concerns about our policies, please reach out to our VP Operations at <a href="mailto:vp.operations@usstm.ca">vp.operations@usstm.ca</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}