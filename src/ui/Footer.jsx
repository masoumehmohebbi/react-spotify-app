import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoFacebookCircle,
} from "react-icons/bi";

export const Footer = ({ children }) => {
  const { t } = useTranslation();

  return (
    <footer className="px-9 pt-5">
      <div className="grid grid-cols-8 text-primary-100 gap-y-9 md:gap-y-0">
        <div className="col-span-8 md:col-span-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 md:gap-y-0">
            <ul className="space-y-2">
              <p className="font-bold text-secondary-0 text-xl md:text-lg">
                {t("useful_links")}
              </p>
              <Link to={"/"}>
                <li>{t("home")}</li>
              </Link>
              <Link to={"/login"}>
                <li>{t("log_in")}</li>
              </Link>

              <Link to={"/signup"}>
                <li>{t("sign_up")}</li>
              </Link>
            </ul>
            <ul className="space-y-2">
              <p className="font-bold text-secondary-0 text-xl md:text-lg">
                {t("team")}
              </p>
              <Link to={"/about-us/contact"}>{t("about")}</Link>
            </ul>
          </div>
        </div>
        <div className="col-span-8 md:col-span-3 flex md:justify-end ">
          <ul className="flex gap-x-5">
            <li>
              <a
                href="#"
                className="rounded-full bg-primary-700 duration-300 hover:bg-secondary-200 h-10 w-10 flex justify-center items-center border-none"
              >
                <BiLogoInstagram className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="rounded-full bg-primary-700 duration-300 hover:bg-secondary-200 h-10 w-10 flex justify-center items-center border-none"
              >
                <BiLogoTwitter className="text-2xl" />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="rounded-full bg-primary-700 duration-300 hover:bg-secondary-200 h-10 w-10 flex justify-center items-center border-none"
              >
                <BiLogoFacebookCircle className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-primary-700 bg-opacity-10 border-spacing-y-11 my-11" />
      <p className="font-normal text-secondary-100 mb-9">© 2023 Spotify AB</p>

      {children}
    </footer>
  );
};
