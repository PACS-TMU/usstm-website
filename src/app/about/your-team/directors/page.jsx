import Header from "@/app/_components/general/header";
import CommitteeBOD from "@/app/about/your-team/_components/committeeBod"

export default function Director() {
    return (
        <section>
            <Header title={`Board of Directors`} />
            <div className="main">
                <CommitteeBOD fileName="bod" />
            </div>
        </section>
    )
}