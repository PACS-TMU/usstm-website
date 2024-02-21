import "./pillars.css";

export default function Pillars() {
  return (
    <>
        <section id="pillars">
            <div className="pillars-container flex justify-evenly items-center min-h-screen max-w-screen relative">
                <div className="banner bg-highlight-dark min-w-full h-full lg:h-3/4 max-w-screen absolute self-center"></div>
                <div className="pillar-grid main h-full py-6 gap-y-4 grid grid-cols-1 lg:grid-cols-2 absolute">
                    <div className="pillar-text text-background h-full relative flex justify-center items-center">
                        <h1 className="text-6xl lg:text-8xl text-background lg:px-8 lg:mx-8 text-center">Our Four Pillars</h1>
                    </div>
                    <div className="pillar-cirlces h-full py-2 relative gap-6 lg:gap-y-20 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-5 max-h-[100%]">
                        <div className="pillar1 cardBox perspective rounded-full mr-[40%] w-[50%] lg:mr-0 lg:w-[80%] xl:w-[90%] row-start-1 col-start-1 lg:row-span-2 self-center justify-self-center flex items-center justify-center">
                            <div className="card w-full h-full rounded-full aspect-square bg-highlight">
                                <div className="cardFront h-full flex justify-center items-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-md lg:text-lg xl:text-2xl text-center font-sans">
                                    CONSISTENCY
                                </div>
                                <div className="cardBack h-full hidden xl:flex justify-center items-center self-center text-white text-md text-center">
                                    We maintain a steady approach, ensuring our actions and decisions align with established standards and values consistently.
                                </div>
                            </div>
                        </div>
                        <div className="pillar2 cardBox perspective rounded-full ml-[40%] w-[50%] lg:ml-0 lg:w-[80%] xl:w-[85%] row-start-2 lg:col-start-2 lg:row-span-2 lg:row-end-3 self-center justify-self-center flex items-center justify-center">
                            <div className="card w-full h-full rounded-full aspect-square bg-highlight">
                                <div className="cardFront h-full flex justify-center items-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-md lg:text-lg xl:text-2xl text-center font-sans">
                                    TRANSPARENCY
                                </div>
                                <div className="cardBack h-full hidden xl:flex justify-center items-center self-center text-background text-md text-center">
                                    We prioritize open communication, providing accessible information to build trust and understanding among our members.
                                </div>
                            </div>
                        </div>
                        <div className="pillar3 cardBox perspective rounded-full mr-[40%] w-[50%] lg:mr-0 lg:w-[80%] xl:w-[90%] row-start-3 col-start-1 lg:row-span-2 lg:row-end-4 self-center justify-self-center flex items-center justify-center">
                            <div className="card w-full h-full rounded-full aspect-square bg-highlight">
                                <div className="cardFront h-full flex justify-center items-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-md lg:text-lg xl:text-2xl text-center font-sans">
                                    SUPPORT
                                </div>
                                <div className="cardBack h-full hidden xl:flex justify-center items-center self-center text-background text-md text-center">
                                    We offer assistance, encouragement, and resources, fostering an environment where every member feels valued and empowered to succeed.
                                </div>
                            </div>
                        </div>
                        <div className="pillar4 cardBox perspective rounded-full ml-[40%] w-[50%] lg:ml-0 lg:w-[80%] xl:w-[90%] row-start-4 lg:col-start-2 lg:row-span-2 lg:row-end-5 self-center justify-self-center flex items-center justify-center">
                            <div className="card w-full h-full rounded-full aspect-square bg-highlight">
                                <div className="cardFront h-full flex justify-center items-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-md lg:text-lg xl:text-2xl text-center font-sans">
                                    UNITY
                                </div>
                                <div className="cardBack h-full hidden xl:flex justify-center items-center self-center text-background text-md text-center">
                                    We promote collaboration and teamwork, celebrating diversity and achieving success together through our cohesive community.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
