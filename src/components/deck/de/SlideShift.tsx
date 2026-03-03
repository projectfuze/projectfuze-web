const rows = [
  {
    before: 'Entscheidungen vergraben in Slack',
    after: 'Strukturierter Product Intent, auf den AI handeln kann',
  },
  {
    before: 'AI-Tools isoliert im Einsatz',
    after: 'Verbundene Workflows mit fließendem Kontext',
  },
  {
    before: 'Output, dem niemand vertraut',
    after: 'Verified Output mit automatisierten Quality Gates',
  },
];

export function SlideShift() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          Der Shift
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-[#3D3D3D] leading-tight tracking-tight mb-10">
          Vorher &amp; Nachher.
        </h2>

        <div className="bg-[#09090b] rounded-2xl p-6 md:p-10">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">Vorher</p>
            <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase">Nachher</p>
          </div>

          <div className="space-y-6">
            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-2 gap-4">
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">{row.before}</p>
                <p className="text-sm md:text-base text-white leading-relaxed">{row.after}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
