import { Section } from '@/components/ui/Section';

export const metadata = {
  title: 'Privacy Policy - Project Fuze',
  description: 'Privacy policy for Project Fuze website and services.',
};

export default function PrivacyPage() {
  return (
    <Section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[#3D3D3D] mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">1. Controller</h2>
            <p className="text-gray-600 mb-4">
              The controller responsible for data processing on this website is:
            </p>
            <p className="text-gray-600 mb-4">
              David Fuesser<br />
              Project Fuze (Einzelunternehmen / sole proprietorship)<br />
              Lerchenstr. 60<br />
              03048 Cottbus, Germany<br />
              Email:{' '}
              <a href="mailto:david@projectfuze.com" className="text-[#D4A84B] hover:underline">
                david@projectfuze.com
              </a>
            </p>
            <p className="text-gray-600">
              This privacy policy applies to the website projectfuze.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">2. What We Collect &amp; Legal Basis</h2>

            <h3 className="text-lg font-semibold text-[#3D3D3D] mt-6 mb-3">Newsletter subscription</h3>
            <p className="text-gray-600 mb-4">
              When you subscribe to our newsletter, we collect your email address. This data is processed based on your consent (Art. 6(1)(a) GDPR). You can withdraw your consent at any time by unsubscribing.
            </p>

            <h3 className="text-lg font-semibold text-[#3D3D3D] mt-6 mb-3">Booking a call</h3>
            <p className="text-gray-600 mb-4">
              When you book a call, you are redirected to Cal.com, an external service. No booking data is collected or processed on our website. Cal.com&apos;s own privacy policy applies.
            </p>

            <h3 className="text-lg font-semibold text-[#3D3D3D] mt-6 mb-3">Website analytics</h3>
            <p className="text-gray-600 mb-4">
              We use Fathom Analytics, a privacy-focused, cookieless analytics service. Fathom does not collect personal data, does not use cookies, and does not track individual visitors. We use this to understand general usage patterns. Legal basis: legitimate interest (Art. 6(1)(f) GDPR).
            </p>

            <h3 className="text-lg font-semibold text-[#3D3D3D] mt-6 mb-3">Server logs</h3>
            <p className="text-gray-600">
              Our hosting provider Vercel automatically collects server logs (IP address, user agent, timestamps, requested URLs). This is necessary for the operation and security of the website. Legal basis: legitimate interest (Art. 6(1)(f) GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">3. Third-Party Processors</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-600 border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-[#3D3D3D]">Service</th>
                    <th className="text-left py-2 pr-4 font-semibold text-[#3D3D3D]">Purpose</th>
                    <th className="text-left py-2 pr-4 font-semibold text-[#3D3D3D]">Data</th>
                    <th className="text-left py-2 font-semibold text-[#3D3D3D]">Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Fathom Analytics</td>
                    <td className="py-2 pr-4">Website analytics</td>
                    <td className="py-2 pr-4">Anonymized page views (no cookies, no personal data)</td>
                    <td className="py-2">Legitimate interest</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Kit (ConvertKit)</td>
                    <td className="py-2 pr-4">Email newsletter</td>
                    <td className="py-2 pr-4">Email address</td>
                    <td className="py-2">Consent</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Cal.com</td>
                    <td className="py-2 pr-4">Booking</td>
                    <td className="py-2 pr-4">External redirect only &mdash; no data processed on our site</td>
                    <td className="py-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Vercel</td>
                    <td className="py-2 pr-4">Hosting &amp; CDN</td>
                    <td className="py-2 pr-4">Server logs (IP, user agent, timestamps)</td>
                    <td className="py-2">Legitimate interest</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">4. Cookies</h2>
            <p className="text-gray-600">
              This website does not use cookies. Fathom Analytics is cookieless by design. No consent banner is required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">5. International Data Transfers</h2>
            <p className="text-gray-600 mb-4">
              Kit (ConvertKit) and Vercel may process data in the United States. These transfers are safeguarded by Standard Contractual Clauses (SCCs) in accordance with Art. 46(2)(c) GDPR.
            </p>
            <p className="text-gray-600">
              Fathom Analytics does not transfer personal data, as it does not collect any.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">6. Your Rights (GDPR Art. 15–21)</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access the personal data we hold about you (Art. 15)</li>
              <li>Rectify inaccurate data (Art. 16)</li>
              <li>Request deletion of your data (Art. 17)</li>
              <li>Restrict processing (Art. 18)</li>
              <li>Data portability (Art. 20)</li>
              <li>Object to processing (Art. 21)</li>
              <li>Withdraw consent at any time, without affecting the lawfulness of prior processing</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You also have the right to lodge a complaint with a supervisory authority. The competent authority for our location is:<br />
              Die Landesbeauftragte für den Datenschutz und für das Recht auf Akteneinsicht Brandenburg<br />
              <a href="https://www.lda.brandenburg.de" className="text-[#D4A84B] hover:underline" target="_blank" rel="noopener noreferrer">
                www.lda.brandenburg.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">7. Data Retention</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Newsletter data: retained until you unsubscribe</li>
              <li>Server logs: per Vercel&apos;s retention policy (typically 30 days)</li>
              <li>Analytics: Fathom retains aggregated, non-personal data only</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">8. Data Security</h2>
            <p className="text-gray-600">
              We use TLS encryption for all data transmission, apply access controls, and follow a principle of minimal data collection to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">10. Contact</h2>
            <p className="text-gray-600">
              For questions about this privacy policy or to exercise your rights, contact us at:{' '}
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
