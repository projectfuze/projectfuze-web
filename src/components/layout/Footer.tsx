import Link from 'next/link';
import { Rocket } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="text-lg font-bold tracking-tighter flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 bg-[#3D3D3D] text-white rounded">
                <Rocket size={12} />
              </div>
              <span className="text-[#3D3D3D]">PROJECT<span className="font-light text-[#D4A84B]">FUZE</span></span>
            </div>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="text-sm text-gray-500">Fractional Product Operator</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="mailto:david@projectfuze.co" className="hover:text-[#3D3D3D]">david@projectfuze.co</a>
            <Link href="/impressum" className="hover:text-[#3D3D3D]">Legal</Link>
            <Link href="/privacy" className="hover:text-[#3D3D3D]">Privacy</Link>
          </div>
        </div>
        <div className="text-center md:text-left mt-6 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Project Fuze.
        </div>
      </div>
    </footer>
  );
}
