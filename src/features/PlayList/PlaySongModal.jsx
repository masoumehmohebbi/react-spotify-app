import { Link } from "react-router-dom";
import { useOpenPlayModal } from "./OpenPlayModalContext";

const PlaySongModal = () => {
  const { isOpen, setIsOpen } = useOpenPlayModal();

  if (!isOpen) return null;
  return (
    // <div className="w-full h-screen bg-[#000000b5] absolute top-0 z-40 flex flex-col gap-2 items-center justify-center">
    //   <div className="bg-gradient-to-t from-secondary-800 to-secondary-200  w-full md:w-1/2 inset-0 md:inset-auto rounded-xl z-50 p-12 flex items-center justify-between gap-x-8">
    //     <div className="text-secondary-0 flex flex-col items-center gap-12">
    //       <h2 className="text-4xl font-bold text-center leading-[45px]">
    //         با حساب رایگان اسپاتیفای گوش کردن را شروع کنید
    //       </h2>

    //       <Link to={"/signup"}>
    //         <button className="bg-success px-4 py-2 text-secondary-900 font-bold rounded-2xl  hover:scale-110">
    //           ثبت نام رایگان
    //         </button>
    //       </Link>
    //       <p>
    //         <span className="text-secondary-100">از قبل حساب دارید؟</span>
    //         <Link
    //           className="font-bold mr-2 decoration-1 hover:underline"
    //           to={"/login"}
    //         >
    //           ورود به سیستم
    //         </Link>
    //       </p>
    //     </div>
    //     <img
    //       className="h-full w-full rounded-xl"
    //       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1RgiRvLaXSBZOj9RHxmXLeSIWAoRPxwmhA&usqp=CAU"
    //       alt="cover"
    //     />
    //   </div>
    //   <div
    //     onClick={() => setIsOpen((prev) => !prev)}
    //     className="cursor-pointer text-[18px] text-secondary-400 hover:text-secondary-0"
    //   >
    //     بستن
    //   </div>
    // </div>

    <div>
      <div className="w-full h-screen fixed top-0 z-50 opacity-70 bg-primary-900 modal-open"></div>
      <div className="flex items-center justify-center w-full h-screen absolute top-0 z-50 ">
        <div className="z-50 w-full md:w-fit inset-0 md:inset-auto p-4 bg-primary-700 fixed flex rounded-md">
          <div className="text-secondary-0 flex flex-col items-center gap-12">
            <h2 className="text-3xl font-bold text-center leading-[45px]">
              با حساب رایگان اسپاتیفای گوش کردن را شروع کنید
            </h2>

            <Link to={"/signup"}>
              <button className="bg-success px-4 py-2 text-secondary-900 font-bold rounded-2xl  hover:scale-110">
                ثبت نام رایگان
              </button>
            </Link>
            <p>
              <span className="text-secondary-100">از قبل حساب دارید؟</span>
              <Link
                className="font-bold mr-2 decoration-1 hover:underline"
                to={"/login"}
              >
                ورود به سیستم
              </Link>
            </p>
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="cursor-pointer btn--secondary border-error text-[18px] text-secondary-400 hover:text-secondary-0"
            >
              بستن
            </div>
          </div>
          {/* <img
            className="h-full w-full rounded-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1RgiRvLaXSBZOj9RHxmXLeSIWAoRPxwmhA&usqp=CAU"
            alt="cover"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default PlaySongModal;
