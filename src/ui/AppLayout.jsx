import { Outlet } from "react-router-dom";
import { useOpenModal } from "../context/OpenModalContext";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { SideBar } from "./SideBar";
import ModalButton from "./ModalButton";
import PlaySongModal from "../features/PlayList/PlaySongModal";
import AudioPlayer from "react-h5-audio-player";
import { useGetSongUrl } from "../features/PlayList/GetSongUrlContext";
import Cookies from "universal-cookie";
import { toast } from "react-hot-toast";

const AppLayout = () => {
  const cookies = new Cookies();
  const token = cookies.get("accessToken");

  const { songUrl, songCover, songTitle, songArtist } = useGetSongUrl();
  const { isOpen } = useOpenModal();
  return (
    <>
      <div
        className={`grid grid-cols-8 gap-x-2 ${
          isOpen ? "overflow-hidden h-screen md:h-auto" : ""
        }`}
      >
        <div className="col-span-3 lg:col-span-2">
          <SideBar />
        </div>
        <div className="col-span-8 pb-5 md:col-span-5 lg:col-span-6 flex flex-col bg-primary-800 rounded-lg">
          <Outlet />
          <Footer>
            <div className="block md:hidden">
              <ModalButton />
            </div>
          </Footer>
        </div>
      </div>
      <Modal />
      {!token && <PlaySongModal />}
      {token && (
        <div className="fixed bottom-0 w-full z-50 bg-primary-900 grid grid-cols-8">
          <span className="col-span-1 flex items-center justify-center gap-x-2">
            <img className="w-16 h-16 rounded-md" src={songCover} alt="" />
            <div className="flex flex-col">
              <span className="text-secondary-0 font-bold">{songTitle}</span>
              <span className="text-secondary-50">{songArtist}</span>
            </div>
          </span>
          <div className="col-span-7">
            <AudioPlayer
              autoPlay={false}
              src={songUrl}
              onPlayError={() =>
                songUrl === "" && toast.error("یک آهنگ انتخاب کنید")
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AppLayout;
