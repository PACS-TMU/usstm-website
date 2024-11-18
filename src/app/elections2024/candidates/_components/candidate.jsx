"use client;"
import { useState } from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';
import QandA from './q-and-a';

export default function Candidate({ index, candidate, list }) {
    const [showQA, setShowQA] = useState(false);

    return (
        <div
            onKeyDown={(e) => {
                if (e.key === "Escape") {
                    setShowQA(false);
                }
            }}
            className="flex flex-col"
        >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left lg:ml-2 lg:mr-4">
                    <div className="grid grid-rows-[80%_20%] grid-cols-1 w-[50%] items-center justify-center">
                        <Image
                            overrideSrc={`https://usstm.ca/images/elections2024/candidates/${candidate.image}`}
                            loading="lazy"
                            alt={candidate.name}
                            width={1000}
                            height={1000}
                            className="w-[100%] aspect-square rounded-full mb-4 mt-8 lg:my-2 object-cover"
                        />
                        <button
                            className="w-[90%] lg:w-[75%] my-3 mx-auto bg-highlight-dark text-background hover:bg-background hover:text-highlight-dark hover:border hover:border-highlight-dark transition ease-in-out duration-300 font-semibold text-lg lg:text-xl py-2 px-4 rounded-full"
                            onClick={() => setShowQA(!showQA)}
                        >
                            Q&A
                        </button>
                    </div>
                    <div className="lg:pl-4">
                        <p className="text-xl lg:text-2xl font-semibold">{candidate.name}</p>
                        <p className="text-lg lg:text-xl">{candidate.position} Candidate</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:ml-4 lg:py-8">
                    <p className="text-lg lg:text-xl lg:pr-4 text-left">{parse(candidate.bio)}</p>
                </div>
            </div>
            {list.length > 1 && index !== list.length - 1 && <hr className="w-full py-6" />}
            {showQA && (
                <QandA
                    candidate={candidate}
                    setShowQA={setShowQA}
                    showQA={showQA}
                />
            )}
        </div>
    );
}
