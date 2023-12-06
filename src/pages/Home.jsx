import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { SideBar } from "../ui/SideBar";
import PlayListContainer from "./PlayListContainer";

export const Home = () => {
  return (
    <div className="grid grid-cols-8 gap-x-2 mb-2">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-6 flex flex-col bg-primary-800 rounded-lg">
        <Header />
        <PlayListContainer />
        <Footer />
      </div>
    </div>
  );
};
