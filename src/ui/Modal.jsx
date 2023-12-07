import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const languages = [
  {
    title: "English",
    code: "en",
  },
  {
    title: "Chinese",
    code: "zh",
  },
  {
    title: "فارسی",
    code: "fa",
    dir: "rtl",
  },
  {
    title: "French ",
    code: "fr",
  },
  {
    title: "Hindi",
    code: "hi",
  },
  {
    title: "Spanish",
    code: "es",
  },
];
export const Modal = ({ isShowModalHandler }) => {
  const navigate = useNavigate();
  const [langCode, setLangCode] = useState(localStorage.getItem("i18nextLng"));

  const handleLanguageClick = (code) => {
    setLangCode(code);
    navigate(`?lng=${code}`);
    window.location.reload();
    console.log(langCode);
  };

  return (
    <div>
      <div className="w-full h-screen absolute top-0 z-40 opacity-70 bg-primary-900"></div>
      <div className="flex items-center justify-center w-full h-screen absolute top-0 z-50">
        <div className="z-50 w-1/2  bg-primary-700 absolute top-0 h-fit mt-24 rounded">
          <div className="w-full flex items-center justify-between p-4 text-secondary-50 border-b border-b-gray-700">
            <div>
              <h4 className="text-xl font-bold">زبانی را انتخاب کنید</h4>
              <p className="text-secondary-50 mt-4">
                با این انتخاب زبان نوشتاری open.spotify.com به‌روزرسانی می‌شود.
              </p>
            </div>
            <AiOutlineClose
              className="cursor-pointer p-2 rounded-full bg-primary-800 text-secondary-0 text-4xl "
              onClick={isShowModalHandler}
            />
          </div>
          <ul className="grid grid-cols-4 gap-6 py-6 px-8">
            {languages.map((lan) => (
              <li
                key={lan.title}
                className="flex flex-col gap-1 cursor-pointer hover:bg-primary-600 bg-opacity-1 px-2 py-1 duration-500"
                onClick={() => handleLanguageClick(lan.code)}
              >
                <span className="text-secondary-0">{lan.title}</span>
                <span className="text-secondary-50 text-sm">{lan.code}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
