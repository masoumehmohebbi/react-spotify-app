import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useOpenModal } from "../context/OpenModalContext";
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
    title: "Persian",
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
export const Modal = () => {
  const { isOpen, setIsOpen } = useOpenModal();

  const navigate = useNavigate();
  const [langCode, setLangCode] = useState(localStorage.getItem("i18nextLng"));

  const handleLanguageClick = (code) => {
    setLangCode(code);
    navigate(`?lng=${code}`);
    window.location.reload();
    console.log(langCode);
  };
  if (!isOpen) return null;
  return (
    <div>
      <div className="w-full h-screen fixed top-0 z-40 opacity-70 bg-primary-900"></div>
      <div className="flex items-center justify-center w-full h-screen absolute top-0 z-50">
        <div className="z-50 w-11/12 lg:w-1/2  bg-primary-700 absolute top-0 h-fit mt-24 rounded">
          <div className="w-full flex-col flex justify-between p-4 text-secondary-50 border-b border-b-gray-700">
            <div className="flex justify-between w-full">
              <h4 className="text-xl font-bold">زبانی را انتخاب کنید</h4>
              <AiOutlineClose
                className="cursor-pointer p-2 rounded-full bg-primary-800 text-secondary-0 text-4xl "
                onClick={() => setIsOpen(false)}
              />
            </div>
            <p className="text-secondary-50 mt-4">
              با این انتخاب زبان نوشتاری open.spotify.com به‌روزرسانی می‌شود.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 py-6 px-8">
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
