import { Section } from '@/components/ui/Section';

export const metadata = {
  title: 'Datenschutzerklärung - Project Fuze',
  description: 'Datenschutzerklärung für die Website und Dienste von Project Fuze.',
};

export default function DatenschutzPage() {
  return (
    <Section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[#3D3D3D] mb-2">Datenschutzerklärung</h1>
        <p className="text-gray-500 text-sm mb-8">Stand: März 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">1. Verantwortlicher</h2>
            <p className="text-gray-600 mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-gray-600 mb-4">
              David Fuesser<br />
              Project Fuze (Einzelunternehmen)<br />
              Lerchenstr. 60<br />
              03048 Cottbus, Deutschland<br />
              E-Mail:{' '}
              <a href="mailto:david@projectfuze.com" className="text-[#D4A84B] hover:underline">
                david@projectfuze.com
              </a>
            </p>
            <p className="text-gray-600">
              Diese Datenschutzerklärung gilt für die Website projectfuze.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>

            <h3 className="text-lg font-semibold text-[#3D3D3D] mt-6 mb-3">Newsletter-Anmeldung</h3>
            <p className="text-gray-600 mb-4">
              Bei der Anmeldung zu unserem Newsletter erheben wir Ihre E-Mail-Adresse. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit durch Abmeldung vom Newsletter widerrufen.
            </p>

            <h3 className="text-lg font-semibold text-[#3D3D3D] mt-6 mb-3">Terminbuchung</h3>
            <p className="text-gray-600 mb-4">
              Bei einer Terminbuchung werden Sie zu Cal.com weitergeleitet, einem externen Dienst. Es werden keine Buchungsdaten auf unserer Website erhoben oder verarbeitet. Es gilt die Datenschutzerklärung von Cal.com.
            </p>

            <h3 className="text-lg font-semibold text-[#3D3D3D] mt-6 mb-3">Website-Analyse</h3>
            <p className="text-gray-600 mb-4">
              Wir verwenden Fathom Analytics, einen datenschutzfreundlichen, cookielosen Analysedienst. Fathom erhebt keine personenbezogenen Daten, verwendet keine Cookies und verfolgt keine einzelnen Besucher. Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h3 className="text-lg font-semibold text-[#3D3D3D] mt-6 mb-3">Server-Logfiles</h3>
            <p className="text-gray-600">
              Unser Hosting-Anbieter Vercel erhebt automatisch Server-Logfiles (IP-Adresse, User Agent, Zeitstempel, aufgerufene URLs). Dies ist für den Betrieb und die Sicherheit der Website erforderlich. Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">3. Auftragsverarbeiter</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-600 border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-[#3D3D3D]">Dienst</th>
                    <th className="text-left py-2 pr-4 font-semibold text-[#3D3D3D]">Zweck</th>
                    <th className="text-left py-2 pr-4 font-semibold text-[#3D3D3D]">Daten</th>
                    <th className="text-left py-2 font-semibold text-[#3D3D3D]">Rechtsgrundlage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Fathom Analytics</td>
                    <td className="py-2 pr-4">Website-Analyse</td>
                    <td className="py-2 pr-4">Anonymisierte Seitenaufrufe (keine Cookies, keine personenbezogenen Daten)</td>
                    <td className="py-2">Berechtigtes Interesse</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Kit (ConvertKit)</td>
                    <td className="py-2 pr-4">E-Mail-Newsletter</td>
                    <td className="py-2 pr-4">E-Mail-Adresse</td>
                    <td className="py-2">Einwilligung</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Cal.com</td>
                    <td className="py-2 pr-4">Terminbuchung</td>
                    <td className="py-2 pr-4">Nur externe Weiterleitung &mdash; keine Datenverarbeitung auf unserer Website</td>
                    <td className="py-2">Entfällt</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Vercel</td>
                    <td className="py-2 pr-4">Hosting &amp; CDN</td>
                    <td className="py-2 pr-4">Server-Logfiles (IP, User Agent, Zeitstempel)</td>
                    <td className="py-2">Berechtigtes Interesse</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">4. Cookies</h2>
            <p className="text-gray-600">
              Diese Website verwendet keine Cookies. Fathom Analytics arbeitet konstruktionsbedingt ohne Cookies. Ein Consent-Banner ist nicht erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">5. Datenübermittlung in Drittländer</h2>
            <p className="text-gray-600 mb-4">
              Kit (ConvertKit) und Vercel können Daten in den USA verarbeiten. Diese Übermittlungen werden durch Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO abgesichert.
            </p>
            <p className="text-gray-600">
              Fathom Analytics übermittelt keine personenbezogenen Daten, da keine erhoben werden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">6. Ihre Rechte (Art. 15–21 DSGVO)</h2>
            <p className="text-gray-600 mb-4">Sie haben das Recht auf:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Auskunft über die bei uns gespeicherten personenbezogenen Daten (Art. 15)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16)</li>
              <li>Löschung Ihrer Daten (Art. 17)</li>
              <li>Einschränkung der Verarbeitung (Art. 18)</li>
              <li>Datenübertragbarkeit (Art. 20)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21)</li>
              <li>Widerruf Ihrer Einwilligung jederzeit, ohne dass die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung berührt wird</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Sie haben zudem das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:<br />
              Die Landesbeauftragte für den Datenschutz und für das Recht auf Akteneinsicht Brandenburg<br />
              <a href="https://www.lda.brandenburg.de" className="text-[#D4A84B] hover:underline" target="_blank" rel="noopener noreferrer">
                www.lda.brandenburg.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">7. Speicherdauer</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Newsletter-Daten: bis zur Abmeldung</li>
              <li>Server-Logfiles: gemäß Vercel-Aufbewahrungsrichtlinie (in der Regel 30 Tage)</li>
              <li>Analysedaten: Fathom speichert ausschließlich aggregierte, nicht personenbezogene Daten</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">8. Datensicherheit</h2>
            <p className="text-gray-600">
              Wir verwenden TLS-Verschlüsselung für alle Datenübertragungen, setzen Zugriffskontrollen ein und folgen dem Grundsatz der Datensparsamkeit zum Schutz Ihrer Informationen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">9. Änderungen dieser Datenschutzerklärung</h2>
            <p className="text-gray-600">
              Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit aktualisiertem Datum veröffentlicht.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">10. Kontakt</h2>
            <p className="text-gray-600">
              Bei Fragen zu dieser Datenschutzerklärung oder zur Ausübung Ihrer Rechte kontaktieren Sie uns unter:{' '}
              <a href="mailto:david@projectfuze.com" className="text-[#D4A84B] hover:underline">
                david@projectfuze.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
