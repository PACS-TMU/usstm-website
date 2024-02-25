'use client';
import Header from "@/app/_components/general/header";
import {RxCross1} from "react-icons/rx";
import Image from "next/image";
import {useState} from "react";

export default function Meetings() {

    const [state, setState] = useState(true);

    return (
        <section>
            <Header title={`Meetings`}/>
            <div className="main space-y-5">
                <div
                    className="flex items-center justify-center bg-[url(/images/about/meetings/usstm-meetings-header-bg.png)] bg-center bg-cover h-52">
                    <div className={'text-6xl'}>
                        Our Meetings
                    </div>
                </div>
                <hr className={'h-0.5 bg-black my-3'}/>
                <div className={'flex flex-col items-center justify-center gap-2'}>
                    <p className={'md:w-2/3 text-center mt-3'}>At USSTM, we value transparency and collaboration, which is why we regularly hold meetings to discuss important matters and make decisions that impact our organization and its members. Our meetings are open to all members, and we encourage everyone to participate and share their ideas.</p>
                    {/*{state &&*/}
                    {/*<div className='border w-26 flex justify-center items-center divide-x'>*/}
                    {/*    <button className={'p-1'}>Click here</button>*/}
                    {/*    <button className={'p-1'} onClick={() => {setState(!state)}}><RxCross1/></button>*/}
                    {/*</div>*/}
                    {/*}*/}
                </div>
                <div className={'space-y-3'}>
                    <h1 className={'py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide'}>Meeting Schedules</h1>
                    <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
                        <div className={'bg-highlight-dark p-4 text-background rounded'}>
                            <h1 className={'text-2xl pb-2'}>Board Meetings</h1>
                            <p>Monday Bi-Weekly</p>
                        </div>
                        <div className={'bg-highlight-dark p-4 text-background rounded'}>
                            <h1 className={'text-2xl pb-2'}>Semi-Annual General Meetings</h1>
                            <p>Mid Fall Semester</p>
                        </div>
                        <div className={'bg-highlight-dark p-4 text-background rounded'}>
                            <h1 className={'text-2xl pb-2'}>Annual General Meetings</h1>
                            <p>Mid Winter Semester</p>
                        </div>
                    </div>
                </div>
                <div className={'grid grid-cols-1 md:grid-cols-2'}>
                    <div className={'bg-highlight-dark p-4 text-background'}>
                        <h1 className={'text-2xl pb-2'}>Robert&apos;s Rules</h1>
                        <p>Robert's Rules of Order is a widely used guide for conducting meetings and making decisions in a fair 
                            and orderly manner. In meetings following Robert's Rules, members can submit motions to propose actions or
                             decisions. To submit a motion, you must email [ops email] with the [motion template] filled out. If you need help
                             filling out the template, please email [vp ops]. Members can also attend meetings by emailing VP Operations. It's important for members to familiarize themselves with the rules 
                             and procedures outlined in Robert's Rules to participate effectively in meetings and contribute to the 
                             decision-making process. </p>
                    </div>
                    <div>
                        <Image className={'w-full'} src={'/images/usstm-people.png'} alt={'USSTM People'} width={500} height={500}/>
                    </div>
                </div>
            </div>
        </section>
    )
}