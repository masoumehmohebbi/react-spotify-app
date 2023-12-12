import { CiSettings } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import "tippy.js/dist/tippy.css";
import { HamburgerMenu } from "../../ui/Navbar";
import { useState } from "react";
import { DashboardSearchBox } from "./DashboardSearchBox";
import { AdminProfile } from "./AdminProfile";

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-2 xl:px-11 py-3 bg-primary-900 bg-opacity-50 flex flex-col items-center justify-center w-full sticky top-0 z-40 ">
      <div dir="rtl" className="flex items-center justify-between w-full">
        <HamburgerMenu setOpen={setOpen} open={open} size="xl">
          <AdminProfile />
        </HamburgerMenu>
        <div
          className={`r gap-x-6 fixed top-0 bg-primary-900 text-secondary-0 xl:bg-transparent h-screen xl:h-auto xl:col-span-5 flex xl:ml-1 flex-col items-start xl:items-center px-5 xl:px-0 xl:flex-row pt-20 xl:pt-0 gap-y-6 xl:gap-y-0 xl:static xl:z-auto z-[-1] left-0 w-full xl:w-fit transition-all duration-500 ease-in ${
            open ? "right-0" : "rtl:right-[-1000px] ltr:left-[-1000px]"
          }`}
        >
          <div
            dir="ltr"
            className="text-3xl text-secondary-50 flex flex-col xl:flex-row pt-12 xl:pt-0 items-center gap-6 "
          >
            <div className="hidden xl:flex items-center justify-between gap-12 ">
              <DashboardSearchBox />
            </div>
            <CiSettings className="cursor-pointer transition hover:bg-secondary-300 hover:text-primary-900 duration-500 rounded-full p-1 text-4xl" />
            <IoNotificationsOutline className=" cursor-pointer  transition hover:bg-secondary-300 hover:text-primary-900 duration-500 rounded-full p-1 text-4xl" />
          </div>
        </div>
        <div className="hidden xl:block">
          <AdminProfile />
        </div>
      </div>

      <div className="flex xl:hidden w-11/12 items-center justify-between mt-5">
        <DashboardSearchBox />
      </div>
    </div>
  );
};

export default DashboardHeader;
