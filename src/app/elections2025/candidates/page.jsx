import Header from "@/app/_components/general/header";
import Collapsible from "./_components/collapsible";
import CRO from "./_components/cro";

export default function Candidates() {
    return (
        <section id="elections-2024-candidates">
            <Header title={`Candidates for the 2025-26 By-Election`} />

            <div className="main lg:text-lg">
                <div id="introduction" className="pb-5">
                    <p className="block py-2">
                        The USSTM By-Election for the 2025-2026 board is currently underway! If you have any questions related to the by-election,
                        please contact the Chief Returning Officer at <a href='mailto:cro@usstm.ca' target="_blank">cro@usstm.ca</a>. To see the results,
                        please regularly check our <a href="https://www.instagram.com/usstorontomet/" target="_blank">Instagram page</a>.
                    </p>
                    <p className="block py-2">
                        Meet the candidates who are running in the 2025-26 By-Election for the USSTM Board of Directors!
                    </p>
                </div>
                <div className="content">
                    <Collapsible sectionName="Executives" />
                    {/* <Collapsible sectionName="Directors" /> */}
                </div>

                <CRO />
            </div>
        </section>
    );
}

// import { FaHourglassHalf } from "react-icons/fa";

// export default function Candidates() {
//     return (
//         <section id="elections-2024-candidates">
//             <Header title={`Candidates for the 2025-26 Board`} />
//             <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
//                 <FaHourglassHalf className="text-6xl text-gray-500" />
//                 <h2 className="mt-4 text-3xl font-semibold">Coming Soon</h2>
//                 <p className="mt-2 text-lg text-gray-600">Stay tuned! Candidate details for the 2025-26 board will be available soon.</p>
//             </div>
//         </section>
//     );
// }
