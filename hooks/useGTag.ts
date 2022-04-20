import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gTagPageView } from '@utils/gtag';

const useGTag = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gTagPageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default useGTag;
