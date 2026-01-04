import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UserRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Panggil fungsi register dari AuthContext
    const success = register(username, email, password);

    if (success) {
      // Kalau registrasi berhasil, langsung arahkan ke login
      navigate("/login");
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
          Daftar Akun Baru
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value.trim())}
              placeholder="Masukkan username"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              placeholder="Masukkan email"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimal 6 karakter"
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="btn"
            style={{ width: "100%", marginTop: "1rem" }}
            disabled={loading}
          >
            {loading ? "Mendaftar..." : "Daftar"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
          Sudah punya akun?{" "}
          <Link to="/login" style={{ color: "#3b82f6", fontWeight: "500" }}>
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
