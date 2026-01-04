import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="admin-wrapper">
      <AdminHeader />
      <main className="admin-content">
        <Outlet /> {/* Dashboard, products, dll muncul di sini */}
      </main>
    </div>
  );
};

export default AdminLayout;
