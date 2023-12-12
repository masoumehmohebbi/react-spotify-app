import { BiSearch } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className="w-full p-2 bg-primary-900 bg-opacity-50 flex items-center justify-center sticky top-0 z-50 ">
            <div className="flex items-center gap-12 w-[60%]">
                <div className="text-white flex items-center gap-2">
                   <h3 className="text-white font-bold">معصومه محبی</h3>
                    <div className="w-[50px] h-[50px] bg-primary-400 rounded-full border "></div>
                </div>
                <div className="text-3xl text-secondary-50 flex items-center gap-6">
                    <CiSettings className=" cursor-pointer" />
                    <IoNotificationsOutline className=" cursor-pointer" />
                </div>
                <div className="justify-between px-3 flex bg-primary-600 items-center rounded-[500px] ">
                    <input
                        className="py-2 px-3 w-full bg-transparent outline-none transition-all w-[80px] focus:w-[150px]"
                        type="text"
                        placeholder="search"
                    />
                    <BiSearch className="text-2xl text-secondary-50" />
                </div>
            </div>
        </div>
    )
}