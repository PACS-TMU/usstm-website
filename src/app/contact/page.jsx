import Header from "@/app/_components/general/header";
import Form from "./_components/form";

export default function Contact() {
    return (
        <section>
            <Header title={`Contact Us`} />
            <div className="main">
                <Form />
            </div>
        </section>
    )
}