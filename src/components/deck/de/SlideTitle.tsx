export function SlideTitle() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mb-8">
        <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#3D3D3D]">
          PROJECT
        </span>
        <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#D4A84B]">
          FUZE
        </span>
      </div>

      <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
        Mach dein Team AI-native
      </p>

      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] leading-tight tracking-tight max-w-3xl">
        Wir installieren das Backbone, das dein Team AI-native macht.
      </h1>

      <p className="mt-8 text-sm md:text-base text-gray-500 max-w-xl leading-relaxed">
        Ein Product Architect und ein Engineering Leader &mdash; einer auf jeder Seite des Systems. Wir bauen es, übergeben es, und das System bleibt.
      </p>
    </div>
  );
}
