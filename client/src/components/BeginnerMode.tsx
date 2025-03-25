import React from "react";
import { useMode } from "@/context/ModeContext";
import { ClockIcon, DollarSignIcon, TrendingUpIcon } from "lucide-react";
import { useLocation } from "wouter";

const BeginnerMode: React.FC = () => {
  const { toggleMode } = useMode();
  const [, setLocation] = useLocation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Pendle Finance
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A simplified yield trading platform. Choose an option below to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Earn Fixed Yield Card */}
        <div className="bg-[#0a1529] rounded-xl p-8 shadow-lg border border-[#1a2b46] hover:border-[#2c3e61] transition-all duration-300 cursor-pointer">
          <div className="flex justify-center mb-8">
            <div className="h-20 w-20 bg-[#00bfa5] bg-opacity-10 rounded-full flex items-center justify-center">
              <ClockIcon className="h-10 w-10 text-[#00bfa5]" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-white text-center mb-4">
            Earn a Fixed Yield
          </h2>
          <p className="text-gray-300 text-center mb-6">
            Lock in a guaranteed return on your assets until maturity.
          </p>
          <div className="bg-[#151f35] p-5 rounded-lg mb-6">
            <div className="flex justify-between mb-3">
              <span className="text-sm text-gray-300">Current Fixed APY</span>
              <span className="text-xl font-semibold text-[#00bfa5]">10.15%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-300">Lock Period</span>
              <span className="text-sm text-white">3 months</span>
            </div>
          </div>
          <button 
            onClick={() => setLocation('/fixed-yield')}
            className="w-full bg-[#00bfa5] hover:bg-opacity-90 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300 text-sm uppercase tracking-wider"
          >
            Get Started
          </button>
        </div>

        {/* Provide Liquidity Card */}
        <div className="bg-[#0a1529] rounded-xl p-8 shadow-lg border border-[#1a2b46] hover:border-[#2c3e61] transition-all duration-300 cursor-pointer">
          <div className="flex justify-center mb-8">
            <div className="h-20 w-20 bg-[#00bfa5] bg-opacity-10 rounded-full flex items-center justify-center">
              <DollarSignIcon className="h-10 w-10 text-[#00bfa5]" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-white text-center mb-4">
            Provide Liquidity
          </h2>
          <p className="text-gray-300 text-center mb-6">
            Earn fees by providing liquidity to yield trading markets.
          </p>
          <div className="bg-[#151f35] p-5 rounded-lg mb-6">
            <div className="flex justify-between mb-3">
              <span className="text-sm text-gray-300">Average APR</span>
              <span className="text-xl font-semibold text-[#00bfa5]">8.24%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-300">Active Pools</span>
              <span className="text-sm text-white">14</span>
            </div>
          </div>
          <button 
            onClick={() => setLocation('/liquidity-pools')}
            className="w-full bg-[#00bfa5] hover:bg-opacity-90 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300 text-sm uppercase tracking-wider"
          >
            Explore Pools
          </button>
        </div>

        {/* Trade Yields Card */}
        <div className="bg-[#0a1529] rounded-xl p-8 shadow-lg border border-[#1a2b46] hover:border-[#2c3e61] transition-all duration-300 cursor-pointer">
          <div className="flex justify-center mb-8">
            <div className="h-20 w-20 bg-[#00bfa5] bg-opacity-10 rounded-full flex items-center justify-center">
              <TrendingUpIcon className="h-10 w-10 text-[#00bfa5]" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-white text-center mb-4">
            Trade Yields
          </h2>
          <p className="text-gray-300 text-center mb-6">
            Buy and sell future yields to optimize your returns.
          </p>
          <div className="bg-[#151f35] p-5 rounded-lg mb-6">
            <div className="flex justify-between mb-3">
              <span className="text-sm text-gray-300">Markets</span>
              <span className="text-sm text-white">25+ Available</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-300">Trading Volume (24h)</span>
              <span className="text-sm text-white">$2.56M</span>
            </div>
          </div>
          <button 
            onClick={() => setLocation('/yield-trading')}
            className="w-full bg-[#00bfa5] hover:bg-opacity-90 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300 text-sm uppercase tracking-wider"
          >
            Start Trading
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeginnerMode;
