import Header from "@/app/_components/general/header";
import Committee from "@/app/about/_components/committee"

export default function Director() {
    return (
        <section>
            <Header title={`Board of Director`} />
            <div className="main">
                <Committee fileName="bod.json" />
            </div>
        </section>
    )
}