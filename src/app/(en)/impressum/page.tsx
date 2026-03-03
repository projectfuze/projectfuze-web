import { Section } from '@/components/ui/Section';

export const metadata = {
  title: 'Legal Notice (Impressum) - Project Fuze',
  description: 'Legal information and contact details for Project Fuze.',
};

export default function ImpressumPage() {
  return (
    <Section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[#3D3D3D] mb-8">Legal Notice (Impressum)</h1>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">Information pursuant to § 5 TMG</h2>
          <p className="text-gray-600 mb-4">
            David Fuesser<br />
            Project Fuze (Einzelunternehmen / sole proprietorship)<br />
            Lerchenstr. 60<br />
            03048 Cottbus<br />
            Germany
          </p>

          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">Contact</h2>
          <p className="text-gray-600 mb-4">
            Email:{' '}
            <a href="mailto:david@projectfuze.com" className="text-[#D4A84B] hover:underline">
              david@projectfuze.com
            </a>
          </p>

          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">VAT ID — § 27a UStG</h2>
          <p className="text-gray-600 mb-4">
            VAT identification number pursuant to § 27a of the German Value Added Tax Act:<br />
            DE351313205
          </p>

          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">Responsible for content — § 18 Abs. 2 MStV</h2>
          <p className="text-gray-600 mb-4">
            David Fuesser<br />
            Lerchenstr. 60<br />
            03048 Cottbus<br />
            Germany
          </p>

          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">EU Online Dispute Resolution</h2>
          <p className="text-gray-600 mb-4">
            The European Commission provides a platform for online dispute resolution (OS):{' '}
            <a href="https://ec.europa.eu/consumers/odr" className="text-[#D4A84B] hover:underline" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p className="text-gray-600 mb-4">
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>

          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">Liability for Content</h2>
          <p className="text-gray-600 mb-4">
            As a service provider, we are responsible for our own content on these pages pursuant to § 7 (1) TMG (German Telemedia Act). However, pursuant to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information, or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of such violations, we will remove this content immediately.
          </p>

          <h2 className="text-xl font-bold text-[#3D3D3D] mt-8 mb-4">Liability for Links</h2>
          <p className="text-gray-600 mb-4">
            Our website contains links to external third-party websites over whose content we have no control. We therefore cannot accept any liability for this external content. The respective provider or operator is always responsible for the content of linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. Permanent monitoring of the content of linked pages is not reasonable without concrete evidence of a violation. Upon becoming aware of legal violations, we will remove such links immediately.
          </p>
        </div>
      </div>
    </Section>
  );
}
