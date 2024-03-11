import Image from "next/image";

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
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left">
                                <Image
                                    // src={`/images/elections2024/candidates/${president.image}`}
                                    src={`/images/usstm-people.png`}
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
                            <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:py-8">
                                <p className="text-lg lg:text-xl lg:pr-4 text-left">{candidate.bio}</p>
                            </div>
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl  font-semibold">
                        Vice President Operations Candidate(s):
                    </p>
                    {ops.map((candidate, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left">
                                <Image
                                    // src={`/images/elections2024/candidates/${candidate.image}`}
                                    src={`/images/usstm-people.png`}
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
                            <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:py-8">
                                <p className="text-lg lg:text-xl lg:pr-4 text-left">{candidate.bio}</p>
                            </div>
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl  font-semibold">
                        Vice President Finance Candidate(s):
                    </p>
                    {finance.map((candidate, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-evenly lg:items-center">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left">
                                <Image
                                    // src={`/images/elections2024/candidates/${candidate.image}`}
                                    src={`/images/usstm-people.png`}
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
                            <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:py-8">
                                <p className="text-lg lg:text-xl lg:pr-4 text-left">{candidate.bio}</p>
                            </div>
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl  font-semibold">
                        Vice President Communications Candidate(s):
                    </p>
                    {communications.map((candidate, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left">
                                <Image
                                    // src={`/images/elections2024/candidates/${candidate.image}`}
                                    src={`/images/usstm-people.png`}
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
                            <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:py-8">
                                <p className="text-lg lg:text-xl lg:pr-4 text-left">{candidate.bio}</p>
                            </div>
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl  font-semibold">
                        Vice President Student Life Candidate(s):
                    </p>
                    {studentlife.map((candidate, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left">
                                <Image
                                    // src={`/images/elections2024/candidates/${candidate.image}`}
                                    src={`/images/usstm-people.png`}
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
                            <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:py-8">
                                <p className="text-lg lg:text-xl lg:pr-4 text-left">{candidate.bio}</p>
                            </div>
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Vice President External Candidate(s):
                    </p>
                    {external.map((candidate, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left">
                                <Image
                                    // src={`/images/elections2024/candidates/${candidate.image}`}
                                    src={`/images/usstm-people.png`}
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
                            <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:py-8">
                                <p className="text-lg lg:text-xl lg:pr-4 text-left">{candidate.bio}</p>
                            </div>
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Vice President Academics Candidate(s):
                    </p>
                    {academics.map((candidate, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left">
                                <Image
                                    // src={`/images/elections2024/candidates/${candidate.image}`}
                                    src={`/images/usstm-people.png`}
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
                            <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:py-8">
                                <p className="text-lg lg:text-xl lg:pr-4 text-left">{candidate.bio}</p>
                            </div>
                        </div>
                    ))}
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Vice President Equity Candidate(s):
                    </p>
                    {equity.map((candidate, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left">
                                <Image
                                    // src={`/images/elections2024/candidates/${candidate.image}`}
                                    src={`/images/usstm-people.png`}
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
                            <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:py-8">
                                <p className="text-lg lg:text-xl lg:pr-4 text-left">{candidate.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>) :
                (<div>
                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Biology Director Candidate(s):
                    </p>
                    {bio.map((candidate, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left">
                                <Image
                                    // src={`/images/elections2024/candidates/${president.image}`}
                                    src={`/images/usstm-people.png`}
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
                            <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:py-8">
                                <p className="text-lg lg:text-xl lg:pr-4 text-left">{candidate.bio}</p>
                            </div>
                        </div>
                    ))}

                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Biomedical Sciences Director Candidate(s):
                    </p>
                    {biomed.map((candidate, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left">
                                <Image
                                    // src={`/images/elections2024/candidates/${president.image}`}
                                    src={`/images/usstm-people.png`}
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
                            <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:py-8">
                                <p className="text-lg lg:text-xl lg:pr-4 text-left">{candidate.bio}</p>
                            </div>
                        </div>
                    ))}

                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Computer Science Director Candidate(s):
                    </p>
                    {cs.map((candidate, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left">
                                <Image
                                    // src={`/images/elections2024/candidates/${president.image}`}
                                    src={`/images/usstm-people.png`}
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
                            <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:py-8">
                                <p className="text-lg lg:text-xl lg:pr-4 text-left">{candidate.bio}</p>
                            </div>
                        </div>
                    ))}

                    <p className="text-lg mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Math and Its Applications Director Candidate(s):
                    </p>
                    {math.map((candidate, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:w-[50%] lg:max-w-[50%] lg:text-left">
                                <Image
                                    // src={`/images/elections2024/candidates/${president.image}`}
                                    src={`/images/usstm-people.png`}
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
                            <div className="flex flex-col lg:flex-row items-center lg:max-w-[50%] lg:justify-end py-4 lg:py-8">
                                <p className="text-lg lg:text-xl lg:pr-4 text-left">{candidate.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
                )
            }
        </>
    );
}