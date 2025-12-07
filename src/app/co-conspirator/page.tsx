import { Rocket, BarChart3, Globe, Check, Zap, Star } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: '1:1 Co-Conspirator - Project Fuze',
  description: 'Advisory with a twist. A subscription to defeat what seems impossible. Your progress-making subscription for startup founders, product leaders, and corporate innovators.',
};

function HeroSection() {
  return (
    <div className="bg-[#3D3D3D] text-white pt-32 pb-20 px-4 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#D4A84B] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-900 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-[#D4A84B]/20 border border-[#D4A84B]/50 text-[#D4A84B] font-bold tracking-widest text-xs uppercase mb-6">
          Flagship Service
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">1:1 Co-Conspirator</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Advisory with a twist. A subscription to defeat what seems impossible.
          <span className="block text-white font-semibold mt-2">It&apos;s lonely at the top—let&apos;s change that.</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary">Start 7-Day Free Trial</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Book Discovery Call
          </Button>
        </div>
      </div>
    </div>
  );
}

function PersonasSection() {
  const personas = [
    {
      icon: Rocket,
      title: 'Startup Founder',
      description: '"Building a plane while flying it?" Get the architectural support you need without slowing down execution.',
      color: 'blue',
    },
    {
      icon: BarChart3,
      title: 'Product Leader',
      description: '"Hit a growth plateau?" Unlock new perspectives on user engagement and retention strategies.',
      color: 'amber',
    },
    {
      icon: Globe,
      title: 'Corporate Innovator',
      description: '"Navigating a field of tension?" Bridge the gap between corporate structure and agile speed.',
      color: 'purple',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    amber: 'bg-amber-100 text-amber-600',
    purple: 'bg-purple-100 text-purple-600',
  };

  return (
    <Section>
      <div className="grid md:grid-cols-3 gap-8 -mt-24 relative z-20">
        {personas.map((persona) => (
          <div
            key={persona.title}
            className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-transform"
          >
            <div className={`w-12 h-12 ${colorClasses[persona.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-6`}>
              <persona.icon size={24} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-[#3D3D3D]">{persona.title}</h3>
            <p className="text-gray-600 leading-relaxed">{persona.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorksSection() {
  return (
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How the subscription works</h2>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 space-y-10">
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-[#D4A84B] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Subscribe & Submit</h4>
                  <p className="text-gray-600">Access your private board and drop in your challenges anytime.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-[#D4A84B] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Receive Custom Advice</h4>
                  <p className="text-gray-600">Within 24 hours, get actionable feedback, Loom videos, or frameworks.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-[#D4A84B] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Weekly Progress Call</h4>
                  <p className="text-gray-600">A 60-minute deep dive to ensure we are moving the needle on your biggest goals.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 md:p-12 border-l border-gray-100 flex flex-col justify-center items-center text-center">
              <div className="mb-2 text-[#D4A84B]">
                <Star size={24} fill="currentColor" />
              </div>
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-[#3D3D3D]">$2,450</span>
                <span className="text-gray-500 block mt-2 text-sm font-medium uppercase tracking-wide">per month</span>
              </div>
              <ul className="text-left text-sm text-gray-600 space-y-3 mb-8 w-full max-w-xs mx-auto">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" /> Cancel anytime
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" /> Unlimited asynchronous requests
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" /> 10% discount on referrals
                </li>
              </ul>
              <Button variant="primary" className="w-full mb-4 max-w-xs">Get Started</Button>
              <div className="flex justify-center items-center gap-2 text-xs text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                <Zap size={12} className="text-[#D4A84B] fill-current" />
                <span className="font-bold">Includes 7-Day Free Trial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      title: 'Unlimited requests',
      description: 'Submit as many challenges as you want or need.',
    },
    {
      title: 'Tailored to you',
      description: 'Your challenge, your advice. No "one-size-fits-all".',
    },
    {
      title: 'Fixed monthly rate',
      description: 'No surprises! No need to manage budget.',
    },
    {
      title: 'Digestible & actionable',
      description: 'Distilled on one page, diagram, or similar.',
    },
    {
      title: '24 hour delivery',
      description: 'Advice when you need it, Monday to Friday.',
    },
    {
      title: 'Weekly Progress Call',
      description: '60-minute deep dive on your biggest challenges.',
    },
  ];

  return (
    <Section dark>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscription benefits</h2>
        <p className="text-gray-400 text-lg">Perks so good you don&apos;t need to think twice. Seriously.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="bg-[#2A2A2A] p-6 rounded-xl border border-gray-700">
            <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
            <p className="text-gray-400 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: 'For whom is the 1:1 Co-Conspirator ideal?',
      answer: 'Startup founders, product leaders, and corporate innovators who need a trusted partner to navigate complex challenges and accelerate their progress.',
    },
    {
      question: 'How many clients do you work with?',
      answer: 'I limit my practice to ensure quality. Currently accepting 5 new clients to maintain the high-touch, personalized experience.',
    },
    {
      question: 'Is this trapping me into a forever-subscription?',
      answer: 'Absolutely not. Cancel anytime with no questions asked. Most clients stay because they see real value, not because they are locked in.',
    },
    {
      question: 'How does the 7-Day Free Trial work?',
      answer: 'Start with full access to the service. If it is not the right fit within 7 days, simply cancel—no charge, no hassle.',
    },
    {
      question: 'What is the weekly progress call?',
      answer: 'A 60-minute video call where we deep dive into your most pressing challenge. You submit the topic 24 hours in advance so I can prepare thoughtfully.',
    },
    {
      question: 'Do you do in-person meetings?',
      answer: 'The service is designed to be remote-first for maximum flexibility. However, for clients in certain locations, in-person sessions can be arranged.',
    },
  ];

  return (
    <Section className="bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">FAQs</h2>
          <p className="text-gray-600">Answering some questions you might have</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-gray-50 rounded-xl border border-gray-200">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-[#3D3D3D] hover:text-[#D4A84B] transition-colors">
                {faq.question}
                <span className="ml-4 text-[#D4A84B] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section dark className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to turn your responsibility into opportunity?
      </h2>
      <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
        Join founders and leaders who are already making extraordinary progress.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button variant="primary" className="text-lg px-8 py-4">Start 7-Day Free Trial</Button>
        <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-4">
          Book Discovery Call
        </Button>
      </div>
    </Section>
  );
}

export default function CoConspiratorPage() {
  return (
    <>
      <HeroSection />
      <PersonasSection />
      <HowItWorksSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
