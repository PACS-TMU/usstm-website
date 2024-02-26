import Header from "@/app/_components/general/header";
import Image from "next/image";

export default function Meetings() {
    return (
        <section>
            <Header title={`Meetings`} />
            <div className="main space-y-5 lg:text-lg">
                <div
                    className="flex items-center justify-center bg-[url(/images/about/meetings/usstm-meetings-header-bg.png)] bg-center bg-cover h-52">
                    <div className={'text-4xl lg:text-6xl'}>
                        Our Meetings
                    </div>
                </div>
                <hr className={'h-0.5 bg-black my-3'} />
                <div className={'flex flex-col items-center justify-center gap-2'}>
                    <p className={'md:w-2/3 text-center mt-3'}>
                        At USSTM, we value transparency and collaboration, which is why we regularly hold
                        meetings to discuss important matters and make decisions that impact our organization
                        and its members. Our meetings are open to all members, and we encourage everyone to
                        participate and share their ideas.
                    </p>
                </div>
                <div className={'space-y-3'}>
                    <h1 className={'py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide'}>Meeting Schedules</h1>
                    <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
                        <div className={'bg-highlight-blue p-4 text-foreground rounded shadow-md'}>
                            <h1 className={'text-2xl pb-2 font-serif font-semibold'}>
                                Board Meetings
                            </h1>
                            <p>
                                Bi-Weekly, Every other Monday
                            </p>
                        </div>
                        <div className={'bg-highlight-blue p-4 text-foreground rounded shadow-md'}>
                            <h1 className={'text-2xl pb-2 font-serif font-semibold'}>
                                Semi-Annual General Meetings
                            </h1>
                            <p>
                                Mid-Fall Semester
                            </p>
                        </div>
                        <div className={'bg-highlight-blue p-4 text-foreground rounded shadow-md'}>
                            <h1 className={'text-2xl pb-2 font-serif font-semibold'}>
                                Annual General Meetings
                            </h1>
                            <p>
                                Mid-Winter Semester
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'bg-highlight-blue text-foreground shadow-sm lg:shadow-md rounded grid grid-rows-[auto_auto] grid-cols-1 md:grid-rows-1 md:grid-cols-2'}>
                    <div className="text p-4">
                        <h1 className={'text-2xl pb-2 font-serif font-semibold'}>Robert&apos;s Rules</h1>
                        <p>
                            Robert&apos;s Rules of Order is a widely used guide for conducting meetings and making decisions in a fair
                            and orderly manner. In meetings following Robert&apos;s Rules, members can submit motions to propose actions or
                            decisions. To submit a motion, you must email <a href="mailto:vp.operations@usstm.ca">VP Operations</a> with
                            the <a href="https://docs.google.com/document/d/1V06RwQng0UArh4cgS8GmLEINj-rxbdVTeJKxbVzOJqQ/view" target="_blank">motion template</a> filled 
                            out. If you need help filling out the template, please email VP Operations. Members can also attend meetings by
                            emailing <a href="mailto:vp.operations@usstm.ca">VP Operations</a>. It&apos;s important for members to familiarize themselves with the rules
                            and procedures outlined in Robert&apos;s Rules to participate effectively in meetings and contribute to the
                            decision-making process.
                        </p>
                    </div>
                    <div className="image">
                        <Image
                            className={'w-auto h-full object-cover'}
                            src={'/images/about/meetings/meetings-graphic.jpg'}
                            alt={'Meetings Graphic'}
                            width={750}
                            height={750}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}