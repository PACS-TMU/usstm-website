import Header from "@/app/_components/general/header";
import Form from "./_components/form";

export default function Contact() {
    return (
        <section>
            <Header title={`Contact Us`} />
            <div className="main text-xl lg:text-2xl">
                Contact the Undergraduate Science Society of Toronto Metropolitan (USSTM) by emailing and directing your communication to the
                portfolio that best fits your inquiry. If you are unsure, please direct your inquiry to the Vice President of Operations.
                The emails are in the format of &apos;POSITION@usstm.ca&apos;. For example, the Vice President of Operations can be reached at 
                &apos;vp.operations@usstm.ca&apos;, the president at &apos;president@usstm.ca&apos;, and so on.
                <br /> <br />
                Contact form coming soon...
            </div>
        </section>
    )
}