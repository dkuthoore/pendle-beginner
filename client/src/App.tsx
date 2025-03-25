import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import BeginnerMode from "@/components/BeginnerMode";
import AdvancedMode from "@/components/AdvancedMode";
import { useMode } from "@/context/ModeContext";
import { Route, Switch, useLocation } from "wouter";
import { useState, useEffect } from "react";

// Import market components
import FixedYieldMarkets from "@/components/markets/FixedYieldMarkets";
import LiquidityPoolMarkets from "@/components/markets/LiquidityPoolMarkets";
import LongYieldMarkets from "@/components/markets/LongYieldMarkets";

function App() {
  const { mode, setMode } = useMode();
  const [location] = useLocation();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Synchronize URL location with mode
  useEffect(() => {
    if (location === '/advanced' && mode !== 'advanced') {
      setMode('advanced');
    } else if (location === '/' && mode !== 'beginner') {
      setMode('beginner');
    }
  }, [location, mode, setMode]);

  // Log mode changes in App component
  useEffect(() => {
    console.log("App component - current mode:", mode);
  }, [mode]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050b17] to-[#0a1324] text-white">
      <Navbar />
      <main>
        <Switch>
          <Route path="/advanced">
            <AdvancedMode />
          </Route>
          <Route path="/fixed-yield">
            <FixedYieldMarkets />
          </Route>
          <Route path="/liquidity-pools">
            <LiquidityPoolMarkets />
          </Route>
          <Route path="/yield-trading">
            <LongYieldMarkets />
          </Route>
          <Route>
            {/* Default route - always show beginner mode */}
            <BeginnerMode />
          </Route>
        </Switch>
      </main>
      <Toaster />
    </div>
  );
}

export default App;
