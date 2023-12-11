import { Link } from "react-router-dom";
import { CgDanger } from "react-icons/cg";
import { useState } from "react";
import { validEmail, validPassword } from "../features/auth/Regex";
import { useTranslation } from "react-i18next";
import googleLogo from "./../assets/images/google.svg";

export const SignUp = ({ userPass }) => {
  const { t } = useTranslation();
  const [err, setErrr] = useState(false);

  const validate = (event) => {
    event.preventDefault();
    if (!validEmail.test("userEmail")) {
      setErrr(true);
    }
    if (!validPassword.test(userPass)) {
      setErrr(true);
    }
  };

  return (
    <div className="w-full mx-auto md:max-w-3xl flex items-center justify-center md:mt-8">
      <div className="bg-primary-900 text-secondary-0 py-20 md:px-24 rounded-xl w-full flex items-center justify-center flex-col gap-12">
        <h1 className="text-4xl xl:text-5xl px-5 md:px-0 text-center font-bold tracking-wide">
          {t("sign_up_to_start_listening")}
        </h1>
        {err && (
          <div className="bg-red-600 w-full flex items-center justify-end gap-4 px-4 py-2 rounded">
            <p className="text-md">{err && <p>ایمیل معتبر نمیباشد</p>}</p>
            <CgDanger className="text-2xl" />
          </div>
        )}
        <form className="w-3/4 flex flex-col gap-4 mt-8">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold" htmlFor="firstname">
              First name
            </label>

            <input
              id="firstname"
              className="bg-primary-800 rounded border px-4 py-2 w-full
                                 outline-none focus:border-none duration-500 focus:ring-secondary-0 focus:ring-2"
              type="text"
              placeholder="E.g. john"
              name="firstname"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold" htmlFor="lastname">
              Last name
            </label>

            <input
              id="lastname"
              className="bg-primary-800 rounded border border-gray-400 px-4 py-2 w-full
                                 outline-none focus:outline-white focus:outline-2 focus:border-none "
              type="text"
              placeholder="E.g. smith"
              name="lastname"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold" htmlFor="number">
              Number
            </label>

            <input
              id="number"
              className="bg-primary-800 rounded border border-gray-400 px-4 py-2 w-full
                                 outline-none focus:outline-white focus:outline-2 focus:border-none "
              type="number"
              placeholder="E.g. 9999 999 9999"
              name="number"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold" htmlFor="password">
              Password
            </label>

            <input
              id="password"
              className="bg-primary-800 rounded border border-gray-400 px-4 py-2 w-full
                                 outline-none focus:outline-white focus:outline-2 focus:border-none "
              type="password"
              placeholder="E.g. ******"
              name="password"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold" htmlFor="confirmPassword">
              Confirm password
            </label>

            <input
              id="confirmPassword"
              className="bg-primary-800 rounded border border-gray-400 px-4 py-2 w-full
                                 outline-none focus:outline-white focus:outline-2 focus:border-none "
              type="confirmPassword"
              placeholder="E.g. ******"
              name="confirmPassword"
            />
          </div>
          <button
            onClick={validate}
            className="bg-green-500 rounded-full w-full text-center text-black py-2 font-bold mt-4 hover:scale-105 transition"
          >
            Next
          </button>
        </form>
        <div className="flex w-full relative">
          <div className="w-full h-[1px] bg-primary-700 rounded"></div>
          <span className="absolute -top-[10px] z-10 right-[45%] bg-primary-900 px-4 ">
            {t("or")}
          </span>
          <div className="w-full h-[1px] bg-primary-700 rounded"></div>
        </div>
        <div className="flex flex-col gap-4">
          <button className="flex items-center gap-12 rounded-full border px-8 py-2 border-gray-600 hover:border-white">
            <span className="w-[80%] text-[18px]">
              {t("signup_with_google")}
            </span>
            <img src={googleLogo} alt="googleLogo" className="w-[27px]" />
          </button>
        </div>
        <p className="text-gray-400">
          {t("already_have_account")}
          <Link
            to={"/login"}
            className="underline text-white hover:text-green-600 ml-2"
          >
            {t("log_in")}
          </Link>
        </p>
      </div>
    </div>
  );
};
