export function SlideProblem() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] px-6">
      <div className="max-w-2xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          Das Problem
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-[#3D3D3D] leading-tight tracking-tight mb-10">
          Dein Team hat AI-Tools.
          <br />
          Kein System, das sie verbindet.
        </h2>

        <ul className="space-y-5">
          {[
            'Entscheidungen leben in Slack-Threads. AI Agents finden sie nicht.',
            'Niemand weiß, welcher Output verifiziert ist und welcher geraten.',
            'Alle experimentieren. Nichts summiert sich.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-[#D4A84B] shrink-0" />
              <span className="text-base md:text-lg text-gray-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
