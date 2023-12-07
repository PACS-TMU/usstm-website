import Link from 'next/link'

export default function Dropdown({ subItems, onClick, setIsExpandedMobile, expanded, setExpanded }) {
    return (
        <ul className={`dropdown ${expanded ? "block" : "hidden"}`}>
            {subItems.map((subItem) => (
                <li key={subItem.id} className="menu-items text-md px-16 md:px-0 text-md font-thin">
                    <Link 
                        href={subItem.path}
                        onClick={(e) => {
                            onClick;
                            setIsExpandedMobile(false);
                            setExpanded(false);
                        }}
                        className='w-full'
                    >
                        <p className='my-2 px-4 opacity-100 bg-background text-highlight-dark underline underline-offset-1 hover:font-medium rounded-md'>{subItem.itemName}</p>
                    </Link>
                </li>
            ))}
        </ul>
    )
}