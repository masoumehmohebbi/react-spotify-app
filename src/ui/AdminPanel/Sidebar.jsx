
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";
import { HiMusicNote } from "react-icons/hi";
import { GiHeartInside } from "react-icons/gi"
import { PiFoldersDuotone } from "react-icons/pi"
import { IoIosLogOut, IoIosArrowForward } from "react-icons/io";

export default function Sidebar() {
    const [isShowSidebar, setIsShowSidebar] = useState(true)
    const [activeLink, setActiveLink] = useState(1)
    const isShowSidebarHandler = () => {
        setIsShowSidebar(!isShowSidebar)
    }
    const isActiveLinkHandler = (id) => {
        setActiveLink(id)
    }
    const links = [
        {
            id: 1,
            title: "همه آهنگ ها",
            href: "#",
            icon: <HiMusicNote />
        },
        {
            id: 2,
            title: "همه خواننده ها",
            href: "#",
            icon: <GiHeartInside />
        },
        {
            id: 3,
            title: "همه دسته بندی ها",
            href: "#",
            icon: <PiFoldersDuotone />
        },
        {
            id: 4,
            title: "همه کاربران",
            href: "#",
            icon: <FaUsers />
        }
    ]

    return (
        <ul className={`relative bg-primary-900 bg-opacity-50 p-4 transition-all duration-300 ${isShowSidebar ? "w-[15%]" : "w-[5%]"} h-screen flex justify-end sticky right-0 top-0 z-30 `}>
            <div className="fixed flex flex-col items-end justify-end gap-8  mt-[80px]">
                <div className="text-secondary-50 text-3xl mb-8  flex gap-24  -top-24 -right-2 absolute  bg-primary-900 rounded">
                    <div
                        onClick={isShowSidebarHandler}
                        className=" text-secondary-50  cursor-pointer z-50 p-2 ">
                        {
                            isShowSidebar ? (
                                <div className="bg-primary-800 rounded-full  p-2 hover:bg-primary-600">
                                    < IoIosArrowForward />
                                </div>) :
                                (<div className="bg-primary-800 rounded-full  p-2 hover:bg-primary-600">
                                    < BiMenu />
                                </div>)
                        }
                    </div>
                </div>
                {
                    links.map(link => (
                        <Link
                            onClick={() => isActiveLinkHandler(link.id)}
                            key={link.id} className={`flex items-center gap-2 justify-end group`} to={link.href}>
                            <span className={`text-white ${isShowSidebar ? "inline" : "hidden"}`}>
                                {link.title}
                            </span>
                            <span className={`${link.id === activeLink && "bg-primary-700"} text-secondary-50 text-2xl transition group-hover:bg-primary-700 p-2 rounded-full`}>
                                {link.icon}
                            </span>
                        </Link>
                    ))
                }
                <button className={`${isShowSidebar ? "p-2" : "p-2"} mt-12 bg-red-600 text-white rounded transition duration-300 hover:bg-transparent border border-red-600`}>
                    {isShowSidebar ? <span>خروج از پنل مدیریت</span> : <IoIosLogOut className=" text-2xl" />}
                </button>
            </div>
        </ul>
    )
}