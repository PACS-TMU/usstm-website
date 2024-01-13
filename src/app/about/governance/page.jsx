import Link from "next/link";
import Header from "@/app/_components/general/header";

export default function Governance() {
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
                    <div id="board-of-directors-overview">
                        <h2 className="pb-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Board of Directors Overview</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] items-center justify-start lg:justify-center">
                            <section className="px-4">
                                <p className="py-2">
                                    You, the students, elect all of these positions around February or March each year. We all work throughout the year to try and
                                    benefit the students that we were elected to represent. We run events, provide services and have General Meetings with the
                                    Membership at least twice a year.
                                </p>
                                <ul className="list-none">
                                    <li className="font-semibold tracking-wide">President:</li>
                                    <li className="px-4 pb-3 pt-1">The President is in charge of overseeing the seven (7) VPs, all together
                                        they make up the executive team</li>

                                    <li className="font-semibold tracking-wide">Vice President:</li>
                                    <li className="px-4 pb-3 pt-1">[Brief description of each VPs portfolio and their responsibilities]</li>

                                    <li className="font-semibold tracking-wide">Directors:</li>
                                    <li className="px-4 pb-3 pt-1">The Directors keep the Executives informed about what students in each program want</li>

                                    <li className="font-semibold tracking-wide">Non-Voting Members:</li>
                                    <li className="px-4 pb-3 pt-1">[Brief overview of the roles of Non-Voting Members]</li>
                                </ul>
                            </section>
                        </div>
                    </div>

                    <div id="membership-information">
                        <h2 className="py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Membership Information</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] items-center justify-start lg:justify-center">
                            <section className="px-4">
                                <p className="py-2">
                                    As students in our membership, you are able to make sure we are doing what you want us to be doing. Contact us with event ideas,
                                    new services you want offered and criticisms or complaints that you have. If you see that we are not following our Constitution,
                                    By-Laws or other policies (<a href="#governance-policies">below</a>) you are the ones that can call us out for that. Attend our Board Meetings (email <a href="mailto:vp.operations@usstm.ca">vp.operations@usstm.ca</a> to attend) and come to General Meetings.
                                </p>
                                <p className="pb-2">
                                    Our board also has several non-voting members and each executive overseas at least one committee. A chairperson is also hired
                                    to facilitate our meetings using Robart&apos;s Rules of Order and they are assisted by the Secretary who takes meeting minutes. We are
                                    also supported by a full-time staff person who works in the Dean&apos;s Office. Their position is the Manager of Student Relations and
                                    Development and they work to support all students with their extra-curricular development.
                                </p>
                                <p className="pb-2">

                                </p>
                                <p className="pb-2">
                                    For information on applying to the USSTM for funding, please visit our <Link href="/finances/budget">Budget Page</Link>. More information
                                    regarding the previous year&apos;s budget can be found in the following links:
                                </p>
                            </section>
                        </div>
                    </div>

                    <div id="meeting-information">
                        <h2 className="py-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">General Meetings Information</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] items-center justify-start lg:justify-center">
                            <section className="px-4">
                                <p className="py-2">
                                    The USSTM has two general meetings (at minimum) each year, typically taking place in the middle of each semester. At these meetings, all
                                    science students are invited to attend and raise issues and vote on things. You can submit motions to the VP Operations up to 7 days prior to
                                    the General Meeting. General meetings must be communicated to the membership at least 15 days before the date of it.
                                </p>
                                <p className="py-2">
                                    Documents used for the General Meetings are the following: the Constitution, By-Laws, Financial Policies. Refer to the last updated versions of the
                                    documents located in the Governing Documents section of this page. Any motions discussed in the meeting may use any of these documents as reference.
                                </p>
                                <p className="py-2">
                                    For more information about General Meetings, please refer to our <Link href="/about/meetings">Meetings Page</Link>.
                                </p>
                            </section>
                        </div>
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