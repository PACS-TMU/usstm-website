import Header from "@/app/_components/general/header";
import Committee from "@/app/about/_components/committee"

export default function EventsCommittee() {
    return (
        <section>
            <Header title={`Events Committee`} />
            <div className="main">
                <Committee fileName="events" />
            </div>
        </section>
    )
}