'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CRO() {
    const [isFunny, setIsFunny] = useState(Math.random() < 0.8);

    useEffect(() => {
        setIsFunny(Math.random() < 0.8);
    }, []);

    return (
        <div className="flex flex-col pt-10 pb-5">
            <h2 className="py-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                Meet our CRO!
            </h2>
            <div className="flex flex-col lg:flex-row bg-highlight-blue w-full rounded-md p-8 justify-center items-center">
                {isFunny ?
                <Image
                    src={`/images/elections2024/cro.jpg`}
                    loading="lazy"
                    alt="The USSTM Chief Returning Officer for 2024 Elections"
                    width={1000}
                    height={1000}
                    className="w-96 aspect-square mb-4 lg:my-0 object-cover shadow-md rounded-sm mx-auto"
                /> :
                    <Image src={`/images/elections2024/cro-ken.jpg`}
                           loading="lazy"
                           alt="The USSTM Chief Returning Officer for 2024 Elections"
                           width={1000}
                           height={1000}
                           className="w-96 aspect-square mb-4 lg:my-0 object-cover shadow-md rounded-sm mx-auto"
                    />
                }
                <div className="lg:p-8 ">
                    <h2 className="py-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        The 2024 Chief Returning Officer
                    </h2>
                    <div className="py-4">
                        USSTM Elections are managed each year by a Chief Returning Officer (CRO), someone
                        from outside of the FoS membership to impartially carry out elections. This
                        year, <b>Alessandro Cunsolo</b> has been retained to execute this role, having a
                        longstanding history with the society and its policies. Alessandro is a graduate
                        from the faculty of engineering, has been the chairperson of USSTM since 2019 and
                        has also overseen all elections since then. For election related inquiries, please
                        email him at <a href="mailto:cro@usstm.ca">cro@usstm.ca</a>.
                    </div>
                    <div className="py-4">
                        <b>Author&apos;s note:</b> Cunsolo is super cool!
                    </div>
                </div>
            </div>
        </div>
    );
}
