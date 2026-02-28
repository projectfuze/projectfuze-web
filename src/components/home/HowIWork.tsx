const steps = [
  {
    title: 'Embed',
    description:
      'I join your Slack. I sit in your meetings. I watch how decisions actually get made — not how the org chart says they should. I talk to your engineers, your PMs, your designers. I read the Jira board, the PRDs, the retros.',
  },
  {
    title: 'Diagnose',
    description:
      'I map the gap between stated process and reality. I find the specific dysfunction — the retention cliff nobody measured, the API failures nobody monitored, the decision bottleneck everyone works around. Precise findings, not vibes.',
  },
  {
    title: 'Build',
    description:
      'I design the operating system and build it with your team. Decision frameworks, alignment stacks, roadmap processes, agreement tracking. Not a slide deck you file away. A working system your team uses on Monday morning.',
  },
];

export function HowIWork() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-4">04 — How I Work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] tracking-tight mb-14">
          Embed. Diagnose. Build.
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold text-[#3D3D3D] mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
