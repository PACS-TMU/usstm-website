'use client'
import Image from "next/image";
import Link from "next/link";
import {useClickAway} from 'react-use';
import NavItems from "./nav-items";
import { useEffect, useState, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { Turn as Hamburger } from 'hamburger-react'

export default function Navbar() {
  // States to open/close menus
  const [isExpandedMobile, setIsExpandedMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleClick = item => (_, isExpanded) => {
    setExpanded(isExpanded ? false : item.id);
    if (expanded === item.id) {
      setExpanded(false);
    }
  };

  // Retrieve nav items from JSON file
  const [navItems, setNavItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/nav-items.json');
        const data = await res.json();
        setNavItems(data);
      } catch (error) {
        console.error('Error fetching nav data:', error);
      }
    }
    fetchData();
  }, []);

  // For closing the dropdown menu when clicking outside of it
  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsExpandedMobile(false);
    setExpanded(false);
  });

  return (
    <div id="navbar" ref={ref}>
      <nav className="px-5 w-full overflow-auto flex justify-between main mx-auto">
        <ul
          id="nav-links"
          className="md:flex items-center md:space-x-3 md:text-sm lg:space-x-8 justify-center font-bold lg:text-lg hidden"
        >
          {navItems.map((navItem) => {
            return (
              <NavItems onClick={handleClick(navItem)} setExpanded={setExpanded} expanded={expanded === navItem.id} setIsExpandedMobile={setIsExpandedMobile} items={navItem} key={navItem.id} />
            );
          })}
        </ul>

        <div 
          id="nav-logo"
          onClick={() => { 
            setIsExpandedMobile(false);
            setExpanded(false);
          }}
        >
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
        <div id="hamburger-button" className="md:hidden m-3" onClick={() => setIsExpandedMobile(!isExpandedMobile)}>
          <Hamburger 
            toggled={isExpandedMobile} 
            toggle={setIsExpandedMobile}
            duration={0.7}
            rounded 
            color="#1E1E1E"
          />
        </div>
      </nav>

      {/* ----------------------------------------- */}
      {/* Code below is just for prototype purposes */}
      {/* ----------------------------------------- */}
      <nav id="mobile-dropdown">
        <div className={`${isExpandedMobile ? "block" : "hidden"} md:hidden bg-highlight-dark text-xl text-background opacity-95 w-screen h-fit z-20 absolute`}>
          <ul className="flex flex-col items-center justify-center space-y-8 py-4 opacity-100 z-10">
            {navItems.map((navItem) => (
              <NavItems onClick={handleClick(navItem)} setExpanded={setExpanded} expanded={expanded === navItem.id} setIsExpandedMobile={setIsExpandedMobile} items={navItem} key={navItem.id} />
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
