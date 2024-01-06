import { useTranslation } from "react-i18next";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const PasswordField = ({
  onChange,
  isShowPass,
  value,
  onClick,
  name,
  register,
  required,
  errors,
  validationSchema,
}) => {
  const { t } = useTranslation();
  return (
    <div className="gap-y-2 flex flex-col w-full">
      <label className="font-bold" htmlFor="password">
        {t("password")} {required && <span className="text-error">*</span>}
      </label>
      <div className="input__field rtl:pl-3 ltr:pr-3 flex items-center focus-within:ring-secondary-0 focus-within:ring-2">
        <input
          {...register(name, validationSchema)}
          id="password"
          type={`${isShowPass ? "text" : "password"}`}
          value={value}
          placeholder={t("password")}
          onChange={onChange}
          className=" h-full w-full py-1 rtl:pl-1 ltr:pr-1 outline-none border-none bg-transparent"
        />

        <div className="text-2xl cursor-pointer" onClick={onClick}>
          {isShowPass ? <IoMdEye /> : <IoMdEyeOff />}
        </div>
      </div>
      {errors && errors[name] && (
        <span className="mt-2 block text-error text-sm">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default PasswordField;
