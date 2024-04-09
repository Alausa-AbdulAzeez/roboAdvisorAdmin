import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Portfolios from "./pages/Portfolios";
import Transactions from "./pages/Transactions";
import AdminActivityLog from "./pages/AdminActivityLog";
import UserActivityLog from "./pages/UserActivityLog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/activityLog">
          <Route path=":admin" element={<AdminActivityLog />} />
          <Route path=":users" element={<UserActivityLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

