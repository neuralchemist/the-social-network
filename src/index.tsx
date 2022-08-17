import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// custom context
import { ModeProvider } from "./context/ThemeModeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>
);
