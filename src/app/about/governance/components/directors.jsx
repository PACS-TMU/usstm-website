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
                            <u>VP Operations</u>: Manages internal affairs, coordinates events and activities, and supports the President in executing their duties.<br />
                            <u>VP Finance</u>: Responsible for managing the organization&apos;s finances, budgeting, and financial planning.<br />
                            <u>VP Communications</u>: Handles all internal and external communications, including social media, newsletters, and public relations.<br />
                            <u>VP Student Life</u>: Plans and executes events and activities for USSTM members, fostering a sense of community and engagement.<br />
                            <u>VP External</u>: External manages external partnerships and relationships, representing USSTM to external organizations and stakeholders.<br />
                            <u>VP Equity</u>: Promotes diversity, inclusion, and equity within the organization, advocating for marginalized groups and implementing initiatives to ensure a supportive environment for all members.<br />
                            <u>VP Academics</u>: Focuses on academic affairs, working to enhance the academic experience of members by organizing educational events, workshops, and initiatives related to their studies.
                            </li>
                        <li className="font-semibold tracking-wide">Directors:</li>
                        <li className="px-4 pb-3 pt-1">
                            <u>Department Directors</u>: Represent specific academic departments within the Faculty of Science, 
                        advocating for student interests and organizing department-specific events and initiatives.<br></br>
                        
                            <u>First-Year Representatives</u>: Represent the interests of first-year students, providing a voice for new students within the organization.
                        </li>

                        <li className="font-semibold tracking-wide">Non-Voting Members:</li>
                        <li className="px-4 pb-3 pt-1">
                            <u>Chairperson</u>: Presides over meetings, ensuring that discussions are conducted according to the organization&apos;s rules and that all members have an opportunity to voice their opinions.<br />
                            <u>Secretary</u>: Maintains records of meetings and official correspondence, ensuring that organizational documents are accurate and up-to-date.<br />
                            <u>Manager</u>: Oversees the day-to-day operations of the organization, ensuring that tasks are completed efficiently and that resources are managed effectively.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}