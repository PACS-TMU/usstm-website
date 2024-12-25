import Image from 'next/image';
import './parallax.css';

export default function Parallax() {
    return (
        <section id="parallax">
            <div id="overlay">
                <div className="main">
                    <div className="parallax-text-container">
                        <div id="parallax-text">
                            <div className="text" id="title-line"></div>
                            <h1 className="text leading-tight" id="title-text">USSTM</h1>
                            <p className="text subtitle-text text-lg"><b>Undergraduate Science Society</b> <br /> of <b>Toronto Metropolitan</b> University</p>
                            <p className="text subtitle-text text-lg" id="motto"><b>Our Motto: </b><i>Quarere Miror - Seek to Wonder</i></p>
                        </div>
                    </div>

                    <div id="stats-box">
                        <div id="stats-text">
                            <div id="stats-students">
                                <Image
                                    overrideSrc="https://usstm.ca/images/homepage/stats-icons/students-icon.png"
                                    alt="Icon of Students"
                                    className="stats-icon"
                                    width={100}
                                    height={100}
                                    priority={true}
                                />
                                <p className="stats-info stats-number lg:text-3xl xl:text-3xl">4000<sup>+</sup></p>
                                <p className="stats-info stats-description lg:text-lg xl:text-lg">STUDENTS</p>
                            </div>

                            <div className="stats-separator"></div>

                            <div id="stats-groups">
                                <Image
                                    overrideSrc='https://usstm.ca/images/homepage/stats-icons/groups-icon.png'
                                    alt="Icon of Student Groups"
                                    className="stats-icon"
                                    width={100}
                                    height={100}
                                    priority={true}
                                />
                                <p className="stats-info stats-number lg:text-3xl">25<sup>+</sup></p>
                                <p className="stats-info stats-description lg:text-lg">STUDENT GROUPS</p>
                            </div>

                            <div className="stats-separator"></div>

                            <div id="stats-board">
                                <Image
                                    overrideSrc='https://usstm.ca/images/homepage/stats-icons/board-icon.png'
                                    alt="Icon of Board Members"
                                    className="stats-icon"
                                    width={100}
                                    height={100}
                                    priority={true}
                                />
                                <p className="stats-info stats-number lg:text-3xl">25<sup>+</sup></p>
                                <p className="stats-info stats-description lg:text-lg">BOARD MEMBERS</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
