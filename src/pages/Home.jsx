import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { SideBar } from "../ui/SideBar";

export const Home = () => {
  return (
    <div className="grid grid-cols-8 gap-x-2">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-6 flex flex-col bg-primary-800 rounded-lg">
        <div>
          <Header />
        </div>
        <div className="bg-slate-50">content...</div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
