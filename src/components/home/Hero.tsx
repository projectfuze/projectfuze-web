import Image from 'next/image';

const CAL_URL = 'https://cal.com/davidfuesser/ai-readiness-call';

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <p className="text-sm font-mono text-[#D4A84B] tracking-wider uppercase mb-6">
              Upgrade Your Team to AI-Native
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D3D3D] leading-[1.1] tracking-tight mb-6">
              Your team has AI tools. They don&apos;t have an AI-native workflow.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mb-10">
              Project Fuze is a product architect and an engineering leader — one on each side of the system. We install the backbone that connects Product, Design, and Engineering into a single AI-native workflow. We build it, hand it off, and the system stays.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all duration-200 text-sm tracking-wide bg-[#3D3D3D] text-white hover:bg-black shadow-sm"
            >
              Check Your AI Readiness
            </a>
            <p className="mt-4 text-xs font-mono text-gray-400 tracking-wide">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-2 align-middle" />
              Accepting 2 new engagements in {new Date().toLocaleString('en-US', { month: 'long' })}
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
