import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FaRegComments, FaSpotify } from "react-icons/fa";
import { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineMusicNote,
  HiOutlineUsers,
} from "react-icons/hi";
import { PiFoldersDuotone, PiMicrophoneStageDuotone } from "react-icons/pi";
import { IoIosLogOut, IoIosArrowForward } from "react-icons/io";

const DashboardSideBar = ({ isShowSidebar, setIsShowSidebar }) => {
  const [activeLink, setActiveLink] = useState(1);

  const isActiveLinkHandler = (id) => {
    setActiveLink(id);
  };
  const links = [
    {
      id: 1,
      title: "داشبورد",
      href: "#",
      icon: <HiOutlineHome />,
    },
    {
      id: 2,
      title: " دسته بندی ها",
      href: "#",
      icon: <PiFoldersDuotone />,
    },
    {
      id: 3,
      title: " آهنگ ها",
      href: "/admin-dashboard/musics",
      icon: <HiOutlineMusicNote />,
    },
    {
      id: 4,
      title: " خواننده ها",
      href: "#",
      icon: <PiMicrophoneStageDuotone />,
    },

    {
      id: 5,
      title: " کاربران",
      href: "/admin-dashboard/users",
      icon: <HiOutlineUsers />,
    },
    {
      id: 6,
      title: " نظرات",
      href: "/admin-dashboard/users",
      icon: <FaRegComments />,
    },
  ];

  return (
    <div
      className={`h-screen sticky top-0 w-full rounded bg-primary-800 bg-opacity-50 p-4 transition-all duration-300
        flex z-30`}
    >
      <div className="w-full flex flex-col gap-y-6">
        <div className="text-secondary-50 justify-between text-3xl mb-8 flex">
          <div
            onClick={() => setIsShowSidebar((prev) => !prev)}
            className=" text-secondary-50  cursor-pointer z-50 p-2 "
          >
            {isShowSidebar ? (
              <div className="bg-primary-800 rounded-full p-2 hover:bg-primary-600">
                <IoIosArrowForward />
              </div>
            ) : (
              <div className="bg-primary-800 rounded-full p-2 hover:bg-primary-600">
                <BiMenu />
              </div>
            )}
          </div>
          <Link
            className={` ${
              isShowSidebar ? "flex" : "hidden"
            } duration-500 items-center gap-1 `}
            to={"/"}
          >
            <FaSpotify className="text-2xl" />
            <h1 className="italic text-base font-bold text-secondary-0">
              Spotify
            </h1>
          </Link>
        </div>
        {links.map((link) => (
          <Link
            onClick={() => isActiveLinkHandler(link.id)}
            key={link.id}
            className={` ${
              link.id === activeLink && "bg-success"
            } flex items-center p-2 rounded-sm gap-2 w-full duration-500 justify-end group`}
            to={link.href}
          >
            <span
              className={`  ${
                link.id === activeLink ? "text-primary-800" : "text-secondary-0"
              }  transition duration-500 font-semibold h-5 w-full flex justify-end overflow-y-hidden ${
                isShowSidebar ? "inline" : "hidden"
              }`}
            >
              {link.title}
            </span>
            <span
              className={`${
                link.id === activeLink
                  ? "text-primary-500"
                  : "text-secondary-50"
              }  text-2xl transition `}
            >
              {link.icon}
            </span>
          </Link>
        ))}
        <button
          className={`p-2 mt-12 h-9 overflow-y-hidden  bg-red-600 text-secondary-0 rounded transition duration-300 hover:bg-transparent border border-red-600`}
        >
          {isShowSidebar ? (
            <span>خروج از پنل مدیریت</span>
          ) : (
            <IoIosLogOut className=" text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default DashboardSideBar;
