import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Fuze — Pre-Call Deck',
  robots: 'noindex',
};

export default function DeckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
