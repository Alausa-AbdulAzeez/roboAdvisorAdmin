import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import GeneralTable from "../components/GeneralTable";

const Users = () => {
  // DUMMY DATA FOR TABLE HEADERS
  const tableHeaders = [
    "Username",
    "User ID",
    "Email Address",
    "Last Login",
    "Registration Date",
    "Status",
    "more",
  ];

  // TABLE TITLE
  const title = "User List";

  // Demo data
  // Example items, to simulate fetching from another resources.
  const items = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    ,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    ,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
  ];

  return (
    <div className="h-[100vh] flex bg-backgroundColor ">
      <Sidebar />
      <div className="flex-1 h-full overflow-auto relative">
        <Topbar title={"Users"} />
        <div className="w-full  min-h-full h-auto mb-[50px] bg-backgroundColor p-[302px] max-2xl:p-[25.6px] flex flex-col gap-[32px] max-2xl:gap-[25.6px] max-[300px]:zoomMax300 max-[400px]:zoomMax400 max-sm:zoomMaxSm max-md:zoomMaxMd max-[850px]:zoomMax850 max-xl:zoomMaxXl ">
          <GeneralTable
            tableHeaders={tableHeaders}
            title={title}
            items={items}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
