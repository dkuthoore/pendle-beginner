import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Mode = 'beginner' | 'advanced';

interface ModeContextType {
  mode: Mode;
  toggleMode: (value?: Mode) => void;
}

// Initialize with default values instead of undefined
const ModeContext = createContext<ModeContextType>({
  mode: 'beginner',
  toggleMode: () => {},
});

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('beginner');

  // Log when mode changes
  useEffect(() => {
    console.log("Mode changed to:", mode);
  }, [mode]);

  const toggleMode = (value?: Mode) => {
    console.log("toggleMode called with:", value);
    
    if (value) {
      console.log("Setting mode directly to:", value);
      setMode(value);
    } else {
      console.log("Toggling from current mode:", mode);
      setMode(prevMode => {
        const newMode = prevMode === 'beginner' ? 'advanced' : 'beginner';
        console.log("New mode will be:", newMode);
        return newMode;
      });
    }
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
