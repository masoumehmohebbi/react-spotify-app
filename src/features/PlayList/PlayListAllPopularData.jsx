import "react-lazy-load-image-component/src/effects/blur.css";
import usePopularSongs from "./usePopularSongs";

import { PopularList } from "./PopularList";
import { useTranslation } from "react-i18next";

export const PlayListAllPopularData = () => {
  const { t } = useTranslation();
  const { data } = usePopularSongs();
  const allSongs = data?.data?.results;

  return (
    <>
      <div className="flex w-full justify-between col-span-5 mt-11 px-5">
        <h1 className="title">{t("popular-songs")}</h1>
      </div>
      <div className="items-grid-container--showAll">
        <PopularList allSongs={allSongs} />
      </div>
    </>
  );
};
