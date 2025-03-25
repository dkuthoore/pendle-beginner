import React, { useEffect } from "react";
import { useMode, Mode } from "@/context/ModeContext";
import { useLocation } from "wouter";

export function ModeToggle() {
  const { mode, setMode } = useMode();
  const [location, navigate] = useLocation();

  // If we're on the advanced page, make sure mode is set to advanced
  useEffect(() => {
    if (location === '/advanced' && mode !== 'advanced') {
      setMode('advanced');
    }
  }, [location, mode, setMode]);

  // Function to toggle between modes and navigate to the appropriate route
  const toggleMode = () => {
    const newMode = mode === 'beginner' ? 'advanced' : 'beginner';
    console.log(`Toggling from ${mode} to ${newMode} mode`);
    
    setMode(newMode);
    
    // Navigate to the appropriate route based on the new mode
    if (newMode === 'advanced') {
      navigate('/advanced');
    } else {
      navigate('/'); // Navigate to home for beginner mode
    }
  };

  // Function to specifically switch to a mode
  const switchMode = (newMode: Mode) => {
    if (mode === newMode) return; // Don't do anything if already in this mode
    
    console.log(`Switching to ${newMode} mode`);
    setMode(newMode);
    
    if (newMode === 'advanced') {
      navigate('/advanced');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex items-center">
      {/* Beginner label */}
      <span 
        className={`mr-3 text-sm font-medium ${mode === 'beginner' ? 'text-white' : 'text-gray-300'} cursor-pointer`}
        onClick={() => switchMode('beginner')}
      >
        Beginner
      </span>
      
      {/* Toggle switch */}
      <button 
        aria-label={`Switch to ${mode === 'beginner' ? 'advanced' : 'beginner'} mode`}
        onClick={toggleMode}
        className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in focus:outline-none focus:ring-2 focus:ring-[#00bfa5]"
      >
        <div
          className={`absolute block w-6 h-6 rounded-full bg-white border-4 cursor-pointer transition-transform duration-200 ease-in ${
            mode === 'advanced' ? 'translate-x-6 border-[#00bfa5]' : 'translate-x-0 border-gray-300'
          }`}
        />
        <div
          className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
            mode === 'advanced' ? 'bg-[#00bfa5]' : 'bg-gray-700'
          }`}
        />
      </button>
      
      {/* Advanced label */}
      <span 
        className={`text-sm font-medium ${mode === 'advanced' ? 'text-white' : 'text-gray-300'} cursor-pointer`}
        onClick={() => switchMode('advanced')}
      >
        Advanced
      </span>
    </div>
  );
}
