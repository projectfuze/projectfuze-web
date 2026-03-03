'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const CAL_URL = 'https://cal.com/davidfuesser/ai-readiness-call';

const darkHeroPages = ['/de/infuzed'];

export function NavbarDe() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const hasDarkHero = darkHeroPages.includes(pathname);
  const showLightText = hasDarkHero && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 border-b ${scrolled ? 'bg-white/95 backdrop-blur-sm border-gray-200 py-3' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/de" className="text-xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 group">
            <div className={`flex items-center justify-center w-8 h-8 rounded-md transition-colors ${showLightText ? 'bg-white text-[#3D3D3D]' : 'bg-[#3D3D3D] text-white'}`}>
              <Rocket size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <span className={`transition-colors ${showLightText ? 'text-white' : 'text-[#3D3D3D]'}`}>PROJECT<span className="font-light text-[#D4A84B]">FUZE</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer">
              <Button variant={showLightText ? 'primary' : 'dark'} className="ml-2 px-4 py-2 text-sm">
                AI-Readiness prüfen
              </Button>
            </a>
          </div>

          <button
            className={`md:hidden transition-colors ${showLightText ? 'text-white' : 'text-[#3D3D3D]'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-2 border-b border-gray-200">
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="mt-4">
            <Button variant="dark" className="w-full">
              AI-Readiness prüfen
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
