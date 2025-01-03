import Header from "@/app/_components/general/header";
import Committee from "@/app/about/your-team/_components/committee"

export default function AcademicsCommittee() {
    return (
        <section>
            <Header title={`Academics Committee`} />
            <div className="main">
                <Committee fileName="academics" group="none" />
            </div>
        </section>
    )
}