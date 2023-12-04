export default function Pillars() {
  return (
    <>
        <section id="pillars" className="my-12">
            <div className="pillars-container flex justify-evenly items-center min-h-screen max-w-screen relative">
                <div className="banner bg-highlight-dark min-w-full h-full lg:h-3/4 max-w-screen absolute self-center"></div>
                <div className="pillar-grid main h-full py-6 gap-y-4 grid grid-cols-1 lg:grid-cols-2 absolute">
                    <div className="pillar-text text-background h-full relative flex justify-center items-center">
                        <h1 className="text-6xl lg:text-8xl text-background lg:px-8 lg:mx-8 text-center">OUR FOUR PILLARS</h1>
                    </div>
                    <div className="pillar-cirlces h-full relative py-6 gap-6 lg:gap-y-20 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-5 max-h-[100%]">
                        <div className="pillar1 rounded-full w-[50%] lg:w-[80%] aspect-square row-start-1 col-start-1 lg:row-span-2 self-center justify-self-center flex items-center justify-center bg-highlight">
                            <h2 className="text-background text-2xl text-center">CONSISTENCY</h2>
                        </div>
                        <div className="pillar2 rounded-full w-[50%] lg:w-[80%] aspect-square row-start-2 lg:col-start-2 lg:row-span-2 lg:row-end-3 self-center justify-self-center flex items-center justify-center bg-highlight">
                            <h2 className="text-background text-2xl text-center">TRANSPARENCY</h2>
                        </div>
                        <div className="pillar3 rounded-full w-[50%] lg:w-[80%] aspect-square row-start-3 col-start-1 lg:row-span-2 lg:row-end-4 self-center justify-self-center flex items-center justify-center bg-highlight">
                            <h2 className="text-background text-2xl text-center">SUPPORT</h2>
                        </div>
                        <div className="pillar4 rounded-full w-[50%] lg:w-[80%] aspect-square row-start-4 lg:col-start-2 lg:row-span-2 lg:row-end-5 self-center justify-self-center flex items-center justify-center bg-highlight">
                            <h2 className="text-background text-2xl text-center">UNITY</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
