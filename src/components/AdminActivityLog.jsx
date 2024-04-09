import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TransactionsTable from "../components/TransactionsTable";

const AdminActivityLog = () => {
  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // End of function to toggle sidebar

  // DUMMY DATA FOR TABLE HEADERS
  const tableHeaders = [
    "Transaction ID",
    "User ID",
    "Type",
    "Amount",
    "Date",
    "Status",
    "Method",
    "more",
  ];

  const transactions = [
    {
      transactionId: 1,
      userId: 3456,
      type: "Deposit",
      amount: "50,000.00",
      date: "08/02/2024",
      status: "Pending",
      method: "Bank Transfer",
    },
    {
      transactionId: 2,
      userId: 6789,
      type: "Withdrawal",
      amount: "25,000.00",
      date: "08/03/2024",
      status: "Success",
      method: "Debit Card",
    },
    {
      transactionId: 3,
      userId: 1234,
      type: "Deposit",
      amount: "75,000.00",
      date: "08/04/2024",
      status: "Failed",
      method: "Bank Transfer",
    },
    {
      transactionId: 4,
      userId: 4567,
      type: "Deposit",
      amount: "40,000.00",
      date: "08/05/2024",
      status: "Pending",
      method: "Debit Card",
    },
    {
      transactionId: 5,
      userId: 7890,
      type: "Withdrawal",
      amount: "30,000.00",
      date: "08/06/2024",
      status: "Success",
      method: "Bank Transfer",
    },
    {
      transactionId: 6,
      userId: 2345,
      type: "Deposit",
      amount: "60,000.00",
      date: "08/07/2024",
      status: "Pending",
      method: "Debit Card",
    },
    {
      transactionId: 7,
      userId: 5678,
      type: "Withdrawal",
      amount: "35,000.00",
      date: "08/08/2024",
      status: "Failed",
      method: "Bank Transfer",
    },
    {
      transactionId: 1,
      userId: 3456,
      type: "Deposit",
      amount: "50,000.00",
      date: "08/02/2024",
      status: "Pending",
      method: "Bank Transfer",
    },
    {
      transactionId: 2,
      userId: 6789,
      type: "Withdrawal",
      amount: "25,000.00",
      date: "08/03/2024",
      status: "Success",
      method: "Debit Card",
    },
    {
      transactionId: 3,
      userId: 1234,
      type: "Deposit",
      amount: "75,000.00",
      date: "08/04/2024",
      status: "Failed",
      method: "Bank Transfer",
    },
    {
      transactionId: 4,
      userId: 4567,
      type: "Deposit",
      amount: "40,000.00",
      date: "08/05/2024",
      status: "Pending",
      method: "Debit Card",
    },
    {
      transactionId: 5,
      userId: 7890,
      type: "Withdrawal",
      amount: "30,000.00",
      date: "08/06/2024",
      status: "Success",
      method: "Bank Transfer",
    },
    {
      transactionId: 6,
      userId: 2345,
      type: "Deposit",
      amount: "60,000.00",
      date: "08/07/2024",
      status: "Pending",
      method: "Debit Card",
    },
    {
      transactionId: 7,
      userId: 5678,
      type: "Withdrawal",
      amount: "35,000.00",
      date: "08/08/2024",
      status: "Failed",
      method: "Bank Transfer",
    },
    {
      transactionId: 1,
      userId: 3456,
      type: "Deposit",
      amount: "50,000.00",
      date: "08/02/2024",
      status: "Pending",
      method: "Bank Transfer",
    },
    {
      transactionId: 2,
      userId: 6789,
      type: "Withdrawal",
      amount: "25,000.00",
      date: "08/03/2024",
      status: "Success",
      method: "Debit Card",
    },
    {
      transactionId: 3,
      userId: 1234,
      type: "Deposit",
      amount: "75,000.00",
      date: "08/04/2024",
      status: "Failed",
      method: "Bank Transfer",
    },
    {
      transactionId: 4,
      userId: 4567,
      type: "Deposit",
      amount: "40,000.00",
      date: "08/05/2024",
      status: "Pending",
      method: "Debit Card",
    },
    {
      transactionId: 5,
      userId: 7890,
      type: "Withdrawal",
      amount: "30,000.00",
      date: "08/06/2024",
      status: "Success",
      method: "Bank Transfer",
    },
    {
      transactionId: 6,
      userId: 2345,
      type: "Deposit",
      amount: "60,000.00",
      date: "08/07/2024",
      status: "Pending",
      method: "Debit Card",
    },
    {
      transactionId: 7,
      userId: 5678,
      type: "Withdrawal",
      amount: "35,000.00",
      date: "08/08/2024",
      status: "Failed",
      method: "Bank Transfer",
    },
    {
      transactionId: 1,
      userId: 3456,
      type: "Deposit",
      amount: "50,000.00",
      date: "08/02/2024",
      status: "Pending",
      method: "Bank Transfer",
    },
    {
      transactionId: 2,
      userId: 6789,
      type: "Withdrawal",
      amount: "25,000.00",
      date: "08/03/2024",
      status: "Success",
      method: "Debit Card",
    },
    {
      transactionId: 3,
      userId: 1234,
      type: "Deposit",
      amount: "75,000.00",
      date: "08/04/2024",
      status: "Failed",
      method: "Bank Transfer",
    },
    {
      transactionId: 4,
      userId: 4567,
      type: "Deposit",
      amount: "40,000.00",
      date: "08/05/2024",
      status: "Pending",
      method: "Debit Card",
    },
    {
      transactionId: 5,
      userId: 7890,
      type: "Withdrawal",
      amount: "30,000.00",
      date: "08/06/2024",
      status: "Success",
      method: "Bank Transfer",
    },
    {
      transactionId: 6,
      userId: 2345,
      type: "Deposit",
      amount: "60,000.00",
      date: "08/07/2024",
      status: "Pending",
      method: "Debit Card",
    },
    {
      transactionId: 7,
      userId: 5678,
      type: "Withdrawal",
      amount: "35,000.00",
      date: "08/08/2024",
      status: "Failed",
      method: "Bank Transfer",
    },
    {
      transactionId: 1,
      userId: 3456,
      type: "Deposit",
      amount: "50,000.00",
      date: "08/02/2024",
      status: "Pending",
      method: "Bank Transfer",
    },
    {
      transactionId: 2,
      userId: 6789,
      type: "Withdrawal",
      amount: "25,000.00",
      date: "08/03/2024",
      status: "Success",
      method: "Debit Card",
    },
    {
      transactionId: 3,
      userId: 1234,
      type: "Deposit",
      amount: "75,000.00",
      date: "08/04/2024",
      status: "Failed",
      method: "Bank Transfer",
    },
    {
      transactionId: 4,
      userId: 4567,
      type: "Deposit",
      amount: "40,000.00",
      date: "08/05/2024",
      status: "Pending",
      method: "Debit Card",
    },
    {
      transactionId: 5,
      userId: 7890,
      type: "Withdrawal",
      amount: "30,000.00",
      date: "08/06/2024",
      status: "Success",
      method: "Bank Transfer",
    },
    {
      transactionId: 6,
      userId: 2345,
      type: "Deposit",
      amount: "60,000.00",
      date: "08/07/2024",
      status: "Pending",
      method: "Debit Card",
    },
    {
      transactionId: 7,
      userId: 5678,
      type: "Withdrawal",
      amount: "35,000.00",
      date: "08/08/2024",
      status: "Failed",
      method: "Bank Transfer",
    },
    {
      transactionId: 1,
      userId: 3456,
      type: "Deposit",
      amount: "50,000.00",
      date: "08/02/2024",
      status: "Pending",
      method: "Bank Transfer",
    },
    {
      transactionId: 2,
      userId: 6789,
      type: "Withdrawal",
      amount: "25,000.00",
      date: "08/03/2024",
      status: "Success",
      method: "Debit Card",
    },
    {
      transactionId: 3,
      userId: 1234,
      type: "Deposit",
      amount: "75,000.00",
      date: "08/04/2024",
      status: "Failed",
      method: "Bank Transfer",
    },
    {
      transactionId: 4,
      userId: 4567,
      type: "Deposit",
      amount: "40,000.00",
      date: "08/05/2024",
      status: "Pending",
      method: "Debit Card",
    },
    {
      transactionId: 5,
      userId: 7890,
      type: "Withdrawal",
      amount: "30,000.00",
      date: "08/06/2024",
      status: "Success",
      method: "Bank Transfer",
    },
    {
      transactionId: 6,
      userId: 2345,
      type: "Deposit",
      amount: "60,000.00",
      date: "08/07/2024",
      status: "Pending",
      method: "Debit Card",
    },
    {
      transactionId: 7,
      userId: 5678,
      type: "Withdrawal",
      amount: "35,000.00",
      date: "08/08/2024",
      status: "Failed",
      method: "Bank Transfer",
    },
  ];

  // TABLE TITLE
  const title = "Transactions List";

  // Demo data
  // Example items, to simulate fetching from another resources.

  return (
    <div className="h-[100vh] flex bg-backgroundColor ">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex-1 h-full overflow-auto relative">
        <Topbar title={"Transactions"} toggleSidebar={toggleSidebar} />
        <div className="w-full  min-h-full h-auto mb-[50px] bg-backgroundColor flex flex-col gap-[32px] max-2xl:gap-[25.6px] max-[300px]:zoomMax300 max-[400px]:zoomMax400 max-md:zoomMaxSm max-md:zoomMaxMd max-[850px]:zoomMax850 max-xl:zoomMaxXl ">
          <TransactionsTable
            tableHeaders={tableHeaders}
            title={title}
            items={transactions}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminActivityLog;
