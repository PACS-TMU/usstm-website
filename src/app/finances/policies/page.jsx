"use client";
import Header from "@/app/_components/general/header";
import Image from "next/image";
import Link from "next/link";
import { Brygada_1918 } from "next/font/google";
import NumberEntry from "./_components/numberEntry";
import { useState } from "react";
import { getImageUrl } from "@/lib/supabase";

const brygada = Brygada_1918({ subsets: ["latin"] });

export default function Policies() {

    // Possible Values: "Intro", "Methods", "Reimbursements", "Amounts"
    const [active, setActive] = useState("Intro");

    return (
        <section>
            <Header title={`Financial Policies`} />
            <div className="main">
                <div id="introduction" className="px-6 lg:text-lg">
                    <p className="block py-2">
                        The financial policies document can be accessed in our <Link href="/about/governance">governance page</Link>.
                        Our financial policies are in place to ensure that we are transparent and accountable in our financial dealings.
                        These policies help us to provide guidance to our students and groups on how to request and use funds. We believe
                        that having these policies in place helps us to be transparent and accountable to the people we serve and the people
                        who support us.
                    </p>
                </div>

                <div className="w-full md:w-5/6 flex shadow-md mx-auto bg-highlight-blue mt-6 mb-12">
                    <div className="md:w-[55%] aspect-[14/15] flex flex-col justify-center py-6">
                        <h2 className="pb-8 px-4 md:px-6 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                            PURPOSE
                        </h2>

                        <hr className="w-full border-foreground" />
                        <NumberEntry
                            number={1}
                            title={`TRANSPARENCY`}
                            description={`We believe in transparency and honesty, and these financial policies help us to be transparent in our financial dealings.`}
                        />


                        <hr className="w-full border-foreground" />
                        <NumberEntry
                            number={2}
                            title={`ACCOUNTABILITY`}
                            description={`Creating the financial policies makes us accountable to the people we serve and the people who support us.`}
                        />

                        <hr className="w-full border-foreground" />
                        <NumberEntry
                            number={3}
                            title={`STRUCTURE`}
                            description={`Having financial policies in place helps us to have a clear structure for our financial dealings.`}
                        />

                        <hr className="w-full border-foreground" />
                        <NumberEntry
                            number={4}
                            title={`GUIDANCE`}
                            description={`The financial policies help us to provide our students and groups with guidance on how to request and use funds.`}
                        />

                        <hr className="w-full border-foreground" />
                    </div>
                    <div className="hidden md:block w-[45%] min-h-full">
                        <Image
                            overrideSrc={getImageUrl('finances/policies/purpose-graphic.webp')}
                            alt="Purpose Graphic"
                            width={1200}
                            height={800}
                            className="object-cover h-full"
                            priority
                        />
                    </div>
                </div>

                <div className="w-full md:w-5/6 flex shadow-md mx-auto bg-highlight-blue my-12">
                    <div className="hidden lg:block lg:w-[45%] min-h-full">
                        <Image
                            overrideSrc={getImageUrl('finances/policies/fr-graphic.webp')}
                            alt="Funding Request Graphic"
                            width={1200}
                            height={800}
                            className="object-cover h-full"
                            priority
                        />
                    </div>
                    <div className="w-full lg:w-[55%] flex flex-col pt-6">
                        <h2 className="mb-10 p-2 md:p-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold self-start tracking-wide">
                            FUNDING REQUESTS
                        </h2>
                        <div className="grid grid-cols-2 grid-rows-1 min-h-[75%] w-full mt-auto mb-0">
                            <div className="border-t border-foreground flex h-full">
                                <p className="text-sm md:text-base xl:text-lg p-2 lg:px-5 lg:py-2 self-center">
                                    {
                                        active === "Intro" ? "To request funds, a detailed budget must be submitted to our Vice-President of Finance. " +
                                            "Details of what the budget should include varies depending on the nature of the request. Student Group/Course Union budgets" +
                                            "are to be submitted before the start of each semester, by a date set by the Vice-President of Finance. The budget" +
                                            "will then be reviewed by the Funding Request Committee under the Vice-President of Finance. The group will be" +
                                            "notified of the decision within a time that is pre-determined before the submission."
                                            : active === "Methods" ? "There are a few methods of requesting funds. The method used depends on the nature of the " +
                                                "request. Student Group/Course Union budgets are to be submitted before the start of each semester, by a date set by the Vice-President of Finance. " +
                                                "Student initiative funding is to be requested through an email to Vice-President of Finance. The email should include a detailed budget and a description of the request."
                                                : active === "Reimbursements" ? "After an event or purchase, a reimbursement can be requested. To request a reimbursement, please fill out our reimbursement form and " +
                                                    "submit itemized receipts with your form. Your receipts must be legible upon submission. All reimbursements must be submitted " +
                                                    "within 1 month of the purchase. Failure to do so may risk your reimbursement being approved. If any help is required, please contact the Vice-President of Finance."
                                                    : active === "Amounts" ? "The amount of funds that can be requested varies depending on the nature of the request. " +
                                                        "The amount of funds that are approved for student group budgets is determined by the Funding Request Committee. " +
                                                        "Once a request is reviewed, the group will be notified of the decision, along with a detailed explanation of the " +
                                                        "decision (if not approved). If any help is required, please contact the Vice-President of Finance or the Appeals Committee."
                                                        : "Error fetching data. Please reload the page and try again."
                                    }
                                </p>
                            </div>
                            <div className="grid grid-rows-4 grid-cols-1 text-sm md:text-base lg:text-lg">
                                <button
                                    className={`w-full h-full row-span-1 border-x border-t border-foreground hover:underline ${active === "Intro" ? "bg-highlight-dark text-background underline" : ""}`}
                                    onClick={() => setActive("Intro")}
                                >
                                    Introduction to Funding Requests
                                </button>
                                <button
                                    className={`w-full h-full row-span-1 border-x border-t border-foreground hover:underline ${active === "Methods" ? "bg-highlight-dark text-background underline" : ""}`}
                                    onClick={() => setActive("Methods")}
                                >
                                    Methods of Request
                                </button>
                                <button
                                    className={`w-full h-full row-span-1 border-x border-t border-foreground hover:underline ${active === "Reimbursements" ? "bg-highlight-dark text-background underline" : ""}`}
                                    onClick={() => setActive("Reimbursements")}
                                >
                                    How to Request Reimbursements
                                </button>
                                <button
                                    className={`w-full h-full row-span-1 border-x border-t border-foreground hover:underline ${active === "Amounts" ? "bg-highlight-dark text-background underline" : ""}`}
                                    onClick={() => setActive("Amounts")}
                                >
                                    Request Amounts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-5/6 flex flex-col shadow-md mx-auto bg-highlight-blue my-12">
                    <h2 className="mb-10 p-2 md:p-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold self-start tracking-wide">
                        LIMITATIONS
                    </h2>
                    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 mt-auto mb-0 w-full">
                        <div className="border-t md:border-r border-foreground flex flex-col h-full">
                            <p className="text-sm md:text-base lg:text-lg p-2 lg:px-5 lg:py-2 self-center">
                                There are various limitations on the use of funds. These limitations are in
                                place to ensure that funds are used in a responsible and accountable manner.
                                Some of the limitations include:
                            </p>
                            <ul className="list-disc list-inside p-4 lg:px-7 py-1 text-sm md:text-base lg:text-lg">
                                <li>Things that are not allowed under USSTM budget</li>
                                <li>Things that should be discussed before requesting</li>
                                <li>Rules and regulations to follow</li>
                            </ul>
                            <Image
                                overrideSrc={getImageUrl('finances/policies/lim-graphic.png')}
                                alt="Limitations Graphic"
                                width={1200}
                                height={800}
                                className="w-[75%] object-cover h-auto mx-auto my-6"
                                priority
                            />
                        </div>
                        <div className="border-t border-foreground flex flex-col h-full">
                            <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                                <div className="flex flex-col col-span-1 row-span-1 border-r border-b border-foreground">
                                    <p className="px-4 py-2 text-sm md:text-base lg:text-lg xl:font-semibold tracking-wide">
                                        What you are not allowed to get?
                                    </p>
                                    <ul className="list-disc list-inside p-4 lg:px-7 py-1 text-sm md:text-base lg:text-lg">
                                        <li>Gift Cards</li>
                                        <li>Drugs and Alcohol</li>
                                        <li>Illegal Substances</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col col-span-1 row-span-1 border-b border-foreground">
                                    <p className="px-4 py-2 text-sm md:text-base lg:text-lg xl:font-semibold tracking-wide">
                                        Discuss before requesting
                                    </p>
                                    <ul className="list-disc list-inside p-4 lg:px-7 py-1 text-sm md:text-base lg:text-lg">
                                        <li>Transportation Costs (e.g., Ubers)</li>
                                        <li>Things with varying prices (e.g., Hotel Rooms)</li>
                                        <li>Tips (e.g., delivery tips) and additional fees</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col col-span-2 row-span-1">
                                    <p className="px-4 py-2 text-sm md:text-base lg:text-lg xl:font-semibold tracking-wide">
                                        Rules
                                    </p>
                                    <ul className="list-disc list-inside p-4 lg:px-7 py-1 text-sm md:text-base lg:text-lg">
                                        <li>
                                            Receipts must be provided for all purchases for reimbursement
                                        </li>
                                        <li>
                                            Reimbursement must be submitted within 1 month of the purchase.
                                            Failure to do so may result in the reimbursement not being processed.
                                        </li>
                                        <li>
                                            If money was spent without the approval of the budget, you are not
                                            guaranteed reimbursement.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="outro px-6 py-6">
                    <h2 className="pb-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Any Questions?
                    </h2>
                    <p className="py-2 lg:text-lg">
                        If you have any questions about our financial policies, please contact our Vice-President of Finance
                        at <a href="mailto:vp.finance@usstm.ca" target="_blank">vp.finance@usstm.ca</a>. If your budget gets denied, and
                        you believe it was unjust, please contact VP Operations so it can be raised to the appeals committee
                    </p>
                </div>
            </div>
        </section>
    )
}
