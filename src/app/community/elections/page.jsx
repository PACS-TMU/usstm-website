"use client";
import Link from 'next/link';
import Header from '@/app/_components/general/header';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Elections() {
    const [electionsResults, setElectionsResults] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/community/elections/elections-results.json');
                const data = await res.json();
                setElectionsResults(data);
            } catch (error) {
                console.error('Error fetching past-boards data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <section className="elections-page lg:text-lg">
            <Header title="Elections" />
            <div className="main">
                {/* Introduction */}
                <div id="introduction" className="px-6 pb-6">
                    <p className="block py-2">
                        Each year, the Undergrad Science Society of Toronto Metropolitan (USSTM) conducts an election cycle to select the next Board of Directors. The
                        Board plays a pivotal role in steering the direction of USSTM and ensuring its continued success. The responsibilities of the USSTM team are
                        outlined in detail in the By-Laws and Constitution, accessible at our <Link id="btext" href="/about/governance/">governance page</Link>.
                    </p>
                    <p>
                        Elections are run by the Chief Returning Officer (CRO), who is
                        appointed by the Board of Directors. The CRO can be reached at <a href="mailto:cro@usstm.ca">cro@usstm.ca</a>.
                        Everyone who wants to run should attend an info session and <span className='font-semibold'>MUST ATTEND</span> the &quot;All
                        Candidates Meeting&quot;. If you cannot attend either you <span className='font-semibold'>MUST</span> email cro@usstm.ca
                        at least 24 hours before. You may send someone in your place to the &quot;All Candidates
                        Meeting&quot; but you must tell the CRO who will be attending in your
                        place 24 hours in advance.
                        Please read the Election Policies that can be found <a href="/assets/governance/election-procedures.pdf" target="_blank">here</a>.
                    </p>
                    <p className='block py-2'>
                        It is your responsibility to know this document as well as the Constitution and By-Laws
                        (available in our <Link id="btext" href="/about/governance/">governance page</Link>), especially if you are elected.
                    </p>
                </div>

                <div className="content px-6">
                    {/* Timeline */}
                    <div id="timeline">
                        <h2 className="py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                            Timeline
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-[0%_100%] items-center justify-start lg:justify-center">

                            <section id="timeline-image" className="row-start-1 lg:col-start-2 px-4">
                                <Image
                                    src="/images/community/elections/timeline.png"
                                    alt="USSTM Elections Timeline"
                                    width={800}
                                    height={1055}
                                    priority={true}
                                    className='w-1/2 h-auto mx-auto'
                                />
                            </section>
                        </div>
                    </div>

                    {/* Eligibity Rules */}
                    <div id="eligibility-rules">
                        <h2 className="pb-4 pt-7 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                            Eligibility Rules
                        </h2>
                        <div className="px-4">
                            <p>
                                To run, you must complete a nomination form which is released closer to the election date each year. 
                                Failure to do so before the deadline may result in your candidacy not being deemed eligible. It is 
                                highly recommended that this is completed EARLY in the nomination period to allow for time to collect 
                                the required signatures after submission.
                            </p>
                        </div>
                    </div>

                    {/* Campaigning Rules */}
                    <div id="campaigning-rules">
                        <h2 className="pb-4 pt-8 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                            Campaigning Rules
                        </h2>
                        <div className="px-4">
                            <ul className="px-2">
                                {/* DO's */}
                                <li className="text-lg lg:text-xl font-semibold tracking-wider py-1">DO&apos;s:</li>
                                <ul className="px-4 pb-3 pt-1">
                                    <li className="py-1">- Ensure that your campaign is paperless.</li>
                                    <li className="py-1">- Banners are allowed but must be approved by the CRO and are posted by the Science Lounge (KHE 223).</li>
                                </ul>

                                {/* DON'Ts */}
                                <li className="text-lg lg:text-xl font-semibold tracking-wider py-1">DON&apos;Ts:</li>
                                <ul className="px-4 pb-3 pt-1">
                                    <li className="py-1">- No campaigning in the Science Lounge (KHE223).</li>
                                    <li className="py-1">- No campaigning within classrooms without faculty permission.</li>
                                    <li className="py-1">- No campaigning in the Library or computer labs.</li>
                                    <li className="py-1">- No printed posters allowed.</li>
                                </ul>
                            </ul>
                            <p className="px-2">
                                Report any violations to the Chief Returning Officer (CRO) at <a href="mailto:cro@usstm.ca">cro@usstm.ca</a>.
                            </p>
                            <p className="px-2">
                                Note: This is a general overview. For detailed rules, refer to the 
                                comprehensive <a href="/assets/governance/election-procedures.pdf" target="_blank">Election Procedures Document</a>.
                            </p>
                        </div>
                    </div>

                    <div className="join-non-elected-positions">
                        <h2 className="pb-4 pt-7 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                            Join Non-Elected Positions
                        </h2>
                        <div className="px-4">
                            <p>
                                If you&apos;re considering applying to the USSTM but don&apos;t want to be in an elected
                                position, we have several committee positions that would be great
                                for you! For more information, visit our <Link href="/about/your-team/">Your Team page</Link>.
                            </p>
                        </div>
                    </div>

                    <div className="past-election-results">
                        <h2 className="pb-2 pt-7 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                            Past Election Results
                        </h2>
                        <div className="px-4">
                            <ul className="px-2 pb-3 pt-1">
                                {
                                    electionsResults.map((election) => (
                                        <li className="flex py-2" key={election.id}>
                                            <div className='flex flex-col lg:flex-row'>
                                                <p>{election.title}:&nbsp;</p>
                                                <a
                                                    className='lg:py-0 lg:px-0'
                                                    href={election.path}
                                                    target="_blank"
                                                >
                                                    USSTM {election.title}
                                                </a>
                                            </div>

                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
