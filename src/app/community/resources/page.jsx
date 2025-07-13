import Header from "@/app/_components/general/header";


export default function Resources() {
    return (
        <section className="resources-page lg:text-lg">
            <Header title="Resources" />
            <div className="main">
                {/* Introduction */}
                <div id="introduction" className="px-6 pb-6">
                    <p className="block py-2">
                        Welcome to the USSTM Resources page! Here, you will find a variety of resources designed to support your academic and personal growth.
                        Whether you&apos;re looking for academic support, mental health resources, or information about USSTM events, we&apos;ve got you covered.
                    </p>
                </div>

                
            <div className="content px-6">
                <h2 className="py-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">International Student Housing Booklet</h2>
                <p className="lg:text-lg pb-4 text-left">
                    The International Student Housing Booklet is a comprehensive guide designed to assist international students in finding suitable housing options in Toronto.

                    It provides valuable information on various types of accommodations and resources to help you settle into your new home.

                    <br />
                    <br />
                    Thanks to Tamara Beriia for creating this resource!
                </p>
                <div className="w-full flex justify-center pb-8">
                    <iframe
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/documents/International-Students-Housing-Booklet.pdf`}
                        title="International Student Housing Booklet"
                        width="100%"
                        height="700px"
                        className="border rounded-lg shadow"
                    />
                </div>
                </div>
            </div>
        </section>
    );
}