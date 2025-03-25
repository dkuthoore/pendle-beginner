import React from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { LayersIcon, MenuIcon } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-secondary border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <LayersIcon className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white">
                  Education
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white bg-neutral bg-opacity-50"
                >
                  Markets
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
                >
                  Pools
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
                >
                  Points Markets
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
                >
                  vePENDLE
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium bg-primary text-white"
                >
                  PendleSwap
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center mr-8">
            <ModeToggle />
          </div>

          <div className="flex items-center">
            <button className="bg-neutral p-2 rounded-md text-white text-sm">
              0x003...0f57
            </button>
            <button className="ml-4 p-1">
              <MenuIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
