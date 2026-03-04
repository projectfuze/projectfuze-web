export function SlideTitle() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6 text-center">
      <div className="mb-8">
        <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          PROJECT
        </span>
        <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#D4A84B]">
          FUZE
        </span>
      </div>

      <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
        Presents
      </p>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl">
        The Compounding Org
      </h1>

      <p className="mt-8 text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
        A maturity model for organizations going AI-native. Where is your team — and what&apos;s blocking the next stage?
      </p>

      <div className="mt-12 flex items-center gap-2 text-xs font-mono text-gray-600">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4A84B]" />
        <span>Press arrow keys or click to navigate</span>
      </div>
    </div>
  );
}
