import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ModeProvider } from "./context/ModeContext";

createRoot(document.getElementById("root")!).render(
  <ModeProvider>
    <App />
  </ModeProvider>
);
