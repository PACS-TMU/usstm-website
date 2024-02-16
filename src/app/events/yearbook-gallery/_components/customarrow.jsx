'use client';

export function CustomNext(props) {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} bg-transparent border border-gray-400 rounded-full p-3 absolute top-1/2 transform -translate-y-1/2 right-5 z-10 cursor-pointer`}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );
}

export function CustomPrev(props) {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} bg-transparent border border-gray-400 rounded-full p-3 absolute top-1/2 transform -translate-y-1/2 left-5 z-10 cursor-pointer`}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>

        </div>
    );
}
