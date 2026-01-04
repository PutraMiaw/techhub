import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Username dan password harus diisi!");
      return;
    }

    setLoading(true);

    // Login sebagai user
    const success = login(username, password, "user");

    if (success) {
      navigate("/"); // Kembali ke home setelah login berhasil
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
          Login User
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
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
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
          Belum punya akun?{" "}
          <Link to="/register" style={{ color: "#3b82f6", fontWeight: "500" }}>
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
