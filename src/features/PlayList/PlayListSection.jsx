import { useTranslation } from "react-i18next";
import { PlayListData } from "./PlayListData";

export const PlayListSection = () => {
  const { t } = useTranslation();
  return (
    <div className="px-5 py-5 mb-6">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold text-secondary-0">
          {t("spotify-playLists")}
        </h1>
        <a href="#" className="text-primary-100">
          {t("show-all")}
        </a>
      </div>
      <div className="grid-flow-col md:grid-flow-row overflow-x-scroll no-scrollbar grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 my-9">
        <PlayListData />
      </div>
    </div>
  );
};
