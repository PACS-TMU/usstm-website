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
                            The President is in charge of overseeing the seven (7) VPs, all together
                            they make up the executive team
                        </li>

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
    )
}