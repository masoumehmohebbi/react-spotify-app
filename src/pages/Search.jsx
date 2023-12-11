import { useTranslation } from "react-i18next";
import Navbar from "../ui/Navbar";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <>
      <Navbar>
        <div className="hidden md:block rounded-[500px] md:max-w-[12rem] lg:max-w-md xl:max-w-xl focus-within:border-secondary-0 border-primary-600 border-2 duration-300 w-full">
          <div className="justify-between px-3 flex bg-primary-600 items-center rounded-[500px]">
            <SearchField />
          </div>
        </div>
      </Navbar>

      <div className="px-5 py-5 mb-6 bg-secondary-0">items...</div>
    </>
  );
};

export default Search;

export function SearchField() {
  const { t } = useTranslation();
  return (
    <>
      <input
        className="py-3 px-3 w-full bg-transparent outline-none "
        type="text"
        placeholder={t("what_to_listen")}
      />
      <BiSearch className="text-2xl text-primary-50 " />
    </>
  );
}
