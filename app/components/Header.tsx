"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJazzCommunityOpen, setIsJazzCommunityOpen] = useState(false);

  const nav = [
    { name: 'Who we are', href: '/about' },
    { name: 'Shows', href: '/shows' },
    { name: 'Jazz Festival', href: '/jazz-festival' },
    { name: 'Jazz Jams', href: '/jazz-jams' },
  ];

  const jazzCommunity = [
    { name: 'Weekly Jazz Workshops', href: '/weekly-jazz-workshops' },
    { name: 'Many Things Academy', href: '/many-things-academy' },
    { name: 'Tuesday Jazzers Collective', href: '/tuesday-jazzers-collective' },
  ];

  return (
    <header className="bg-transparent text-white border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="AlterNation Logo"
              width={40}
              height={40}
              className="rounded"
              priority
            />
            <span className="text-2xl font-bold">AlterNation Chennai</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="relative group">
                <button className="text-white hover:text-gray-300 transition-colors">
                  Jazz Community
                </button>
                <div className="absolute right-0 mt-2 w-56 bg-gray-900 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                  {jazzCommunity.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors first:rounded-t last:rounded-b"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsJazzCommunityOpen(!isJazzCommunityOpen)}
                  className="text-white hover:text-gray-300 transition-colors w-full text-left"
                >
                  Jazz Community
                </button>
                {isJazzCommunityOpen && (
                  <ul className="mt-2 pl-4 border-l border-gray-700 space-y-2">
                    {jazzCommunity.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-white hover:text-gray-300 transition-colors block"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsJazzCommunityOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
