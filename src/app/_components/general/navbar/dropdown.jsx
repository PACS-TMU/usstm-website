import Link from 'next/link'
import { AnimatePresence, motion } from "framer-motion";

export default function Dropdown({ subItems, onClick, setIsExpandedMobile, expanded, setExpanded }) {
    return (
        <ul className={`dropdown ${expanded ? "block" : "hidden"} w-4/5 md:w-auto mx-auto`}>
            {subItems.map((subItem) => (
                <li key={subItem.id} className="menu-items text-md px-4 md:px-0 text-md font-thin">
                    <Link 
                        href={subItem.path}
                        onClick={(e) => {
                            onClick;
                            setIsExpandedMobile(false);
                            setExpanded(false);
                        }}
                        className='w-full'
                    >
                        <div className='my-2 px-2 w-full opacity-100 bg-background text-highlight-dark underline underline-offset-1 hover:font-medium rounded-md'>
                            {subItem.itemName}
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}