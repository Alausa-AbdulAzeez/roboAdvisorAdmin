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
import Login from "./pages/Login";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
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
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
