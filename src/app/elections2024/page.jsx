import Header from "@/app/_components/general/header";
import Image from "next/image";
import Link from "next/link";
import CRO from "./candidates/_components/cro";

export default function Elections2024() {
    return (
        <section id="elections-24">
            <Header title={`Elections 2024`} />

            <div className="main lg:text-lg">
                <div id="introduction" className="pb-5">
                    <p className="block py-2">
                        Voting for the 2024 elections has begun! All science students will receive a unique link to vote via email.
                        All eligible candidates must have already attended the All Candidates Meeting or had a proxy attend 
                        on their behalf. If you have any elections related questions, please contact the Chief Returning Officer
                        at <a href='mailto:cro@usstm.ca' target="_blank">cro@usstm.ca</a>.
                    </p>
                    <p className="block py-2">
                        Please visit our <Link href="/about/governance">governance page</Link> for more details about
                        our election procedures annd the roles and responsibilities of the Board of Directors.
                    </p>
                    <p className="block py-2">
                        LIVE INFO SESSION: Monday 26 Feb 2024, 4PM @ Science Lounge
                    </p>
                    <p className="block py-2">
                        INFO SESSION SLIDES: <a href='https://docs.google.com/presentation/d/1fqdrmb8lyNT3S_5aE1N81FOySbj8UEi_6e15wPyJypQ/edit?usp=sharing' target="_blank">Click Here!</a>
                    </p>
                </div>

                <div className="lg:w-3/4 lg:mx-auto bg-highlight-blue rounded-sm shadow-md my-8">
                    <div className="intro w-full md:w-3/4 mx-auto grid gird-cols-1 md:grid-cols-[30%_30%_40%] justify-center items-center gap-5 py-24">
                        <h2 className="text-center p-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                            Voting Period - Vote Now!
                        </h2>
                        <hr className="hidden md:block border border-gray-400 rotate-90 w-full " />
                        <div className="px-4 md:px-0">
                            <p className="py-2 xl:text-xl">
                                The voting period has started and will end on March 15th.
                                Please check our <Link href='/elections2024/candidates'>2024 Candidates Page</Link> to 
                                see our candidates for the year. You will receive an email with a unique link to vote.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="schedule py-2">
                    <h2 className="py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide items-left">
                        This Year&apos;s Schedule
                    </h2>

                    <div className="image flex items-center justify-center flex-col">
                        <Image
                            width={1080}
                            height={1080}
                            src={`/images/elections2024/schedule.png`}
                            alt="Elections 2024 Schedule"
                            className="rounded-md w-full max-w-[1080px] h-auto"
                        />
                    </div>
                </div>

                <div className="important-dates py-2">
                    <h2 className="py-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Important Dates
                    </h2>
                    <p className="block py-2">
                        As shown in the calendar above, here are some important dates to keep in mind:
                    </p>
                    <ul className="list-disc pl-5 lg:pl-10">
                        <li className="py-2">Nomination Period: Feb 22nd to Mar 7th</li>
                        <li className="py-2">Live Info Session: Monday, Feb 26th, 4PM @ Science Lounge</li>
                        <li className="py-2">
                            All Candidates Meeting: Mar 7th, eligible candidates - invite only
                        </li>
                        <li className="py-2">Executive Debate: Mar 11th (as necessary)</li>
                        <li className="py-2">Campaign Period: Mar 11th to 15th</li>
                        <li className="py-2">Voting Days: Mar 13th to 15th</li>
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