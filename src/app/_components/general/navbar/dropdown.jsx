import Link from 'next/link'

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
                <ul className='fixed left-0 bg-highlight-dark w-full min-h-[50vh] z-50 flex'>
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
                                        <div className='text-left text-highlight font-regular underline'>
                                            {subItem.itemName}
                                        </div>
                                        <div className='text-md text-background font-thin text-sm m-2'>
                                            {subItem.description}
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </div>
                    <div className="description w-1/4 flex items-center ml-4">
                        <div className="description-text text-background font-serif">
                            {parentItem.description}
                        </div>
                    </div>
                </ul>
            )}
        </>

    )
}