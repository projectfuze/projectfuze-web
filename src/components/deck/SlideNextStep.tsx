const CAL_URL = 'https://cal.com/davidfuesser/ai-readiness-call';

export function SlideNextStep() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3D3D3D] px-6 text-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
          The gap compounds daily.
        </h2>

        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto mb-10">
          30-minute call. We&apos;ll tell you whether your org is ready to go AI-native &mdash; or what&apos;s blocking it.
        </p>

        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-md font-semibold transition-all duration-200 text-base tracking-wide bg-[#D4A84B] text-white hover:bg-[#b8903b] shadow-sm"
        >
          Check Your AI Readiness
        </a>

        <p className="mt-6 text-xs font-mono text-gray-500 tracking-wide">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-2 align-middle" />
          Accepting 2 new engagements in {new Date().toLocaleString('en-US', { month: 'long' })}
        </p>
      </div>
    </div>
  );
}
