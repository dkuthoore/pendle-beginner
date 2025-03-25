import React, { useState, useEffect } from "react";
import { useMode } from "@/context/ModeContext";
import { useLocation } from "wouter";

export function ModeToggle() {
  const { mode, setMode } = useMode();
  const [, navigate] = useLocation();
  
  // Track if toggle is in advanced mode internally to guarantee UI state
  const [isAdvanced, setIsAdvanced] = useState(mode === 'advanced');

  // Keep the internal state in sync with the context mode
  useEffect(() => {
    setIsAdvanced(mode === 'advanced');
  }, [mode]);

  // Toggle handler - completely isolated logic
  const handleToggle = () => {
    // Toggle the internal state first
    const newAdvanced = !isAdvanced;
    setIsAdvanced(newAdvanced);
    
    // Log for debugging
    console.log(`Toggle clicked: Changing to ${newAdvanced ? 'advanced' : 'beginner'} mode`);
    
    // Update the context mode
    setMode(newAdvanced ? 'advanced' : 'beginner');
    
    // Navigate to the correct route
    if (newAdvanced) {
      navigate('/advanced');
    } else {
      navigate('/');
    }
  };

  // Click on text label handlers
  const handleBeginnerClick = () => {
    if (isAdvanced) {
      setIsAdvanced(false);
      setMode('beginner');
      navigate('/');
    }
  };

  const handleAdvancedClick = () => {
    if (!isAdvanced) {
      setIsAdvanced(true);
      setMode('advanced');
      navigate('/advanced');
    }
  };

  return (
    <div className="flex items-center">
      {/* Beginner label */}
      <span 
        className={`mr-3 text-sm font-medium ${!isAdvanced ? 'text-white' : 'text-gray-300'} cursor-pointer`}
        onClick={handleBeginnerClick}
      >
        Beginner
      </span>
      
      {/* Toggle switch */}
      <button 
        type="button"
        aria-label={`Toggle to ${isAdvanced ? 'beginner' : 'advanced'} mode`}
        onClick={handleToggle}
        className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in focus:outline-none"
      >
        {/* The switch track */}
        <div className={`block h-6 rounded-full cursor-pointer ${isAdvanced ? 'bg-[#00bfa5]' : 'bg-gray-700'}`} />
        
        {/* The switch thumb */}
        <div
          className={`absolute top-0 left-0 block w-6 h-6 rounded-full bg-white border-4 cursor-pointer transform transition-transform duration-200 ease-in ${
            isAdvanced ? 'translate-x-6 border-[#00bfa5]' : 'translate-x-0 border-gray-300'
          }`}
        />
      </button>
      
      {/* Advanced label */}
      <span 
        className={`text-sm font-medium ${isAdvanced ? 'text-white' : 'text-gray-300'} cursor-pointer`}
        onClick={handleAdvancedClick}
      >
        Advanced
      </span>
    </div>
  );
}
