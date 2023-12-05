import { useState } from "react";

import { AiFillHome, AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { RiSearchFill, RiSearchLine } from "react-icons/ri";
import { BiLibrary } from "react-icons/bi";
import { MdOutlineLanguage } from "react-icons/md";

import { Link } from "react-router-dom";

export const SideBar = () => {
  const sidebarLinks = [
    {
      id: 1,
      title: "صفحه اصلی",
      icon: <AiOutlineHome />,
      iconActive: <AiFillHome />,
    },
    {
      id: 2,
      title: "جستجو",
      icon: <RiSearchLine />,
      iconActive: <RiSearchFill />,
    },
  ];
  const sidebarFooter = [
    {
      title: "حقوقی",
    },
    {
      title: "مرکز‌حریم‌خصوصی",
    },
    {
      title: "خط مشی رازداری",
    },
    {
      title: "تنظیمات کوکی",
    },
    {
      title: "درباره آگهی ها",
    },
    {
      title: "دسترس پذیری",
    },
    {
      title: "کوکی ها",
    },
  ];
  const langs = [
    {
      title: "English",
      lang: "English",
    },
    {
      title: "العربیه",
      lang: "Arabic",
    },
    {
      title: "فارسی",
      lang: "Persian",
    },
    {
      title: "اردو",
      lang: "Urdu",
    },
    {
      title: "عربی مصری",
      lang: "َArabic (Egypt)",
    },
  ];
  const [activeLink, setActiveLink] = useState(1);
  const [isShowModal, setIsShowModal] = useState(false);

  const activeLinkhandler = (id) => {
    setActiveLink(id);
    console.log(activeLink);
  };
  const isShowModalHandler = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <>
      <aside className="bg-primary-900 h-screen p-2 pl-0 select-none">
        <div className="flex flex-col gap-2">
          <ul className="bg-primary-800 flex flex-col gap-6 p-5  rounded">
            <li className="text-secondary-50">
              <Link className="flex items-center gap-1" to={"/"}>
                <h1 className="italic font-bold">Spotify</h1>
                <FaSpotify className="text-2xl" />
              </Link>
            </li>
            {sidebarLinks.map((item) => (
              <li
                key={item.id}
                onClick={() => activeLinkhandler(item.id)}
                className={`flex transition duration-500 hover:text-secondary-50 ${
                  item.id === activeLink
                    ? "text-secondary-50 "
                    : "text-secondary-100"
                }`}
              >
                <Link className="flex items-center gap-2" to={"/"}>
                  <div className="text-2xl">
                    {item.id === activeLink ? item.iconActive : item.icon}
                  </div>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="bg-primary-800 flex flex-col gap-6 p-4 pt-0 rounded">
            <li className="text-gray-400 z-10">
              <Link
                className="flex items-center justify-between gap-1 "
                to={"/"}
              >
                <div className="flex items-center gap-2 transition duration-500 hover:text-secondary-50">
                  <BiLibrary className="text-2xl" />
                  <span>کتابخانه شما</span>
                </div>
                <div className="p-2 rounded-full transition duration-300 hover:bg-primary-800 hover:text-secondary-50">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </Link>
            </li>
            <ul className="flex flex-col gap-8 overflow-y-scroll p-2 h-[130px] text-secondary-50">
              <li className="bg-primary-700 rounded px-4 py-6 flex flex-col gap-6">
                <h3 className="text-md font-bold">
                  فهرست پخش مورد علاقه خود را بسازید
                </h3>
                <p className="text-sm">خیلی راحت است. کمکتان میکنیم</p>
                <button className="bg-secondary-0 rounded-[500px] border-none py-2 px-6 w-max font-bold text-primary-900 hover:scale-105 transition">
                  ایجاد فهرست پخش
                </button>
              </li>
              <li className="bg-primary-700 rounded px-4 py-6 flex flex-col gap-6">
                <h3 className="text-md font-bold">
                  بیایید چند پادکست برای پخش پیدا کنیم
                </h3>
                <p className="text-sm">
                  برای پادکست های جدید به شما اطلاع میدهیم
                </p>
                <button className="rounded-[500px] border-none bg-secondary-0 py-2 px-6 w-max font-bold text-primary-900 hover:scale-105 transition">
                  گشتن در پادکست ها
                </button>
              </li>
            </ul>
            <ul className="text-secondary-100 text-[11px] grid grid-cols-3 gap-4 w-[90%] pt-4 pb-2">
              {sidebarFooter.map((item) => (
                <li
                  key={item.title}
                  className="transition hover:text-secondary-100"
                >
                  <Link to={"/"}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <button
              onClick={isShowModalHandler}
              className="text-gray-200 border border-secondary-100  w-min py-1 px-2 font-bold rounded-full flex items-center gap-1 hover:scale-105 transition"
            >
              <MdOutlineLanguage className="font-bold text-xl" />
              فارسی
            </button>
          </ul>
        </div>
      </aside>

      {isShowModal && (
        <div>
          <div className="w-full h-screen bg-primary-800 absolute top-0 z-40 opacity-70"></div>
          <div className="flex items-center justify-center w-full h-screen absolute top-0 z-50">
            <div className="z-50 w-1/2  bg-primary-800 absolute top-0 h-[550px] mt-24 rounded">
              <div className="w-full flex items-center justify-between p-4 text-secondary-50 border-b border-b-gray-700">
                <div>
                  <h4 className="text-xl font-bold">زبانی را انتخاب کنید</h4>
                  <p className="text-secondary-50 mt-4">
                    با این انتخاب زبان نوشتاری open.spotify.com به‌روزرسانی
                    می‌شود.
                  </p>
                </div>
                <AiOutlineClose
                  className="cursor-pointer p-2 rounded-full bg-primary-800 text-white text-4xl "
                  onClick={isShowModalHandler}
                />
              </div>
              <ul className="grid grid-cols-4 gap-6 py-6 px-8">
                {langs.map((lan) => (
                  <li key={lan.title} className="flex flex-col gap-2">
                    <span className="text-white">{lan.title}</span>
                    <span className="text-gray-400">{lan.lang}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
