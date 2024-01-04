import { BiHome, BiLibrary, BiSearch } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const footerItems = [
  {
    id: 1,
    to: "/",
    icon: <BiHome className="text-xl sm:text-2xl" />,
    title: "خانه",
  },
  {
    id: 2,
    to: "/search",
    icon: <BiSearch className="text-xl sm:text-2xl" />,
    title: "جستجو",
  },
  {
    id: 3,
    to: "/",
    icon: <BiLibrary className="text-xl sm:text-2xl" />,
    title: "کتابخانه‌شما",
  },
  {
    id: 4,
    to: "/",
    icon: <FaSpotify className="text-xl sm:text-2xl" />,
    title: "Spotify",
  },
];
const FooterMobile = () => {
  return (
    <ul className="px-5 border-t-[1px] py-3 border-primary-700 bg-primary-900 w-full justify-between text-secondary-0 flex md:hidden">
      {footerItems?.map((item) => (
        <NavLink key={item.id} to={item.to}>
          <li className="flex flex-col gap-y-1 text-sm :sm:text-base items-center justify-center">
            {item.icon}
            <span>{item.title}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default FooterMobile;
