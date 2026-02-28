import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'INFUZED Newsletter — Project Fuze',
  description: 'Weekly insights on product org dysfunction, scaling challenges, and what actually works. For Series A/B SaaS founders.',
};

const topics = [
  'Why your VP of Product hire isn\'t working (and what to do about it)',
  'The specific patterns that separate scaling orgs from stuck ones',
  'Real findings from embedded diagnostics — anonymized, specific',
  'How to build operating systems that survive contact with reality',
  'When to restructure vs. when to fix process vs. when to hire',
];

export default function InfuzedPage() {
  return (
    <>
      <div className="bg-[#3D3D3D] text-white pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono text-[#D4A84B] tracking-widest uppercase mb-6">
            Newsletter
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">INFUZED</h1>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Weekly signal on product org dysfunction. No frameworks. No fluff. Just patterns I see over and over — and what to do about them.
          </p>
          <p className="text-gray-500 mb-10">
            Every Wednesday. 3-minute read.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-gray-600 bg-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4A84B] focus:border-transparent"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
            <p className="text-xs text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-[#3D3D3D] mb-6">What to expect</h2>
          <ul className="space-y-4">
            {topics.map((topic, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <span className="text-[#D4A84B] font-bold mt-0.5 shrink-0">-</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
