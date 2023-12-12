import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiScrollDuotone } from "react-icons/pi";
import { MdArrowDropDown } from "react-icons/md";
import Tippy from "@tippyjs/react";

export function AdminProfile() {
  return (
    <Tippy
      interactive={true}
      trigger="click"
      placement="bottom"
      content={
        <div
          className={`transition-all  text-primary-50  left-0 rounded p-2 flex
            flex-col gap-4 `}
        >
          <div className="flex items-center justify-end gap-2">
            <span>معصومه محبی</span>
            <CiUser />
          </div>
          <div className="flex items-center gap-2 justify-end">
            <span>Mm12345687</span>
            <RiLockPasswordLine />
          </div>
          <div className="flex items-center gap-2 justify-end">
            <span>Admin</span>
            <PiScrollDuotone />
          </div>
        </div>
      }
    >
      <div className="flex items-center justify-end gap-2 cursor-pointer">
        <MdArrowDropDown className="text-2xl text-secondary-0" />
        <h3 className="text-secondary-0 font-bold">نیلوفر پلوانه</h3>
        <div className="w-9 h-9 xl:w-12 xl:h-12 bg-primary-400 rounded-full border "></div>
      </div>
    </Tippy>
  );
}
