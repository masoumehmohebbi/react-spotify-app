import DashboardHeader from "../features/admin/DashboardHeader";
import Users from "../features/admin/Users";

const AdminDashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="text-secondary-0 w-full p-5 h-screen">
        <h2>main items here</h2>
        <Users />
      </div>
    </>
  );
};

export default AdminDashboard;
