import Link from "next/link"
import Arrow from "../arrow"
import Dropdown from "./dropdown"

const displayDropdown = (isExpanded, navItem) => {
    switch (isExpanded) {
        case "none":
            break;
        case "about":
            <Dropdown navItem={navItem} subItems={navItem.props.subItems} />
            break;
        default:
            break;
    }
}

export default function NavItems(navItem, isExpanded, onShow) {
    return (
        <li>
            {navItem.props.subItems.length != 0 ? (
                <>
                    <button 
                        type="button"
                        aria-haspopup="menu"
                        className="lg:hover:text-highlight-dark hover:opacity-95 hover:transition-ease-in-out hover:duration-300"
                        onClick={() => {isExpanded==navItem.props.itemName ? onShow("none") : onShow(navItem.props.itemName)}}
                    >
                        <div className="flex items-center">
                            {navItem.props.itemName}
                            <Arrow />
                        </div>
                    </button>
                    {displayDropdown(isExpanded, navItem)}
                    {/* <Dropdown subItems={navItem.props.subItems} /> */}
                </>
            ) : (
                <>
                    <Link
                        href={navItem.props.path}
                        className="lg:hover:text-highlight-dark hover:opacity-95 hover:transition-ease-in-out hover:duration-300"
                    >
                        <div className="flex items-center">
                            {navItem.props.itemName}
                        </div>
                    </Link>
                </>
            )}
        </li>
    )
}