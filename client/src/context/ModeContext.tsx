import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define our two mode options
type Mode = 'beginner' | 'advanced';

interface ModeContextType {
  mode: Mode;
  toggleMode: (value?: Mode) => void;
}

// Create the context with default values
const ModeContext = createContext<ModeContextType>({
  mode: 'beginner',
  toggleMode: () => {},
});

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

  // Save to localStorage whenever mode changes
  useEffect(() => {
    try {
      console.log("⚙️ Mode changed to:", mode);
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (error) {
      console.error("Failed to save mode to localStorage:", error);
    }
  }, [mode]);

  // Toggle function to switch between modes
  const toggleMode = (value?: Mode) => {
    console.log("⚡ toggleMode called with:", value);
    
    if (value) {
      // Set to a specific mode if provided
      console.log("Setting mode directly to:", value);
      setMode(value);
    } else {
      // Toggle between the two modes
      console.log("Toggling from current mode:", mode);
      const newMode = mode === 'beginner' ? 'advanced' : 'beginner';
      console.log("New mode will be:", newMode);
      setMode(newMode);
    }
  };

  // Provide the context values to children
  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

// Custom hook to use the mode context
export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
