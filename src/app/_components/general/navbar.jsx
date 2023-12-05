'use client'
import Image from "next/image";
import Link from "next/link";
import DownArrow from "./down-arrow";
import { useState } from "react";

export default function Navbar() {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="navbar">
      <nav className="px-5 w-full overflow-auto flex justify-between main mx-auto">
        <div
          id="nav-links"
          className="md:flex items-center md:space-x-3 md:text-sm lg:space-x-8 font-bold lg:text-lg hidden"
        >
          <Link
            href="/about"
            className="hover:text-highlight-dark hover:opacity-95 hover:transition-ease-in-out hover:duration-300"
          >
            <div className="flex items-center">
              About Us
              <DownArrow />
            </div>
          </Link>
          <Link
            href="/events"
            className="hover:text-highlight-dark hover:opacity-95 hover:transition-ease-in-out hover:duration-300"
          >
            <div className="flex items-center">
              Events
              <DownArrow />
            </div>
          </Link>
          <Link
            href="/academics"
            className="hover:text-highlight-dark hover:opacity-95 hover:transition-ease-in-out hover:duration-300"
          >
            <div className="flex items-center">
              Academics
              <DownArrow />
            </div>
          </Link>
          <Link
            href="/finances"
            className="hover:text-highlight-dark hover:opacity-95 hover:transition-ease-in-out hover:duration-300"
          >
            <div className="flex items-center">
              Finances
              <DownArrow />
            </div>
          </Link>
          <Link
            href="/community"
            className="hover:text-highlight-dark hover:opacity-95 hover:transition-ease-in-out hover:duration-300"
          >
            <div className="flex items-center">
              Community
              <DownArrow />
            </div>
          </Link>
          <Link
            href="/contact"
            className="hover:text-highlight-dark hover:opacity-95 hover:transition-ease-in-out hover:duration-300"
          >
            <div className="flex items-center">
              Contact us
              <DownArrow />
            </div>
          </Link>
          <Link
            href="https://store.usstm.ca"
            className="hover:text-highlight-dark hover:opacity-95 hover:transition-ease-in-out hover:duration-300"
          >
            <div className="flex items-center">
              Store
              <DownArrow />
            </div>
          </Link>
        </div>
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
        <button className="md:hidden m-3" onClick={() => {setIsExpanded(!isExpanded)}}>
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
        <div className={`${isExpanded ? "block" : "hidden"} md:hidden bg-highlight-dark text-background opacity-90 w-screen z-20 absolute`}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-4 opacity-100 z-30">
            <Link href="/about">
              <div className="flex items-center">
                About Us
                <DownArrow />
              </div>
            </Link>
            <Link href="/events">
              <div className="flex items-center">
                Events
                <DownArrow />
              </div>
            </Link>
            <Link href="/academics">
              <div className="flex items-center">
                Academics
                <DownArrow />
              </div>
            </Link>
            <Link href="/finances">
              <div className="flex items-center">
                Finances
                <DownArrow />
              </div>
            </Link>
            <Link href="/community">
              <div className="flex items-center">
                Community
                <DownArrow />
              </div>
            </Link>
            <Link href="/contact">
              <div className="flex items-center">
                Contact us
                <DownArrow />
              </div>
            </Link>
            <Link href="https://store.usstm.ca">
              <div className="flex items-center">
                Store
                <DownArrow />
              </div>
            </Link>
          </div>
        </div>
      </nav>
      {/* ----------------------------------------- */}
      {/* Code above is just for prototype purposes */}
      {/* ----------------------------------------- */}
    </div>
  );
}
