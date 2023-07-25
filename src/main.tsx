import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClientsContextProvider } from "./contexts/ClientContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClientsContextProvider>
      <App />
    </ClientsContextProvider>
  </React.StrictMode>
);
