import { useEffect, useState } from "react";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("usersData");
    if (stored) {
      const parsed = JSON.parse(stored);
      // Gabung user biasa + admin
      const allUsers = [...(parsed.users || []), ...(parsed.admins || [])];
      setUsers(allUsers);
    }
  }, []);

  return (
    <div className="admin-page">
      <h1>Kelola User</h1>
      <p className="admin-note">Total User Terdaftar: {users.length}</p>

      {users.length === 0 ? (
        <p>Belum ada user terdaftar.</p>
      ) : (
        <>
          {/* Desktop: Tabel Normal */}
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.email || "-"}</td>
                    <td>
                      <span
                        style={{
                          padding: "0.25rem 0.75rem",
                          borderRadius: "20px",
                          fontSize: "0.85rem",
                          fontWeight: "600",
                          background: user.password === "admin123" ? "#dbeafe" : "#fecaca",
                          color: user.password === "admin123" ? "#1e40af" : "#991b1b",
                        }}
                      >
                        {user.password === "admin123" ? "Admin" : "User"}
                      </span>
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

          {/* Mobile: Card View */}
          <div className="admin-table-mobile">
            {users.map((user, index) => (
              <div key={index} className="admin-table-row-card">
                <h4>{user.username}</h4>
                <dl>
                  <dt>Email</dt>
                  <dd>{user.email || "-"}</dd>

                  <dt>Role</dt>
                  <dd>
                    <span
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        background: user.password === "admin123" ? "#dbeafe" : "#fecaca",
                        color: user.password === "admin123" ? "#1e40af" : "#991b1b",
                      }}
                    >
                      {user.password === "admin123" ? "Admin" : "User"}
                    </span>
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
        </>
      )}
    </div>
  );
};

export default AdminUsers;