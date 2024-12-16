'use client';

import { useEffect } from 'react';
import useAOS from '@/hooks/useAOS'; // Import your custom AOS hook

interface AOSProviderProps {
  children: React.ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  const aos = useAOS();

  useEffect(() => {
    aos.refresh(); // Refresh AOS on initial load

    const handleRouteChange = () => {
      aos.refresh(); // Refresh AOS on route change
    };

    // Add event listener for route changes
    window.addEventListener('routeChangeComplete', handleRouteChange);

    return () => {
      // Clean up event listener
      window.removeEventListener('routeChangeComplete', handleRouteChange);
    };
  }, [aos]);

  return <>{children}</>;
}
