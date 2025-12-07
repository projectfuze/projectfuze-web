import Link from 'next/link';
import { Users, Target, Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export function ServicePaths() {
  return (
    <Section dark className="relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Path</h2>
        <p className="text-gray-400 text-lg">Whether you need a co-pilot or a flight manual.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Scaled Path */}
        <div className="bg-[#2A2A2A] rounded-2xl p-8 lg:p-12 border border-gray-700 hover:border-[#D4A84B] transition-colors group flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div className="p-4 bg-gray-800 rounded-xl group-hover:bg-[#D4A84B] transition-colors shadow-inner">
              <Users size={32} className="text-white" />
            </div>
            <span className="px-3 py-1 rounded-full bg-gray-800 text-xs font-bold tracking-wider text-gray-400 uppercase border border-gray-700">Scaled</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Workshops & Audits</h3>
          <p className="text-gray-400 mb-8 flex-grow">
            Self-service tools and frameworks for creators, PMs, and entrepreneurs who want to build better products independently.
          </p>
          <ul className="space-y-4 mb-8 text-gray-300">
            <li className="flex items-center gap-3">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-500" /></div>
              User Engagement Audit
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-500" /></div>
              Playbooks & Templates
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-500" /></div>
              Self-paced Learning
            </li>
          </ul>
          <Link href="/workshops">
            <Button variant="outline" className="w-full text-white border-gray-600 hover:border-white hover:bg-white/5">
              Explore Workshops
            </Button>
          </Link>
        </div>

        {/* Tailored Path */}
        <div className="bg-gradient-to-br from-[#D4A84B] to-[#b38b36] rounded-2xl p-8 lg:p-12 border border-[#D4A84B] shadow-2xl shadow-orange-900/20 transform md:-translate-y-6 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>

          <div className="flex justify-between items-start mb-8 relative">
            <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm shadow-lg">
              <Target size={32} className="text-white" />
            </div>
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold tracking-wider text-white border border-white/30 uppercase">Tailored</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4 relative">1:1 Co-Conspirator</h3>
          <p className="text-white/90 mb-8 flex-grow relative font-medium">
            A high-touch advisory subscription for leaders navigating complex challenges. Think of it as Coaching+ and Consulting+ combined.
          </p>
          <ul className="space-y-4 mb-8 text-white relative">
            <li className="flex items-center gap-3">
              <div className="bg-white/20 p-1 rounded-full"><Check size={14} className="text-white" /></div>
              Unlimited Requests
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-white/20 p-1 rounded-full"><Check size={14} className="text-white" /></div>
              24h Turnaround
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-white/20 p-1 rounded-full"><Check size={14} className="text-white" /></div>
              Weekly Deep Dives
            </li>
          </ul>
          <Link href="/co-conspirator">
            <Button className="w-full bg-white text-[#D4A84B] hover:bg-gray-100 border-none relative font-bold">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
