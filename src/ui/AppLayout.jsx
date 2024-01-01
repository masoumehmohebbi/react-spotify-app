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

  const { songUrl } = useGetSongUrl();
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
        <AudioPlayer
          autoPlay={false}
          src={songUrl}
          onPlayError={() =>
            songUrl === "" && toast.error("یک آهنگ انتخاب کنید")
          }
        />
      )}
    </>
  );
};

export default AppLayout;
