"use client";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './your-team.css';
import Image from 'next/image';

export default function YourTeam() {
    function Directors() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Slider {...settings}>
                <Image
                    src="/images/usstm-people.png"
                    alt="placeholder"
                    width={1240}
                    height={1240}
                    style={{
                        display: 'flex',
                        height: '100%',
                        margin: 'auto',
                        width: '100%'
                    }}
                />
                <Image
                    src="/images/usstm-people.png"
                    alt="placeholder"
                    width={1240}
                    height={1240}
                    style={{
                        display: 'flex',
                        height: '100%',
                        margin: 'auto',
                        width: '100%'
                    }}
                />
            </Slider>
        );
    }

    return (
        <div className="main flex flex-col">

            {/* Header for page*/}
            <header className="text-4xl lg:text-5xl text-center bg-highlight-dark p-10">
                <h1 className="text-white">
                    Your 2023-2024 Team
                </h1>
            </header>

            <div className="flex flex-col space-y-3 w-[90%] self-center">
                {/* This div element is to encase all the photos and labels*/}


                <div className="space-y-5">
                    <h1 className="text-center pt-5 text-3xl text-highlight-dark">
                        BOARD OF DIRECTORS
                    </h1>

                    <Directors className="hidden" />

                    <p className=" pt-2">
                        The USSTM Board of Directors is a dynamic group of student leaders at
                        Toronto Metropolitan University, dedicated to enhancing the academic and s
                        ocial experience for the Faculty of Science. The Board is committed to
                        fostering a vibrant and inclusive community. Elected annually, these student
                        leaders embody the spirit of innovation and collaboration, working to create a
                        fulfilling experience for science students at TMU.
                    </p>

                    <a href="/about/your-team/directors">
                        <button className="teamButton py-3"> Meet the Team</button>
                    </a>

                </div>


                <div className="space-y-5 pt-12">
                    <h1 className="text-center pt-5 text-3xl text-highlight-dark">
                        PRESIDENT&apos;S COMMITTEE
                    </h1>

                    <Directors className="hidden" />
                    <p className=" pt-2">
                        The President&apos;s Committee is responsible for assiting and aiding the President in thier tasks
                    </p>

                    <a href="/about/your-team/president-committee">
                        <button className="teamButton py-3"> Meet the Team</button>
                    </a>

                </div>


                <div className="space-y-5 pt-12">
                    <h1 className="text-center pt-5 text-3xl text-highlight-dark">
                        OPERATIONS COMMITTEE
                    </h1>

                    <Directors className="hidden" />
                    <p className=" pt-2">
                        Text about Operations goes here
                        Text about Operations goes here
                        Text about Operations goes here
                        Text about Operations goes here
                        Text about Operations goes here
                    </p>
                    <a href="/about/your-team/operations-committee">
                        <button className="teamButton py-3"> Meet the Team</button>
                    </a>
                </div>

                <div className="space-y-5 pt-12">
                    <h1 className="text-center pt-5 text-3xl text-highlight-dark">
                        FROSH COMMITTEE
                    </h1>

                    <Directors className="hidden" />
                    <p className=" pt-2">
                        Text about Frosh Committee goes here
                        Text about Frosh Committee goes here
                        Text about Frosh Committee goes here
                        Text about Frosh Committee goes here
                        Text about Frosh Committee goes here
                    </p>
                    <a href="/about/your-team/frosh-committee">
                        <button className="teamButton py-3"> Meet the Team</button>
                    </a>
                </div>

                <div className="space-y-5 pt-12">
                    <h1 className="text-center pt-5 text-3xl text-highlight-dark">
                        ACADEMICS COMMITTEE
                    </h1>

                    <Directors className="hidden" />
                    <p className=" pt-2">
                        Text about Academics Committee goes here
                        Text about Academics Committee goes here
                        Text about Academics Committee goes here
                        Text about Academics Committee goes here
                        Text about Academics Committee goes here
                    </p>
                    <a href="/about/your-team/academics-committee">
                        <button className="teamButton py-3"> Meet the Team</button>
                    </a>
                </div>

                <div className="space-y-5 pt-12">
                    <h1 className="text-center pt-5 text-3xl text-highlight-dark">
                        FORMAL COMMITTEE
                    </h1>

                    <Directors className="hidden" />
                    <p className=" pt-2">
                        Text about Formal Committee goes here
                        Text about Formal Committee goes here
                        Text about Formal Committee goes here
                        Text about Foraml Committee goes here
                        Text about Formal Committee goes here
                    </p>
                    <a href="/about/your-team/formal-committee">
                        <button className="teamButton py-3"> Meet the Team</button>
                    </a>
                </div>

                <div className="space-y-5 pt-12">
                    <h1 className="text-center pt-5 text-3xl text-highlight-dark">
                        FINANCE COMMITTEE
                    </h1>

                    <Directors className="hidden" />
                    <p className=" pt-2">
                        Text about Finance Committee goes here
                        Text about Finance Committee goes here
                        Text about Finance Committee goes here
                        Text about Finance Committee goes here
                        Text about Finance Committee goes here
                    </p>
                    <a href="/about/your-team/finance-committee">
                        <button className="teamButton py-3"> Meet the Team</button>
                    </a>
                </div>

                <div className="space-y-5 pt-12">
                    <h1 className="text-center pt-5 text-3xl text-highlight-dark">
                        EXTERNAL COMMITTEE
                    </h1>

                    <Directors className="hidden" />
                    <p className=" pt-2">
                        Text about Exterbal  Committee goes here
                        Text about External Committee goes here
                        Text about External Committee goes here
                        Text about External Committee goes here
                        Text about External Committee goes here
                    </p>
                    <a href="/about/your-team/extermal-committee">
                        <button className="teamButton py-3"> Meet the Team</button>
                    </a>
                </div>

                <div className="space-y-5 pt-12">
                    <h1 className="text-center pt-5 text-3xl text-highlight-dark">
                        EVENTS COMMITTEE
                    </h1>

                    <Directors className="hidden" />
                    <p className=" pt-2">
                        Text about Events Committee goes here
                        Text about Events Committee goes here
                        Text about Events Committee goes here
                        Text about Events Committee goes here
                        Text about Events Committee goes here
                    </p>
                    <a href="/about/your-team/events-committee">
                        <button className="teamButton py-3"> Meet the Team</button>
                    </a>
                </div>

                <div className="space-y-5 pt-12">
                    <h1 className="text-center pt-5 text-3xl text-highlight-dark">
                        EQUITY COMMITTEE
                    </h1>

                    <Directors className="hidden" />
                    <p className=" pt-2">
                        Text about Equity Committee goes here
                        Text about Equity Committee goes here
                        Text about Equity Committee goes here
                        Text about Equity Committee goes here
                        Text about Equity Committee goes here
                    </p>
                    <a href="/about/your-team/equity-committee">
                        <button className="teamButton py-3"> Meet the Team</button>
                    </a>
                </div>

                <div className="space-y-5 pt-12">
                    <h1 className="text-center pt-5 text-3xl text-highlight-dark">
                        COMMUNICATIONS COMMITTEE
                    </h1>

                    <Directors className="hidden" />
                    <p className=" pt-2">
                        Text about Communicaitons Committee goes here
                        Bro I dont know why I wrote out every single one of these &apos;p&apos; tags
                        This is so time consuming I swear.
                    </p>
                    <a href="/about/your-team/comms-committee">
                        <button className="teamButton py-3"> Meet the Team</button>
                    </a>
                </div>
            </div>
        </div>
    )
}