'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';
import type { Media } from '@/payload-types';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href?: string;
  description?: string;
  submenu?: Array<{ label: string; href: string; description?: string }>;
}

interface NavbarProps {
  logo?: Media | null;
  navigation: NavItem[];
}

export default function Navbar({ logo, navigation }: NavbarProps) {
  const [isExpandedMobile, setIsExpandedMobile] = useState(false);
  const [expandedMobileDropdown, setExpandedMobileDropdown] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const logoUrl =
    logo && typeof logo === 'object' ? (logo.url as string | undefined) : (logo as unknown as string | undefined);

  const handleMobileDropdownClick = (index: number) => {
    setExpandedMobileDropdown(expandedMobileDropdown === index ? null : index);
  };

  const closeAllMenus = () => {
    setIsExpandedMobile(false);
    setExpandedMobileDropdown(null);
  };

  return (
    <>
      <div
        id="navbar"
        ref={ref}
        className="fixed top-0 w-full h-16 bg-background z-50 shadow-md font-bold"
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            closeAllMenus();
          }
        }}
      >
        <nav className="px-4 sm:px-6 md:px-8 w-full flex justify-between items-center max-w-7xl mx-auto h-full relative">
          {/* Desktop Navigation - Left Side */}
          <NavigationMenu className="hidden md:flex" delayDuration={50} viewport={false}>
            <NavigationMenuList>
              {navigation.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.submenu && item.submenu.length > 0 ? (
                    <>
                      <NavigationMenuTrigger className="md:text-sm lg:text-lg bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-foreground hover:text-primary transition-colors duration-300 font-bold">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="p-4 md:w-[400px] lg:w-[500px]">
                          {item.description && (
                            <div className="mb-4 pb-4 border-b border-border">
                              {item.description.split('\n').map((line, idx) => (
                                <p key={idx} className="text-sm text-muted-foreground leading-snug">
                                  {line}
                                </p>
                              ))}
                            </div>
                          )}
                          <ul className="grid gap-3 lg:grid-cols-2">
                            {item.submenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-bold leading-none text-primary">{subItem.label}</div>
                                    {subItem.description && (
                                      <p className="text-sm leading-snug text-muted-foreground">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href || ''} legacyBehavior passHref>
                      <NavigationMenuLink className="md:text-sm lg:text-lg text-foreground hover:text-primary transition-colors duration-300 inline-flex items-center justify-center h-9 px-4 py-2">
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Logo - Center */}
          <div id="nav-logo" onClick={closeAllMenus}>
            <Link href="/">
              {logoUrl ? (
                <Image alt="USSTM Logo" width={40} height={40} src={logoUrl} className="m-3 w-10 h-10" />
              ) : (
                <span className="m-3 text-xl font-bold">USSTM</span>
              )}
            </Link>
          </div>

          {/* Mobile Menu - Hamburger Button */}
          <div id="hamburger-button" className="md:hidden" onClick={() => setIsExpandedMobile(!isExpandedMobile)}>
            <button className="p-2 hover:bg-accent rounded-md transition-colors" aria-label="Toggle menu">
              {isExpandedMobile ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isExpandedMobile && (
          <nav
            id="mobile-dropdown"
            className="md:hidden bg-highlight-dark text-background w-full max-h-[calc(100vh-4rem)] overflow-y-auto z-20 absolute left-0 right-0 shadow-lg"
          >
            <ul className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 py-6 px-4">
              {navigation.map((item, index) => (
                <li key={index} className="w-full max-w-md flex flex-col">
                  {item.submenu && item.submenu.length > 0 ? (
                    <>
                      <button
                        type="button"
                        className="hover:opacity-95 transition-all duration-300 w-full"
                        onClick={() => handleMobileDropdownClick(index)}
                      >
                        <div className="flex items-center justify-center gap-2 px-4 py-2">
                          <p className="text-lg sm:text-xl font-bold">{item.label}</p>
                          <ChevronDown
                            className={cn(
                              'w-4 h-4 transition-transform duration-300 shrink-0',
                              expandedMobileDropdown === index && 'rotate-180'
                            )}
                          />
                        </div>
                        <hr className="w-4/5 border-highlight-light mx-auto mt-2" />
                      </button>
                      {expandedMobileDropdown === index && (
                        <ul className="w-full px-4 mt-3 space-y-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                onClick={closeAllMenus}
                                className="block px-4 py-3 w-full bg-background text-highlight-dark shadow-md hover:shadow-lg hover:scale-[1.02] transition-all rounded-md text-sm sm:text-base font-semibold"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href || ''}
                      className="hover:opacity-95 transition-all duration-300 w-full"
                      onClick={closeAllMenus}
                    >
                      <p className="px-4 py-2 text-lg sm:text-xl font-bold text-center">{item.label}</p>
                      <hr className="w-4/5 border-highlight-light mx-auto mt-2" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16" />
    </>
  );
}
