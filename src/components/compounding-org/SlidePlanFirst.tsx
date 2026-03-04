import { ChevronRight } from 'lucide-react';

const functions = [
  {
    fn: 'Product',
    before: 'AI drafts specs, humans rewrite',
    after: 'Structured intent drives agent drafts',
    key: 'Decision architecture makes intent parseable',
  },
  {
    fn: 'Design',
    before: 'AI generates, humans redo',
    after: 'Design system constrains, agents produce',
    key: 'Components and rules replace pixel-pushing',
  },
  {
    fn: 'Engineering',
    before: 'Agents edit, humans review every line',
    after: 'Plans drive execution, review PRs not lines',
    key: 'Quality gates verify, trust ladder delegates',
  },
];

export function SlidePlanFirst() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
          Stage 3 — The Target
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
          Plan first. Review output.
        </h2>

        <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-xl">
          Humans define <em className="text-white/80">what</em> and <em className="text-white/80">why</em>. Agents handle <em className="text-white/80">how</em>. Review moves to artifact level because quality gates are built in.
        </p>

        <div className="space-y-4">
          {functions.map((f) => (
            <div
              key={f.fn}
              className="border border-white/10 rounded-xl p-5 md:p-6 bg-white/[0.02]"
            >
              <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-4">
                {f.fn}
              </p>

              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                <span className="text-sm text-gray-500 line-through flex-1">
                  {f.before}
                </span>
                <ChevronRight size={16} className="text-[#D4A84B]/40 hidden md:block" />
                <span className="text-sm text-white font-medium flex-1">
                  {f.after}
                </span>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                Key enabler: {f.key}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
