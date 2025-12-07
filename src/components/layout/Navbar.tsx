'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap, Magnet } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: '1:1 Co-Conspirator', href: '/co-conspirator' },
  { name: 'INFUZED', href: '/infuzed', icon: <Zap size={14} className="text-[#D4A84B] fill-current" /> },
  { name: 'Workshops', href: '/workshops' },
  { name: 'Audit', href: '/audit', icon: <Magnet size={14} className="text-red-500" /> },
  { name: 'Blog', href: '/blog' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer group">
            <span className={`text-2xl font-bold tracking-tight transition-colors ${scrolled || !isHome ? 'text-[#3D3D3D]' : 'text-white'}`}>PROJECT</span>
            <span className="text-2xl font-light text-[#D4A84B] ml-1 group-hover:text-[#c4983b] transition-colors">FUZE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1 font-medium text-sm uppercase tracking-wide transition-colors hover:text-[#D4A84B] ${scrolled || !isHome ? 'text-gray-600' : 'text-gray-200'}`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <Link href="/co-conspirator">
              <Button variant="primary" className="px-5 py-2 text-sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${scrolled || !isHome ? 'text-[#3D3D3D]' : 'text-white'} hover:text-[#D4A84B]`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-in slide-in-from-top-5">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 w-full text-left px-4 py-3 text-base font-bold text-gray-700 hover:text-[#D4A84B] hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <div className="mt-6 px-4">
              <Link href="/co-conspirator" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
