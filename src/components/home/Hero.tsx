import Image from 'next/image';

const CALENDLY_URL = 'https://calendly.com/davidfuesser/30min';

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
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all duration-200 text-sm tracking-wide bg-[#3D3D3D] text-white hover:bg-black shadow-sm"
              >
                Book a Call
              </a>
              <a
                href="mailto:david@projectfuze.co"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all duration-200 text-sm tracking-wide bg-transparent border border-gray-300 text-gray-600 hover:border-[#3D3D3D] hover:text-[#3D3D3D]"
              >
                david@projectfuze.co
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src="/headshot-david.png"
              alt="David Fuesser"
              width={200}
              height={200}
              className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
