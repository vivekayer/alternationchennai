'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTree } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/alternationchennai/",
      icon: faInstagram,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@alternationchennai",
      icon: faYoutube,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/alternationchennai/",
      icon: faFacebook,
    },
    {
      name: "Linktree",
      href: "https://linktr.ee/alternationchennai",
      icon: faTree,
    },
  ];

  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-4">
        {/* Social Media Links */}
        <div className="flex justify-center gap-8 mb-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200"
              title={link.name}
            >
              <FontAwesomeIcon icon={link.icon} className="text-4xl" />
            </Link>
          ))}
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}