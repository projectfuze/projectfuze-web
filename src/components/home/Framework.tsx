import { Users, BarChart3, Rocket } from 'lucide-react';
import { Section } from '@/components/ui/Section';

export function Framework() {
  return (
    <Section className="bg-white">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Framework for Success</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Usually we know <strong>what</strong> we want, the challenge is <strong>how</strong> to get there.
          I view every challenge through three interconnected lenses.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto relative">
        {/* Connector Line (Mobile hidden) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 transform -translate-y-1/2"></div>

        {/* People */}
        <div className="text-center p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform">
            <Users size={40} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold mb-3">People</h3>
          <p className="text-gray-500">Organizing themselves...</p>
        </div>

        {/* Structure */}
        <div className="text-center p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative z-10">
          <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600 group-hover:scale-110 transition-transform shadow-lg border-4 border-white">
            <BarChart3 size={48} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold mb-3">Structure</h3>
          <p className="text-gray-500">In an effective system...</p>
        </div>

        {/* Product */}
        <div className="text-center p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
          <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#D4A84B] group-hover:scale-110 transition-transform">
            <Rocket size={40} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold mb-3">Product</h3>
          <p className="text-gray-500">To create value.</p>
        </div>
      </div>
    </Section>
  );
}
