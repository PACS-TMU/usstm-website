import Image from "next/image";

export default function CRO() {
    return (
        <div className="flex flex-col pt-10 pb-5">
            <h2 className="py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                Meet our CRO!
            </h2>
            <div className="flex flex-col lg:flex-row bg-highlight-blue w-full rounded-md p-8 justify-center items-center">
                <Image
                    overrideSrc={`${process.env.NEXT_PUBLIC_BASE_URL}/images/about/your-team/committees/bod/chairperson.JPG`}
                    loading="lazy"
                    alt="The USSTM Chief Returning Officer for 2025 Elections"
                    width={1000}
                    height={1000}
                    className="w-96 aspect-square mb-4 lg:my-0 object-cover shadow-md rounded-sm mx-auto"
                />
                <div className="lg:p-8 ">
                    <h2 className="py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        The 2025 Chief Returning Officer
                    </h2>
                    <div className="py-2">
                        USSTM Elections are managed each year by a Chief Returning Officer (CRO), someone
                        from outside of the FoS membership to impartially carry out elections. This
                        year, <b>Damian Gavrusenko</b> has been chosen to execute this role. Damian is an 
                        undergraduate student from the faculty of engineering and was trained by the previous
                        chairperson of USSTM. For election related inquiries, please
                        email him at <a href="mailto:cro@usstm.ca">cro@usstm.ca</a>.
                    </div>
                    <div className="py-4">
                        <b>Author&apos;s note:</b> Damian is super cool!
                    </div>
                </div>
            </div>
        </div>
    );
}
