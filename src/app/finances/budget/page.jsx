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
                <div className="intro md:w-4/5 lg:w-3/4 mx-auto bg-highlight-blue rounded-sm shadow-md flex flex-col py-8 justify-center items-center">
                    <h3 className="my-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Student Levy
                    </h3>
                    <p className="my-3 mx-6 lg:w-1/2 text-center">
                        The student levy is a fee that is charged to all students at the beginning of each semester. The fee is
                        used to fund student activities, clubs, and events. The student levy is $30 per semester and is
                        non-refundable.
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
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 pt-4">
                        {budgets.map((budget, index) => (
                            <div key={index} className="bg-highlight-blue rounded-sm shadow-md p-4">
                                <h3 className="text-xl lg:text-2xl font-serif font-semibold tracking-wide text-center">
                                    {budget.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="resources my-2 lg:my-6 py-2">
                    <h2 className="pb-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Resources
                    </h2>
                </div>
            </div>
        </section>
    )
}