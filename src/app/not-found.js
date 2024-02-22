import { FaRegQuestionCircle } from "react-icons/fa";
import Link from "next/link";
import {theme} from "/tailwind.config";

export default function NotFound() {
    return (
        <div className={'flex flex-col h-[calc(100dvh-136px)] justify-center items-center'}>
            <FaRegQuestionCircle size={100} color={theme.extend.colors["highlight-dark"]} />
            <h1 className={'font-serif text-3xl mt-4'}>404 | Page Not Found</h1>
            <p>Are you lost? Click <Link href={'/'}>here</Link> to go back home.</p>
        </div>
    );
}