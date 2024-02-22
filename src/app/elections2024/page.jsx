import Header from "@/app/_components/general/header";
import Image from "next/image";

export default function Elections2024() {
    return (
        <section id="elections-24">
            <Header title={`Elections 2024`} />

            <div className="main lg:text-lg">
                <div id="introduction" className="pb-5">
                    <p className="block py-2">
                        The 2024 elections are coming up and we are excited to announce that nominations are
                        now open for the 2024-2025 Board! All candidates should watch the info session recording.
                        Important parts will be highlighted at the all-candidates meeting. If you cannot attend
                        the All Candidates Meeting, you MUST contact <a href='mailto:cro@usstm.ca' target="_blank">cro@usstm.ca</a>.
                    </p>
                    <p className="block py-2">
                        LIVE INFO SESSION: Monday 26 Feb 2024, 4PM @ Science Lounge
                    </p>
                    <p className="block py-2">
                        INFO SESSION RECORDING: Coming Soon...
                    </p>
                </div>
                <div className="important-dates py-2">
                    <h2 className="py-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Important Dates
                    </h2>
                    <ul className="list-disc lg:pl-10">
                        <li className="py-2">The elections will be held on the 15th of November 2024.</li>
                        <li className="py-2">The deadline for nominations is the 1st of November 2024.</li>
                        <li className="py-2">The nomination form can be found below.</li>
                    </ul>
                </div>
                <p className="block py-2">
                    Here are some important dates to keep in mind:
                </p>
                <ul className="list-desc">
                    Nomination Period: Feb 22nd to Mar 7th

                    All Candidates Meeting: Mar 8th 4pm – Science Lounge, eligible candidates – invite only

                    Executive Debate: Mar 11th (as necessary)

                    Campaign Period: Mar 11th to 15th

                    Voting Days: Mar 13th to 15th

                    Results posted the following week in science lounge and online.

                    Ratification Meeting: USSTM AGM Election results will be announced

                    Nomination forms are available Feb 22nd. Please see link below:
                    (ON A COMPUTER HIGHLY RECOMMENDED)
                    https://forms.gle/cxm4yQ4dYefKrUBJ6
                </ul>

                <div className="schedule py-2">
                    <h2 className="py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide items-left">
                        This Year's Schedule
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

            </div>
        </section >
    );
}