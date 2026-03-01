import Image from 'next/image';

const people = [
  {
    name: 'David Fuesser',
    role: 'Product Architect',
    photo: '/headshot-david.png',
    bullets: [
      '10+ years in product, 4 continents, 30+ teams',
      'Founded KADACON (product management conference)',
      'Designs the system: intent architecture, workflows, alignment',
    ],
  },
  {
    name: 'Lucas',
    role: 'Engineering Lead',
    photo: null,
    bullets: [
      'Senior engineering leader',
      'Builds the quality layer: automated checks, safety nets',
      'Deploys on your stack, trains your team to run it',
    ],
  },
];

export function SlideDuo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          The Duo
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-12">
          Two operators. One system.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {people.map((person) => (
            <div
              key={person.name}
              className="border border-white/10 rounded-xl p-6 bg-white/[0.03]"
            >
              <div className="flex items-center gap-4 mb-5">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={56}
                    height={56}
                    className="rounded-lg grayscale"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center text-xl font-bold text-white/40">
                    L
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-white">{person.name}</h3>
                  <p className="text-sm text-[#D4A84B]">{person.role}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {person.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D4A84B]/50 shrink-0" />
                    <span className="text-sm text-gray-400 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
