import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="media bg-primary-900 z-10 sticky top-0 right-0 left-0 bg-opacity-50 px-5 h-16 items-center w-full flex justify-between text-primary-100">
      <button
        onClick={() => setOpen(!open)}
        className="absolute right-4 top-5 md:hidden col-span-1"
      >
        {!open ? (
          <BiMenu className="w-9 h-9 text-secondary-0" />
        ) : (
          <BiX className="w-9 h-9 text-secondary-0" />
        )}
      </button>

      <div dir="rtl" className="hidden md:flex gap-x-2">
        <button className="bg-primary-900 bg-opacity-70 h-8 w-8 rounded-full border-none flex justify-center items-center">
          <HiOutlineChevronRight className="text-2xl text-secondary-50" />
        </button>
        <button className="bg-primary-900 bg-opacity-70 h-8 w-8 rounded-full border-none flex justify-center items-center">
          <HiOutlineChevronLeft className="text-2xl text-secondary-50" />
        </button>
      </div>
      <div
        className={`r gap-x-6 top-0 bg-primary-900 text-secondary-0 md:bg-transparent h-screen md:h-auto md:col-span-5 flex md:ml-1 flex-col items-start md:items-center px-5 md:px-0 md:flex-row pt-20 md:pt-0 gap-y-6 md:gap-y-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-fit transition-all duration-500 ease-in ${
          open ? "right-0" : "right-[-1000px]"
        }`}
      >
        <button className="hover:scale-110 md:text-secondary-100">
          <Link to={"/signup"}> {t("sign_up")}</Link>
        </button>
        <Link
          to={"/login"}
          className="hover:scale-110 rounded-[500px] border-none md:bg-white py-2 md:px-6  font-bold text-secondary-0 md:text-primary-900"
        >
          {t("log_in")}
        </Link>
      </div>
    </div>
  );
}
