'use client'
import Header from "@/app/_components/general/header";
import Directors from "@/app/about/governance/components/directors";
import Membership from "@/app/about/governance/components/membership";
import Meeting from "@/app/about/governance/components/meeting";
import { useState } from "react";

export default function Governance() {
    const [currentTab, setCurrentTab] = useState('directors');

    return (
        <section className="governance-page lg:text-lg">

            <Header title="Governance" />
            <div id="content" className="main">
                <div id="introduction" className="px-6 pb-5">
                    <p className="block py-2">
                        Our commitment to transparency and excellence is reflected in the way we govern our society. Our elected body of students from the
                        Faculty of Science is dedicated to serving and representing you, the students. Learn more about the structure and leadership
                        that drives our mission forward.
                    </p>
                </div>
                <div className="content px-6">
                    <div className="space-y-2 flex flex-col lg:flex-row lg:space-x-4 text-highlight-dark font-semibold bg-background">
                        <button
                            id="directors-overview"
                            className="rounded-t-md py-1 px-2 bg-highlight-blue text-left lg:text-center"
                            onClick={() => {
                                setCurrentTab('directors');
                                document.getElementById('directors-overview').classList.add('bg-highlight-blue', 'border-b', 'border-gray-500');
                                document.getElementById('membership-information').classList.remove('bg-highlight-blue', 'border-b', 'border-gray-500');
                                document.getElementById('meeting-information').classList.remove('bg-highlight-blue', 'border-b', 'border-gray-500');
                            }}
                        >
                            Directors Overview
                        </button>
                        <button
                            id="membership-information"
                            className="rounded-t-md py-1 px-2 text-left lg:text-center"
                            onClick={() => {
                                setCurrentTab('membership-information');
                                document.getElementById('directors-overview').classList.remove('bg-highlight-blue', 'border-b', 'border-gray-500');
                                document.getElementById('membership-information').classList.add('bg-highlight-blue', 'border-b', 'border-gray-500');
                                document.getElementById('meeting-information').classList.remove('bg-highlight-blue', 'border-b', 'border-gray-500');
                            }}
                        >
                            Membership Information
                        </button>
                        <button
                            id="meeting-information"
                            className="rounded-t-md py-1 px-2 text-left lg:text-center"
                            onClick={() => {
                                setCurrentTab('meeting-information');
                                document.getElementById('directors-overview').classList.remove('bg-highlight-blue', 'border-b', 'border-gray-500');
                                document.getElementById('membership-information').classList.remove('bg-highlight-blue', 'border-b', 'border-gray-500');
                                document.getElementById('meeting-information').classList.add('bg-highlight-blue', 'border-b', 'border-gray-500');
                            }}
                        >
                            General Meetings
                        </button>
                    </div>
                    <div className="bg-highlight-blue rounded-b-md px-4 py-2">
                        {currentTab === 'directors' && <Directors />}
                        {currentTab === 'membership-information' && <Membership />}
                        {currentTab === 'meeting-information' && <Meeting />}
                    </div>
                    <div id='governance-policies'>
                        <h2 className="py-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Governance Policies</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] items-center justify-start lg:justify-center">
                            <section className="px-4">
                                <p>To ensure the highest standards of operation, we adhere to a set of governance policies (<span className="font-bold">add documents and design</span>):</p>
                                <ul className="px-4 list-none">
                                    <li>USSTM Constitution</li>
                                    <li>USSTM By-Laws</li>
                                    <li>USSTM Financial Policies</li>
                                    <li>USSTM Election Procedures</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div className="pt-2 pb-6">
                        <h2 className="py-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Your Voice Matters</h2>
                        <p className="px-4">
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