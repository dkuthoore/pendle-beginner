import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define our two mode options
export type Mode = 'beginner' | 'advanced';

interface ModeContextType {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}

// Create the context with default values to avoid undefined checks
const defaultContextValue: ModeContextType = {
  mode: 'beginner',
  setMode: () => {} // This will be overridden by the actual implementation
};

const ModeContext = createContext<ModeContextType>(defaultContextValue);

// Simple key for localStorage
const STORAGE_KEY = 'pendle-mode';

export function ModeProvider({ children }: { children: ReactNode }) {
  // Initialize state with the value from localStorage or default to 'beginner'
  const [mode, setMode] = useState<Mode>(() => {
    try {
      const storedMode = localStorage.getItem(STORAGE_KEY);
      return (storedMode === 'advanced' ? 'advanced' : 'beginner') as Mode;
    } catch {
      return 'beginner';
    }
  });

  // Debug the current mode on mount
  useEffect(() => {
    console.log("Initial mode:", mode);
  }, []);

  // Save to localStorage whenever mode changes
  useEffect(() => {
    try {
      console.log("⚙️ Mode changed to:", mode);
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (error) {
      console.error("Failed to save mode to localStorage:", error);
    }
  }, [mode]);

  // Create the context value with the actual setState function
  const contextValue: ModeContextType = {
    mode,
    setMode
  };

  // Provide the context values to children
  return (
    <ModeContext.Provider value={contextValue}>
      {children}
    </ModeContext.Provider>
  );
}

// Custom hook to use the mode context
export function useMode() {
  return useContext(ModeContext);
}
