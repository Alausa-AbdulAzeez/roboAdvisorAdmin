import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Users = () => {
  return (
    <div className="h-[100vh] flex bg-backgroundColor ">
      <Sidebar />
      <div className="flex-1 h-full overflow-auto relative">
        <Topbar title={"Users"} />
      </div>
    </div>
  );
};

export default Users;
