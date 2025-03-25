import React from "react";
import { useMode } from "@/context/ModeContext";

export function ModeToggle() {
  const { mode, toggleMode } = useMode();

  return (
    <div className="flex items-center">
      <span className="mr-3 text-sm font-medium text-gray-300">Beginner</span>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          id="modeToggle"
          className="absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in"
          checked={mode === 'advanced'}
          onChange={() => toggleMode()}
          style={{
            transform: mode === 'advanced' ? 'translateX(100%)' : 'translateX(0)',
            borderColor: mode === 'advanced' ? 'rgb(0, 191, 165)' : ''
          }}
        />
        <label
          htmlFor="modeToggle"
          className="block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"
          style={{
            backgroundColor: mode === 'advanced' ? 'rgb(0, 191, 165)' : ''
          }}
        ></label>
      </div>
      <span className="text-sm font-medium text-gray-300">Advanced</span>
    </div>
  );
}
