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
                        Elections for the 2024-2025 board is now done! If you have any elections related questions,
                        please contact the Chief Returning Officer at <a href='mailto:cro@usstm.ca' target="_blank">cro@usstm.ca</a>. To
                        see the results, please visit our <a href="https://www.instagram.com/usstorontomet/" target="_blank">instagram page</a>.
                    </p>
                    <p className="block py-2">
                        Meet the candidates who ran for the 2024-25 Board of Directors!
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