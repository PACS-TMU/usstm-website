import Header from "@/app/_components/general/header";
import Committee from "@/app/about/your-team/_components/committee"

export default function Director() {
    return (
        <section>
            <Header title={`Board of Directors`} />
            <div className="main">
                <Committee fileName="bod" />
            </div>
        </section>
    )
}