import { Search, Wrench, ArrowRightCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

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
    duration: '2 weeks \u00b7 $4,000',
    desc: 'Map your org\u2019s friction. You get a blunt readiness report.',
  },
  {
    icon: Wrench,
    title: 'Build',
    duration: '2 months \u00b7 $15\u201325k/mo',
    desc: 'Architect the system. Build the engineering quality layer.',
  },
  {
    icon: ArrowRightCircle,
    title: 'Hand off',
    duration: 'Your team runs it',
    desc: 'The system stays. AI ships as a normal part of operations.',
  },
];

export function SlideHowWeWork() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          How We Work
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-[#3D3D3D] leading-tight tracking-tight mb-12">
          Scan. Build. Hand off.
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#FAFAFA] border border-gray-200 rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center mb-4">
                <step.icon size={18} className="text-[#D4A84B]" />
              </div>
              <h3 className="text-lg font-bold text-[#3D3D3D] mb-1">{step.title}</h3>
              <p className="text-xs font-mono text-[#D4A84B] tracking-wide mb-3">
                {step.duration}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-400 text-center">
          Every engagement starts with the Scan.
        </p>
      </div>
    </div>
  );
}
