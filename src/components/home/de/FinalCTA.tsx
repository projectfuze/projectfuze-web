const CAL_URL = 'https://cal.com/davidfuesser/ai-readiness-call';

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#3D3D3D] text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          Die Lücke wächst täglich.
        </h2>
        <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto">
          30-Minuten-Call. Wir fragen, wie deine Product-Org Entscheidungen trifft und wie dein Team heute mit AI arbeitet. Du gehst mit der Klarheit raus, ob deine Org bereit ist, AI-native zu werden — oder was sie davon abhält.
        </p>
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-md font-semibold transition-all duration-200 text-base tracking-wide bg-[#D4A84B] text-white hover:bg-[#b8903b] shadow-sm"
        >
          AI-Readiness prüfen
        </a>
      </div>
    </section>
  );
}
