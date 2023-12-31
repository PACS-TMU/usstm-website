import "./elections.css";
import Link from 'next/link'

// REMINDER TO CHANGE ALL THE LINKS AS WE GET THE SITE UP AND RUNNING
// MAKE SURE TO UPDATE THE ANCHOR TAGS TO THE CORRECT LINKS
export default function Elections() {
    return (
        <div className="main">
            <h1 id="title">Community <b>{'>'}</b> Elections</h1>
            <br />
            <section id="introduction">
                <p className="block py-4">
                    Each year, the Undergrad Science Society of Toronto Metropolitan (USSTM) conducts an election cycle to select the next Board of Directors. The
                    Board plays a pivotal role in steering the direction of USSTM and ensuring its continued success. The responsibilities of the USSTM team are
                    outlined in detail in the By-Laws and Constitution, accessible at our <Link id="btext" href="/about/governance/">governance page</Link>.
                </p>
                <p>
                    Elections are run by the Chief Returning Officer, who is
                    appointed by the Board of Directors. The CRO can be reached at cro@rssonline.ca.
                    Everyone who wants to run should attend an info session and MUST ATTEND the All
                    Candidates Meeting. If you cannot attend either you MUST email cro@rssonline.ca
                    at least 24 hours before. You may send someone in your place to the All Candidates
                    meeting but you must tell the CRO (cro@usstm.ca) who will be attending in your
                    place 24 hours in advance.
                    Please read the Election Policies that can be found here: Link to Election
                    Procedures. It is your responsibility to know this document as well as the
                    Constitution and By-Laws, especially if you are elected.
                </p>
            </section>
            {/* Important Dates */}
            <div className="timeline">
                <div className="subtitle">
                    <h2>Timeline</h2>
                </div>
                <br />
                <div className="content">
                    <section>
                        <br />
                        <ul className="list-none">
                            <li>Our election process follows a well-defined timeline to ensure transparency and fairness. Here are the key milestones:</li>
                            <br />
                            <li><b>Nomination Period: First week of March</b></li>
                            <li>Open for at least 7 days</li>
                            <li>Submit your nominations in person or via email to <a href="mailto:cro@usstm.ca">cro@usstm.ca</a>.</li>
                            <li><b>Candidates Meeting: (announced within twenty-four (24) hours of the meeting)</b></li>
                            <li>Mandatory for all candidates or authorized representatives.</li>
                            <li>Overview of election rules/schedule and candidate roles.</li>
                            <li><b>Campaigning Period: (shortly after the closing of nominations)</b></li>
                            <li>Paperless campaigns.</li>
                            <li>Maximum spending limit: [$X].</li>
                            <li><b>Voting Days: Last 2 days of Campaigning Period</b></li>
                            <li>Online voting available during this period.</li>
                            <li>Campaigning allowed, with restrictions in certain areas.</li>
                            <li><b>Results Announcement: Date of AGM</b></li>
                            <li>Tallying process begins immediately after polls close.</li>
                            <li>Results sent to candidates first.</li>
                            <li>Public announcement via electronic and social media on the same day as AGM.</li>
                        </ul>
                    </section>
                </div>
            </div>

            {/* Nomation Form */}
            <div className="eligibility-rules">
                <div className="subtitle">
                    <h2>Eligibility Rules</h2>
                </div>
                <div className="content">
                    <p>To run, you must complete <a className="red-mark" href="">this</a> nomination form before March 9th @4pm. Failure to
                        do so properly may result in your candidacy not being deemed eligible. It is
                        highly recommended that this is completed EARLY in the nomination period to
                        allow for time to collect the required signatures after submission.
                        If you wish to submit a scanned paper nomination, please find the
                        form in the <a className="red-mark" href="">here</a>.
                    </p>
                </div>
            </div>

            <div className="campaigning-rules">
                <div className="subtitle">
                    <h2>Campaigning Rules</h2>
                </div>
                <div className="content">
                    <ul className="move-right">
                        <li>No campaigning in the Science Lounge (KHE223).</li>
                        <li>No campaigning within classrooms without faculty permission.</li>
                        <li>No campaigning in the Library or computer labs.</li>
                        <li>Campaigns must be paperless.</li>
                        <li>No printed posters allowed.</li>
                        <li>Banners are allowed but must be approved by the CRO and are posted by the Science Lounge (KHE 223)</li>
                    </ul>
                    <p>
                        Report any violations to the Chief Returning Officer (CRO) at cro@usstm.ca
                        Note: This is a general overvi ew. For detailed rules, refer to the comprehensive [Election Procedures Document].
                    </p>
                </div>
            </div>

            <div className="join-non-elected-positions">
                <div className="subtitle">
                    <h2>Join Non-Elected Positions</h2>
                </div>
                <div className="content">
                    <p>
                        If you&apos;re considering applying to the USSTM but don&apos;t want to be in an elected
                        position, we have several committee positions that would be great
                        for you! For more information, visit our <Link href="/about/your-team/">Your Team page</Link>.
                    </p>
                </div>
            </div>

            <div className="past-election-results">
                <div className="subtitle">
                    <h2>Past Election Results</h2>
                </div>
                <div className="content">
                    <p>
                        2021/2022 Election Results:
                        <a className="bottom-links"
                            href="https://www.rssonline.ca/wp-content/uploads/2021/06/RSS-21_22-Election-Results.pdf">RSS 2021/2022 Election Results</a>
                        2020/2021 Election Results:
                        <a className="bottom-links"
                            href="https://www.rssonline.ca/wp-content/uploads/2020/04/2020-Election-Results-RSS.pdf">RSS 2020/2021 Election Results</a>
                        2019/2020 Election Results:
                        <a className="bottom-links"
                            href="https://www.rssonline.ca/wp-content/uploads/2020/02/2019-Election-Results.docx.pdf">RSS 2019/2020 Election Results</a>
                        Fall 2018 By-Election Results:
                        <a className="bottom-links"
                            href="https://www.rssonline.ca/wp-content/uploads/2018/10/By-Election-Results.pdf">RSS Fall 2018 By-Election Results</a>
                        2018/19 Election Results:
                        <a className="bottom-links"
                            href="https://www.rssonline.ca/wp-content/uploads/2018/06/RSS-Election-Results.pdf">RSS 2018/19 Election Results</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
