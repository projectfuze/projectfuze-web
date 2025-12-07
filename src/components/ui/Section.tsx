import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className = "", dark = false, id = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-[#3D3D3D] text-white' : 'bg-[#F5F5F5] text-[#3D3D3D]'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
