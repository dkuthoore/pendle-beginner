import React from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { LayersIcon, MenuIcon } from "lucide-react";
import { useLocation } from "wouter";
import { useMode } from "@/context/ModeContext";

const Navbar: React.FC = () => {
  const [location, setLocation] = useLocation();
  const { mode } = useMode();
  
  return (
    <nav className="bg-[#0d1424] border-b border-[#1a2b46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => setLocation('/')}>
              <div className="h-8 w-8 bg-[#00bfa5] rounded-full flex items-center justify-center">
                <LayersIcon className="h-5 w-5 text-white" />
              </div>
            </div>
            {mode === 'advanced' && (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a 
                    href="#" 
                    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Education
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-white bg-[#151f35] rounded"
                  >
                    Markets
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Pools
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Points Markets
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    vePENDLE
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium bg-[#00bfa5] text-white rounded"
                  >
                    PendleSwap
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center mr-8">
            <ModeToggle />
          </div>

          {mode === 'advanced' && (
            <div className="flex items-center">
              <button className="bg-[#151f35] py-2 px-3 rounded text-white text-sm border border-[#2c3e61]">
                0x003...0f57
              </button>
              <button className="ml-4 p-1">
                <MenuIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
