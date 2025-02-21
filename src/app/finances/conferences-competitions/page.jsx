import Header from "@/app/_components/general/header";

export default function Budget() {
    return (
        <section>
            <Header title={`Conferences & Competitions`} />
            <div className="main lg:text-lg">
                <p className="p-3">
                    TMU science students can request funding for relevant conferences and events that contribute to their academic and professional growth. Learn more about the process, eligibility, and submission details below.
                </p>

                <div className="intro md:w-4/5 lg:w-3/4 mx-auto bg-highlight-blue rounded-sm shadow-md flex flex-col py-8 justify-center items-center">
                    <h3 className="my-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Eligibility Criteria
                    </h3>
                    <div className="my-3 mx-6 lg:w-1/2">
                        To qualify for funding, you must be a TMU science student, and the conference or event must:
                        <ul className="list-disc list-inside text-left mt-2">
                            <li>Be relevant to the science community.</li>
                            <li>Contribute to your growth and experience as a TMU science student.</li>
                        </ul>
                    </div>

                    <hr className="border border-gray-400 lg:w-3/4 w-4/5 mt-4 mb-5 mx-auto" />

                    <h3 className="my-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Application Process
                    </h3>
                    <div className="my-3 mx-6 lg:w-1/2">
                        To apply for funding, follow these steps:
                        <ol className="list-decimal list-inside text-left mt-2">
                            <li><strong>Budget Preparation:</strong> Prepare a detailed budget breakdown of your expenses and specify which portions you are requesting USSTM to fund.</li>
                            <li><strong>Pitch Submission:</strong> Record a short pitch video explaining your budget breakdown and motivation for attending the event.</li>
                            <li><strong>Committee Review:</strong> Your request will be reviewed within a maximum of 3 weeks. Possible outcomes include approval, conditional approval, or rejection (rare).</li>
                            <li><strong>Approval & Next Steps:</strong> If approved, you will work with our student manager on bookings, tickets, and other logistics.</li>
                        </ol>
                    </div>

                    <hr className="border border-gray-400 lg:w-3/4 w-4/5 mt-4 mb-5 mx-auto" />

                    <h3 className="my-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Post-Event Requirement
                    </h3>
                    <p className="my-3 mx-6 lg:w-1/2">
                        Upon return from the conference or event, you must post about your experience on a social media platform of your choice (the platform must have a USSTM account) and tag USSTM.
                    </p>
                </div>

                <div className="budgets my-4 lg:my-6 py-2">
                    <h2 className="pb-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Submit Your Request
                    </h2>
                    <p className="my-3">
                        If you&apos;re ready to proceed, submit your budget breakdown and pitch using the link below:
                    </p>
                    <div className="flex items-center justify-center">
                        <button
                            className="rounded-md text-lg lg:text-xl xl:text-2xl bg-highlight-dark p-3 my-4 text-white font-semibold hover:scale-105 ease-in-out duration-300"
                            id="submit-request-button"
                            aria-label="Submit Request"
                        >
                            <a
                                href="https://form.asana.com/?k=8H38-9haUFvc22_DYYPtTw&d=1207498115170020"
                                target="_blank"
                            >
                                Submit Request
                            </a>
                        </button>
                    </div>

                    <p className="my-3">
                        For any questions, feel free to reach out to our Vice-President
                        Finance at <a href="mailto:vp.finance@usstm.ca">vp.finance@usstm.ca</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}
