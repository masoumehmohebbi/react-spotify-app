import "react-lazy-load-image-component/src/effects/blur.css";
import usePopularSongs from "./usePopularSongs";

import { PopularList } from "./PopularList";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const PlayListPopularData = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data } = usePopularSongs();
  const allSongs = data?.data?.results.slice(0, 3);

  if (!allSongs?.length) return null;

  return (
    <>
      <div className="flex w-full justify-between col-span-5 mt-11 px-5">
        <h1 className="title">{t("popular-songs")}</h1>
        <a
          onClick={() => navigate("/spotify-popular-playList/")}
          href="#"
          className="text-primary-100"
        >
          {t("show-all")}
        </a>
      </div>

      <div className="items-grid-container">
        <PopularList allSongs={allSongs} />
      </div>
    </>
  );
};
