import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FaSpotify, FaUsers } from "react-icons/fa";
import { useState } from "react";
import { HiMusicNote } from "react-icons/hi";
import { GiHeartInside } from "react-icons/gi";
import { PiFoldersDuotone } from "react-icons/pi";
import { IoIosLogOut, IoIosArrowForward } from "react-icons/io";

const DashboardSideBar = ({ isShowSidebar, setIsShowSidebar }) => {
  const [activeLink, setActiveLink] = useState(1);

  const isActiveLinkHandler = (id) => {
    setActiveLink(id);
  };
  const links = [
    {
      id: 1,
      title: "همه آهنگ ها",
      href: "#",
      icon: <HiMusicNote />,
    },
    {
      id: 2,
      title: "همه خواننده ها",
      href: "#",
      icon: <GiHeartInside />,
    },
    {
      id: 3,
      title: "همه دسته بندی ها",
      href: "#",
      icon: <PiFoldersDuotone />,
    },
    {
      id: 4,
      title: "همه کاربران",
      href: "#",
      icon: <FaUsers />,
    },
  ];

  return (
    <div
      className={`h-screen  sticky  top-0  w-full rounded bg-primary-800 bg-opacity-50 p-4 transition-all duration-300
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
            className={`flex items-center gap-2 w-full duration-500 ${
              isShowSidebar ? "justify-end" : "justify-center"
            } group`}
            to={link.href}
          >
            <span
              className={`text-secondary-0 ${
                isShowSidebar ? "inline" : "hidden"
              }`}
            >
              {link.title}
            </span>
            <span
              className={`${
                link.id === activeLink && "bg-primary-700"
              } text-secondary-50 text-2xl transition group-hover:bg-primary-700 p-2 rounded-full`}
            >
              {link.icon}
            </span>
          </Link>
        ))}
        <button
          className={`  ${
            isShowSidebar ? "p-2" : "p-2 mx-auto"
          } mt-12 bg-red-600 text-secondary-0 rounded transition duration-300 hover:bg-transparent border border-red-600`}
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