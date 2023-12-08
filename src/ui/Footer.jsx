import { useTranslation } from "react-i18next";
import {
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoFacebookCircle,
} from "react-icons/bi";
import ModalButton from "./ModalButton";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="px-9">
      <div className="grid grid-cols-8 text-primary-100 gap-y-9 md:gap-y-0">
        <div className="col-span-8 md:col-span-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 md:gap-y-0">
            <ul className="space-y-2">
              <p className="font-bold text-secondary-0 text-xl md:text-lg">
                {t("useful_links")}
              </p>
              <li>{t("home")}</li>
              <li>{t("log_in")}</li>
              <li>{t("sign_up")}</li>
            </ul>
            <ul className="space-y-2">
              <p className="font-bold text-secondary-0 text-xl md:text-lg">
                {t("team")}
              </p>
              <li>{t("about")}</li>
            </ul>
          </div>
        </div>
        <div className="col-span-8 md:col-span-3 flex md:justify-end ">
          <ul className="flex gap-x-5">
            <li>
              <a
                href="#"
                className="rounded-full bg-primary-700 duration-300 hover:bg-secondary-100 h-10 w-10 flex justify-center items-center border-none"
              >
                <BiLogoInstagram className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="rounded-full bg-primary-700 duration-300 hover:bg-secondary-100 h-10 w-10 flex justify-center items-center border-none"
              >
                <BiLogoTwitter className="text-2xl" />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="rounded-full bg-primary-700 duration-300 hover:bg-secondary-100 h-10 w-10 flex justify-center items-center border-none"
              >
                <BiLogoFacebookCircle className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-primary-700 bg-opacity-10 border-spacing-y-11 my-11" />
      <p className="font-normal text-secondary-100 mb-11">© 2023 Spotify AB</p>

      <div className="block md:hidden">
        <ModalButton />
      </div>
    </footer>
  );
};
