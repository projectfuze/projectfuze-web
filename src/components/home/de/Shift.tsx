import {
  Calendar,
  MessageSquare,
  FileText,
  Copy,
  Users,
  Terminal,
  Workflow,
  Bot,
  Zap,
  Shield,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Row {
  icon: LucideIcon;
  text: string;
}

const beforeRows: Row[] = [
  { icon: Calendar, text: 'Meetings den ganzen Tag, nur um auf einen Stand zu kommen' },
  { icon: MessageSquare, text: 'Specs werden dreimal falsch interpretiert' },
  { icon: FileText, text: 'Engineers starten jede Aufgabe von Null' },
  { icon: Copy, text: 'Bugs werden manuell gefunden — Tage später' },
  { icon: Users, text: 'AI ist ein Nebenexperiment, das nie hängenbleibt' },
];

const afterRows: Row[] = [
  { icon: Terminal, text: 'Entscheidungen sind strukturiert — das System hält den Kontext' },
  { icon: Workflow, text: 'Intent ist klar genug, damit Menschen und Agents handeln können' },
  { icon: Bot, text: 'Agents erstellen den Entwurf — dein Team reviewt und shipped' },
  { icon: Zap, text: 'Qualität wird automatisch geprüft, bevor jemand draufschaut' },
  { icon: Shield, text: 'AI ist in den Arbeitsablauf des gesamten Teams eingebaut' },
];

export function Shift() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-4">
          01 — Der Shift
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] tracking-tight mb-3">
          Von Tools zu Teamwork.
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mb-12">
          Deine Engineers haben Copilot. Deine PMs haben ChatGPT ausprobiert. Aber deine Org läuft immer noch mit Meetings, falsch gelesenen Specs und manuellen Übergaben. Die Tools sind da. Das Backbone fehlt.
        </p>

        <div className="bg-[#09090b] rounded-2xl p-5 md:p-10">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 items-stretch">
            {/* Vorher */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 md:p-8">
              <p className="text-xs font-mono text-zinc-500 tracking-[0.2em] uppercase mb-6">
                Dein Team heute
              </p>
              <div className="space-y-4">
                {beforeRows.map((row, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                      <row.icon size={16} className="text-zinc-500" />
                    </div>
                    <span className="text-sm text-zinc-500">{row.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider arrow */}
            <div className="hidden md:flex items-center justify-center px-4">
              <div className="w-10 h-10 rounded-full border border-[#D4A84B]/20 flex items-center justify-center">
                <ArrowRight size={16} className="text-[#D4A84B]/60" />
              </div>
            </div>
            <div className="flex md:hidden items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-[#D4A84B]/20 flex items-center justify-center rotate-90">
                <ArrowRight size={16} className="text-[#D4A84B]/60" />
              </div>
            </div>

            {/* Nachher */}
            <div className="relative bg-gradient-to-b from-[#18181b] to-[#141416] border border-[#D4A84B]/15 rounded-xl p-6 md:p-8 overflow-hidden">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D4A84B]/50 to-transparent" />
              <p className="text-xs font-mono text-[#D4A84B] tracking-[0.2em] uppercase mb-6">
                Ein AI-natives Team
              </p>
              <div className="space-y-4">
                {afterRows.map((row, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#D4A84B]/8 flex items-center justify-center shrink-0">
                      <row.icon size={16} className="text-[#D4A84B]" />
                    </div>
                    <span className="text-sm text-zinc-300">{row.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-lg md:text-xl text-gray-600 mt-10 font-medium">
          Du hast kein Tools-Problem. Du hast ein{' '}
          <span className="text-[#D4A84B] font-semibold">Backbone</span>-Problem.
        </p>
      </div>
    </section>
  );
}
