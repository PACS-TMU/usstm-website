import Header from "@/app/_components/general/header";
import Image from "next/image";

export default function ScienceLounge() {
    return (
        <section>
            <Header title={`Science Lounge (KHE223)`} />
            <div className="main">
                <div className="flex flex-col lg:flex-row mx-2 items-center">
                    <div className="w-full lg:w-2/5 lg:text-lg space-y-5 > * + *">
                        <p>
                            The Science Lounge is located on the second floor of Kerr Hall East in KHE 223. 
                            The lounge is open to all Faculty of Science students from 7 am - 10 pm Monday to Friday. 
                            This space is managed by the VP Operations. If there are any problems with the lounge or 
                            any suggestions that you would like to make so we can improve the space, please feel free 
                            to email them.
                        </p>
                        <p>
                            It is a great space to do group work, study, and meet with your peers! The USSTM provides 
                            casual seating, group work space and individual work space for you to get all of your work 
                            done. Science students require their One Card to enter the lounge.
                        </p>
                        <p>
                            Since the Science Lounge is meant to be a study space for students, we recommend you try 
                            booking other places first and only use the lounge as a backup.
                        </p>
                    </div >
                    <div className="w-full lg:w-3/5 lg:ml-4">
                        <Image
                            src="/images/community/sci-lounge/intro.jpg"
                            width={1296}
                            height={725}
                            className="w-full rounded-sm shadow-md my-6 lg:my-0"
                            alt="Photo of Science Lounge"
                            priority={true}
                        />
                    </div>
                </div>
                <div className="w-full my-4">
                    <h2 className="pb-3 pt-5 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Science Lounge Calender
                    </h2>
                    <iframe
                        src="https://embed.styledcalendar.com/#XcDRrWuhwLrNxYO7kFrT"
                        title="Sci Lounge Styled Calendar"
                        className="styled-calendar-container w-[90%] mx-auto lg:w-full border border-gray-300 md:border-none h-[700px]"
                        data-cy="calendar-embed-iframe"
                    />
                    <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col justify-center w-full lg:w-3/5 lg:ml-4">
                        <h2 className="pb-3 pt-5 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide lg:self-center">
                            Layout
                        </h2>
                        <Image
                            src="/images/community/sci-lounge/intro.jpg"
                            width={2502}
                            height={2560}
                            className="w-full h-auto lg:my-6"
                            alt="Photo of Science Lounge Layout"
                            priority={true}
                        />
                    </div>
                    <div className="flex-col w-full lg:w-2/5 lg:ml-4">
                        <h2 className="pb-3 pt-5 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide self-center">
                            Rules of the Sci Lounge
                        </h2>
                        <ul className="lg:my-6 list-disc px-2 lg:px-6">
                            <li className="py-2">
                                Code of Conduct: The Science Lounge is a shared study space and we want it to remain open to students
                                and a safe and clean area to work and study in. If students behave inappropriately the University can
                                take away student spaces and we don&apos;t want that to happen. We have a set of rules for students who want
                                to use the Science Lounge that we hope will make it a safer space for everyone.
                            </li>
                            <li className="py-2">
                                NO ALCOHOL. The consumption of alcohol is strictly prohibited in the science lounge. No open drinks or bottles.
                            </li>
                            <li className="py-2">
                                NO SMOKING. The use of tobacco, marijuana and/or vapes is not permitted in the lounge. No smoking of any products.
                            </li>
                            <li className="py-2">
                                BE AWARE OF SCENTS. Please be mindful of any strong scents you may have. If others say they are bothered by any
                                smells, please respect that and put it away.
                            </li>
                            <li className="py-2">
                                QUIET SPACE. During Quiet Hours you must keep talking to a whisper. At other times please be mindful of others in the space.
                            </li>
                            <li className="py-2">
                                RESPECT PROPERTY. Respect the furniture and items in the lounge. Any vandalism, stealing or unauthorized borrowing is prohibited.
                            </li>
                            <li className="py-2">
                                CLEAN UP. Clean up after yourselves. Do not leave garbage or anything else behind when you leave.
                            </li>
                            <li className="py-2">
                                SAFETY. No dangerous or illegal weapons or items are allowed in the lounge.
                            </li>
                            <li className="py-2">
                                RESPECT. Respect everyone who uses the lounge, regardless of race, gender, orientation, religion etc.
                            </li>
                        </ul>
                    </div>
                </div>
                <h2 className="pb-3 pt-5 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                    Science Lounge Booking
                </h2>
                <div className="lg:text-lg lg:px-4 space-y-5 > * + *">
                    <p>
                        For bookings, please email <a href="mailtto:vp.operations@usstm.ca">vp.operations@usstm.ca</a> the date,
                        time and purpose of the booking. All bookings must be done at least two weeks before the event, and will
                        take our team 1-5 business days to review and respond to the request.
                    </p>
                    <p>
                        Keep in mind to book 30 minutes before and after the event to accommodate for preparation and clean ups.
                        All bookings must make sure that the Science Lounge is clean and back to its original layout after the booking.
                    </p>
                </div>
                <h2 className="pb-3 pt-5 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                    Printing
                </h2>
                <div className="lg:text-lg lg:px-4 space-y-5 > * + *">
                    <p className="lg:text-lg lg:px-4">
                        The Science Lounge offers printing services similar to other TMU facilitated printing stations. In order to use
                        the printers, your OneCard must be loaded with funds. Cash, debit and credit are not permitted payment options.
                        If it&apos;s your first time using a printer with TMU, please follow these links for instructions on how to use them:
                    </p>
                    <ul className="lg:text-lg px-4 lg:px-14 list-disc">
                        <li className="py-2">
                            <a href="https://www.torontomu.ca/ccs/services/labsandprinting/printing/wireless-printing/#!tab-1501080931322-step-1" target="_blank">
                                Printing instructions when using TMU printers.
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="https://library.torontomu.ca/services/technology/printing/" target="_blank">
                                Set-Up Instructions to get you started.
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
