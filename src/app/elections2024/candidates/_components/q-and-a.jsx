import parse from 'html-react-parser';
import { IoClose } from "react-icons/io5";
import { useRef } from 'react';
import { useClickAway } from 'react-use';

export default function QandA({ candidate, setShowQA, showQA }) {
    const ref = useRef(null);
    useClickAway(ref, () => setShowQA(false));
    return (
        <>
            <div className="w-screen h-screen bg-gray-500 opacity-50 fixed top-0 left-0">
            </div>
            <div 
            ref={ref}
            className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 bg-background w-11/12 lg:w-1/2 max-h-[75%] p-4 rounded-lg shadow-lg overflow-y-scroll'>
                <button
                    className="absolute top-2 right-2"
                    onClick={() => setShowQA(!showQA)}
                >
                    <IoClose className="text-3xl" />
                </button>
                <div className="text-lg lg:text-xl py-4">
                    {parse(candidate.bio)}
                </div>
            </div>
        </>

    );
}