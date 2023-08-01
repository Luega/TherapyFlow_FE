import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CustomersPage from "./Pages/CustomersPage";
import NewCustomerPage from "./Pages/NewCustomerPage";
import CustomerPage from "./Pages/CustomerPage";
import NotePage from "./Pages/NotePage";
import NewNotePage from "./Pages/NewNotePage";
import Page404 from "./Pages/Page404";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/new-customer" element={<NewCustomerPage />} />
        <Route path="/customers/:id" element={<CustomerPage />} />
        <Route path="/customers/:id/:note" element={<NotePage />} />
        <Route path="/new-note" element={<NewNotePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
