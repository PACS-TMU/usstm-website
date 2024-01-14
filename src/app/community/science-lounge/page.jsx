import Header from "@/app/_components/general/header";
import Image from "next/image";

export default function ScienceLounge() {
    return (
        <section>
            <Header title={`Science Lounge (KHE223)`} />
            <div className="main">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-2/5 lg:text-lg space-y-5 > * + *">
                        <p>
                            The Science Lounge is located on the second floor of Kerr Hall East in KHE 223. The lounge is open to all Faculty of Science students from 7 am - 10 pm Monday to Friday. This space is managed by the VP Operations. If there are any problems with the lounge or any suggestions that you would like to make so we can improve the space, please feel free to email them.
                        </p>
                        <p>
                            It is a great space to do group work, study, and meet with your peers! The USSTM provides casual seating, group work space and individual work space for you to get all of your work done. Science students require their One Card to enter the lounge.
                        </p>
                    </div >
                    <div className="w-full lg:w-3/5 lg:ml-4">
                        <Image
                            src="/images/usstm-people.png"
                            width={2502}
                            height={2560}
                            className="w-full h-auto my-6 lg:my-0"
                            alt="Photo of Science Lounge"
                        />
                    </div>
                </div>
                <div className="w-full my-4">
                <h2 className="pb-3 pt-5 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                            Science Lounge Calender
                        </h2>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&showTitle=0&showTz=0&showPrint=0&showCalendars=0&showTabs=1&title=Sci%20Lounge&src=cnNzb25saW5lLmNhX2xiYzVtbDN1bmhydWwxZDY0a20yNXJjdmNrQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23a48980"
                        className="border-0 w-full"
                        width="600"
                        height="600"
                        frameborder="0" />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col justify-center w-full lg:w-3/5 lg:ml-4">
                        <h2 className="pb-3 pt-5 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide lg:self-center">
                            Layout
                        </h2>
                        <Image
                            src="/images/usstm-people.png"
                            width={2502}
                            height={2560}
                            className="w-full h-auto lg:my-6"
                            alt="Photo of Science Lounge Layout"
                        />
                    </div>
                    <div className="flex-col w-full lg:w-2/5 lg:ml-4">
                        <h2 className="pb-3 pt-5 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide self-center">
                            Rules of the Sci Lounge
                        </h2>
                        <ul>
                            <li>
                                No ipsum dolor sit amet, consectetur adipiscing elit
                            </li>
                            <li>
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
                            </li>
                            <li>
                                Ut mattis metus et justo condimentum venenatis
                            </li>
                            <li>
                                Donec nec ante nec nunc gravida placerat non nec odio
                            </li>
                            <li>
                                Praesent varius elit eu massa vehicula
                            </li>
                            <li>
                                Pellentesque dapibus blandit libero, nec dignissim leo vehicula sit amet. Aliquam ut est sit amet leo sagittis auctor
                            </li>
                        </ul>
                    </div>
                </div>
                <h2 className="pb-3 pt-5 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                    Science Lounge Booking
                </h2>
                <div className="lg:text-lg space-y-5 > * + *">

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean in velit non mauris ultrices posuere eu ac eros.
                        Vestibulum id orci at velit pellentesque hendrerit id at ipsum.
                        Aliquam erat volutpat. Quisque erat diam, facilisis in dictum sit amet,
                        scelerisque dictum tortor. Mauris volutpat, turpis id suscipit laoreet,
                        metus risus elementum nibh, et volutpat nulla enim pulvinar diam. In
                        hendrerit massa a metus molestie, eu fermentum augue mattis.
                        Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae; Phasellus interdum risus elit, et efficitur risus
                        dictum iaculis. Pellentesque volutpat quam vel lectus pretium, nec mollis ante rutrum. Suspendisse potenti.
                    </p>
                    <p>
                        Donec ut accumsan tortor. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia curae; Vivamus
                        aliquam ipsum quis egestas mattis. Nullam semper dui diam, eu
                        ullamcorper felis tincidunt non. Nullam placerat massa diam,
                        sed ultrices lacus vehicula a. In eu nibh tincidunt justo sagittis
                        facilisis. Duis malesuada, massa eu sagittis sollicitudin, lacus
                        turpis dapibus dui, nec aliquam nisl urna sed eros. Vivamus vulputate,
                        sapien ac dapibus interdum, erat felis luctus tellus, nec molestie magna
                        tellus sit amet enim. In ac ultrices ligula.
                    </p>
                </div>
                <h2 className="pb-3 pt-5 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                    Printing
                </h2>
                <div>
                    <p className="lg:text-lg">
                        Nam posuere viverra arcu, gravida suscipit mauris consequat et. 
                        Praesent varius elit eu massa vehicula, vitae vestibulum massa tristique. 
                        Suspendisse gravida lorem ut posuere egestas. Nullam tincidunt 
                        tempor dolor eget faucibus. Cras eu odio quis velit luctus euismod. 
                        Etiam tellus mauris, ullamcorper vitae justo a, consectetur bibendum ante. 
                        Sed lacus mauris, dapibus nec eleifend at, dignissim at lacus. Donec nulla 
                        orci, mollis malesuada turpis vel, finibus maximus eros. Curabitur sed velit
                         vel lectus condimentum volutpat. Donec viverra arcu ante. Mauris at risus 
                         velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                         per inceptos himenaeos. Nulla iaculis leo non turpis blandit scelerisque. 
                         Sed faucibus commodo neque eu posuere. Donec gravida mauris ante, vel pharetra 
                         elit tristique id. Nam eu venenatis tellus.
                    </p>
                </div>
            </div>
        </section>
    )
}