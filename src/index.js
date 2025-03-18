import React from "react";
import ReactDOM from "react-dom/client"; // Pakai react-dom/client
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Pakai createRoot dengan benar
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
