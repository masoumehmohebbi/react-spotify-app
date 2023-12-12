import DashboardHeader from "../features/admin/DashboardHeader";
import Users from "../features/admin/Users";

const AdminDashboard = () => {
  return (
    <>
      <div className="text-secondary-0 w-full px-5">
        <Users />
      </div>
    </>
  );
};

export default AdminDashboard;
