import { ChevronRight } from 'lucide-react';

const steps = [
  { label: 'Plan', desc: 'Define intent clearly enough for agents to act' },
  { label: 'Execute', desc: 'Agents and humans build within guardrails' },
  { label: 'Review', desc: 'Quality gates verify output against intent' },
  { label: 'Compound', desc: 'Each cycle makes the next one faster' },
];

export function SlideLoop() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          The Universal Loop
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
          Every function. Every stage. One loop.
        </h2>

        <p className="text-base text-gray-400 leading-relaxed mb-12 max-w-xl">
          The difference between stages is how much of this loop agents can handle vs. how much requires human intervention.
        </p>

        {/* Desktop horizontal */}
        <div className="hidden md:flex items-start gap-3">
          {steps.map((step, i) => (
            <div key={i} className="contents">
              <div className="flex-1 border border-white/10 rounded-xl p-6 bg-white/[0.03]">
                <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-3">
                  0{i + 1}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">{step.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center self-center pt-4">
                  <ChevronRight size={20} className="text-[#D4A84B]/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="border border-white/10 rounded-xl p-5 bg-white/[0.03]">
                <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-3">
                  0{i + 1}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">{step.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ChevronRight size={16} className="text-[#D4A84B]/40 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-500 text-center">
          Each cycle teaches the system something that makes the next one faster.
        </p>
      </div>
    </div>
  );
}
