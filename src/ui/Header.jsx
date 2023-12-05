import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary-900 bg-opacity-50 p-5 flex justify-between text-primary-100">
      <div className="flex gap-x-2">
        <button className="bg-primary-900 bg-opacity-70 h-8 w-8 rounded-full border-none flex justify-center items-center">
          <HiOutlineChevronRight className="text-2xl text-secondary-50" />
        </button>
        <button className="bg-primary-900 bg-opacity-70 h-8 w-8 rounded-full border-none flex justify-center items-center">
          <HiOutlineChevronLeft className="text-2xl text-secondary-50" />
        </button>
      </div>
      <div className="flex gap-x-6">
        <button className="hover:scale-110 text-secondary-100">ثبت نام</button>
        <Link to={"/login"} className="hover:scale-110 rounded-[500px] border-none bg-white py-2 px-6  font-bold text-primary-900">
          ورود به سیستم
        </Link>
      </div>
    </div>
  );
};

export default Header;
