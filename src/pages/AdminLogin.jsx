import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Username dan password harus diisi!");
      return;
    }

    setLoading(true);

    // Login sebagai admin
    const success = login(username, password, "admin");

    if (success) {
      // Setelah login admin berhasil, arahkan ke dashboard admin
      navigate("/admin/dashboard");
    }

    setLoading(false);
  };

  return (
    <div className="login-register-container">
      <div className="checkout-form">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#1e40af",
          }}
        >
          Login Admin
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username admin"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="btn"
            style={{ width: "100%", marginTop: "1rem" }}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login Admin"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
