"use client";
import Header from "@/app/_components/general/header";
import QuestionTable from "@/app/academics/feedback-form/_components/question-table";
import { useState, useEffect } from "react";
import "./feedback-form.css";
import { useContentItem } from "@/lib/use-content";

export default function Feedback() {
    const { data } = useContentItem('academics', 'feedback-form');
    const [assess, courseContent] = data?.content?.form || [];
    const assessQuestions = assess?.questions || [];
    const courseQuestions = courseContent?.questions || [];

    const requiredStar = <span className="text-red-500">*</span>;

    const pageHeading = (
        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
            <p className="py-2 font-medium text-base">Feedback Form - {requiredStar} <span className="text-red-500">indicates required question</span></p>
        </div>
    );

    return (
        <section className="lg:text-lg">
            <Header title={`Academic Feedback Form`} />
            <div className="main">
                <p className="pb-4 text-left w-full max-w-7xl mx-auto">
                    This form is for the USSTM to gather information and experiences from students who believe their course or professor was unfair, unhelpful or
                    if someone was mistreated by an instructor in a course.
                </p>
                <p className="pb-4 text-left w-full max-w-7xl mx-auto">
                    Please let us keep this professional and constructive, the purpose is to give ANONYMOUS
                    feedback to the professor and the faculty so we can work together to improve our learning environment!
                </p>
                <p className="pb-4 text-left w-full max-w-7xl mx-auto">
                    Filling out this form does not mean that
                    any issues will be solved, however we promise that we will do our best to address them.
                </p>
                <p className="pb-4 text-left w-full max-w-7xl mx-auto">
                    If you have any questions or concerns, please reach out to our VP Academic
                    at <a href="mailto:vp.academic@usstm.ca" target="_blank">vp.academic@usstm.ca</a>.
                </p>

                <form
                    id="my-form"
                    method="POST"
                    action="https://script.google.com/macros/s/AKfycbzW5VEPq6ZtTdjLT_-l4dIrHblh5mjrY2-SG4shyiBO5NtLlGBgbC1tQ7DifjryxdWyxA/exec"
                    onSubmit={e => {
                        document.getElementById('submit-button').innerHTML = 'Submitting...'
                        e.preventDefault();
                        setTimeout(() => {
                            const form = document.getElementById('my-form');
                            const data = new FormData(form);
                            const action = e.target.action;
                            document.getElementById('my-form').reset();
                            document.getElementById('submit-button').innerHTML = 'Submitted';
                            document.getElementById('submit-button').disabled = true;
                            document.getElementById('submit-button').style.backgroundColor = '#E5E5E5';
                            try {
                                fetch(action, {
                                    method: 'POST',
                                    body: data,
                                })
                            }
                            catch (error) {
                                console.error("Couldn't submit feedback form", error);
                            }
                        }, 1000);
                    }}
                    className="flex flex-col justify-center items-center pt-4 w-full max-w-3xl mx-auto"
                >
                    {pageHeading}
                    <div className="page w-full flex flex-col justify-center items-center">
                        <p className="lg:text-xl text-lg pt-4 text-left font-semibold w-full max-w-7xl mx-auto">
                            General Information
                        </p>
                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-2">Full Name {requiredStar}</p>
                            <input
                                id="name"
                                className='w-1/2 px-1 text-base m-4 h-9 border-b border-gray-300 placeholder-gray-500'
                                maxLength="50"
                                name="Name"
                                type="text"
                                placeholder="Your answer"
                                autoComplete="name"
                                pattern="[A-Za-z ]+"
                                onKeyDown={(e) => {
                                    var allowed = new RegExp("^[a-zA-Z ]+$|Backspace|Delete|ArrowLeft|ArrowRight|ArrowUp|ArrowDown|Tab|Enter");
                                    allowed.test(e.key) ? "" : e.preventDefault()
                                }}
                                required
                            />
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-2">Email {requiredStar}</p>
                            <input
                                id="email"
                                className='px-2 w-1/2 text-base m-4 h-9 border-b border-gray-300 placeholder-gray-500'
                                name="Email Address"
                                type="email"
                                placeholder="Your answer"
                                autoComplete="email"
                                onKeyDown={(e) => { e.key === " " ? e.preventDefault() : "" }}
                                required
                            />
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-2">TMU Email {requiredStar}</p>
                            <input
                                id="tmu-email"
                                className='px-2 w-1/2 text-base m-4 h-9 border-b border-gray-300 placeholder-gray-500'
                                name="TMU Email"
                                type="email"
                                placeholder="Your answer"
                                autoComplete="email"
                                pattern=".+@torontomu\.ca"
                                onKeyDown={(e) => { e.key === " " ? e.preventDefault() : "" }}
                                required
                            />
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-2">Date of Submission {requiredStar}</p>
                            <input
                                id="date"
                                className="px-2 m-4 h-9 border-b border-gray-300 text-gray-500"
                                name="Date of Submission"
                                type="date"
                                pattern="\d{4}-\d{2}-\d{2}"
                                required
                            />
                        </div>


                        <div className="flex flex-col text-left w-full border border-gray-300 p-2 bg-[#FDFDFD] rounded-md">
                            <p className="m-4 mb-0">Program {requiredStar}</p>
                            <div className="flex flex-col w-full text-base py-1 m-4">
                                <div className="pb-4">
                                    <input type="radio" id="bio" name="Program" value="Biology" required />
                                    <label className="px-2" htmlFor="bio">Biology</label>
                                </div>
                                <div className="pb-4">
                                    <input type="radio" id="biomed" name="Program" value="Biomedical Sciences" required />
                                    <label className="px-2" htmlFor="biomed">Biomedical Sciences</label>
                                </div>
                                <div className="pb-4">
                                    <input type="radio" id="chem" name="Program" value="Chemistry" required />
                                    <label className="px-2" htmlFor="chem">Chemistry</label>
                                </div>
                                <div className="pb-4">
                                    <input type="radio" id="cs" name="Program" value="Computer Science" required />
                                    <label className="px-2" htmlFor="cs">Computer Science</label>
                                </div>
                                <div className="pb-4">
                                    <input type="radio" id="fin-math" name="Program" value="Financial Mathematics" required />
                                    <label className="px-2" htmlFor="fin-math">Financial Mathematics</label>
                                </div>
                                <div className="pb-4">
                                    <input type="radio" id="math-apps" name="Program" value="Mathematics and Its Applications" required />
                                    <label className="px-2" htmlFor="math-apps">Mathematics and Its Applications</label>
                                </div>
                                <div className="pb-4">
                                    <input type="radio" id="medphys" name="Program" value="Medical Physics" required />
                                    <label className="px-2" htmlFor="medphys">Medical Physics</label>
                                </div>
                                <div className="pb-4">
                                    <input type="radio" id="undeclared" name="Program" value="Undeclared Science" required />
                                    <label className="px-2" htmlFor="undeclared">Undeclared Science</label>
                                </div>
                            </div>
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-2">
                                Do you acknowledge that this form is not to complain about a bad mark, or that a course was hard. This is to address issues with unfair teaching,
                                evaluation or treatment of students. {requiredStar}
                            </p>
                            <div className="flex flex-col w-full text-base py-1 m-4">
                                <div className="pb-4">
                                    <input
                                        type="radio"
                                        id="yes"
                                        name="Do you acknowledge that this form is not to complain about a bad mark, or that a course was hard. This is to address issues with unfair teaching, evaluation or treatment of students."
                                        value="Yes"
                                        required
                                    />
                                    <label className="px-2" htmlFor="yes">Yes</label>
                                </div>
                                <div className="pb-4">
                                    <input
                                        type="radio"
                                        id="no"
                                        name="Do you acknowledge that this form is not to complain about a bad mark, or that a course was hard. This is to address issues with unfair teaching, evaluation or treatment of students."
                                        value="No"
                                        required
                                    />
                                    <label className="px-2" htmlFor="no">No</label>
                                </div>
                            </div>
                        </div>

                        <p className="lg:text-xl text-lg pt-4 text-left font-semibold w-full max-w-7xl mx-auto">
                            Course Information
                        </p>
                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-2">Course Code and Name {requiredStar}</p>
                            <input
                                id="course-name"
                                className='px-2 w-1/2 text-base m-4 h-9 border-b border-gray-300 placeholder-gray-500'
                                maxLength="50"
                                name="Course Code and Name"
                                type="text"
                                placeholder="Your answer"
                                autoComplete="none"
                                pattern="[A-Za-z0-9 ]+"
                                onKeyDown={(e) => {
                                    var allowed = new RegExp("^[a-zA-Z0-9 ]+$|Backspace|Delete|ArrowLeft|ArrowRight|ArrowUp|ArrowDown|Tab|Enter");
                                    allowed.test(e.key) ? "" : e.preventDefault()
                                }}
                                required
                            />
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-2">Instructor Name {requiredStar}</p>
                            <input
                                id="instructor-name"
                                className='px-2 w-1/2 text-base m-4 h-9 border-b border-gray-300 placeholder-gray-500'
                                maxLength="50"
                                name="Instructor Name"
                                type="text"
                                placeholder="Your answer"
                                autoComplete="name"
                                pattern="[A-Za-z ]+"
                                onKeyDown={(e) => {
                                    var allowed = new RegExp("^[a-zA-Z ]+$|Backspace|Delete|ArrowLeft|ArrowRight|ArrowUp|ArrowDown|Tab|Enter");
                                    allowed.test(e.key) ? "" : e.preventDefault()
                                }}
                                required
                            />
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-2">
                                How is the course delivered? {requiredStar}
                            </p>
                            <div className="flex flex-col w-full text-base py-1 m-4">
                                <div className="pb-4">
                                    <input
                                        type="radio"
                                        id="in-person"
                                        name="How is the course delivered?"
                                        value="In-person"
                                        required
                                    />
                                    <label className="px-2" htmlFor="in-person">In-person</label>
                                </div>
                                <div className="pb-4">
                                    <input
                                        type="radio"
                                        id="hybrid"
                                        name="How is the course delivered?"
                                        value="Hybrid (in-person AND online)"
                                        required
                                    />
                                    <label className="px-2" htmlFor="hybrid">Hybrid (in-person AND online)</label>
                                </div>
                                <div className="pb-4">
                                    <input
                                        type="radio"
                                        id="online"
                                        name="How is the course delivered?"
                                        value="Online"
                                        required
                                    />
                                    <label className="px-2" htmlFor="online">Online</label>
                                </div>
                            </div>
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-1">
                                Does your feedback reflect the experiences of your peers? {requiredStar}
                            </p>
                            <p className="text-sm lg:text-base italic mx-4 mt-1 mb-2">
                                Please keep in mind that we recommend individual student feedback or feedback unique to one student be brought up by the student with the <b>professor</b>.
                            </p>
                            <div className="flex flex-col w-full text-base py-1 m-4">
                                <div className="pb-4">
                                    <input
                                        type="radio"
                                        id="yes-reflection"
                                        name="Does your feedback reflect the experiences of your peers?"
                                        value="Yes, my peers have the same feedback"
                                        required
                                    />
                                    <label className="px-2" htmlFor="yes-reflection">Yes, my peers have the same feedback</label>
                                </div>
                                <div className="pb-4">
                                    <input
                                        type="radio"
                                        id="no-reflection"
                                        name="Does your feedback reflect the experiences of your peers?"
                                        value="No, this feedback is only about myself"
                                        required
                                    />
                                    <label className="px-2" htmlFor="no-reflection">No, this feedback is only about myself</label>
                                </div>
                            </div>
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-1">
                                What part of the course are you giving feedback on? {requiredStar}
                            </p>
                            <div className="flex flex-col w-full text-base py-1 m-4">
                                <div className="pb-4">
                                    <input
                                        type="radio"
                                        id="assessments-grading"
                                        name="What part of the course are you giving feedback on?"
                                        value="Assessments and grading"
                                        required
                                    />
                                    <label className="px-2" htmlFor="assessments-grading">Assessments and grading</label>
                                </div>
                                <div className="pb-4">
                                    <input
                                        type="radio"
                                        id="content-delivery"
                                        name="What part of the course are you giving feedback on?"
                                        value="Course content and delivery"
                                        required
                                    />
                                    <label className="px-2" htmlFor="content-delivery">Course content and delivery</label>
                                </div>
                            </div>
                        </div>

                        <p className="lg:text-xl text-lg pt-4 text-left font-semibold w-full max-w-7xl mx-auto">
                            Assessments and Grading
                        </p>
                        <QuestionTable sectionObject={assess} questionArray={assessQuestions} requiredStar={requiredStar} />

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-1">
                                Describe your feedback regarding course content (feel free to elaborate on the choices above). {requiredStar}
                            </p>
                            <p className="text-sm lg:text-base italic mx-4 mt-1 mb-2">
                                Please be as specific as possible as this will help  USSTM and the relevant course union address your feedback effectively.
                            </p>
                            <textarea
                                className="w-[95%] h-32 lg:h-48 text-base m-4 p-2 border border-gray-300 rounded-sm placeholder-gray-500 text-wrap break-normal"
                                type="text"
                                id="feedback-assessment"
                                maxLength="500"
                                name="Describe your feedback regarding course content (feel free to elaborate on the choices above)."
                                placeholder="Please enter your feedback here"
                                required
                            />
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-1">
                                What is one positive aspect of the course/instructor that they should continue?
                            </p>
                            <p className="text-sm lg:text-base italic mx-4 mt-1 mb-2">
                                The objective of the feedback form is to deliver both positive and constructive feedback to the professor.
                            </p>
                            <textarea
                                className="w-[95%] h-32 lg:h-48 text-base m-4 p-2 border border-gray-300 rounded-sm placeholder-gray-500 text-wrap break-normal"
                                type="text"
                                id="positive-aspect-assessment"
                                maxLength="500"
                                name="What is one positive aspect of the course/instructor that they should continue?"
                                placeholder="Please enter your optional response here"
                            />
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-1">
                                Do you have additional feedback concerning course content and delivery?
                            </p>
                            <div className="flex flex-col w-full text-base py-1 m-4">
                                <div className="pb-4">
                                    <input
                                        type="radio"
                                        id="yes-more-feedback"
                                        name="Do you have additional feedback concerning course content and delivery?"
                                        value="Yes"
                                    />
                                    <label className="px-2" htmlFor="yes-more-feedback">Yes</label>
                                </div>
                                <div className="pb-4">
                                    <input
                                        type="radio"
                                        id="no-more-feedback"
                                        name="Do you have additional feedback concerning course content and delivery?"
                                        value="No"
                                    />
                                    <label className="px-2" htmlFor="no-more-feedback">No</label>
                                </div>
                            </div>
                        </div>

                        <p className="lg:text-xl text-lg pt-4 text-left font-semibold w-full max-w-7xl mx-auto">
                            Course Content and Delivery
                        </p>
                        <QuestionTable sectionObject={courseContent} questionArray={courseQuestions} requiredStar={requiredStar} />

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-1">
                                Describe your feedback regarding course content (feel free to elaborate on the choices above). {requiredStar}
                            </p>
                            <p className="text-sm lg:text-base italic mx-4 mt-1 mb-2">
                                Please be as specific as possible as this will help USSTM and the relevant course union address your feedback effectively.
                            </p>
                            <textarea
                                className="w-[95%] h-32 lg:h-48 text-base m-4 p-2 border border-gray-300 rounded-sm placeholder-gray-500 text-wrap break-normal"
                                type="text"
                                id="feedback-course-content"
                                maxLength="500"
                                name="Describe your feedback regarding course content (feel free to elaborate on the choices above)."
                                placeholder="Please enter your feedback here"
                                required
                            />
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-1">
                                What is one positive aspect of the course/instructor that they should continue?
                            </p>
                            <p className="text-sm lg:text-base italic mx-4 mt-1 mb-2">
                                The objective of the feedback form is to deliver both positive and constructive feedback to the professor.
                            </p>
                            <textarea
                                className="w-[95%] h-32 lg:h-48 text-base m-4 p-2 border border-gray-300 rounded-sm placeholder-gray-500 text-wrap break-normal"
                                type="text"
                                id="positive-aspect-course-content"
                                maxLength="500"
                                name="What is one positive aspect of the course/instructor that they should continue?"
                                placeholder="Please enter your optional response here"
                            />
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-2">In what manner can USSTM best support you?</p>
                            <textarea
                                className="w-[95%] h-32 lg:h-48 text-base m-4 p-2 border border-gray-300 rounded-sm placeholder-gray-500 text-wrap break-normal"
                                type="text"
                                id="usstm-support"
                                maxLength="500"
                                name="In what manner can USSTM best support you?"
                                placeholder="Your answer"
                            />
                        </div>

                        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                            <p className="m-4 mb-2">Is there anything else you would like to mention?</p>
                            <textarea
                                className="w-[95%] h-32 lg:h-48 text-base m-4 p-2 border border-gray-300 rounded-sm placeholder-gray-500 text-wrap break-normal"
                                type="text"
                                id="anything-else"
                                maxLength="500"
                                name="Is there anything else you would like to mention"
                                placeholder="Your answer"
                            />
                        </div>

                    </div>

                    <button
                        id='submit-button'
                        className='my-4 bg-highlight-blue w-3/4 lg:w-1/2 h-10 rounded-md shadow-md'
                        type="submit"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>
        </section>
    )
}