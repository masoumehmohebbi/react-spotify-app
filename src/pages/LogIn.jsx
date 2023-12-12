import { Link } from "react-router-dom";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { CgDanger } from "react-icons/cg";
import { useState } from "react";
import { validEmail, validPassword } from "../features/auth/Regex";
import { useTranslation } from "react-i18next";
import googleLogo from "./../assets/images/google.svg";

export default function LogIn() {
  const { t } = useTranslation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [error, setError] = useState(false);

  const isShowPasswordHandler = () => {
    setIsShowPassword(!isShowPassword);
  };
  console.log(isShowPasswordHandler);
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
          <button className="flex items-center gap-12 rounded-full border px-8 py-2 border-gray-600 hover:border-secondary-0">
            <span className="w-[80%] text-[18px]">
              {t("continue_with_google")}
            </span>
            <img src={googleLogo} alt="googleLogo" className="w-[27px]" />
          </button>
        </div>
        <div className="w-full h-[1px] bg-primary-800 rounded"></div>
        <form className="w-3/4 flex flex-col gap-y-7">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold" htmlFor="phonenumber">
              {t("phone_number")}
            </label>
            <input
              id="phonenumber"
              value={userEmail}
              onChange={(e) => setUserEmailInStateHandler(e)}
              className="input__field"
              type="text"
              placeholder={t("phone_number")}
              name="phonenumber"
            />
          </div>

          {/* <div className="flex flex-col gap-4 w-full ">
            <label className="font-bold" htmlFor="password">
              {t("password")}
            </label>
            <div className="relative w-full flex items-center">
              <div
                className="cursor-pointer text-xl z-10 mx-1 absolute left-2 "
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
                className="ltr:pr-9 pl-9 input__field"
              />
            </div>
          </div> */}

          <div className="gap-y-2 flex flex-col">
            <label className="font-bold" htmlFor="password">
              {t("password")}
            </label>
            <div className="input__field rtl:pl-3 ltr:pr-3 flex items-center focus-within:ring-secondary-0 focus-within:ring-2">
              <input
                id="password"
                type={`${isShowPassword ? "text" : "password"}`}
                value={userPass}
                placeholder={t("password")}
                name="pass"
                onChange={(e) => setUserPassInStateHandler(e)}
                className=" h-full w-full py-1 rtl:pl-1 ltr:pr-1 outline-none border-none bg-transparent"
              />
              <IoMdEye className="text-2xl" />
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
                <div className="w-8 h-4 rounded-full shadow-inner dark:bg-primary-100 peer-checked:dark:bg-green-400  hover:outline hover:outline-primary-100 hover:outline-offset-2"></div>
                <div className="absolute inset-y-0 left-0 w-2 h-2 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-primary-800"></div>
              </span>
            </label>
          </div>
          <button
            onClick={validate}
            className="bg-success rounded-full w-full text-center text-secondary-0 py-2 font-bold mt-4 hover:scale-105 transition"
          >
            {t("log_in")}
          </button>
          <span className="text-center mt-4 underline hover:text-success">
            {t("forgot_your_password")}
          </span>
        </form>
        <div className="w-full h-[1px] bg-primary-800 rounded"></div>
        <button className="text-primary-100">
          {t("have_account")}
          <Link
            to={"/signup"}
            className="underline text-secondary-0 hover:bg-success ml-2"
          >
            {t("sign_up_for_spotify")}
          </Link>
        </button>
      </div>
    </div>
  );
}
