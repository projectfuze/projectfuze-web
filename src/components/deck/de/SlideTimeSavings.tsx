const examples = [
  {
    label: 'Tiefe Product-Analyse',
    context: 'Vollständiges Metabase-Audit — Datenmodell, Nutzungsmuster, Lücken',
    before: '3 Tage',
    after: '2 Stunden',
    barBefore: 100,
    barAfter: 3,
  },
  {
    label: 'Bug-Behebung',
    context: 'Finden \u2192 Melden \u2192 Priorisieren \u2192 QA \u2192 PM \u2192 Eng \u2192 gefixt',
    before: '2\u20133 Tage',
    after: '30 Min',
    barBefore: 100,
    barAfter: 1,
  },
  {
    label: 'Tägliches Team-Briefing',
    context: 'Personalisierter täglicher Kontext pro Teammitglied — aus Slack, Kalender, E-Mail',
    before: '30\u201345 Min/Person',
    after: 'Auto-generiert',
    barBefore: 100,
    barAfter: 0,
  },
];

export function SlideTimeSavings() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          Der Beweis
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-[#3D3D3D] leading-tight tracking-tight mb-4">
          Gleiche Qualität. Bruchteil der Zeit.
        </h2>
        <p className="text-sm text-gray-500 mb-12">
          Echte Beispiele aus aktuellen Engagements.
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
                      <span className="text-xs font-mono text-gray-400 tracking-wide uppercase">Vorher</span>
                      <span className="text-sm font-semibold text-gray-500">{ex.before}</span>
                    </div>
                    <div className="h-3 rounded-full bg-gray-300/60 w-full" />
                  </div>

                  {/* After bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-[#D4A84B] tracking-wide uppercase">Nachher</span>
                      <span className="text-sm font-bold text-[#3D3D3D]">{ex.after}</span>
                    </div>
                    {ex.barAfter > 0 ? (
                      <div className="h-3 rounded-full bg-[#D4A84B]" style={{ width: `${ex.barAfter}%` }} />
                    ) : (
                      <div className="h-3 rounded-full bg-[#D4A84B]/20 flex items-center justify-center">
                        <span className="text-[8px] font-mono text-[#D4A84B] tracking-wider uppercase">0 manueller Aufwand</span>
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
