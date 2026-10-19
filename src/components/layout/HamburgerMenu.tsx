'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../shared/Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative min-[1025px]:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="flex h-10 w-10 items-center justify-center rounded-md text-primary-text hover:bg-secondary-bg"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        )}
      </button>
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute right-0 top-14 z-50 flex w-72 flex-col gap-1 rounded-lg border border-[#E5EDF7] bg-white p-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-sm font-medium text-primary-text transition-colors hover:bg-secondary-bg hover:text-secondary-text"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3" onClick={closeMenu}>
            <Button
              text="Request a Quote"
              bgColor="bg-primary-bg"
              textColor="text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
