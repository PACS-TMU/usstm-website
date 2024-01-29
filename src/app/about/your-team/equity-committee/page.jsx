import Header from "@/app/_components/general/header";
import Committee from "@/app/about/_components/committee"

export default function EquityCommittee() {
    return (
        <section>
            <Header title={`Equity Committee`} />
            <div className="main">
                <Committee fileName="equity" />
            </div>
        </section>
    )
}