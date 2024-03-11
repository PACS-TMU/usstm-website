import Image from "next/image";
import parse from "html-react-parser";

export default function CandidateSection({ role, candidates }) {

    let presidents = [];
    let ops = [];
    let finance = [];
    let communications = [];
    let studentlife = [];
    let academics = [];
    let external = [];
    let equity = [];
    let bio = [];
    let biomed = [];
    let cs = [];
    let math = [];

    if (role === "Executives") {
        presidents = candidates[0];
        ops = candidates[1];
        finance = candidates[2];
        communications = candidates[3];
        studentlife = candidates[4];
        academics = candidates[5];
        external = candidates[6];
        equity = candidates[7];
    }
    else if (role === "Directors") {
        bio = candidates[0];
        biomed = candidates[1];
        cs = candidates[2];
        math = candidates[3];
    }
    else {
        console.error('Invalid role:', role);
    }

    return (
        <>
            {role === "Executives" ?
                (<div>
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl  font-semibold">
                        President Candidate(s):
                    </p>
                    {presidents.map((candidate, index) => (
                        <div key={index} className="flex flex-col">
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
                            {presidents.length > 1 && index !== presidents.length - 1 && <hr className="w-full" />}
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl  font-semibold">
                        Vice President Operations Candidate(s):
                    </p>
                    {ops.map((candidate, index) => (
                        <div key={index} className="flex flex-col">
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
                            {ops.length > 1 && index !== ops.length - 1 && <hr className="w-full" />}
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl  font-semibold">
                        Vice President Finance Candidate(s):
                    </p>
                    {finance.map((candidate, index) => (
                        <div key={index} className="flex flex-col">
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
                            {finance.length > 1 && index !== finance.length - 1 && <hr className="w-full" />}
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl  font-semibold">
                        Vice President Communications Candidate(s):
                    </p>
                    {communications.map((candidate, index) => (
                        <div key={index} className="flex flex-col">
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
                            {communications.length > 1 && index !== communications.length - 1 && <hr className="w-full" />}
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Vice President Student Life Candidate(s):
                    </p>
                    {studentlife.map((candidate, index) => (
                        <div key={index} className="flex flex-col">
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
                            {studentlife.length > 1 && index !== studentlife.length - 1 && <hr className="w-full" />}
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Vice President External Candidate(s):
                    </p>
                    {external.map((candidate, index) => (
                        <div key={index} className="flex flex-col">
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
                            {external.length > 1 && index !== external.length - 1 && <hr className="w-full" />}
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Vice President Academics Candidate(s):
                    </p>
                    {academics.map((candidate, index) => (
                        <div key={index} className="flex flex-col">
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
                            {academics.length > 1 && index !== academics.length - 1 && <hr className="w-full" />}
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Vice President Equity Candidate(s):
                    </p>
                    {equity.map((candidate, index) => (
                        <div key={index} className="flex flex-col">
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
                            {equity.length > 1 && index !== equity.length - 1 && <hr className="w-full" />}
                        </div>
                    ))}
                </div>) :
                (<div>
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Biology Director Candidate(s):
                    </p>
                    {bio.map((candidate, index) => (
                        <div key={index} className="flex flex-col">
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
                            {bio.length > 1 && index !== bio.length - 1 && <hr className="w-full" />}
                        </div>
                    ))}

                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Biomedical Sciences Director Candidate(s):
                    </p>
                    {biomed.map((candidate, index) => (
                        <div key={index} className="flex flex-col">
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
                            {biomed.length > 1 && index !== biomed.length - 1 && <hr className="w-full" />}
                        </div>
                    ))}

                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Computer Science Director Candidate(s):
                    </p>
                    {cs.map((candidate, index) => (
                        <div key={index} className="flex flex-col">
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
                            {cs.length > 1 && index !== cs.length - 1 && <hr className="w-full" />}
                        </div>
                    ))}

                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Math and Its Applications Director Candidate(s):
                    </p>
                    {math.map((candidate, index) => (
                        <div key={index} className="flex flex-col">
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
                            {math.length > 1 && index !== math.length - 1 && <hr className="w-full" />}
                        </div>
                    ))}
                </div>
                )
            }
        </>
    );
}