import { ChevronRight } from 'lucide-react';

const stages = [
  {
    label: 'Product Intent',
    desc: 'Decisions structured so agents can act on them',
  },
  {
    label: 'AI Agents',
    desc: 'Connected workflows with context that flows',
  },
  {
    label: 'Verified Output',
    desc: 'Quality gates that catch bad work automatically',
  },
];

export function SlideSystem() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          The System
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-12">
          One backbone. Three layers.
        </h2>

        {/* Desktop horizontal */}
        <div className="hidden md:flex items-start gap-4">
          {stages.map((stage, i) => (
            <div key={i} className="contents">
              <div className="flex-1 border border-white/10 rounded-xl p-6 bg-white/[0.03]">
                <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-3">
                  0{i + 1}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">{stage.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{stage.desc}</p>
              </div>
              {i < stages.length - 1 && (
                <div className="flex items-center self-center pt-4">
                  <ChevronRight size={20} className="text-[#D4A84B]/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden space-y-4">
          {stages.map((stage, i) => (
            <div key={i}>
              <div className="border border-white/10 rounded-xl p-5 bg-white/[0.03]">
                <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-3">
                  0{i + 1}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">{stage.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{stage.desc}</p>
              </div>
              {i < stages.length - 1 && (
                <div className="flex justify-center py-2">
                  <ChevronRight size={16} className="text-[#D4A84B]/40 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
