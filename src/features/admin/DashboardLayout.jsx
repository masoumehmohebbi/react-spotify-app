import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";
const DashboardLayout = () => {
  return (
    <div dir="ltr">
      <DashboardHeader />
      <div className="w-full flex justify-between ">
        <Outlet />
        <DashboardSideBar />
      </div>
    </div>
  );
};

export default DashboardLayout;
