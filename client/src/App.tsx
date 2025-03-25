import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import BeginnerMode from "@/components/BeginnerMode";
import AdvancedMode from "@/components/AdvancedMode";
import { useMode } from "@/context/ModeContext";

function App() {
  const { mode } = useMode();

  return (
    <div className="min-h-screen bg-secondary text-white">
      <Navbar />
      <main>
        {mode === 'beginner' ? <BeginnerMode /> : <AdvancedMode />}
      </main>
      <Toaster />
    </div>
  );
}

export default App;
