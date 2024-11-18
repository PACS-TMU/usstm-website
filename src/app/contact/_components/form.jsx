"use client";
import { useEffect, useState } from "react";
import handleForm from "@/server/handleForm"

export default function Form() {
    const [programs, setPrograms] = useState([]);
    const [natureOfRequest, setNatureOfRequest] = useState([]);
    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await fetch('https://usstm.ca/data/contact/programs.json');
                const programs = await response.json();
                setPrograms(programs);
            } catch (error) {
                console.error('Error fetching programs data:', error);
            }
        }
        const fetchNatureOfRequest = async () => {
            try {
                const response = await fetch('https://usstm.ca/data/contact/natureOfRequest.json');
                const data = await response.json();
                setNatureOfRequest(data);
            } catch (error) {
            }
        }
        fetchPrograms();
        fetchNatureOfRequest();
    }, []);

    return (
        <div className="bg-gray-200 pt-8 pb-4 px-5 lg:px-20 w-full md:w-4/5 lg:w-3/4 mx-auto rounded min-h-[90vh] flex justify-center items-center flex-col">
            <h2 className="text-highlight-dark text-center py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                Get in Touch!
            </h2>
            <p className="pb-6 text-center w-3/4 mx-auto">
                If you have any questions, concerns, or requests, please feel free to reach out to us. We are here to help you!
            </p>
            <form
                id="contact-form"
                action={handleForm}
                className="w-full"
                onSubmit={e => {
                    e.preventDefault();
                    document.getElementById('submit-button').innerHTML = "Submitting...";
                    setTimeout(() => {
                        const form = document.getElementById('my-form');
                        document.getElementById('contact-form').reset();
                        document.getElementById('submit-button').innerHTML = 'Thank you, we will get back to you as soon as possible!';
                        document.getElementById('submit-button').disabled = true;
                        document.getElementById('submit-button').style.backgroundColor = '#E1E8F5';
                        document.getElementById('submit-button').style.color = '#1E1E1E';
                    }, 1000);
                }}
            >
                <div className="flex md:flex-row flex-col justify-center items-center">
                    <div className="flex flex-col w-[95%] md:w-1/2">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            className='w-full md:w-[95%] my-2 text-base h-9 rounded-md pl-2 placeholder-gray-500'
                            maxLength="50"
                            name="firstName"
                            type="text"
                            placeholder="Your answer"
                            autoComplete="first-name"
                            pattern="[A-Za-z]+"
                            onKeyDown={(e) => {
                                var allowed = new RegExp("^[a-zA-Z ]+$|Backspace|Delete|ArrowLeft|ArrowRight|ArrowUp|ArrowDown|Tab|Enter");
                                allowed.test(e.key) ? "" : e.preventDefault()
                            }}
                            required
                        />
                    </div>
                    <div className="flex flex-col w-[95%] md:w-1/2 mt-4 md:mt-0">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            className='w-full my-2 text-base h-9 rounded-md pl-2 placeholder-gray-500'
                            maxLength="50"
                            name="lastName"
                            type="text"
                            placeholder="Your answer"
                            autoComplete="family-name"
                            pattern="[A-Za-z]+"
                            onKeyDown={(e) => {
                                var allowed = new RegExp("^[a-zA-Z ]+$|Backspace|Delete|ArrowLeft|ArrowRight|ArrowUp|ArrowDown|Tab|Enter");
                                allowed.test(e.key) ? "" : e.preventDefault()
                            }}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full mt-4 justify-center items-center">
                    <div className="flex w-[95%] md:w-full flex-col">
                        <label htmlFor="tmuEmail" className="self-start">TMU Email</label>
                        <input
                            id="tmuEmail"
                            className='w-full md:w-3/4 my-2 pl-2 text-base rounded-md h-9 placeholder-gray-500'
                            name="tmuEmail"
                            type="email"
                            placeholder="Your answer"
                            autoComplete="email"
                            pattern=".+@torontomu\.ca"
                            onKeyDown={(e) => { e.key === " " ? e.preventDefault() : "" }}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-4 justify-center items-center">
                    <div className="w-[95%] md:w-1/2">
                        <label htmlFor="program">Program</label>
                        <select id="program" name="program" className="w-[95%] my-2 h-9 rounded-md pl-1 bg-white hover:cursor-pointer" defaultValue={"none"} required>
                            <option value="none" disabled={true}>-- Select your program --</option>
                            {
                                programs.map((program, index) => (
                                    <option key={index} value={program}>{program}</option>
                                ))
                            }
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="w-[95%] md:w-1/2 mt-4 md:mt-0">
                        <label htmlFor="year">Year</label>
                        <select id="year" name="year" className="w-full my-2 h-9 rounded-md pl-1 bg-white hover:cursor-pointer" defaultValue={"none"} required>
                            <option value="none" disabled={true}>-- Select your year --</option>
                            <option value="Year 1">Year 1</option>
                            <option value="Year 2">Year 2</option>
                            <option value="Year 3">Year 3</option>
                            <option value="Year 4">Year 4</option>
                            <option value="Year 5">Year 5</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="flex mt-4 justify-center items-center">
                    <div className="md:w-full w-[95%]">
                        <label htmlFor="natureOfRequest">Nature of Request</label>
                        <select id="natureOfRequest" name="natureOfRequest" className="w-full my-2 h-9 rounded-md pl-1 bg-white hover:cursor-pointer" defaultValue={'none'} required>
                            <option value="none" disabled={true}>Please select an option</option>
                            {
                                natureOfRequest.map((request) => (
                                    <option key={request.id} value={request.value}>{request.option}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="flex w-full mt-4 justify-center items-center">
                    <div className="flex flex-col md:w-full w-[95%]">
                        <label htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            className='w-full my-2 text-base h-9 rounded-md pl-2 placeholder-gray-500'
                            maxLength="50"
                            name="subject"
                            type="text"
                            placeholder="Subject line"
                            autoComplete="none"
                            required
                        />
                    </div>
                </div>
                <div className="flex w-full mt-4 justify-center items-center">
                    <div className="flex flex-col md:w-full w-[95%]">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Please describe your reason for contact here"
                            className="w-full h-28 lg:h-46 border border-gray-300 text-base p-2 rounded-md my-2 placeholder-gray-500 text-wrap break-normal"
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <button id="submit-button" type="submit" className="bg-highlight-dark text-white px-4 py-2 rounded shadow-md lg:text-lg">Submit</button>
                </div>
            </form>
        </div>
    )
}