'use client';

import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Newsletter() {
  return (
    <div className="bg-[#F5F5F5] py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="p-10 md:p-16 md:w-3/5">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="text-[#D4A84B] fill-current" size={20} />
            <span className="font-bold tracking-widest text-sm text-gray-500 uppercase">INFUZED Newsletter</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-[#3D3D3D]">Your mid-week infusion of inspiration</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join shapers from around the world. Every Wednesday, get one spark on building companies, developing people, or creating products.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#D4A84B] focus:ring-1 focus:ring-[#D4A84B] bg-gray-50"
            />
            <Button variant="primary" className="px-8 whitespace-nowrap">Join Now</Button>
          </form>
          <p className="text-xs text-gray-400 mt-4">No spam. Just fire. Unsubscribe anytime.</p>
        </div>

        <div className="bg-[#3D3D3D] md:w-2/5 p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
          {/* Decorative background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#D4A84B 1px, transparent 1px)', backgroundSize: '20px 20px' }}
          ></div>

          <div className="relative z-10">
            <span className="text-[#D4A84B] text-6xl font-bold mb-2 block">47+</span>
            <span className="text-white font-medium uppercase tracking-widest text-sm">Issues Sent</span>
            <div className="w-16 h-1 bg-[#D4A84B] my-8 mx-auto"></div>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm italic">&ldquo;The Ultimate Annual Review&rdquo;</p>
              <p className="text-gray-300 text-sm italic">&ldquo;The 4 Metrics Of Effective Feedback&rdquo;</p>
              <p className="text-gray-300 text-sm italic">&ldquo;7 Steps to Product-Market Fit&rdquo;</p>
            </div>
            <a href="/infuzed" className="inline-block mt-8 text-[#D4A84B] text-sm font-bold hover:underline">
              View Archive &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
