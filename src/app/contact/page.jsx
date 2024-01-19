'use client'
import Header from "@/app/_components/general/header";
import { useEffect, useState } from "react";

export default function Contact() {
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await fetch('/data/programs.json');
                const programs = await response.json();
                setPrograms(programs);
            } catch (error) {
                console.error('Error fetching programs data:', error);
            }
        }
        fetchPrograms();
    }, []);
    const handleSubmit = (event) => {
        console.log(event);
    }
    return (
        <section>
            <Header title={`Contact Us`} />
            <div className="main">
                <form className="bg-gray-200 py-4 px-20 w-3/4 mx-auto rounded">
                    <div className="flex">
                        <div className="w-1/2 mr-2">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" className="w-full" />
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" className="w-full" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="tmuEmail">TMU Email</label>
                        <input type="email" id="tmuEmail" name="tmuEmail" className="w-full" />
                    </div>
                    <div className="flex mt-4">
                        <div className="w-1/2 mr-2">
                            <label htmlFor="program">Program</label>
                            <select id="program" name="program" className="w-full bg-white" value={"none"}>
                                <option value="none" disabled={true}>Select your program</option>
                                {
                                    programs.map((program) => (
                                        <option value={program}>{program}</option>
                                    ))
                                }
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor="year">Year</label>
                            <select id="year" name="year" className="w-full bg-white" value={"none"}>
                                <option value="none" disabled={true}>Select your year</option>
                                <option value="year1">Year 1</option>
                                <option value="year2">Year 2</option>
                                <option value="year3">Year 3</option>
                                <option value="year4">Year 4</option>
                                <option value="year5">Year 5</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="natureOfRequest">Nature of Request</label>
                        <select id="natureOfRequest" name="natureOfRequest" className="w-full bg-white" value={'none'}>
                            <option value="none">Options coming soon</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" className="w-full"></textarea>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="bg-highlight-dark text-white px-4 py-2 rounded">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}