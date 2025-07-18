import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./main.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/P5-OC-LD-Web-App-Location-Immo-Kasa">
      <App />
    </BrowserRouter>
  </StrictMode>
);
