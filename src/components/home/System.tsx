import { Bot } from 'lucide-react';
import Image from 'next/image';

const productItems = [
  'Structured decisions that don\u2019t need a meeting to explain',
  'Priorities that flow automatically to the people who need them',
  'Specs that agents can actually act on \u2014 no guessing',
  'Change tracking so the \u201Cwhy\u201D never gets lost',
];

const qaItems = [
  'Quality gates agents cannot bypass \u2014 if it doesn\u2019t pass, no human ever sees it',
  'Automated checks that the right thing got built',
  'Architecture that lets agents work in parallel safely',
  'Guardrails your team trusts enough to actually use',
];

/* ── Beam line with traveling dots ─────────────────────────── */
function BeamLine({ dotCount = 7 }: { dotCount?: number }) {
  return (
    <div className="relative w-full h-16 flex items-center">
      {/* Static base line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-[#D4A84B]/5 via-[#D4A84B]/20 to-[#D4A84B]/5" />

      {/* Traveling dots */}
      <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 flex items-center justify-between">
        {Array.from({ length: dotCount }, (_, i) => (
          <div
            key={i}
            className="w-[5px] h-[5px] rounded-full bg-[#D4A84B]"
            style={{
              animation: 'dot-glow 3s ease-in-out infinite',
              animationDelay: `${i * (2.5 / dotCount)}s`,
            }}
          />
        ))}
      </div>

      {/* Arrow tip */}
      <svg
        className="absolute -right-[2px] top-1/2 -translate-y-1/2"
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
      >
        <path d="M1 1L6 6L1 11" stroke="rgba(212,168,75,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ── Vertical beam for mobile ──────────────────────────────── */
function VerticalBeam() {
  return (
    <div className="relative w-8 h-12 flex justify-center">
      <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-[#D4A84B]/5 via-[#D4A84B]/20 to-[#D4A84B]/5" />
      <div className="absolute top-2 bottom-2 flex flex-col items-center justify-between">
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            className="w-[5px] h-[5px] rounded-full bg-[#D4A84B]"
            style={{
              animation: 'dot-glow 2.5s ease-in-out infinite',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      <svg
        className="absolute -bottom-[2px] left-1/2 -translate-x-1/2"
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
      >
        <path d="M1 1L6 6L11 1" stroke="rgba(212,168,75,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ── Card ──────────────────────────────────────────────────── */
function Card({
  label,
  description,
  items,
}: {
  label: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="group relative bg-gradient-to-b from-[#18181b] to-[#141416] border border-[#27272a] hover:border-[#D4A84B]/20 rounded-xl p-7 md:p-9 transition-all duration-500">
      {/* Top gold accent */}
      <div className="absolute top-0 left-8 right-8 md:left-10 md:right-10 h-px bg-gradient-to-r from-transparent via-[#D4A84B]/50 to-transparent" />

      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-xl bg-[#D4A84B]/0 group-hover:bg-[#D4A84B]/[0.015] transition-colors duration-500 pointer-events-none" />

      <p className="text-[11px] font-mono text-[#D4A84B] tracking-[0.2em] uppercase mb-3 relative">
        {label}
      </p>
      <p className="text-sm text-zinc-400 mb-6 leading-relaxed relative">
        {description}
      </p>
      <div className="h-px bg-[#27272a] group-hover:bg-[#D4A84B]/10 mb-6 transition-colors duration-500 relative" />
      <ul className="space-y-3.5 relative">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A84B]/60 mt-[7px] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Center element with layered glow ─────────────────────── */
function CenterElement() {
  return (
    <div className="flex flex-col items-center gap-4 px-6 md:px-8">
      <div className="relative">
        {/* Outer breathing glow */}
        <div
          className="absolute -inset-16 bg-[#D4A84B]/[0.05] blur-[60px] rounded-full"
          style={{ animation: 'glow-breathe 5s ease-in-out infinite' }}
        />
        {/* Mid glow */}
        <div className="absolute -inset-8 bg-[#D4A84B]/[0.04] blur-xl rounded-full" />

        {/* Icon container */}
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-b from-[#1e1e22] to-[#18181b] border border-[#D4A84B]/15 flex items-center justify-center shadow-lg shadow-[#D4A84B]/[0.08]">
          <Bot size={24} className="text-[#D4A84B]/50" />
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs font-mono text-zinc-400 tracking-[0.15em] uppercase whitespace-nowrap">
          AI Agents
        </p>
        <p className="text-[10px] text-zinc-600 mt-1">build in between</p>
      </div>
    </div>
  );
}

/* ── Main section ─────────────────────────────────────────── */
export function System() {
  return (
    <section
      className="py-28 md:py-36 bg-[#09090b] overflow-hidden relative"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      {/* Vignette — fades the dot grid at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_0%,#09090b_70%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 md:mb-24">
          <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-4">
            02 — The System
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            The nervous system your team is missing.
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
            In most orgs, every handoff loses signal. Product writes a spec, Design interprets it differently, Engineering builds something else. Context evaporates. We build the connective tissue that stops the signal loss — so your team directs the work and agents handle the transmission.
          </p>
        </div>

        {/* ── Desktop Visual ────────────────────────────────── */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Ambient glow behind center area */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#D4A84B]/[0.025] blur-[100px] rounded-full" />

            <div className="relative grid grid-cols-[5fr_2fr_auto_2fr_5fr] items-center gap-0">
              <Card
                label="Product Intent"
                description="The what and why — clear enough for humans and agents"
                items={productItems}
              />

              <BeamLine dotCount={5} />

              <CenterElement />

              <BeamLine dotCount={5} />

              <Card
                label="Verified Output"
                description="Proof the work matches the intent — automatically"
                items={qaItems}
              />
            </div>
          </div>
        </div>

        {/* ── Mobile Visual ─────────────────────────────────── */}
        <div className="md:hidden flex flex-col items-center gap-1">
          <Card
            label="Product Intent"
            description="The what and why — codified for humans and agents"
            items={productItems}
          />

          <VerticalBeam />
          <CenterElement />
          <VerticalBeam />

          <Card
            label="Verified Output"
            description="Proof it matches intent — automated, enforced"
            items={qaItems}
          />
        </div>

        {/* ── Summary ───────────────────────────────────────── */}
        <div className="mt-16 md:mt-20 text-center max-w-2xl mx-auto">
          <p className="text-sm text-zinc-500 leading-relaxed">
            Together, they bookend the entire process.{' '}
            <span className="text-zinc-300">Product defines what needs to happen.</span>{' '}
            <span className="text-zinc-300">The system proves it happened right.</span>
          </p>
        </div>

        {/* ── The Duo ─────────────────────────────────────────── */}
        <div className="mt-16 md:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-lg font-bold text-white mb-4">The duo behind the system</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We&apos;ve been on opposite sides of the same scaling startups — twice. Once at a platform SaaS that grew from Seed to $200M. Now at an AI tool going through the same transition. David running product, Lucas running engineering quality. We saw where the handoffs break, from both sides, in both worlds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/headshot-david.png"
                    alt="David Fuesser"
                    fill
                    className="object-cover object-top grayscale"
                    sizes="256px"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">
                  David — Product Intent
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                10 years inside product orgs. 30+ SaaS products. Knows where decisions get lost and how to make them flow. Designs the decision frameworks and priority structures that make your product intent actionable — not just for humans in meetings, but for agents in workflows.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/headshot-lucas.png"
                    alt="Lucas"
                    fill
                    className="object-cover object-top grayscale"
                    sizes="256px"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Lucas — Engineering Quality
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Built the engineering quality foundation of a startup from Seed to $200M. Cut critical bugs by 80% through tighter automation and smarter pipelines. Builds the safety net from the other end — quality gates agents cannot bypass, automated checks that prove output matches intent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
