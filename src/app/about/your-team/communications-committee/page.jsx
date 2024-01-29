import Header from "@/app/_components/general/header";
import Committee from "@/app/about/_components/committee"

export default function CommsCommittee() {
    return (
        <section>
            <Header title={`Communication Committee`} />
            <div className="main">
                <Committee fileName="comms.json" />
            </div>
        </section>
    )
}