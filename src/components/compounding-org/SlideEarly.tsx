const stages = [
  {
    num: '0',
    name: 'Manual',
    items: [
      { fn: 'Product', desc: 'Tribal knowledge, decisions live in heads' },
      { fn: 'Design', desc: 'Every screen built from scratch' },
      { fn: 'Engineering', desc: 'Docs + Stack Overflow, no AI' },
    ],
  },
  {
    num: '1',
    name: 'Chat-Assisted',
    items: [
      { fn: 'Product', desc: 'ChatGPT for research and drafts' },
      { fn: 'Design', desc: 'AI for exploration and variants' },
      { fn: 'Engineering', desc: 'Copilot suggestions, AI boilerplate' },
    ],
  },
];

export function SlideEarly() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          Stages 0–1
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
          Manual to Chat-Assisted
        </h2>

        <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-xl">
          Individuals may use AI, but nothing connects. Each person&apos;s usage is siloed. Output doesn&apos;t feed back into anything.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="border border-white/10 rounded-xl p-6 bg-white/[0.02]"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg font-mono font-bold text-white/30">
                  {stage.num}
                </span>
                <h3 className="text-lg font-bold text-white">{stage.name}</h3>
              </div>

              <div className="space-y-3">
                {stage.items.map((item) => (
                  <div key={item.fn} className="flex items-start gap-3">
                    <span className="text-xs font-mono text-[#D4A84B] tracking-wide mt-0.5 w-16 shrink-0">
                      {item.fn}
                    </span>
                    <span className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500 text-center">
          Most orgs pass through these stages quickly. The real plateau comes next.
        </p>
      </div>
    </div>
  );
}
