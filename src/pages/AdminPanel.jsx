
import Navbar from "../ui/AdminPanel/Navbar";
import Sidebar from "../ui/AdminPanel/Sidebar";
import AllUsers from "./AdminPanelPages/AllUsers";

export default function AdminPanel() {

    return (
        <>
            <Navbar />
            <div className="w-full flex justify-between ">
                {/* start main */}
                <div className="text-white w-full flex-1 bg-primary-800 m-2">
                    <h2 >main items here</h2>
                    <AllUsers/>
                </div>
                {/* end main */}
                <Sidebar />
            </div>
        </>
    )
}