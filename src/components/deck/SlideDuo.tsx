import Image from 'next/image';

const people = [
  {
    name: 'David Fuesser',
    role: 'Product Architect',
    photo: '/headshot-david.png',
    bullets: [
      'Product lead in three high-growth startups — knows where decisions get lost',
      'Founded a product consulting firm (Mercedes-Benz, Quora, 30+ orgs)',
      'Designs decision frameworks and priority structures that agents can act on',
    ],
  },
  {
    name: 'Lucas',
    role: 'Engineering Lead',
    photo: '/headshot-lucas.png',
    bullets: [
      'Built engineering quality foundation of a startup from Seed to $200M',
      'Cut critical bugs by 80% through tighter automation and smarter pipelines',
      'Quality gates agents cannot bypass, automated checks that prove output matches intent',
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
