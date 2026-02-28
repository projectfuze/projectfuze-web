const goodFit = [
  'Series A/B SaaS, 10–50 people',
  'Product team exists but shipping is chaotic or slow',
  'Scaling from founder-led to product-led and it\'s painful',
  'Recently hired a senior product leader and it\'s not working',
  'Board is asking about velocity and you don\'t have a good answer',
];

const notAFit = [
  'Pre-product-market-fit — you need to find the product, not fix the org',
  'Enterprise with 500+ people — I work best in the messy middle',
  'Looking for someone to "just execute the roadmap" — I diagnose first',
  'Want generic frameworks and best practices — I build custom systems',
];

export function FitCheck() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-4">06 — Fit Check</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] tracking-tight mb-14">
          Is this for you?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold text-[#3D3D3D] mb-6">Good fit</h3>
            <ul className="space-y-4">
              {goodFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="text-[#D4A84B] font-bold mt-0.5 shrink-0">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#3D3D3D] mb-6">Not a fit</h3>
            <ul className="space-y-4">
              {notAFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500">
                  <span className="text-gray-400 font-bold mt-0.5 shrink-0">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
