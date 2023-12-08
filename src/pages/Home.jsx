import { useOpenModal } from "../context/OpenModalContext";
import { Footer } from "../ui/Footer";
import { Modal } from "../ui/Modal";
import Navbar from "../ui/Navbar";
import { SideBar } from "../ui/SideBar";
import PlayListContainer from "./PlayListContainer";

export const Home = () => {
  const { isOpen } = useOpenModal();
  console.log(isOpen);
  return (
    <>
      <div className="grid grid-cols-8 gap-x-2 mb-2">
        <div className="col-span-3 lg:col-span-2">
          <SideBar />
        </div>
        <div className="col-span-8 pb-5 md:col-span-5 lg:col-span-6 flex flex-col bg-primary-800 rounded-lg">
          <Navbar />
          <PlayListContainer />
          <Footer />
        </div>
      </div>
      <Modal />
    </>
  );
};
