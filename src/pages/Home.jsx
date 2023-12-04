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
        <div className="px-5 py-3 mb-11">
          <h1 className="text-2xl font-bold text-secondary-0">
            فهر‌ست‌های پخش اسپاتیفای
          </h1>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
