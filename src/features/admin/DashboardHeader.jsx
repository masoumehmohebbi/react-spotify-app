import { BiSearch } from "react-icons/bi";
import { CiSettings, CiUser } from "react-icons/ci";
import { FaSpotify } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiScrollDuotone } from "react-icons/pi";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const DashboardHeader = () => {
  const [isShowAdminInfo, setIsShoeAdminInfo] = useState(false);
  const showAdminInfoHandler = () => {
    setIsShoeAdminInfo(!isShowAdminInfo);
  };
  return (
    <div className="px-11 py-3 bg-primary-900 bg-opacity-50 flex items-center justify-center w-full sticky top-0 z-40 ">
      <div className="flex items-center justify-between w-full">
        <Link className="flex items-center gap-1 justify-center" to={"/"}>
          <FaSpotify className="text-4xl text-white" />
          <h1 className="italic font-bold text-2xl text-secondary-0">
            Spotify
          </h1>
        </Link>
        <div className="flex items-center justify-between w-[30%] gap-12 ">
          {/* s */}
          <div className="justify-between px-3 flex bg-primary-600 items-center rounded-[500px] ">
            <input
              className="py-2 text-white px-3 bg-transparent outline-none transition-all w-[90px] focus:w-[190px]"
              type="text"
              placeholder="...جستجو"
            />
            <BiSearch className="text-2xl text-secondary-50" />
          </div>
        </div>

        <div className="text-white  relative w-[15%]">
          <div
            onClick={showAdminInfoHandler}
            className="flex items-center justify-end gap-2 cursor-pointer"
          >
            <MdArrowDropDown className="text-2xl" />
            <h3 className="text-white font-bold">معصومه محبی</h3>
            <div className="w-[50px] h-[50px] bg-primary-400 rounded-full border "></div>
          </div>
          <div
            className={`transition-all ${
              isShowAdminInfo ? "top-12" : "-top-[300px]"
            } absolute bg-secondary-50 text-primary-500  left-0 rounded p-2 flex
                     flex-col gap-4 group-hover:bg-red-200`}
          >
            <div className="flex items-center justify-end gap-2">
              <span>معصومه محبی</span>
              <CiUser />
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span>Mm12345687</span>
              <RiLockPasswordLine />
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span>Admin</span>
              <PiScrollDuotone />
            </div>
          </div>
        </div>
        <div className="text-3xl text-secondary-50 flex items-center gap-6 ">
          <CiSettings className="cursor-pointer transition hover:bg-secondary-300 hover:text-primary-900 duration-500 rounded-full p-1 text-4xl" />
          <IoNotificationsOutline className=" cursor-pointer  transition hover:bg-secondary-300 hover:text-primary-900 duration-500 rounded-full p-1 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
