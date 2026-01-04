const AdminDashboard = () => {
  return (
    <div className="admin-page">
      <h1>Dashboard Admin</h1>
      <p>Selamat datang di panel administrasi TechHub!</p>

      <div className="admin-stats">
        <div className="stat-card">
          <h3>Total Produk</h3>
          <p className="stat-number">24</p>
        </div>
        <div className="stat-card">
          <h3>Total User</h3>
          <p className="stat-number">156</p>
        </div>
        <div className="stat-card">
          <h3>Pending Order</h3>
          <p className="stat-number">8</p>
        </div>
      </div>

      <div className="admin-note">
        <p>Fitur kelola produk, user, dan laporan akan segera aktif.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
