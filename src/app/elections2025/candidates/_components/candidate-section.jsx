import Candidate from "./candidate";

export default function CandidateSection({ role, candidates }) {

    // let presidents = [];
    // let ops = [];
    // let finance = [];
    let communications = [];
    // let studentlife = [];
    // let academics = [];
    // let external = [];
    // let equity = [];
    let bio = [];
    let biomed = [];
    let cs = [];
    let chem = [];
    // let math = [];

    if (role === "Executives") {
        // presidents = candidates[0];
        // ops = candidates[1];
        // finance = candidates[2];
        communications = candidates[0];
        // studentlife = candidates[4];
        // academics = candidates[3];
        // external = candidates[4];
        // equity = candidates[5];
    }
    else if (role === "Directors") {
        bio = candidates[0];
        biomed = candidates[1];
        cs = candidates[2];
        chem = candidates[3];
        //math = candidates[3];
    }
    else {
        console.error('Invalid role:', role);
    }

    return (
        <>
            {role === "Executives" ?
                (<div>
                    {/* <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl  font-semibold">
                        President Candidate(s):
                    </p>
                    {presidents.map((candidate, index) => (
                        <div key={index}>
                            <Candidate index={index} candidate={candidate} list={presidents} />
                            <hr className="w-full py-6 mt-6" />
                        </div>
                    ))}
                    <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl  font-semibold">
                        Vice President Operations Candidate(s):
                    </p>
                    {ops.map((candidate, index) => (
                        <div key={index}>
                            <Candidate index={index} candidate={candidate} list={ops} />
                            <hr className="w-full py-6 mt-6" />
                        </div>
                    ))}
                    <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl  font-semibold">
                        Vice President Finance Candidate(s):
                    </p>
                    {finance.map((candidate, index) => (
                        <div key={index}>
                            <Candidate index={index} candidate={candidate} list={finance} />
                            <hr className="w-full py-6 mt-6" />
                        </div>
                    ))} */}
                     <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl  font-semibold">
                        Vice President Communications Candidate(s):
                    </p>
                    {communications.map((candidate, index) => (
                        <Candidate key={index} index={index} candidate={candidate} list={communications} />
                    ))}
                    {/* <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Vice President Student Life Candidate(s):
                    </p>
                    {studentlife.map((candidate, index) => (
                        <Candidate key={index} index={index} candidate={candidate} list={studentlife} />
                    ))}
                    <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Vice President External Candidate(s):
                    </p>
                    {external.map((candidate, index) => (
                        <div key={index}>
                            <Candidate index={index} candidate={candidate} list={external} />
                            <hr className="w-full py-6 mt-6" />
                        </div>
                    ))}
                    <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Vice President Academics Candidate(s):
                    </p>
                    {academics.map((candidate, index) => (
                        <div key={index}>
                            <Candidate index={index} candidate={candidate} list={academics} />
                            <hr className="w-full py-6 mt-6" />
                        </div>
                    ))}
                    <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Vice President Equity Candidate(s):
                    </p>
                    {equity.map((candidate, index) => (
                        <div key={index}>
                            <Candidate index={index} candidate={candidate} list={equity} />
                            <hr className="w-full py-6 mt-6" />
                        </div>
                    ))} */}
                </div>) :
                (<div>
                    <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Biology Director Candidate(s):
                    </p>
                    {bio.map((candidate, index) => (
                        <Candidate key={index} index={index} candidate={candidate} list={bio} />
                    ))}

                    <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Biomedical Sciences Director Candidate(s):
                    </p>
                    {biomed.map((candidate, index) => (
                        <div key={index}>
                            <Candidate index={index} candidate={candidate} list={biomed} />
                            <hr className="w-full py-6 mt-6" />
                        </div>
                    ))}

                    <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Computer Science Director Candidate(s):
                    </p>
                    {cs.map((candidate, index) => (
                        <div key={index}>
                            <Candidate index={index} candidate={candidate} list={cs} />
                            <hr className="w-full py-6 mt-6" />
                        </div>
                    ))}

                    <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Chemistry Director Candidate(s):
                    </p>
                    {chem.map((candidate, index) => (
                        <div key={index}>
                            <Candidate index={index} candidate={candidate} list={chem} />
                            <hr className="w-full py-6 mt-6" />
                        </div>
                    ))}

                    {/* <p className="text-lg lg:mx-2 mb-4 mt-6 lg:text-xl xl:text-2xl font-semibold">
                        Math and Its Applications Director Candidate(s):
                    </p>
                    {math.map((candidate, index) => (
                        <Candidate key={index} index={index} candidate={candidate} list={math} />
                    ))} */}
                </div>
                )
            }
        </>
    );
}