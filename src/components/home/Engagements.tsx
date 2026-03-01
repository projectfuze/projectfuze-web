import { Compass, Cable, Zap, GraduationCap, ShieldCheck, GitBranch, ArrowRightCircle, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/davidfuesser/30min';

interface Deliverable {
  icon: LucideIcon;
  text: string;
}

const architectDeliverables: Deliverable[] = [
  { icon: Compass, text: 'Product intent architecture — decisions and priorities structured so agents can act on them' },
  { icon: Cable, text: 'Connected workflows — your tool stack architected so context flows instead of getting lost' },
  { icon: Zap, text: 'Agent-ready infrastructure — the system your team needs to actually work with AI' },
  { icon: GraduationCap, text: 'Team training — your people know how to run it after we leave' },
];

const turnkeyExtras: Deliverable[] = [
  { icon: ShieldCheck, text: 'Quality gates and automated checks — bad work gets caught before your team sees it' },
  { icon: GitBranch, text: 'Engineering quality infrastructure built and deployed on your stack' },
  { icon: ArrowRightCircle, text: 'End-to-end: from product intent to verified output, fully operational' },
];

export function Engagements() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-4">04 — The Engagement</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] tracking-tight mb-14">
          One system. Handed off to you.
        </h2>

        {/* Scan — entry point card */}
        <div className="bg-white border border-gray-200 rounded-xl p-7 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#D4A84B]/8 flex items-center justify-center">
              <Search size={16} className="text-[#D4A84B]" />
            </div>
            <p className="text-xs font-mono text-[#D4A84B] tracking-[0.15em] uppercase">Step 1 — Entry Point</p>
          </div>
          <h3 className="text-xl font-bold text-[#3D3D3D] mb-1">AI-Readiness Scan</h3>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
            <span className="text-3xl font-bold text-[#3D3D3D]">$4,000</span>
            <span className="text-sm text-gray-400">&middot;</span>
            <span className="text-sm text-gray-500">2 weeks</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
            Two weeks to map your friction. We tell you if you&apos;re ready for agents, or if you need to fix your foundation first. You get a roadmap, not a sales pitch.
          </p>
        </div>

        {/* Build cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* The Architect — David solo */}
          <div className="bg-white border border-gray-200 rounded-xl p-7 md:p-8">
            <h3 className="text-xl font-bold text-[#3D3D3D] mb-0.5">The Architect</h3>
            <p className="text-sm text-gray-400 mb-3">David solo</p>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="text-3xl md:text-4xl font-bold text-[#3D3D3D]">$15,000</span>
              <span className="text-gray-400 text-lg">/month</span>
            </div>
            <p className="text-sm text-gray-500 mb-1">2 months</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              David designs the system — your team implements the technical layer.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Best for teams with strong engineering who need the workflow and strategy.
            </p>

            <div className="h-px bg-gray-100 mb-6" />

            <ul className="space-y-4">
              {architectDeliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-lg bg-[#D4A84B]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={16} className="text-[#D4A84B]" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* David + Lucas — Turnkey */}
          <div className="bg-white border-2 border-[#D4A84B] rounded-xl p-7 md:p-8 shadow-lg relative">
            <h3 className="text-xl font-bold text-[#3D3D3D] mb-0.5">David + Lucas</h3>
            <p className="text-sm text-[#D4A84B] font-medium mb-3">Turnkey</p>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="text-3xl md:text-4xl font-bold text-[#3D3D3D]">$25,000</span>
              <span className="text-gray-400 text-lg">/month</span>
            </div>
            <p className="text-sm text-gray-500 mb-1">2 months</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              David architects the system. Lucas builds the engineering quality layer. Turnkey.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Best for teams that need the full backbone installed — intent through verified output.
            </p>

            <div className="h-px bg-gray-100 mb-6" />

            <p className="text-xs font-mono text-gray-400 tracking-wider uppercase mb-4">Everything in The Architect, plus:</p>
            <ul className="space-y-4">
              {turnkeyExtras.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-lg bg-[#D4A84B]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={16} className="text-[#D4A84B]" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold transition-all duration-200 text-sm tracking-wide bg-[#3D3D3D] text-white hover:bg-black shadow-sm"
          >
            Book a Call
          </a>
          <p className="mt-6 text-sm text-gray-400">
            Not sure yet? Start with the Scan.{' '}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A84B] hover:underline"
            >
              Let&apos;s talk.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
