import Link from 'next/link';
import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <div className="relative bg-[#3D3D3D] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#D4A84B" d="M45,-76.3C58.9,-69.3,71.4,-59.1,81.4,-46.8C91.4,-34.5,98.9,-20.1,97.7,-6.1C96.5,7.9,86.6,21.5,76.4,33.6C66.2,45.7,55.7,56.3,43.6,64.2C31.5,72.1,17.9,77.3,3.7,78.5C-10.5,79.7,-29.1,76.9,-44.6,69.5C-60.1,62.1,-72.5,50.1,-80.6,35.9C-88.7,21.7,-92.5,5.3,-89.7,-9.6C-86.9,-24.5,-77.5,-37.9,-66.2,-49.2C-54.9,-60.5,-41.7,-69.7,-28.1,-76.3C-14.5,-82.9,0.5,-86.9,15.5,-86.9L45,-76.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A84B]/20 border border-[#D4A84B]/30 text-[#D4A84B] text-sm font-medium mb-8">
            <Rocket size={16} />
            <span>Ready for lift off?</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
            Your <span className="text-[#D4A84B]">Launchpad</span> for extraordinary progress.
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl border-l-4 border-[#D4A84B] pl-6">
            Constantly reinventing business, one challenge at a time. I help you navigate digital products and company-building with clarity and speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/co-conspirator">
              <Button variant="primary">Start Your Journey</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline">Explore Services</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
