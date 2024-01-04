import useSongs from "./useSongs";
import { PlayList } from "./PlayList";
import { useTranslation } from "react-i18next";

export const SpotifyPlayList = () => {
  const { t } = useTranslation();
  const { data } = useSongs();
  const allSongs = data?.data?.results;
  return (
    <>
      <div className="px-5 pt-6">
        <h1 className="title">{t("spotify-playLists")}</h1>
      </div>
      <div className="items-grid-container--showAll">
        <PlayList allSongs={allSongs} />
      </div>
    </>
  );
};
