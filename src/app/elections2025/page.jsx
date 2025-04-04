import Header from "@/app/_components/general/header";
import Link from "next/link";
import CRO from "./candidates/_components/cro";

export default function Elections2025() {
    return (
        <section id="elections-24">
            <Header title={`USSTM By-Election 2025`} />

            <div className="main lg:text-lg">
                <div id="introduction" className="pb-5">
                    <p className="block py-2">
                        The USSTM By-Election for the 2025-2026 board is now underway! If you have any questions related to the by-election, please contact the Chief Returning Officer at <a href='mailto:cro@usstm.ca' target="_blank">cro@usstm.ca</a>. Once the nomination period concludes, you&apos;ll be able to see the candidates on the <Link href={'/elections2025/candidates'}>candidates page</Link>.
                    </p>
                    <p className="block py-2">
                        The by-election is held if a specific threshold of board vacancies remains after the general election, as outlined in the USSTM Constitution. For more information about the process and board roles, please visit our <Link href="/about/governance">governance page</Link>.
                    </p>
                    <div className='flex justify-center items-center'>
                        <Link
                            href={`/elections2025/candidates`}
                        >
                            <button
                                id={'candidates-button'}
                                className={'rounded-md bg-highlight-dark text-white text-lg lg:text-xl xl:text-2xl font-semibold my-2 p-4 hover:scale-105 ease-in-out duration-300'}
                                aria-label="Candidates List"
                            >
                                Click here to view the candidates!
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="lg:w-3/4 lg:mx-auto bg-highlight-blue rounded-sm shadow-md my-8">
                    <div className="intro w-full md:w-3/4 mx-auto grid gird-cols-1 md:grid-cols-[30%_30%_40%] justify-center items-center gap-5 py-24">
                        <h2 className="text-center p-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                            Voting Period!
                        </h2>
                        <hr className="hidden md:block border border-gray-400 rotate-90 w-full " />
                        <div className="px-4 md:px-0">
                            <p className="py-2 xl:text-xl">
                                Members of the Faculty of Science are invited to vote for their representatives on the USSTM Board of Directors during the by-election voting period. <strong>Please check your email for the voting link!</strong>
                            </p>
                        </div>
                    </div>
                </div>

                 {/* <div className="schedule py-2">
                    <h2 className="py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide items-left">
                        This Year&apos;s Schedule
                    </h2>

                    <div className="image flex items-center justify-center flex-col">
                        <Image
                            width={1080}
                            height={1080}
                            overrideSrc={${process.env.NEXT_PUBLIC_BASE_URL}/images/elections2025/schedule.png}
                            alt="Elections 2024 Schedule"
                            className="rounded-md w-full max-w-[1080px] h-auto"
                        />
                    </div>
                </div> */}

                <div className="important-dates py-2">
                    <h2 className="py-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Important Dates
                    </h2>
                    <ul className="list-disc pl-5 lg:pl-10">
                        <li className="py-2">Nomination Period: March 22nd to March 30th</li>
                        <li className="py-2">
                            All Candidates Meeting: March 31st, eligible candidates - invite only
                        </li>
                        <li className="py-2">Campaign Period: April 1st to 9th</li>
                        <li className="py-2">Voting Period: April 7th to 9th</li>
                        <li className="py-2">
                            Results posted the following week in the Science Lounge and online.
                        </li>
                        <li className="py-2">
                            Ratification Meeting: By-Election results will be ratified at the next meeting with the general membership (SAGM in Fall semester)
                        </li>
                    </ul>
                </div>
                <CRO />
            </div>
        </section >
    );
}
