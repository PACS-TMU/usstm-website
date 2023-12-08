import Dropdown from "./dropdown";
import Link from "next/link";
import Arrow from "../arrow";
import { AnimatePresence, motion } from "framer-motion";

export default function NavItems({ onClick, setExpanded, expanded, isExpandedMobile, setIsExpandedMobile, items }) {
    return (
        <li className="w-full md:w-auto flex flex-col md:block z-50 justify-start">
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
                        {isExpandedMobile && <hr className="w-4/5 border-highlight-light mx-auto" />}
                    </button>
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Dropdown
                                    parentItem = {items}
                                    subItems={items.subItems}
                                    expanded={expanded}
                                    onClick={onClick}
                                    isExpandedMobile={isExpandedMobile}
                                    setIsExpandedMobile={setIsExpandedMobile}
                                    setExpanded={setExpanded}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
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
                    {isExpandedMobile && <hr className="w-4/5 border-highlight-light mx-auto" />}
                </Link>
            )}
        </li>
    );
};