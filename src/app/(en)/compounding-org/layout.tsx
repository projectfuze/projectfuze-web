import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Compounding Org — Project Fuze',
  description: 'A maturity model for organizations going AI-native. Where is your team — and what\'s blocking the next stage?',
  robots: 'noindex',
};

export default function CompoundingOrgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
