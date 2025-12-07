import Link from 'next/link';
import { Mail, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold text-white">PROJECT</span>
            <span className="text-2xl font-light text-[#D4A84B] ml-1">FUZE</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Constantly reinventing business, one challenge at a time.
          </p>
          <div className="flex gap-4">
            <a href="mailto:david@projectfuze.com" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#D4A84B] hover:text-white transition-colors cursor-pointer">
              <Mail size={14} />
            </a>
            <a href="https://linkedin.com/company/project-fuze" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#D4A84B] hover:text-white transition-colors cursor-pointer">
              <Globe size={14} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/co-conspirator" className="hover:text-[#D4A84B] transition-colors">1:1 Co-Conspirator</Link></li>
            <li><Link href="/audit" className="hover:text-[#D4A84B] transition-colors">User Engagement Audit</Link></li>
            <li><Link href="/workshops" className="hover:text-[#D4A84B] transition-colors">Workshops</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-[#D4A84B] transition-colors">About David</Link></li>
            <li><Link href="/giving" className="hover:text-[#D4A84B] transition-colors">Giving Back</Link></li>
            <li><Link href="/contact" className="hover:text-[#D4A84B] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/impressum" className="hover:text-[#D4A84B] transition-colors">Impressum</Link></li>
            <li><Link href="/privacy" className="hover:text-[#D4A84B] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#D4A84B] transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Project Fuze. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
