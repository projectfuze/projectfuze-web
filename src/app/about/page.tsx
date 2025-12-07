"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Briefcase, GraduationCap, Quote, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section dark className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-[#D4A84B] rounded-full opacity-20 blur-2xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#D4A84B]/30">
                  <Image
                    src="/headshot-david.png"
                    alt="David Fuesser"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hi, I&apos;m David.
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                For over <span className="text-[#D4A84B] font-semibold">10 years</span>, I&apos;ve been working across{" "}
                <span className="text-[#D4A84B] font-semibold">4 continents</span> in digital products, innovation, incubation, and company-building.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                In 2017, I founded KADACON, a boutique consulting firm, and later transformed my approach entirely—leaving comfort zones behind to work solo and location-free, focusing on what I do best: identifying and solving problems with ambitious entrepreneurs.
              </p>
              <Button href="/co-conspirator">Work with me</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-[#D4A84B] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-8">
            My Philosophy
          </h2>
          <blockquote className="text-2xl md:text-3xl font-medium text-[#3D3D3D] italic mb-6">
            &ldquo;We&apos;ll never run out of challenges worth overcoming!&rdquo;
          </blockquote>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            I believe in chasing progress relentlessly. Every challenge is an opportunity to learn, grow, and create something meaningful. I don&apos;t want to be right—I want to get it right.
          </p>
          <blockquote className="text-xl font-semibold text-[#D4A84B]">
            &ldquo;I don&apos;t want to be right. I want to get it right!&rdquo;
          </blockquote>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section dark className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            What others say about me
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Feedback from people I&apos;ve had the privilege to work with
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="David is a paragon of modern leadership. His ability to see through complexity and distill actionable insights is unmatched."
            />
            <TestimonialCard
              quote="He gets to the bottom of it. No matter how tangled the problem, David finds the thread that unravels everything."
            />
            <TestimonialCard
              quote="David is a personified initiator. His energy and drive to create progress is contagious and transformative."
            />
          </div>
        </div>
      </Section>

      {/* Background Section */}
      <Section className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] text-center mb-12">
            Background
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#D4A84B]/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#D4A84B]" />
                </div>
                <h3 className="text-xl font-bold text-[#3D3D3D]">Education</h3>
              </div>
              <ul className="space-y-4">
                <li className="border-l-2 border-[#D4A84B] pl-4">
                  <p className="font-semibold text-[#3D3D3D]">International Business Studies, B.A.</p>
                  <p className="text-gray-500 text-sm">Germany, China, USA</p>
                </li>
                <li className="border-l-2 border-[#D4A84B] pl-4">
                  <p className="font-semibold text-[#3D3D3D]">Masters in Management, M.Sc.</p>
                  <p className="text-gray-500 text-sm">HHL Leipzig & ESAN Peru</p>
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#D4A84B]/10 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#D4A84B]" />
                </div>
                <h3 className="text-xl font-bold text-[#3D3D3D]">Experience</h3>
              </div>
              <ul className="space-y-4">
                <li className="border-l-2 border-[#D4A84B] pl-4">
                  <p className="font-semibold text-[#3D3D3D]">KADACON - The Interaction Factory</p>
                  <p className="text-gray-500 text-sm">Founder & Principal</p>
                </li>
                <li className="border-l-2 border-[#D4A84B] pl-4">
                  <p className="font-semibold text-[#3D3D3D]">Innovative Management Partner</p>
                  <p className="text-gray-500 text-sm">Strategy & Innovation</p>
                </li>
                <li className="border-l-2 border-[#D4A84B] pl-4">
                  <p className="font-semibold text-[#3D3D3D]">P3 Group</p>
                  <p className="text-gray-500 text-sm">Consulting</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-[#3D3D3D] to-[#2D2D2D]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to work together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s turn your challenges into opportunities for extraordinary progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/co-conspirator">Explore 1:1 Co-Conspirator</Button>
            <Button href="/contact" variant="outline">Get in touch</Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function TestimonialCard({ quote }: { quote: string }) {
  return (
    <div className="bg-[#4D4D4D] rounded-2xl p-8 relative">
      <Quote className="w-8 h-8 text-[#D4A84B] mb-4 opacity-50" />
      <p className="text-gray-200 leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="absolute bottom-0 left-8 w-12 h-1 bg-[#D4A84B] rounded-full"></div>
    </div>
  );
}
