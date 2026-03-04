const symptoms = [
  {
    label: 'Product',
    problem: 'AI drafts specs, humans rewrite most of it',
    icon: '📋',
  },
  {
    label: 'Design',
    problem: 'AI generates options, humans redo from scratch',
    icon: '🎨',
  },
  {
    label: 'Engineering',
    problem: 'Agents edit code, humans review every line',
    icon: '⚙️',
  },
];

const whyStuck = [
  'Intent isn\'t structured enough for agents to act on',
  'Quality gates don\'t exist — so humans must review everything',
  'Handoffs leak signal between functions',
  'The backbone is missing',
];

export function SlideStuck() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          Stage 2 — Where Most Orgs Are Stuck
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
          Agentic, but bottlenecked.
        </h2>

        <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-xl">
          You have agents. You treat them like junior employees who can&apos;t be trusted. The bottleneck is human review capacity.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {symptoms.map((s) => (
            <div
              key={s.label}
              className="border border-red-500/20 rounded-xl p-5 bg-red-500/[0.04]"
            >
              <p className="text-xs font-mono text-red-400/70 tracking-widest uppercase mb-3">
                {s.label}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">{s.problem}</p>
            </div>
          ))}
        </div>

        <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
          <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-4">
            Why teams get stuck here
          </p>
          <ul className="space-y-3">
            {whyStuck.map((reason, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
