import { useTranslation } from "react-i18next";
import { MdOutlineLanguage } from "react-icons/md";

const ModalButton = ({ isShowModalHandler }) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={isShowModalHandler}
      className="text-gray-200 border border-secondary-100 text-xs w-fit py-1 px-2 font-bold rounded-full flex items-center gap-1 hover:scale-105 transition"
    >
      <MdOutlineLanguage className="font-bold text-2xl" />
      {t("choose_lng")}
    </button>
  );
};

export default ModalButton;
