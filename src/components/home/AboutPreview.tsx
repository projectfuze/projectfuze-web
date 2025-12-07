import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export function AboutPreview() {
  return (
    <Section className="bg-white overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold mb-6">Hi, I&apos;m David.</h2>
          <h3 className="text-xl text-[#D4A84B] font-medium mb-6 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-[#D4A84B]"></span>
            Innovation Partner & Co-Conspirator
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            I&apos;ve spent 10+ years across 4 continents building digital products and companies. From founding KADACON to advising startups, my mission has always been to instigate change.
          </p>
          <p className="text-gray-800 font-medium mb-8 italic text-lg border-l-4 border-gray-200 pl-4">
            &ldquo;I don&apos;t just want to be right—I want to get it right.&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link href="/about">
              <Button variant="secondary">Read My Story</Button>
            </Link>
            <div className="flex flex-col gap-1">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400"></div>
                <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">+40</div>
              </div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Trusted by global leaders</span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative px-4 md:px-0">
          <div className="aspect-[4/5] rounded-2xl bg-gray-200 overflow-hidden relative shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/headshot-david.png"
              alt="David Fuesser"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D4A84B] rounded-full z-[-1] opacity-20 blur-2xl"></div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#3D3D3D] rounded-full z-[-1] opacity-10 blur-2xl"></div>
        </div>
      </div>
    </Section>
  );
}
