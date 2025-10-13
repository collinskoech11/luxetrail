'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { cn } from '@/lib/utils';

const AppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Our Programs' },
    { href: '/hire', label: 'Hire' },
    { href: '/book', label: 'Book' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-85 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out",
          "border-b border-gray-200 py-2"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link href="/" className="text-primary-main text-2xl font-extrabold tracking-wider">
              LUXETRAIL
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-gray-700 hover:text-primary-main text-base font-semibold relative",
                    "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-primary-main after:transition-all after:duration-300 after:ease-in-out",
                    "hover:after:w-full hover:after:left-0"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/book-slot">
                <button
                  className={cn(
                    "ml-6 px-5 py-2 rounded-full bg-primary-main text-white font-bold shadow-lg",
                    "hover:bg-primary-dark transition-colors duration-300"
                  )}
                >
                  Book a Slot
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary-main focus:outline-none"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon fontSize="large" />
            </button>
          </div>
        </div>
      </header>
      {/* Spacer to prevent content from hiding under the fixed AppBar */}
      <div className="h-16" />

      {/* Drawer for Mobile */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-extrabold tracking-wider text-primary-main">
            LUXETRAIL
          </h2>
          <button onClick={toggleDrawer(false)} className="text-gray-700 focus:outline-none">
            <CloseIcon />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={toggleDrawer(false)}
                  className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md text-lg font-semibold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 text-center mt-4">
          <Link href="/book-slot">
            <button
              className={cn(
                "w-full px-4 py-2 rounded-full bg-primary-main text-white font-bold shadow-lg",
                "hover:bg-primary-dark transition-colors duration-300"
              )}
              onClick={toggleDrawer(false)}
            >
              Book a Slot
            </button>
          </Link>
        </div>
      </div>
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer(false)}
        />
      )}
    </>
  );
};

export default AppBar;