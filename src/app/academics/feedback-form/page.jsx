"use client";
import Header from "@/app/_components/general/header";
import { useState } from 'react';

export default function Feedback() {
    const [page, setPage] = useState(1);

    const handleNext = () => {
        setPage(page + 1);
    }

    const handlePrev = () => {
        setPage(page - 1);
    }

    const nextButton = (
        <button
            id='next-button'
            className='my-4 bg-highlight-blue w-3/4 lg:w-1/2 h-10 rounded-md shadow-md'
            type="button"
            onClick={handleNext}
        >
            Next
        </button>
    );

    const previousButton = (
        <button
            id='previous-button'
            className='my-4 bg-highlight-blue w-3/4 lg:w-1/2 h-10 rounded-md shadow-md'
            type="button"
        >
            Previous
        </button>
    );

    const requiredStar = <span className="text-red-500">*</span>;

    const pageTitle = (() => {
        switch (page) {
            case 1:
                return <span>Page 1 - Personal Information - </span>;
            case 2:
                return <span>Page 2 - Course Information - </span>;
            case 3:
                return <span>Page 3 - Assessments and Grading - </span>;
            case 4:
                return <span>Page 4 - Course Content and Delivery - </span>;
            case 5:
                return <span>Page 5 - Thank You! - </span>;
            default:
                return null;
        }
    }
    );
    const pageHeading = (
        <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
            <p className="py-2 text-red-500 text-base">{pageTitle} {requiredStar} indicates required question</p>
        </div>
    );

    return (
        <section>
            <Header title={`Academic Feedback Form`} />
            <div className="main">
                <p className="lg:text-lg pb-4 text-left">
                    This form is for the USSTM to gather information and experiences from students who believe their
                    course or professor was unfair, unhelpful or if someone was mistreated by an instructor in a course.
                </p>
                <p className="lg:text-lg pb-4 text-left">
                    Please let us keep this professional and constructive, the purpose is to give ANONYMOUS feedback to the professor
                    and the faculty so we can work together to improve our learning environment! Filling out this form does not mean that any
                    issues will be solved, however we promise that we will do our best to address them.
                </p>
                <p className="lg:text-lg pb-4 text-left">
                    Due to the nature of this, we cannot discuss all the details but feel free to reach out to us through our Academic Feedback
                    Coordinator, Burhanuddin Miyaji - <a href="mailto:burhanuddin.miyaji@torontomu.ca" target="_blank">burhanuddin.miyaji@torontomu.ca</a> or
                    our VP Academics - <a href="mailto:vp.academic@usstm.ca" target="_blank">vp.academic@usstm.ca</a> if you have questions about the complaint process.
                </p>

                <form
                    id="my-form"
                    method="POST"
                    action="https://script.google.com/macros/s/AKfycbyN2fz_tDlFd7uZgt1CDBRVW6J9ubMEVBbRva6YJs2fUYm8QXkW9if69R1S4viuVzQHig/exec"
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
                            const otherProgram = document.getElementById('other-program');
                            otherProgram.value = document.getElementById('other-program-text').value;
                            fetch(action, {
                                method: 'POST',
                                body: data,
                            })
                        }, 1000);
                    }}
                    className="lg:text-lg flex flex-col justify-center items-center pt-4 w-full max-w-3xl mx-auto"
                >
                    {pageHeading}
                    {
                        page === 1 && (
                            <div className="page w-full flex flex-col justify-center items-center">
                                <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                                    <p className="m-4 mb-2">Name {requiredStar}</p>
                                    <input
                                        id="name"
                                        className='w-1/2 text-base m-4 h-9 border-b border-gray-300 placeholder-gray-500'
                                        maxLength="50"
                                        name="Name"
                                        type="text"
                                        placeholder="Your answer"
                                        autoComplete="name"
                                        pattern="[A-Za-z]+"
                                        onKeyDown={(e) => {
                                            var allowed = new RegExp("^[a-zA-Z ]+$|Backspace|Delete|ArrowLeft|ArrowRight|ArrowUp|ArrowDown|Tab|Enter");
                                            allowed.test(e.key) ? "" : e.preventDefault()
                                        }}
                                        required
                                    />
                                </div>

                                <div className="my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
                                    <p className="m-4 mb-2">TMU Email {requiredStar}</p>
                                    <input
                                        id="email"
                                        className='w-1/2 text-base m-4 h-9 border-b border-gray-300 placeholder-gray-500'
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
                                        className="m-4 h-9 border-b border-gray-300 text-gray-500"
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
                                        <div className="pb-4 flex flex-row">
                                            <input type="radio" id="other-program" name="Program" value="other" required />
                                            <label className="px-2 w-full" htmlFor="other">
                                                <div className="flex flex-row w-3/4">
                                                    <p className="pr-2">Other:</p>
                                                    <input
                                                        id="other-program-text"
                                                        className='w-full text-base h-6 border-b border-gray-300 placeholder-gray-500'
                                                        maxLength="50"
                                                        name="Program"
                                                        type="text"
                                                        placeholder=""
                                                        autoComplete="none"
                                                        pattern="[A-Za-z]+"
                                                        onKeyDown={(e) => {
                                                            var allowed = new RegExp("^[a-zA-Z ]+$|Backspace|Delete|ArrowLeft|ArrowRight|ArrowUp|ArrowDown|Tab|Enter");
                                                            allowed.test(e.key) ? "" : e.preventDefault()
                                                        }}
                                                        required
                                                    />
                                                </div>
                                            </label>
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

                                {nextButton}
                            </div>
                        )
                    }

                    {
                        page === 1 && (
                            <div className="page w-full flex flex-col justify-center items-center">
                            </div>
                        )
                    }

                    {/* <button
                        id='submit-button'
                        className='my-4 bg-highlight-blue w-3/4 lg:w-1/2 h-10 rounded-md shadow-md'
                        type="submit"
                    >
                        Submit Feedback
                    </button> */}
                </form>
            </div>
        </section>
    )
}