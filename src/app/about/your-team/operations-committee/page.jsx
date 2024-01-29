import Header from "@/app/_components/general/header";
import Committee from "@/app/about/_components/committee"

export default function OperationsCommittee() {
    return (
        <section>
            <Header title={`Operations Committee`} />
            <div className="main">
            <Committee fileName="ops.json" />
            </div>
        </section>
    )
}