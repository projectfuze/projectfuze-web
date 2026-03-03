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
    title: 'Scannen',
    duration: '2 Wochen \u00b7 $4.000',
    desc: 'Reibungspunkte deiner Org kartieren. Du bekommst einen ehrlichen Readiness-Report.',
  },
  {
    icon: Wrench,
    title: 'Bauen',
    duration: '2 Monate \u00b7 $15\u201325k/Mo',
    desc: 'Das System architektieren. Den Engineering-Quality-Layer bauen.',
  },
  {
    icon: ArrowRightCircle,
    title: 'Übergeben',
    duration: 'Dein Team betreibt es',
    desc: 'Das System bleibt. AI shipped als normaler Teil des Betriebs.',
  },
];

export function SlideHowWeWork() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          So arbeiten wir
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-[#3D3D3D] leading-tight tracking-tight mb-12">
          Scannen. Bauen. Übergeben.
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
          Jedes Engagement startet mit dem Scan.
        </p>
      </div>
    </div>
  );
}
