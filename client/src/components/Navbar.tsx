import React, { useState } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { LayersIcon, MenuIcon, GraduationCapIcon, TrophyIcon, CheckCircle, Circle } from "lucide-react";
import { useLocation } from "wouter";
import { useMode } from "@/context/ModeContext";

// Quest interface
interface Quest {
  id: string;
  name: string;
  completed: boolean;
}

const Navbar: React.FC = () => {
  const [location, setLocation] = useLocation();
  const { mode } = useMode();
  const [questSidebarOpen, setQuestSidebarOpen] = useState(false);
  
  // Example quest data
  const quests: Quest[] = [
    { id: "quest1", name: "Buy PT - Earn Fixed Yield", completed: false },
    { id: "quest2", name: "LP - Provide Liquidity", completed: false },
    { id: "quest3", name: "Buy YT and hold to maturity - Trade Yield", completed: false },
    { id: "quest4", name: "Trade between YTs and PTs - Pendle Expert", completed: false }
  ];

  const toggleQuestSidebar = () => {
    setQuestSidebarOpen(!questSidebarOpen);
  };
  
  return (
    <>
      <nav className="bg-[#0d1424] border-b border-[#1a2b46]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Logo - always visible */}
              <div className="flex-shrink-0 cursor-pointer" onClick={() => setLocation('/')}>
                <div className="h-8 w-8 bg-[#00bfa5] rounded-full flex items-center justify-center">
                  <LayersIcon className="h-5 w-5 text-white" />
                </div>
              </div>
              
              {/* Education button for Beginner mode */}
              {mode === 'beginner' && (
                <div className="ml-6 flex">
                  <a 
                    href="#" 
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#151f35] rounded hover:bg-[#1c2e4e] transition-colors duration-200 mr-2"
                  >
                    <GraduationCapIcon className="h-4 w-4 mr-2" />
                    Education
                  </a>
                  
                  {/* Quests button */}
                  <button 
                    onClick={toggleQuestSidebar}
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#151f35] rounded hover:bg-[#1c2e4e] transition-colors duration-200"
                  >
                    <TrophyIcon className="h-4 w-4 mr-2" />
                    Quests
                  </button>
                </div>
              )}
              
              {/* Advanced mode navigation */}
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

            {/* Mode Toggle - always visible */}
            <div className="flex items-center mr-8">
              <ModeToggle />
            </div>

            {/* Wallet button - only visible in advanced mode */}
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

      {/* Quest Sidebar */}
      {questSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={() => setQuestSidebarOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div className="relative w-full max-w-xs bg-[#0a1529] h-full p-6 overflow-y-auto border-l border-[#1a2b46] ml-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white flex items-center">
                <TrophyIcon className="h-5 w-5 mr-2 text-[#00bfa5]" />
                Quests
              </h2>
              <button 
                onClick={() => setQuestSidebarOpen(false)}
                className="p-1 text-gray-400 hover:text-white"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              {quests.map(quest => (
                <div key={quest.id} className="bg-[#151f35] p-4 rounded-lg border border-[#1a2b46]">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-[#00bfa5]">
                      {quest.completed ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <Circle className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-medium">{quest.name}</h3>
                      <p className="text-gray-400 text-xs mt-1">
                        {quest.completed ? "Completed" : "In progress"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
