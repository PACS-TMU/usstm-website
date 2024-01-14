import Header from "@/app/_components/general/header";

export default function Feedback() {
    return (
        <section>
            <Header title={`Academic Feedback Form`} />
            <div className="main">
                <p className="lg:text-lg pb-4 text-left max-w-7xl mx-auto">
                    This form is for the USSTM to gather information and experiences from students who believe their course or professor was unfair, unhelpful or 
                    if someone was mistreated by an instructor in a course.
                </p>
                <p className="lg:text-lg pb-4 text-left max-w-7xl mx-auto">
                    Please let us keep this professional and constructive, the purpose is to give ANONYMOUS 
                    feedback to the professor and the faculty so we can work together to improve our learning environment! Filling out this form does not mean that 
                    any issues will be solved, however we promise that we will do our best to address them.
                </p>
                <p className="lg:text-lg pb-4 text-left max-w-7xl mx-auto">
                    If you have any questions or concerns, please reach out to our VP Academic 
                    at <a href="mailto:vp.academic@usstm.ca" target="_blank">vp.academic@usstm.ca</a>.
                </p>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfoAHIv_COKTku-omHjU7jCdPrShy9gxLLBMiF3eqkGFvnuTg/viewform?embedded=true"
                    width="640"
                    height="1720"
                    className="mx-auto w-full"
                >
                    Loading…
                </iframe>
            </div>
        </section>
    )
}