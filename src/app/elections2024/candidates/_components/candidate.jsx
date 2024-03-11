import Image from 'next/image';
import parse from 'html-react-parser';

export default function Candidate({ index, candidate, list }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left lg:ml-2 lg:mr-4">
                    <Image
                        src={`/images/elections2024/candidates/${candidate.image}`}
                        loading="lazy"
                        alt={candidate.name}
                        width={1000}
                        height={1000}
                        className="w-[75%] lg:w-[45%] aspect-square rounded-full mb-4 mt-8 lg:my-2 object-cover"
                    />
                    <div className="lg:pl-4">
                        <p className="text-xl lg:text-2xl font-semibold">{candidate.name}</p>
                        <p className="text-lg lg:text-xl">{candidate.position} Candidate</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:ml-4 lg:py-8">
                    <p className="text-lg lg:text-xl lg:pr-4 text-left">{parse(candidate.bio)}</p>
                </div>
            </div>
            {list.length > 1 && index !== list.length - 1 && <hr className="w-full" />}
        </div>
    );
}