"use client";
import Header from "@/app/_components/general/header";
import Image from "next/image";
import { Brygada_1918 } from "next/font/google";
import NumberEntry from "./_components/numberEntry";
import { useState } from "react";

const brygada = Brygada_1918({ subsets: ["latin"] });

export default function Policies() {

    // Possible Values: "Amounts", "Methods", "Timeline", "Reimbursements"
    const [active, setActive] = useState("Amounts");

    return (
        <section>
            <Header title={`Financial Policies`} />
            <div className="main">
                <div className="w-full md:w-5/6 flex shadow-md mx-auto bg-highlight-blue my-12">
                    <div className="w-[55%] lg:min-h-[80vh] flex flex-col justify-center py-6">
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
                    <div className="w-[45%] min-h-full">
                        <Image
                            src="/images/usstm-people.png"
                            alt="Purpose Graphic"
                            width={1200}
                            height={800}
                            className="object-cover h-full"
                            priority
                        />
                    </div>
                </div>

                <div className="w-full md:w-5/6 flex shadow-md mx-auto bg-highlight-blue my-12">
                    <div className="w-[45%] min-h-full">
                        <Image
                            src="/images/usstm-people.png"
                            alt="Purpose Graphic"
                            width={1200}
                            height={800}
                            className="object-cover h-full"
                            priority
                        />
                    </div>
                    <div className="w-[55%] min-h-[70vh] flex flex-col pt-6">
                        <h2 className="py-6 pt-16 md:px-8 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold self-start tracking-wide">
                            FUNDING REQUESTS
                        </h2>
                        <div className="grid grid-cols-2 grid-rows-1 min-h-[60%] w-full mt-auto mb-0">
                            <div className=" border-t border-foreground flex h-full">
                                <p className="p-8 self-center">
                                    {
                                        active === "Amounts" ? "To request funds, please fill out the form on the 'Request Funds' page. You will need to provide the following information:"
                                        : active === "Methods" ? "We accept requests for funds through the following methods:"
                                        : active === "Timeline" ? "Requests for funds must be made at least 2 weeks before the funds are needed. If the request is for an event, it must be made at least 4 weeks before the event."
                                        : active === "Reimbursements" ? "To request a reimbursement, please fill out the form on the 'Request Funds' page. You will need to provide the following information:"
                                        : ""
                                    }
                                </p>
                            </div>
                            <div className="grid grid-rows-4 grid-cols-1 lg:text-lg">
                                <button
                                    className={`w-full h-full row-span-1 border-x border-t border-foreground hover:underline ${active === "Amounts" ? "bg-highlight-dark text-white underline" : ""}`}
                                    onClick={() => setActive("Amounts")}
                                >
                                    Request Amounts
                                </button>
                                <button
                                    className={`w-full h-full row-span-1 border-x border-t border-foreground hover:underline ${active === "Methods" ? "bg-highlight-dark text-white underline" : ""}`}
                                    onClick={() => setActive("Methods")}
                                >
                                    Methods of Request
                                </button>
                                <button
                                    className={`w-full h-full row-span-1 border-x border-t border-foreground hover:underline ${active === "Timeline" ? "bg-highlight-dark text-white underline" : ""}`}
                                    onClick={() => setActive("Timeline")}
                                >
                                    Timeline for Requests
                                </button>
                                <button
                                    className={`w-full h-full row-span-1 border-x border-t border-foreground hover:underline ${active === "Reimbursements" ? "bg-highlight-dark text-white underline" : ""}`}
                                    onClick={() => setActive("Reimbursements")}
                                >
                                    How to Request Reimbursements
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}