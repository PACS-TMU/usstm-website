import parse from 'html-react-parser';
import { IoClose } from "react-icons/io5";
import { useRef } from 'react';
import { useClickAway } from 'react-use';

export default function QandA({ candidate, setShowQA, showQA }) {
    const ref = useRef(null);
    useClickAway(ref, () => setShowQA(false));
    return (
        <div tabIndex={0}>
            <div className="w-screen h-screen bg-gray-500 opacity-50 fixed top-0 left-0">
            </div>
            <div
                ref={ref}
                className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 bg-background w-11/12 lg:w-1/2 max-h-[75%] p-4 rounded-lg shadow-lg overflow-y-scroll'
            >
                <button
                    className="absolute top-2 right-2"
                    onClick={() => setShowQA(false)}
                >
                    <IoClose className="text-3xl" />
                </button>
                <div className="text-lg lg:text-xl py-4">
                    <b>Q1:</b> What is the biggest problem/barrier facing your constiutents
                    right now? How do you plan to tackle this through your role if elected?
                </div>
                <div className="text-lg lg:text-xl pt-4 font-semibold">
                    A1:
                </div>
                <div className="text-lg lg:text-xl pb-4">
                    {parse(candidate.q1)}
                </div>
                <hr className='w-full mx-auto' />
                <div className="text-lg lg:text-xl py-4">
                    <b>Q2:</b> What are some of your greatest strengths and how will they will
                    help you succeed in your role?
                </div>
                <div className="text-lg lg:text-xl pt-4 font-semibold">
                    A2:
                </div>
                <div className="text-lg lg:text-xl pb-4">
                    {parse(candidate.q2)}
                </div>
                <hr className='w-full mx-auto' />
                <div className="text-lg lg:text-xl py-4">
                    <b>Q3:</b> What is your single greatest accomplishment to date done for the
                    betterment of Science Students at TMU?
                </div>
                <div className="text-lg lg:text-xl pt-4 font-semibold">
                    A3:
                </div>
                <div className="text-lg lg:text-xl pb-4">
                    {parse(candidate.q3)}
                </div>
                <hr className='w-full mx-auto' />
            </div>
        </div>

    );
}