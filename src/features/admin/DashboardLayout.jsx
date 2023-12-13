// import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";
import DashboardHeader from "./DashboardHeader";
import { useState } from "react";
const DashboardLayout = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  return (
    <div dir="ltr">
      <DashboardHeader/>
      <div className={` ${isShowSidebar ? "w-full " : "w-full "}  gap-x-2 `}>
        <div
          className={`transition-all ease-linear duration-300 bg-primary-800 rounded-lg ${
            isShowSidebar ? "w-full xl:w-[80%] " : "w-full xl:w-[94.1%] "
          }`}
        >
          <Outlet />
        </div>
        <div
          className={`hidden xl:block transition-all ease-linear duration-300 fixed right-0 top-0 ${
            isShowSidebar ? "w-[19.3%] " : "w-[5.3%] "
          }`}
        >
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
