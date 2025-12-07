export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-gray-light)]">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white">
        <div className="text-xl font-light tracking-wider">
          <span className="font-normal">PROJECT</span>
          <span className="text-[var(--color-gold)]">FUZE</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-[var(--color-gold)] transition-colors">About</a>
          <a href="#" className="hover:text-[var(--color-gold)] transition-colors">1:1 Co-Conspirator</a>
          <a href="#" className="hover:text-[var(--color-gold)] transition-colors">INFUZED</a>
          <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Workshops</a>
          <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Audit</a>
          <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Blog</a>
          <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Giving</a>
        </nav>
        <a
          href="#"
          className="bg-[var(--color-charcoal)] text-white px-4 py-2 rounded text-sm hover:bg-[var(--color-gold)] transition-colors"
        >
          Get started
        </a>
      </header>

      {/* Hero Section */}
      <main className="bg-[var(--color-charcoal)] text-white py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Welcome to your{" "}
            <span className="text-[var(--color-gold)] font-normal">
              Launchpad for extraordinary progress
            </span>{" "}
            in digital products & company-building.
          </h1>
          <p className="text-xl text-gray-300">
            Constantly reinventing business, one challenge at a time.
          </p>
        </div>
      </main>

      {/* Placeholder for more sections */}
      <section className="py-16 px-8 text-center">
        <p className="text-gray-500">
          Design coming soon. This is a placeholder.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-8 text-center text-sm text-gray-500">
        <p>&copy; 2025 Project Fuze</p>
      </footer>
    </div>
  );
}
