import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <header className="admin-header">
      <div className="admin-nav-container">
        <Link to="/admin/dashboard" className="admin-logo">
          Admin Panel
        </Link>

        {/* Desktop Menu */}
        <nav className="admin-nav-links desktop-only">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/products">Kelola Produk</Link>
          <Link to="/admin/users">Kelola User</Link>
          <Link to="/admin/reports">Laporan</Link>
          <button onClick={handleLogout} className="admin-logout-btn">
            Logout ({currentUser?.username})
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <nav className="admin-mobile-menu">
            <Link
              to="/admin/dashboard"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link to="/admin/products" onClick={() => setMobileMenuOpen(false)}>
              Kelola Produk
            </Link>
            <Link to="/admin/users" onClick={() => setMobileMenuOpen(false)}>
              Kelola User
            </Link>
            <Link to="/admin/reports" onClick={() => setMobileMenuOpen(false)}>
              Laporan
            </Link>
            <button onClick={handleLogout} className="admin-logout-btn mobile">
              Logout ({currentUser?.username})
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
