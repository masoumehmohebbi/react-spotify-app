import { useTranslation } from "react-i18next";
import { PlayListData } from "./PlayListData";
import { PlayListPopularData } from "./PlayListPopularData";
import { useNavigate } from "react-router-dom";

export const PlayListSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="px-5 py-5 mb-6">
      <div className="flex w-full justify-between">
        <h1 className="title">{t("spotify-playLists")}</h1>
        <a
          onClick={() => navigate("/spotify-playlists/")}
          href="#"
          className="text-primary-100"
        >
          {t("show-all")}
        </a>
      </div>
      <div className="items-grid-container">
        <PlayListData />
      </div>
      {/* <div className="items-grid-container"> */}
      <PlayListPopularData />
      {/* </div> */}
    </div>
  );
};
