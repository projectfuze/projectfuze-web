'use client';

import { useEffect } from 'react';
import { load, trackPageview } from 'fathom-client';
import { usePathname, useSearchParams } from 'next/navigation';

export function FathomProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    load('OCOMMUII', { auto: false });
  }, []);

  useEffect(() => {
    trackPageview();
  }, [pathname, searchParams]);

  return null;
}
