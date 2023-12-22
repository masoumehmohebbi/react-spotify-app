import { useTranslation } from "react-i18next";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const PasswordField = ({ onChange, isShowPass, value, onClick }) => {
  const { t } = useTranslation();
  return (
    <div className="gap-y-2 flex flex-col w-full">
      <label className="font-bold" htmlFor="password">
        {t("password")}
      </label>
      <div className="input__field rtl:pl-3 ltr:pr-3 flex items-center focus-within:ring-secondary-0 focus-within:ring-2">
        <input
          id="password"
          type={`${isShowPass ? "text" : "password"}`}
          value={value}
          placeholder={t("password")}
          name="pass"
          onChange={onChange}
          className=" h-full w-full py-1 rtl:pl-1 ltr:pr-1 outline-none border-none bg-transparent"
        />

        <div className="text-2xl cursor-pointer" onClick={onClick}>
          {isShowPass ? <IoMdEye /> : <IoMdEyeOff />}
        </div>
      </div>
    </div>
  );
};

export default PasswordField;
