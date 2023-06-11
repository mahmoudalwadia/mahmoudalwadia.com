'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { gTagPageView } from '@/utils/gtag';

const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    gTagPageView(pathname);
  }, [pathname, searchParams]);

  return null;
};

export default Analytics;
