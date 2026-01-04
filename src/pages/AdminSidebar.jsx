import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminSidebar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
        <p>Selamat datang, {currentUser?.username}</p>
      </div>

      <nav className="sidebar-menu">
        <Link to="/admin/dashboard" className="sidebar-link">
          Dashboard
        </Link>
        <Link to="/admin/products" className="sidebar-link">
          Kelola Produk
        </Link>
        <Link to="/admin/users" className="sidebar-link">
          Kelola User
        </Link>
        <Link to="/admin/reports" className="sidebar-link">
          Laporan
        </Link>
        <button onClick={handleLogout} className="sidebar-link logout-btn">
          Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
