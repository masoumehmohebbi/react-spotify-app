import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import PasswordField from "../../ui/PasswordField";
import { useState } from "react";

export const SendOtpForm = ({ onSubmit, isSendingOtp, register, errors }) => {
  const { t } = useTranslation();
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="w-full mx-auto md:max-w-3xl flex items-center justify-center md:mt-8">
      <div className="bg-primary-900 text-secondary-0 py-20 md:px-24 rounded-xl w-full flex items-center justify-center flex-col gap-12">
        <h1 className="text-4xl xl:text-5xl px-5 md:px-0 text-center font-bold tracking-wide">
          {t("sign_up_to_start_listening")}
        </h1>

        <form className="w-3/4 flex flex-col gap-y-7 mt-8" onSubmit={onSubmit}>
          <TextField
            label={t("first_name")}
            id="firstname"
            name="firstName"
            type="text"
            placeholder={t("first_name")}
            register={register}
            required
            validationSchema={{
              required: "نام ضروری است",
            }}
            errors={errors}
          />

          <TextField
            label={t("last_name")}
            id="lastname"
            name="lastName"
            type="text"
            placeholder={t("last_name")}
            register={register}
            required
            errors={errors}
            validationSchema={{
              required: "فامیلی ضروری است",
            }}
          />

          <TextField
            label={t("phone_number")}
            id="number"
            type="number"
            name="phoneNumber"
            placeholder={t("phone_number")}
            register={register}
            required
            errors={errors}
            validationSchema={{
              required: "شماره موبایل ضروری است",
              minLength: {
                value: 11,
                message: "شماره موبایل باید 11 رقم باشد",
              },
            }}
          />

          <PasswordField
            onClick={() => setIsShowPassword((prev) => !prev)}
            isShowPass={isShowPassword}
            name="password"
            register={register}
            required
            errors={errors}
            validationSchema={{
              required: "رمز ضروری است",
              minLength: {
                value: 8,
                message: "رمز باید بیشتر از 8 رقم باشد",
              },
            }}
          />

          {isSendingOtp ? (
            <Loading height="56px" />
          ) : (
            <button type="submit" className="btn btn--primary">
              {t("next")}
            </button>
          )}
        </form>

        <div className="w-full h-[1px] bg-primary-800 rounded"></div>

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
