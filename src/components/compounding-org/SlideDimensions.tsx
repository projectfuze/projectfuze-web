const dimensions = [
  {
    name: 'Decision Structure',
    question: 'Are decisions codified, traceable, and actionable?',
  },
  {
    name: 'Handoff Integrity',
    question: 'How much signal is lost between functions?',
  },
  {
    name: 'Agent Readiness',
    question: 'Can agents act effectively within this function?',
  },
  {
    name: 'Quality Verification',
    question: 'Is output auto-verified against intent?',
  },
  {
    name: 'Compounding Capability',
    question: 'Does work make future work easier?',
  },
  {
    name: 'Tool Integration',
    question: 'Are tools connected or siloed?',
  },
];

export function SlideDimensions() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          Assessment
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
          Six dimensions. Scored per function.
        </h2>

        <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-xl">
          Each function — Product, Design, Engineering — is scored 0–5 across these dimensions. The result: a radar chart showing exactly where the gaps are.
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          {dimensions.map((dim, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border border-white/5 rounded-xl p-4 bg-white/[0.02]"
            >
              <span className="text-lg font-mono font-bold text-[#D4A84B]/50 shrink-0 w-6">
                {i + 1}
              </span>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">{dim.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{dim.question}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-white/10 rounded-xl p-5 bg-white/[0.02] text-center">
          <p className="text-sm text-gray-400">
            Overall <span className="text-white font-semibold">Compounding Org Score</span> = average across all functions
          </p>
          <p className="text-xs text-gray-600 mt-1">Scale: 0 (no system) → 5 (self-improving)</p>
        </div>
      </div>
    </div>
  );
}
