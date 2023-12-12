
import Navbar from "../ui/AdminPanel/Navbar";
import Sidebar from "../ui/AdminPanel/Sidebar";

export default function AdminPanel({children}) {

    return (
        <>
            <Navbar />
            <div className="w-full flex justify-between ">
                {/* start main */}
                <div className="text-white w-full flex-1 bg-primary-800 m-2">
                    <h2 >main items here</h2>
                    {children}
                </div>
                {/* end main */}
                <Sidebar />
            </div>
        </>
    )
}