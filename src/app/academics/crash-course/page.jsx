import Header from "@/app/_components/general/header";

export default function CrashCourse() {
    return (
        <section>
            <Header title={`Crash Courses`} />
            <div className="main lg:text-lg">
                <div className="bg-highlight-blue rounded-sm shadow-md my-8">
                    <div className="intro w-full md:w-3/4 mx-auto grid gird-cols-1 md:grid-cols-[30%_30%_40%] justify-center items-center gap-5 py-24">
                        <h2 className="text-center p-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                            USSTM Academic Support - Crash Courses
                        </h2>
                        <hr className="hidden md:block border border-gray-400 rotate-90 w-full " />
                        <div className="px-4 md:px-0">
                            <p className="pt-2 text-highlight">
                                What are crash courses?
                            </p>
                            <p className="py-2 xl:text-xl">
                                The Undergrad Science Society of Toronto Metropolitan (USSTM) offers crash courses to help students prepare for their midterms and finals.
                                The crash courses are designed to help students review the material in a short amount of time. The courses are taught by
                                experienced students who have excelled in the course and are familiar with the material.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="content py-6">
                    <h2 className="py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Crash Course Schedule
                    </h2>
                    <iframe
                        src="https://embed.styledcalendar.com/#OjnFs0cdz4zbOtQiafzZ"
                        title="Styled Calendar"
                        className="styled-calendar-container w-[90%] mx-auto lg:w-full border border-gray-300 md:border-none h-[700px]"
                        data-cy="calendar-embed-iframe"
                    />
                    <script async type="module" src="https://embed.styledcalendar.comhttps://usstm.ca/assets/parent-window.js"></script>
                </div>
                <div className="content">
                    <h2 className="py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        How To Become a Crash Course Instructor
                    </h2>
                    <p className="py-2">
                        If you are interested in becoming a crash course instructor, please follow the steps below:
                    </p>
                    <ul className="py-2 list-disc mx-8 space-y-2">
                        <li>
                            Close to the beginning of the semester, the VP Academics will create a post on
                            the <a href="https://www.instagram.com/usstmacademics/" target="_blank">USSTM Academics Instagram</a> page
                            asking for crash course instructors.
                        </li>
                        <li>
                            The requirements to be a crash course tutor are as follows:
                            <ul className="py-2 list-disc mx-8 space-y-2">
                                <li>
                                    A final grade of A- or higher (GPA: 3.66+) in the course you want to teach.
                                </li>
                                <li>
                                    Previous tutoring experience.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Instructions on how to apply will be included in the post. Once you pass the interview process, you will be selected as a crash course instructor.
                        </li>
                    </ul>
                </div>
                <div className="outro">
                    <h2 className="py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Any Questions?
                    </h2>
                    <div className="px-4">
                        <p>
                            If you have any questions about crash courses, please feel free to contact the <a href="mailto:vp.academic@usstm.ca">VP Academics</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}