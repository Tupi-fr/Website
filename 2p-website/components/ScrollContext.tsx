'use client';

import { createContext, useContext } from 'react';

interface ScrollContextType {
  currentSection: number;
}

const ScrollContext = createContext<ScrollContextType>({
  currentSection: 0
});

export const useScrollContext = () => useContext(ScrollContext);
export default ScrollContext;