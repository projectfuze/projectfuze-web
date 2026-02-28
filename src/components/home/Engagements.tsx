const CALENDLY_URL = 'https://calendly.com/davidfuesser/30min';

const tiers = [
  {
    name: 'Product Health Scan',
    price: '$5,000',
    duration: '2 weeks',
    description: 'A data-driven diagnostic of what your product org is actually doing vs. what it thinks it\'s doing.',
    deliverables: [
      'Retention, activation, and engagement pattern analysis',
      'Tool and workflow audit across product + engineering',
      'Findings report with prioritized action items',
      'One readout session with leadership',
    ],
  },
  {
    name: 'Embedded Diagnostic',
    price: '$15,000–$20,000',
    duration: '4 weeks',
    description: 'I embed in your org, shadow decisions, map the dysfunction, and design the operating model that fits your context.',
    deliverables: [
      'Everything in the Health Scan',
      'Stakeholder interviews across all levels',
      'Decision-flow mapping and bottleneck analysis',
      'Custom operating model design with implementation roadmap',
    ],
    highlighted: true,
  },
  {
    name: 'Operating System Build',
    price: '$10,000/mo',
    duration: '3–6 months',
    description: 'I build the execution infrastructure with your team — the systems, processes, and tools that change how you work.',
    deliverables: [
      'Custom Notion operating system (roadmap, decisions, agreements)',
      'Alignment stack and decision rights framework',
      'Process design and team ritual implementation',
      'Ongoing coaching and system iteration',
    ],
  },
];

export function Engagements() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-4">05 — Engagements</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] tracking-tight mb-4">
          Three ways to work together
        </h2>
        <p className="text-gray-500 mb-14 max-w-2xl">
          Each tier naturally leads to the next. Start with a scan, go deeper if the findings warrant it.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`bg-white rounded-lg p-6 flex flex-col ${
                tier.highlighted
                  ? 'border-2 border-[#D4A84B] shadow-lg'
                  : 'border border-gray-200'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#3D3D3D] mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-[#3D3D3D]">{tier.price}</span>
                  <span className="text-sm text-gray-400">{tier.duration}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-3 mt-auto mb-6">
                {tier.deliverables.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#D4A84B] mt-1 shrink-0">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold transition-all duration-200 text-sm tracking-wide bg-[#3D3D3D] text-white hover:bg-black shadow-sm"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
