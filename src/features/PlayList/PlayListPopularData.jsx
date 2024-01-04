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

  return (
    <PopularList allSongs={allSongs}>
      {" "}
      <a
        onClick={() => navigate("/spotify-popular-playList/")}
        href="#"
        className="text-primary-100"
      >
        {t("show-all")}
      </a>
    </PopularList>
  );
};
