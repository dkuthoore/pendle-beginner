import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import BeginnerMode from "@/components/BeginnerMode";
import AdvancedMode from "@/components/AdvancedMode";
import { useMode } from "@/context/ModeContext";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

// Import market components
import FixedYieldMarkets from "@/components/markets/FixedYieldMarkets";
import LiquidityPoolMarkets from "@/components/markets/LiquidityPoolMarkets";
import LongYieldMarkets from "@/components/markets/LongYieldMarkets";

function App() {
  const { mode } = useMode();
  const [location] = useLocation();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Log mode changes in App component
  useEffect(() => {
    console.log("App component - current mode:", mode);
  }, [mode]);

  if (!mounted) {
    return null;
  }

  // Determine which component to render based on mode
  const renderMainContent = () => {
    console.log("Rendering main content with mode:", mode);
    
    // Advanced mode always shows the unified market view
    if (mode === 'advanced') {
      console.log("Rendering AdvancedMode");
      return <AdvancedMode />;
    }
    
    // Beginner mode can either show the launcher or a specific market
    if (location === "/fixed-yield") {
      return <FixedYieldMarkets />;
    } else if (location === "/liquidity-pools") {
      return <LiquidityPoolMarkets />;
    } else if (location === "/yield-trading") {
      return <LongYieldMarkets />;
    } else {
      // Home route for beginner mode
      console.log("Rendering BeginnerMode");
      return <BeginnerMode />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050b17] to-[#0a1324] text-white">
      <Navbar />
      <main>
        {renderMainContent()}
      </main>
      <Toaster />
    </div>
  );
}

export default App;
