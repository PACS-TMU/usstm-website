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
                                    For information on applying to the USSTM for funding, please visit our <Link href="">Funding Page (update redirect)</Link>. More information
                                    regarding the previous year&apos;s budget can be found in the following links:
                                </p>
                                <ul className="list-none py-2 px-4">
                                    <li>
                                        2023 - 2024 Budget: <span className="italic">In Progress</span>
                                    </li>
                                    {
                                        membership_information_links.map(
                                            link => (
                                                <li key={link.title}>
                                                    {link.title}: <Link target={link.target} href={link.href}>{link.description}</Link>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                                <p className="italic">Last Updated: June 2023</p>
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
                                    Motions have a specific format that they must be submitted in, you can see an example below:
                                </p>
                                <p className="font-bold">This is a very confusing example, make it better</p>
                                <ul className="list-none py-2 px-4">
                                    <li className="py-1">Whereas state your reasoning here</li>
                                    <li className="py-1">Whereas state your further reasoning here</li>
                                    <li className="py-1">Be it resolved that state your proposed solution here</li>
                                    <li className="py-1">Be it further resolved that state further proposed solutions here</li>
                                </ul>
                                <p className="py-2">
                                    Note: you can use as many “whereas” and “be it resolved that” as you need to write out your entire motion. If you want help writing your motion, please contact
                                    our VP Operations at <a href="mailto:vp.operation@usstm.ca">vp.operations@usstm.ca</a>. If you send a motion in that is not in the
                                    proper format, our VP Operations may be in contact with you to work on fixing it.
                                </p>
                                <p className="py-2">
                                    Documents used for the General Meetings are the following: the Constitution, By-Laws, Financial Policies. Refer to the last updated versions of the
                                    documents located in the Governing Documents section of this page. Any motions discussed in the meeting may use any of these documents as reference.
                                </p>
                                <p className="py-2">
                                    Agendas/Meeting Minutes for general meetings are posted below:
                                </p>
                                <p className="py-2 px-4">
                                    {/* UPDATE THE SAGM AGENDA HERE */}
                                    SAGM 2023 Agenda: <span className="italic">coming soon</span>.
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