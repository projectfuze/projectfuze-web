const functions = ['Product', 'Design', 'Engineering'];
const dimensions = [
  'Decision Structure',
  'Handoff Integrity',
  'Agent Readiness',
  'Quality Verification',
  'Compounding Capability',
  'Tool Integration',
];

export function SlideYourScore() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          Your Results
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
          Your Compounding Org Score
        </h2>

        <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-xl">
          Based on our assessment, here&apos;s where your org stands today — and where we&apos;re heading.
        </p>

        {/* Score Grid */}
        <div className="border border-white/10 rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 bg-white/[0.04]">
            <div className="p-3 md:p-4 border-r border-white/5">
              <span className="text-xs font-mono text-gray-500">Dimension</span>
            </div>
            {functions.map((fn) => (
              <div key={fn} className="p-3 md:p-4 border-r border-white/5 last:border-r-0 text-center">
                <span className="text-xs font-mono text-[#D4A84B] tracking-wide">{fn}</span>
              </div>
            ))}
          </div>

          {/* Rows */}
          {dimensions.map((dim, i) => (
            <div key={dim} className={`grid grid-cols-4 ${i < dimensions.length - 1 ? 'border-b border-white/5' : ''}`}>
              <div className="p-3 md:p-4 border-r border-white/5">
                <span className="text-xs md:text-sm text-gray-400">{dim}</span>
              </div>
              {functions.map((fn) => (
                <div key={fn} className="p-3 md:p-4 border-r border-white/5 last:border-r-0 text-center">
                  <span className="text-lg font-mono text-white/20">—</span>
                </div>
              ))}
            </div>
          ))}

          {/* Total Row */}
          <div className="grid grid-cols-4 border-t border-[#D4A84B]/20 bg-[#D4A84B]/[0.04]">
            <div className="p-3 md:p-4 border-r border-white/5">
              <span className="text-sm font-bold text-white">Score</span>
            </div>
            {functions.map((fn) => (
              <div key={fn} className="p-3 md:p-4 border-r border-white/5 last:border-r-0 text-center">
                <span className="text-lg font-mono font-bold text-white/20">— / 5</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Overall Score: <span className="text-2xl font-mono font-bold text-white/20 ml-2">— / 5</span>
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Filled during your AI-Readiness Scan presentation
          </p>
        </div>
      </div>
    </div>
  );
}
