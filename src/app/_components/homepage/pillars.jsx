export default function Pillars() {
  return (
    <>
        <section id="pillars">
            <div className="pillars-container flex justify-evenly items-center min-h-screen w-screen relative">
                <div className="banner bg-highlight-dark min-w-full h-3/4 absolute top-[12.5%]"></div>
                <div className="pillar-grid h-full grid grid-cols-1 lg:grid-cols-2 items-center absolute">
                    <div className="pillar-text text-background flex justify-center items-center">
                        <h1 className="text-8xl px-8">OUR FOUR PILLARS</h1>
                    </div>
                    <div className="pillar-cirlces gap-6 grid grid-cols-4 grid-row-5 justify-center items-center">
                        <div className="pillar1 rounded-full h-48 aspect-square row-start-1 col-start-1 row-span-2 col-span-2 bg-highlight">CONSISTENCY</div>
                        <div className="pillar2 rounded-full h-48 aspect-square row-start-2 col-start-3 row-span-2 col-span-2 bg-highlight">TRANSPARENCY</div>
                        <div className="pillar3 rounded-full h-48 aspect-square row-start-3 col-start-1 row-span-2 col-span-2 bg-highlight">SUPPORT</div>
                        <div className="pillar4 rounded-full h-48 aspect-square row-start-4 col-start-3 row-span-2 col-span-2 bg-highlight">UNITY</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
