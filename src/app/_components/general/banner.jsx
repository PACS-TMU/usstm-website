'use client';
import {useState} from "react";
import {RxCross1} from "react-icons/rx";
import Link from "next/link";
import './banner.css';

export default function Banner() {
    const [shown, setShown] = useState(true);
    const banner = <span>
            Elections results are out! Results on our <a href="https://www.instagram.com/usstorontomet/" target="_blank">instagram page</a>!
        </span>;
    return (
        shown && <div className="blink banner shadow-md w-full bg-highlight-blue text-foreground flex items-center justify-center">
            <h1 className={'p-2 font-serif font-semibold text-center text-sm md:text-lg lg:text-xl xl:text-2xl'}>
                {banner}    
            </h1>
            {/* <button className={'border p-0.5'} onClick={() => {setShown(!shown)}}>
                <RxCross1/>
            </button> */}
        </div>
    )
};