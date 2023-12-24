import { Link } from "react-router-dom";

const PlaySongModal = () => {
  return (
    <div className="w-full h-screen bg-[#000000b5] absolute top-0 z-40 flex flex-col gap-2 items-center justify-center">
      <div className="bg-gradient-to-t from-secondary-800 to-secondary-200  w-[50%] rounded-xl z-50 p-12 flex items-center justify-between gap-x-8">
        <div className="text-white flex flex-col items-center gap-12">
          <h2 className="text-4xl font-bold text-center leading-[45px]">با حساب رایگان اسپاتیفای گوش کردن را شروع کنید</h2>
          <button className="bg-success px-4 py-2 text-secondary-900 font-bold rounded-2xl  hover:scale-110">
            ثبت نام رایگان
          </button>
          <p>
            <span className="text-secondary-100">
              از قبل حساب دارید؟
            </span>
            <Link className="font-bold mr-2 decoration-1 hover:underline" to={"/login"}>ورود به سیستم</Link>
          </p>
        </div>
        <img
          className="h-full w-full rounded-xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1RgiRvLaXSBZOj9RHxmXLeSIWAoRPxwmhA&usqp=CAU" alt="cover" />
      </div>
      <div className="cursor-pointer text-[18px] text-secondary-400 hover:text-secondary-0">
        بستن
      </div>
    </div>
  )
};

export default PlaySongModal;
