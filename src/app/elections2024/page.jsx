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
                        Elections for the 2024-2025 board is now done! If you have any elections related questions, 
                        please contact the Chief Returning Officer at <a href='mailto:cro@usstm.ca' target="_blank">cro@usstm.ca</a>. To 
                        see the candidates who ran, visit our <Link href={'/elections2024/candidates'}>candidates page</Link>!
                        To see the results, please visit our <a href="https://www.instagram.com/usstorontomet/" target="_blank">instagram page</a>.
                    </p>
                    <p className="block py-2">
                        Please visit our <Link href="/about/governance">governance page</Link> for more details about
                        our election procedures annd the roles and responsibilities of the Board of Directors.
                    </p>
                    <div className='border-2 border-highlight-dark w-3/4 lg:w-1/2 xl:w-1/3 mx-auto text-lg lg:text-xl xl:text-2xl mt-12 font-semibold flex justify-center underline items-center divide-x hover:scale-105 hover:text-background hover:bg-highlight-dark ease-in-out duration-200'>
                        <button id={'candidates-button'} className={'p-4'}>
                            <Link
                                href={'https://drive.google.com/drive/folders/1PBybdVQ1PxRBHBvKofCI7J_x7T80IMj6'}
                                target={'_blank'}
                            >
                                Click here to see the candidates who ran!
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="lg:w-3/4 lg:mx-auto bg-highlight-blue rounded-sm shadow-md my-8">
                    <div className="intro w-full md:w-3/4 mx-auto grid gird-cols-1 md:grid-cols-[30%_30%_40%] justify-center items-center gap-5 py-24">
                        <h2 className="text-center p-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                            Election Results are Out!
                        </h2>
                        <hr className="hidden md:block border border-gray-400 rotate-90 w-full " />
                        <div className="px-4 md:px-0">
                            <p className="py-2 xl:text-xl">
                                The election results are out and are to be ratified at our AGM on Monday, March 25th, 2024.
                                Please check our <Link href='/about/meetings'>Meetings Page</Link> to 
                                learn more about the AGM and other upcoming meetings.
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