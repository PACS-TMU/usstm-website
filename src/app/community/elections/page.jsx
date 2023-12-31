import "./elections.css";
import Image from 'next/image'

// REMINDER TO CHANGE ALL THE LINKS AS WE GET THE SITE UP AND RUNNING
// MAKE SURE TO UPDATE THE ANCHOR TAGS TO THE CORRECT LINKS
export default function Elections() {
    return (
        <div>
            <h1 id="title">Community <b>{'>'}</b> Elections</h1>
            <br />
            <section id="introduction">
                Each year, the Undergrad Science Society of Toronto Metropolitan (USSTM) conducts an election cycle to select the next Board of Directors. The 
                Board plays a pivotal role in steering the direction of USSTM and ensuring its continued success. The responsibilities of the USSTM team are 
                outlined in detail in the By-Laws and Constitution, 
                accessible at <a id="btext" href="https://www.rssonline.ca/about/governance/">rssonline.ca/governance</a>.
            </section>
            {/* Important Dates */}
            <div className="timeline">
                <div className="subtitle">
                    <h2>Timeline</h2>
                    <span>+</span>
                </div>
                <br />
                <div className="content">
                    <p id="imp">
                        {/* <Image id="exclamation-mark" src="/images/community/elections/impIco.png" alt="" width={40} height={40}/> */}
                        Info Sessions: All candidates should watch the info session recording. Important parts will be highlighted at the 
                        all-candidates meeting. If you cannot attend the All Candidates Meeting, you MUST contact
                        <a id="wtext" href="mailto:cro@rssonline.ca"> cro@rssonline.ca</a>.</p>
                    <section>
                        <br />
                        <ul className="no-dec-list">
                            <li>Our election process follows a well-defined timeline to ensure transparency and fairness. Here are the key milestones:</li>
                            <br />
                            <li><b>Nomination Period: First week of March</b></li>
                            <li>Open for at least 7 days</li>
                            <li>Submit your nominations in person or via email to <a href="mailto:cro@rssonline.ca">cro@rssonline.ca</a>.</li>
                            <br />
                            <li><b>Candidates Meeting: (announced within twenty-four (24) hours of the meeting)</b></li>
                            <li>Mandatory for all candidates or authorized representatives.</li>
                            <li>Overview of election rules/schedule and candidate roles.</li>
                            <br />
                            <li><b>Campaigning Period: (shortly after the closing of nominations)</b></li>
                            <li>Paperless campaigns.</li>
                            <li>Maximum spending limit: [$X].</li>
                            <br />
                            <li><b>Voting Days: Last 2 days of Campaigning Period</b></li>
                            <li>Online voting available during this period.</li>
                            <li>Campaigning allowed, with restrictions in certain areas.</li>
                            <br />
                            <li><b>Results Announcement: Date of AGM</b></li>
                            <li>Tallying process begins immediately after polls close.</li>
                            <li>Results sent to candidates first.</li>
                            <li>Public announcement via electronic and social media on the same day as AGM.</li>
                        </ul>
                        <br />
                        <div id="calendar">***CALENDAR GOES HERE***</div>
                        <br />
                        <p>INFO SESSION RECORDING:</p>
                        <ul className="move-right">
                            <li><a className="red-mark" href="">Click Here</a></li>
                            <li><a href="" className="red-mark">Slides</a></li>
                            <li>LIVE INFO SESSION: Thursday 02 March 2023, 12PM @ Science Lounge</li>
                        </ul>
                    </section>
                    <br />
                </div>
            </div>

            {/* Schedule Calendar */}
            <div className="calendar"></div>

            {/* Nomation Form */}
            <div className="eligibility-rules">
                <div className="subtitle">
                    <h2>Eligibility Rules</h2>
                    <span>+</span>
                </div>
                <div className="content">
                    <br />
                    <p>To run, you must complete <a className="red-mark" href="">this</a> nomination form before March 9th @4pm. Failure to 
                        do so properly may result in your candidacy not being deemed eligible. It is 
                        highly recommended that this is completed EARLY in the nomination period to 
                        allow for time to collect the required signatures after submission.
                        <br /><br />
                        If you wish to submit a scanned paper nomination, please find the 
                        form in the <a className="red-mark" href="">here</a>.
                    </p>
                </div>
                <br />
            </div>

            {/* About Elections */}
            <div className="about-elections">
                <div className="subtitle">
                    <h2>About Elections</h2>
                    <span>+</span>
                </div>
                <div className="content">
                    <br />
                    <p>
                        Elections are run by the Chief Returning Officer (Alessandro Cunsolo), who is 
                        appointed by the Board of Directors. The CRO can be reached at cro@rssonline.ca. 
                        Everyone who wants to run should attend an info session and MUST ATTEND the All 
                        Candidates Meeting. If you cannot attend either you MUST email cro@rssonline.ca 
                        at least 24 hours before. You may send someone in your place to the All Candidates 
                        meeting but you must tell the CRO (cro@rssonline.ca) who will be attending in your 
                        place 24 hours in advance.
                        <br /><br />
                        Please read the Election Policies that can be found here: Link to Election 
                        Procedures. It is your responsibility to know this document as well as the 
                        Constitution and By-Laws, especially if you are elected.
                    </p>
                </div>
            </div> 
            <br />
            
            <div className="campaigning-rules">
                <div className="subtitle">
                    <h2>Campaigning Rules</h2>
                    <span>+</span>
                </div>
                <div className="content">
                    <br />
                    <ul className="move-right">
                        <li>No campaigning in the Science Lounge (KHE223).</li>
                        <li>No campaigning within classrooms without faculty permission.</li>
                        <li>No campaigning in the Library or computer labs.</li>
                        <li>Campaigns must be paperless.</li>
                        <li>No printed posters allowed.</li>
                        <li>Banners are allowed but must be approved by the CRO and are posted by the Science Lounge (KHE 223)</li>
                    </ul>
                    <br />
                    <p>
                        Report any violations to the Chief Returning Officer (CRO) at cro@usstm.ca
                        Note: This is a general overvi ew. For detailed rules, refer to the comprehensive [Election Procedures Document].
                    </p>
                </div>
                <br />
            </div>

            {/*  */}
            <div className="join-non-elected-positions">
                <div className="subtitle">
                    <h2>Join Non-Elected Positions</h2>
                    <span>+</span>
                </div>
                <div className="content">
                    <br />
                    <p> If you{'\''}re considering applying to the USSTM but don{'\''}t want to be in an elected 
                        positions, we have tons of committee positions {'('}over 50{')'} that would great
                        for you! Apply here: TBD
                    </p>
                    <br />
                    <ul id="join-non-elected-positions-list">
                        <li>Academic Committee</li>
                        <li>Student Group Leadership Retreat Committee</li>
                        <li>Student Life Committee</li>
                        <li>Communications Committee</li>
                        <li>Marketing Committee</li>
                        <li>Finance Committee</li>
                        <li>Awards Committee</li>
                        <li>External Relations Committee</li>
                        <li>Operations Committee</li>
                        <li>Science Opportunity Fund Committee</li>
                    </ul>
                </div>
            </div>
            <br />
            <div className="past-election-results">
            <div className="subtitle">
                    <h2>Past Election Results</h2>
                    <span>+</span>
                </div>
                <div className="content">
                    <br />
                    <p>
                        2021/2022 Election Results: 
                        <a className="bottom-links" 
                            href="https://www.rssonline.ca/wp-content/uploads/2021/06/RSS-21_22-Election-Results.pdf">RSS 2021/2022 Election Results</a>
                        <br />
                        2020/2021 Election Results: 
                        <a className="bottom-links" 
                            href="https://www.rssonline.ca/wp-content/uploads/2020/04/2020-Election-Results-RSS.pdf">RSS 2020/2021 Election Results</a>
                        <br />
                        2019/2020 Election Results: 
                        <a className="bottom-links" 
                            href="https://www.rssonline.ca/wp-content/uploads/2020/02/2019-Election-Results.docx.pdf">RSS 2019/2020 Election Results</a>
                        <br />
                        Fall 2018 By-Election Results: 
                        <a className="bottom-links" 
                            href="https://www.rssonline.ca/wp-content/uploads/2018/10/By-Election-Results.pdf">RSS Fall 2018 By-Election Results</a>
                        <br />
                        2018/19 Election Results: 
                        <a className="bottom-links" 
                            href="https://www.rssonline.ca/wp-content/uploads/2018/06/RSS-Election-Results.pdf">RSS 2018/19 Election Results</a>
                    </p>
                </div>
            </div>
        </div>
    )
}