'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const topics = [
  'Why your VP of Product hire isn\'t working (and what to do about it)',
  'The specific patterns that separate scaling orgs from stuck ones',
  'Real findings from embedded diagnostics — anonymized, specific',
  'How to build operating systems that survive contact with reality',
  'When to restructure vs. when to fix process vs. when to hire',
];

export default function InfuzedPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

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
            {status === 'success' ? (
              <p className="text-[#D4A84B] font-medium py-3">You&apos;re in. Check your inbox.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 border border-gray-600 bg-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4A84B] focus:border-transparent"
                />
                <Button variant="primary" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-3">Something went wrong. Try again.</p>
            )}
            {status !== 'success' && (
              <p className="text-xs text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
            )}
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
