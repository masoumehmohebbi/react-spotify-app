// import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";
import { useState } from "react";
const DashboardLayout = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  return (
    <div dir="ltr">
      <div
        className={`grid ${
          isShowSidebar ? "grid-cols-5" : "grid-cols-12"
        }  gap-x-2 `}
      >
        <div
          className={`bg-primary-800 rounded-lg ${
            isShowSidebar ? "col-span-4" : " col-span-11"
          }`}
        >
          <Outlet />
        </div>
        <div className={` ${isShowSidebar ? "col-span-1" : "col-span-1"}`}>
          <DashboardSideBar
            isShowSidebar={isShowSidebar}
            setIsShowSidebar={setIsShowSidebar}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
