"use client";
import Header from "@/app/_components/general/header";
import Image from "next/image";
import { orientationTeam } from "./team";
import Carousel from "./carousel";
import OrientationFAQ from "./orientationFaq";
import { carouselImages } from "./carouselImages";

export default function Orientation() {
    return (
        <section id="orientation">
            <Header title={`Orientation`} />
            <div className="main lg:text-lg">
                <div className="flex flex-col items-center justify-center py-20 h-[calc(100dvh-240px)]">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide mb-4">Registration for 2025 Orientation will begin in August!</h2>
                    <p className="text-lg lg:text-xl xl:text-2xl text-center">Stay tuned for more details.</p>
                </div>
                {/*
                <Image
                    overrideSrc={`${process.env.NEXT_PUBLIC_BASE_URL}/images/events/orientation/banner.png`}
                    alt="Orientation Banner"
                    width={2160}
                    height={1080}
                    priority={true}
                />
                <div id="about-orientation">
                    <h2 className="pb-2 pt-7 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        About Orientation
                    </h2>
                    <div className="space-y-4 mt-1">
                        <p>
                            Since the creation of the Undergraduate Student Society of Toronto Metropolitan University in 2012,
                            the Faculty of Science (FoS) has hosted Science Orientation/SciFrosh for incoming students. Science
                            Orientation was made to celebrate, welcome, and develop a community for all students entering the Faculty
                            of Science. It was until 2016 where the responsibility of Orientation was placed onto the Orientation Committee
                            to continue the efforts of the USSTM. Since then, Science Orientation has evolved to not only provide a welcoming
                            space for students, but also an opportunity to create friendships and gain knowledge for their entire university
                            career. For some more cool stuff and updates follow our Instagram: <a href="https://www.instagram.com/scifroshtmu/" target="_blank">@scifroshtmu</a>.
                        </p>
                        <p>
                            This webpage will provide you with all the information that you will need to attend and navigate Science Orientation 2024.
                        </p>
                    </div>
                    <div
                        id="register-orientation"
                        className="mt-4 flex flex-col items-center justify-center text-lg lg:text-xl xl:text-2xl"
                    >
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf4DrsvxKbpEJzR1M9Ne8NRoNsZsYj2agQ4lqY4L6-6Ax1r0g/viewform"
                            target="_blank"
                            className="bg-highlight-dark hover:scale-105 transition-transform ease-in-out duration-300 text-background underline font-semibold py-3 px-5 rounded mt-4"
                        >
                            REGISTER NOW!
                        </a>
                    </div>
                </div>
                <div id="meet-team-orientation">
                    <h2 className="pb-2 pt-7 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Meet The Team
                    </h2>
                    <div className="space-y-4 mt-1">
                        <ul className="space-y-2">
                            {orientationTeam.map((member) => (
                                <li key={member.id} className="text-lg lg:text-xl">
                                    <span className="font-semibold">{member.position}</span>: {member.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div id="blast-past-orientation">
                    <h2 className="pb-2 pt-7 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Blast From The Past
                    </h2>
                    <div className="space-y-4 mt-1">
                        <p>
                            Take a look at some of our memories from past Orientation events!
                        </p>
                        <Carousel
                            imgList={carouselImages}
                        />
                    </div>
                </div>
                <div id="theme-orientation">
                    <h2 className="pb-2 pt-7 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Theme - FROSH GAME!
                    </h2>
                    <div className="space-y-4 mt-2">
                        <p>
                            This year&apos;s theme is.... <span className="font-semibold text-xl">FROSH GAME!</span> <br />
                            We are so thrilled to have you join us for a week full of exciting squid game inspired events.
                        </p>
                        <Image
                            overrideSrc={`${process.env.NEXT_PUBLIC_BASE_URL}/images/events/orientation/schedule.png`}
                            alt="Orientation Schedule"
                            width={2160}
                            height={1080}
                            priority={true}
                        />
                    </div>
                </div>
                <div id="faq-orientation">
                    <h2 className="pb-2 pt-7 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
                        Frequently Asked Questions
                    </h2>
                    <OrientationFAQ />
                    <p className="mt-4 text-lg lg:text-xl">
                      If you have any further questions or concerns, please do not hesitate to contact us 
                      at <a href="mailto:orientation@usstm.ca">orientation@usstm.ca</a>.
                    </p>
                </div>
                */}
            </div>
        </section>
    )
}
