import { useState } from "react";

import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { RiSearchFill, RiSearchLine } from "react-icons/ri";
import { BiLibrary } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { useTranslation } from "react-i18next";
import ModalButton from "./ModalButton";

export const SideBar = () => {
  const { t } = useTranslation();
  const sidebarLinks = [
    {
      id: 1,
      title: t("home"),
      icon: <AiOutlineHome />,
      iconActive: <AiFillHome />,
    },
    {
      id: 2,
      title: t("search"),
      icon: <RiSearchLine />,
      iconActive: <RiSearchFill />,
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
      <aside className="hidden md:block h-screen p-2 pl-0 select-none sticky right-0 top-0">
        <div className="flex flex-col gap-2">
          <ul className="bg-primary-800 flex flex-col gap-6 p-5  rounded">
            <li className="text-secondary-50">
              <Link className="flex items-center gap-1" to={"/"}>
                <h1 className="italic font-bold text-secondary-0">Spotify</h1>
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
                  <span>{t("your-library")}</span>
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
            <ul className="flex flex-col gap-8 overflow-y-scroll p-2 h-[172px] text-secondary-50">
              <li className="bg-primary-600 rounded px-4 py-6 flex flex-col gap-6">
                <h3 className="text-md font-bold">{t("first_playlist")}</h3>
                <p className="text-sm">{t("help_you")}</p>
                <button className="bg-secondary-0 rounded-[500px] border-none py-2 px-6 w-max font-bold text-primary-900 hover:scale-105 transition">
                  {t("create_playList")}
                </button>
              </li>
              <li className="bg-primary-600 rounded px-4 py-6 flex flex-col gap-6">
                <h3 className="text-md font-bold">{t("find_padcast")}</h3>
                <p className="text-sm">{t("keep_updated")}</p>
                <button className="rounded-[500px] border-none bg-secondary-0 py-2 px-6 w-max font-bold text-primary-900 hover:scale-105 transition">
                  {t("browse_podcasts")}
                </button>
              </li>
            </ul>

            <ModalButton isShowModalHandler={isShowModalHandler} />
          </ul>
        </div>
      </aside>

      {isShowModal && <Modal isShowModalHandler={isShowModalHandler} />}
    </>
  );
};
