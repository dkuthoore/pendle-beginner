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
            {/* Default route - show beginner or advanced mode based on context */}
            {mode === 'beginner' ? <BeginnerMode /> : <AdvancedMode />}
          </Route>
        </Switch>
      </main>
      <Toaster />
    </div>
  );
}

export default App;
