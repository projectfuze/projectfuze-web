import { Compass, Cable, Zap, GraduationCap, ShieldCheck, GitBranch, ArrowRightCircle, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const CAL_URL = 'https://cal.com/davidfuesser/ai-readiness-call';

interface Deliverable {
  icon: LucideIcon;
  text: string;
}

const architectDeliverables: Deliverable[] = [
  { icon: Compass, text: 'Product-Intent-Architektur — Entscheidungen und Prioritäten so strukturiert, dass Agents darauf handeln können' },
  { icon: Cable, text: 'Verbundene Workflows — dein Tool-Stack architektiert, damit Kontext fließt statt verloren geht' },
  { icon: Zap, text: 'Agent-ready Infrastruktur — das System, das dein Team braucht, um wirklich mit AI zu arbeiten' },
  { icon: GraduationCap, text: 'Team-Training — deine Leute wissen, wie sie es betreiben, nachdem wir gehen' },
];

const turnkeyExtras: Deliverable[] = [
  { icon: ShieldCheck, text: 'Quality Gates und automatisierte Checks — schlechte Arbeit wird abgefangen, bevor dein Team sie sieht' },
  { icon: GitBranch, text: 'Engineering-Quality-Infrastruktur gebaut und deployed auf deinem Stack' },
  { icon: ArrowRightCircle, text: 'End-to-end: von Product Intent bis Verified Output, voll operativ' },
];

export function Engagements() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-4">04 — Das Engagement</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] tracking-tight mb-14">
          Ein System. An dich übergeben.
        </h2>

        {/* Scan — entry point card */}
        <div className="bg-white border border-gray-200 rounded-xl p-7 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#D4A84B]/8 flex items-center justify-center">
              <Search size={16} className="text-[#D4A84B]" />
            </div>
            <p className="text-xs font-mono text-[#D4A84B] tracking-[0.15em] uppercase">Schritt 1 — Einstieg</p>
          </div>
          <h3 className="text-xl font-bold text-[#3D3D3D] mb-1">AI-Readiness Scan</h3>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
            <span className="text-3xl font-bold text-[#3D3D3D]">$4.000</span>
            <span className="text-sm text-gray-400">&middot;</span>
            <span className="text-sm text-gray-500">2 Wochen</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
            Zwei Wochen, um deine Reibungspunkte zu kartieren. Wir sagen dir, ob du bereit für Agents bist, oder ob du zuerst dein Fundament reparieren musst. Du bekommst eine Roadmap, kein Verkaufsgespräch.
          </p>
        </div>

        {/* Build cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* The Architect — David solo */}
          <div className="bg-white border border-gray-200 rounded-xl p-7 md:p-8">
            <h3 className="text-xl font-bold text-[#3D3D3D] mb-0.5">The Architect</h3>
            <p className="text-sm text-gray-400 mb-3">David solo</p>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="text-3xl md:text-4xl font-bold text-[#3D3D3D]">$15.000</span>
              <span className="text-gray-400 text-lg">/Monat</span>
            </div>
            <p className="text-sm text-gray-500 mb-1">2 Monate</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              David designt das System — dein Team implementiert den technischen Layer.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Ideal für Teams mit starkem Engineering, die den Workflow und die Strategie brauchen.
            </p>

            <div className="h-px bg-gray-100 mb-6" />

            <ul className="space-y-4">
              {architectDeliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-lg bg-[#D4A84B]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={16} className="text-[#D4A84B]" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* David + Lucas — Turnkey */}
          <div className="bg-white border-2 border-[#D4A84B] rounded-xl p-7 md:p-8 shadow-lg relative">
            <h3 className="text-xl font-bold text-[#3D3D3D] mb-0.5">David + Lucas</h3>
            <p className="text-sm text-[#D4A84B] font-medium mb-3">Turnkey</p>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="text-3xl md:text-4xl font-bold text-[#3D3D3D]">$25.000</span>
              <span className="text-gray-400 text-lg">/Monat</span>
            </div>
            <p className="text-sm text-gray-500 mb-1">2 Monate</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              David architektiert das System. Lucas baut den Engineering-Quality-Layer. Turnkey.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Ideal für Teams, die das komplette Backbone installiert brauchen — von Intent bis Verified Output.
            </p>

            <div className="h-px bg-gray-100 mb-6" />

            <p className="text-xs font-mono text-gray-400 tracking-wider uppercase mb-4">Alles aus The Architect, plus:</p>
            <ul className="space-y-4">
              {turnkeyExtras.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-lg bg-[#D4A84B]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={16} className="text-[#D4A84B]" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold transition-all duration-200 text-sm tracking-wide bg-[#3D3D3D] text-white hover:bg-black shadow-sm"
          >
            AI-Readiness prüfen
          </a>
          <p className="mt-6 text-sm text-gray-400">
            Noch nicht sicher? Starte mit dem Scan.{' '}
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A84B] hover:underline"
            >
              Lass uns reden.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
