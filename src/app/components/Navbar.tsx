'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/data', label: 'Data' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 px-8 py-4
        transition-all duration-300 ease-out
        border border-white/10
        shadow-[0_0_20px_rgba(255,255,255,0.1),0_0_40px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)]
        before:absolute before:inset-[-1px] before:p-[1px] 
        before:bg-gradient-to-r before:from-white/20 before:via-white/5 before:to-white/20
        before:rounded-inherit before:-z-10
        before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
        before:[mask-composite:xor]
        ${isScrolled 
          ? 'bg-gray-900/80 backdrop-blur-xl' 
          : 'bg-gray-900'
        }
      `}
    >
      <div className="flex items-start justify-between max-w-7xl mx-auto">
        {/* Left side - Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            {/* Logo Icon */}
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              companyname
            </span>
            <span style={{ width: '20px' }}></span>
          </Link>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`
                relative px-3 py-2 text-sm font-medium transition-all duration-200
                hover:text-white
                ${pathname === href 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
                }
              `}
            >
              {label}
              {pathname === href && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-start space-x-8">
          
        </div>

        {/* Right side - GitHub Icon */}
        <div className="flex items-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="p-2 text-gray-300 hover:text-white transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;