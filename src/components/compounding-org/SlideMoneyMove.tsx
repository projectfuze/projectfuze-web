const shifts = [
  {
    from: 'Review every line',
    to: 'Review the artifact',
    color: 'text-[#D4A84B]',
  },
  {
    from: 'Humans draft, agents suggest',
    to: 'Humans direct, agents transmit',
    color: 'text-[#D4A84B]',
  },
  {
    from: 'Tools in silos',
    to: 'Connected backbone',
    color: 'text-[#D4A84B]',
  },
  {
    from: 'Each cycle starts fresh',
    to: 'Each cycle compounds',
    color: 'text-[#D4A84B]',
  },
];

export function SlideMoneyMove() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-[#D4A84B]/30 bg-[#D4A84B]/10">
          <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase">
            The Money Move
          </p>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
          The 2 → 3 Transition
        </h2>

        <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-12 max-w-xl mx-auto">
          This transition is organizational, not technical. You don&apos;t need better tools — you need a backbone that connects them.
        </p>

        <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          {shifts.map((shift, i) => (
            <div
              key={i}
              className="border border-[#D4A84B]/20 rounded-xl p-5 bg-[#D4A84B]/[0.04]"
            >
              <p className="text-sm text-gray-500 line-through mb-2">{shift.from}</p>
              <p className={`text-base font-semibold ${shift.color}`}>{shift.to}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-lg md:text-xl font-bold text-white mb-2">
            This is what Project Fuze installs.
          </p>
          <p className="text-sm text-gray-500">
            Product Intent on one side. Verified Output on the other. AI agents build in between.
          </p>
        </div>
      </div>
    </div>
  );
}
