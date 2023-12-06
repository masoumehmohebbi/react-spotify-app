import { Link } from "react-router-dom";
import { CgDanger } from "react-icons/cg";
import { useState } from "react";
import { validEmail, validPassword } from "../features/auth/Regex";

export const SignUp = ({ userPass }) => {
  const [userEmail, setUserEmail] = useState("");
  const [err, setErrr] = useState(false);

  const setUserEmailInStateHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const validate = (event) => {
    event.preventDefault();
    if (!validEmail.test(userEmail)) {
      setErrr(true);
    }
    if (!validPassword.test(userPass)) {
      setErrr(true);
    }
  };

  return (
    <div className="w-full mx-auto md:max-w-3xl flex items-center justify-center mt-8">
      <div className="bg-primary-900 text-white py-20 px-24 rounded-xl w-full flex items-center justify-center flex-col gap-12">
        <h1 className="text-5xl font-bold tracking-wide">
        ثبت‌نام در اسپاتیفای
        </h1>
        {err && (
          <div className="bg-red-600 w-full flex items-center justify-end gap-4 px-4 py-2 rounded">
            <p className="text-md">{err && <p>ایمیل معتبر نمیباشد</p>}</p>
            <CgDanger className="text-2xl" />
          </div>
        )}
        <form className="w-3/4 flex flex-col gap-4 mt-8">
          <div className="flex flex-col items-end gap-2 w-full">
            <label className="font-bold" htmlFor="email">
              ایمیل
            </label>

            <input
              id="email"
              value={userEmail}
              onChange={(e) => setUserEmailInStateHandler(e)}
              className="bg-primary-800 rounded border border-gray-400 text-end px-4 py-2 w-full
                                 outline-none focus:outline-white focus:outline-2 focus:border-none "
              type="text"
              placeholder="ایمیل"
              name="email"
            />
          </div>
          <button
            onClick={validate}
            className="bg-green-500 rounded-full w-full text-center text-black py-2 font-bold mt-4 hover:scale-105 transition"
          >
            ثبت نام
          </button>
        </form>
        <div className="flex w-full relative">
          <div className="w-full h-[1px] bg-primary-700 rounded"></div>
          <span className="absolute -top-[10px] z-10 right-[45%] bg-primary-900 px-4 ">
            یا
          </span>
          <div className="w-full h-[1px] bg-primary-700 rounded"></div>
        </div>
        <div className="flex flex-col gap-4">
          <button className="flex items-center gap-12 rounded-full border px-8 py-2 border-gray-600 hover:border-white">
            <span className="w-[80%] text-[18px]">ادامه با گوگل</span>
            <img src="/google.svg" alt="googleLogo" className="w-[27px]" />
          </button>
          <button className="flex items-center gap-12 rounded-full border px-8 py-2 border-gray-600 hover:border-white">
            <span className="w-[80%] text-[18px]">ادامه با فیسبوک</span>
            <img src="/facebook.svg" alt="facebookLogo" className="w-[27px]" />
          </button>
        </div>
        <p className="text-gray-400">
          قبلا ثبت‌نام کرده اید ؟
          <Link
            to={"/login"}
            className="underline text-white hover:text-green-600 ml-2"
          >
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  );
};
