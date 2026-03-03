import Image from 'next/image';

const people = [
  {
    name: 'David Fuesser',
    role: 'Product Architect',
    photo: '/headshot-david.png',
    bullets: [
      'Product Lead in 3 High-Growth-Startups (YC-backed, Series A/B, Bootstrapped)',
      'Gründer von KADACON — Product Consulting für Mercedes-Benz, Fastic, Quora, Dr. Sam',
      'Designt das System: Intent-Architektur, Workflows, Alignment',
    ],
  },
  {
    name: 'Lucas',
    role: 'Engineering Lead',
    photo: '/headshot-lucas.png',
    bullets: [
      'Senior Engineering Leader',
      'Baut den Quality Layer: automatisierte Checks, Sicherheitsnetze',
      'Deployed auf deinem Stack, trainiert dein Team, es zu betreiben',
    ],
  },
];

export function SlideDuo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          Das Duo
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-12">
          Zwei Operateure. Ein System.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {people.map((person) => (
            <div
              key={person.name}
              className="border border-white/10 rounded-xl p-6 bg-white/[0.03]"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top grayscale"
                    sizes="256px"
                  />
                </div>
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
