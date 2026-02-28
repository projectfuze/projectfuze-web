import Image from 'next/image';

export function WhoIAm() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-8">03 — Who I Am</p>

        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start">
          <div className="md:block">
            <Image
              src="/headshot-david.png"
              alt="David Fuesser"
              width={180}
              height={180}
              className="rounded-xl"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3D3D3D] tracking-tight mb-6">
              David Fuesser
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I&apos;ve spent 10+ years inside product organizations across 4 continents, working with 30+ teams from early-stage startups to scaling companies. I founded KADACON, a product management conference in Germany. I&apos;ve been the operator, the advisor, and the person in the room when the CEO asks &ldquo;why isn&apos;t this working?&rdquo;
              </p>
              <p>
                I don&apos;t bring decks. I bring diagnostic precision. I build 10-database Notion operating systems, alignment stacks, decision logs, and agreement-tracking frameworks. The stuff that actually changes how a company runs day-to-day.
              </p>
              <p className="text-[#3D3D3D] font-medium">
                I don&apos;t want to be right. I want to get it right.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              <span>10+ years in product</span>
              <span className="text-gray-300">|</span>
              <span>4 continents</span>
              <span className="text-gray-300">|</span>
              <span>30+ teams</span>
              <span className="text-gray-300">|</span>
              <span>Founded KADACON</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
