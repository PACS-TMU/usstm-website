import Dropdown from "./dropdown";
import Link from "next/link";
import Arrow from "../arrow";

export default function NavItems({ onClick, setExpanded, expanded, setIsExpandedMobile, items }) {
    return (
        <li className="w-full md:w-auto flex flex-col md:block justify-start">
            {items.subItems.length != 0 ? (
                <>
                    <button
                        id={items.id}
                        type="button"
                        aria-haspopup="menu"
                        className="md:hover:text-highlight-dark hover:opacity-95 hover:transition-ease-in-out hover:duration-300"
                        aria-expanded={expanded ? true : false}
                        onClick={onClick}
                    >
                        <div className="flex items-center px-12 md:px-0">
                            <p>{items.itemName}</p>
                            <Arrow direction={expanded && "up"} />
                        </div>
                    </button>
                    <Dropdown
                        subItems={items.subItems}
                        expanded={expanded}
                        onClick={onClick}
                        setIsExpandedMobile={setIsExpandedMobile}
                        setExpanded={setExpanded}
                    />
                </>
            ) : (
                <Link
                    href={items.path}
                    className="md:hover:text-highlight-dark hover:opacity-95 hover:transition-ease-in-out hover:duration-300"
                    onClick={(e) => {
                        onClick;
                        setIsExpandedMobile(false);
                        setExpanded(false);
                    }}
                >
                    <p className="px-12 md:px-0">{items.itemName}</p>
                </Link>
            )}
        </li>
    );
};