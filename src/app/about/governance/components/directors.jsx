export default function directors() {
    return (
        <div id="board-of-directors-overview">
            <h2 className="py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Board of Directors Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] items-center justify-start lg:justify-center">
                <section className="px-4">
                    <p className="py-2">
                        You, the students, elect all of these positions around February or March each year. We all work throughout the year to try and
                        benefit the students that we were elected to represent. We run events, provide services and have General Meetings with the
                        Membership at least twice a year.
                    </p>
                    <ul className="list-none">
                        <li className="font-semibold tracking-wide">President:</li>
                        <li className="px-4 pb-3 pt-1">
                        The President oversees the organization&apos;s operations, represents the USSTM in 
                        official capacities, and ensures the board fulfills its responsibilities.
                        </li>

                        <li className="font-semibold tracking-wide">Vice President:</li>
                        <li className="px-4 pb-3 pt-1">
                            <u>VP Operations</u>: Manages internal affairs, coordinates events and activities, and supports the President in executing their duties.<br></br>
                            <u>VP Finance</u>: Responsible for managing the organization&apos;s finances, budgeting, and financial planning.<br></br>
                            <u>VP Communications</u>: The VP Communications handles all internal and external communications, including social media, newsletters, and public relations.<br></br>
                            <u>VP Events</u>: Plans and executes events and activities for USSTM members, fostering a sense of community and engagement.<br></br>
                            <u>VP External</u>: External manages external partnerships and relationships, representing USSTM to external organizations and stakeholders.</li>
                        <li className="font-semibold tracking-wide">Directors:</li>
                        <li className="px-4 pb-3 pt-1">
                            <u>Department Directors</u>: Represent specific academic departments within the Faculty of Science, 
                        advocating for student interests and organizing department-specific events and initiatives.<br></br>
                        
                            <u>First-Year Representatives</u>: Represent the interests of first-year students, providing a voice for new students within the organization.
                        </li>

                        <li className="font-semibold tracking-wide">Non-Voting Members:</li>
                        <li className="px-4 pb-3 pt-1">[Brief overview of the roles of Non-Voting Members]</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}