import Header from "@/app/_components/general/header";
import Committee from "@/app/about/_components/committee"

export default function FinanceCommittee() {
    return (
        <section>
            <Header title={`Finance Committee`} />
            <div className="main">
            <Committee fileName="fin.json" />
            </div>
        </section>
    )
}