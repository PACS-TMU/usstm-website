import Link from "next/link";

export default function Membership() {
    return(

        <div id="membership-information">
        <h2 className="py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">Membership Information</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] items-center justify-start lg:justify-center">
            <section className="px-4">
                <p className="py-2">
                    As students in our membership, you are able to make sure we are doing what you want us to be doing. Contact us with event ideas,
                    new services you want offered and criticisms or complaints that you have. If you see that we are not following our Constitution,
                    By-Laws or other policies (<a href="#governance-policies">below</a>) you are the ones that can call us out for that. Attend our Board Meetings (email <a href="mailto:vp.operations@usstm.ca">vp.operations@usstm.ca</a> to attend) and come to General Meetings.
                </p>
                <p className="pb-2">
                    Our board also has several non-voting members and each executive overseas at least one committee. A chairperson is also hired
                    to facilitate our meetings using Robart&apos;s Rules of Order and they are assisted by the Secretary who takes meeting minutes. We are
                    also supported by a full-time staff person who works in the Dean&apos;s Office. Their position is the Manager of Student Relations and
                    Development and they work to support all students with their extra-curricular development.
                </p>
                <p className="pb-2">

                </p>
                <p className="pb-2">
                    For information on applying to the USSTM for funding, please visit our <Link href="/finances/budget">Budget Page</Link>. More information
                    regarding the previous year&apos;s budget can be found in the following links:
                </p>
            </section>
        </div>
    </div>
    )
}