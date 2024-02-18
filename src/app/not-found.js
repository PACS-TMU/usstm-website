import {IoIosConstruct} from "react-icons/io";
import {theme} from "/tailwind.config";

export default function NotFound() {
    return (
        <div className={'flex flex-col h-[calc(100dvh-136px)] justify-center items-center'}>
            <IoIosConstruct size={100} color={theme.extend.colors["highlight-dark"]}/>
            <h1 className={'font-serif text-3xl'}>404 | Page Not Found</h1>
        </div>
    );
}