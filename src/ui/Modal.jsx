import { AiOutlineClose } from "react-icons/ai";
const langs = [
  {
    title: "English",
    lang: "English",
  },
  {
    title: "العربیه",
    lang: "Arabic",
  },
  {
    title: "فارسی",
    lang: "Persian",
  },
  {
    title: "اردو",
    lang: "Urdu",
  },
  {
    title: "عربی مصری",
    lang: "َArabic (Egypt)",
  },
];
export const Modal = ({ isShowModalHandler }) => {
  return (
    <div>
      <div className="w-full h-screen bg-primary-800 absolute top-0 z-40 opacity-70"></div>
      <div className="flex items-center justify-center w-full h-screen absolute top-0 z-50">
        <div className="z-50 w-1/2  bg-primary-800 absolute top-0 h-[550px] mt-24 rounded">
          <div className="w-full flex items-center justify-between p-4 text-secondary-50 border-b border-b-gray-700">
            <div>
              <h4 className="text-xl font-bold">زبانی را انتخاب کنید</h4>
              <p className="text-secondary-50 mt-4">
                با این انتخاب زبان نوشتاری open.spotify.com به‌روزرسانی می‌شود.
              </p>
            </div>
            <AiOutlineClose
              className="cursor-pointer p-2 rounded-full bg-primary-800 text-white text-4xl "
              onClick={isShowModalHandler}
            />
          </div>
          <ul className="grid grid-cols-4 gap-6 py-6 px-8">
            {langs.map((lan) => (
              <li key={lan.title} className="flex flex-col gap-2">
                <span className="text-white">{lan.title}</span>
                <span className="text-gray-400">{lan.lang}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
