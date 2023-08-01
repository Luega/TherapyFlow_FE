import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CustomerContextProvider } from "./contexts/CustomerContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomerContextProvider>
      <App />
    </CustomerContextProvider>
  </React.StrictMode>
);
