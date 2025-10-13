'use client';
import React from 'react';
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-primary-main text-white py-16 mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">LUXETRAIL</h3>
            <p className="text-sm">
              Shaping the Next Generation of Tour and Travel Consultants.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col">
              <Link href="/" className="text-sm hover:underline mb-2">
                Home
              </Link>
              <Link href="/about" className="text-sm hover:underline mb-2">
                About
              </Link>
              <Link href="/programs" className="text-sm hover:underline mb-2">
                Our Programs
              </Link>
              <Link href="/hire" className="text-sm hover:underline mb-2">
                Hire
              </Link>
              <Link href="/contact" className="text-sm hover:underline mb-2">
                Contact
              </Link>
            </nav>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                {/* Replaced Typography with VisuallyHidden */}
                <img src="/tiktok-icon.svg" alt="TikTok" className="filter invert w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
            <p className="text-sm mt-2">
              Email: luxetrailconsultancy@gmail.com
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-md bg-primary-dark border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <button className="w-full bg-secondary-main text-white py-2 px-4 rounded-md mt-2 hover:bg-secondary-dark transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LuxeTrail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;