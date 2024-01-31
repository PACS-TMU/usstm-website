import Header from "@/app/_components/general/header";
import Committee from "@/app/about/your-team/_components/committee"

export default function ExternalCommittee() {
    return (
        <section>
            <Header title={`Externals Committee`} />
            <div className="main">
                <Committee fileName="external" />
            </div>
        </section>
    )
}