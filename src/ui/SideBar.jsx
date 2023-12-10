import { useState } from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { RiSearchFill, RiSearchLine } from "react-icons/ri";
import { BiLibrary, BiPlus } from "react-icons/bi";
import { PiMusicNotesPlusDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ModalButton from "./ModalButton";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-toward.css";

export const SideBar = () => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState(1);
  const [visibleTippy, setVisibleTippy] = useState(false);
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

  const activeLinkhandler = (id) => {
    setActiveLink(id);
  };

  return (
    <aside className="hidden md:block z-10 h-screen p-2 pl-0 select-none sticky right-0 top-0">
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
              className="flex items-center justify-between gap-1 pt-2"
              to={"/"}
            >
              <div className="flex items-center gap-2 transition duration-500 hover:text-secondary-50">
                <BiLibrary className="text-2xl" />
                <span>{t("your-library")}</span>
              </div>
              <Tippy
                trigger="click"
                placement="bottom-start"
                arrow=""
                content={
                  <div className="flex items-center justify-center gap-x-2">
                    <PiMusicNotesPlusDuotone className="text-xl" />
                    <p>{t("create_New_playList")}</p>
                  </div>
                }
              >
                <Tippy arrow="" content={t("create_paylist_folder")}>
                  <span className="p-1 rounded-full transition duration-300 hover:bg-primary-600 hover:text-secondary-50">
                    <BiPlus className="w-6 h-6" />
                  </span>
                </Tippy>
              </Tippy>
            </Link>
          </li>

          <ul className="list flex static flex-col  gap-8 overflow-y-scroll overflow-x-hidden  p-2 h-[172px] text-secondary-50 ">
            <li className="bg-primary-600 rounded px-4 py-6 flex w-full flex-col gap-6">
              <h3 className="text-md font-bold">{t("first_playlist")}</h3>
              <p className="text-sm">{t("help_you")}</p>

              <Tippy
                interactive={true}
                animation="shift-toward"
                placement="right-end"
                offset={[60, 120]}
                visible={visibleTippy}
                content={
                  <div>
                    <div className="w-full p-2 text-secondary-0 relative top-1 rounded flex flex-col gap-2 ">
                      <h4 className="font-semibold text-lg">
                        Create a playlist
                      </h4>
                      <p className="text-sm">
                        Log in to create and share playlists.
                      </p>
                      <div className="flex items-center justify-end gap-2 mt-2">
                        <p
                          onClick={() => setVisibleTippy(false)}
                          className="text-primary-300 cursor-pointer"
                        >
                          not now
                        </p>
                        <Link
                          to={"/login"}
                          className="rounded-[500px] border-none md:bg-white py-1 md:px-6  text-secondary-0 md:text-primary-900"
                        >
                          {t("log_in")}
                        </Link>
                      </div>
                    </div>
                  </div>
                }
              >
                <button
                  id="exceptionId"
                  onClick={() => setVisibleTippy(true)}
                  className="bg-secondary-0 rounded-[500px] border-none py-2 mt-4 px-6 w-max font-bold text-primary-900 hover:scale-105 transition"
                >
                  {t("create_playList")}
                </button>
              </Tippy>
            </li>

            <li className="bg-primary-600 rounded px-4 py-6 flex flex-col gap-6 ">
              <h3 className="text-md font-bold">{t("find_padcast")}</h3>
              <p className="text-sm">{t("keep_updated")}</p>
              <button className="rounded-[500px] border-none bg-secondary-0 py-2 px-6 w-max font-bold text-primary-900 hover:scale-105 transition">
                {t("browse_podcasts")}
              </button>
            </li>
          </ul>

          <ModalButton />
        </ul>
      </div>
    </aside>
  );
};
