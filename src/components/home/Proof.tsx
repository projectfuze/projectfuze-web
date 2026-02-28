const findings = [
  {
    stat: '86% of users were one-and-done',
    root: 'Five key tools returned errors on 100% of 30,950 API calls. No one on the team knew.',
    outcome: 'Instrumented the failures. Prioritized fixes. Completion rate 4x in 6 weeks.',
  },
  {
    stat: '100% tool failure across 30,950 API calls',
    root: 'The AI feature team was shipping new features on top of broken infrastructure. No observability, no alerts.',
    outcome: 'Built monitoring stack. Redirected sprint capacity. First working end-to-end flow in 3 weeks.',
  },
  {
    stat: 'VP of Product existed. Founder still made every decision.',
    root: 'No decision-making framework. No agreement on who owns what. The VP had a title but no authority.',
    outcome: 'Designed decision rights matrix. Built alignment stack in Notion. Founder stepped back within a month.',
  },
  {
    stat: 'Two teams building the same feature. Neither knew.',
    root: 'No shared roadmap. No cross-team standup. Product and engineering reported to different execs with different goals.',
    outcome: 'Unified roadmap. Weekly cross-team sync. Eliminated 40% of duplicate work.',
  },
];

export function Proof() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-4">02 — What I Find</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] tracking-tight mb-4">
          Specific findings. Not vague assessments.
        </h2>
        <p className="text-gray-500 mb-14 max-w-2xl">
          From a recent engagement with a 50-person AI construction company, Series A.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {findings.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 hover:border-[#D4A84B]/50 transition-colors">
              <p className="text-xl font-bold text-[#3D3D3D] mb-3 leading-tight">
                &ldquo;{item.stat}&rdquo;
              </p>
              <p className="text-sm text-gray-500 mb-3">
                <span className="font-semibold text-gray-600">Root cause:</span> {item.root}
              </p>
              <p className="text-sm text-[#D4A84B]">
                <span className="font-semibold">What changed:</span> {item.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
