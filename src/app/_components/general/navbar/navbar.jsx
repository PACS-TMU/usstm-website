'use client'
import Image from "next/image";
import Link from "next/link";
import NavItems from "./nav-items";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [isExpandedMobile, setIsExpandedMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState("none");
  const [navItems, setNavItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/nav-items.json');
        const data = await res.json();
        setNavItems(data);
        console.log(res);
      } catch (error) {
        console.error('Error fetching nav data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div id="navbar">
      <nav className="px-5 w-full overflow-auto flex justify-between main mx-auto">
        <ul
          id="nav-links"
          className="md:flex items-center md:space-x-3 md:text-sm lg:space-x-8 font-bold lg:text-lg hidden"
        >
          {navItems.map((navItem) => (
            <NavItems key={navItems.id} props={navItem} /> 
          ))}
        </ul>

        <div id="nav-logo">
          <Link href="/">
            <Image
              src="/icons/usstm-logo.png"
              alt="The USSTM Logo"
              className="m-3 w-12"
              width={240}
              height={240}
              priority={true}
            />
          </Link>
        </div>
        <button className="md:hidden m-3" onClick={() => { setIsExpandedMobile(!isExpandedMobile) }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>

      {/* ----------------------------------------- */}
      {/* Code below is just for prototype purposes */}
      {/* ----------------------------------------- */}

      <nav>
        <div className={`${isExpanded ? "block" : "hidden"} hidden md:block bg-highlight-dark text-background opacity-90 w-screen z-20 absolute`}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-4 opacity-100 z-30" onClick={() => {setIsExpanded(!isExpanded)}}>
            
          </div>
        </div>
      </nav>

      <nav id="mobile-dropdown">
        <div className={`${isExpandedMobile ? "block" : "hidden"} md:hidden bg-highlight-dark text-background opacity-90 w-screen z-20 absolute`}>
          <ul className="flex flex-col items-center justify-center space-y-4 text-center py-4 opacity-100 z-10" onClick={() => {setIsExpandedMobile(!isExpandedMobile)}}>
            {navItems.map((navItem) => (
              <NavItems key={navItems.id} props={navItem} />
            ))}
          </ul>
        </div>
      </nav>
      {/* ----------------------------------------- */}
      {/* Code above is just for prototype purposes */}
      {/* ----------------------------------------- */}
    </div>
  );
}
