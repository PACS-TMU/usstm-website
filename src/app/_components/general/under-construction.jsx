import { FaRegQuestionCircle } from "react-icons/fa";
import Link from "next/link";
import { MdConstruction } from "react-icons/md";
import {theme} from "/tailwind.config";

export default function UnderConstruction() {
    return (
        <div className={'flex flex-col h-[calc(100dvh-136px)] justify-center items-center'}>
            <MdConstruction size={100} color={theme.extend.colors["highlight-dark"]} />
            <h1 className={'font-serif text-3xl mt-4'}>503 | Page Under Maintenance</h1>
            <p>Are you lost? Click <Link href={'/'}>here</Link> to go back home.</p>
        </div>
    );
}