import Header from "@/app/_components/general/header";
import Image from "next/image";
import { Brygada_1918 } from "next/font/google";
import NumberEntry from "./_components/numberEntry";

const brygada = Brygada_1918({ subsets: ["latin"] });

export default function Policies() {
    return (
        <section>
            <Header title={`Financial Policies`} />
            <div className="main">
                <div className="w-full md:w-5/6 flex shadow-md mx-auto bg-highlight-blue">
                    <div className="w-[55%] min-h-full flex flex-col justify-center py-6">
                        <h2 className="pb-8 px-4 md:px-6 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                            PURPOSE
                        </h2>

                        <hr className="w-full border-foreground" />
                        <NumberEntry 
                            number={1}
                            title={`TRANSPARENCY`}
                            description={`We believe in transparency and honesty, and these financial policies help us to be transparent in our financial dealings.`}
                        />


                        <hr className="w-full border-foreground" />
                        <NumberEntry
                            number={2}
                            title={`ACCOUNTABILITY`}
                            description={`Creating the financial policies makes us accountable to the people we serve and the people who support us.`}
                        />

                        <hr className="w-full border-foreground" />
                        <NumberEntry 
                            number={3}
                            title={`STRUCTURE`}
                            description={`Having financial policies in place helps us to have a clear structure for our financial dealings.`}
                        />

                        <hr className="w-full border-foreground" />
                        <NumberEntry 
                            number={4}
                            title={`GUIDANCE`}
                            description={`The financial policies help us to provide our students and groups with guidance on how to request and use funds.`}
                        />

                        <hr className="w-full border-foreground" />
                    </div>
                    <div className="w-[45%] min-h-full">
                        <Image
                            src="/images/usstm-people.png"
                            alt="Purpose Graphic"
                            width={1200}
                            height={800}
                            className="object-cover h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}