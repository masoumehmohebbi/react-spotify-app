import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TextField from "../../ui/TextField";
import PasswordField from "../../ui/PasswordField";
import { getTokens } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";
import { useForm } from "react-hook-form";

export const LogInForm = () => {
  const { register, getValues } = useForm();
  const { t } = useTranslation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  const { isPending, mutateAsync: mutateAsyncTokens } = useMutation({
    mutationFn: getTokens,
  });

  const logInHandler = async (e) => {
    e.preventDefault();
    console.log(getValues("phoneNumber"));
    try {
      const { data } = await mutateAsyncTokens({
        verified_phone: getValues("phoneNumber"),
        password: getValues("password"),
      });

      document.cookie = `refreshToken=${data.refresh}`;
      document.cookie = `accessToken=${data.access}`;

      toast.success("اطلاعات شما تایید شد‍‍‍، به اسپاتیفای خوش آمدید", {
        icon: "👏",
      });
      navigate("/");
    } catch (error) {
      if (error?.response.status === 401) {
        toast.error("کاربری با این مشخصات وجود ندارد");
      } else if (!getValues("phoneNumber") || !getValues("password")) {
        toast.error("پر کردن تمامی فیلدها الزامیست");
      } else toast.error("شماره موبایل یا رمز اشتباه است");
      // toast.error(error?.response?.data?.detail);
    }
  };

  return (
    <div className="w-full md:max-w-3xl mx-auto flex items-center justify-center md:mt-8">
      <div className="bg-primary-900 text-secondary-0 py-20 md:px-24 rounded-xl w-full flex items-center justify-center flex-col gap-12">
        <h1 className="text-4xl xl:text-5xl px-5 md:px-0 text-center font-bold tracking-wide">
          {t("login_to_spotify")}
        </h1>

        <form
          onSubmit={logInHandler}
          className="w-3/4 flex flex-col gap-y-7 mt-8"
        >
          <TextField
            name="phoneNumber"
            label={t("phone_number")}
            id="phonenumber"
            type="number"
            placeholder={t("phone_number")}
            register={register}
            required
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
            validationSchema={{
              required: "رمز ضروری است",
              minLength: {
                value: 8,
                message: "رمز باید بیشتر از 8 رقم باشد",
              },
            }}
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

          {isPending ? (
            <Loading height="56px" />
          ) : (
            <button
              type="submit"
              className="bg-success rounded-full w-full text-center text-secondary-0 py-2 font-bold mt-4 hover:scale-105 transition"
            >
              {t("log_in")}
            </button>
          )}
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
};
