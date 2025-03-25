import React from "react";
import { ArrowLeftIcon, InfoIcon } from "lucide-react";
import { useLocation } from "wouter";
import { marketData } from "../../lib/data";

const LiquidityPoolMarkets: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => setLocation('/')}
        className="flex items-center text-gray-300 hover:text-white mb-8"
      >
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Back to Home
      </button>

      <div className="bg-[#0a1529] rounded-xl p-6 border border-[#1a2b46] mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Liquidity Pool Markets</h1>
            <p className="text-gray-300 flex items-center">
              Earn fees by providing liquidity to yield trading markets
              <InfoIcon className="h-4 w-4 ml-2 text-gray-400" />
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="bg-[#151f35] p-3 rounded-lg inline-block">
              <div className="flex items-center">
                <span className="text-sm text-gray-300 mr-3">Average LP APY:</span>
                <span className="text-lg font-semibold text-[#00bfa5]">7.40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a1529] rounded-xl border border-[#1a2b46] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#1a2b46]">
          <div className="flex justify-between items-center">
            <h2 className="text-xl text-white font-semibold">Available Pools</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search pools..."
                className="bg-[#151f35] text-white border border-[#2c3e61] rounded-lg py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-[#00bfa5]"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 text-sm border-b border-[#1a2b46]">
                <th className="px-6 py-4 font-medium">Pool</th>
                <th className="px-6 py-4 font-medium">Maturity</th>
                <th className="px-6 py-4 font-medium">Liquidity</th>
                <th className="px-6 py-4 font-medium">Volume (24h)</th>
                <th className="px-6 py-4 font-medium text-[#00bfa5]">LP APY</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((market, index) => (
                <tr key={index} className="border-b border-[#1a2b46] hover:bg-[#0c1a33]">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
                        {market.icon}
                      </div>
                      <span className="font-medium text-white">{market.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{market.date}</td>
                  <td className="px-6 py-4 text-gray-300">{market.liquidity}</td>
                  <td className="px-6 py-4 text-gray-300">$156,458</td>
                  <td className="px-6 py-4 text-[#00bfa5] font-semibold">{market.lpAPY}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="bg-[#00bfa5] hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                      Add Liquidity
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LiquidityPoolMarkets;