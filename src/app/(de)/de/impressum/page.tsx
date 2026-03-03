import { Section } from '@/components/ui/Section';

export const metadata = {
  title: 'Impressum - Project Fuze',
  description: 'Impressum und Kontaktdaten von Project Fuze.',
};

export default function ImpressumPage() {
  return (
    <Section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[#3D3D3D] mb-8">Impressum</h1>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-600 mb-4">
            David Fuesser<br />
            Project Fuze (Einzelunternehmen)<br />
            Lerchenstr. 60<br />
            03048 Cottbus<br />
            Deutschland
          </p>

          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">Kontakt</h2>
          <p className="text-gray-600 mb-4">
            E-Mail:{' '}
            <a href="mailto:david@projectfuze.com" className="text-[#D4A84B] hover:underline">
              david@projectfuze.com
            </a>
          </p>

          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">Umsatzsteuer-ID — § 27a UStG</h2>
          <p className="text-gray-600 mb-4">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            DE351313205
          </p>

          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p className="text-gray-600 mb-4">
            David Fuesser<br />
            Lerchenstr. 60<br />
            03048 Cottbus<br />
            Deutschland
          </p>

          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">EU-Streitschlichtung</h2>
          <p className="text-gray-600 mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr" className="text-[#D4A84B] hover:underline" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p className="text-gray-600 mb-4">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">Haftung für Inhalte</h2>
          <p className="text-gray-600 mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">Haftung für Links</h2>
          <p className="text-gray-600 mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </div>
      </div>
    </Section>
  );
}
