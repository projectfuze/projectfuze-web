const examples = [
  {
    label: 'Deep Product Analysis',
    context: 'Full Metabase audit — data model, usage patterns, gaps',
    before: '3 days',
    after: '2 hours',
    barBefore: 100,
    barAfter: 3,
  },
  {
    label: 'Bug Resolution',
    context: 'Finding \u2192 filing \u2192 prioritizing \u2192 QA \u2192 PM \u2192 Eng \u2192 fixed',
    before: '2\u20133 days',
    after: '30 min',
    barBefore: 100,
    barAfter: 1,
  },
  {
    label: 'Daily Team Briefing',
    context: 'Personalized daily context per team member \u2014 pulled from Slack, calendar, email',
    before: '30\u201345 min/person',
    after: 'Auto-generated',
    barBefore: 100,
    barAfter: 0,
  },
];

export function SlideTimeSavings() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          The Proof
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-[#3D3D3D] leading-tight tracking-tight mb-4">
          Same quality. Fraction of the time.
        </h2>
        <p className="text-sm text-gray-500 mb-12">
          Real examples from recent engagements.
        </p>

        <div className="space-y-10">
          {examples.map((ex) => (
            <div key={ex.label}>
              <h3 className="text-lg font-bold text-[#3D3D3D] mb-1">{ex.label}</h3>
              <p className="text-sm text-gray-400 mb-5">{ex.context}</p>

              {ex.barBefore > 0 ? (
                <>
                  {/* Before bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-gray-400 tracking-wide uppercase">Before</span>
                      <span className="text-sm font-semibold text-gray-500">{ex.before}</span>
                    </div>
                    <div className="h-3 rounded-full bg-gray-300/60 w-full" />
                  </div>

                  {/* After bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-[#D4A84B] tracking-wide uppercase">After</span>
                      <span className="text-sm font-bold text-[#3D3D3D]">{ex.after}</span>
                    </div>
                    {ex.barAfter > 0 ? (
                      <div className="h-3 rounded-full bg-[#D4A84B]" style={{ width: `${ex.barAfter}%` }} />
                    ) : (
                      <div className="h-3 rounded-full bg-[#D4A84B]/20 flex items-center justify-center">
                        <span className="text-[8px] font-mono text-[#D4A84B] tracking-wider uppercase">0 manual effort</span>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 line-through">{ex.before}</span>
                  <span className="text-sm text-[#3D3D3D]">&rarr;</span>
                  <span className="text-sm font-bold text-[#D4A84B]">{ex.after}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
