const stages = [
  { num: '0', name: 'Manual', signal: '"We just talk about it"', dim: true },
  { num: '1', name: 'Chat-Assisted', signal: '"We use AI tools"', dim: true },
  { num: '2', name: 'Agentic, Approve Everything', signal: '"We have agents but review everything"', dim: false },
  { num: '3', name: 'Plan-First, Review Output', signal: '"We direct. Agents transmit."', highlight: true, dim: false },
  { num: '4', name: 'Idea to Artifact', signal: '"We describe, agents deliver"', dim: true },
  { num: '5', name: 'Parallel Fleet', signal: '"Multiple workstreams, no bottleneck"', dim: true },
];

export function SlideOverview() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          The 6 Stages
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-12">
          Where is your org on the ladder?
        </h2>

        <div className="space-y-3">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className={`flex items-start gap-4 rounded-xl p-4 md:p-5 border transition-all ${
                stage.highlight
                  ? 'border-[#D4A84B]/50 bg-[#D4A84B]/[0.08]'
                  : 'border-white/5 bg-white/[0.02]'
              }`}
            >
              <span
                className={`text-lg font-mono font-bold shrink-0 w-8 ${
                  stage.highlight ? 'text-[#D4A84B]' : 'text-white/30'
                }`}
              >
                {stage.num}
              </span>
              <div className="flex-1 min-w-0">
                <h3
                  className={`text-base md:text-lg font-bold ${
                    stage.highlight ? 'text-[#D4A84B]' : stage.dim ? 'text-white/40' : 'text-white'
                  }`}
                >
                  {stage.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    stage.highlight ? 'text-[#D4A84B]/70' : 'text-gray-500'
                  }`}
                >
                  {stage.signal}
                </p>
              </div>
              {stage.highlight && (
                <span className="hidden md:inline-block text-xs font-mono text-[#D4A84B] bg-[#D4A84B]/10 px-2 py-1 rounded shrink-0">
                  TARGET
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
