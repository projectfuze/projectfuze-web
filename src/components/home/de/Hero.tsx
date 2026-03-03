import Image from 'next/image';

const CAL_URL = 'https://cal.com/davidfuesser/ai-readiness-call';

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <p className="text-sm font-mono text-[#D4A84B] tracking-wider uppercase mb-6">
              Mach dein Team AI-native
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D3D3D] leading-[1.1] tracking-tight mb-6">
              Dein Team hat AI-Tools. Was fehlt, ist ein AI-nativer Workflow.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mb-10">
              Project Fuze ist ein Product Architect und ein Engineering Leader — einer auf jeder Seite des Systems. Wir installieren das Backbone, das Product, Design und Engineering in einen AI-nativen Workflow verbindet. Wir bauen es, übergeben es, und das System bleibt.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all duration-200 text-sm tracking-wide bg-[#3D3D3D] text-white hover:bg-black shadow-sm"
            >
              AI-Readiness prüfen
            </a>
            <p className="mt-4 text-xs font-mono text-gray-400 tracking-wide">
              <span className="relative inline-flex w-1.5 h-1.5 mr-2 align-middle"><span className="absolute inset-0 rounded-full bg-green-400 animate-ping" style={{ animationDuration: '2s' }} /><span className="relative w-1.5 h-1.5 rounded-full bg-green-500" /></span>
              2 freie Plätze im {new Date().toLocaleString('de-DE', { month: 'long' })}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="text-center">
              <div className="relative w-40 h-40 rounded-xl overflow-hidden">
                <Image
                  src="/headshot-david.png"
                  alt="David Fuesser"
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="480px"
                  priority
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 font-medium">David</p>
            </div>
            <div className="text-center">
              <div className="relative w-40 h-40 rounded-xl overflow-hidden">
                <Image
                  src="/headshot-lucas.png"
                  alt="Lucas"
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="480px"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 font-medium">Lucas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
