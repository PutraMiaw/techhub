import productsData from "../data/products.json";

const AdminProducts = () => {
  const products = productsData;

  return (
    <div className="admin-page">
      <h1>Kelola Produk</h1>
      <p className="admin-note">Total Produk: {products.length}</p>

      {/* Desktop Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Gambar</th>
              <th>Nama Produk</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Stock</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>Rp {product.price.toLocaleString("id-ID")}</td>
                <td
                  style={{
                    color: product.stock > 0 ? "#059669" : "#dc2626",
                    fontWeight: "600",
                  }}
                >
                  {product.stock} unit
                </td>
                <td>
                  <button className="btn-small btn-outline">Edit</button>
                  <button className="btn-small btn-danger">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="admin-table-mobile">
        {products.map((product) => (
          <div key={product.id} className="admin-table-row-card">
            <h4>{product.name}</h4>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "1rem",
              }}
            />
            <dl>
              <dt>ID</dt>
              <dd>{product.id}</dd>

              <dt>Kategori</dt>
              <dd>{product.category}</dd>

              <dt>Harga</dt>
              <dd>Rp {product.price.toLocaleString("id-ID")}</dd>

              <dt>Stock</dt>
              <dd
                style={{
                  color: product.stock > 0 ? "#059669" : "#dc2626",
                  fontWeight: "600",
                }}
              >
                {product.stock} unit
              </dd>
            </dl>
            <div className="actions">
              <button className="btn btn-outline" style={{ flex: 1 }}>
                Edit
              </button>
              <button className="btn btn-danger" style={{ flex: 1 }}>
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="btn" style={{ marginTop: "2rem" }}>
        + Tambah Produk Baru
      </button>
    </div>
  );
};

export default AdminProducts;
