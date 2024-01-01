import { FaPlay } from "react-icons/fa";
import { useOpenPlayModal } from "./OpenPlayModalContext";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import usePopularSongs from "./usePopularSongs";
import { useTranslation } from "react-i18next";

export const PlayListPopularData = () => {
  const { t } = useTranslation();
  const songRef = useRef();
  const navigate = useNavigate();

  useOutsideClick(songRef, "playIcon", () => oneSongClickHandler);

  const oneSongClickHandler = (id) => {
    navigate(`/playlist-song-detail/${id}`);
  };
  const { setIsOpen } = useOpenPlayModal();
  const { data } = usePopularSongs();
  const allSongs = data?.data?.results.slice(0, 3);

  return (
    <>
      <div className="flex w-full justify-between col-span-5 mt-11">
        <h1 className="text-2xl font-bold text-secondary-0">
          {t("popular-songs")}
        </h1>
        <a href="#" className="text-primary-100">
          {t("show-all")}
        </a>
      </div>
      {allSongs?.map((song) => (
        <div
          ref={songRef}
          onClick={() => oneSongClickHandler(song.id)}
          key={song.id}
          className="group w-48 md:w-auto bg-primary-500 hover:bg-primary-700 shadow-md rounded-md p-5 cursor-pointer"
        >
          <div className="relative overflow-hidden">
            <LazyLoadImage
              effect="blur"
              src={song.cover_image}
              className="rounded-md"
            />

            <div
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen((prev) => !prev);
              }}
              className="playIcon btn-playIcon h-0 group-hover:h-fit overflow-hidden absolute -bottom-9 group-hover:bottom-3 left-1"
            >
              <FaPlay className="text-lg text-primary-900" />
            </div>
          </div>
          <h1 className="text-secondary-0">{song.artist.fullname}</h1>
          <p className="text-secondary-50 text-sm">
            {song.name} - {song.genre.name}
          </p>
        </div>
      ))}
    </>
  );
};
