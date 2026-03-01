import { Search, Wrench, ArrowRightCircle, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: Search,
    title: 'Scan',
    description:
      'We join for two weeks and map your org\u2019s friction \u2014 where decisions get lost, where handoffs break, and where AI would fail today. You get a blunt, honest readiness report.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Build',
    description:
      'David architects the backbone \u2014 how decisions flow, how intent gets structured, how the whole system connects. Lucas builds the engineering quality layer \u2014 automated checks, safety nets, the infrastructure that makes AI output trustworthy.',
  },
  {
    number: '03',
    icon: ArrowRightCircle,
    title: 'Hand off',
    description:
      'Your team runs it. The system stays. AI agents ship as a normal part of how your team operates \u2014 not as an experiment someone tried once.',
  },
];

/* ── Horizontal connector (desktop) ───────────────────────── */
function StepConnector() {
  return (
    <div className="hidden md:flex items-center justify-center -mx-1">
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A84B]/30" />
        <div className="w-1 h-1 rounded-full bg-[#D4A84B]/20" />
        <ChevronRight size={14} className="text-[#D4A84B]/30" />
      </div>
    </div>
  );
}

/* ── Vertical connector (mobile) ──────────────────────────── */
function MobileConnector() {
  return (
    <div className="flex md:hidden items-center justify-center py-2">
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A84B]/30" />
        <div className="w-1 h-1 rounded-full bg-[#D4A84B]/20" />
        <ChevronRight size={14} className="text-[#D4A84B]/30 rotate-90" />
      </div>
    </div>
  );
}

export function HowIWork() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-4">
          03 — How We Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] tracking-tight mb-14">
          Scan. Build. Hand off.
        </h2>

        {/* Desktop: 3-col with connectors */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-0">
          {steps.map((step, i) => (
            <div key={i} className="contents">
              <div className="bg-[#FAFAFA] border border-gray-200 rounded-xl p-7">
                <p className="text-xs font-mono text-[#D4A84B] tracking-[0.2em] uppercase mb-4">
                  {step.number}
                </p>
                <div className="w-11 h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center mb-5">
                  <step.icon size={20} className="text-[#D4A84B]" />
                </div>
                <h3 className="text-xl font-bold text-[#3D3D3D] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && <StepConnector />}
            </div>
          ))}
        </div>

        {/* Mobile: stacked with vertical connectors */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="bg-[#FAFAFA] border border-gray-200 rounded-xl p-6">
                <p className="text-xs font-mono text-[#D4A84B] tracking-[0.2em] uppercase mb-4">
                  {step.number}
                </p>
                <div className="w-11 h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center mb-5">
                  <step.icon size={20} className="text-[#D4A84B]" />
                </div>
                <h3 className="text-xl font-bold text-[#3D3D3D] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && <MobileConnector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
