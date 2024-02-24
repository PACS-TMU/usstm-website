import Link from 'next/link'
import parse from "html-react-parser"
import './dropdown.css'

export default function Dropdown({ parentItem, subItems, onClick, setIsExpandedMobile, isExpandedMobile, expanded, setExpanded }) {

    return (
        <>
            {isExpandedMobile && expanded && (
                <ul className={`dropdown ${expanded && isExpandedMobile ? "block" : "hidden"} w-4/5 md:w-auto mx-auto`}>
                    {subItems.map((subItem) => (
                        <li key={subItem.id} className="menu-items text-md px-4 md:px-0 text-md font-normal">
                            <Link
                                href={subItem.path}
                                onClick={(e) => {
                                    onClick;
                                    setIsExpandedMobile(false);
                                    setExpanded(false);
                                }}
                                className='w-full'
                            >
                                <div className='my-2 px-2 w-full opacity-100 bg-background text-highlight-dark shadow-md hover:font-medium rounded-md'>
                                    {subItem.itemName}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>)
            }
            {!isExpandedMobile && expanded && (
                <ul className='fixed left-0 bg-background w-full min-h-[35vh] z-50 flex'>
                    <div className="dropdown-text main mx-auto flex">
                        <div className="lg-dropdown w-3/4 grid grid-row-3 grid-cols-2">
                            {subItems.map((subItem) => (
                                <li key={subItem.id}>
                                    <div className="link-name p-4">
                                        <Link
                                            href={subItem.path}
                                            onClick={(e) => {
                                                onClick;
                                                setIsExpandedMobile(false);
                                                setExpanded(false);
                                            }}
                                        >
                                            <div className='text-left text-highlight-dark hover:text-highlight ease-in-out duration-300 font-regular underline'>
                                                {subItem.itemName}
                                            </div>
                                            <div className='text-md text-foreground font-thin text-sm m-2'>
                                                {subItem.description}
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </div>
                        <div className="description w-1/4 flex min-h-[35vh] items-center ml-4">
                            <div className="description-text text-foreground font-normal font-serif">
                                {parse(parentItem.description)}
                            </div>
                        </div>
                    </div>

                </ul>
            )}
        </>

    )
}