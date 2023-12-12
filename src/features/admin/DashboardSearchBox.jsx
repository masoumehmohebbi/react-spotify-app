import { BiSearch } from "react-icons/bi";

export function DashboardSearchBox() {
  return (
    <div className="justify-between w-full px-3 flex bg-primary-600 items-center rounded-[500px] ">
      <BiSearch className="text-2xl text-secondary-50" />
      <input
        className="py-2 text-right text-secondary-0 text-base px-3 bg-transparent outline-none duration-500 ease-in-out transition-all w-[90px] focus:w-[190px]"
        type="text"
        placeholder="...جستجو"
      />
    </div>
  );
}
