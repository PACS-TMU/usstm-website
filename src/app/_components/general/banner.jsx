'use client';
import {useState} from "react";
import {RxCross1} from "react-icons/rx";
import parse from "html-react-parser";

export default function Banner() {
    const [shown, setShown] = useState(true);
    const [banner, setBanner] = useState({'text': "Elections 2024 happening now! <Link href={'/elections2024'}>Click here</Link> to vote!"});
    return (
        shown && <div className="banner bg-highlight-dark text-background flex items-center justify-center">
            <h1 className={'p-2 font-serif font-semibold text-center text-xl'}>{parse(banner.text)}</h1>
            <button className={'border p-0.5'} onClick={() => {setShown(!shown)}}>
                <RxCross1/>
            </button>
        </div>
    )
};