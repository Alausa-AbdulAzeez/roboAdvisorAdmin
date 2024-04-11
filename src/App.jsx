import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Portfolios from "./pages/Portfolios";
import Transactions from "./pages/Transactions";
import AdminActivityLog from "./pages/AdminActivityLog";
import UserActivityLog from "./pages/UserActivityLog";
import GeneralTable from "./components/GeneralTable";
import Portfolio from "./components/Portfolio";
import UserPortfolio from "./components/UserPortfolio";
import GoalPerformance from "./components/GoalPerformance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="users" element={<Users />}>
          <Route index element={<GeneralTable />} />
          <Route path="portfolio" element={<UserPortfolio />} />
          <Route path="goalPerformance" element={<GoalPerformance />} />
        </Route>
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="/activityLog">
          <Route path="admin" element={<AdminActivityLog />} />
          <Route path="users" element={<UserActivityLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
