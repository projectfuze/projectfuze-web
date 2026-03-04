import { Search, Wrench, ArrowRightCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const CAL_URL = 'https://cal.com/davidfuesser/ai-readiness-call';

interface Step {
  icon: LucideIcon;
  title: string;
  duration: string;
  desc: string;
}

const steps: Step[] = [
  {
    icon: Search,
    title: 'Scan',
    duration: '2 weeks · $4,000',
    desc: 'We assess your org across all 6 dimensions. You get a blunt readiness report with your Compounding Org Score.',
  },
  {
    icon: Wrench,
    title: 'Build',
    duration: '2 months · $15–25k/mo',
    desc: 'We install the backbone: decision architecture, execution flow, quality gates. Your team operates it.',
  },
  {
    icon: ArrowRightCircle,
    title: 'Hand off',
    duration: 'Your team runs it',
    desc: 'The system stays. Training, playbook, and 30-60-90 self-assessment so it keeps compounding.',
  },
];

export function SlideNextSteps() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3D3D3D] px-6 text-center">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          Next Steps
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
          The gap compounds daily.
        </h2>

        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto mb-10">
          Every day without the backbone is another day of signal loss, manual review, and work that doesn&apos;t compound.
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-left mb-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white/[0.05] border border-white/10 rounded-xl p-5"
            >
              <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.05] flex items-center justify-center mb-4">
                <step.icon size={18} className="text-[#D4A84B]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
              <p className="text-xs font-mono text-[#D4A84B] tracking-wide mb-3">
                {step.duration}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-md font-semibold transition-all duration-200 text-base tracking-wide bg-[#D4A84B] text-white hover:bg-[#b8903b] shadow-sm"
        >
          Check Your AI Readiness
        </a>

        <p className="mt-6 text-xs font-mono text-gray-500 tracking-wide">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-2 align-middle" />
          Accepting 2 new engagements in {new Date().toLocaleString('en-US', { month: 'long' })}
        </p>
      </div>
    </div>
  );
}
