import { BiSearch } from "react-icons/bi";
import { CiSettings, CiUser } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiScrollDuotone } from "react-icons/pi";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

const DashboardHeader = () => {
  const [isShowAdminInfo, setIsShoeAdminInfo] = useState(false);
  const showAdminInfoHandler = () => {
    setIsShoeAdminInfo(!isShowAdminInfo);
  };
  return (
    <div className="px-11 py-3 bg-primary-900 bg-opacity-50 flex items-center justify-center w-full sticky top-0 z-40 ">
      <div className="flex items-center justify-between w-full">
        {/* <Link className="flex items-center gap-1 justify-center" to={"/"}>
          <FaSpotify className="text-4xl text-white" />
          <h1 className="italic font-bold text-2xl text-secondary-0">
            Spotify
          </h1>
        </Link> */}

        <div className="text-white  relative w-fit">
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
          <div
            onClick={showAdminInfoHandler}
            className="flex items-center justify-end gap-2 cursor-pointer"
          >
            <div className="w-[50px] h-[50px] bg-primary-400 rounded-full border "></div>
            <h3 className="text-secondary-0 font-bold">نیلوفر پلوانه</h3>
            <MdArrowDropDown className="text-2xl text-secondary-0" />
          </div>
        </div>
        <div className="text-3xl text-secondary-50 flex items-center gap-6 ">
          <div className="flex items-center justify-between gap-12 ">
            <div className="justify-between px-3 flex bg-primary-600 items-center rounded-[500px] ">
              <BiSearch className="text-2xl text-secondary-50" />
              <input
                className="py-2 text-right text-secondary-0 text-base px-3 bg-transparent outline-none duration-500 ease-in-out transition-all w-[90px] focus:w-[190px]"
                type="text"
                placeholder="...جستجو"
              />
            </div>
          </div>
          <CiSettings className="cursor-pointer transition hover:bg-secondary-300 hover:text-primary-900 duration-500 rounded-full p-1 text-4xl" />
          <IoNotificationsOutline className=" cursor-pointer  transition hover:bg-secondary-300 hover:text-primary-900 duration-500 rounded-full p-1 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
