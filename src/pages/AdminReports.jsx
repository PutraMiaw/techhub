const AdminReports = () => {
  return (
    <div className="admin-page">
      <h1>Laporan Penjualan</h1>
      <p className="admin-note">Data penjualan bulan ini (demo static)</p>

      <div className="admin-stats">
        <div className="stat-card">
          <h3>Total Penjualan</h3>
          <p className="stat-number">Rp 85.500.000</p>
        </div>
        <div className="stat-card">
          <h3>Jumlah Order</h3>
          <p className="stat-number">142</p>
        </div>
        <div className="stat-card">
          <h3>Produk Terlaris</h3>
          <p className="stat-number">iPhone 15 Pro</p>
        </div>
        <div className="stat-card">
          <h3>Rata-rata Order</h3>
          <p className="stat-number">Rp 601.408</p>
        </div>
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center", color: "#6b7280" }}>
        <p>
          Grafik penjualan dan laporan detail akan ditambahkan dengan backend
          nanti.
        </p>
      </div>
    </div>
  );
};

export default AdminReports;
