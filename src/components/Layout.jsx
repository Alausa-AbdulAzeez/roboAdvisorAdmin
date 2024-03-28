import React from "react";

const Layout = () => {
  return (
    <div className="h-[100vh] flex bg-backgroundColor ">
      <Sidebar />
      <div className="flex-1 h-full overflow-auto relative">
        <Topbar />
      </div>
    </div>
  );
};

export default Layout;
