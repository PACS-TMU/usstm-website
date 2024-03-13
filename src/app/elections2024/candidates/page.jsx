import Header from "@/app/_components/general/header";
import Collapsible from "./_components/collapsible";
import CRO from "./_components/cro";

export default function Candidates() {
    return (
        <section id="elections-2024-candidates">
            <Header title={`Candidates for the 2024-25 Board`} />

            <div className="main lg:text-lg">
                <div id="introduction" className="pb-5">
                    <p className="block py-2">
                        The campaigning period has started and will end on March 15th. Please ensure
                        that any campaigning activities are in accordance with
                        the <a href="/assets/governance/election-procedures.pdf" target="_blank">Election Procedures</a>.
                    </p>
                    <p className="block py-2">
                        Meet the candidates for the 2024-25 Board of Directors!
                    </p>
                </div>
                <div className="content">
                    <Collapsible sectionName="Executives" />
                    <Collapsible sectionName="Directors" />
                </div>

                <CRO />
            </div>
        </section>
    );
}