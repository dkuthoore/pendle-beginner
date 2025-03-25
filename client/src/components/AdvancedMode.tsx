import React, { useState } from "react";
import { marketData } from "@/lib/data";
import { Search, Star, TrendingDown, ArrowUpRight, BookmarkPlus, Activity, CircleMinus, LayoutGrid, ChevronDown } from "lucide-react";

const AdvancedMode: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all-active");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = marketData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="mr-2">
            <LayoutGrid className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">All Markets</h1>
          <ChevronDown className="h-5 w-5 ml-2 text-gray-400" />
        </div>

        <div className="bg-neutral bg-opacity-30 rounded-lg p-4 mb-6">
          <p className="text-sm text-white mb-1">Exit anytime at market price.</p>
          <p className="text-sm text-gray-400 mb-1">
            All yield is streamed to PT until maturity.
          </p>
          <p className="text-sm text-gray-400">
            PT can be redeemed for the underlying asset after maturity.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto">
          <button 
            className={`flex items-center px-4 py-2 bg-neutral rounded-full text-sm ${activeTab === "popular" ? "text-white bg-opacity-70" : "text-gray-400"} hover:bg-opacity-70`}
            onClick={() => setActiveTab("popular")}
          >
            <BookmarkPlus className="h-4 w-4 mr-2 text-primary" />
            Popular
          </button>
          <button 
            className={`flex items-center px-4 py-2 bg-neutral rounded-full text-sm ${activeTab === "new" ? "text-white bg-opacity-70" : "text-gray-400"} hover:bg-opacity-70`}
            onClick={() => setActiveTab("new")}
          >
            <TrendingDown className="h-4 w-4 mr-2 text-gray-400" />
            New
          </button>
          <button 
            className={`flex items-center px-4 py-2 bg-neutral rounded-full text-sm ${activeTab === "favourites" ? "text-white bg-opacity-70" : "text-gray-400"} hover:bg-opacity-70`}
            onClick={() => setActiveTab("favourites")}
          >
            <Star className="h-4 w-4 mr-2 text-gray-400" />
            Favourites
          </button>
          <button 
            className={`flex items-center px-4 py-2 bg-neutral rounded-full text-sm ${activeTab === "all-active" ? "text-white bg-opacity-70" : "text-gray-400"} hover:bg-opacity-70`}
            onClick={() => setActiveTab("all-active")}
          >
            <Activity className="h-4 w-4 mr-2 text-white" />
            All Active
          </button>
          <button 
            className={`flex items-center px-4 py-2 bg-neutral rounded-full text-sm ${activeTab === "inactive" ? "text-white bg-opacity-70" : "text-gray-400"} hover:bg-opacity-70`}
            onClick={() => setActiveTab("inactive")}
          >
            <CircleMinus className="h-4 w-4 mr-2 text-gray-400" />
            Inactive
          </button>
        </div>

        {/* Search Box */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="aUSDC"
            className="w-full md:w-64 px-4 py-2 bg-neutral rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-3 top-2.5">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
        </div>

        {/* Advanced Market Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-secondary rounded-lg overflow-hidden">
            <thead>
              <tr className="text-left text-sm text-gray-400 border-b border-gray-700">
                <th className="px-4 py-4 font-medium">
                  Market
                  <ChevronDown className="h-4 w-4 inline-block ml-1" />
                </th>
                <th className="px-4 py-4 font-medium">
                  Liquidity
                  <ChevronDown className="h-4 w-4 inline-block ml-1" />
                </th>
                <th className="px-4 py-4 font-medium">
                  Underlying APY
                  <ChevronDown className="h-4 w-4 inline-block ml-1" />
                </th>
                <th className="px-4 py-4 font-medium">
                  Implied APY
                  <ChevronDown className="h-4 w-4 inline-block ml-1" />
                </th>
                <th className="px-4 py-4 font-medium">
                  Long Yield APY
                  <ChevronDown className="h-4 w-4 inline-block ml-1" />
                </th>
                <th className="px-4 py-4 font-medium">
                  Fixed APY
                  <ChevronDown className="h-4 w-4 inline-block ml-1" />
                </th>
                <th className="px-4 py-4 font-medium">LP APY</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-700 hover:bg-neutral ${
                    index === filteredData.length - 1 ? "" : "border-b"
                  }`}
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 mr-4 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-medium text-white">{item.name}</div>
                        <div className="text-xs text-gray-400">{item.date}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-medium text-white">
                    {item.liquidity}
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-center font-medium text-white">
                      {item.underlyingAPY}
                    </div>
                    <div className="text-center text-xs text-gray-400">$1</div>
                  </td>
                  <td className="px-4 py-4 font-medium text-white text-center">
                    {item.impliedAPY}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-between bg-neutral rounded-md px-3 py-2">
                      <span className="text-sm font-medium">YT</span>
                      <div>
                        <div className="text-red-500 font-medium">
                          {item.longYieldAPY}
                        </div>
                        <div className="text-xs text-gray-400">
                          {item.longYieldPrice}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-between bg-neutral rounded-md px-3 py-2">
                      <span className="text-sm font-medium">PT</span>
                      <div>
                        <div className="text-white font-medium">
                          {item.fixedAPY}
                        </div>
                        <div className="text-xs text-gray-400">
                          {item.fixedPrice}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">LP</span>
                      <div className="flex items-center text-primary font-medium">
                        {item.lpAPY}
                        <ArrowUpRight className="h-4 w-4 ml-1 text-primary" />
                      </div>
                    </div>
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

export default AdvancedMode;
