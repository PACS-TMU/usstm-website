import Link from "next/link";

export default function Meeting() {
    return (
        <div id="meeting-information">
            <h2 className="py-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">General Meetings Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] items-center justify-start lg:justify-center">
                <section className="px-4">
                    <p className="py-2">
                        The USSTM has two general meetings (at minimum) each year, typically taking place in the middle of each semester. At these meetings, all
                        science students are invited to attend and raise issues and vote on things. You can submit motions to the VP Operations up to 7 days prior to
                        the General Meeting. General meetings must be communicated to the membership at least 15 days before the date of it.
                    </p>
                    <p className="py-2">
                        Documents used for the General Meetings are the following: the Constitution, By-Laws, Financial Policies. Refer to the last updated versions of the
                        documents located in the Governing Documents section of this page. Any motions discussed in the meeting may use any of these documents as reference.
                    </p>
                    <p className="py-2">
                        For more information about General Meetings, please refer to our <Link href="/about/meetings">Meetings Page</Link>.
                    </p>
                </section>
            </div>
        </div>
    )
}