import { useEffect, useState } from "react";
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
import useUser from "../features/PlayList/useUser";
import { Library } from "./Library";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();

  const userData = useUser();
  const userProfile = userData?.data?.data;

  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState(1);

  useEffect(() => {
    setActiveLink(JSON.parse(localStorage.getItem("active-Link")));
  }, [activeLink]);

  const [isCreateNewPlaylist, setIsCreateNewPlaylist] = useState(false);
  const showCreateNewPlaylist = () => setIsCreateNewPlaylist(true);
  const hideCreateNewPlaylist = () => setIsCreateNewPlaylist(false);

  const [isCreatePlaylist, setIsCreatePlaylist] = useState(false);
  const showCreatePlaylist = () => setIsCreatePlaylist(true);
  const hideCreatePlaylist = () => setIsCreatePlaylist(false);

  const sidebarLinks = [
    {
      id: 1,
      title: t("home"),
      icon: <AiOutlineHome />,
      iconActive: <AiFillHome />,
      src: "/",
    },
    {
      id: 2,
      title: t("search"),
      icon: <RiSearchLine />,
      iconActive: <RiSearchFill />,
      src: "/search",
    },
  ];

  return (
    <aside className="hidden md:block z-10 h-screen p-2 pl-0 select-none sticky right-0 top-0">
      <div className="flex flex-col gap-2">
        <ul className="bg-primary-800 flex flex-col gap-6 p-5 rounded-lg">
          <li className="text-secondary-50">
            <Link className="flex items-center gap-1" to={"/"}>
              <h1 className="italic font-bold text-secondary-0">Spotify</h1>
              <FaSpotify className="text-2xl" />
            </Link>
          </li>

          {sidebarLinks?.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                setActiveLink(item.id);
                localStorage.setItem("active-Link", JSON.stringify(item.id));
              }}
              className={`flex transition duration-500 hover:text-secondary-50 ${
                item.id === activeLink
                  ? "text-secondary-50 "
                  : "text-secondary-100"
              }`}
            >
              <Link className="flex items-center gap-2" to={item.src}>
                <div className="text-2xl">
                  {item.id === activeLink ? item.iconActive : item.icon}
                </div>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="bg-primary-800 flex flex-col gap-6 p-4 pt-0 rounded-lg h-[calc(100vh-266px)]">
          <li className="text-secondary-100 z-10">
            <div className="flex items-center justify-between gap-1 pt-2">
              <div className="flex items-center gap-2 transition duration-500 hover:text-secondary-50">
                <BiLibrary className="text-2xl" />
                <span>{t("your-library")}</span>
              </div>
              <Tippy
                interactive={true}
                visible={isCreateNewPlaylist}
                onClickOutside={hideCreateNewPlaylist}
                placement="bottom-start"
                arrow=""
                content={
                  <div
                    onClick={() => {
                      setIsCreateNewPlaylist(false);
                      setIsCreatePlaylist(true);
                    }}
                    className="flex items-center justify-center gap-x-2 cursor-pointer"
                  >
                    <PiMusicNotesPlusDuotone className="text-xl" />
                    <p>{t("see_your_playList")}</p>
                  </div>
                }
              >
                <Tippy arrow="" content={t("your-playlist")}>
                  <button
                    onClick={
                      isCreateNewPlaylist
                        ? hideCreateNewPlaylist
                        : showCreateNewPlaylist
                    }
                    className="p-1 rounded-full transition duration-300 hover:bg-primary-600 hover:text-secondary-50"
                  >
                    <BiPlus className="w-6 h-6" />
                  </button>
                </Tippy>
              </Tippy>
            </div>
          </li>

          <ul className="list flex static flex-col  gap-8 overflow-y-scroll overflow-x-hidden  p-2 h-[172px] text-secondary-50 ">
            {!userProfile && (
              <>
                <li className="bg-primary-600 rounded px-4 py-6 flex w-full flex-col gap-6">
                  <h3 className="text-md font-bold">{t("first_playlist")}</h3>
                  <p className="text-sm">{t("it's_easy")}</p>

                  <Tippy
                    interactive={true}
                    animation="shift-toward"
                    placement="right-end"
                    offset={[60, 120]}
                    visible={isCreatePlaylist}
                    onClickOutside={hideCreatePlaylist}
                    content={
                      <div className="min-w-[300px] max-w-[336px] p-2 text-secondary-0 relative top-1 rounded flex flex-col gap-2 ">
                        <h4 className="font-semibold text-lg">
                          {t("create_playList")}
                        </h4>
                        <p>{t("login_create_playlist")}</p>
                        <div className="flex items-center justify-end gap-4 mt-2 text-base">
                          <p
                            onClick={() => setIsCreatePlaylist(false)}
                            className="text-primary-300 cursor-pointer hover:scale-105 hover:text-secondary-0"
                          >
                            {t("not_now")}
                          </p>
                          <Link
                            to={"/login"}
                            className="exceptionId hover:scale-105 rounded-[500px] border-none md:bg-secondary-0 py-1 md:px-6 text-secondary-0 md:text-primary-900"
                          >
                            {t("log_in")}
                          </Link>
                        </div>
                      </div>
                    }
                  >
                    <button
                      onClick={
                        isCreatePlaylist
                          ? hideCreatePlaylist
                          : showCreatePlaylist
                      }
                      className="bg-secondary-0 rounded-[500px] border-none py-2 mt-4 px-6 w-max font-bold text-primary-900 hover:scale-105 transition"
                    >
                      {t("see_playList")}
                    </button>
                  </Tippy>
                </li>

                <li className="bg-primary-600 rounded px-4 py-6 flex flex-col gap-6 ">
                  <h3 className="text-md font-bold">
                    {t("find_popular_songs")}
                  </h3>
                  <p className="text-sm">{t("keep_updated")}</p>
                  <button
                    onClick={() => navigate("/spotify-popular-playList/")}
                    className="rounded-[500px] border-none bg-secondary-0 py-2 px-6 w-max font-bold text-primary-900 hover:scale-105 transition"
                  >
                    {t("browse_popular")}
                  </button>
                </li>
              </>
            )}

            {userProfile && <Library />}
          </ul>

          <ModalButton />
        </ul>
      </div>
    </aside>
  );
};
