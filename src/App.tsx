import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Clients from "./Pages/Clients";
import Page404 from "./Pages/Page404";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
