
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FaSpotify, FaUsers } from "react-icons/fa";
import { useState } from "react";
import { HiMusicNote } from "react-icons/hi";
import { GiHeartInside } from "react-icons/gi"
import { PiFoldersDuotone } from "react-icons/pi"
import { IoIosLogOut } from "react-icons/io";

export default function Sidebar() {
    const [isShowSidebar, setIsShowSidebar] = useState(true)
    const isShowSidebarHandler = () => {
        setIsShowSidebar(!isShowSidebar)
    }
    const links = [
        {
            id: 1,
            title: "همه آهنگ ها",
            href: "/admin-panel/all-musics",
            icon: <HiMusicNote />
        },
        {
            id: 2,
            title: "همه خواننده ها",
            href: "/admin-panel/all-artists",
            icon: <GiHeartInside />
        },
        {
            id: 3,
            title: "همه دسته بندی ها",
            href: "/admin-panel/all-grouping",
            icon: <PiFoldersDuotone />
        },
        {
            id: 4,
            title: "همه کاربران",
            href: "/admin-panel/all-users",
            icon: <FaUsers />
        }
    ]

    return (
        <ul className={`bg-primary-900 bg-opacity-50 p-4 transition-all duration-300 ${isShowSidebar ? "w-[15%]" : "w-[5%]"} h-screen flex justify-end sticky right-0 top-0 z-50 `}>
            <div className="fixed flex flex-col items-end justify-end gap-8 ">
                <li className="text-secondary-50 mb-8 -mt-[60px] flex gap-24  ">
                    <div
                        onClick={isShowSidebarHandler}
                        className=" text-secondary-50 text-3xl cursor-pointer">
                        <BiMenu />
                    </div>
                    <Link className="flex items-center gap-1 justify-center" to={"/"}>
                        <h1 className="italic font-bold text-2xl text-secondary-0">Spotify</h1>
                        <FaSpotify className="text-3xl" />
                    </Link>
                </li>
                {
                    links.map(link => (
                        <Link key={link.id} className={`flex items-center gap-2 justify-end`} to={link.href}>
                            <span className={`text-white text-xl ${isShowSidebar ? "inline" : "hidden"}`}>
                                {link.title}
                            </span>
                            <span className="text-secondary-50 text-xl">
                                {link.icon}
                            </span>
                        </Link>
                    ))
                }
                <button className={`${isShowSidebar ? "p-2" : "p-2"} mt-12 bg-red-600 text-white rounded transition duration-300 hover:bg-transparent border border-red-600`}>
                {isShowSidebar ? <span>خروج از پنل مدیریت</span> : <IoIosLogOut className=" text-2xl"/>}
                </button>
            </div>
        </ul>
    )
}