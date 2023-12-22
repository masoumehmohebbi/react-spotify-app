import { Link } from "react-router-dom";
// import { CgDanger } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import googleLogo from "./../../assets/images/google.svg";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import PasswordField from "../../ui/PasswordField";
import { useState } from "react";

export const SendOtpForm = ({
  phoneNumber,
  onChange,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  password,
  setPassword,
  onSubmit,
  isSendingOtp,
}) => {
  const { t } = useTranslation();
  const [isShowPassword, setIsShowPassword] = useState(false);

  //   toast.success(data.message)
  //   toast.error(error?.response?.data?.message)

  //   const [err, setErrr] = useState(false);

  //   const validate = (event) => {
  //     event.preventDefault();
  //     if (!validEmail.test("userEmail")) {
  //       setErrr(true);
  //     }
  //     if (!validPassword.test(userPass)) {
  //       setErrr(true);
  //     }
  //   };

  return (
    <div className="w-full mx-auto md:max-w-3xl flex items-center justify-center md:mt-8">
      <div className="bg-primary-900 text-secondary-0 py-20 md:px-24 rounded-xl w-full flex items-center justify-center flex-col gap-12">
        <h1 className="text-4xl xl:text-5xl px-5 md:px-0 text-center font-bold tracking-wide">
          {t("sign_up_to_start_listening")}
        </h1>
        {/* {err && (
          <div className="bg-error w-full flex items-center justify-end gap-4 px-4 py-2 rounded">
            <p className="text-md">{err && <p>ایمیل معتبر نمیباشد</p>}</p>
            <CgDanger className="text-2xl" />
          </div>
        )} */}
        <form className="w-3/4 flex flex-col gap-y-7 mt-8" onSubmit={onSubmit}>
          <TextField
            label={t("first_name")}
            id="firstname"
            type="text"
            placeholder={t("first_name")}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            label={t("last_name")}
            id="lastname"
            type="text"
            placeholder={t("last_name")}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            label={t("phone_number")}
            id="number"
            type="number"
            placeholder={t("phone_number")}
            value={phoneNumber}
            onChange={onChange}
          />
          <PasswordField
            onChange={(e) => setPassword(e.target.value)}
            onClick={() => setIsShowPassword((prev) => !prev)}
            isShowPass={isShowPassword}
            value={password}
          />
          {/* <div className="flex flex-col gap-2 w-full">
            <label className="font-bold" htmlFor="confirmPassword">
              {t("confirm_password")}
            </label>

            <input
              id="confirmPassword"
              className="input__field"
              type="confirmPassword"
              placeholder={t("confirm_password")}
              name="confirmPassword"
            />
          </div> */}

          {isSendingOtp ? (
            <Loading height="56px" />
          ) : (
            <button type="submit" className="btn btn--primary">
              {t("next")}
            </button>
          )}
        </form>
        <div className="flex w-full relative">
          <div className="w-full h-[1px] bg-primary-700 rounded"></div>
          <span className="absolute -top-[10px] z-10 right-[45%] bg-primary-900 px-4 ">
            {t("or")}
          </span>
          <div className="w-full h-[1px] bg-primary-700 rounded"></div>
        </div>
        <div className="flex flex-col gap-4">
          <button className="flex items-center gap-12 rounded-full border px-8 py-2 border-primary-100 hover:border-secondary-0">
            <span className="w-[80%] text-[18px]">
              {t("signup_with_google")}
            </span>
            <img src={googleLogo} alt="googleLogo" className="w-[27px]" />
          </button>
        </div>
        <p className="text-primary-100">
          {t("already_have_account")}
          <Link
            to={"/login"}
            className="underline mx-2 text-secondary-0 hover:text-success ml-2"
          >
            {t("log_in")}
          </Link>
        </p>
      </div>
    </div>
  );
};
