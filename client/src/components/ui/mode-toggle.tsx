import React from "react";
import { useMode } from "@/context/ModeContext";

export function ModeToggle() {
  const { mode, toggleMode } = useMode();

  // Function to specifically set to beginner mode
  const setBeginner = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleMode('beginner');
  };

  // Function to specifically set to advanced mode
  const setAdvanced = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleMode('advanced');
  };

  // Handle toggle click
  const handleToggle = () => {
    console.log("Toggle clicked, current mode:", mode);
    toggleMode();
  };

  return (
    <div className="flex items-center">
      {/* Beginner label - clickable to switch to beginner mode */}
      <span 
        className={`mr-3 text-sm font-medium ${mode === 'beginner' ? 'text-white' : 'text-gray-300'} cursor-pointer`}
        onClick={setBeginner}
      >
        Beginner
      </span>
      
      {/* Toggle switch */}
      <button 
        aria-label={`Switch to ${mode === 'beginner' ? 'advanced' : 'beginner'} mode`}
        onClick={handleToggle}
        className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in"
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
      
      {/* Advanced label - clickable to switch to advanced mode */}
      <span 
        className={`text-sm font-medium ${mode === 'advanced' ? 'text-white' : 'text-gray-300'} cursor-pointer`}
        onClick={setAdvanced}
      >
        Advanced
      </span>
    </div>
  );
}
