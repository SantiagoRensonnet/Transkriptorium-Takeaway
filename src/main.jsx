import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { TranscriptsProvider } from "./contexts/Transcripts.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TranscriptsProvider>
        <App />
      </TranscriptsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
