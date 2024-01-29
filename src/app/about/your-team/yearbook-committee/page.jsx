import Header from "@/app/_components/general/header";
import Committee from "@/app/about/_components/committee"

export default function YearbookCommittee() {
    return (
        <section>
            <Header title={`Yearbook Committee`} />
            <div className="main">
                <Committee />
            </div>
        </section>
    )
}