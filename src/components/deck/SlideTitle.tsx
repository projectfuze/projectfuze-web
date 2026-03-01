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
        Upgrade Your Team to AI-Native
      </p>

      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] leading-tight tracking-tight max-w-3xl">
        We install the backbone that makes your team AI-native.
      </h1>

      <p className="mt-8 text-sm md:text-base text-gray-500 max-w-xl leading-relaxed">
        A product architect and an engineering leader &mdash; one on each side of the system. We build it, hand it off, and the system stays.
      </p>
    </div>
  );
}
