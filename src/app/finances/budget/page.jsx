"use client";
import { useState, useEffect } from "react";
import Header from "@/app/_components/general/header";
import Link from "next/link";

export default function Budget() {

    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/finances/budget/budgets.json');
                const data = await response.json();
                setBudgets(data);
            } catch (error) {
                console.error('Error fetching budgets data: ', error);
            }
        };
        fetchData();
    }, []);


    return (
        <section>
            <Header title={`Budget`} />
            <div className="main lg:text-lg">
                <p className="p-3">
                    The USSTM budget is a document that outlines the expected income and expenses for the upcoming year and is ratified by the membership
                    during our general meetings. Budget requests can be made by student groups or by independent students. For Independent Student Funding, please
                    visit our <Link href="/finances/conferences-competitions">Conferences & Competitions Page</Link>. Budget details are described in this page.
                </p>
                <div className="intro md:w-4/5 lg:w-3/4 mx-auto bg-highlight-blue rounded-sm shadow-md flex flex-col py-8 justify-center items-center">
                    <h3 className="my-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Student Levy
                    </h3>
                    <p className="my-3 mx-6 lg:w-1/2 text-center">
                        The student levy is a fee that is charged to all students at the beginning of each semester. The Levy
                        (in addition to money provided by the Dean&apos;s Office in the Faculty of Science) is used to fund USSTM and
                        its operations, as well as student activities, clubs, and events. The student levy is $30 per semester
                        and is non-refundable. It is how we (and the student groups ratified under us) are able to provide the
                        services and events that we do!
                    </p>
                    <hr className="border border-gray-400 lg:w-3/4 w-4/5 mt-4 mb-5 mx-auto" />
                    <h3 className="my-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Budget Request
                    </h3>
                    <p className="my-3 mx-6 lg:w-1/2 text-center">
                        Due before the start of each semester, the budget requests must be submitted to Vice-President Finace. A
                        video must be submitted with the budget request. The video should be around 5 minutes and should
                        describe the events, the budget, and the expected outcome. For more details about budget requests, please
                        check out our <a href="/assets/budgets/SGCU-funding-guidelines.pdf" target="_blank">Student Groups and Course Unions Funding Guidelines</a>.
                    </p>
                    <hr className="border border-gray-400 lg:w-3/4 w-4/5 mt-4 mb-5 mx-auto" />
                    <h3 className="my-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Policies and Rules
                    </h3>
                    <p className="my-3 mx-6 lg:w-1/2 text-center">
                        USSTM has a set of Rules and Policies around the budget. These rules and policies are outlined in the
                        financial policies and procedures. For more details about the policies and procedures, please check out
                        our <Link href="/finances/policies">Financial Policies Page</Link>.
                    </p>
                </div>

                <div className="budgets my-4 lg:my-6 py-2">
                    <h2 className="pb-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Our Past & Current Budgets
                    </h2>
                    <p className="my-3">
                        Below are the budgets that have been approved/ratified by our membership for the current and past years. Click
                        on the year to view the budget details.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 pt-4">
                        {budgets.map((budget) => (
                            <div key={budget.id} className="text-center">
                                <a href={`/assets/budgets/${budget.path}`} target="_blank">
                                    <button className="bg-highlight-blue text-foreground rounded-sm shadow-md w-full h-full p-4 text-xl lg:text-2xl font-serif font-semibold tracking-wide hover:scale-105 duration-300 transition-all">
                                        {budget.title} <br /> Budget
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                    <p className="pt-4 my-3 italic">
                        Our Year to Date (YTD) budget is available upon request. Please email 
                        the <a href="mailto:vp.finance@usstm.ca">VP Finance</a> or visit 
                        our <Link href='/contact'>Contact Us Page</Link> to request it.
                        Our YTD for the 2023-2024 fiscal year (as of February 24, 2024) can be 
                        found <a href="/assets/budgets/YTD-02-24.pdf" target="_blank">here</a>.
                    </p>
                </div>

                <div className="resources my-2 lg:my-6 py-2">
                    <h2 className="pt-2 pb-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Resources
                    </h2>
                    <div className="flex flex-wrap gap-4 mx-auto justify-center">
                        <div className="bg-highlight-blue rounded-sm shadow-md w-full h-full p-4">
                            <h2 className="text-xl lg:text-2xl font-serif font-semibold tracking-wide">
                                Account Codes
                            </h2>
                            <p className="m-4">
                                For the account codes, check out our list of <a href="/assets/budgets/USSTM-AccountCodes.pdf" target="_blank">Account Codes</a> that we use 
                                for our accounting. If you are not sure which account your purchase goes under, please confirm with the VP Finance through email or in person.
                            </p>
                        </div>
                        <div className="bg-highlight-blue rounded-sm shadow-md w-full h-full p-4">
                            <h2 className="text-xl lg:text-2xl font-serif font-semibold tracking-wide">
                                Funding Request Committee Public Folder
                            </h2>
                            <p className="m-4">
                                The Funding Request Committee (FRC) Public Folder contains all the documents and resources that are used by the FRC in order to make decisions
                                on the budget requests. Please click <a href="https://drive.google.com/drive/folders/1tt_8FF_tYbUqFsZQdeN4qTSoFxDw_fOV" target="_blank">here</a> to
                                access the public folder.
                            </p>
                        </div>
                        <div className="bg-highlight-blue rounded-sm shadow-md w-full h-full p-4">
                            <h2 className="text-xl lg:text-2xl font-serif font-semibold tracking-wide">
                                How to Read a Budget
                            </h2>
                            <p className="m-4">
                                Budgets are sometimes hard to read and understand. This document will help you understand how to read the USSTM budget, which will help you understand
                                where our money goes and help you create your own as well. Please click <a href="/assets/budgets/howToReadUSSTMBudget.pdf" target="_blank">here</a> to
                                access the document.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}