import { Check, X, CircleCheck, CircleX } from 'lucide-react';

const goodFit = [
  'Series A/B SaaS, 10\u201350 people',
  'Your team has AI tools but nothing compounds \u2014 it\u2019s still individual experiments',
  'Engineers spend half their week clarifying what to build instead of building',
  'You want a working system, not a strategy deck',
  'You\u2019re ready to change how decisions flow through your org',
];

const notAFit = [
  'Pre-product-market-fit \u2014 find the product first, upgrade the org later',
  'Looking for an \u201CAI strategy consultant\u201D \u2014 we build systems, not slides',
  'Want to replace your team with agents \u2014 we make your team dangerous, not redundant',
  'Not ready for organizational change \u2014 the system requires buy-in, not just budget',
];

export function FitCheck() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-4">05 — Fit Check</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] tracking-tight mb-14">
          Is this for you?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Good fit card */}
          <div className="bg-[#F5F5F5] rounded-xl border border-gray-200 p-7 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center">
                <CircleCheck size={18} className="text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3D3D3D]">Good fit</h3>
            </div>
            <ul className="space-y-4">
              {goodFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} className="text-emerald-600" strokeWidth={3} />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not a fit card */}
          <div className="bg-[#F5F5F5] rounded-xl border border-gray-200 p-7 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center">
                <CircleX size={18} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-[#3D3D3D]">Not a fit</h3>
            </div>
            <ul className="space-y-4">
              {notAFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500">
                  <div className="w-6 h-6 rounded-md bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={13} className="text-gray-400" strokeWidth={3} />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
