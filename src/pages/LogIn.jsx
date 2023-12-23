import { Link } from "react-router-dom";
import { CgDanger } from "react-icons/cg";
import { useState } from "react";
import { validEmail, validPassword } from "../features/auth/Regex";
import { useTranslation } from "react-i18next";
import TextField from "../ui/TextField";
import PasswordField from "../ui/PasswordField";

export default function LogIn() {
  const { t } = useTranslation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [error, setError] = useState(false);

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
          <div className="bg-error w-full flex items-center justify-end gap-4 px-4 py-2 rounded">
            <p className="text-md">
              {error && <p>{t("invalid_pass_email")}</p>}
            </p>
            <CgDanger className="text-2xl" />
          </div>
        )}
        <form className="w-3/4 flex flex-col gap-y-7 mt-8">
          <TextField
            label={t("phone_number")}
            id="phonenumber"
            type="text"
            placeholder={t("phone_number")}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <PasswordField
            onChange={(e) => setUserPass(e.target.value)}
            onClick={() => setIsShowPassword((prev) => !prev)}
            isShowPass={isShowPassword}
            value={userPass}
          />

          <div className="flex justify-end w-full mt-4">
            <label
              htmlFor="Toggle1"
              className="inline-flex items-center gap-2  cursor-pointer "
            >
              <span className="text-sm">{t("remember_me")}</span>
              <span className="relative">
                <input id="Toggle1" type="checkbox" className="hidden peer" />
                <div className="w-9 h-5 rounded-full shadow-inner bg-secondary-200 peer-checked:bg-success  hover:outline-primary-100 hover:outline-offset-2"></div>
                <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-primary-800"></div>
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
            className="underline text-secondary-0 hover:text-success mx-2"
          >
            {t("sign_up_for_spotify")}
          </Link>
        </button>
      </div>
    </div>
  );
}
