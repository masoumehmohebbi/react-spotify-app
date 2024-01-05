import { Outlet } from "react-router-dom";
import { useOpenModal } from "../context/OpenModalContext";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { SideBar } from "./SideBar";
import ModalButton from "./ModalButton";
import PlaySongModal from "../features/PlayList/PlaySongModal";
import Cookies from "universal-cookie";
import { ModalComment } from "../features/comment/ModalComment";
import { useOpenCommentModal } from "../features/comment/OpenCommentModalContext";
import { useEffect } from "react";
import FooterMobile from "./FooterMobile";
import { MusicPlayer } from "./MusicPlayer";

const AppLayout = () => {
  const cookies = new Cookies();
  const token = cookies.get("accessToken");
  const { isOpen } = useOpenModal();
  const { isOpen: isOpenCmt } = useOpenCommentModal();

  useEffect(() => {
    if (document.documentElement.style.width >= "786px") {
      if (isOpen || isOpenCmt) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "10px";
      } else {
        document.body.style.overflow = "unset";
        document.body.style.paddingRight = "0px";
      }
    }
  }, [isOpen, isOpenCmt]);

  return (
    <>
      <div
        className={`grid grid-cols-8 gap-x-2 ${isOpen || isOpenCmt ? "" : ""}`}
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
      <ModalComment />
      {!token && <PlaySongModal />}
      {token && <MusicPlayer />}
      {!token && (
        <div className="sticky mt-auto bottom-0 w-full z-40 bg-primary-900">
          <FooterMobile />
        </div>
      )}
    </>
  );
};

export default AppLayout;
