'use client';

import React, { createContext, useEffect, ReactNode } from 'react';

const ViewportContext = createContext(null);

const ViewportProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set initial value
    setVh();

    // Add listener for resize events
    window.addEventListener('resize', setVh);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <ViewportContext.Provider value={null}>{children}</ViewportContext.Provider>
  );
};

export default ViewportProvider;
