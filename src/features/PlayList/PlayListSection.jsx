import { useTranslation } from "react-i18next";
import { PlayListData } from "./PlayListData";

export const PlayListSection = () => {
  const { t } = useTranslation();
  return (
    <div className="px-5 py-3 mb-11">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold text-secondary-0">
          {t("spotify-playLists")}
        </h1>
        <a href="#" className="text-primary-100">
          {t("show-all")}
        </a>
      </div>
      <div className="grid :grid-cols-1 md::grid-cols-3 md::grid-cols-4 lg:grid-cols-5 gap-5 my-9">
        <PlayListData />
      </div>
    </div>
  );
};
