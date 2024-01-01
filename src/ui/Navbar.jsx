import { useState } from "react";
import { BiMenu, BiSearch, BiX } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Tippy from "@tippyjs/react";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import "tippy.js/themes/light.css";
import useUser from "../features/PlayList/useUser";
import { IoExitOutline } from "react-icons/io5";

const cookies = new Cookies();

export default function Navbar({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-primary-900 z-10 sticky top-0 right-0 left-0 bg-opacity-50 px-5 h-20 md:h-[4.5rem] items-center w-full flex justify-between text-primary-100">
      <HamburgerMenu setOpen={setOpen} open={open} size="md">
        <div className="px-4 block md:hidden rounded-[500px] max-w-md  w-full">
          <div className="justify-between px-3 flex bg-primary-600 items-center rounded-[500px] focus-within:border-secondary-0 border-primary-600 border-2 duration-300">
            <SearchBox />
          </div>
        </div>

        <Link to={"/"}>
          <FaSpotify className="text-4xl text-secondary-0" />
        </Link>
      </HamburgerMenu>
      <NextPrevButtons />
      {children}
      <SigninSignUpButtons open={open} />
    </div>
  );
}

export function HamburgerMenu({ setOpen, open, children, size }) {
  return (
    <div className={`${size}:hidden flex justify-between items-center w-full`}>
      <button onClick={() => setOpen(!open)} className=" col-span-1">
        {!open ? (
          <BiMenu className="w-9 h-9 text-secondary-0" />
        ) : (
          <BiX className="w-9 h-9 text-secondary-0" />
        )}
      </button>

      {children}
    </div>
  );
}

function NextPrevButtons() {
  return (
    <div dir="rtl" className="hidden md:flex gap-x-2">
      <button className="bg-primary-900 bg-opacity-70 h-8 w-8 rounded-full border-none flex justify-center items-center">
        <HiOutlineChevronRight className="text-2xl text-secondary-50" />
      </button>
      <button className="bg-primary-900 bg-opacity-70 h-8 w-8 rounded-full border-none flex justify-center items-center">
        <HiOutlineChevronLeft className="text-2xl text-secondary-50" />
      </button>
    </div>
  );
}

function SigninSignUpButtons({ open }) {
  const { data } = useUser();
  const userProfile = data?.data;
  console.log(userProfile);

  const { t } = useTranslation();
  const token = cookies.get("accessToken");
  if (token)
    return (
      <div className="flex items-center gap-x-2">
        <h2>خوش آمدید</h2>
        <Tippy
          theme="light"
          interactive={true}
          trigger="click"
          placement="bottom"
          content={
            <div
              className={`transition-all  text-primary-50  left-0 rounded p-2 flex
            flex-col gap-4 `}
            >
              <div className="flex flex-col items-center justify-end gap-2">
                <span>
                  {userProfile?.first_name}
                  &nbsp;
                  {userProfile?.last_name}
                </span>

                <span>{userProfile?.requested_phone}</span>
                <hr className="h-1 border-secondary-50 w-full" />
              </div>
              <button className="flex items-center gap-1 justify-center">
                <IoExitOutline className="text-primary-900 w-4 h-4" />
                <span>خروج</span>
              </button>
            </div>
          }
        >
          <button className="flex items-center justify-center border border-primary-700 rounded-2xl p-[6px] shadow-sm">
            <RiUserLine className="w-6 h-6 text-secondary-0" />
            <RiArrowDownSLine className="w-5 h-5" />
          </button>
        </Tippy>
      </div>
    );
  return (
    <div
      className={`r gap-x-6 fixed top-0 bg-primary-900 text-secondary-0 md:bg-transparent h-screen md:h-auto md:col-span-5 flex md:ml-1 flex-col items-start md:items-center px-5 md:px-0 md:flex-row pt-20 md:pt-0 gap-y-6 md:gap-y-0 md:static md:z-auto z-[-1] left-0 w-full md:w-fit transition-all duration-500 ease-in ${
        open ? "right-0" : "rtl:right-[-1000px] ltr:left-[-1000px]"
      }`}
    >
      <button className="hover:scale-110 hover:text-secondary-0 md:text-secondary-100">
        <Link to={"/signup"}> {t("sign_up")}</Link>
      </button>
      <Link
        to={"/login"}
        className="hover:scale-110 rounded-[500px] border-none md:bg-secondary-0 py-2 md:px-6  md:font-bold text-secondary-0 md:text-primary-900"
      >
        {t("log_in")}
      </Link>
    </div>
  );
}

function SearchBox() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <input
        onFocus={() => navigate("/search")}
        className="py-2 md:py-3 px-3 w-full bg-transparent outline-none "
        type="text"
        placeholder={t("what_to_listen")}
      />
      <BiSearch className="text-2xl text-primary-50 " />
    </>
  );
}
