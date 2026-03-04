const stages = [
  {
    num: '4',
    name: 'Idea to Artifact',
    signal: '"We describe, agents deliver"',
    items: [
      'Outcome description → decision artifact',
      'Brief → tested prototype',
      'Idea → pull request',
    ],
    desc: 'The gap between intent and artifact shrinks to near-zero. Humans describe outcomes; the system produces verified artifacts.',
  },
  {
    num: '5',
    name: 'Parallel Fleet',
    signal: '"Multiple workstreams, no bottleneck"',
    items: [
      'Parallel initiative streams',
      'Parallel design explorations',
      'Parallel cloud execution',
    ],
    desc: 'The org runs multiple parallel workstreams without proportional headcount. The backbone handles coordination.',
  },
];

export function SlideAdvanced() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          Stages 4–5
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
          Where the best teams are heading.
        </h2>

        <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-xl">
          These stages require Stage 3 as a foundation. Without the backbone, they&apos;re not possible.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="border border-white/10 rounded-xl p-6 bg-white/[0.02]"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg font-mono font-bold text-white/30">
                  {stage.num}
                </span>
                <h3 className="text-lg font-bold text-white">{stage.name}</h3>
              </div>

              <p className="text-sm text-[#D4A84B]/70 mb-4">{stage.signal}</p>

              <ul className="space-y-2 mb-4">
                {stage.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A84B]/40 shrink-0" />
                    <span className="text-sm text-gray-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-600 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500 text-center">
          Stage 3 is the foundation. Everything above it is built on the backbone.
        </p>
      </div>
    </div>
  );
}
