const beliefs = [
  {
    wrong: '"More meetings = better alignment"',
    right: 'Structured decisions eliminate most alignment meetings',
  },
  {
    wrong: '"AI tool adoption = AI transformation"',
    right: 'Tools in silos don\'t compound',
  },
  {
    wrong: '"We need to review every output line by line"',
    right: 'Build quality gates, review at artifact level',
  },
  {
    wrong: '"Our process is fine, we just need better tools"',
    right: 'The backbone is missing',
  },
  {
    wrong: '"Context can\'t be systematized"',
    right: 'Intent, decisions, and priority logic can all be structured',
  },
  {
    wrong: '"Only engineering benefits from AI agents"',
    right: 'The loop applies to every function',
  },
];

export function SlideBeliefs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          Mindset Shift
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-10">
          Beliefs that block the transition.
        </h2>

        <div className="space-y-3">
          {beliefs.map((b, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 border border-white/5 rounded-xl px-4 py-3 md:py-4 bg-white/[0.02]"
            >
              <span className="text-sm text-red-400/70 line-through flex-1 md:text-right">
                {b.wrong}
              </span>
              <span className="hidden md:block text-[#D4A84B]/30">→</span>
              <span className="text-sm text-[#D4A84B] font-medium flex-1">
                {b.right}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
