import Header from "@/app/_components/general/header";
import Link from "next/link";
import CRO from "./candidates/_components/cro";

export default function Elections2025() {
    return (
        <section id="elections-24">
            <Header title={`Elections 2025-26`} />

            <div className="main lg:text-lg">
                <div id="introduction" className="pb-5">
                    <p className="block py-2">
                        Elections for the 2025-2026 board are coming up! If you have any elections related questions,
                        please contact the Chief Returning Officer at <a href='mailto:cro@usstm.ca' target="_blank">cro@usstm.ca</a>. Once nomination period is over,
                        you&apos;ll be able to see the candidates on the <Link href={'/elections2025/candidates'}>candidates page</Link>.
                    </p>
                    <p className="block py-2">
                        Please visit our <Link href="/about/governance">governance page</Link> for more details about
                        our election procedures annd the roles and responsibilities of the Board of Directors.
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
                            Voting Period has now started!
                        </h2>
                        <hr className="hidden md:block border border-gray-400 rotate-90 w-full " />
                        <div className="px-4 md:px-0">
                            <p className="py-2 xl:text-xl">
                                Members of the Faculty of Science are invited to vote for their representatives
                                on the USSTM Board of Directors. <strong>Please check your email for the voting link!</strong>
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
                            overrideSrc={`${process.env.NEXT_PUBLIC_BASE_URL}/images/elections2025/schedule.png`}
                            alt="Elections 2024 Schedule"
                            className="rounded-md w-full max-w-[1080px] h-auto"
                        />
                    </div>
                </div> */}

                <div className="important-dates py-2">
                    <h2 className="py-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Important Dates
                    </h2>
                    {/* <p className="block py-2">
                        As shown in the calendar above, here are some important dates to keep in mind:
                    </p> */}
                    <ul className="list-disc pl-5 lg:pl-10">
                        <li className="py-2">Nomination Period: Feb 12th to Feb 26th</li>
                        <li className="py-2">
                            All Candidates Meeting: Feb 26th, eligible candidates - invite only
                        </li>
                        <li className="py-2">Campaign Period: Feb 27th to March 5th</li>
                        <li className="py-2">Voting Period: Mar 3rd to 5th</li>
                        <li className="py-2">
                            Results posted the following week in science lounge and online.
                        </li>
                        <li className="py-2">
                            Ratification Meeting: During USSTM AGM, election results will be announced
                        </li>
                    </ul>
                </div>
                <CRO />
            </div>
        </section >
    );
}
