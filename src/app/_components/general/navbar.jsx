import Image from "next/image";
import Link from "next/link";
import DownArrow from "./down-arrow";

export default function Navbar() {

  return (
    <div id="navbar">
      <nav className="px-5 w-full overflow-auto flex justify-between main mx-auto">
        <div
          id="nav-links"
          className="md:flex items-center space-x-8 font-bold text-lg hidden"
        >
          <Link
            href="/about"
            className="hover:text-highlight-dark hover:opacity-95"
          >
            <div className="flex items-center">
              About Us
              <DownArrow />
            </div>
          </Link>
          <Link
            href="/events"
            className="hover:text-highlight-dark hover:opacity-95"
          >
            <div className="flex items-center">
              Events
              <DownArrow />
            </div>
          </Link>
          <Link
            href="/academics"
            className="hover:text-highlight-dark hover:opacity-95"
          >
            <div className="flex items-center">
              Academics
              <DownArrow />
            </div>
          </Link>
          <Link
            href="/finances"
            className="hover:text-highlight-dark hover:opacity-95"
          >
            <div className="flex items-center">
              Finances
              <DownArrow />
            </div>
          </Link>
          <Link
            href="/community"
            className="hover:text-highlight-dark hover:opacity-95"
          >
            <div className="flex items-center">
              Community
              <DownArrow />
            </div>
          </Link>
          <Link
            href="/contact"
            className="hover:text-highlight-dark hover:opacity-95"
          >
            <div className="flex items-center">
              Contact us
              <DownArrow />
            </div>
          </Link>
          <Link
            href="https://store.usstm.ca"
            className="hover:text-highlight-dark hover:opacity-95"
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
        <button className="md:hidden m-3">
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
    </div>
  );
}
