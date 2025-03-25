import React, { createContext, useContext, useState, ReactNode } from 'react';

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

  const toggleMode = (value?: Mode) => {
    if (value) {
      setMode(value);
    } else {
      setMode(prevMode => prevMode === 'beginner' ? 'advanced' : 'beginner');
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
  return context;
}
