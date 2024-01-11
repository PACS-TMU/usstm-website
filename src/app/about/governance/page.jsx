import "./governance.css"
import Link from 'next/link'

export default function Governance() {
    // These are all the links under the membership information section
    // Please update the links here if they are changed on the website
    const linkStyle = "text-red-600 underline"
    const membership_information_links = [
        {
            title: "2022 - 2023 Budget",
            href: "https://www.rssonline.ca/wp-content/uploads/2023/06/Final-2022-2023-Budget.xlsx.pdf",
            target: "_blank",
            description: "Click Here",
        },
        {
            title: "2021 - 2022 Budget",
            href: "https://www.rssonline.ca/wp-content/uploads/2023/06/2021_2022-RSS-Budget.pdf",
            target: "_blank",
            description: "Click Here",
        },
        {
            title: "2020 - 2021 Budget",
            href: "https://www.rssonline.ca/wp-content/uploads/2023/06/2020_2021-RSS-Budget-Final.pdf",
            target: "_blank",
            description: "Click Here",
        },
        {
            title: "2019 - 2020 Budget",
            href: "https://www.rssonline.ca/wp-content/uploads/2023/06/2019_2020-RSS-Budget-Final.pdf",
            target: "_blank",
            description: "Click Here",
        }
    ]
    return (
        <main className="space-y-20">
            <section className="governance-page lg:text-lg">
                <div id='title' className="banner w-100% bg-highlight-dark my-4">
                    <h1 className="text-5xl main p-6 text-background tracking-wide">Governance</h1>
                </div>
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
                                    By-Laws or other policies (below) you are the ones that can call us out for that. Attend our Board Meetings (email 
                                    vp.operations@rssonline.ca to attend) and come to General Meetings.
                                </p>
                                <p className="pb-2">
                                    Our board also has several non-voting members and each executive overseas at least one committee. A chairperson is also hired 
                                    to facilitate our meetings using Robart’s Rules of Order and they are assisted by the Secretary who takes meeting minutes. We are 
                                    also supported by a full-time staff person who works in the Dean’s Office. Their position is the Manager of Student Relations and 
                                    Development and they work to support all students with their extra-curricular development.
                                </p>
                                <p className="pb-2">

                                </p>
                                <p className="pb-2">
                                    For information on applying to the USSTM for funding, please visit: rssonline.ca/funding
                                    The 2023-2024 is currently in the works. It is being created with he Board of Directors and the VP Finance. More Information 
                                    regarding the previous year’s budget can be found in the following links:
                                </p>
                                <p className="pt-2 pb-3">
                                    2023 - 2024 Budget: In Progress
                                </p>
                                <ul className="list-none">
                                    <li>Last Updated: June 2023</li>
                                    {
                                        membership_information_links.map(
                                            link=>(
                                                <li key={link.title}>
                                                    {link.title}: <Link target={link.target} href={link.href} className={linkStyle}>{link.description}</Link>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </section>
                        </div>
                    </div>
                    
                    <div id="meeting-information">
                        <h2 className="py-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Meeting Information</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] items-center justify-start lg:justify-center">
                            <section className="px-4">
                                <p className="py-2">
                                    The USSTM has two general meetings (at minimum) each year, typically taking place in the middle of each semester. At these meetings, all 
                                    science students are invited to attend and raise issues and vote on things. You can submit motions to the VP Operations up to 7 days prior to 
                                    the General Meeting. General meetings must be communicated to the membership at least 15 days before the date of it.
                                </p>
                                <p className="py-2">
                                    Motions have a specific format that they must be submitted in, you can see an example below. If you send a motion in that is not in the 
                                    proper format, our VP Operations may be in contact with you to work on fixing it.
                                </p>
                                <ul className="list-none py-2">
                                    <li>Whereas state your reasoning here</li>
                                    <li>Whereas state your further reasoning here</li>
                                    <li>Be it resolved that state your proposed solution here</li>
                                    <li>Be it further resolved that state further proposed solutions here</li>
                                </ul>
                                <p className="py-2">
                                    Note: you can use as many “whereas” and “be it resolved that” as you need to write out your entire motion. If you want help writing your motion, please contact 
                                    our VP Operations at vp.operations@rssonline.ca
                                </p>
                                <p className="py-2">
                                    {/* UPDATE THE SAGM AGENDA HERE */}
                                    SAGM 2023 Agenda: coming soon.
                                </p>
                                <p className="py-2">
                                    Documents used for the General Meetings are the following: the Constitution, By-Laws, Financial Policies. Refer to the last updated versions of the 
                                    documents located in the Governing Documents section of this page. Any motions discussed in the meeting may use any of these documents as reference.
                                </p>
                            </section>
                        </div>
                    </div>
                    <div id='governance-policies'>
                        <h2 className="py-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Governance Policies</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] items-center justify-start lg:justify-center">
                            <section className="px-4">    
                                <ul className="move-right">
                                    <li>To ensure the highest standards of operation, we adhere to a set of governance policies.</li>
                                    <div className="pl-4">
                                        <li className="list-disc">USSTM Constitution</li>
                                        <li className="list-disc">USSTM By-Laws</li>
                                        <li className="list-disc">USSTM Financial Policies</li>
                                        <li className="list-disc">USSTM Election Procedures</li>
                                    </div>
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div className="pt-5">
                        <p>
                        Your Voice Matters: As members of our society, your input is invaluable. Reach out to us with event ideas, suggestions for new services, or any 
                        criticisms or complaints. You are the watchdogs for USSTM, ensuring we adhere to our Constitution, By-Laws, and other policies. If you have any 
                        concerns about our policies, please reach out <Link className={linkStyle} href="mailto:vp.operations@usstm.ca">(vp.operations@usstm.ca)</Link>.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}