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
                    <h2 className={'text-center text-2xl font-serif'}>Small Title</h2>
                    <h1 className={'text-center text-4xl'}>Large Title</h1>
                    <p className={'md:w-2/3 text-center mt-3'}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.</p>
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
                            <h1 className={'text-2xl'}>Bi-Weekly Board Meetings</h1>
                            <p>Some text</p>
                        </div>
                        <div className={'bg-highlight-dark p-4 text-background rounded'}>
                            <h1 className={'text-2xl'}>Semi-Annual General Meetings</h1>
                            <p>Mid Fall Semester</p>
                        </div>
                        <div className={'bg-highlight-dark p-4 text-background rounded'}>
                            <h1 className={'text-2xl'}>Annual General Meetings</h1>
                            <p>Mid Winter Semester</p>
                        </div>
                    </div>
                </div>
                <div className={'grid grid-cols-1 md:grid-cols-2'}>
                    <div className={'bg-highlight-dark p-4 text-background'}>
                        <h1 className={'text-2xl'}>Robert's Rules</h1>
                        <p>roberts rules, motions </p>
                    </div>
                    <div>
                        <Image className={'w-full'} src={'/images/usstm-people.png'} alt={'USSTM People'} width={500} height={500}/>
                    </div>
                </div>
            </div>
        </section>
    )
}