import { Link } from "react-router-dom";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { CgDanger } from "react-icons/cg";
import { useState } from "react";
import { validEmail, validPassword } from "../features/auth/Regex";
import { useTranslation } from "react-i18next";
import googleLogo from "./../assets/images/google.svg";
import appleLogo from "./../assets/images/apple.svg";
import facebookLogo from "./../assets/images/facebook.svg";

export default function LogIn() {
  const { t } = useTranslation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [error, setError] = useState(false);

  const isShowPasswordHandler = () => {
    setIsShowPassword(!isShowPassword);
  };
  const setUserEmailInStateHandler = (e) => {
    setUserEmail(e.target.value);
  };
  const setUserPassInStateHandler = (e) => {
    setUserPass(e.target.value);
  };

  const validate = (event) => {
    event.preventDefault();
    if (!validEmail.test(userEmail)) {
      setError(true);
    }
    if (!validPassword.test(userPass)) {
      setError(true);
    }
  };

  return (
    <div className="w-full md:max-w-3xl mx-auto flex items-center justify-center md:mt-8">
      <div className="bg-primary-900 text-secondary-0 py-20 md:px-24 rounded-xl w-full flex items-center justify-center flex-col gap-12">
        <h1 className="text-4xl xl:text-5xl px-5 md:px-0 text-center font-bold tracking-wide">
          {t("login_to_spotify")}
        </h1>
        {error && (
          <div className="bg-red w-full flex items-center justify-end gap-4 px-4 py-2 rounded">
            <p className="text-md">
              {error && <p>{t("invalid_pass_email")}</p>}
            </p>
            <CgDanger className="text-2xl" />
          </div>
        )}
        <div className="flex flex-col gap-4">
          <button className="flex items-center gap-12 rounded-full border px-8 py-2 border-gray-600 hover:border-white">
            <span className="w-[80%] text-[18px]">
              {t("continue_with_google")}
            </span>
            <img src={googleLogo} alt="googleLogo" className="w-[27px]" />
          </button>
          <button className="flex items-center gap-12 rounded-full border px-8 py-2 border-gray-600 hover:border-white">
            <span className="w-[80%] text-[18px]">
              {t("continue_with_facebook")}
            </span>
            <img src={facebookLogo} alt="facebookLogo" className="w-[27px]" />
          </button>

          <div className="flex items-center gap-12 rounded-full border px-8 py-2 border-gray-600 hover:border-white">
            <span className="w-[80%] text-[18px]">
              {t("continue_with_apple")}
            </span>

            <img src={appleLogo} alt="appleLogo" className="w-[27px]" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-primary-800 rounded"></div>
        <form className="w-3/4 flex flex-col gap-4">
          <div className="flex flex-col items-end gap-2 w-full">
            <label className="font-bold" htmlFor="emailOurUsername">
              {t("email_or_username")}
            </label>
            <input
              id="emailOurUsername"
              value={userEmail}
              onChange={(e) => setUserEmailInStateHandler(e)}
              className="bg-primary-800 rounded border border-gray-400 text-end px-4 py-2 w-full
                                   outline-none focus:outline-white focus:outline-2 focus:border-none "
              type="text"
              placeholder={t("email_or_username")}
              name="emailOurUsername"
            />
          </div>
          <div className="flex flex-col items-end gap-4 w-full ">
            <label className="font-bold" htmlFor="password">
              {t("password")}
            </label>
            <div className="relative  w-full flex items-center justify-between">
              <div
                className="cursor-pointer text-xl z-10 mr-2"
                onClick={isShowPasswordHandler}
              >
                {isShowPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </div>
              <input
                id="password"
                type={`${isShowPassword ? "text" : "password"}`}
                value={userPass}
                placeholder={t("password")}
                name="pass"
                onChange={(e) => setUserPassInStateHandler(e)}
                className="bg-transparent rounded border bg-primary-800
                                          focus:outline-white focus:outline-2 focus:border-none 
                                          text-end absolute w-full px-4 py-2"
              />
            </div>
          </div>
          <div className="flex justify-end w-full mt-4">
            <label
              htmlFor="Toggle1"
              className="inline-flex items-center gap-2  cursor-pointer "
            >
              <span className="text-sm">{t("remember_me")}</span>
              <span className="relative">
                <input id="Toggle1" type="checkbox" className="hidden peer" />
                <div className="w-8 h-4 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-green-400  hover:outline hover:outline-gray-500 hover:outline-offset-2"></div>
                <div className="absolute inset-y-0 left-0 w-2 h-2 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
              </span>
            </label>
          </div>
          <button
            onClick={validate}
            className="bg-green-500 rounded-full w-full text-center text-black py-2 font-bold mt-4 hover:scale-105 transition"
          >
            {t("log_in")}
          </button>
          <span className="text-center mt-4 underline hover:text-green-600">
            {t("forgot_your_password")}
          </span>
        </form>
        <div className="w-full h-[1px] bg-primary-800 rounded"></div>
        <button className="text-gray-400">
          {t("have_account")}
          <Link
            to={"/signup"}
            className="underline text-white hover:text-green-600 ml-2"
          >
            {t("sign_up_for_spotify")}
          </Link>
        </button>
      </div>
    </div>
  );
}
