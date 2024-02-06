import "./usstm.css";

export default function usstm() {
    return (
        <>
            <section id="what-is-usstm" className="main">
                <div className="what-usstm-bar bg-highlight-dark h-6 mt-10 ml-auto mr-0 z-10 relative"></div>
                <div
                    id="what-usstm-grid"
                    className="mx-auto text-center lg:text-left grid mb-11 -mt-3"
                >
                    <div className="what-usstm-heading sm:mt-4 md:mt-7">
                        <h1 className="text-6xl lg:text-8xl text-highlight-dark p-5 ml-0 lg:ml-9">
                            About Us
                        </h1>
                    </div>
                    <div className="what-usstm-text bg-highlight-blue">
                        <p className="p-5 mx-2 my-2 lg:ml-5 lg:mr-0 lg:mt-5 lg:mb-5 text-lg text-left md:text-justify">
                            The Undergraduate Science Society of Toronto Metropolitan (USSTM) stands as the esteemed 
                            representative body for students within the Faculty of Science at Toronto Metropolitan University. 
                            Emanating from a commitment to academic excellence, community engagement, and student welfare, 
                            USSTM embodies the collective aspirations of the undergraduate science community. Governed by 
                            elected members of the student body, USSTM orchestrates a spectrum of impactful events, delivers essential services, 
                            and facilitates a platform for constructive dialogue. As stewards of transparency and governance, 
                            USSTM adheres to a constitution, by-laws, and financial policies that uphold the highest standards 
                            of operation. In essence, USSTM is an institutional pillar, fostering a conducive environment for 
                            academic growth, community cohesion, and the realization of shared ambitions of science students.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
