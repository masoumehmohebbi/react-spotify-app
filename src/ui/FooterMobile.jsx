import { useTranslation } from "react-i18next";
import { BiHome, BiLibrary, BiSearch } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FooterMobile = () => {
  const { t } = useTranslation();
  const footerItems = [
    {
      id: 1,
      to: "/",
      icon: <BiHome className="text-xl sm:text-2xl" />,
      title: t("home"),
    },
    {
      id: 2,
      to: "/search",
      icon: <BiSearch className="text-xl sm:text-2xl" />,
      title: t("search"),
    },
    {
      id: 3,
      to: "/ibrary",
      icon: <BiLibrary className="text-xl sm:text-2xl" />,
      title: t("your-library"),
    },
    {
      id: 4,
      to: "/",
      icon: <FaSpotify className="text-xl sm:text-2xl" />,
      title: "Spotify",
    },
  ];
  return (
    <ul className="px-5 border-t-[1px] py-3 border-primary-700 bg-primary-900 w-full justify-between text-secondary-0 flex md:hidden">
      {footerItems?.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#B3B3B3",
          })}
        >
          <li
            className={` flex flex-col font-semibold gap-y-1 text-sm :sm:text-base items-center justify-center`}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default FooterMobile;
