const CALENDLY_URL = 'https://calendly.com/davidfuesser/30min';

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#3D3D3D] text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          The gap compounds daily.
        </h2>
        <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto">
          30-minute call. We&apos;ll ask how your product org makes decisions and how your team works with AI today. You&apos;ll leave knowing whether your org is ready to go AI-native — or what&apos;s blocking it.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-md font-semibold transition-all duration-200 text-base tracking-wide bg-[#D4A84B] text-white hover:bg-[#b8903b] shadow-sm"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
