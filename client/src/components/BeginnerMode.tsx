import React from "react";
import { useMode } from "@/context/ModeContext";
import { ClockIcon, DollarSignIcon, TrendingUpIcon, InfoIcon } from "lucide-react";

const BeginnerMode: React.FC = () => {
  const { toggleMode } = useMode();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">
          Welcome to Pendle Finance
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A simplified yield trading platform. Choose an option below to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Earn Fixed Yield Card */}
        <div className="bg-neutral rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
              <ClockIcon className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-white text-center mb-3">
            Earn a Fixed Yield
          </h2>
          <p className="text-gray-400 text-center mb-5">
            Lock in a guaranteed return on your assets until maturity.
          </p>
          <div className="bg-panel p-4 rounded-lg mb-5">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Current Fixed APY</span>
              <span className="text-lg font-semibold text-primary">10.15%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Lock Period</span>
              <span className="text-sm text-white">3 months</span>
            </div>
          </div>
          <button className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
            Get Started
          </button>
        </div>

        {/* Provide Liquidity Card */}
        <div className="bg-neutral rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
              <DollarSignIcon className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-white text-center mb-3">
            Provide Liquidity
          </h2>
          <p className="text-gray-400 text-center mb-5">
            Earn fees by providing liquidity to yield trading markets.
          </p>
          <div className="bg-panel p-4 rounded-lg mb-5">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Average APR</span>
              <span className="text-lg font-semibold text-primary">8.24%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Active Pools</span>
              <span className="text-sm text-white">14</span>
            </div>
          </div>
          <button className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
            Explore Pools
          </button>
        </div>

        {/* Trade Yields Card */}
        <div className="bg-neutral rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
              <TrendingUpIcon className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-white text-center mb-3">
            Trade Yields
          </h2>
          <p className="text-gray-400 text-center mb-5">
            Buy and sell future yields to optimize your returns.
          </p>
          <div className="bg-panel p-4 rounded-lg mb-5">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Markets</span>
              <span className="text-sm text-white">25+ Available</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Trading Volume (24h)</span>
              <span className="text-sm text-white">$2.56M</span>
            </div>
          </div>
          <button className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
            Start Trading
          </button>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-white mb-4">
          Ready for more advanced options?
        </h3>
        <p className="text-gray-400 mb-6">
          Switch to Advanced Mode to access all features
        </p>
        <button 
          className="bg-neutral hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          onClick={() => toggleMode('advanced')}
        >
          Switch to Advanced Mode
        </button>
      </div>
    </div>
  );
};

export default BeginnerMode;
