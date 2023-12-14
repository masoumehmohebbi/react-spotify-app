import { Outlet } from "react-router-dom";
import { useOpenModal } from "../context/OpenModalContext";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { SideBar } from "./SideBar";
import ModalButton from "./ModalButton";

const AppLayout = () => {
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
    </>
  );
};

export default AppLayout;
